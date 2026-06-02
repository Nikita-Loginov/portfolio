import { useRouter } from "next/navigation";

export const useBackNavigation = (fallbackPath: string = "/") => {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push(fallbackPath);
    }
  };

  return handleBack;
};
