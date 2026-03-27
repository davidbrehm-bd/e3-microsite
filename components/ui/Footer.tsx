import Link from "next/link";

const footerLinks = [
  { href: "/why", label: "Why Join" },
  { href: "/explore", label: "Explore Membership" },
  { href: "/network", label: "Our Network" },
  { href: "/events", label: "Events" },
  { href: "/apply", label: "Apply" },
];

export function Footer() {
  return (
    <footer className="bg-brand-dark text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <span className="text-2xl font-extrabold text-white">
            E<sup className="text-lg">3</sup>
          </span>
          <p className="mt-3 text-sm">
            Engineering Executive Exchange
          </p>
          <p className="mt-1 text-sm">
            Powered by{" "}
            <a
              href="https://www.bairesdev.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              BairesDev
            </a>
          </p>
        </div>

        <div className="flex flex-col gap-2">
          {footerLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="text-sm space-y-2">
          <p>
            <a href="mailto:info@bairesdev.com" className="hover:text-white transition-colors">
              info@bairesdev.com
            </a>
          </p>
          <p>
            <a
              href="https://www.bairesdev.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              bairesdev.com
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} BairesDev. Engineering Executive Exchange is a BairesDev
        initiative.
      </div>
    </footer>
  );
}