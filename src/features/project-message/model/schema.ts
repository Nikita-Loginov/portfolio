import z from "zod";

export const DEADLINE_OPTIONS = [
  "1-3 месяца",
  "3-6 месяцев",
  "6-12 месяцев",
  "Более 12 месяцев",
] as const;

export const BUDGET_OPTIONS = [
  "до 50 тыс.руб",
  "50-150 тыс. руб",
  "150-500 тыс.руб",
  "Более 500 тыс. руб",
] as const;

export const projectMessageSchema = z.object({
  name: z.string().trim().min(2, "Имя должно содержать минимум 2 символа"),

  email: z.string().trim().email("Введите корректный email адрес"),

  message: z
    .string()
    .trim()
    .min(2, "Сообщение должно содержать минимум 2 символа"),

  deadline: z.enum(DEADLINE_OPTIONS).optional().nullable(),

  budget: z.enum(BUDGET_OPTIONS).optional().nullable(),
});

export type ProjectMessageInput = z.infer<typeof projectMessageSchema>;
