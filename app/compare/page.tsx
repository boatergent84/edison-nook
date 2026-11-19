import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Booking Direct",
  description: "Learn what to expect when Edison Nook direct reservations open. Planned opening January 2027; rates are not posted yet.",
  alternates: { canonical: "/compare" },
};

const plans = [
  ["Choose your dates", "When reservations open, you’ll be able to review dates and stay details before sending a booking request."],
  ["Ask the host directly", "Have a question about the house or the area? You’ll be able to contact Edison Nook directly."],
  ["Review the terms first", "Rates, fees, and cancellation terms will be posted before direct reservations open."],
];

export default function Compare() {
  return (
    <section className="shell inner">
      <p className="kicker">Planned opening · January 2027</p>
      <h1>Booking <em>Direct</em></h1>
      <p className="lead">We’re getting Edison Nook ready for its first guests. Direct reservations aren’t open yet, and rates will be added closer to launch.</p>
      <div className="prelaunch-grid">
        {plans.map(([title, description]) => <article className="panel" key={title}><h2>{title}</h2><p>{description}</p></article>)}
      </div>
      <p className="prelaunch-note">No rates or live availability are being shown yet. The opening date is planned for January 2027.</p>
      <div className="actions"><Link className="button" href="/book">Get opening details</Link><Link className="text-link" href="/faq">Read the FAQs</Link></div>
    </section>
  );
}
