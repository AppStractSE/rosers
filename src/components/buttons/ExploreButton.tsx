"use client";
import { futuraStd } from "@/util/fonts";
import scrollToNextSection from "@/util/scrolltoNextSection";
import { useTranslations } from "next-intl";
import { IoChevronDownSharp } from "react-icons/io5";

const ExploreButton = () => {
  const translation = useTranslations("Home");
  return (
    <button
      className="group absolute bottom-0 mb-4 mt-12 grid cursor-pointer place-items-center gap-4 duration-200 ease-in-out hover:scale-110"
      onClick={scrollToNextSection}
    >
      <p
        className={futuraStd.className
          .concat(" ")
          .concat("text-xxs uppercase tracking-[0.2em]")}
      >
        {translation("HeroSection.buttonText")}
      </p>
      <IoChevronDownSharp className="animate-pulse text-2xl transition-all duration-200 ease-in md:text-4xl" />
    </button>
  );
};

export default ExploreButton;
