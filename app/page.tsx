import Image from "next/image";
import houseExterior from "./images/edison-nook-exterior.webp";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="shell hero">
        <div className="hero-copy">
          <p className="kicker">Boyne Falls / Petoskey · Northern Michigan</p>
          <h1>A little time <em>Up North.</em></h1>
          <p className="lead">Slow mornings, days by Little Traverse Bay, and a place to come back to. Make Edison Nook your home base in Northern Michigan.</p>
          <div className="actions">
            <Link className="button" href="/book">Book Your Stay</Link>
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
        <article><p className="kicker">Before you travel</p><h2>Plan Your Visit</h2><p>Find booking updates and answers to common questions about staying at Edison Nook.</p><Link className="text-link" href="/faq">Read the FAQs</Link></article>
      </section>
    </>
  );
}
