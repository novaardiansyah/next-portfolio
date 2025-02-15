import { NextRequest, NextResponse } from "next/server";
import { apiFetch } from "@/lib/apiClient";
export async function GET(req: NextRequest) {
  try {
    const data = await apiFetch("skills");
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ status: 500, message: 'Something went wrong!' }, { status: 500 });
  }
}