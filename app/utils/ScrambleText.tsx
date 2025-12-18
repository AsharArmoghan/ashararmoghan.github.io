"use client";

import React, { useEffect, useRef } from "react";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";
import { gsap } from "gsap";

const ScrambleText = ({ navbarText, texts }) => {
  const containerRef = useRef(null);
  const wordRefs = useRef([]);
  // Use the first text from array or navbarText
  const content = Array.isArray(texts) ? texts[0] : navbarText || "";
  const words = content.split(" ");

  useEffect(() => {
    gsap.registerPlugin(ScrambleTextPlugin);

    const tl = gsap.timeline({
      id: "text-scramble",
      repeatDelay: 3,
    });

    // Reset logic
    wordRefs.current.forEach((ref) => {
      if (ref) {
        gsap.set(ref, { opacity: 0 });
      }
    });

    wordRefs.current.forEach((ref, index) => {
      if (!ref) return;

      // Start slightly overlapping animations
      const position = index * 0.25;

      tl.to(
        ref,
        {
          opacity: 1,
          duration: 0.2,
        },
        position,
      ).to(
        ref,
        {
          scrambleText: {
            text: words[index],
            chars: "lowercase",
            speed: 0.2,
            revealDelay: 0.2,
            tweenLength: true,
          },
          duration: 1.02,
        },
        position,
      );
    });

    return () => {
      tl.kill();
    };
  }, [words]);

  return (
    <div className="mx-auto inline-block overflow-hidden rounded-full border border-neutral-200/60 bg-white/20 px-8 py-3 shadow-xl backdrop-blur-md transition-all hover:bg-white/30 dark:border-white/10 dark:bg-zinc-900/30 dark:hover:bg-zinc-900/40">
      <div
        ref={containerRef}
        className="redHatMono text-center font-mono text-base font-medium tracking-wide text-neutral-800 dark:text-neutral-200 md:text-lg"
      >
        {words.map((word, index) => (
          <span
            key={index}
            ref={(el) => {
              wordRefs.current[index] = el;
            }}
            className="mr-1.5 inline-block opacity-0 last:mr-0"
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ScrambleText;
