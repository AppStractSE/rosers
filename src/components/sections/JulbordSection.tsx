"use client";

import { futuraStd, garamond } from "@/util/fonts";
import { useTranslations } from "next-intl";
import { twMerge } from "tailwind-merge";
import BookingForm from "../forms/BookingForm";

const JulbordSection = () => {
  const translation = useTranslations();

  const title = translation("Julebord.secondary_title");
  const subTitle = translation("Julebord.subtitle");
  const description = translation("Julebord.secondary_description");
  return (
    <section>
      <div className="mx-auto my-12 max-w-screen-xl px-4 2xl:px-0">
        <div
          className={twMerge(
            "flex flex-col items-start justify-between gap-8 border-l border-[#a2866854] pl-4 md:flex-row md:gap-14 md:border-0 md:p-0",
          )}
        >
          <div className="basis-6/12">
            <h3
              className={twMerge(
                "text-xs uppercase text-brass",
                futuraStd.className,
              )}
            >
              {subTitle}
            </h3>
            <h2
              className={twMerge(
                "mt-2 text-2xl md:text-3xl lg:text-4xl",
                futuraStd.className,
              )}
            >
              {title}
            </h2>
            <p
              className={twMerge(
                "mt-4 whitespace-pre-line text-xl font-thin tracking-wide",
                garamond.className,
              )}
            >
              {description}
            </p>
          </div>
          <div className="basis-12/12 relative mx-auto flex h-full w-full max-w-[420px] flex-col justify-center overflow-hidden rounded-md border border-[#a28668d7] bg-charcoal-600 md:mx-0 md:basis-6/12 px-2 pt-4 pb-2 sm:p-8">
            <BookingForm eventName="Julbord 2025" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JulbordSection;
