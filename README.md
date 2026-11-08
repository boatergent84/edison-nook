# Edison Nook — website starter

Elegant, responsive Next.js starter for Edison Nook, a Northern Michigan short-term rental.

## Start in GitHub Codespaces
1. Create a new GitHub repository named `edison-nook`.
2. Upload the contents of this folder to the repository (or push with Git).
3. Open the repository in Codespaces.
4. Run `npm install` and then `npm run dev`.
5. Open port 3000.
6. Import the GitHub repository into Vercel for deployment.

## Important: demo-only booking
The booking form currently displays **illustrative** pricing: $225/night, $125 cleaning fee, 10% illustrative tax, and $35 each for early check-in and late checkout. The prices, tax and availability are NOT configured for the property. The booking button is intentionally disabled. No payments are collected and no bookings are saved.

## Before accepting bookings
- Confirm property details, occupancy limits, taxes, cancellation policies, and actual pricing.
- Implement a server-side booking database (e.g. Supabase), exclusive reservation holds, and Stripe Checkout with verified webhooks.
- Implement Airbnb iCal import/export and monitor sync status. iCal is not instant, so plan for race conditions/double-booking risk or use a compatible channel manager.
- Make early check-in and late checkout subject to cleaning/adjacent reservation constraints.
- Add authenticated owner admin, transactional emails, guest terms/privacy policy, and proper production testing.
- Replace all placeholder blocks with photos and publish verified guest reviews only.
