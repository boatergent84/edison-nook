import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Edison Nook",
  description: "Meet Edison Nook, a hilltop getaway in Boyne Falls near Walloon Lake, Petoskey, and Boyne Mountain Resort.",
};

const nearbyDestinations = [
  ["Walloon Lake Village public beach", "7.3 miles"],
  ["Downtown Petoskey", "9.6 miles"],
  ["Bay Harbor Village", "12.6 miles"],
  ["Boyne Mountain Resort", "15.4 miles"],
  ["Downtown Harbor Springs", "16.7 miles"],
];

export default function About() {
  return (
    <section className="shell inner">
      <p className="kicker">Boyne Falls / Petoskey · Northern Michigan</p>
      <h1>About <em>Edison Nook</em></h1>
      <div className="about-intro">
        <h2>A hilltop hideaway in Boyne Falls</h2>
        <p className="lead">Edison Nook sits high above Johnson Road in Boyne Falls, just south of the Petoskey ZIP code line. From the hilltop, the view of the wooded hills changes with the seasons. Start the day with coffee and a look out over the treetops. In fall, watch the hills turn gold and red. In winter, come back from the slopes to a quieter corner of Northern Michigan.</p>
        <p>Michigan DNR state forest land is nearby, in the Gaylord Forest Management Unit. For a walk in the woods, pick up the North Country Trail at its public crossing on Johnson Road. <a className="text-link" href="https://northcountrytrail.org/events/j45-081625/">Find the Johnson Road crossing</a>.</p>
      </div>

      <section className="panel nearby" aria-labelledby="nearby-heading">
        <h2 id="nearby-heading">How close is Edison Nook?</h2>
        <p>Approximate driving distances from Edison Nook.</p>
        <dl>
          {nearbyDestinations.map(([name, distance]) => (
            <div key={name}><dt>{name}</dt><dd>{distance}</dd></div>
          ))}
        </dl>
      </section>

      <h2>Spend a day out Up North</h2>
      <div className="guest-grid about-grid">
        <article className="panel">
          <h3>Vineyards & tasting rooms</h3>
          <p>Take an afternoon to taste Northern Michigan wines at Boyne Valley Vineyards or Walloon Lake Winery. Both are part of the Petoskey Wine Region, with more vineyard stops around the bay.</p>
          <a className="text-link" href="https://petoskey.wine/wineries/">Explore the Petoskey Wine Region</a>
        </article>
        <article className="panel">
          <h3>Petoskey & Little Traverse Bay</h3>
          <p>Browse shops in Petoskey’s Gaslight District, then head to Petoskey State Park for sandy shoreline, walks along Lake Michigan, and a chance to spot the distinctive patterns of a Petoskey stone.</p>
          <a className="text-link" href="https://www.michigan.gov/recsearch/parks/petoskey">Visit Petoskey State Park</a>
        </article>
        <article className="panel">
          <h3>Boyne Mountain Resort</h3>
          <p>Spend a winter day skiing or snowboarding at Boyne Mountain. In other seasons, take the chairlift up to SkyBridge Michigan for a view across the valley.</p>
          <a className="text-link" href="https://www.boynemountain.com/">Explore Boyne Mountain</a>
        </article>
        <article className="panel">
          <h3>Trail riding & side-by-sides</h3>
          <p>For a motorized ride, look up the Indian River ORV Route in the Michigan DNR maps. Choose a route open to your machine’s width, and check current closures, permits, and trailhead access before heading out.</p>
          <a className="text-link" href="https://www.michigan.gov/dnr/things-to-do/orv-riding/where">Find designated ORV routes</a>
        </article>
        <article className="panel">
          <h3>A day on Walloon Lake</h3>
          <p>Pack a picnic and bring a paddleboard or a towel. The public beach at Melrose Township Park in Walloon Lake Village makes an easy stop for a swim or a few quiet hours by the water.</p>
          <a className="text-link" href="https://www.michiganwatertrails.org/location.asp?aid=5290&amp;ait=av">Find public lake access</a>
        </article>
      </div>
      <div className="actions">
        <Link className="button" href="/book">Book Your Stay</Link>
        <Link className="text-link" href="/explore">Explore Nearby</Link>
      </div>
    </section>
  );
}
