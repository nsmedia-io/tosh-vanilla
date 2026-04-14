export default function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-divider py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-secondary/70 to-bg-primary" />
      <div className="absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-accent-muted/15 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <span className="text-[11px] font-semibold tracking-[0.35em] uppercase text-accent-primary">
          {eyebrow}
        </span>
        <h1 className="mt-4 font-serif text-4xl leading-tight text-text-heading md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
