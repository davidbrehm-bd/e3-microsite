import { Hero } from "@/components/sections/Hero";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { Problem } from "@/components/sections/Problem";
import { ValueProps } from "@/components/sections/ValueProps";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { MemberShowcase } from "@/components/sections/MemberShowcase";
import { MemberTypes } from "@/components/sections/MemberTypes";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <Problem />
      <ValueProps />
      <HowItWorks />
      <MemberShowcase />
      <MemberTypes />
      <CtaBanner />
    </>
  );
}