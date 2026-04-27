import { NextResponse } from 'next/server';

const store = new Map();
const LIMIT = 5;
const WINDOW_MS = 60 * 60 * 1000; // 1 hour

function checkRateLimit(ip) {
  const now = Date.now();
  const entry = store.get(ip);
  if (!entry || now > entry.resetAt) {
    store.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  if (entry.count >= LIMIT) return true;
  entry.count++;
  return false;
}

export async function POST(request) {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown';

  if (checkRateLimit(ip)) {
    return NextResponse.json(
      { success: false, message: 'Too many submissions. Please try again in an hour.' },
      { status: 429 }
    );
  }

  let formData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json(
      { success: false, message: 'Invalid form data.' },
      { status: 400 }
    );
  }

  formData.set('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_KEY);

  const upstream = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: formData,
  });
  const data = await upstream.json();
  return NextResponse.json(data, { status: upstream.status });
}
