import dayjs from "dayjs";
import "dayjs/locale/ru";

dayjs.locale("ru");

import { pluralize } from "./pluralize";
import { PLURALIZE_VARIANTS } from "../config/pluralize/pluralize.config";

export const formatPeriod = (start: string, end: string | null): string => {
  const startDate = dayjs(start);
  const endDate = end ? dayjs(end) : null;

  return `${startDate.format("MMMM YYYY")} — ${
    endDate ? endDate.format("MMMM YYYY") : "настоящее время"
  }`;
};

export const getPeriodDuration = (
  start: string,
  end: string | null
): string => {
  const startDate = dayjs(start);
  const endDate = end ? dayjs(end) : dayjs();

  const totalMonths = endDate.diff(startDate, "month") + 1;

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const yearsText = years
    ? `${years} ${pluralize(years, PLURALIZE_VARIANTS.year)}`
    : "";

  const monthsText = months
    ? `${months} ${pluralize(months, PLURALIZE_VARIANTS.month)}`
    : "";

  return [yearsText, monthsText].filter(Boolean).join(" ");
};
