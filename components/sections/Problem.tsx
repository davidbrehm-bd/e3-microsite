import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";

const points = [
  "Top leaders are isolated and need a community of best-in-class peers.",
  "Rapid advances in AI are changing the nature of work. Staying still means falling behind.",
  "Generic networking events and vendor webinars waste your most valuable resource: time.",
];

export function Problem() {
  return (
    <SectionWrapper className="bg-brand-warm">
      <SectionLabel>Why E3 exists</SectionLabel>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark leading-tight max-w-3xl">
        Most senior engineering relationships are episodic and transactional.
      </h2>
      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {points.map((text, i) => (
          <p key={i} className="text-lg text-slate-600 leading-relaxed">
            {text}
          </p>
        ))}
      </div>
    </SectionWrapper>
  );
}