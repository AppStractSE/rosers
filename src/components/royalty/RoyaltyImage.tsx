"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";

const RoyaltyImage = () => {
  const imageBaseClasses =
    "h-full w-full object-cover transition-all duration-300 ease-in-out transition-opacity ease-in-out";
  const loadingClasses =
    " data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-100/10 data-[loaded=false]:blur-sm";
  return (
    <div className="mx-auto mt-8 max-w-[250px] md:max-w-sm">
      <Image
        data-loaded="false"
        onLoad={(event) => {
          event.currentTarget.setAttribute("data-loaded", "true");
        }}
        src="/riksvapnet.webp"
        priority
        width={1920}
        height={1080}
        quality={100}
        alt="Riksvapnet"
        blurDataURL="/riksvapnet.webp"
        placeholder="blur"
        className={twMerge(imageBaseClasses, loadingClasses)}
      />
    </div>
  );
};

export default RoyaltyImage;
