"use client";

import { futuraStd, garamond } from "@/util/fonts";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { TfiClose } from "react-icons/tfi";
import Accordion from "../accordion/Accordion";
import { mainLinks, subLinks } from "./drawerData";

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

interface MainLinksProps {
  currentPath: string;
}

const MainLinks = ({ currentPath }: MainLinksProps) => {
  return (
    <>
      <h6
        className={`${futuraStd.className} uppercase tracking-wide text-base font-bold text-[#8B7257]`}
      >
        Menu
      </h6>
      <nav
        className={`${futuraStd.className} text-3xl font-semibold tracking-widest mt-4 space-y-4`}
      >
        {mainLinks.map(({ href, label }) => {
          const isActive = currentPath === href;
          const baseClassNames =
            "uppercase block hover:underline transition-all duration-200 ease-in-out hover:text-[#8B7257] flex items-center justify-between group";

          const activeDiamond = `${
            isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          } w-3 h-3 bg-[#8B7257] transform rotate-45 rounded-sm transition-all duration-500 ease-in-out`;
          const isActiveClassNames = isActive && "underline text-[#8B7257]";

          const classNames = `
              ${baseClassNames}
              ${isActiveClassNames}`;

          return (
            <Link key={label} href={href} className={classNames}>
              <span>{label}</span>
              <div className={`${activeDiamond}`}></div>
            </Link>
          );
        })}
      </nav>
    </>
  );
};

interface SecondaryLinksProps {
  isMobile: boolean;
}

const SecondaryLinks = ({ isMobile }: SecondaryLinksProps) => {
  return (
    <>
      {isMobile ? (
        <>
          <nav className={`${futuraStd.className} text-sm font-thin tracking-widest space-y-2`}>
            {subLinks.map(({ label, links }) => (
              <Accordion
                key={label}
                title={label}
                content={
                  <>
                    {links.map(({ href, label, externalLink }) => (
                      <Link
                        key={label}
                        href={href}
                        target={externalLink ? "_blank" : "_self"}
                        className="block text-[#F5CEA4] hover:underline hover:underline-offset-4 py-2 transition-all duration-200 ease-in-out hover:text-[#8B7257]"
                      >
                        {externalLink ? (
                          <span className="flex items-center gap-2">
                            <div className="text-xl">
                              <MdArrowOutward />
                            </div>
                            {label}
                          </span>
                        ) : (
                          <span>{label}</span>
                        )}
                      </Link>
                    ))}
                  </>
                }
              />
            ))}
            <Accordion
              title="Language"
              content={
                <>
                  <div className="block text-[#F5CEA4] hover:underline hover:underline-offset-4 py-2 transition-all duration-200 ease-in-out hover:text-[#8B7257]">
                    English
                  </div>
                  <div className="block text-[#F5CEA4] hover:underline hover:underline-offset-4 py-2 transition-all duration-200 ease-in-out hover:text-[#8B7257]">
                    Svenska
                  </div>
                </>
              }
            />
          </nav>
        </>
      ) : (
        <div className="flex justify-between flex-wrap mt-6">
          {subLinks.map(({ label, links }, index) => (
            <div key={label} className={`my-6 ${index % 2 === 0 ? "basis-7/12" : "basis-5/12"}`}>
              <div className="w-fit">
                <h6
                  className={`${futuraStd.className} uppercase tracking-wide text-base font-bold text-[#8B7257]`}
                >
                  {label}
                </h6>
                <nav
                  className={`${futuraStd.className} text-sm font-thin tracking-widest mt-4 space-y-2`}
                >
                  {links.map(({ href, label, externalLink }) => (
                    <Link
                      key={label}
                      href={href}
                      target={externalLink ? "_blank" : "_self"}
                      className="block text-[#F5CEA4] hover:underline hover:underline-offset-4 transition-all duration-200 ease-in-out hover:text-[#8B7257]"
                    >
                      {externalLink ? (
                        <span className="flex items-center gap-2">
                          <div className="text-xl">
                            <MdArrowOutward />
                          </div>
                          {label}
                        </span>
                      ) : (
                        <span>{label}</span>
                      )}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

const Logo = () => (
  <div className="my-6 flex justify-center items-center gap-4">
    <div className="h-[1.5px] w-full bg-[#8B7257]" />
    <img src="/rosers.svg" alt="Rosers logo" className="w-12 h-12" />
    <div className="h-[1.5px] w-full bg-[#8B7257]" />
  </div>
);

const Drawer = ({ isOpen, setIsOpen }: Props) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    scrollLock(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const resizeHandler = () => {
      setIsMobile(window.innerWidth < 768);
    };

    resizeHandler();

    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const scrollLock = (isOpen: boolean) => {
    if (mounted) {
      document.body.style.overflow = isOpen ? "hidden" : "auto";
    }
  };

  return (
    <aside>
      <div
        className={`fixed inset-0 w-full h-full z-[9999999] overflow-hidden transform transition-transform ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        <div
          className={`w-screen h-full bg-black duration-500 delay-200 transition-all overflow-hidden ${
            isOpen ? "opacity-25" : "opacity-0"
          }`}
          onClick={handleToggle}
        />
        <div
          className={`absolute border-r border-[#a286688e]
          flex flex-col justify-between
          left-0 top-0 shadow-xl overflow-y-auto bg-[#232323] transition-all duration-500 ease-in-out h-full max-w-2xl px-4 py-4 md:px-12 md:py-8 transform w-full ${
            isOpen ? "w-screen translate-x-0" : "w-0 -translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <Link href="/">
              <h2
                className={`${garamond.className} flex flex-1 justify-center text-3xl uppercase tracking-widest`}
              >
                Rosers
              </h2>
            </Link>
            <button onClick={handleToggle} className="text-3xl">
              <TfiClose />
            </button>
          </div>
          <div className="mt-4">
            <MainLinks currentPath={pathname} />
            <Logo />
            <SecondaryLinks isMobile={isMobile} />
          </div>
          {isMobile ? (
            <></>
          ) : (
            <div
              className={`${futuraStd.className} uppercase text-xs flex gap-2 font-extralight tracking-widest mt-4`}
            >
              <p>English</p>
              <span className="before:content-['•'] text-[6px]"></span>
              <p>Svenska</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Drawer;
