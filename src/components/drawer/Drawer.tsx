"use client";

import { futuraStd, garamond } from "@/util/fonts";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { TfiClose } from "react-icons/tfi";
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
        className={futuraStd.className.concat(
          " uppercase tracking-wide text-base font-bold text-brass",
        )}
      >
        {translation("menu")}
      </h6>
      <nav
        className={futuraStd.className.concat(
          " text-3xl font-semibold tracking-widest mt-4 space-y-4",
        )}
      >
        {mainLinks.map((mainLink: MainLink) => {
          const isHome = mainLink.href === "/" && currentPath === `/${locale}`;
          const isActive = () => {
            if (isHome) return true;
            else return currentPath === `/${locale}${mainLink.href}`;
          };
          const baseClassNames =
            "uppercase block hover:underline transition-all duration-200 ease-in-out hover:text-brass flex items-center justify-between group";

          const { isActiveClassNames, activeDiamond } = isActiveDiamond(isActive());

          const classNames = `
              ${baseClassNames}
              ${isActiveClassNames}`;

          return (
            <Link key={mainLink.label} href={`/${locale}${mainLink.href}`} className={classNames}>
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
            className={"text-sm font-thin tracking-widest space-y-2 ".concat(futuraStd.className)}
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
                        const isActive = currentPath === `/${locale}${link.href}`;
                        return (
                          <Link
                            key={link.label}
                            href={`/${locale}${link.href}`}
                            target={link.externalLink ? "_blank" : "_self"}
                            className={"block text-gold hover:underline hover:underline-offset-4 py-2 transition-all duration-200 ease-in-out hover:text-brass ".concat(
                              isActive ? "underline underline-offset-4 text-brass" : "",
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
              title={translation("Language")}
              uppercaseTitle
              titleColor="text-gold"
              borderColor="border-brass"
              content={<LocaleSwitcher showAsCol />}
            />
          </nav>
        </>
      ) : (
        <div className="flex justify-between flex-wrap mt-6">
          {subLinks.map((subLink: SubLink, index: number) => (
            <div
              key={subLink.label}
              className={"my-6 ".concat(index % 2 === 0 ? "basis-7/12" : "basis-5/12")}
            >
              <div className="w-fit">
                <h6
                  className={"uppercase tracking-wide text-base font-bold text-brass ".concat(
                    futuraStd.className,
                  )}
                >
                  {subLink.label}
                </h6>
                <nav
                  className={"text-sm font-thin tracking-widest mt-4 space-y-2 ".concat(
                    futuraStd.className,
                  )}
                >
                  {subLink.links.map((link) => {
                    const isActive = currentPath === `/${locale}${link.href}`;
                    return (
                      <Link
                        key={link.label}
                        href={link.externalLink ? link.href : `/${locale}${link.href}`}
                        target={link.externalLink ? "_blank" : "_self"}
                        className={"block text-[#F5CEA4] hover:underline hover:underline-offset-4 transition-all duration-200 ease-in-out hover:text-brass ".concat(
                          isActive ? "underline underline-offset-4 text-brass" : "",
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
  <div className="my-6 flex justify-center items-center gap-4">
    <div className="h-[1.5px] w-full bg-[#8B7257]" />
    <img src="/rosers.svg" alt="Rosers logo" className="w-12 h-12" />
    <div className="h-[1.5px] w-full bg-[#8B7257]" />
  </div>
);

function isActiveDiamond(isActive: boolean) {
  const activeDiamond =
    "w-3 h-3 bg-[#8B7257] transform rotate-45 rounded-sm transition-all duration-500 ease-in-out ".concat(
      isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100",
    );
  const isActiveClassNames = isActive && "underline text-brass";
  return { isActiveClassNames, activeDiamond };
}

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
        className={"fixed inset-0 w-full h-full z-[9999999] overflow-hidden transform transition-transform ".concat(
          isOpen ? "visible" : "invisible",
        )}
      >
        <div
          className={"w-screen h-full bg-black duration-500 delay-200 transition-all overflow-hidden ".concat(
            isOpen ? "opacity-50" : "opacity-0",
          )}
          onClick={handleToggle}
        />
        <div
          className={"drawer-bg ".concat(
            isOpen ? "w-screen translate-x-0" : "w-0 -translate-x-full",
          )}
        >
          <div className="flex items-center justify-between">
            <Link href="/">
              <h2
                className={"flex flex-1 justify-center text-3xl uppercase tracking-widest ".concat(
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
            <MainLinks currentPath={pathname} />
            <Logo />
            <SecondaryLinks currentPath={pathname} isMobile={isMobile} />
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
