import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.edisonnook.com"),
  title: { default: "Edison Nook | A Northern Michigan getaway", template: "%s | Edison Nook" },
  description: "Discover Edison Nook, a Northern Michigan getaway near Petoskey. Planned opening January 2027; reservations are not open yet.",
};

const links = [
  ["About", "/about"],
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
          <Link className="button" href="/book">Opening Jan 2027</Link>
        </header>
        <div className="prelaunch-banner" role="status">Planned opening: January 2027 <span>·</span> Reservations are not open yet</div>
        <main id="content">{children}</main>
        <footer>
          <div className="shell footer-inner">
            <div><Link className="brand" href="/">Edison <em>Nook</em></Link><p>Boyne Falls / Petoskey · Northern Michigan</p></div>
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
