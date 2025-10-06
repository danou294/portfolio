export default function Footer() {
    return (
      <footer className="bg-muted text-muted-foreground border-t border-theme transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between text-sm">
          <span>© {new Date().getFullYear()} Daniel Levy</span>
          <span>Fait avec Next.js & Tailwind</span>
        </div>
      </footer>
    );
  }
  