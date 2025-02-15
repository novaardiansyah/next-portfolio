import { NextRequest, NextResponse } from "next/server";
import { apiFetch } from "@/lib/apiClient";
export async function POST(req: NextRequest) {
  try {
    const data = await apiFetch("contact_messages", {
      method: "POST",
      body: await req.json()
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ status: 500, message: 'Something went wrong!' }, { status: 500 });
  }
}