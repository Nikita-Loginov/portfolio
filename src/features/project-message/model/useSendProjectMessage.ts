import { useMutation } from "@tanstack/react-query";

import { sendProjectMessage } from "../api/project.api";

export const useSendProjectMessage = () => {
  return useMutation({
    mutationFn: sendProjectMessage,
  });
};
