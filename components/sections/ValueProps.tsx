import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Card } from "@/components/ui/Card";
import {
  Users,
  Network,
  Presentation,
  Briefcase,
  TrendingUp,
  MessageCircle,
} from "lucide-react";

const cards = [
  {
    icon: Users,
    title: "Peer Exchange",
    desc: "Small curated groups of 8–12 leaders discussing real challenges. No vendor pitches, no generic content.",
  },
  {
    icon: Network,
    title: "Curated Network",
    desc: "CTOs, VPs, and senior architects only. Selective introductions to the right people at the right time.",
  },
  {
    icon: Presentation,
    title: "Expert-Led Sessions",
    desc: "Monthly briefings and quarterly roundtables with world-class operators and investors.",
  },
  {
    icon: Briefcase,
    title: "Career Support",
    desc: "CTO Transition Toolkit for leaders between roles. Advisory, consulting, and board opportunities.",
  },
  {
    icon: TrendingUp,
    title: "Investor Access",
    desc: "Monthly and quarterly sessions connecting members with the investor community and strategic capital.",
  },
  {
    icon: MessageCircle,
    title: "Always-On Community",
    desc: "Private Slack for real-time peer advice, industry signals, and authentic connection.",
  },
];

export function ValueProps() {
  return (
    <SectionWrapper className="bg-white">
      <SectionLabel>What you get</SectionLabel>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark leading-tight max-w-2xl">
        Why engineering leaders join E3
      </h2>
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((c) => (
          <Card key={c.title}>
            <c.icon className="w-8 h-8 text-brand-orange mb-4" strokeWidth={1.5} />
            <h3 className="text-xl font-bold text-brand-dark">{c.title}</h3>
            <p className="mt-2 text-slate-600 leading-relaxed">{c.desc}</p>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}