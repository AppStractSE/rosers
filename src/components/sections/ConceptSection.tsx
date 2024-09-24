/* eslint-disable @next/next/no-img-element */
"use client";

import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
// import Fade from "embla-carousel-fade";
import { futuraStd, garamond } from "@/util/fonts";
import useEmblaCarousel from "embla-carousel-react";
import { useLocale } from "next-intl";
import Link from "next/link";
import { useCallback } from "react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "../embla/EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "../embla/EmblaCarouselDotButton";

const EmblaCarousel = () => {
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
        text: "Read more",
        link: "/about/who-we-are",
      },
    },
    {
      rtl: false,
      title: "Rosers Global Events",
      subTitle: "Globally Renowned",
      text: `There's an enchantment in forging new realms of possibility, fueled by decades of mastery and boundless creativity. As stewards of culinary excellence, we embrace the mantle of mentorship, nurturing the next generation with unwavering dedication.`,
      image: "/image002.png",
      button: {
        text: "Read more",
        link: "/about/who-we-are",
      },
    },
    {
      rtl: false,
      title: "Rosers Consulting",
      subTitle: "The Culinary Pioneers",
      text: `There's an enchantment in forging new realms of possibility, fueled by decades of mastery and boundless creativity. As stewards of culinary excellence, we embrace the mantle of mentorship, nurturing the next generation with unwavering dedication.`,
      image: "/image002.png",
      button: {
        text: "Read more",
        link: "/about/who-we-are",
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
          The Rosers Concept
        </h3>
        <p
          className={"text-xl font-thin tracking-wide"
            .concat(" ")
            .concat(garamond.className)}
        >
          {`Join us as we transform dreams into reality with 'The Rosers Concept' and join a global
          voyage of epicurean delight.`}
        </p>
      </div>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((slide, index) => (
              <div className="embla__slide" key={index}>
                <div className="mx-auto grid max-w-screen-xl grid-cols-1 grid-rows-2 items-stretch gap-4 md:grid-cols-2 md:grid-rows-1 md:gap-12">
                  <img
                    className="embla__slide__img row-span-1 md:aspect-[4/3.5]" 
                    src={slide.image}
                    alt="Your alt text"
                  />
                  <div className="row-span-1 mx-auto flex h-full flex-col place-self-center md:justify-center">
                    <h3
                      className={"text-xs uppercase text-brass"
                        .concat(" ")
                        .concat(futuraStd.className)}
                    >
                      {slide.subTitle}
                    </h3>
                    <h2
                      className={"mt-2 text-3xl md:text-4xl"
                        .concat(" ")
                        .concat(futuraStd.className)}
                    >
                      {slide.title}
                    </h2>
                    <p
                      className={"mt-4 flex-1 whitespace-pre-line text-xl font-thin tracking-wide sm:flex-[.75] md:mt-8 md:flex-none"
                        .concat(" ")
                        .concat(garamond.className)}
                    >
                      {slide.text}
                    </p>
                    <Link
                      href={`/${locale}${slide.button.link}`}
                      className={"mt-12 inline-block w-full rounded-sm border border-[#A28668] bg-[#A28668] py-2.5 text-center text-sm tracking-[0.2em] text-[#232323] transition-all duration-200 ease-in-out hover:bg-[#A28668] hover:text-[#232323] sm:mt-16 sm:w-fit sm:bg-transparent sm:px-12 sm:py-4 sm:text-base sm:text-[#A28668]"
                        .concat(" ")
                        .concat(futuraStd.className)}
                    >
                      {slide.button.text}
                    </Link>
                  </div>
                </div>
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
