import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "E3 — Engineering Executive Exchange",
  description:
    "The private network for senior engineering leaders. E3 connects CTOs, VPs of Engineering, and senior tech leaders to peers, insights, and opportunities.",
  openGraph: {
    title: "E3 — Engineering Executive Exchange",
    description:
      "The private network for senior engineering leaders. Curated peer groups, expert-led sessions, and career support — powered by BairesDev.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans text-brand-dark antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}