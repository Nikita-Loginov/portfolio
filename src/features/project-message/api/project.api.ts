import { ProjectMessageInput } from "../model/schema";

import { apiClient } from "@/shared/api/axios-instance";

export const sendProjectMessage = async (data: ProjectMessageInput) => {
  const { data: response } = await apiClient.post("/api/project", data);

  return response;
};
