"use client";

import React, { useState } from "react";
import FluidCard from "./FluidCard";
import { motion, AnimatePresence } from "motion/react";

const FluidCardDemo = () => {
  const [cards, setCards] = useState([1, 2, 3]);

  const removeCard = (id: number) => {
    // Wait for animation to finish visually before removing from state if needed
    // But FluidCard handles the "fly away" animation internally before calling onDismiss?
    // Actually, in my implementation, FluidCard waits for controls.start() to finish before calling onDismiss.
    // So safe to remove here.
    setTimeout(() => {
      setCards((prev) => prev.filter((c) => c !== id));
    }, 200); // Small delay to let the user see it fly off?
    // Wait, FluidCard awaits the animation. So when onDismiss triggers, the animation has completed (or at least the promise resolved).
  };

  const reset = () => {
    setCards([1, 2, 3]);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-zinc-100 p-8 dark:bg-zinc-900">
      <div className="text-center">
        <h2 className="mb-4 text-2xl font-bold text-zinc-800 dark:text-white">
          Fluid Physics Demo
        </h2>
        <p className="mb-8 text-zinc-600 dark:text-zinc-400">
          Swipe down to dismiss. Flick hard to throw.
        </p>
        <button
          onClick={reset}
          className="rounded-full bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
        >
          Reset Cards
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        <AnimatePresence>
          {cards.map((id) => (
            <FluidCard
              key={id}
              className="relative flex h-96 w-64 items-center justify-center overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-zinc-800"
              onDismiss={() => removeCard(id)}
              dismissThreshold={150}
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
              <div className="select-none p-6 text-center">
                <div className="mb-4 text-6xl">
                  {id === 1 ? "🍎" : id === 2 ? "🚀" : "💎"}
                </div>
                <h3 className="mb-2 text-xl font-bold text-zinc-800 dark:text-white">
                  Card {id}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Try dragging me down slowly, or throwing me quickly.
                </p>
              </div>
            </FluidCard>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FluidCardDemo;
