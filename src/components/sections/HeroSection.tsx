"use client";
import Rosers from "@/util/Rosers";
import { futuraStd, garamond } from "@/util/fonts";
import { useTranslations } from "next-intl";
import { IoChevronDownSharp } from "react-icons/io5";

const HeroSection = () => {
  const translation = useTranslations("Home");
  return (
    <section className="h-dynamic relative flex w-full flex-col items-center justify-between border-b border-[#a286688e] bg-[url('/hero-image.webp')] bg-cover px-4 text-center">
      <div className="h-dynamic absolute inset-0 w-full bg-gradient-to-b from-charcoal-700 via-charcoal-900 to-charcoal-600 opacity-70 lg:opacity-60" />
      <div className="relative mx-auto flex max-w-[620px] flex-grow flex-col items-center justify-center pt-16 md:pt-20 lg:pt-0">
        <div className="space-y-6">
          <div className="flex justify-center">
            <Rosers className="h-20 w-20 md:h-28 md:w-28" />
          </div>
          <div className="space-y-12">
            <h1
              className={"text-balance text-4xl leading-tight md:text-5xl md:leading-tight"
                .concat(" ")
                .concat(futuraStd.className)}
            >
              {translation("HeroSection.title")}
            </h1>
            <p
              className={"mx-auto hidden text-xl xs:block md:text-2xl"
                .concat(" ")
                .concat(garamond.className)}
            >
              {translation("HeroSection.description")}
            </p>
          </div>
        </div>
        <div className="group absolute bottom-0 mb-4 mt-12 grid cursor-pointer place-items-center gap-4 duration-200 ease-in-out hover:scale-110">
          <p
            className={futuraStd.className
              .concat(" ")
              .concat("text-xxs uppercase tracking-[0.2em]")}
          >
            {translation("HeroSection.buttonText")}
          </p>
          <IoChevronDownSharp className="animate-pulse text-2xl transition-all duration-200 ease-in md:text-4xl" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
