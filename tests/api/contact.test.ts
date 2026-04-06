import { describe, it, expect, vi } from "vitest";
import { POST } from "@/app/api/contact/route";
import { NextRequest } from "next/server";

function makeRequest(body: Record<string, unknown>) {
  return new NextRequest("http://localhost:3000/api/contact", {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });
}

describe("POST /api/contact", () => {
  it("accepts a valid contact submission", async () => {
    const res = await POST(
      makeRequest({
        name: "Jan Novák",
        email: "jan@example.cz",
        message: "Dobrý den, mám dotaz ohledně servisu.",
      })
    );
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.success).toBe(true);
  });

  it("rejects short name", async () => {
    const res = await POST(
      makeRequest({
        name: "J",
        email: "jan@example.cz",
        message: "Dobrý den, mám dotaz.",
      })
    );
    expect(res.status).toBe(400);
  });

  it("rejects invalid email", async () => {
    const res = await POST(
      makeRequest({
        name: "Jan Novák",
        email: "not-an-email",
        message: "Dobrý den, mám dotaz ohledně servisu.",
      })
    );
    expect(res.status).toBe(400);
  });

  it("rejects short message", async () => {
    const res = await POST(
      makeRequest({
        name: "Jan Novák",
        email: "jan@example.cz",
        message: "Krátká",
      })
    );
    expect(res.status).toBe(400);
  });

  it("silently accepts honeypot spam", async () => {
    const res = await POST(
      makeRequest({
        name: "SpamBot",
        email: "spam@bot.com",
        message: "Buy cheap stuff now!!!",
        website: "http://spam.com",
      })
    );
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.success).toBe(true);
  });
});
