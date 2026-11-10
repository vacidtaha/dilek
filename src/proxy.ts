import { type NextRequest, NextResponse } from "next/server";
import { defaultLocale, hasLocale } from "@/i18n/config";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const firstSegment = pathname.split("/")[1];

  if (hasLocale(firstSegment)) return;

  request.nextUrl.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  // Kalıcı yönlendirme: arama motorları dil ekli adresi asıl adres olarak kabul eder.
  return NextResponse.redirect(request.nextUrl, 308);
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
