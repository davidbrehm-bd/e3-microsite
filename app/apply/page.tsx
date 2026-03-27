"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";

type Status = "idle" | "submitting" | "success" | "error";

const domains = [
  "Enterprise Platforms",
  "Data Platforms",
  "Connected Systems",
  "Customer Platforms",
  "Core Systems",
  "Regulated Systems",
  "Technology Strategy",
];

const employmentOptions = [
  "Currently Employed",
  "In Transition",
  "Advisor/Consultant",
];

const inputClass =
  "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-brand-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-colors";

const labelClass = "block text-sm font-semibold text-brand-dark mb-1.5";

export default function ApplyPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    title: "",
    company: "",
    linkedin: "",
    email: "",
    domain: "",
    industry: "",
    location: "",
    employment: "",
    referral: "",
    goals: "",
  });

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Submit failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <SectionWrapper className="bg-white pt-32 min-h-screen">
        <div className="max-w-xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-extrabold text-brand-dark">
            Thank you for applying.
          </h1>
          <p className="mt-4 text-lg text-slate-500 leading-relaxed">
            We review applications on a rolling basis and will be in touch within 5
            business days.
          </p>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper className="bg-white pt-32">
      <div className="max-w-2xl mx-auto">
        <SectionLabel>Membership Application</SectionLabel>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-dark leading-tight">
          Apply to Join E3
        </h1>
        <p className="mt-4 text-lg text-slate-500 leading-relaxed">
          Membership is selective and curated. Tell us about yourself and we&apos;ll
          be in touch within 5 business days.
        </p>

        <form onSubmit={handleSubmit} className="mt-12 space-y-6">
          <div>
            <label htmlFor="name" className={labelClass}>Full name</label>
            <input id="name" type="text" required className={inputClass} value={form.name} onChange={(e) => update("name", e.target.value)} />
          </div>

          <div>
            <label htmlFor="title" className={labelClass}>Current title</label>
            <input id="title" type="text" required className={inputClass} placeholder="e.g. CTO, VP Engineering" value={form.title} onChange={(e) => update("title", e.target.value)} />
          </div>

          <div>
            <label htmlFor="company" className={labelClass}>Company</label>
            <input id="company" type="text" required className={inputClass} value={form.company} onChange={(e) => update("company", e.target.value)} />
          </div>

          <div>
            <label htmlFor="linkedin" className={labelClass}>LinkedIn URL</label>
            <input id="linkedin" type="url" className={inputClass} placeholder="https://linkedin.com/in/..." value={form.linkedin} onChange={(e) => update("linkedin", e.target.value)} />
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>Email</label>
            <input id="email" type="email" required className={inputClass} value={form.email} onChange={(e) => update("email", e.target.value)} />
          </div>

          <div>
            <label htmlFor="domain" className={labelClass}>Primary technology domain</label>
            <select id="domain" required className={inputClass} value={form.domain} onChange={(e) => update("domain", e.target.value)}>
              <option value="">Select a domain</option>
              {domains.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="industry" className={labelClass}>Industry vertical</label>
            <input id="industry" type="text" className={inputClass} placeholder="e.g. Fintech, Healthcare, SaaS" value={form.industry} onChange={(e) => update("industry", e.target.value)} />
          </div>

          <div>
            <label htmlFor="location" className={labelClass}>Geographic location</label>
            <input id="location" type="text" className={inputClass} placeholder="e.g. San Francisco, CA" value={form.location} onChange={(e) => update("location", e.target.value)} />
          </div>

          <fieldset>
            <legend className={labelClass}>Employment status</legend>
            <div className="mt-2 space-y-2">
              {employmentOptions.map((opt) => (
                <label key={opt} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="employment"
                    value={opt}
                    required
                    className="w-4 h-4 text-brand-orange accent-brand-orange"
                    checked={form.employment === opt}
                    onChange={(e) => update("employment", e.target.value)}
                  />
                  <span className="text-sm text-slate-700">{opt}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div>
            <label htmlFor="referral" className={labelClass}>How did you hear about E3?</label>
            <input id="referral" type="text" className={inputClass} value={form.referral} onChange={(e) => update("referral", e.target.value)} />
          </div>

          <div>
            <label htmlFor="goals" className={labelClass}>What do you hope to get from E3 membership?</label>
            <textarea id="goals" rows={4} className={inputClass} value={form.goals} onChange={(e) => update("goals", e.target.value)} />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full rounded-lg bg-brand-orange px-8 py-4 text-lg font-bold text-white hover:bg-orange-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "submitting" ? "Submitting…" : "Submit Application"}
          </button>

          {status === "error" && (
            <p className="text-red-600 text-sm text-center">
              Something went wrong. Please try again or email us at info@bairesdev.com.
            </p>
          )}
        </form>
      </div>
    </SectionWrapper>
  );
}