"use client";

import React, {
  useRef,
  useEffect,
  useCallback,
  useMemo,
  useState,
} from "react";

// Lazy load GSAP to reduce initial bundle (important for Next.js)
let gsap = null;
let InertiaPlugin = null;

const loadGSAP = async () => {
  if (gsap) return;
  const gsapModule = await import("gsap");
  gsap = gsapModule.default;
  const inertiaModule = await import("gsap/InertiaPlugin");
  InertiaPlugin = inertiaModule.InertiaPlugin;
  gsap.registerPlugin(InertiaPlugin);
};

// Throttle function with proper typing
const throttle = (func, limit: number) => {
  let lastCall = 0;
  return function (...args) {
    const now = performance.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(this, args);
    }
  };
};

// Convert HEX to RGB with validation
function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const m = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (!m) return { r: 0, g: 0, b: 0 };
  return {
    r: parseInt(m[1], 16),
    g: parseInt(m[2], 16),
    b: parseInt(m[3], 16),
  };
}

interface DotState {
  cx: number;
  cy: number;
  xOffset: number;
  yOffset: number;
  _inertiaApplied: boolean;
}

interface PointerState {
  x: number;
  y: number;
  vx: number;
  vy: number;
  speed: number;
  lastTime: number;
  lastX: number;
  lastY: number;
}

