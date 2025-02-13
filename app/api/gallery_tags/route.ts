import { NextRequest, NextResponse } from "next/server";
import { apiFetch } from "@/lib/apiClient";
export async function GET(req: NextRequest) {
  try {
    const data = await apiFetch("gallery_tags");
    return NextResponse.json(data);
  } catch (error) {
    error = error instanceof Error ? error.message : "An unknown error occurred"
    return NextResponse.json({ status: false, error }, { status: 500 });
  }
}