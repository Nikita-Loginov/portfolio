"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Preloader } from "@/shared/ui/preloader/Preloader";

type PreloaderContextType = {
  loading: boolean;
  progress: number;
};

const PreloaderContext = createContext<PreloaderContextType>({
  loading: true,
  progress: 0,
});

export const usePreloader = () => useContext(PreloaderContext);

export const PreloaderProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId: number;
    let interval: NodeJS.Timeout;
  
    let targetProgress = 0;
    let isAssetsLoaded = false;
  
    document.body.classList.add("load");
  
    const animate = () => {
      setProgress((prev) => {
        const diff = targetProgress - prev;
        return prev + diff * 0.1;
      });
  
      rafId = requestAnimationFrame(animate);
    };
  
    rafId = requestAnimationFrame(animate);
  
    interval = setInterval(() => {
      if (!isAssetsLoaded) {
        targetProgress += Math.random() * 3; 
  
        if (targetProgress >= 60) {
          targetProgress = 60;
        }
      }
    }, 100);
  
    const waitForAssets = async () => {
      const fontPromise = document.fonts?.ready;
  
      const images = Array.from(document.images);
  
      const imagePromises = images.map((img) => {
        if (img.complete) return Promise.resolve();
  
        return new Promise((resolve) => {
          img.onload = resolve;
          img.onerror = resolve;
        });
      });
  
      await Promise.all([fontPromise, ...imagePromises]);
    };
  
    const handleLoad = async () => {
      await waitForAssets();
  
      isAssetsLoaded = true;
  
      targetProgress = 100;
  
      setTimeout(() => {
        setLoading(false);
  
        document.body.classList.remove("load");
        document.body.classList.add("ready");
  
        cancelAnimationFrame(rafId);
        clearInterval(interval);
      }, 700);
    };
  
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }
  
    return () => {
      cancelAnimationFrame(rafId);
      clearInterval(interval);
      window.removeEventListener("load", handleLoad);
  
      document.body.classList.remove("load");
    };
  }, []);

  if (loading) {
    return <Preloader progress={Math.floor(progress)} />;
  }

  return (
    <PreloaderContext.Provider value={{ loading, progress }}>
      {children}
    </PreloaderContext.Provider>
  );
};
