import { NextRequest, NextResponse } from "next/server";
import { reservationSchema } from "@/lib/forms/schemas";
import { isSpam } from "@/lib/spam/honeypot";
import { reservationRepo } from "@/lib/reservations/repoMemory";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (isSpam(body.website)) {
      return NextResponse.json({ success: true });
    }

    const parsed = reservationSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0].message },
        { status: 400 }
      );
    }

    const reservation = await reservationRepo.create(parsed.data);

    console.log("[Reservation]", reservation);

    return NextResponse.json({ success: true, id: reservation.id });
  } catch {
    return NextResponse.json(
      { error: "Neplatný požadavek." },
      { status: 400 }
    );
  }
}
