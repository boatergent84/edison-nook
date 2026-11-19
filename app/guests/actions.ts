"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { accessDuration, cookieName, createAccessToken, guestPassword, passwordMatches } from "./access";

export async function unlock(formData: FormData) {
  const password = guestPassword();
  const submitted = formData.get("password");
  if (!password || typeof submitted !== "string" || !passwordMatches(submitted, password)) {
    redirect("/guests?error=1");
  }

  (await cookies()).set(cookieName, createAccessToken(password), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/guests",
    maxAge: accessDuration,
  });
  redirect("/guests");
}

export async function lock() {
  (await cookies()).set(cookieName, "", { path: "/guests", maxAge: 0 });
  redirect("/guests");
}
