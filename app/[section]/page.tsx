import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { contactEmail, propertyPhotos } from "../site-config";
import { pageMetadata } from "../seo";
import { BreadcrumbStructuredData } from "../structured-data";

const titles = {
  stay: "The Stay",
  explore: "Things to Do Near Boyne Falls & Petoskey",
  faq: "FAQs & Policies",
  contact: "Contact",
};
const descriptions = {
  stay: "See what is planned for Edison Nook, a Boyne Falls, Michigan vacation rental near Petoskey. The opening is planned for January 2027.",
  explore: "Plan a Northern Michigan getaway with ideas for Petoskey, Walloon Lake, Little Traverse Bay, Boyne Falls, and Boyne Mountain.",
  faq: "Get answers about the planned January 2027 opening, future reservations, the inquiry calendar, and Edison Nook’s Boyne Falls location.",
  contact: "Contact Edison Nook about a future stay at this planned Boyne Falls, Michigan getaway near Petoskey.",
};
const metadataTitles = {
  stay: "Planned Boyne Falls Vacation Rental",
  explore: "Things to Do Near Boyne Falls & Petoskey",
  faq: "Boyne Falls Stay FAQs",
  contact: "Contact Edison Nook in Boyne Falls",
};
const breadcrumbTitles = {
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
  if (!Object.hasOwn(titles, section)) return {};
  return {
    ...pageMetadata({
      title: metadataTitles[section as keyof typeof metadataTitles],
      description: descriptions[section as keyof typeof descriptions],
      path: `/${section}`,
    }),
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
      <BreadcrumbStructuredData label={breadcrumbTitles[section as keyof typeof breadcrumbTitles]} path={`/${section}`} />
      <p className="kicker">Edison Nook · Northern Michigan</p>
      <h1>{section === "explore" ? <>Things to Do Near <em>Boyne Falls & Petoskey</em></> : section === "stay" ? <>The Planned <em>Stay</em></> : titles[section as keyof typeof titles]}</h1>
      {section === "stay" && (
        <>
          <p className="lead">Edison Nook is a planned Northern Michigan vacation rental in Boyne Falls, Michigan, near Petoskey, Walloon Lake, and Boyne Mountain Resort. It’s being prepared as a home base for easy mornings and unhurried evenings after a day out around Little Traverse Bay.</p>
          <p>The planned opening is January 2027. Reservations are not open yet, and property photos and additional stay details will be added as they are ready.</p>
          <div className="panel">
            <h2>Boyne Falls property photos</h2>
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
          <p className="lead">Use this local guide to plan a Northern Michigan trip around Petoskey, Little Traverse Bay, Walloon Lake, and Boyne Falls. Edison Nook’s opening is planned for January 2027; travel times and seasonal schedules can vary.</p>
          <p><Link className="text-link" href="/about">See the setting and approximate driving distances</Link></p>
          <div className="place-grid">
            {places.map(([name, description, href]) => (
              <article className="panel" key={name}>
                <h2>{name}</h2><p>{description}</p><a className="text-link" href={href}>Visit {name}</a>
              </article>
            ))}
          </div>
          <section className="area-guide-section" aria-labelledby="boyne-area-heading">
            <h2 id="boyne-area-heading">A Boyne Falls getaway with the Petoskey area nearby</h2>
            <p>Boyne Falls is a convenient starting point for exploring several Northern Michigan destinations. Head toward downtown Petoskey for its Gaslight District and waterfront, visit a public access point on Walloon Lake, or plan a day around Boyne Country. Edison Nook’s <Link href="/about">approximate driving distances</Link> can help you compare the area before your trip.</p>
          </section>
          <div className="guest-grid area-guide-grid">
            <article className="panel">
              <h2>Petoskey and Little Traverse Bay</h2>
              <p>Explore downtown Petoskey, then look for shoreline views and walking routes around Little Traverse Bay. The Little Traverse Wheelway connects waterfront communities; check the trail organization’s current route and access information before heading out.</p>
              <a className="text-link" href="https://www.trailscouncil.org/little-traverse-wheelway/">Plan for the Little Traverse Wheelway</a>
            </article>
            <article className="panel">
              <h2>Walloon Lake and Boyne Falls</h2>
              <p>Walloon Lake Village and the public beach at Melrose Township Park offer a lakeside stop to add to a day in the Boyne Falls area. Review local park information for current conditions and access details.</p>
              <a className="text-link" href="https://www.michiganwatertrails.org/location.asp?aid=5290&amp;ait=av">See Walloon Lake public access information</a>
            </article>
            <article className="panel">
              <h2>Boyne Mountain in every season</h2>
              <p>Boyne Mountain Resort is one of the area’s major year-round destinations, with activities that change by season. Check the resort’s calendar, operating hours, and activity details when planning your dates.</p>
              <a className="text-link" href="https://www.boynemountain.com/">Check Boyne Mountain activities</a>
            </article>
            <article className="panel">
              <h2>Trails and Northern Michigan outdoors</h2>
              <p>The North Country Trail has a public crossing on Johnson Road, and state forest recreation is available in the broader area. Before a hike or ride, check current trail access, closures, and rules with the managing agency.</p>
              <a className="text-link" href="https://northcountrytrail.org/events/j45-081625/">Find the Johnson Road trail crossing</a>
            </article>
            <article className="panel">
              <h2>Petoskey Wine Region</h2>
              <p>Visitors can add local vineyards and tasting rooms to a Northern Michigan itinerary. Check each winery’s current hours and reservation policies before visiting.</p>
              <a className="text-link" href="https://petoskey.wine/wineries/">Browse wineries in the Petoskey Wine Region</a>
            </article>
          </div>
        </>
      )}
      {section === "faq" && (
        <div className="faq">
          <details><summary>When is Edison Nook opening?</summary><p>The planned opening is January 2027. We’ll share updates as the date gets closer.</p></details>
          <details><summary>Can I book now?</summary><p>Reservations are not open yet. Rates and live availability will be added closer to opening. <Link href="/book">See opening details</Link>.</p></details>
          <details><summary>Does the calendar show Airbnb availability?</summary><p>No. The calendar is for preferred-date inquiries only. It does not sync with Airbnb, display confirmed availability, or reserve a stay.</p></details>
          <details><summary>Where is Edison Nook?</summary><p>Edison Nook is in Boyne Falls, just south of the Petoskey ZIP code line. Downtown Petoskey is about 9.6 miles by road. <Link href="/about#nearby-heading">See driving distances to nearby destinations</Link>.</p></details>
          <details><summary>What is near the Boyne Falls property?</summary><p>Petoskey, Walloon Lake, Little Traverse Bay, and Boyne Mountain are among the destinations in the area. <Link href="/explore">Browse the Northern Michigan area guide</Link>.</p></details>
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
