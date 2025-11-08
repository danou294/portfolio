"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Apple, Github } from "lucide-react";

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden bg-white dark:bg-[#0A0A0E]">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white dark:from-[#0A0A0E] via-gray-50 dark:via-[#141420] to-white dark:to-[#0A0A0E]" />
      
      {/* Animated glow */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-blue-500/20 dark:from-[#5AB1FF]/20 to-purple-500/20 dark:to-[#B77BFF]/20 blur-[150px] rounded-full"
        />
      </div>
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-12"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-violet-600 dark:from-[#5AB1FF] dark:to-[#B77BFF] rounded-3xl flex items-center justify-center shadow-lg shadow-blue-500/30 dark:shadow-blue-500/30 mx-auto p-4">
              <Image 
                src="/images/butter.png" 
                alt="Butter" 
                width={64} 
                height={64} 
                className="object-contain"
              />
            </div>
          </motion.div>
          {/* Title */}
          <div className="space-y-6">
            <h2 className="text-5xl lg:text-6xl text-gray-900 dark:text-white/90 font-bold">
              Et si vous pensez encore que Butter, c&apos;est du beurre, c&apos;est que vous ne l&apos;avez pas encore téléchargée.
            </h2>
          </div>
          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="https://apps.apple.com/fr/app/butter-guide-de-restaurants/id6749227938"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-gradient-to-r from-blue-500 to-violet-600 dark:from-[#5AB1FF] dark:to-[#B77BFF] rounded-full flex items-center justify-center gap-3 shadow-lg shadow-blue-500/30 dark:shadow-blue-500/30 hover:shadow-blue-500/50 dark:hover:shadow-blue-500/50 transition-shadow text-lg text-white font-semibold"
            >
              <Apple className="w-6 h-6" />
              Télécharger sur l&apos;App Store
            </motion.a>
            
            <motion.a
              href="https://github.com/danou294/Butter-public.git"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 border-2 border-gray-300 dark:border-white/20 rounded-full flex items-center justify-center gap-3 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-white/10 hover:border-gray-400 dark:hover:border-white/40 transition-colors text-lg text-gray-900 dark:text-white font-semibold"
            >
              <Github className="w-6 h-6" />
              Voir le code source
            </motion.a>
          </motion.div>
          {/* Signature */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-500 dark:text-white/40"
          >
            Développé par <span className="text-blue-600 dark:text-[#5AB1FF] font-semibold">Daniel Levy</span> — Flutter & Firebase
          </motion.p>
        </motion.div>
      </div>
      {/* Bottom decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-[#0A0A0E] to-transparent" />
    </section>
  );
}

