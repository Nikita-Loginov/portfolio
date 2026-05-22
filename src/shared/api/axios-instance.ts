import axios from "axios";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SITE_URL || "",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const telegramClient = axios.create({
  baseURL: "https://api.telegram.org",
});