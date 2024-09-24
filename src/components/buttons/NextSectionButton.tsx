"use client";
import { futuraStd } from "@/util/fonts";
import scrollToNextSection from "@/util/scrolltoNextSection";

interface Props {
  title: string;
  className?: string;
}
// extend this to a html button component
const NextSectionButton = ({ title, className }: Props) => {
  return (
    <button
      onClick={scrollToNextSection}
      className={"inline-block w-fit rounded-sm border border-gold bg-charcoal-900 p-2 px-4 text-center text-lg transition-all duration-200 ease-in-out hover:bg-gold hover:text-[#232323]"
        .concat(" ")
        .concat(futuraStd.className)
        .concat(" ")
        .concat(className ?? "")}
    >
      {title}
    </button>
  );
};

export default NextSectionButton;
