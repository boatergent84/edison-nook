import Image from "next/image";
import houseExterior from "./images/edison-nook-exterior.webp";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edison Nook | Northern Michigan Getaway",
  description: "Discover Edison Nook, a Boyne Falls getaway near Petoskey and Little Traverse Bay. Planned opening January 2027.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <section className="shell hero">
        <div className="hero-copy">
          <p className="kicker">Boyne Falls / Petoskey · Northern Michigan</p>
          <h1>A little time <em>Up North.</em></h1>
          <p className="lead">Slow mornings, days by Little Traverse Bay, and a place to come back to. Make Edison Nook your home base in Northern Michigan.</p>
          <div className="actions">
            <Link className="button" href="/book">Plan Your 2027 Stay</Link>
            <Link className="text-link" href="/about">Get to know Edison Nook</Link>
          </div>
        </div>
        <div className="hero-art">
          <Image
            src={houseExterior}
            alt="Edison Nook’s white farmhouse with two stacked porches"
            sizes="(max-width: 790px) 85vw, 40vw"
            priority
          />
        </div>
      </section>
      <section className="shell home-links" aria-label="Plan your getaway">
        <article><p className="kicker">Edison Nook</p><h2>The Stay</h2><p>Get a feel for the retreat and see what’s coming to the property gallery.</p><Link className="text-link" href="/stay">See the stay</Link></article>
        <article><p className="kicker">Little Traverse Bay</p><h2>Explore Nearby</h2><p>Spend a day on the waterfront, wander downtown Petoskey, or head out into Boyne Country.</p><Link className="text-link" href="/explore">Browse the local guide</Link></article>
        <article><p className="kicker">Planned opening · January 2027</p><h2>Plan Ahead</h2><p>Reservations aren’t open yet. Find out what’s planned and send an inquiry about a future stay.</p><Link className="text-link" href="/book">Get opening details</Link></article>
      </section>
    </>
  );
}
