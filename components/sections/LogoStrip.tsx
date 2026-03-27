const companies = [
  "Anthropic",
  "OpenAI",
  "Google",
  "Stripe",
  "Coinbase",
  "Cloudflare",
  "Plaid",
  "Salesforce",
];

export function LogoStrip() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-semibold tracking-widest text-gray-400 uppercase mb-8">
          Members from companies like
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {companies.map((name) => (
            <span
              key={name}
              className="text-lg font-bold text-gray-300 select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
