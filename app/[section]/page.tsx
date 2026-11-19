import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { bookingUrl, contactEmail, propertyPhotos } from "../site-config";

const titles = {
  stay: "The Stay",
  explore: "Explore Nearby",
  faq: "FAQs & Policies",
  contact: "Contact",
};

type Props = { params: Promise<{ section: string }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(titles).map(section => ({ section }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { section } = await params;
  return { title: titles[section as keyof typeof titles] };
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
          <Link className="button" href="/book">Book Your Stay</Link>
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
          <details><summary>How do I book?</summary><p>{bookingUrl ? "Open the reservation portal to check dates and book." : "Online reservations are coming soon."} <Link href="/book">Visit the booking page</Link>.</p></details>
          {bookingUrl && <details><summary>Where can I see rates and cancellation terms?</summary><p>Review the price and terms for your dates in the reservation portal before you confirm.</p></details>}
          <details><summary>Where is Edison Nook?</summary><p>Edison Nook is in Boyne Falls, just south of the Petoskey ZIP code line. Downtown Petoskey is about 9.6 miles by road. <Link href="/about#nearby-heading">See driving distances to nearby destinations</Link>.</p></details>
          {!propertyPhotos.length && <details><summary>When will property photos be available?</summary><p>Photos will be added to <Link href="/stay">The Stay</Link> as soon as they’re ready.</p></details>}
        </div>
      )}
      {section === "contact" && (
        <div className="panel">
          <h2>Questions about your stay?</h2>
          {contactEmail ? (
            <><p>Send us your travel dates and any questions about Edison Nook.</p><a className="button" href={`mailto:${contactEmail}`}>Email Edison Nook</a></>
          ) : (
            <><p>Contact details will be added before reservations open.</p><Link className="text-link" href="/faq">Read the guest FAQs</Link></>
          )}
        </div>
      )}
    </section>
  );
}
