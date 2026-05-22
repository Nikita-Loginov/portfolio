import { useMutation } from "@tanstack/react-query";

import { sendContactMessage } from "../api/contact.api";

export const useSendContactMessage = () => {
  return useMutation({
    mutationFn: sendContactMessage,
  });
};
