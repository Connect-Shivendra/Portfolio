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
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    request.headers.get('x-real-ip') ??
    'unknown';

  if (checkRateLimit(ip)) {
    return NextResponse.json(
      { success: false, message: 'Too many submissions. Please try again in an hour.' },
      { status: 429 }
    );
  }

  if (!process.env.WEB3FORMS_KEY) {
    return NextResponse.json(
      { success: false, message: 'Service configuration error.' },
      { status: 500 }
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

  // Honeypot — bots fill this hidden field, humans don't
  const website = formData.get('website')?.toString().trim() ?? '';
  if (website) {
    return NextResponse.json({ success: false, message: 'Invalid submission.' }, { status: 400 });
  }

  const name = formData.get('name')?.toString().trim() ?? '';
  const email = formData.get('email')?.toString().trim() ?? '';
  const message = formData.get('message')?.toString().trim() ?? '';

  if (!name || !email || !message) {
    return NextResponse.json(
      { success: false, message: 'Name, email, and message are required.' },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { success: false, message: 'Invalid email address.' },
      { status: 400 }
    );
  }
  if (name.length > 100 || message.length > 2000) {
    return NextResponse.json(
      { success: false, message: 'Input exceeds maximum length.' },
      { status: 400 }
    );
  }

  formData.set('access_key', process.env.WEB3FORMS_KEY);

  let upstream;
  try {
    upstream = await Promise.race([
      fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData }),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Timeout')), 8000)
      ),
    ]);
  } catch {
    return NextResponse.json(
      { success: false, message: 'Service unavailable. Please try again later.' },
      { status: 503 }
    );
  }

  let data;
  try {
    data = await upstream.json();
  } catch {
    return NextResponse.json(
      { success: false, message: 'Unexpected response from service.' },
      { status: 500 }
    );
  }

  return NextResponse.json(data, { status: upstream.status });
}
