import React from "react";
import Image from "next/image";

export const ArrowUpRightIcon = ({ className }: { className?: string }) => (
  <div className={`relative inline-block h-[16px] w-[16px] ${className}`}>
    <Image
      src="/assets/arrow_up_right.svg"
      alt="Arrow Up Right"
      fill
      className="object-contain"
    />
  </div>
);
