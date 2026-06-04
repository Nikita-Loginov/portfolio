import { telegramClient } from "@/shared/api/axios-instance";

import { ProjectMessageInput } from "@/features/project-message/model/schema";

import { escapeHtml } from "@/shared/utils";

type TelegramMeta = {
  ip?: string;
  page?: string;
};

export const sendTelegramProjectMessage = async (
  data: ProjectMessageInput,
  meta?: TelegramMeta
) => {
  const message = `
<b>Новая заявка на создания проекта</b>

<b>Имя:</b>
${escapeHtml(data.name)}

<b>Email:</b>
${escapeHtml(data.email)}

<b>Описание проекта:</b>
${escapeHtml(data.message)}

<b>Сроки:</b>
${escapeHtml(data.deadline ? data.deadline : 'Не указан')}

<b>Бюджет:</b>
${escapeHtml(data.budget ? data.budget : 'Не указан')}

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
