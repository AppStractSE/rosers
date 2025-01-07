import { garamond } from "@/util/fonts";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TfiClose } from "react-icons/tfi";
import ContactForm from "../forms/ContactForm";

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Modal = ({ isOpen, setIsOpen }: Props) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const translation = useTranslations("ContactForm");
  const locale = useLocale();

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
      className={"fixed inset-0 z-10 h-full w-full transform overflow-hidden transition-all delay-75 duration-300 ease-in-out lg:backdrop-blur-sm"
        .concat(" ")
        .concat(
          isOpen
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0",
        )}
    >
      <div
        className={"h-full w-screen overflow-hidden bg-black transition-all duration-300"
          .concat(" ")
          .concat(isOpen ? "opacity-50" : "opacity-0")}
        onClick={handleToggle}
      />
      <div
        className={"absolute inset-0 left-0 right-0 top-0 mx-auto my-auto flex h-full max-w-xl transform flex-col justify-between overflow-y-auto border-[#a286688e] bg-charcoal-700 px-4 py-4 shadow-xl transition-all duration-300 ease-in-out sm:border md:max-h-[90vh] md:px-12 md:py-8 lg:bg-opacity-80"
          .concat(" ")
          .concat(isOpen ? "translate-y-0" : "translate-y-[125%]")}
      >
        <div className="flex items-center justify-between">
          <Link href={`/${locale}`} onClick={handleToggle}>
            <h2
              className={"flex flex-1 justify-center text-3xl uppercase tracking-widest"
                .concat(" ")
                .concat(garamond.className)}
            >
              Rosers
            </h2>
          </Link>
          <button onClick={handleToggle} className="text-3xl">
            <TfiClose />
          </button>
        </div>
        <div className="flex flex-1 flex-col justify-center">
          <h3 className="text-2xl font-bold">{translation("title")}</h3>
          <p className="mt-2">{translation("description")}</p>
          <div className="mt-12 pb-4 md:pb-0">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
