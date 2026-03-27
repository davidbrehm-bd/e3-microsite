import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";

const members = [
  { role: "CTO", company: "Series C Fintech" },
  { role: "VP Engineering", company: "Enterprise SaaS" },
  { role: "Head of Engineering", company: "Healthtech" },
  { role: "Technical Founder", company: "AI Infrastructure" },
  { role: "CTO", company: "Series B Marketplace" },
  { role: "VP Engineering", company: "Cloud Security" },
  { role: "Senior Architect", company: "Payments Platform" },
  { role: "CIO", company: "Fortune 500 Retail" },
];

export function MemberShowcase() {
  return (
    <SectionWrapper className="bg-white">
      <SectionLabel>Our growing network</SectionLabel>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark leading-tight max-w-3xl">
        A curated community of senior engineering leaders.
      </h2>
      <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
        {members.map((m, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center p-6 rounded-xl border border-orange-100 bg-white"
          >
            <div className="w-16 h-16 rounded-full border-2 border-brand-orange flex items-center justify-center bg-orange-50 mb-4">
              <span className="text-xl font-bold text-brand-orange">
                {m.role.charAt(0)}
              </span>
            </div>
            <p className="font-bold text-brand-dark text-sm">{m.role}</p>
            <p className="text-xs text-slate-500 mt-1">{m.company}</p>
          </div>
        ))}
      </div>
      <p className="mt-10 text-center text-lg font-semibold text-slate-500">
        100+ engineering leaders and growing.
      </p>
    </SectionWrapper>
  );
}