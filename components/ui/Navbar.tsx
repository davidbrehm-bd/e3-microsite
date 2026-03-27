"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/why", label: "Why Join" },
  { href: "/explore", label: "Explore Membership" },
  { href: "/network", label: "Our Network" },
  { href: "/events", label: "Events" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="text-2xl font-extrabold text-brand-orange">
            E<sup className="text-lg">3</sup>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-gray-600 hover:text-brand-dark transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/apply"
            className="inline-flex items-center justify-center rounded-lg bg-brand-orange px-5 py-2 text-sm font-semibold text-white hover:bg-orange-700 transition-colors"
          >
            Apply to Join
          </Link>
          <span className="text-xs text-gray-400">
            Powered by <span className="font-semibold text-gray-500">BairesDev</span>
          </span>
        </div>

        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 pb-6 pt-4 space-y-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block text-base font-medium text-gray-700"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/apply"
            className="block w-full text-center rounded-lg bg-brand-orange px-5 py-3 text-base font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            Apply to Join
          </Link>
          <p className="text-xs text-gray-400 text-center">
            Powered by <span className="font-semibold text-gray-500">BairesDev</span>
          </p>
        </div>
      )}
    </header>
  );
}
