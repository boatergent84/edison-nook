import type { Metadata } from "next";
import Link from "next/link";
import { bookingUrl, contactEmail } from "../site-config";

export const metadata: Metadata = { title: "Book Your Stay" };

export default function Book() {
  return (
    <section className="shell inner">
      <p className="kicker">Reservations</p>
      <h1>Book Your <em>Stay</em></h1>
      <div className="panel">
        {bookingUrl ? (
          <>
            <h2>Check your dates</h2>
            <p>Choose your dates and guest count in the reservation portal. Review availability, the full price, and the cancellation terms before you confirm.</p>
            <a className="button" href={bookingUrl}>Check Availability</a>
          </>
        ) : (
          <>
            <h2>Online reservations are coming soon</h2>
            <p>The Edison Nook reservation calendar is getting ready. Check back for available dates and rates.</p>
            {contactEmail && <a className="button" href={`mailto:${contactEmail}?subject=Edison%20Nook%20stay%20inquiry`}>Ask About a Stay</a>}
          </>
        )}
      </div>
      <div className="actions">
        <Link className="text-link" href="/compare">Compare Airbnb and booking direct</Link>
        <Link className="text-link" href="/faq">Read the booking FAQs</Link>
      </div>
    </section>
  );
}
