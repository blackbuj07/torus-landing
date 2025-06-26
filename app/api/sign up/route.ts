import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email } = body;

  if (!name || !email) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  const submittedAt = new Date().toISOString();

  // Replace with your real Sheet.best URL
  const SHEET_URL = 'https://api.sheetbest.com/sheets/cce5886c-49d0-48c1-a1b8-a0721524cf22';

  await fetch(SHEET_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      Name: name,
      Email: email,
      "Submitted At": submittedAt,
    }),
  });

  return NextResponse.json({ success: true });
}