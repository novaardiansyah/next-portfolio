import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const res = await fetch(`${process.env.LARAVEL_API_URL}/skills`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${process.env.LARAVEL_API_KEY}`,
      },
    });

    if (!res.ok) {
      throw new Error(`Laravel API error: ${res.statusText}`);
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error(error instanceof Error ? error.message : 'An unknown error occurred');
    return NextResponse.json({ error: "Gagal fetch data dari server internal!" }, { status: 500 });
  }
}