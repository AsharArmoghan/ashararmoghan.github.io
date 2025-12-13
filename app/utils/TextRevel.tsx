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

  const splitRef = useRef([]);
  const lines = useRef([]);

  useGSAP(
    () => {
      if (!containerRef.current) return;
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
            type: "lines",
            linesClass: "line++",
          });

          splitRef.current.push(split);

          const computedStyle = window.getComputedStyle(element);
          const textIndent = computedStyle.textIndent;

          if (textIndent && textIndent !== "0px") {
            if (split.lines.length > 0) {
              const firstLine = split.lines[0] as HTMLElement;
              firstLine.style.paddingLeft = textIndent;
            }
            element.style.textIndent = "0";
          }

          lines.current.push(...split.lines);
        });

        gsap.set(lines.current, {
          y: "100%",
          opacity: 0,
        });

        const animateOnProps = {
          y: "0%",
          opacity: 1,
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

        gsap.set(containerRef.current, { autoAlpha: 1 });
      });

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

  if (React.Children.count(children) === 1) {
    return React.cloneElement(children, {
      ref: containerRef,
      style: { ...children.props.style, visibility: "hidden" },
    });
  }

  return (
    <div
      ref={containerRef}
      data-copy-wrapper="true"
      style={{ visibility: "hidden" }}
    >
      {children}
    </div>
  );
}
