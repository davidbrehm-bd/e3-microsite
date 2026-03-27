import type { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Our Network — E3 Engineering Executive Exchange",
  description:
    "Meet the engineering leaders in E3: CTOs, VPs of Engineering, technical founders, and senior architects across industries.",
};

const segments = [
  "Enterprise Platforms",
  "Data Platforms",
  "Connected Systems",
  "Customer Platforms",
  "Core Systems",
  "Regulated Systems",
  "Technology Strategy",
];

const profiles = [
  { role: "CTO", company: "Series C Fintech", segment: "Core Systems" },
  { role: "VP Engineering", company: "Enterprise SaaS", segment: "Enterprise Platforms" },
  { role: "Head of Engineering", company: "Healthtech", segment: "Regulated Systems" },
  { role: "Technical Founder", company: "AI Infrastructure", segment: "Data Platforms" },
  { role: "CTO", company: "Series B Marketplace", segment: "Customer Platforms" },
  { role: "VP Engineering", company: "Cloud Security", segment: "Connected Systems" },
  { role: "Senior Architect", company: "Payments Platform", segment: "Core Systems" },
  { role: "CIO", company: "Fortune 500 Retail", segment: "Enterprise Platforms" },
  { role: "CTO", company: "Growth-Stage Edtech", segment: "Customer Platforms" },
  { role: "VP Engineering", company: "Autonomous Vehicles", segment: "Connected Systems" },
  { role: "Head of Engineering", company: "Insurance Platform", segment: "Regulated Systems" },
  { role: "Senior Advisor", company: "PE-Backed SaaS Portfolio", segment: "Technology Strategy" },
];

export default function NetworkPage() {
  return (
    <>
      <SectionWrapper className="bg-white pt-32">
        <SectionLabel>Our Network</SectionLabel>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark leading-tight max-w-3xl">
          100+ senior engineering leaders and growing.
        </h1>
        <p className="mt-6 text-xl text-slate-500 leading-relaxed max-w-2xl">
          E3 members span seven technology domains, dozens of industries, and
          geographies worldwide. Every member is vetted for seniority and relevance.
        </p>
      </SectionWrapper>

      <SectionWrapper className="bg-brand-warm">
        <SectionLabel>Technology domains</SectionLabel>
        <div className="flex flex-wrap gap-3 mt-4">
          {segments.map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {profiles.map((p, i) => (
            <div
              key={i}
              className="rounded-xl border border-orange-100 bg-white p-5 text-center"
            >
              <div className="mx-auto w-14 h-14 rounded-full border-2 border-brand-orange flex items-center justify-center bg-orange-50 mb-3">
                <span className="text-lg font-bold text-brand-orange">
                  {p.role.charAt(0)}
                </span>
              </div>
              <p className="font-bold text-brand-dark text-sm">{p.role}</p>
              <p className="text-xs text-slate-500 mt-0.5">{p.company}</p>
              <Badge className="mt-3">{p.segment}</Badge>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <CtaBanner />
    </>
  );
}