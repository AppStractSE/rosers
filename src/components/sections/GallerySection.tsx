import { futuraStd, garamond } from "@/util/fonts";
import { useLocale, useTranslations } from "next-intl";
import { twMerge } from "tailwind-merge";
import GalleryImage from "../gallery/GalleryImage";

interface Props {
  showHeader?: boolean;
}

const GallerySection = ({ showHeader }: Props) => {
  const translation = useTranslations();
  const locale = useLocale();
  const sections = translation.raw("Events.sections");

  return (
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
              "whitespace-pre-line text-xl font-thin tracking-wide max-w-2xl",
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
