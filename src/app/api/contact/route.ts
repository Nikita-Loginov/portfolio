import { headers } from "next/headers";
import { NextResponse } from "next/server";

import { sendTelegramMessage } from "@/server/services/telegram/sendTelegramMessage";

import { contactMessageSchema } from "@/features/contact-message/model/schema";

export async function POST(req: Request) {
  const body = await req.json();

  const parsed = contactMessageSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid data" },
      { status: 400 }
    );
  }

  const headersList = await headers();

  const ip =
    headersList.get("x-forwarded-for") ||
    headersList.get("x-real-ip") ||
    "Unknown";

  await sendTelegramMessage(parsed.data, {
    ip,
    page: req.url,
  });

  return NextResponse.json({ ok: true });
}