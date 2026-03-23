"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "../../contexts/LanguageContext";

const features = [
  { key: "feed", icon: "📸", gradient: "from-amber-400 to-orange-500", wireframe: "/Assets/Wireframes/app-feed.webp" },
  { key: "filters", icon: "🎯", gradient: "from-rose-400 to-pink-500", wireframe: "/Assets/Wireframes/app-home.webp" },
  { key: "details", icon: "📋", gradient: "from-violet-400 to-purple-500", wireframe: "/Assets/Wireframes/app-guides.webp" },
  { key: "favorites", icon: "⭐", gradient: "from-yellow-400 to-amber-500", wireframe: "/Assets/Wireframes/app-favorites.webp" },
  { key: "navigation", icon: "🗺️", gradient: "from-cyan-400 to-teal-500", wireframe: "/Assets/Wireframes/app-map.webp" },
  { key: "database", icon: "✅", gradient: "from-emerald-400 to-green-500", wireframe: null },
];

export function FeaturesSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-sm font-medium text-[#B45309] dark:text-[#FCD34D] mb-4">
            {t("butter.features.badge")}
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-heading mb-4">
            {t("butter.features.title")}
          </h2>
          <p className="text-body text-lg max-w-2xl mx-auto">
            {t("butter.features.description")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl bg-card border border-border hover:shadow-lg transition-all group overflow-hidden"
            >
              {/* Screenshot preview */}
              {feature.wireframe && (
                <div className="relative h-40 overflow-hidden bg-secondary">
                  <Image
                    src={feature.wireframe}
                    alt={feature.key}
                    fill
                    className="object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card" />
                </div>
              )}

              <div className="p-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-xl mb-4 shadow-md group-hover:scale-105 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="font-bold text-heading mb-2">
                  {t(`butter.features.items.${feature.key}.title`)}
                </h3>
                <p className="text-body text-sm">
                  {t(`butter.features.items.${feature.key}.description`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
