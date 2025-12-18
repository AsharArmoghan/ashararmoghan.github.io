"use client";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import React from "react";

interface GrainProps {
  opacity?: number;
  baseFrequency?: number;
  numOctaves?: number;
  mixBlendMode?:
    | "mix-blend-overlay"
    | "mix-blend-multiply"
    | "mix-blend-screen"
    | "mix-blend-soft-light";
}

interface SandProps {
  opacity?: number;
  baseFrequency?: number;
  numOctaves?: number;
  mixBlendMode?:
    | "mix-blend-color-dodge"
    | "mix-blend-overlay"
    | "mix-blend-screen";
  parallaxStrength?: [string, string];
}

interface ParticleEffectProps {
  grain?: GrainProps;
  sand?: SandProps;
  className?: string; // For absolute positioning or z-index on the container
}

export const ParticleEffect: React.FC<ParticleEffectProps> = ({
  grain = {},
  sand = {},
  className = "absolute inset-0 pointer-events-none overflow-hidden",
}) => {
  const { scrollYProgress } = useScroll();

  // Defaults
  const grainOpacity = grain.opacity ?? 1.0; // 100% default based on current usage
  const grainFreq = grain.baseFrequency ?? 0.9;
  const grainOct = grain.numOctaves ?? 20;
  const grainBlend = grain.mixBlendMode || "mix-blend-overlay";

  const sandOpacity = sand.opacity ?? 0.1; // 10% default
  const sandFreq = sand.baseFrequency ?? 0.8;
  const sandOct = sand.numOctaves ?? 3;
  const sandBlend = sand.mixBlendMode || "mix-blend-color-dodge";

  return (
    <div className={className}>
      {/* Grainy Layer */}
      <div
        className={`absolute inset-0 z-0 ${grainBlend}`}
        style={{ opacity: grainOpacity }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='turbulence' baseFrequency='${grainFreq}' numOctaves='${grainOct}' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            filter: "contrast(150%) brightness(100%)",
          }}
        />
        {/* Helper gradient often used with grain */}
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/50 via-black/40 to-transparent" />
      </div>

      {/* Moving Sand Layer (Parallax) */}
      <div
        className={`absolute inset-0 z-0 ${sandBlend}`}
        style={{
          opacity: sandOpacity,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter2'%3E%3CfeTurbulence type='turbulence' baseFrequency='${sandFreq}' numOctaves='${sandOct}' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter2)'/%3E%3C/svg%3E")`,
          backgroundSize: "300px 300px",
        }}
      />
    </div>
  );
};
