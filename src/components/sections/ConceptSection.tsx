/* eslint-disable @next/next/no-img-element */
"use client";

import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
// import Fade from "embla-carousel-fade";
import { futuraStd, garamond } from "@/util/fonts";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { useCallback } from "react";
import { NextButton, PrevButton, usePrevNextButtons } from "../embla/EmblaCarouselArrowButtons";
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
        link: "/who-we-are",
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
        link: "/who-we-are",
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
        link: "/who-we-are",
      },
    },
  ];
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;
  }, []);
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi, onNavButtonClick);
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  return (
    <section className="mx-auto max-w-full">
      <div className="max-w-screen-xl mx-auto mb-12 space-y-2 px-4 2xl:px-0">
        <h3 className={"text-4xl text-gold ".concat(futuraStd.className)}>The Rosers Concept</h3>
        <p className={"text-xl tracking-wide font-thin ".concat(garamond.className)}>
          {`Join us as we transform dreams into reality with 'The Rosers Concept' and join a global
          voyage of epicurean delight.`}
        </p>
      </div>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((slide, index) => (
              <div className="embla__slide" key={index}>
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 md:grid-rows-1 gap-4 md:gap-12 grid-rows-2 items-stretch">
                  <img
                    className="embla__slide__img row-span-1 md:aspect-[4/3.5]"
                    src={slide.image}
                    alt="Your alt text"
                  />
                  <div className="h-full place-self-center mx-auto row-span-1 flex flex-col md:justify-center">
                    <h3 className={"text-xs uppercase text-brass ".concat(futuraStd.className)}>
                      {slide.subTitle}
                    </h3>
                    <h2 className={"text-3xl md:text-4xl mt-2 ".concat(futuraStd.className)}>
                      {slide.title}
                    </h2>
                    <p
                      className={"text-xl tracking-wide font-thin mt-4 md:mt-8 whitespace-pre-line flex-1 sm:flex-[.75] md:flex-none ".concat(
                        garamond.className,
                      )}
                    >
                      {slide.text}
                    </p>
                    <Link
                      href={slide.button.link}
                      className={"sm:w-fit w-full text-center inline-block py-2.5 sm:px-12 sm:py-4 border sm:text-[#A28668] sm:bg-transparent transition-all duration-200 ease-in-out border-[#A28668] rounded-sm tracking-[0.2em] mt-12 sm:mt-16 text-sm sm:text-base bg-[#A28668] text-[#232323] hover:bg-[#A28668] hover:text-[#232323] ".concat(
                        futuraStd.className,
                      )}
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
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <div className="flex items-center gap-4 py-8 justify-center">
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={"h-4 w-4 transform rotate-45 rounded-sm ".concat(
                    index === selectedIndex ? " bg-gold" : "bg-brass",
                  )}
                />
              ))}
            </div>
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
