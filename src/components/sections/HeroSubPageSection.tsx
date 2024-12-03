"use client";
import { futuraStd, garamond } from "@/util/fonts";

interface Props {
  title: string;
  subtitle: string;
  description: string;
  cta?: React.ReactNode;
  image?: string;
}

const HeroSubPageSection = ({
  title,
  subtitle,
  description,
  cta,
  image,
}: Props) => {
  return (
    <section
      className="border-b border-b-brass bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${image ?? "/hero-image.webp"}')` }}
    >
      <div className="fixed inset-0 bg-charcoal-800 bg-opacity-60"></div>
      <div className="h-12 w-full md:h-24"></div>
      <div className="mx-auto max-w-screen-md px-4 py-12 lg:py-24 xl:py-48">
        <div className="relative mx-auto flex flex-col items-center justify-center">
          <p
            className={"mb-4 text-sm uppercase text-brass"
              .concat(" ")
              .concat(futuraStd.className)}
          >
            {title}
          </p>
          <h3
            className={"text-balance text-3xl mb-12 text-center leading-tight md:text-4xl lg:text-5xl"
              .concat(" ")
              .concat(futuraStd.className)}
          >
            {subtitle}
          </h3>
          <p
            className={"text-balance mb-12 whitespace-pre-line text-center text-xl font-thin tracking-wide md:text-2xl"
              .concat(" ")
              .concat(garamond.className)}
          >
            {description}
          </p>
          {cta}
        </div>
      </div>
    </section>
  );
};

export default HeroSubPageSection;
