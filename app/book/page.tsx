import type { Metadata } from "next";
import Link from "next/link";
import BookingCalendar from "./booking-calendar";
import { contactEmail } from "../site-config";

export const metadata: Metadata = {
  title: "Opening January 2027",
  description: "Plan a future stay at Edison Nook in Boyne Falls, Michigan. Reservations are not open yet; planned opening January 2027.",
  alternates: { canonical: "/book" },
};

export default function Book() {
  return (
    <section className="shell inner">
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
