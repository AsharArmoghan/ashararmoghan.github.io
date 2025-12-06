"use client";

import React, { useEffect, useRef } from "react";

import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";
import { gsap } from "gsap";

const ScrambleText = ({ navbarText, texts }) => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrambleTextPlugin);

    if (!texts || !Array.isArray(texts)) return;

    const tl = gsap.timeline({
      id: "text-scramble",
      defaults: { ease: "none" },
      repeatDelay: 2,
    });

    texts.forEach((line, index) => {
      tl.to(textRef.current, {
        scrambleText: {
          text: line,
          chars: line,
        },
        duration: 2,
        delay: index === 0 ? 0 : 5,
      });
    });

    // Cleanup function to kill animation on unmount (prevents memory leaks)
    return () => {
      tl.kill();
    };
  }, [texts]);

  return (
    <div ref={textRef} className="redHatMono">
      {navbarText}
    </div>
  );
};

export default ScrambleText;
