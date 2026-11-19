# Edison Nook

A Next.js site for a Northern Michigan vacation rental.

Run `npm ci` and `npm run dev`. Check the production build with `npm run build`.

## Direct reservations

Set `EDISON_NOOK_BOOKING_URL` to the HTTPS guest checkout or booking-engine URL and
`EDISON_NOOK_CONTACT_EMAIL` to the public guest inquiry address, then redeploy. The
site links guests to the configured provider for availability, rates and fees,
house rules, cancellation terms, payment, and reservation confirmation. Until a
booking URL is configured, the site displays a coming-soon message.

Configure real inventory, policies, price and tax rules, payments, and channel
sync in the booking provider before enabling the link. Add property photos and
verified occupancy, sleeping arrangements, amenities, and arrival details to
the guest pages as they become available.

For the homepage and gallery, put images under `public/photos/` and add their
paths and descriptive alt text to `propertyPhotos` in `app/site-config.ts`. The
first image is used on the homepage.

## Guest guide and comparison

The guest guide uses sample stay instructions and credentials. On Vercel Preview
and in local development, the sample guide password is `nook-preview`. For a
production deployment, the guide stays locked until you set a strong,
server-side `EDISON_NOOK_GUEST_PASSWORD`. Changing it invalidates previous guest
sessions. Use individual reservation messages for real door codes.

Replace the illustrative booking totals and timing examples when actual terms
are confirmed.
