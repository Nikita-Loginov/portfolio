import { telegramClient } from "@/shared/api/axios-instance";

import { ContactMessageInput } from "@/features/contact-message/model/schema";

import { escapeHtml } from "@/shared/utils";

type TelegramMeta = {
  ip?: string;
  page?: string;
};

export const sendTelegramMessage = async (
  data: ContactMessageInput,
  meta?: TelegramMeta
) => {
  const message = `
<b>Новая заявка с сайта</b>

<b>Имя:</b>
${escapeHtml(data.name)}

<b>Email:</b>
${escapeHtml(data.email)}

<b>Сообщение:</b>
${escapeHtml(data.message)}

<b>Время:</b>
${new Date().toLocaleString("ru-RU")}

<b>IP:</b>
${meta?.ip || "Unknown"}

<b>Страница:</b>
${meta?.page || "Unknown"}
`;

  await telegramClient.post(`/bot${process.env.BOT_TOKEN}/sendMessage`, {
    chat_id: process.env.TG_CHAT_ID,
    text: message,
    parse_mode: "HTML",
  });
};