interface DotGridProps {
  dotSize?: number;
  gap?: number;
  proximity?: number;
  speedTrigger?: number;
  shockRadius?: number;
  shockStrength?: number;
  maxSpeed?: number;
  resistance?: number;
  returnDuration?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Interactive dot grid component with physics-based animations
 * Optimized for Next.js with proper SSR handling and dynamic imports
 */
const DotGrid = React.forwardRef<HTMLDivElement, DotGridProps>(
  (
    {
      dotSize = 5,
      gap = 10,
      proximity = 200,
      speedTrigger = 100,
      shockRadius = 100,
      shockStrength = 200,
      maxSpeed = 5000,
      resistance = 100,
      returnDuration = 3,
      className = "",
      style,
    },
    ref,
  ) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const dotsRef = useRef<DotState[]>([]);
    const pointerRef = useRef<PointerState>({
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      speed: 0,
      lastTime: 0,
      lastX: 0,
      lastY: 0,
    });

    const [baseColor, setBaseColor] = useState<string>("#131313");
    const [activeColor, setActiveColor] = useState<string>("#fd8b09");
    const [gsapReady, setGsapReady] = useState(false);

    // Get CSS variable with fallback
    const getCSSVar = useCallback((name: string): string => {
      if (typeof window === "undefined") return "";
      return getComputedStyle(document.documentElement)
        .getPropertyValue(name)
        .trim();
    }, []);

    // Initialize GSAP on mount (client-side only)
    useEffect(() => {
      loadGSAP().then(() => setGsapReady(true));
    }, []);

    // Update colors from CSS variables with mutation observer
    useEffect(() => {
      const updateColors = () => {
        setBaseColor(getCSSVar("--black") || "#131313");
        setActiveColor(getCSSVar("--orange") || "#fd8b09");
      };

      updateColors();

      if (typeof window === "undefined") return;

      const observer = new MutationObserver(updateColors);
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["style"],
      });

      return () => observer.disconnect();
    }, [getCSSVar]);

    // Memoized RGB values for performance
    const baseRgb = useMemo(() => hexToRgb(baseColor), [baseColor]);
    const activeRgb = useMemo(() => hexToRgb(activeColor), [activeColor]);

    // Create circle path (SSR-safe)
    const circlePath = useMemo(() => {
      if (typeof window === "undefined" || !window.Path2D) return null;
      const p = new Path2D();
      p.arc(0, 0, dotSize / 2, 0, Math.PI * 2);
      return p;
    }, [dotSize]);

    // Build grid with responsive sizing
    const buildGrid = useCallback(() => {
      const wrap = wrapperRef.current;
      const canvas = canvasRef.current;
      if (!wrap || !canvas) return;

      const { width, height } = wrap.getBoundingClientRect();
      const dpr =
        typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      const ctx = canvas.getContext("2d");
      if (ctx) ctx.scale(dpr, dpr);

      const cols = Math.floor((width + gap) / (dotSize + gap));
      const rows = Math.floor((height + gap) / (dotSize + gap));
      const cell = dotSize + gap;

      const gridW = cell * cols - gap;
      const gridH = cell * rows - gap;

      const extraX = width - gridW;
      const extraY = height - gridH;

      const startX = extraX / 2 + dotSize / 2;
      const startY = extraY / 2 + dotSize / 2;

      const dots: DotState[] = [];
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const cx = startX + x * cell;
          const cy = startY + y * cell;
          dots.push({ cx, cy, xOffset: 0, yOffset: 0, _inertiaApplied: false });
        }
      }
      dotsRef.current = dots;
    }, [dotSize, gap]);

    // Handle responsive resizing
    useEffect(() => {
      buildGrid();

      if (typeof window === "undefined") return;

      const handleResize = throttle(() => buildGrid(), 100);

      let ro: ResizeObserver | null = null;
      if ("ResizeObserver" in window && wrapperRef.current) {
        ro = new ResizeObserver(() => handleResize());
        ro.observe(wrapperRef.current);
      } else {
        window.addEventListener("resize", handleResize);
      }

      return () => {
        if (ro) {
          ro.disconnect();
        } else {
          window.removeEventListener("resize", handleResize);
        }
      };
    }, [buildGrid]);

    // Animation loop - draw dots with color interpolation
    useEffect(() => {
      if (!circlePath) return;

      let rafId: number;
      const proxSq = proximity * proximity;

      const draw = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const { x: px, y: py } = pointerRef.current;

        for (const dot of dotsRef.current) {
          const ox = dot.cx + dot.xOffset;
          const oy = dot.cy + dot.yOffset;
          const dx = dot.cx - px;
          const dy = dot.cy - py;
          const dsq = dx * dx + dy * dy;

          let style = baseColor;
          if (dsq <= proxSq) {
            const dist = Math.sqrt(dsq);
            const t = 1 - dist / proximity;
            const r = Math.round(baseRgb.r + (activeRgb.r - baseRgb.r) * t);
            const g = Math.round(baseRgb.g + (activeRgb.g - baseRgb.g) * t);
            const b = Math.round(baseRgb.b + (activeRgb.b - baseRgb.b) * t);
            style = `rgb(${r},${g},${b})`;
          }

          ctx.save();
          ctx.translate(ox, oy);
          ctx.fillStyle = style;
          ctx.fill(circlePath);
          ctx.restore();
        }

        rafId = requestAnimationFrame(draw);
      };

      draw();
      return () => cancelAnimationFrame(rafId);
    }, [baseColor, activeColor, baseRgb, activeRgb, proximity, circlePath]);

    // Mouse interaction handler
    useEffect(() => {
      if (!gsapReady) return;

      const onMove = (e: MouseEvent) => {
        const now = performance.now();
        const pr = pointerRef.current;
        const dt = pr.lastTime ? now - pr.lastTime : 16;
        const dx = e.clientX - pr.lastX;
        const dy = e.clientY - pr.lastY;

        let vx = (dx / dt) * 1000;
        let vy = (dy / dt) * 1000;
        let speed = Math.hypot(vx, vy);

        if (speed > maxSpeed) {
          const scale = maxSpeed / speed;
          vx *= scale;
          vy *= scale;
          speed = maxSpeed;
        }

        pr.lastTime = now;
        pr.lastX = e.clientX;
        pr.lastY = e.clientY;
        pr.vx = vx;
        pr.vy = vy;
        pr.speed = speed;

        const rect = canvasRef.current?.getBoundingClientRect();
        if (rect) {
          pr.x = e.clientX - rect.left;
          pr.y = e.clientY - rect.top;
        }

        // Apply physics to dots within proximity
        for (const dot of dotsRef.current) {
          const dist = Math.hypot(dot.cx - pr.x, dot.cy - pr.y);
          if (
            speed > speedTrigger &&
            dist < proximity &&
            !dot._inertiaApplied &&
            gsap
          ) {
            dot._inertiaApplied = true;
            gsap.killTweensOf(dot);

            const pushX = dot.cx - pr.x + vx * 0.005;
            const pushY = dot.cy - pr.y + vy * 0.005;

            gsap.to(dot, {
              inertia: { xOffset: pushX, yOffset: pushY, resistance },
              onComplete: () => {
                gsap.to(dot, {
                  xOffset: 0,
                  yOffset: 0,
                  duration: returnDuration,
                  ease: "elastic.out(1,0.75)",
                });
                dot._inertiaApplied = false;
              },
            });
          }
        }
      };

      const onClick = (e: MouseEvent) => {
        if (!gsap) return;

        const rect = canvasRef.current?.getBoundingClientRect();
        if (!rect) return;

        const cx = e.clientX - rect.left;
        const cy = e.clientY - rect.top;

        for (const dot of dotsRef.current) {
          const dist = Math.hypot(dot.cx - cx, dot.cy - cy);
          if (dist < shockRadius && !dot._inertiaApplied) {
            dot._inertiaApplied = true;
            gsap.killTweensOf(dot);

            const falloff = Math.max(0, 1 - dist / shockRadius);
            const pushX = (dot.cx - cx) * shockStrength * falloff;
            const pushY = (dot.cy - cy) * shockStrength * falloff;

            gsap.to(dot, {
              inertia: { xOffset: pushX, yOffset: pushY, resistance },
              onComplete: () => {
                gsap.to(dot, {
                  xOffset: 0,
                  yOffset: 0,
                  duration: returnDuration,
                  ease: "elastic.out(1,0.75)",
                });
                dot._inertiaApplied = false;
              },
            });
          }
        }
      };

      const throttledMove = throttle(onMove, 50);
      window.addEventListener("mousemove", throttledMove, { passive: true });
      window.addEventListener("click", onClick);

      return () => {
        window.removeEventListener("mousemove", throttledMove);
        window.removeEventListener("click", onClick);
      };
    }, [
      gsapReady,
      maxSpeed,
      speedTrigger,
      proximity,
      resistance,
      returnDuration,
      shockRadius,
      shockStrength,
    ]);

    return (
      <section
        ref={ref}
        className={`relative flex h-full w-full items-center justify-center p-4 ${className}`}
        style={style}
      >
        <div ref={wrapperRef} className="relative h-full w-full">
          <canvas
            ref={canvasRef}
            className="pointer-events-none absolute inset-0 h-full w-full"
          />
        </div>
      </section>
    );
  },
);

DotGrid.displayName = "DotGrid";

export default DotGrid;
