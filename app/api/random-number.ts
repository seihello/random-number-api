import { NextResponse } from "next/server";

export async function GET() {
  const randomNumber = Math.floor(Math.random() * 90000) + 10000;
  return NextResponse.json({ number: randomNumber }, { status: 200 });
}
