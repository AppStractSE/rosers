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
    <div
      className={"pl-4 border-l border-[#a2866854] md:p-0 md:border-0 flex items-center gap-8 md:gap-14 justify-between ".concat(
        rtl ? "md:flex-row-reverse flex-col" : "md:flex-row flex-col",
      )}
    >
      <div className="relative h-full aspect-[2/1] md:aspect-[3/4] flex flex-col justify-center basis-12/12 md:basis-5/12 w-full rounded-sm border border-[#a28668d7] overflow-hidden">
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
      <div className="basis-7/12">
        <h3 className={"text-xs uppercase text-brass ".concat(futuraStd.className)}>{subTitle}</h3>
        <h2 className={"text-4xl mt-2 ".concat(futuraStd.className)}>{title}</h2>
        <p
          className={"text-xl tracking-wide font-thin mt-8 whitespace-pre-line ".concat(
            garamond.className,
          )}
        >
          {text}
        </p>
        <div className="flex md:justify-end">
          <Link
            href={button.link}
            className={"sm:w-fit w-full text-center inline-block py-2.5 sm:px-12 sm:py-4 border sm:text-[#A28668] sm:bg-transparent transition-all duration-200 ease-in-out border-[#A28668] rounded-sm tracking-[0.2em] mt-12 sm:mt-16 text-sm sm:text-base bg-[#A28668] text-[#232323] hover:bg-[#A28668] hover:text-[#232323] ".concat(
              futuraStd.className,
            )}
          >
            {button.text}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TextAndImageSection;
