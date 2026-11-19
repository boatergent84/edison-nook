"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = { contactEmail: string | null };
const weekdayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function dayKey(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function prettyDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(date);
}

export default function BookingCalendar({ contactEmail }: Props) {
  const today = useMemo(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate());
  }, []);
  const openingDate = useMemo(() => new Date(2027, 0, 1), []);
  const earliestDate = today > openingDate ? today : openingDate;
  const firstMonth = new Date(earliestDate.getFullYear(), earliestDate.getMonth(), 1);
  const [month, setMonth] = useState(() => firstMonth);
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [guests, setGuests] = useState("2");

  const calendarDays = useMemo(() => {
    const first = new Date(month.getFullYear(), month.getMonth(), 1);
    const start = new Date(first);
    start.setDate(first.getDate() - first.getDay());
    return Array.from({ length: 42 }, (_, index) => {
      const date = new Date(start);
      date.setDate(start.getDate() + index);
      return date;
    });
  }, [month]);

  const nights = checkIn && checkOut ? Math.round((checkOut.getTime() - checkIn.getTime()) / 86400000) : 0;
  const subject = encodeURIComponent("Edison Nook opening update");
  const body = encodeURIComponent(
    `Hello,\n\nI’m interested in a future stay at Edison Nook.\n\nPreferred check-in: ${checkIn ? prettyDate(checkIn) : ""}\nPreferred check-out: ${checkOut ? prettyDate(checkOut) : ""}\nGuests: ${guests}\n\nPlease send me an update when reservations open. I understand these dates are not confirmed.\n\nThank you!`,
  );
  const requestHref = contactEmail ? `mailto:${contactEmail}?subject=${subject}&body=${body}` : null;

  function selectDate(date: Date) {
    if (date < earliestDate) return;
    if (!checkIn || checkOut || date <= checkIn) {
      setCheckIn(date);
      setCheckOut(null);
      return;
    }
    setCheckOut(date);
  }

  function isInRange(date: Date) {
    return !!checkIn && !!checkOut && date > checkIn && date < checkOut;
  }

  function isSelected(date: Date) {
    return (!!checkIn && dayKey(date) === dayKey(checkIn)) || (!!checkOut && dayKey(date) === dayKey(checkOut));
  }

  return (
    <div className="booking-layout">
      <div className="panel calendar-panel">
        <div className="calendar-heading">
          <div>
            <h2>Choose your dates</h2>
            <p>{checkIn && !checkOut ? "Now choose your checkout date." : "Select a check-in date, then a checkout date."}</p>
          </div>
          <div className="calendar-controls" aria-label="Change calendar month">
            <button className="calendar-arrow" type="button" aria-label="Previous month" onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() - 1, 1))} disabled={month.getFullYear() === firstMonth.getFullYear() && month.getMonth() === firstMonth.getMonth()}><ChevronLeft size={20} /></button>
            <button className="calendar-arrow" type="button" aria-label="Next month" onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() + 1, 1))}><ChevronRight size={20} /></button>
          </div>
        </div>
        <div className="calendar-month" aria-live="polite">{new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(month)}</div>
        <div className="calendar-grid" role="group" aria-label="Select check-in and checkout dates">
          {weekdayNames.map((day) => <div className="calendar-weekday" key={day} aria-hidden="true">{day}</div>)}
          {calendarDays.map((date) => {
            const outsideMonth = date.getMonth() !== month.getMonth();
            const disabled = date < earliestDate;
            const selected = isSelected(date);
            const range = isInRange(date);
            return <button
              className={`calendar-day${outsideMonth ? " outside" : ""}${selected ? " selected" : ""}${range ? " in-range" : ""}`}
              type="button"
              key={dayKey(date)}
              disabled={disabled}
              aria-pressed={selected}
              aria-label={`${prettyDate(date)}${selected ? " selected" : ""}${disabled ? ", before the first date shown" : ""}`}
              onClick={() => selectDate(date)}
            >{date.getDate()}</button>;
          })}
        </div>
        <p className="calendar-note">Preferred-date inquiries only. These dates are not confirmed, and the calendar is not yet connected to Airbnb.</p>
      </div>

      <aside className="panel stay-summary" aria-live="polite">
        <p className="kicker">Your stay</p>
        <h2>Make it a getaway.</h2>
        <dl className="stay-dates">
          <div><dt>Check-in</dt><dd>{checkIn ? prettyDate(checkIn) : "Choose a date"}</dd></div>
          <div><dt>Check-out</dt><dd>{checkOut ? prettyDate(checkOut) : "Choose a date"}</dd></div>
          {nights > 0 && <div><dt>Length</dt><dd>{nights} {nights === 1 ? "night" : "nights"}</dd></div>}
        </dl>
        <label className="guest-count" htmlFor="guest-count">Guests
          <input id="guest-count" type="number" min="1" step="1" value={guests} onChange={(event) => setGuests(event.target.value)} />
        </label>
        {checkIn && checkOut ? (
          requestHref ? <a className="button booking-submit" href={requestHref}>Request an opening update</a> : <p className="booking-contact-note">Your preferred dates are selected. Contact details will be added soon.</p>
        ) : <p className="booking-prompt">Choose preferred dates after the planned January 2027 opening.</p>}
      </aside>
    </div>
  );
}
