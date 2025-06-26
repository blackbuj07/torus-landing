import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email } = body;

  if (!name || !email) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  // ✅ Hook to Google Sheets, Notion, or Resend here
  console.log('New signup:', name, email);

  return NextResponse.json({ success: true });
}