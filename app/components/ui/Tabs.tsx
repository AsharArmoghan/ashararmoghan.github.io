"use client";
import React, { createContext, useContext, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const TabsContext = createContext<any>(null);

const Tabs = ({
  children,
  defaultValue,
  className,
  value,
  onValueChange,
}: any) => {
  const [activeTab, setActiveTab] = useState(defaultValue);
  const current = value !== undefined ? value : activeTab;
  const set = onValueChange || setActiveTab;

  return (
    <TabsContext.Provider value={{ activeTab: current, setActiveTab: set }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
};

const TabsList = ({ children, className }: any) => {
  return <div className={twMerge("relative flex", className)}>{children}</div>;
};

const TabsTrigger = ({ children, value, className, onClick }: any) => {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  const isActive = activeTab === value;

  return (
    <button
      onClick={() => {
        setActiveTab(value);
        onClick && onClick();
      }}
      className={twMerge(
        "relative cursor-pointer px-3 py-1.5 transition-colors focus:outline-none",
        isActive
          ? "font-bold text-zinc-900 dark:text-zinc-100"
          : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200",
        className,
      )}
    >
      {isActive && (
        <motion.div
          layoutId="activeTabIndicator"
          className="absolute inset-0 rounded-full bg-zinc-200 dark:bg-zinc-800"
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.6,
          }}
          style={{ zIndex: 0 }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </button>
  );
};

const TabsTriggerIndicator = () => null;

const TabsPanel = ({ children, value, className }: any) => {
  const { activeTab } = useContext(TabsContext);
  if (activeTab !== value) return null;
  return <div className={className}>{children}</div>;
};

Tabs.List = TabsList;
Tabs.Trigger = TabsTrigger;
Tabs.TriggerIndicator = TabsTriggerIndicator;
Tabs.Panel = TabsPanel;

export { Tabs };
