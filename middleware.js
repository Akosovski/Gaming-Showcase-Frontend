import { NextResponse } from 'next/server';

export function middleware(req) {
  const res = NextResponse.next();

  // Set CORS headers
  res.headers.set('Access-Control-Allow-Credentials', 'true');
  res.headers.set('Access-Control-Allow-Origin', 'http://akosovski-playstats-backend.up.railway.app/'); 
  res.headers.set('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.headers.set('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204 });
  }

  return res;
}
