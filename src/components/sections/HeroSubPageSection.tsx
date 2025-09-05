"use client";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface Props {
  image?: string;
}

const HeroSubPageSection = ({ image }: Props) => {
  const imageBaseClasses =
    "h-auto max-h-[82.5vh] object-cover w-full object-cover transition-all ease-in-out";
  const loadingClasses =
    " data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-100/10 data-[loaded=false]:blur-sm";
  return (
    <section className="w-full border-b border-b-brass">
      <Image
        data-loaded="false"
        onLoad={(event) => {
          event.currentTarget.setAttribute("data-loaded", "true");
        }}
        className={twMerge(imageBaseClasses, loadingClasses)}
        src={image ?? "/hero-image.webp"}
        priority
        height={1080}
        width={1920}
        quality={100}
        alt="Hero image"
        blurDataURL={image}
        placeholder="blur"
      />
    </section>
  );
};

export default HeroSubPageSection;
