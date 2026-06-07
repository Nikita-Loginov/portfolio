import { useEffect, useState } from "react";

interface TouchDeviceOptions {
  mobileBreakpoint?: number; 
  checkCoarse?: boolean; 
}

export const useTouchDevice = (options: TouchDeviceOptions = {}) => {
  const { mobileBreakpoint = 768, checkCoarse = true } = options;
  
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);
  const [isMobileWidth, setIsMobileWidth] = useState<boolean>(false);

  const checkTouchSupport = (): boolean => {
    const hasTouchSupport = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    const hasCoarsePointer = checkCoarse && window.matchMedia('(pointer: coarse)').matches;
    
    return hasTouchSupport || hasCoarsePointer;
  };

  const checkWidth = (): boolean => {
    return window.innerWidth < mobileBreakpoint;
  };

  useEffect(() => {
    const updateTouchStatus = () => {
      const touchSupport = checkTouchSupport();
      const widthCheck = checkWidth();
      
      setIsTouchDevice(touchSupport || widthCheck);
      setIsMobileWidth(widthCheck);
    };

    updateTouchStatus();

    window.addEventListener('resize', updateTouchStatus);
    
    const mediaQuery = window.matchMedia('(pointer: coarse)');
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', updateTouchStatus);
    }

    return () => {
      window.removeEventListener('resize', updateTouchStatus);
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', updateTouchStatus);
      }
    };
  }, [mobileBreakpoint, checkCoarse]);

  return { isTouchDevice, isMobileWidth };
};