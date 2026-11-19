function secureUrl(value: string | undefined) {
  if (!value) return null;
  try {
    const url = new URL(value);
    return url.protocol === "https:" && !url.username && !url.password ? url.href : null;
  } catch {
    return null;
  }
}

export const bookingUrl = secureUrl(process.env.EDISON_NOOK_BOOKING_URL);
export const contactEmail = process.env.EDISON_NOOK_CONTACT_EMAIL?.trim() || null;

// Store property photos under public/photos and add their paths here.
export const propertyPhotos: { src: string; alt: string }[] = [];
