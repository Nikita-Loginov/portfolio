"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { PreloaderProvider } from "@/shared";
import { ModalProvider } from "@/shared/providers/ModalProvider/ModalProvider";
import { ScrollTop } from "@/shared/ui/scrollTop/ScrollTop";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5000 * 60,
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <PreloaderProvider>
        <ModalProvider>
          {children}

          <Toaster position="top-right" />

          <ScrollTop />
          
          <div id="modal-root"></div>
        </ModalProvider>
      </PreloaderProvider>
    </QueryClientProvider>
  );
}