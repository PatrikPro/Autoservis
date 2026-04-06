import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/forms/schemas";
import { isSpam } from "@/lib/spam/honeypot";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (isSpam(body.website)) {
      return NextResponse.json({ success: true });
    }

    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0].message },
        { status: 400 }
      );
    }

    // In production, send email or save to DB
    console.log("[Contact]", parsed.data);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Neplatný požadavek." },
      { status: 400 }
    );
  }
}
