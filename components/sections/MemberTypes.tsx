import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";

const employed = [
  "Peer insights from leaders at your level",
  "Industry discussions and trend analysis",
  "Thought leadership and visibility",
  "Advisory and board opportunities",
];

const transition = [
  "Consulting opportunities",
  "Strategic introductions",
  "Career support and CTO Transition Toolkit",
  "Maintaining professional visibility",
];

export function MemberTypes() {
  return (
    <SectionWrapper className="bg-white">
      <SectionLabel>Who E3 serves</SectionLabel>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark leading-tight max-w-2xl">
        Two paths, one network
      </h2>
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-2xl bg-orange-50 p-8">
          <h3 className="text-xl font-bold text-brand-dark mb-4">Employed Leaders</h3>
          <ul className="space-y-3">
            {employed.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-700">
                <span className="mt-1.5 block w-2 h-2 rounded-full bg-brand-orange shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl bg-brand-warm p-8 border border-brand-salmon/30">
          <h3 className="text-xl font-bold text-brand-dark mb-4">Leaders in Transition</h3>
          <ul className="space-y-3">
            {transition.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-700">
                <span className="mt-1.5 block w-2 h-2 rounded-full bg-brand-salmon shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}