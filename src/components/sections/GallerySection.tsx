"use client";
import { futuraStd, garamond } from "@/util/fonts";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import GalleryImage from "../gallery/GalleryImage";
import Modal from "../modal/Modal";

interface Props {
  showHeader?: boolean;
}

const GallerySection = ({ showHeader }: Props) => {
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null); // To store the selected event
  const translation = useTranslations();
  const sections = translation.raw("Events.sections");

  const handleGalleryImageClick = (section: any) => {
    setSelectedEvent(section); // Set the selected event when a gallery image is clicked
  };

  return (
    <>
      <section>
        {showHeader && (
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
        )}
        <div className="mx-auto max-w-screen-xl">
          <div
            className={twMerge(
              "grid auto-rows-[200px] grid-cols-12 gap-4 px-4 2xl:px-0",
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
                onClick={() => handleGalleryImageClick(section)} // Pass selected event to the handler
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal for displaying the selected event details */}
      <Modal
        align="top"
        size="md"
        isOpen={selectedEvent}
        setIsOpen={() => setSelectedEvent(null)}
      >
        <div className="flex flex-col gap-4">
          <img
            src={selectedEvent?.image}
            className="aspect-video rounded-sm border border-brass object-cover object-center"
          />
          <div className="flex flex-col gap-0">
            <h3 className="text-2xl font-semibold">{selectedEvent?.title}</h3>
            <p className="mt-2 text-xl">{selectedEvent?.subtitle}</p>
          </div>
          <div className="mt-4">
            <p className={twMerge("text-lg", garamond.className)}>
              {selectedEvent?.description}
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default GallerySection;
