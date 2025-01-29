"use client";
import { futuraStd, garamond } from "@/util/fonts";
import scrollToNextSection from "@/util/scrolltoNextSection";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import MobileHeroSection from "./MobileHeroSection";

interface Props {
  title: string;
  description: string;
  image: string;
  showLogo?: boolean;
}

const HeroSection = ({ title, description, image, showLogo }: Props) => {
  const translation = useTranslations("Home");
  const imageBaseClasses =
    "h-full w-full object-cover object-top transition-all ease-in-out";
  const loadingClasses =
    " data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-100/10 data-[loaded=false]:blur-sm";
  return (
    <>
      <MobileHeroSection
        title={translation("HeroSection.title")}
        description={translation("HeroSection.description")}
        buttonText={translation("HeroSection.buttonText")}
        image={image}
      />
      <section className="relative hidden h-full min-h-[90vh] w-full flex-col items-center justify-end border-b border-[#a286688e] px-4 py-12 lg:flex xl:py-24">
        <Image
          data-loaded="false"
          onLoad={(event) => {
            event.currentTarget.setAttribute("data-loaded", "true");
          }}
          quality={100}
          priority
          alt=""
          fill
          src={image}
          blurDataURL={image}
          placeholder="blur"
          className={twMerge(imageBaseClasses, loadingClasses)}
        />
        <div className="absolute inset-0 h-full min-h-[90vh] w-full bg-gradient-to-b from-charcoal-700 via-charcoal-900 to-charcoal-600 opacity-50" />
        <div className="relative h-full w-full max-w-screen-xl space-y-2 px-4 2xl:px-0">
          <div className="">
            <h1
              className={twMerge(
                "max-w-[620px] text-4xl leading-tight md:text-5xl md:leading-tight",
                futuraStd.className,
              )}
            >
              {title}
            </h1>
            <p
              className={twMerge(
                "mt-4 max-w-[620px] text-xl md:text-2xl",
                garamond.className,
              )}
            >
              {description}
            </p>
            <button
              onClick={() => scrollToNextSection(2, 32)}
              className={twMerge(
                "mt-12 inline-block w-full rounded-sm border border-[#a286688e] bg-[#232323] py-2.5 text-center text-sm tracking-[0.2em] transition-all duration-200 ease-in-out hover:bg-brass hover:text-[#232323] sm:mt-16 sm:w-fit sm:px-12 sm:py-4 sm:text-base sm:text-brass",
                futuraStd.className,
              )}
            >
              {translation("HeroSection.buttonText")}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
