"use client";

import { motion } from "framer-motion";

interface PhoneMockupProps {
  delay?: number;
  rotation?: number;
  primary?: boolean;
}

export function PhoneMockup({ delay = 0, rotation = 0, primary = false }: PhoneMockupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
      className="relative"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div className={`relative ${primary ? 'w-64 h-[520px]' : 'w-56 h-[450px]'} bg-black rounded-[3rem] p-3 shadow-2xl`}>
        {/* Phone frame */}
        <div className="relative w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 dark:from-zinc-900 dark:to-zinc-800 rounded-[2.5rem] overflow-hidden border-4 border-zinc-800 dark:border-zinc-800">
          {/* Dynamic Island */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-10" />
          
          {/* Screen content - gradient placeholder */}
          <div className="w-full h-full bg-gradient-to-br from-blue-500/10 dark:from-[#5AB1FF]/10 to-purple-500/10 dark:to-[#B77BFF]/10 flex items-center justify-center relative overflow-hidden">
            {/* Decorative UI elements */}
            <div className="absolute top-16 left-6 right-6 h-12 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10" />
            
            <div className="absolute top-32 left-6 right-6 space-y-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-32 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 flex items-center gap-4 p-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500/30 dark:from-[#5AB1FF]/30 to-purple-500/30 dark:to-[#B77BFF]/30 rounded-2xl" />
                  <div className="flex-1 space-y-2">
                    <div className="h-3 bg-white/20 rounded-full w-3/4" />
                    <div className="h-2 bg-white/10 rounded-full w-1/2" />
                  </div>
                </div>
              ))}
            </div>
            {/* Bottom nav bar */}
            <div className="absolute bottom-6 left-6 right-6 h-16 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 flex items-center justify-around px-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-8 h-8 bg-gradient-to-br from-blue-500/30 dark:from-[#5AB1FF]/30 to-purple-500/30 dark:to-[#B77BFF]/30 rounded-xl" />
              ))}
            </div>
          </div>
        </div>
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 dark:from-[#5AB1FF]/10 to-purple-500/10 dark:to-[#B77BFF]/10 blur-xl rounded-[3rem] -z-10" />
      </div>
    </motion.div>
  );
}

