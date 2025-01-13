"use client";
import { futuraStd } from "@/util/fonts";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { twMerge } from "tailwind-merge";

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
      className={twMerge(
        "cursor-pointer overflow-hidden border-b py-6 transition-all duration-300 ease-in-out",
        borderColor ? borderColor : "border-[#8B7257]",
      )}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center justify-between">
        <h6
          className={twMerge(
            "text-base font-bold tracking-wide",
            uppercaseTitle ? "uppercase" : "",
            titleColor ? titleColor : "text-[#8B7257]",
            futuraStd.className,
          )}
        >
          {title}
        </h6>
        <div
          className={twMerge(
            "transform transition-transform duration-300",
            titleColor ? titleColor : "text-[#8B7257]",
            isOpen ? "rotate-180" : "",
          )}
        >
          <BsChevronDown />
        </div>
      </div>
      <div
        className={twMerge(
          "overflow-hidden duration-300 ease-in-out",
          isOpen ? "mt-4 max-h-[1000px]" : "max-h-0",
        )}
      >
        {content}
      </div>
    </div>
  );
};

export default Accordion;
