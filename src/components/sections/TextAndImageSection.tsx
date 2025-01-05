"use client";

import { futuraStd, garamond } from "@/util/fonts";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

interface Props {
  rtl?: boolean;
  title: string;
  subTitle: string;
  text: string;
  image: string;
  className?: string;
  button?: {
    text: string;
    link: string;
  };
}

const TextAndImageSection = ({
  rtl,
  title,
  subTitle,
  text,
  image,
  button,
  className,
}: Props) => {
  const locale = useLocale();
  const imageBaseClasses =
    "h-full w-full object-cover duration-500 transition-all ease-in-out";
  const loadingClasses =
    " data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-100/10 data-[loaded=false]:blur-md";
  return (
    <section>
      <div
        className={
          className
            ? className
            : "mx-auto my-12 max-w-screen-xl px-4 xl:my-24 2xl:px-0"
        }
      >
        <div
          className={"flex items-center justify-between gap-8 border-l border-[#a2866854] pl-4 md:gap-14 md:border-0 md:p-0"
            .concat(" ")
            .concat(
              rtl ? "flex-col md:flex-row-reverse" : "flex-col md:flex-row",
            )}
        >
          <div className="basis-12/12 relative flex aspect-[2/1] h-full w-full flex-col justify-center overflow-hidden rounded-sm border border-[#a28668d7] md:aspect-[3/4] md:basis-5/12">
            <Image
              data-loaded="false"
              onLoad={(event) => {
                event.currentTarget.setAttribute("data-loaded", "true");
              }}
              fill
              src={image}
              priority
              quality={100}
              alt="Image"
              blurDataURL={image}
              placeholder="blur"
              className={imageBaseClasses.concat(" ").concat(loadingClasses)}
            />
          </div>
          <div className="basis-7/12">
            <h3
              className={"text-xs uppercase text-brass"
                .concat(" ")
                .concat(futuraStd.className)}
            >
              {subTitle}
            </h3>
            <h2
              className={"mt-2 text-3xl md:text-4xl"
                .concat(" ")
                .concat(futuraStd.className)}
            >
              {title}
            </h2>
            <p
              className={"mt-8 whitespace-pre-line text-xl font-thin tracking-wide"
                .concat(" ")
                .concat(garamond.className)}
            >
              {text}
            </p>
            {button ? (
              <div className="flex md:justify-end">
                <Link
                  href={`/${locale}${button.link}`}
                  className={"mt-12 inline-block w-full rounded-sm border border-brass py-2.5 text-center text-sm tracking-[0.2em] transition-all duration-200 ease-in-out hover:bg-brass hover:text-[#232323] sm:mt-16 sm:w-fit sm:bg-transparent sm:px-12 sm:py-4 sm:text-base sm:text-brass"
                    .concat(" ")
                    .concat(futuraStd.className)}
                >
                  {button.text}
                </Link>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextAndImageSection;
