import { NextResponse } from "next/server";
import { generateSearchIndex } from "@/lib/search";

export const dynamic = "force-static";

export async function GET() {
  const index = generateSearchIndex();
  return NextResponse.json(index);
}
