import type { Metadata } from "next";
import Link from "next/link";
import houseExterior from "./images/edison-nook-exterior.webp";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.edisonnook.com"),
  title: { default: "Edison Nook | Boyne Falls Vacation Rental Near Petoskey", template: "%s | Edison Nook" },
  description: "Discover Edison Nook, a planned Boyne Falls, Michigan vacation rental near Petoskey, Walloon Lake, and Boyne Mountain. Opening planned for January 2027.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Edison Nook",
    title: "Edison Nook | Boyne Falls Vacation Rental Near Petoskey",
    description: "A planned Northern Michigan getaway in Boyne Falls, near Petoskey, Walloon Lake, and Boyne Mountain. Opening planned for January 2027.",
    url: "/",
    images: [{ url: houseExterior.src, width: houseExterior.width, height: houseExterior.height, alt: "Edison Nook farmhouse in Boyne Falls, Michigan" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Edison Nook | Boyne Falls Vacation Rental Near Petoskey",
    description: "A planned Northern Michigan getaway in Boyne Falls, near Petoskey, Walloon Lake, and Boyne Mountain. Opening planned for January 2027.",
    images: [houseExterior.src],
  },
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
