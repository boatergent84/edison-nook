import type { Metadata } from "next";
import Link from "next/link";
import BookingCalendar from "./booking-calendar";
import { contactEmail } from "../site-config";
import { pageMetadata } from "../seo";
import { BreadcrumbStructuredData } from "../structured-data";

export const metadata: Metadata = pageMetadata({
  title: "Planned January 2027 Opening",
  description: "Plan a future stay at Edison Nook, a Boyne Falls, Michigan getaway near Petoskey. Reservations are not open yet; use the calendar for a preferred-date inquiry.",
  path: "/book",
});

export default function Book() {
  return (
    <section className="shell inner">
      <BreadcrumbStructuredData label="Plan a Future Stay" path="/book" />
      <p className="kicker">Planned opening · January 2027</p>
      <h1>Coming <em>Up North.</em></h1>
      <div className="prelaunch-note" role="status"><strong>Reservations aren’t open yet.</strong> We’re preparing Edison Nook for a planned January 2027 opening. This calendar is for preferred-date inquiries only; it does not show availability or reserve a stay.</div>
      <p className="booking-intro">Have a future trip in mind? Choose preferred dates and guest count to send us an inquiry. We’ll share updates as the opening gets closer.</p>
      <BookingCalendar contactEmail={contactEmail} />
      <div className="actions">
        <Link className="text-link" href="/compare">Why book direct when reservations open</Link>
        <Link className="text-link" href="/faq">Read the booking FAQs</Link>
      </div>
    </section>
  );
}
