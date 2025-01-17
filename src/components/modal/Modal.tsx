import { garamond } from "@/util/fonts";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TfiClose } from "react-icons/tfi";
import { twMerge } from "tailwind-merge";

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children: React.ReactNode;
  align?: "center" | "top";
  size?: "sm" | "md" | "lg";
}

const Modal = ({ isOpen, setIsOpen, children, align, size = "sm" }: Props) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const translation = useTranslations("ContactForm");
  const locale = useLocale();
  const sizeMap = {
    sm: "max-w-xl",
    md: "max-w-2xl",
    lg: "max-w-3xl",
  };

  useEffect(() => {
    setMounted(true);
    scrollLock(isOpen);
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const scrollLock = (isOpen: boolean) => {
    if (mounted) {
      document.body.style.overflow = isOpen ? "hidden" : "auto";
    }
  };
  return (
    <div
      className={twMerge(
        "fixed inset-0 z-10 h-screen w-screen transform overflow-hidden transition-all delay-75 duration-300 ease-in-out lg:backdrop-blur-sm",
        isOpen
          ? "visible opacity-100"
          : "pointer-events-none invisible opacity-0",
      )}
    >
      <div
        className={twMerge(
          "h-full w-screen overflow-hidden bg-black transition-all duration-300",
          isOpen ? "opacity-50" : "opacity-0",
        )}
        onClick={handleToggle}
      />
      <div
        className={twMerge(
          "no-scrollbar absolute inset-0 left-0 right-0 top-0 mx-auto my-auto flex h-screen transform flex-col gap-4 overflow-y-auto rounded-sm border-[#a286688e] bg-charcoal-700 shadow-xl transition-all duration-300 ease-in-out sm:border md:max-h-[90vh]",
          isOpen ? "translate-y-0" : "translate-y-[125%]",
          sizeMap[size],
        )}
      >
        <div className="sticky top-0 flex items-center justify-between border-b border-[#a286688e] bg-charcoal-700 px-4 py-4 md:px-8">
          <Link href={`/${locale}`} onClick={handleToggle}>
            <h2
              className={twMerge(
                "flex flex-1 justify-center text-3xl uppercase tracking-widest",
                garamond.className,
              )}
            >
              Rosers
            </h2>
          </Link>
          <button onClick={handleToggle} className="text-3xl">
            <TfiClose />
          </button>
        </div>
        <div
          className={twMerge(
            "flex flex-col bg-charcoal-700 px-4 py-4 md:px-8 md:pb-8",
            align === "top" ? "justify-start" : "justify-center",
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
