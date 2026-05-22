import { ContactMessageInput } from "../model/schema";

import { apiClient } from "@/shared/api/axios-instance";

export const sendContactMessage = async (data: ContactMessageInput) => {
  const { data: response } = await apiClient.post("/api/contact", data);

  return response;
};
