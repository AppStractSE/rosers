"use client";
import { futuraStd } from "@/util/fonts";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  title: string;
  content?: React.ReactNode;
}

const Accordion = ({ title, content }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div
      className="overflow-hidden transition-all duration-300 ease-in-out cursor-pointer py-6 border-b border-[#8B7257]"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center justify-between">
        <h6
          className={`${futuraStd.className} uppercase tracking-wide text-base font-bold text-[#8B7257]`}
        >
          {title}
        </h6>
        <div
          className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        >
          <BsChevronDown />
        </div>
      </div>
      <div
        className={`overflow-hidden duration-300 ease-in-out ${
          isOpen ? "max-h-[1000px] mt-4" : "max-h-0"
        }`}
      >
        {content}
      </div>
    </div>
  );
};

export default Accordion;
