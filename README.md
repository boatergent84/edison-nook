# Edison Nook

A Next.js site for a Northern Michigan vacation rental.

Run `npm ci` and `npm run dev`. Check the production build with `npm run build`.

## Prelaunch reservations

The site is in prelaunch mode for a planned January 2027 opening. Set
`EDISON_NOOK_CONTACT_EMAIL` to the public guest inquiry address, then redeploy.
Guests can choose preferred dates from January 2027 onward and open a pre-filled
email asking for an opening update. This is not a reservation or live-availability
calendar. Keep `EDISON_NOOK_BOOKING_URL` unset until rates, terms, inventory, and
the booking provider are ready; the current prelaunch page does not use it.

Before opening reservations, configure inventory, rates, tax rules, policies,
payments, and channel sync in the booking provider, then update the booking page.
Add property photos and verified occupancy, sleeping arrangements, amenities,
and arrival details to the guest pages as they become available.

For the homepage and gallery, put images under `public/photos/` and add their
paths and descriptive alt text to `propertyPhotos` in `app/site-config.ts`. The
first image is used on the homepage.

## Guest guide

The guest guide uses sample stay instructions and credentials. On Vercel Preview
and in local development, the sample guide password is `nook-preview`. For a
production deployment, the guide stays locked until you set a strong,
server-side `EDISON_NOOK_GUEST_PASSWORD`. Changing it invalidates previous guest
sessions. Use individual reservation messages for real door codes.

