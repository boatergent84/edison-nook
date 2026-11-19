import type { Metadata } from "next";
import { cookies } from "next/headers";
import { cookieName, guestPassword, hasAccess } from "./access";
import { lock, unlock } from "./actions";

export const metadata: Metadata = { title: "Guest Guide", robots: { index: false, follow: false } };

type Props = { searchParams: Promise<{ error?: string }> };

export default async function Guests({ searchParams }: Props) {
  const password = guestPassword();
  const token = (await cookies()).get(cookieName)?.value ?? "";
  const authorized = password && hasAccess(token, password);
  const { error } = await searchParams;

  return (
    <section className="shell inner">
      <p className="kicker">For confirmed guests</p>
      <h1>Guest <em>Guide</em></h1>
      {!authorized ? (
        <div className="panel">
          <h2>Unlock your stay details</h2>
          {password ? (
            <>
              <p>Enter the guide password from your Edison Nook welcome message.</p>
              {error === "1" && <p className="form-error" role="alert">That password didn’t match. Please try again.</p>}
              <form action={unlock} className="guest-form">
                <label htmlFor="guest-password">Guest guide password</label>
                <input type="password" id="guest-password" name="password" autoComplete="current-password" required />
                <button className="button" type="submit">Unlock Guest Guide</button>
              </form>
            </>
          ) : <p>The guest guide will be available once guest access is set up.</p>}
        </div>
      ) : (
        <>
          <p className="lead">Welcome to Edison Nook. Here’s what to know from arrival through checkout.</p>
          <p className="sample-note"><strong>Sample guide.</strong> All codes, times, rules, and instructions below are examples.</p>
          <div className="guest-grid">
            <article className="panel">
              <h2>Arrival & entry</h2>
              <ul><li>Check-in starts at 4 p.m.</li><li>Example keypad code: <code>0000</code></li><li>Use the keypad at the front door. Your host will send the actual code before arrival.</li></ul>
            </article>
            <article className="panel">
              <h2>Wi-Fi</h2>
              <dl><dt>Network</dt><dd><code>EdisonNook-Example</code></dd><dt>Password</dt><dd><code>example-wifi-only</code></dd></dl>
            </article>
            <article className="panel">
              <h2>Laundry & house rules</h2>
              <ul><li>Detergent is on the shelf above the washer. Please clean the dryer’s lint screen after use.</li><li>Place used towels in the laundry basket when you leave.</li><li>Quiet hours are 10 p.m. to 8 a.m. No smoking indoors or parties.</li></ul>
            </article>
            <article className="panel">
              <h2>Checkout checklist</h2>
              <ul><li>Check out by 10 a.m.</li><li>Load the dishwasher and take bagged trash to the outdoor bin.</li><li>Check for chargers and belongings, turn off the lights, and lock the door.</li></ul>
            </article>
          </div>
          <article className="panel">
            <h2>Floor Plan</h2>
            <p>Floor plan coming soon.</p>
          </article>
          <form action={lock}><button className="button" type="submit">Lock Guest Guide</button></form>
        </>
      )}
    </section>
  );
}
