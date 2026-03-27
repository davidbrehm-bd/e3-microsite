import type { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Card } from "@/components/ui/Card";
import { CtaBanner } from "@/components/sections/CtaBanner";
import {
  BookOpen,
  Users,
  TrendingUp,
  UsersRound,
  HeartHandshake,
  Lightbulb,
  MessageCircle,
  Briefcase,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Explore Membership — E3 Engineering Executive Exchange",
  description:
    "Explore E3 programs: leadership roundtables, peer groups, investor sessions, career transition support, and more.",
};

const programs = [
  {
    icon: BookOpen,
    title: "Monthly Engineering Leadership Brief",
    desc: "A focused 1-hour session featuring curated insights from top engineering operators. Practical takeaways, not theory.",
    frequency: "Monthly",
  },
  {
    icon: Users,
    title: "Quarterly Leadership Roundtables",
    desc: "Groups of 8–12 peers, moderated by an experienced facilitator. Topics range from AI strategy to engineering org design. Chatham House rules apply.",
    frequency: "Quarterly",
  },
  {
    icon: UsersRound,
    title: "Peer Groups",
    desc: "Multi-session deep dives with a consistent cohort. Cover org design, personal brand, career strategy, and technical leadership.",
    frequency: "Ongoing",
  },
  {
    icon: TrendingUp,
    title: "Investor Presentations",
    desc: "Direct access to VCs and strategic investors. Understand what the capital markets are seeing and where the opportunities are.",
    frequency: "Monthly / Quarterly",
  },
  {
    icon: HeartHandshake,
    title: "Micro Touchpoints",
    desc: "Personalized check-ins, introductions, and article shares from the E3 team. We stay connected so you don't have to manage another platform.",
    frequency: "Always-on",
  },
  {
    icon: Lightbulb,
    title: "Opportunity Sharing",
    desc: "Advisory roles, consulting engagements, board positions, and speaking invitations shared exclusively within the E3 network.",
    frequency: "As available",
  },
  {
    icon: MessageCircle,
    title: "Private Slack Community",
    desc: "An always-on channel for peer advice, industry signals, job leads, and the kind of candid exchange that only happens in a trusted group.",
    frequency: "Always-on",
  },
  {
    icon: Briefcase,
    title: "CTO Transition Toolkit",
    desc: "Dedicated support for leaders between roles: consulting pipeline, strategic introductions, visibility programs, and peer coaching.",
    frequency: "As needed",
  },
];

export default function ExplorePage() {
  return (
    <>
      <SectionWrapper className="bg-white pt-32">
        <SectionLabel>Explore Membership</SectionLabel>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark leading-tight max-w-3xl">
          Value-dense, not time-consuming.
        </h1>
        <p className="mt-6 text-xl text-slate-500 leading-relaxed max-w-2xl">
          Every E3 program is designed around one principle: deliver maximum signal with
          minimum time commitment.
        </p>
      </SectionWrapper>

      <SectionWrapper className="bg-brand-warm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((p) => (
            <Card key={p.title}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
                  <p.icon className="w-5 h-5 text-brand-orange" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-dark">{p.title}</h3>
                  <p className="mt-1 text-xs font-semibold text-brand-orange">{p.frequency}</p>
                  <p className="mt-2 text-slate-600 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <CtaBanner />
    </>
  );
}
