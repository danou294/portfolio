"use client";

import Image from "next/image";

interface MacMockupProps {
  image: string;
  alt: string;
  color?: string;
}

export function MacMockup({ image, alt, color = "#5AB1FF" }: MacMockupProps) {
  return (
    <div className="relative">
      {/* MacBook frame */}
      <div className="relative bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-t-[14px] rounded-b-[10px] p-[3px] shadow-2xl">
        {/* Top bezel with notch */}
        <div className="bg-[#0a0a0a] rounded-t-[10px] h-10 flex items-center justify-center relative">
          {/* Camera notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-2 bg-[#0a0a0a] rounded-b-full"></div>
          {/* Camera dot */}
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#333] rounded-full"></div>
        </div>
        
        {/* Screen */}
        <div className="relative bg-[#000] rounded-[8px] overflow-hidden border border-[#333]/50">
          {/* macOS menu bar */}
          <div className="h-8 bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] border-b border-[#333]/50 flex items-center px-4 gap-3">
            {/* Traffic lights */}
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57] shadow-inner"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-inner"></div>
              <div className="w-3 h-3 rounded-full bg-[#28ca42] shadow-inner"></div>
            </div>
            {/* Menu bar content */}
            <div className="flex-1 flex items-center justify-center">
              <div className="text-[11px] text-gray-400 font-medium tracking-wide">CodeSphere</div>
            </div>
            {/* Status indicators */}
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
            </div>
          </div>
          
          {/* Content area */}
          <div className="relative bg-[#0a0a0a]">
            <Image
              src={image}
              alt={alt}
              width={1200}
              height={675}
              className="w-full h-auto object-contain"
              unoptimized
            />
          </div>
        </div>
        
        {/* Bottom bezel */}
        <div className="bg-[#0a0a0a] rounded-b-[10px] h-3"></div>
      </div>
      
      {/* Glow effect behind */}
      <div
        className="absolute -inset-6 rounded-2xl blur-3xl opacity-50 -z-10"
        style={{ backgroundColor: `${color}25` }}
      ></div>
    </div>
  );
}

