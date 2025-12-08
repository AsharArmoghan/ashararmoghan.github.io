import React from "react";

const ShinyLoading = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-primary-white backdrop-blur-sm dark:bg-primary-black">
      <div className="relative flex items-center justify-center">
        {/* Outer Glowing Ring */}
        <div className="absolute h-24 w-24 animate-spin rounded-full border-4 border-transparent border-r-cyan-400/30 border-t-cyan-400 shadow-[0_0_20px_2px_rgba(34,211,238,0.5)] transition-all duration-75 ease-linear"></div>

        {/* Middle Shiny Ring (Reverse Spin) */}
        <div className="absolute h-16 w-16 animate-[spin_1.7s_linear_infinite_reverse] rounded-full border-[3px] border-transparent border-l-gray-400 border-t-gray-100 shadow-[0_0_15px_rgba(255,255,255,0.6)]"></div>

        {/* <div className="h-4 w-4 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_20px_5px_rgba(34,211,238,0.8)]"></div> */}

        {/* <div className="absolute h-32 w-32 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full border border-cyan-500/20 opacity-20"></div> */}
      </div>
    </div>
  );
};

export default ShinyLoading;
