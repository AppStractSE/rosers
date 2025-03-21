"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
}

const SplashScreen = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    if (document.readyState === "complete") {
      setTimeout(() => setFadeOut(true), 1000);
      setTimeout(() => setIsLoading(false), 1500);
    } else {
      const handleLoad = () => {
        setTimeout(() => setFadeOut(true), 1000);
        setTimeout(() => setIsLoading(false), 1500);
      };
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!isMounted) return null;
  if (isLoading)
    return (
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-[#232323] transition-opacity duration-1000 ${
          fadeOut ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <div
          className={twMerge(
            "relative h-24 w-24 transform animate-pulse transition-all delay-500 duration-1000 md:h-32 md:w-32",
            isLoading && !fadeOut ? "opacity-100" : "opacity-0",
          )}
        >
          <Image fill priority src="/rosers_logo.svg" alt="Logo" />
        </div>
      </div>
    );
  return <>{children}</>;
};

export default SplashScreen;
