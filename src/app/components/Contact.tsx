"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-gray-50 dark:bg-gray-950">
      {/* Background Circles */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/20 dark:bg-violet-500/30 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-gray-900 dark:text-white mb-4 text-4xl lg:text-5xl font-bold">
            {t("contact.collaborate")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 text-lg">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          {/* Primary Contact Button with Pulse Animation */}
          <motion.div
            animate={{
              boxShadow: [
                '0 0 0 0 rgba(59, 130, 246, 0.4)',
                '0 0 0 20px rgba(59, 130, 246, 0)',
                '0 0 0 0 rgba(59, 130, 246, 0)'
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
            className="rounded-full"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white shadow-lg shadow-blue-500/25 dark:shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/30 dark:hover:shadow-blue-500/60 transition-all px-8 py-6"
              onClick={() => window.location.href = 'mailto:danielevy29@gmail.com'}
            >
              <Mail className="mr-2 w-5 h-5" />
              {t("contact.contactMe")}
            </Button>
          </motion.div>

          <Button
            size="lg"
            variant="outline"
            className="border-2 border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-all px-8 py-6"
            onClick={() => window.open('https://www.linkedin.com/in/daniellevy2904/', '_blank')}
          >
            <Linkedin className="mr-2 w-5 h-5" />
            LinkedIn
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-2 border-gray-300 dark:border-gray-700 hover:border-violet-500 dark:hover:border-violet-500 hover:bg-violet-50 dark:hover:bg-violet-500/10 transition-all px-8 py-6"
            onClick={() => window.open('https://github.com/danou294', '_blank')}
          >
            <Github className="mr-2 w-5 h-5" />
            GitHub
          </Button>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <a 
            href="mailto:danielevy29@gmail.com"
            className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white mb-4 mx-auto">
              <Mail className="w-6 h-6" />
            </div>
            <h4 className="text-gray-900 dark:text-white mb-2 font-semibold">
              Email
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              danielevy29@gmail.com
            </p>
          </a>

          <a 
            href="https://www.linkedin.com/in/daniellevy2904/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white mb-4 mx-auto">
              <Linkedin className="w-6 h-6" />
            </div>
            <h4 className="text-gray-900 dark:text-white mb-2 font-semibold">
              LinkedIn
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              /in/daniellevy2904
            </p>
          </a>

          <a 
            href="https://github.com/danou294"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white mb-4 mx-auto">
              <Github className="w-6 h-6" />
            </div>
            <h4 className="text-gray-900 dark:text-white mb-2 font-semibold">
              GitHub
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              @danou294
            </p>
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-gray-500 dark:text-gray-500"
        >
          Temps de réponse moyen : 24 heures
        </motion.p>
      </div>
    </section>
  );
}
