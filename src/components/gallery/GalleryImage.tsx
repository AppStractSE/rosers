"use client";
import { futuraStd, garamond } from "@/util/fonts";
import Image from "next/image";
import { IoMdArrowForward } from "react-icons/io";
import { twMerge } from "tailwind-merge";

interface Props {
  title: string;
  subtitle: string;
  image: string;
  size: string;
  description: string;
  onClick?: () => void;
  onHover?: () => void;
}

const GalleryImage = ({
  title,
  subtitle,
  size,
  image,
  description,
  onClick,
  onHover,
}: Props) => {
  const imageBaseClasses =
    "h-full w-full object-cover transition-all duration-300 ease-in-out transition-opacity ease-in-out";
  const loadingClasses =
    " data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-100/10 data-[loaded=false]:blur-sm";
  const isRowSpan3 = size.includes("row-span-3");
  return (
    <div
      onClick={onClick}
      onMouseOver={onHover}
      className={twMerge(
        "flex flex-1 basis-full flex-col gap-4 object-cover transition-all duration-300 ease-in-out",
        "group relative overflow-hidden rounded-sm border border-brass hover:cursor-pointer",
        size,
      )}
    >
      <div className="absolute inset-0 hidden h-full w-full bg-[#232323]/75 p-8 opacity-0 transition-all duration-1000 group-hover:opacity-100 group-hover:backdrop-blur-sm md:block">
        <div className="-translate-y-full transform opacity-0 transition-all delay-100 duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
          <p
            className={twMerge(
              "text-balance whitespace-pre-line text-lg",
              isRowSpan3
                ? "line-clamp-[10] lg:line-clamp-[15]"
                : "line-clamp-[10]",
              garamond.className,
            )}
          >
            {description}
          </p>
        </div>
      </div>
      <Image
        priority
        quality={100}
        alt=""
        width={1920}
        height={1080}
        src={image}
        blurDataURL={image}
        data-loaded="false"
        onLoad={(event) => {
          event.currentTarget.setAttribute("data-loaded", "true");
        }}
        className={twMerge(imageBaseClasses, loadingClasses)}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-b from-charcoal-950/50 to-charcoal-950 px-4 py-2.5 backdrop-blur-sm">
        <div className="flex items-center gap-4 transition-all duration-300 ease-in-out group-hover:ml-0">
          <div className="-ml-2 flex items-center gap-4 transition-all duration-300 ease-in-out group-hover:ml-0 lg:-ml-12">
            <IoMdArrowForward className="duration-250 text-3xl transition-all ease-in-out group-hover:translate-x-0 group-hover:opacity-100 lg:-translate-x-2 lg:text-4xl lg:opacity-0" />
            <div>
              <p className="text-sm uppercase text-brass lg:text-xs">
                {subtitle}
              </p>
              <h3
                className={twMerge(
                  "line-clamp-1 text-lg text-gold lg:text-xl xl:text-2xl",
                  futuraStd.className,
                )}
              >
                {title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryImage;
