"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
}

export default function SplashScreen({ children }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    if (document.readyState === "complete") {
      setTimeout(() => setFadeOut(true), 500);
      setTimeout(() => setIsLoading(false), 1000);
    } else {
      const handleLoad = () => {
        setTimeout(() => setFadeOut(true), 500);
        setTimeout(() => setIsLoading(false), 1000);
      };
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!isMounted) return null;

  return (
    <>
      {isLoading ? (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-[#232323] transition-opacity duration-500 ${
            fadeOut ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
        >
          <div
            className={twMerge(
              "relative h-24 w-24 transform transition-transform duration-1000 md:h-32 md:w-32",
              isLoading && !fadeOut
                ? "translate-y-0 animate-pulse"
                : "-translate-y-full",
            )}
          >
            <Image fill priority src="/rosers_logo.svg" alt="Logo" />
          </div>
        </div>
      ) : null}
      <div
        className={`${
          isLoading ? "pointer-events-none opacity-0" : "opacity-100"
        } transition-opacity duration-500`}
      >
        {children}
      </div>
    </>
  );
}
