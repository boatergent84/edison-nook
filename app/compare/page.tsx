import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "../seo";
import { BreadcrumbStructuredData } from "../structured-data";

export const metadata: Metadata = pageMetadata({
  title: "Direct Booking at Edison Nook",
  description: "Learn how booking directly with Edison Nook in Boyne Falls will work when reservations open. Rates and availability are not posted yet.",
  path: "/compare",
});

const plans = [
  ["Choose your dates", "When reservations open, you’ll be able to review dates and stay details before sending a booking request."],
  ["Ask the host directly", "Have a question about the house or the area? You’ll be able to contact Edison Nook directly."],
  ["Review the terms first", "Rates, fees, and cancellation terms will be posted before direct reservations open."],
];

export default function Compare() {
  return (
    <section className="shell inner">
      <BreadcrumbStructuredData label="Why Book Direct" path="/compare" />
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
