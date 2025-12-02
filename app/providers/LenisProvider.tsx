// lib/lenis-provider.tsx
"use client";

import { createContext, useContext, useEffect, useState, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { LenisOptions } from "lenis";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const LenisContext = createContext<Lenis | null>(null);

export function LenisProvider({
  children,
  options = {},
}: {
  children: React.ReactNode;
  options?: LenisOptions;
}) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const optionsRef = useRef(options);

  useEffect(() => {
    optionsRef.current = options;
  }, [options]);

  useEffect(() => {
    const lenisInstance = new Lenis({
      autoRaf: false,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1,
      ...optionsRef.current,
    });

    setLenis(lenisInstance);

    lenisInstance.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenisInstance.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove((time) => {
        lenisInstance.raf(time * 1000);
      });
      lenisInstance.off("scroll", ScrollTrigger.update);
      lenisInstance.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  );
}

export function useLenis() {
  const context = useContext(LenisContext);
  if (!context) {
    console.warn("useLenis must be used within LenisProvider");
  }
  return context;
}
