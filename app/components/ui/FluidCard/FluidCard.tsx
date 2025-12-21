"use client";

import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useAnimation,
  PanInfo,
  HTMLMotionProps,
} from "motion/react";

interface FluidCardProps extends HTMLMotionProps<"div"> {
  onDismiss?: () => void;
  /**
   * Threshold distance to drag before triggering dismiss.
   * Defaults to 200.
   */
  dismissThreshold?: number;
  /**
   * Configuration for the spring animation.
   * Matches Apple's "Golden Parameters" for a "Minimize" feel.
   */
  springConfig?: {
    stiffness: number;
    damping: number;
    mass: number;
  };
}

/**
 * A container that implements Apple-style "Swipe to Minimize/Dock" physics.
 * Adheres to the 3-Phase Model:
 * 1. 1-to-1 Tracking (no damping)
 * 2. Velocity Handoff (preserve momentum)
 * 3. Spring Settlement
 */
const FluidCard: React.FC<FluidCardProps> = ({
  children,
  onDismiss,
  className = "",
  dismissThreshold = 200,
  springConfig = {
    stiffness: 200,
    damping: 25,
    mass: 1,
  },
  ...props
}) => {
  const y = useMotionValue(0);
  const controls = useAnimation();

  // Phase 1: Visual feedback during drag
  // Scale down slightly as we drag down to give a "lifting" or "minimizing" cue
  const scale = useTransform(y, [0, dismissThreshold * 2], [1, 0.9]);
  const opacity = useTransform(y, [0, dismissThreshold * 2], [1, 0.8]);

  const handleDragEnd = async (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    // Phase 2: Velocity Handoff & Projection
    const velocity = info.velocity.y;
    // Simple projection: where would it land?
    // We add a fraction of velocity to current position to estimate intent
    const projectedY = info.offset.y + velocity * 0.2;

    const shouldDismiss = projectedY > dismissThreshold;

    if (shouldDismiss) {
      if (onDismiss) {
        // Trigger the callback but allows the caller to handle the exit animation if they want
        // For a self-contained exit, we animate off-screen
        await controls.start({
          y: window.innerHeight, // Fly off screen
          scale: 0.8,
          opacity: 0,
          transition: {
            type: "spring",
            velocity: velocity, // CRITICAL: Pass the gesture velocity!
            stiffness: springConfig.stiffness,
            damping: springConfig.damping,
            mass: springConfig.mass,
          },
        });
        onDismiss();
      } else {
        // If no dismiss handler, just snap back (maybe we just want the bouncy feel?)
        // Or strictly strictly speaking if no dismiss handler, we shouldn't have dismissed.
        // Let's assume for this component, if no handler, we return to start.
        snapBack(velocity);
      }
    } else {
      // Phase 3: Snap Back
      snapBack(velocity);
    }
  };

  const snapBack = (velocity: number) => {
    controls.start({
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        velocity: velocity, // Carry momentum even when snapping back
        stiffness: 300, // Stiffer for snap back
        damping: 30, // No bounce
      },
    });
  };

  return (
    <motion.div
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }} // We handle movement via controls, but dragConstraints=0 gives resistance if we wanted.
      // Actually for free "throw", we usually don't set strict constraint rects unless we want rubber banding.
      // But we want to allow dragging freely downwards.
      // Let's rely on `dragConstraints={{ top: 0 }}` to prevent dragging UP too much (sheet behavior).
      dragElastic={{ top: 0.1, bottom: 1 }} // Resist up, free down
      style={{ y, scale, opacity, touchAction: "none" } as any} // Cast to any to avoid minor TS type mismatches with Motion
      animate={controls}
      onDragEnd={handleDragEnd}
      whileTap={{ cursor: "grabbing" }}
      className={`cursor-grab touch-none ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default FluidCard;
