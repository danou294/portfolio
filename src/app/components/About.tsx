type Messages = typeof import("../lib/translations/fr.json");

export default function About({ messages }: { messages: Messages }) {
  return (
    <section id="about" className="relative py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-heading mb-4">
            {messages.about.title}
          </h2>
          <p className="text-body max-w-3xl mx-auto text-lg">
            {messages.about.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Narrative */}
          <div>
            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="space-y-4 text-body">
                <p>{messages.about.approach.text}</p>
                <p className="font-semibold text-heading">{messages.about.objective}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-sm font-medium text-[#B45309] dark:text-[#FCD34D]">
                {messages.about.since}
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-sm font-medium text-emerald-700 dark:text-emerald-400">
                {messages.hero.available}
              </span>
            </div>
          </div>

          {/* Expertise areas */}
          <div>
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="text-2xl font-bold text-heading mb-6">
                {messages.skills.subtitle}
              </h3>

              <div className="space-y-4">
                {[
                  { key: "architecture", icon: "db" },
                  { key: "apis", icon: "api" },
                  { key: "devops", icon: "cloud" },
                  { key: "ui", icon: "layers" },
                ].map((item) => (
                  <div
                    key={item.key}
                    className="flex gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[#F59E0B] to-[#EC4899] flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                      <IconFor type={item.icon} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-heading mb-1">
                        {messages.skills.sections[item.key as keyof typeof messages.skills.sections].title}
                      </h4>
                      <p className="text-sm text-body">
                        {messages.skills.sections[item.key as keyof typeof messages.skills.sections].description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IconFor({ type }: { type: string }) {
  switch (type) {
    case "db":
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
        </svg>
      );
    case "api":
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
      );
    case "cloud":
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
        </svg>
      );
    case "layers":
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
        </svg>
      );
    default:
      return null;
  }
}
