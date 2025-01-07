/* eslint-disable @next/next/no-img-element */
"use client";

import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
// import Fade from "embla-carousel-fade";
import { futuraStd, garamond } from "@/util/fonts";
import useEmblaCarousel from "embla-carousel-react";
import { useLocale, useTranslations } from "next-intl";
import { useCallback } from "react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "../embla/EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "../embla/EmblaCarouselDotButton";
import TextAndImageSection from "./TextAndImageSection";

const EmblaCarousel = () => {
  const translation = useTranslations();
  const OPTIONS: EmblaOptionsType = {
    loop: true,
    duration: 25,
  };
  const slides = [
    {
      rtl: false,
      title: "Rosers Kitchen",
      subTitle: "The Cloud Kitchen",
      text: `There's an enchantment in forging new realms of possibility, fueled by decades of mastery and boundless creativity. As stewards of culinary excellence, we embrace the mantle of mentorship, nurturing the next generation with unwavering dedication.`,
      image: "/image001.png",
      button: {
        text: translation("ReadMore"),
        link: translation("RosersKitchen.href"),
      },
    },
    {
      rtl: false,
      title: "Rosers Global Events",
      subTitle: "Globally Renowned",
      text: `There's an enchantment in forging new realms of possibility, fueled by decades of mastery and boundless creativity. As stewards of culinary excellence, we embrace the mantle of mentorship, nurturing the next generation with unwavering dedication.`,
      image: "/image002.png",
      button: {
        text: translation("ReadMore"),
        link: translation("RosersGlobalEvents.href"),
      },
    },
    {
      rtl: false,
      title: translation("RosersConsulting.title"),
      subTitle: "The Culinary Pioneers",
      text: `There's an enchantment in forging new realms of possibility, fueled by decades of mastery and boundless creativity. As stewards of culinary excellence, we embrace the mantle of mentorship, nurturing the next generation with unwavering dedication.`,
      image: "/image002.png",
      button: {
        text: translation("ReadMore"),
        link: translation("RosersConsulting.href"),
      },
    },
  ];
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const locale = useLocale();
  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;
  }, []);
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick,
  );
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="mx-auto max-w-full">
      <div className="mx-auto mb-12 max-w-screen-xl space-y-2 px-4 2xl:px-0">
        <h3
          className={"text-4xl text-gold"
            .concat(" ")
            .concat(futuraStd.className)}
        >
          {translation("the_rosers_concept_title")}
        </h3>
        <p
          className={"text-xl font-thin tracking-wide"
            .concat(" ")
            .concat(garamond.className)}
        >
          {translation("the_rosers_concept_description")}
        </p>
      </div>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((slide, index) => (
              <div className="embla__slide justify-center" key={index}>
                <TextAndImageSection
                  className="mx-auto max-w-screen-xl px-4 2xl:px-0"
                  title={translation("OurHistory.secondary_title")}
                  subTitle={translation("OurHistory.title")}
                  text={translation("OurHistory.secondary_description")}
                  image="/bengt001.webp"
                  button={{
                    text: translation("ReadMore"),
                    link: translation("OurHistory.href"),
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <div className="flex items-center justify-center gap-4 py-8">
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={"h-4 w-4 rotate-45 transform rounded-sm"
                    .concat(" ")
                    .concat(index === selectedIndex ? "bg-gold" : "bg-brass")}
                />
              ))}
            </div>
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
