import "server-only";
import { createHmac, timingSafeEqual } from "node:crypto";

export const cookieName = "edison-guest-access";
export const accessDuration = 8 * 60 * 60;

export function guestPassword() {
  return process.env.EDISON_NOOK_GUEST_PASSWORD ||
    (process.env.VERCEL_ENV === "preview" || process.env.NODE_ENV === "development" ? "nook-preview" : null);
}

function safeEqual(left: string, right: string) {
  const a = Buffer.from(left);
  const b = Buffer.from(right);
  return a.length === b.length && timingSafeEqual(a, b);
}

export function passwordMatches(submitted: string, password: string) {
  const digest = (value: string) => createHmac("sha256", password).update(value).digest("hex");
  return safeEqual(digest(submitted), digest(password));
}

function signature(expiry: string, password: string) {
  return createHmac("sha256", password).update(`edison-nook-guest-access:${expiry}`).digest("hex");
}

export function createAccessToken(password: string) {
  const expiry = String(Math.floor(Date.now() / 1000) + accessDuration);
  return `${expiry}.${signature(expiry, password)}`;
}

export function hasAccess(token: string, password: string) {
  const [expiry, proof, extra] = token.split(".");
  return !extra && /^\d{10}$/.test(expiry) && Boolean(proof) &&
    Number(expiry) > Math.floor(Date.now() / 1000) && safeEqual(proof, signature(expiry, password));
}
