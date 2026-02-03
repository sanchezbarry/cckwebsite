// app/api/login/route.ts
import { scryptSync, timingSafeEqual } from 'crypto';
import { SignJWT } from 'jose';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    const storedHash = process.env.AUTH_PASSWORD_HASH;

    // 1. Check if the hash exists in Env Vars
    if (!storedHash) {
      console.error("Missing AUTH_PASSWORD_HASH in environment variables");
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    // 2. Split the stored salt and hash
    // The format must be: "salt:hash"
    const [salt, key] = storedHash.split(':');
    
    if (!salt || !key) {
      console.error("Invalid hash format. Run the generation script again.");
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    // 3. Hash the incoming password with the same salt
    const hashedBuffer = scryptSync(password, salt, 64);
    const keyBuffer = Buffer.from(key, 'hex');

    // 4. Compare
    const match = timingSafeEqual(hashedBuffer, keyBuffer);

    if (match) {
      // 5. Create JWT Session
      // Make sure AUTH_SECRET is set in your .env file!
      const secret = new TextEncoder().encode(process.env.AUTH_SECRET || 'default-secret-change-me');
      
      const token = await new SignJWT({ user: 'member' }) // 'member' or any identifier
        .setProtectedHeader({ alg: 'HS256' })
        .setExpirationTime('7d')
        .sign(secret);

      (await cookies()).set('auth-token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });

      return NextResponse.json({ success: true });
    }

    // Password did not match
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });

  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}