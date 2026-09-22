import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <section className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase text-muted-foreground mb-4">404</p>
        <h1 className="text-4xl font-bold text-heading mb-4">Page introuvable</h1>
        <p className="text-body mb-8">
          Cette page n’existe plus ou a changé d’adresse. Vous pouvez revenir aux réalisations ou me contacter pour parler d’un projet web ou mobile.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/#projects"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 font-semibold text-background transition-opacity hover:opacity-90"
          >
            Voir les réalisations
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            Me contacter
          </Link>
        </div>
      </section>
    </main>
  );
}
