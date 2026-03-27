import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  BookOpen,
  Users,
  TrendingUp,
  UsersRound,
  HeartHandshake,
  Lightbulb,
} from "lucide-react";

const touchpoints = [
  {
    icon: BookOpen,
    title: "Monthly Leadership Brief",
    desc: "1-hour curated session with top practitioners",
  },
  {
    icon: Users,
    title: "Quarterly Roundtables",
    desc: "8–12 person moderated peer discussions",
  },
  {
    icon: TrendingUp,
    title: "Investor Presentations",
    desc: "Monthly and quarterly investor access",
  },
  {
    icon: UsersRound,
    title: "Peer Groups",
    desc: "Multi-session deep dives on org design and career",
  },
  {
    icon: HeartHandshake,
    title: "Micro Touchpoints",
    desc: "Personalized check-ins and introductions",
  },
  {
    icon: Lightbulb,
    title: "Opportunity Sharing",
    desc: "Advisory, consulting, and board roles",
  },
];

export function HowItWorks() {
  return (
    <SectionWrapper className="bg-brand-warm">
      <SectionLabel>How E3 works</SectionLabel>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark leading-tight max-w-2xl">
        Six touchpoints designed for your schedule
      </h2>
      <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {touchpoints.map((t) => (
          <div key={t.title} className="text-center">
            <div className="mx-auto w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm mb-4">
              <t.icon className="w-6 h-6 text-brand-orange" strokeWidth={1.5} />
            </div>
            <h3 className="text-sm font-bold text-brand-dark">{t.title}</h3>
            <p className="mt-1 text-xs text-slate-500">{t.desc}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}