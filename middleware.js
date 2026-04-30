import { NextResponse } from 'next/server';

export function middleware(request) {
  const nonce = btoa(crypto.randomUUID());

  const csp = [
    "default-src 'self'",
    // nonce allows specific trusted inline scripts; 'unsafe-inline' is intentionally absent
    `script-src 'self' 'nonce-${nonce}' https://va.vercel-scripts.com`,
    // unsafe-inline retained for style-src — required by motion/framer-motion inline styles
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: blob: https://upload.wikimedia.org https://www.tableau.com https://www.docker.com https://www.matillion.com https://git-scm.com",
    "connect-src 'self' https://api.web3forms.com https://vitals.vercel-insights.com",
    "frame-ancestors 'none'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
  ].join('; ');

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  response.headers.set('Content-Security-Policy', csp);

  return response;
}

export const config = {
  matcher: [
    // Skip static assets, images, and well-known files — they don't need per-request CSP
    '/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml)$).*)',
  ],
};
