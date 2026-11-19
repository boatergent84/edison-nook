import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Airbnb vs. Booking Direct" };

const comparisons = [
  ["Two-night total", "$480", "$540"],
  ["Check-in", "Request 2 p.m. when available", "Standard 4 p.m. check-in"],
  ["Checkout", "Request noon when available", "Standard 10 a.m. checkout"],
  ["Questions and special requests", "Contact Edison Nook directly", "Message the host through Airbnb"],
];

export default function Compare() {
  return (
    <section className="shell inner">
      <p className="kicker">Compare booking options</p>
      <h1>Airbnb vs. <em>Booking Direct</em></h1>
      <p className="lead">Booking direct could mean a lower total and more flexibility with arrival and departure.</p>
      <div className="comparison">
        <table>
          <caption>Example only. These sample prices and times are for illustration. Compare actual totals and terms for your dates before booking.</caption>
          <thead><tr><th scope="col">Your stay</th><th scope="col">Book direct</th><th scope="col">Airbnb</th></tr></thead>
          <tbody>{comparisons.map(([label, direct, airbnb]) => (
            <tr key={label}><th scope="row">{label}</th><td>{direct}</td><td>{airbnb}</td></tr>
          ))}</tbody>
        </table>
      </div>
      <p>In this example, booking direct saves $60. Early arrival and late checkout depend on the reservation schedule and host confirmation.</p>
      <div className="actions"><Link className="button" href="/book">Book Your Stay</Link></div>
    </section>
  );
}
