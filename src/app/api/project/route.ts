import { headers } from "next/headers";
import { NextResponse } from "next/server";

import { sendTelegramProjectMessage } from "@/server/services/telegram/sendTelegramProjectMessage";

import { projectMessageSchema } from "@/features/project-message/model/schema";

export async function POST(req: Request) {
  const body = await req.json();

  const parsed = projectMessageSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }

  const headersList = await headers();

  const ip =
    headersList.get("x-forwarded-for") ||
    headersList.get("x-real-ip") ||
    "Unknown";

  const page = headersList.get("referer") || "Unknown";

  await sendTelegramProjectMessage(parsed.data, {
    ip,
    page
  });

  return NextResponse.json({ ok: true });
}
