"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText"; // <--- 1. Use default import
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function TextReveal({
  children,
  animateOnScroll = true,
  delay = 0,
}) {
  const containerRef = useRef(null);
  // We don't strictly need refs for these if we aren't accessing them outside the effect
  // but keeping them is fine if you plan to extend functionality.
  const splitRef = useRef([]);
  const lines = useRef([]);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // 2. Wait for fonts to load before calculating splits
      document.fonts.ready.then(() => {
        splitRef.current = [];
        lines.current = [];

        let elements = [];
        if (containerRef.current.hasAttribute("data-copy-wrapper")) {
          elements = Array.from(containerRef.current.children);
        } else {
          elements = [containerRef.current];
        }

        elements.forEach((element) => {
          // Create the split
          const split = new SplitText(element, {
            // <--- 3. Standard 'new' syntax
            type: "lines",
            linesClass: "line++", // 'line++' adds line1, line2 classes automatically
          });

          splitRef.current.push(split);

          // Handle text-indent logic
          const computedStyle = window.getComputedStyle(element);
          const textIndent = computedStyle.textIndent;

          if (textIndent && textIndent !== "0px") {
            if (split.lines.length > 0) {
              const firstLine = split.lines[0] as HTMLElement;
              firstLine.style.paddingLeft = textIndent;
            }
            element.style.textIndent = "0";
          }

          // Important: Wrap lines in a hidden overflow container for the reveal effect
          // This prevents the text from being visible "below" the line before it rises up
          // Note: GSAP's SplitText doesn't do this automatically unless you wrap it manually
          // or use a specific nested structure. Assuming simple reveal:
          lines.current.push(...split.lines);
        });

        // Set initial state (invisible/offset)
        gsap.set(lines.current, {
          y: "100%",
          opacity: 0, // <--- 4. Added opacity for safety against FOUC
        });

        const animateOnProps = {
          y: "0%",
          opacity: 1, // Reveal opacity
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
          delay: delay,
        };

        if (animateOnScroll) {
          gsap.to(lines.current, {
            ...animateOnProps,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%",
              once: true,
            },
          });
        } else {
          gsap.to(lines.current, animateOnProps);
        }

        // Reveal the container now that setup is done
        gsap.set(containerRef.current, { autoAlpha: 1 });
      });

      // Cleanup
      return () => {
        splitRef.current.forEach((split) => {
          if (split) split.revert();
        });
      };
    },
    {
      scope: containerRef,
      dependencies: [animateOnScroll, delay],
    },
  );

  // 5. Initial opacity 0 to prevent FOUC (Flash of Unstyled Content)
  // GSAP will set it to visible once the fonts are ready and logic runs.
  if (React.Children.count(children) === 1) {
    return React.cloneElement(children, {
      ref: containerRef,
      style: { ...children.props.style, visibility: "hidden" }, // Initial hide
    });
  }

  return (
    <div
      ref={containerRef}
      data-copy-wrapper="true"
      style={{ visibility: "hidden" }} // Initial hide
    >
      {children}
    </div>
  );
}
