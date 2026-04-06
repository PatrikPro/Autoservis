import { NextRequest, NextResponse } from "next/server";
import { reservationRepo } from "@/lib/reservations/repoMemory";

const EXPORT_TOKEN = process.env.EXPORT_TOKEN || "change-me-before-deploy";

export async function GET(request: NextRequest) {
  const token =
    request.headers.get("x-export-token") ||
    request.nextUrl.searchParams.get("token");

  if (token !== EXPORT_TOKEN) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const all = await reservationRepo.getAll();

  if (all.length === 0) {
    return new NextResponse("Žádné rezervace.", {
      status: 200,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  const header =
    "id,serviceId,vehicleCategory,vehicleMake,vehicleModel,vehicleYear,licensePlate,date,time,name,email,phone,note,createdAt";
  const rows = all.map((r) =>
    [
      r.id,
      r.serviceId,
      r.vehicleCategory,
      r.vehicleMake,
      r.vehicleModel,
      r.vehicleYear,
      r.licensePlate,
      r.date,
      r.time,
      `"${r.name}"`,
      r.email,
      r.phone,
      `"${r.note || ""}"`,
      r.createdAt,
    ].join(",")
  );

  const csv = [header, ...rows].join("\n");

  return new NextResponse(csv, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": "attachment; filename=reservations.csv",
    },
  });
}
