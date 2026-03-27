import type { Metadata } from "next";
import Link from "next/link";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Events — E3 Engineering Executive Exchange",
  description:
    "Upcoming E3 sessions: leadership roundtables, investor presentations, peer groups, and curated briefings for senior engineering leaders.",
};

const upcoming = [
  {
    date: "April 2026",
    title: "Engineering Leadership Brief: AI Agents in Production",
    type: "Monthly Brief",
    desc: "A focused 1-hour session exploring real-world patterns for deploying AI agents at scale, featuring practitioner perspectives.",
  },
  {
    date: "April 2026",
    title: "Investor Perspectives: Q2 Outlook",
    type: "Investor Presentation",
    desc: "Hear directly from venture investors on what they're funding, where they see risk, and how engineering leadership factors into their decisions.",
  },
  {
    date: "May 2026",
    title: "Quarterly Roundtable: Org Design for AI-Native Teams",
    type: "Roundtable",
    desc: "A moderated peer discussion (8–12 leaders) on restructuring engineering organizations around AI-native workflows and tooling.",
  },
  {
    date: "Ongoing",
    title: "Peer Group: The CTO Playbook",
    type: "Peer Group",
    desc: "A multi-session cohort tackling the hardest questions in CTO life — from board communication to technical debt strategy.",
  },
];

export default function EventsPage() {
  return (
    <>
      <SectionWrapper className="bg-white pt-32">
        <SectionLabel>Events</SectionLabel>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark leading-tight max-w-3xl">
          High-signal sessions, not webinars.
        </h1>
        <p className="mt-6 text-xl text-slate-500 leading-relaxed max-w-2xl">
          Every E3 event is small, curated, and designed to deliver practical value.
          Here&apos;s what&apos;s coming up.
        </p>
      </SectionWrapper>

      <SectionWrapper className="bg-brand-warm">
        <div className="space-y-6">
          {upcoming.map((ev) => (
            <Card key={ev.title}>
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="shrink-0">
                  <p className="text-sm font-bold text-brand-orange">{ev.date}</p>
                  <Badge className="mt-2">{ev.type}</Badge>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-dark">{ev.title}</h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">{ev.desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-500">
            Events are exclusive to E3 members.{" "}
            <Link href="/apply" className="text-brand-orange font-semibold hover:underline">
              Apply to join
            </Link>{" "}
            to access the full calendar.
          </p>
        </div>
      </SectionWrapper>

      <CtaBanner />
    </>
  );
}