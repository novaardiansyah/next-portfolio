import { NextRequest, NextResponse } from "next/server";
import { apiFetch } from "@/lib/apiClient";

export async function GET(req: NextRequest) {
  try {
    const code = req.nextUrl.searchParams.get('code');
    const result = await apiFetch(`short-urls/${code}`, {
      headers: {
        'User-Agent': req.headers.get("user-agent") || "next-portfolio",
        'X-Forwarded-For': req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown"
      }
    }, 2);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ status: 500, message: 'Something went wrong!' }, { status: 500 });
  }
}