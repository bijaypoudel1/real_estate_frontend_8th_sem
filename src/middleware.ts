import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  let hasToken = request.cookies.has("access_token");

  if (request.url.includes("_next")) return;

  if (!hasToken && !request.url.includes("/auth/login")) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
  if (hasToken && request.url.includes("/auth/login")) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}
