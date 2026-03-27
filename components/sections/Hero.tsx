import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-white pt-16">
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm font-semibold tracking-widest text-brand-orange uppercase mb-4">
            Powered by BairesDev
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-brand-dark leading-[1.08]">
            The private network for senior engineering leaders.
          </h1>
          <p className="mt-6 text-xl text-slate-500 leading-relaxed max-w-lg">
            E3 connects CTOs, VPs of Engineering, and senior tech leaders to peers,
            insights, and opportunities — without the vendor noise.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center rounded-lg bg-brand-orange px-8 py-3.5 text-lg font-semibold text-white hover:bg-orange-700 transition-colors"
            >
              Apply to Join
            </Link>
            <Link
              href="#newsletter"
              className="inline-flex items-center justify-center rounded-lg border-2 border-brand-orange px-8 py-3.5 text-lg font-semibold text-brand-orange hover:bg-orange-50 transition-colors"
            >
              Join our newsletter
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex items-center justify-center" aria-hidden="true">
          <div className="relative w-80 h-80">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-orange rounded-sm opacity-90" />
            <div className="absolute bottom-0 left-0 w-56 h-28 bg-brand-salmon rounded-tl-full rounded-tr-full opacity-80" />
            <div className="absolute top-16 left-8 w-40 h-40 border-2 border-brand-salmon rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}