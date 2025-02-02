"use client";
import GalleryImage from "@/components/gallery/GalleryImage";
import Modal from "@/components/modal/Modal";
import "@/styles/splide.scss";
import { futuraStd, garamond } from "@/util/fonts";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { twMerge } from "tailwind-merge";

interface Props {
  showHeader?: boolean;
}

const GallerySection = ({ showHeader }: Props) => {
  const mainRef = useRef<any>(null);
  const options = {
    type: "loop",
    gap: "1rem",
    pauseOnHover: true,
    pauseOnFocus: false,
    resetProgress: false,
    speed: 250,
    arrows: false,
    autoplay: false,
    perPage: 1,
    perMove: 1,
    focus: "center",
    loop: true,
    pagination: false,
    padding: "1rem",
  };

  const translation = useTranslations();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(1);
  const sections = translation.raw("Events.sections");

  const handleGalleryImageClick = (index: number) => {
    mainRef.current.go(1);
    setCurrentEvent(index);
    mainRef.current.go(currentEvent);
  };

  const handlePrevEvent = () => {
    setCurrentEvent((prev) => {
      const newIndex = prev === 0 ? sections.length - 1 : prev - 1;
      mainRef.current.go(newIndex);
      return newIndex;
    });
  };

  const handleNextEvent = () => {
    setCurrentEvent((prev) => {
      const newIndex = prev === sections.length - 1 ? 0 : prev + 1;
      mainRef.current.go(newIndex);
      return newIndex;
    });
  };

  return (
    <>
      <section>
        {showHeader ? (
          <div className="mx-auto mb-6 max-w-screen-xl space-y-2 px-4 md:mb-8 2xl:px-0">
            <h3
              className={twMerge(
                "text-xs uppercase text-brass",
                futuraStd.className,
              )}
            >
              {translation("Events.subtitle")}
            </h3>
            <h3
              className={twMerge(
                "text-3xl text-gold md:text-4xl",
                futuraStd.className,
              )}
            >
              {translation("Events.third_title")}
            </h3>
            <p
              className={twMerge(
                "max-w-2xl whitespace-pre-line text-xl font-thin tracking-wide",
                garamond.className,
              )}
            >
              {translation("Events.secondary_description")}
            </p>
          </div>
        ) : null}
        <div className="mx-auto max-w-screen-xl">
          <div
            className={twMerge(
              "grid auto-rows-[150px] grid-cols-12 gap-4 px-4 md:auto-rows-[200px] 2xl:px-0",
            )}
          >
            {sections.map((section: any, index: number) => (
              <GalleryImage
                key={index}
                title={section.title}
                subtitle={section.subtitle}
                image={section.image}
                size={section.size}
                description={section.description}
                onHover={() => {
                  if (!isModalOpen) {
                    handleGalleryImageClick(index);
                  }
                }}
                onClick={() => {
                  if (!isModalOpen) {
                    handleGalleryImageClick(index);
                  }
                  setIsModalOpen(true);
                }}
              />
            ))}
          </div>
        </div>
      </section>
      <Modal
        align="top"
        size="md"
        isOpen={isModalOpen}
        setIsOpen={() => setIsModalOpen(!isModalOpen)}
      >
        <div className="relative">
          <div className="sticky left-0 right-0 top-[69px] z-50 -mt-4 mb-4 flex items-center justify-between border-b border-[#a286688e] bg-[#232323] p-2 md:hidden md:pb-2">
            <button
              onClick={handlePrevEvent}
              className="flex items-center gap-2 p-2"
            >
              <BsChevronLeft size={12} />
              <span className="text-xs">{translation("Prev")}</span>
            </button>
            <button
              onClick={handleNextEvent}
              className="flex items-center gap-2 p-2"
            >
              <span className="text-xs">{translation("Next")}</span>
              <BsChevronRight size={12} />
            </button>
          </div>
          <Splide
            ref={mainRef}
            options={options}
            aria-labelledby=""
            hasTrack={false}
          >
            <div className="splide__wrapper">
              <SplideTrack className="hover:cursor-grab active:cursor-grabbing">
                {sections.map((event: IEvent, index: number) => (
                  <SplideSlide key={index}>
                    <div className="splide-slide">
                      <div className="flex flex-col gap-4">
                        <Image
                          width={1920}
                          height={1080}
                          alt=""
                          src={event.image ?? "/image001.webp"}
                          className="max-h-[430px] rounded-sm border border-brass object-cover object-center"
                        />
                        <div className="flex flex-col gap-0">
                          <h3 className="text-2xl font-semibold">
                            {event?.title}
                          </h3>
                          <p className="mt-2 text-xl">{event.subtitle}</p>
                        </div>
                        <div className="mt-4">
                          <p
                            className={twMerge(
                              "whitespace-pre-line text-lg md:text-xl",
                              garamond.className,
                            )}
                          >
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SplideSlide>
                ))}
              </SplideTrack>
            </div>
          </Splide>
          <div className="sticky -bottom-1 left-0 right-0 z-50 mt-4 hidden items-center justify-between border-t border-[#a286688e] bg-[#232323] p-2 md:flex md:pb-2">
            <button
              onClick={handlePrevEvent}
              className="flex items-center gap-2 p-2"
            >
              <BsChevronLeft size={12} />
              <span className="text-xs">{translation("Prev")}</span>
            </button>
            <button
              onClick={handleNextEvent}
              className="flex items-center gap-2 p-2"
            >
              <span className="text-xs">{translation("Next")}</span>
              <BsChevronRight size={12} />
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default GallerySection;
