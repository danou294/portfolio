"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

export function StorySection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0E] via-[#121218] to-[#0A0A0E]"></div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#5AB1FF]/10 rounded-3xl blur-2xl"></div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1760670399462-f5e479452c27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBjb2RpbmclMjBsYXB0b3AlMjBkYXJrfGVufDF8fHx8MTc2MjY0MTg3Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Developer coding"
                width={600}
                height={500}
                className="w-full h-[500px] object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </motion.div>
          {/* Right: Story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl text-white" style={{ fontWeight: 700 }}>
                L&apos;histoire derrière CodeSphere
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                J&apos;en avais marre d&apos;installer 10 outils avant même d&apos;écrire une ligne de code.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                CodeSphere est né de cette idée : <span className="text-[#5AB1FF]">coder doit être aussi rapide que l&apos;inspiration.</span>
              </p>
            </div>
            {/* Quote box */}
            <div className="relative p-8 rounded-2xl border border-[#5AB1FF]/30 bg-gradient-to-br from-[#5AB1FF]/10 to-[#B77BFF]/10 backdrop-blur-sm">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#5AB1FF] to-[#B77BFF] flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>
              <p className="text-lg text-white/90 italic leading-relaxed pl-6">
                &quot;Trop de temps perdu en setup, pas assez en création — CodeSphere inverse cette équation.&quot;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

