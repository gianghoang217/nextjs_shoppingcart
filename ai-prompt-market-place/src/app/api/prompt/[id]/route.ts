import { getPrompt } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  // request
  // response
  // request param
  // param => lib/db => get prompt by id => return prompt

  const { id } = await params;
  const parsedId = Number(id);
  if (isNaN(parsedId)) {
    return NextResponse.json({ message: "ID invalid" }, { status: 400 });
  }

  const prompt = getPrompt(parsedId);
  if (!prompt) {
    return NextResponse.json({ message: "Can't find prompt" }, { status: 404 });
  }

  return NextResponse.json({ prompt });
}

// 18:47 | 21:47
// terminal => folder structure => markdown structure
