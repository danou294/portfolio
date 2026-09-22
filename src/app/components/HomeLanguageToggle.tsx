"use client";

import { useRouter } from "next/navigation";

export default function HomeLanguageToggle({
  currentLanguage,
}: {
  currentLanguage: "fr" | "en";
}) {
  const router = useRouter();

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "fr" ? "en" : "fr";

    if (typeof window !== "undefined") {
      localStorage.setItem("language", newLanguage);
    }

    router.push(newLanguage === "fr" ? "/" : "/en");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-border/30 bg-secondary/30 text-foreground transition-all duration-300 hover:border-border/60 hover:bg-secondary/60"
      aria-label={currentLanguage === "fr" ? "Passer en anglais" : "Switch to French"}
    >
      <span className="text-sm font-semibold">{currentLanguage.toUpperCase()}</span>
    </button>
  );
}
