import { useState, useEffect } from "react";

export const useIsTouchDevice = (): boolean => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouchDevice = () => {
      const isTouch =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(hover: none) and (pointer: coarse)").matches;

      setIsTouchDevice(isTouch);
    };

    checkTouchDevice();
  }, []);

  return isTouchDevice;
};
