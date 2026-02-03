import { scryptSync, timingSafeEqual } from 'crypto';
import { SignJWT } from 'jose';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { password } = await request.json();
  const storedHash = process.env.AUTH_PASSWORD_HASH;

  // 1. Basic check for username and existence of hash
  if (password !== process.env.AUTH_PASSWORD || !storedHash) {
    return NextResponse.json({ error: 'Invalid' }, { status: 401 });
  }

  // 2. Split the stored salt and hash
  const [salt, key] = storedHash.split(':');
  
  // 3. Hash the incoming password with the same salt
  const hashedBuffer = scryptSync(password, salt, 64);
  const keyBuffer = Buffer.from(key, 'hex');

  // 4. Compare using constant-time comparison (prevents timing attacks)
  const match = timingSafeEqual(hashedBuffer, keyBuffer);

  if (match) {
    // ... Issue JWT with 'jose' here (same as previous code)
    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ error: 'Invalid' }, { status: 401 });
}