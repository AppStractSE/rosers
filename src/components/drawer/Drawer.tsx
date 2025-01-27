"use client";

import { futuraStd, garamond } from "@/util/fonts";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { TfiClose } from "react-icons/tfi";
import { twMerge } from "tailwind-merge";
import LocaleSwitcher from "../LocaleSwitcher";
import Accordion from "../accordion/Accordion";

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

interface MainLinksProps {
  currentPath: string;
}
interface MainLink {
  label: string;
  href: string;
}

const MainLinks = ({ currentPath }: MainLinksProps) => {
  const locale = useLocale();
  const translation = useTranslations("Drawer");
  const mainLinks = translation.raw("mainLinks");

  return (
    <>
      <h6
        className={twMerge(
          "text-base font-bold uppercase tracking-wide text-brass",
          futuraStd.className,
        )}
      >
        {translation("menu")}
      </h6>
      <nav
        className={twMerge(
          "mt-4 space-y-4 text-3xl font-semibold tracking-widest",
          futuraStd.className,
        )}
      >
        {mainLinks.map((mainLink: MainLink) => {
          const isHome = mainLink.href === "/" && currentPath === `/${locale}`;
          const isActive = () => {
            if (isHome) return true;
            else return currentPath === `/${locale}${mainLink.href}`;
          };
          const baseClassNames =
            "uppercase block transition-all duration-200 ease-in-out hover:text-brass flex items-center justify-between group";

          const { isActiveClassNames, activeDiamond } =
            isActiveDiamond(isActive());

          const classNames = `
              ${baseClassNames}
              ${isActiveClassNames}`;

          return (
            <Link
              key={mainLink.label}
              href={`/${locale}${mainLink.href}`}
              className={classNames}
            >
              <span>{mainLink.label}</span>
              <div className={activeDiamond}></div>
            </Link>
          );
        })}
      </nav>
    </>
  );
};

interface SecondaryLinksProps {
  isMobile: boolean;
  currentPath: string;
}

interface SubLink {
  label: string;
  links: {
    href: string;
    label: string;
    externalLink: boolean;
  }[];
}

const SecondaryLinks = ({ isMobile, currentPath }: SecondaryLinksProps) => {
  const locale = useLocale();
  const translation = useTranslations("Drawer");
  const subLinks = translation.raw("subLinks");
  return (
    <>
      {isMobile ? (
        <>
          <nav
            className={twMerge(
              "space-y-2 text-sm font-thin tracking-widest",
              futuraStd.className,
            )}
          >
            {subLinks.map((subLink: SubLink) => {
              return (
                <Accordion
                  titleColor="text-gold"
                  borderColor="border-brass"
                  uppercaseTitle
                  key={subLink.label}
                  title={subLink.label}
                  content={
                    <>
                      {subLink.links.map((link: any) => {
                        const isActive =
                          currentPath === `/${locale}${link.href}`;
                        return (
                          <Link
                            key={link.label}
                            href={
                              link.externalLink
                                ? link.href
                                : `/${locale}${link.href}`
                            }
                            target={link.externalLink ? "_blank" : "_self"}
                            className={twMerge(
                              "block py-2 text-gold transition-all duration-200 ease-in-out hover:text-brass",
                              isActive ? "text-brass" : "",
                            )}
                          >
                            {link.externalLink ? (
                              <span className="flex items-center gap-2">
                                <div className="text-xl">
                                  <MdArrowOutward />
                                </div>
                                {link.label}
                              </span>
                            ) : (
                              <span>{link.label}</span>
                            )}
                          </Link>
                        );
                      })}
                    </>
                  }
                />
              );
            })}

            <Accordion
              title={translation("language")}
              uppercaseTitle
              titleColor="text-gold"
              borderColor="border-brass"
              content={<LocaleSwitcher showAsCol />}
            />
          </nav>
        </>
      ) : (
        <div className="mt-6 flex flex-wrap justify-between">
          {subLinks.map((subLink: SubLink, index: number) => (
            <div
              key={subLink.label}
              className={twMerge(
                "my-6",
                index % 2 === 0 ? "basis-7/12" : "basis-5/12",
              )}
            >
              <div className="w-fit">
                <h6
                  className={twMerge(
                    "text-base font-bold uppercase tracking-wide text-brass",
                    futuraStd.className,
                  )}
                >
                  {subLink.label}
                </h6>
                <nav
                  className={twMerge(
                    "mt-4 space-y-2 text-sm font-thin tracking-widest",
                    futuraStd.className,
                  )}
                >
                  {subLink.links.map((link) => {
                    const isActive = currentPath === `/${locale}${link.href}`;
                    return (
                      <Link
                        key={link.label}
                        href={
                          link.externalLink
                            ? link.href
                            : `/${locale}${link.href}`
                        }
                        target={link.externalLink ? "_blank" : "_self"}
                        className={twMerge(
                          "block text-[#F5CEA4] transition-all duration-200 ease-in-out hover:text-brass",
                          isActive ? "text-brass" : "",
                        )}
                      >
                        {link.externalLink ? (
                          <span className="flex items-center gap-2">
                            <div className="text-xl">
                              <MdArrowOutward />
                            </div>
                            {link.label}
                          </span>
                        ) : (
                          <span>{link.label}</span>
                        )}
                      </Link>
                    );
                  })}
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
  <div className="my-6 flex items-center justify-center gap-4">
    <div className="h-[1.5px] w-full bg-[#8B7257]" />
    <img src="/rosers.svg" alt="Rosers logo" className="h-12 w-12" />
    <div className="h-[1.5px] w-full bg-[#8B7257]" />
  </div>
);

function isActiveDiamond(isActive: boolean) {
  const activeDiamond = twMerge(
    "w-3 h-3 bg-[#8B7257] transform rotate-45 rounded-sm transition-all duration-300 ease-in-out",
    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100",
  );
  const isActiveClassNames = isActive && "text-brass";
  return { isActiveClassNames, activeDiamond };
}

const Drawer = ({ isOpen, setIsOpen }: Props) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);
  const [currentPath, setCurrentPath] = useState<string>("");
  const pathname = usePathname();
  const locale = useLocale();

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

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
        className={twMerge(
          "fixed inset-0 z-10 h-full w-full transform overflow-hidden backdrop-blur-sm transition-all duration-500 ease-in-out",
          isOpen
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0 delay-200",
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
            "no-scrollbar absolute left-0 top-0 flex h-full w-full max-w-2xl transform flex-col justify-between overflow-auto border-[#a286688e] bg-charcoal-700 bg-opacity-80 px-4 py-4 shadow-xl transition-all duration-300 ease-in-out md:border-r md:px-12 md:py-8 lg:bg-opacity-80",
            isOpen ? "w-screen translate-x-0" : "w-0 -translate-x-full",
          )}
        >
          <div className="flex items-center justify-between">
            <Link href={`/${locale}`}>
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
          <div className="mt-4">
            <MainLinks currentPath={currentPath} />
            <Logo />
            <SecondaryLinks currentPath={currentPath} isMobile={isMobile} />
          </div>
          {isMobile ? (
            <></>
          ) : (
            <div>
              <LocaleSwitcher />
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Drawer;
