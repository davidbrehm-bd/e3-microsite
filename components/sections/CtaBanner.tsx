import Link from "next/link";

export function CtaBanner() {
  return (
    <section className="bg-brand-orange py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
          Ready to join the network?
        </h2>
        <p className="mt-6 text-lg text-orange-100 leading-relaxed">
          E3 membership is selective. Apply today and connect with the engineering
          leaders shaping tomorrow&apos;s technology.
        </p>
        <div className="mt-10">
          <Link
            href="/apply"
            className="inline-flex items-center justify-center rounded-lg bg-white px-10 py-4 text-lg font-bold text-brand-orange hover:bg-orange-50 transition-colors"
          >
            Apply to Join
          </Link>
        </div>
        <p className="mt-6">
          <Link
            href="#newsletter"
            className="text-white underline underline-offset-4 hover:text-orange-100 transition-colors text-sm"
          >
            Or join our email list for monthly insights →
          </Link>
        </p>
      </div>
    </section>
  );
}