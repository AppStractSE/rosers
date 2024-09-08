"use client";
import { futuraStd } from "@/util/fonts";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  title: string;
  content?: React.ReactNode;
  titleColor?: string;
  borderColor?: string;
  uppercaseTitle?: boolean;
}

const Accordion = ({
  title,
  content,
  titleColor,
  borderColor,
  uppercaseTitle,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div
      className={"cursor-pointer overflow-hidden border-b py-6 transition-all duration-300 ease-in-out"
        .concat(" ")
        .concat(borderColor ? borderColor : "border-[#8B7257]")}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center justify-between">
        <h6
          className={"text-base font-bold tracking-wide"
            .concat(" ")
            .concat(futuraStd.className)
            .concat(" ")
            .concat(uppercaseTitle ? "uppercase" : "")
            .concat(" ")
            .concat(titleColor ? titleColor : "text-[#8B7257]")}
        >
          {title}
        </h6>
        <div
          className={"transform transition-transform duration-300"
            .concat(" ")
            .concat(titleColor ? titleColor : "text-[#8B7257]")
            .concat(" ")
            .concat(isOpen ? "rotate-180" : "")}
        >
          <BsChevronDown />
        </div>
      </div>
      <div
        className={"overflow-hidden duration-300 ease-in-out"
          .concat(" ")
          .concat(isOpen ? "mt-4 max-h-[1000px]" : "max-h-0")}
      >
        {content}
      </div>
    </div>
  );
};

export default Accordion;
