import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { contactEmail, propertyPhotos } from "../site-config";

const titles = {
  stay: "The Stay",
  explore: "Explore Nearby",
  faq: "FAQs & Policies",
  contact: "Contact",
};
const descriptions = {
  stay: "Learn about Edison Nook, a planned Northern Michigan getaway in Boyne Falls opening January 2027.",
  explore: "Explore Petoskey, Little Traverse Bay, Boyne Country, and nearby Northern Michigan destinations from Edison Nook.",
  faq: "Find opening, reservation, and location details for Edison Nook near Petoskey. Planned opening January 2027.",
  contact: "Contact Edison Nook with questions about the planned January 2027 opening in Boyne Falls, Michigan.",
};

type Props = { params: Promise<{ section: string }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(titles).map(section => ({ section }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { section } = await params;
  return {
    title: titles[section as keyof typeof titles],
    description: descriptions[section as keyof typeof descriptions],
    alternates: { canonical: `/${section}` },
  };
}

const places = [
  ["Downtown Petoskey", "Browse the shops and cafés in the Gaslight District, then head down to the waterfront.", "https://www.petoskeydowntown.com/"],
  ["Little Traverse Bay", "Walk a stretch of the Little Traverse Wheelway for views of the bay.", "https://www.trailscouncil.org/little-traverse-wheelway/"],
  ["Boyne Country", "Look for skiing in winter and outdoor activities in the warmer months.", "https://www.boynemountain.com/"],
];

export default async function GuestPage({ params }: Props) {
  const { section } = await params;
  if (!Object.hasOwn(titles, section)) notFound();

  return (
    <section className="shell inner">
      <p className="kicker">Edison Nook · Northern Michigan</p>
      <h1>{titles[section as keyof typeof titles]}</h1>
      {section === "stay" && (
        <>
          <p className="lead">A Petoskey-area retreat for easy mornings and unhurried evenings after a day out around Little Traverse Bay.</p>
          <div className="panel">
            <h2>Property gallery</h2>
            {propertyPhotos.length ? (
              <div className="gallery">
                {propertyPhotos.map(photo => (
                  <div className="gallery-photo" key={photo.src}><Image {...photo} fill sizes="(max-width: 600px) 90vw, 320px" /></div>
                ))}
              </div>
            ) : <p>Photos of Edison Nook are coming soon.</p>}
          </div>
          <Link className="button" href="/book">Plan Your 2027 Stay</Link>
        </>
      )}
      {section === "explore" && (
        <>
          <p className="lead">Spend some time by the bay, explore downtown Petoskey, or add a day in Boyne Country to your trip.</p>
          <p><Link className="text-link" href="/about">Discover the hilltop setting and more things to do</Link></p>
          <div className="place-grid">
            {places.map(([name, description, href]) => (
              <article className="panel" key={name}>
                <h2>{name}</h2><p>{description}</p><a className="text-link" href={href}>Visit {name}</a>
              </article>
            ))}
          </div>
        </>
      )}
      {section === "faq" && (
        <div className="faq">
          <details><summary>When is Edison Nook opening?</summary><p>The planned opening is January 2027. We’ll share updates as the date gets closer.</p></details>
          <details><summary>Can I book now?</summary><p>Reservations are not open yet. Rates and live availability will be added closer to opening. <Link href="/book">See opening details</Link>.</p></details>
          <details><summary>Where is Edison Nook?</summary><p>Edison Nook is in Boyne Falls, just south of the Petoskey ZIP code line. Downtown Petoskey is about 9.6 miles by road. <Link href="/about#nearby-heading">See driving distances to nearby destinations</Link>.</p></details>
          {!propertyPhotos.length && <details><summary>When will property photos be available?</summary><p>Photos will be added to <Link href="/stay">The Stay</Link> as soon as they’re ready.</p></details>}
        </div>
      )}
      {section === "contact" && (
        <div className="panel">
          <h2>Questions about your stay?</h2>
          {contactEmail ? (
            <><p>Ask a question or request an update about Edison Nook’s planned opening.</p><a className="button" href={`mailto:${contactEmail}?subject=Edison%20Nook%20opening%20update`}>Email Edison Nook</a></>
          ) : (
            <><p>Contact details will be added before reservations open.</p><Link className="text-link" href="/faq">Read the guest FAQs</Link></>
          )}
        </div>
      )}
    </section>
  );
}
