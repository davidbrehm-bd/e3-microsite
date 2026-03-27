import type { Metadata } from "next";
import Link from "next/link";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Card } from "@/components/ui/Card";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Why Join — E3 Engineering Executive Exchange",
  description:
    "Discover why senior engineering leaders choose E3 for peer exchange, curated introductions, and career support.",
};

const reasons = [
  {
    title: "You're making decisions in isolation",
    body: "At the CTO/VP level, there are few people you can talk to openly about org design, vendor decisions, or board dynamics. E3 gives you a confidential peer group that understands your context.",
  },
  {
    title: "Generic events don't serve you",
    body: "You don't need another 500-person webinar with a sales pitch at the end. E3 sessions are small, moderated, and designed for people operating at your level.",
  },
  {
    title: "AI is changing the game right now",
    body: "The leaders who thrive in the next decade are those who build relationships and share playbooks today. E3 is where those conversations happen.",
  },
  {
    title: "You need a network that works for you",
    body: "Whether you're hiring, fundraising, exploring a board seat, or navigating a transition — E3 makes selective introductions that create real value.",
  },
  {
    title: "Your time is scarce",
    body: "Every E3 touchpoint is designed for minimal time commitment and maximum signal. No filler content, no obligations, no vendor noise.",
  },
  {
    title: "Career transitions deserve dedicated support",
    body: "If you're between roles, E3's Transition Toolkit provides consulting opportunities, strategic introductions, and professional visibility while you navigate what's next.",
  },
];

export default function WhyPage() {
  return (
    <>
      <SectionWrapper className="bg-white pt-32">
        <SectionLabel>Why join E3</SectionLabel>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark leading-tight max-w-3xl">
          Built for how senior leaders actually operate.
        </h1>
        <p className="mt-6 text-xl text-slate-500 leading-relaxed max-w-2xl">
          E3 isn&apos;t another networking platform. It&apos;s a curated ecosystem designed to
          deliver real value to time-scarce engineering executives.
        </p>
      </SectionWrapper>

      <SectionWrapper className="bg-brand-warm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((r) => (
            <Card key={r.title}>
              <h3 className="text-lg font-bold text-brand-dark">{r.title}</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">{r.body}</p>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <CtaBanner />
    </>
  );
}