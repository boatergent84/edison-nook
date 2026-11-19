import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Edison Nook | A Northern Michigan getaway", template: "%s | Edison Nook" },
  description: "Get to know Edison Nook near Petoskey and plan your Northern Michigan stay.",
};

const links = [
  ["The Stay", "/stay"],
  ["Explore Nearby", "/explore"],
  ["Why Book Direct", "/compare"],
  ["FAQs & Policies", "/faq"],
  ["Contact", "/contact"],
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#content">Skip to content</a>
        <header className="header shell">
          <Link className="brand" href="/">Edison <em>Nook</em><small>Northern Michigan</small></Link>
          <nav aria-label="Main navigation">
            {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
            <Link href="/guests">Guest Guide</Link>
          </nav>
          <Link className="button" href="/book">Book Your Stay</Link>
        </header>
        <main id="content">{children}</main>
        <footer>
          <div className="shell footer-inner">
            <div><Link className="brand" href="/">Edison <em>Nook</em></Link><p>Petoskey area · Northern Michigan</p></div>
            <nav aria-label="Footer navigation">
              {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
              <Link href="/guests">Guest Guide</Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
