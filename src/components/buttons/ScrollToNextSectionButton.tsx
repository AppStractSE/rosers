"use client";

import { futuraStd } from "@/util/fonts";
import scrollToNextSection from "@/util/scrolltoNextSection";
import { twMerge } from "tailwind-merge";

interface Props {
  title: string;
}

const ScrollToNextSectionButton = ({ title }: Props) => {
  return (
    <>
      <button
        onClick={() => scrollToNextSection(3, 32)}
        className={twMerge(
          "mt-12 inline-block w-full rounded-sm border border-[#a286688e] bg-[#232323] py-2.5 text-center text-sm tracking-[0.2em] transition-all duration-200 ease-in-out hover:bg-brass hover:text-[#232323] sm:mt-16 sm:w-fit sm:px-12 sm:py-4 sm:text-base sm:text-brass",
          futuraStd.className,
        )}
      >
        {title}
      </button>
    </>
  );
};

export default ScrollToNextSectionButton;
