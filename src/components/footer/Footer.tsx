"use client";

import { futuraStd, garamond } from "@/util/fonts";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import Accordion from "../accordion/Accordion";

const Divider = () => {
  return (
    <div className="my-12 hidden h-[1px] w-full bg-gradient-to-r from-transparent via-brass to-transparent md:block" />
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
    <footer className="bg-charcoal-800">
      <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-0 2xl:px-16">
        <div className="lg:mb-8">
          <h2
            className={"text-3xl uppercase tracking-widest md:text-5xl"
              .concat(" ")
              .concat(garamond.className)}
          >
            Rosers
          </h2>
        </div>
        <>
          {isMobile ? (
            <>
              <nav
                className={"space-y-2 text-sm font-thin tracking-widest"
                  .concat(" ")
                  .concat(futuraStd.className)}
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
                            href={
                              link.externalLink
                                ? link.href
                                : `/${locale}${link.href}`
                            }
                            target={link.externalLink ? "_blank" : "_self"}
                            className="block py-2 text-brass transition-all duration-200 ease-in-out hover:underline hover:underline-offset-4"
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
            <div className="mt-6 flex flex-wrap justify-between gap-4">
              {subLinks.map((subLink: any, index: number) => (
                <div key={subLink.label} className="my-6">
                  <div className="w-fit">
                    <h6
                      className={futuraStd.className
                        .concat(" ")
                        .concat("text-xl font-medium tracking-wide text-brass")}
                    >
                      {subLink.label}
                    </h6>
                    <nav
                      className={futuraStd.className
                        .concat(" ")
                        .concat(
                          "mt-4 space-y-2 text-sm font-thin tracking-widest",
                        )}
                    >
                      {subLink.links.map((link: any) => (
                        <Link
                          key={link.label}
                          href={
                            link.externalLink
                              ? link.href
                              : `/${locale}${link.href}`
                          }
                          target={link.externalLink ? "_blank" : "_self"}
                          className="block py-2 tracking-wider transition-all duration-200 ease-in-out hover:underline hover:underline-offset-4"
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
              <div className="flex w-full items-center justify-center lg:basis-1/12">
                <img
                  src="/rosers.svg"
                  alt="Rosers logo"
                  className="h-auto w-full max-w-[150px]"
                />
              </div>
            </div>
          )}
        </>
        <div className="mt-24 flex flex-wrap items-center justify-between gap-4">
          <div
            className={futuraStd.className
              .concat(" ")
              .concat("text-xxs font-normal uppercase text-brass")}
          >
            All rights reserved © {new Date().getFullYear()}
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.appstract.se"
            className={futuraStd.className
              .concat(" ")
              .concat(
                "text-xxs font-normal uppercase text-brass hover:underline hover:underline-offset-4",
              )}
          >
            {translation("WebDesignBy")}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
