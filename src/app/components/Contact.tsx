import { Download, Mail, Linkedin } from "lucide-react";

type Messages = typeof import("../lib/translations/fr.json");

export default function Contact({ messages }: { messages: Messages }) {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FEF3E2] via-[#FDDEB5]/30 to-[#FEF3E2] dark:from-[#1C1917] dark:via-[#1E1D1B] dark:to-[#1C1917]" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold text-heading mb-4">
            {messages.contact.collaborate}
          </h2>
          <p className="text-body max-w-2xl mx-auto mb-12 text-lg">
            {messages.contact.subtitle}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="mailto:danielevy29@gmail.com"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#1A1A1A] dark:bg-[#F0EDE8] text-white dark:text-[#111113] font-semibold text-base hover:opacity-90 transition-opacity shadow-lg"
          >
            <Mail className="mr-2 w-5 h-5" />
            {messages.contact.contactMe}
          </a>

          <a
            href="https://www.linkedin.com/in/daniellevy2904/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-border text-foreground font-semibold text-base hover:bg-secondary transition-colors"
          >
            <Linkedin className="mr-2 w-5 h-5" />
            LinkedIn
          </a>

          <a
            href="/docs/cv-daniel-levy.pdf"
            download
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-border text-foreground font-semibold text-base hover:bg-secondary transition-colors"
          >
            <Download className="mr-2 w-5 h-5" />
            {messages.nav.downloadCV}
          </a>
        </div>

        <p className="text-muted-foreground text-sm">
          {messages.contact.responseTime}
        </p>
      </div>
    </section>
  );
}
