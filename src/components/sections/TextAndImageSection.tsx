"use client";

import { futuraStd, garamond } from "@/util/fonts";
import Image from "next/image";
import Link from "next/link";

interface Props {
  rtl: boolean;
  title: string;
  subTitle: string;
  text: string;
  image: string;
  button: {
    text: string;
    link: string;
  };
}

const TextAndImageSection = ({ rtl, title, subTitle, text, image, button }: Props) => {
  const imageBaseClasses = "h-full w-full object-cover duration-500 transition-all ease-in-out";
  const loadingClasses =
    " data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-100/10 data-[loaded=false]:blur-md";
  return (
    <section className="w-full px-4 py-8">
      <div className="mx-auto max-w-screen-2xl">
        <div
          className={"pl-4 border-l border-[#a2866854] lg:p-0 lg:border-0 flex items-center gap-8 lg:gap-14 justify-between ".concat(
            rtl ? "lg:flex-row-reverse flex-col" : "lg:flex-row flex-col",
          )}
        >
          <div className="relative h-[15rem] md:h-[30rem] lg:h-[30rem] xl:h-[45rem] flex flex-col justify-center basis-12/12 lg:basis-5/12 w-full rounded-sm border border-[#a28668d7] overflow-hidden">
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
              className={imageBaseClasses.concat(loadingClasses)}
            />
          </div>
          <div className="basis-7/12 xl:px-16">
            <h3 className={"text-xs uppercase text-[#A28668] ".concat(futuraStd.className)}>
              {subTitle}
            </h3>
            <h2 className={"text-4xl mt-2 ".concat(futuraStd.className)}>{title}</h2>
            <p
              className={"text-xl tracking-wide font-thin mt-8 whitespace-pre-line ".concat(
                garamond.className,
              )}
            >
              {text}
            </p>
            <div className="flex lg:justify-end">
              <Link
                href={button.link}
                className={"lg:w-fit w-full text-center inline-block py-2.5 lg:px-12 lg:py-4 border lg:text-[#A28668] lg:bg-transparent transition-all duration-200 ease-in-out border-[#A28668] rounded-sm tracking-[0.2em] mt-12 lg:mt-16 text-sm lg:text-base bg-[#A28668] text-[#232323] hover:bg-[#A28668] hover:text-[#232323] ".concat(
                  futuraStd.className,
                )}
              >
                {button.text}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextAndImageSection;
