"use client";

import { futuraStd, garamond } from "@/util/fonts";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import Accordion from "../accordion/Accordion";

const Divider = () => {
  return (
    <div className="my-12 hidden md:block h-[1px] w-full bg-gradient-to-r from-transparent via-brass to-transparent" />
  );
};

const Footer = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const locale = useLocale();
  const translation = useTranslations();
  const subLinks = translation.raw("Drawer.subLinks");
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
  return (
    <footer className="bg-charcoal-700">
      <div className="px-4 py-8 2xl:pt-12 pb-8 2xl:px-16 mx-auto max-w-screen-xl">
        <Divider />
        <div className="lg:mb-8">
          <h2
            className={"text-3xl md:text-5xl uppercase tracking-widest ".concat(garamond.className)}
          >
            Rosers
          </h2>
        </div>
        <>
          {isMobile ? (
            <>
              <nav
                className={"text-sm font-thin tracking-widest space-y-2 ".concat(
                  futuraStd.className,
                )}
              >
                {subLinks.map((subLink: any) => (
                  <Accordion
                    titleColor="text-brass"
                    borderColor="border-brass"
                    key={subLink.label}
                    title={subLink.label}
                    uppercaseTitle={false}
                    content={
                      <>
                        {subLink.links.map((link: any) => (
                          <Link
                            key={link.label}
                            href={link.externalLink ? link.href : `/${locale}${link.href}`}
                            target={link.externalLink ? "_blank" : "_self"}
                            className="block hover:underline text-brass hover:underline-offset-4 py-2 transition-all duration-200 ease-in-out"
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
                        ))}
                      </>
                    }
                  />
                ))}
              </nav>
            </>
          ) : (
            <div className="flex justify-between flex-wrap gap-4 mt-6">
              {subLinks.map((subLink: any, index: number) => (
                <div key={subLink.label} className="my-6">
                  <div className="w-fit">
                    <h6
                      className={futuraStd.className.concat(
                        " tracking-wide font-medium text-xl text-brass",
                      )}
                    >
                      {subLink.label}
                    </h6>
                    <nav
                      className={futuraStd.className.concat(
                        " text-sm font-thin tracking-widest mt-4 space-y-2",
                      )}
                    >
                      {subLink.links.map((link: any) => (
                        <Link
                          key={link.label}
                          href={link.externalLink ? link.href : `/${locale}${link.href}`}
                          target={link.externalLink ? "_blank" : "_self"}
                          className="block py-2 tracking-wider text-brass hover:underline hover:underline-offset-4 transition-all duration-200 ease-in-out"
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
                      ))}
                    </nav>
                  </div>
                </div>
              ))}
              <div className="w-full lg:basis-1/12 flex items-center justify-center ">
                <img src="/rosers.svg" alt="Rosers logo" className="w-full h-auto max-w-[150px]" />
              </div>
            </div>
          )}
        </>
        <Divider />
        <div className="mt-8 text-right">
          <Link
            target="_blank"
            href="https://www.appstract.se"
            className={futuraStd.className.concat(
              " text-brass uppercase text-xs font-normal hover:underline hover:underline-offset-4",
            )}
          >
            {translation("WebDesignBy")}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
