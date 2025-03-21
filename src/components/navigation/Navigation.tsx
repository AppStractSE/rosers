"use client";

import { futuraStd, garamond } from "@/util/fonts";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { twMerge } from "tailwind-merge";
import Drawer from "../drawer/Drawer";
import ContactForm from "../forms/ContactForm";
import Modal from "../modal/Modal";
import { NavItem } from "./data";

const NavigationLink = ({ href, label, isActive }: NavItem) => {
  const locale = useLocale();
  const baseClassNames =
    "p-2 min-w-fit text-base hover:underline hover:underline-offset-4 ";
  const isActiveClassNames = isActive ? "underline underline-offset-4" : "";
  const linkClassNames = `${baseClassNames} hidden md:block`;
  return (
    <Link
      href={`/${locale}${href}`}
      className={twMerge(linkClassNames, isActiveClassNames)}
    >
      {label}
    </Link>
  );
};

const Divider = () => (
  <div className="hidden h-6 min-w-[1.5px] bg-[#a286688e] md:block" />
);

const Navigation = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState<string>("");
  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  useEffect(() => {
    setIsDrawerOpen(false);
  }, [pathname]);

  const handleScroll = () => {
    if (window.scrollY > 0) setIsScrolled(true);
    else setIsScrolled(false);
  };

  const locale = useLocale();

  const translation = useTranslations();
  const navItems = translation.raw("NavItems");
  const contactButton = translation.raw("ContactButton");

  return (
    <>
      <header className="sticky top-0 z-10 w-full border-b border-[#a286688e] bg-charcoal-800 bg-opacity-90 px-4 backdrop-blur-sm lg:backdrop-blur-md 2xl:px-16">
        <div
          className={twMerge(
            "mx-auto flex max-w-screen-xl items-center justify-between transition-all delay-200 duration-1000 ease-in-out",
            isMounted ? "opacity-100" : "-translate-y-4 opacity-0 blur-xl",
          )}
        >
          <nav
            className={twMerge(
              "lg:order-0 order-1 flex flex-1 flex-row-reverse items-center justify-start gap-4 text-xs transition-all duration-300 ease-in-out md:py-4 lg:flex-row lg:justify-start 2xl:text-base",
              futuraStd.className,
            )}
          >
            <button
              className="scale-x-[-1] py-4 text-3xl md:text-2xl lg:scale-x-[1]"
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            >
              <BiMenuAltLeft />
            </button>
            <Divider />
            {navItems.map((item: NavItem) => (
              <NavigationLink
                key={item.label}
                href={item.href}
                label={item.label}
                isActive={currentPath === `/${locale}${item.href}`}
              />
            ))}
          </nav>
          <div className="flex flex-1 lg:order-1 lg:justify-center">
            <Link href={`/${locale}`} className="w-fit">
              <h2
                className={twMerge(
                  "text-2xl uppercase tracking-widest md:text-center md:text-4xl",
                  garamond.className,
                )}
              >
                Rosers
              </h2>
              <h2
                className={twMerge(
                  "text-xxxs uppercase tracking-widest md:text-center md:text-xs",
                  garamond.className,
                )}
              >
                {translation("HeaderDesc")}
              </h2>
            </Link>
          </div>
          <div
            className={twMerge(
              "order-2 hidden flex-1 justify-end text-xs lg:flex",
              futuraStd.className,
            )}
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className={twMerge(
                "inline-block rounded-sm border border-gold p-2 px-4 text-center text-xs text-gold transition-all duration-200 ease-in-out hover:bg-gold hover:text-[#232323] sm:bg-transparent",
                futuraStd.className,
              )}
            >
              {contactButton.label}
            </button>
          </div>
        </div>
      </header>
      <Drawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <div className="p-4">
          <h3 className="text-2xl font-bold">
            {translation("ContactForm.title")}
          </h3>
          <p className="mt-2">{translation("ContactForm.description")}</p>
          <div className="mt-12 pb-4 md:pb-0">
            <ContactForm />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Navigation;
