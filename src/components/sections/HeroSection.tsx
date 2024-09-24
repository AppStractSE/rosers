"use client";
import Rosers from "@/util/Rosers";
import { futuraStd, garamond } from "@/util/fonts";
import { useTranslations } from "next-intl";
import MobileHeroSection from "./MobileHeroSection";

interface Props {
  title: string;
  description: string;
  image: string;
  children: React.ReactNode;
  showLogo?: boolean;
}

const HeroSection = ({
  title,
  description,
  image,
  children,
  showLogo,
}: Props) => {
  const translation = useTranslations("Home");
  return (
    <>
      <MobileHeroSection
        title={translation("HeroSection.title")}
        description={translation("HeroSection.description")}
        image={image}
      />
      <section
        style={{ backgroundImage: `url('${image}')` }}
        className="h-dynamic relative hidden w-full flex-col items-center justify-between border-b border-[#a286688e] bg-cover bg-center bg-no-repeat px-4 text-center lg:flex"
      >
        <div className="h-dynamic absolute inset-0 w-full bg-gradient-to-b from-charcoal-700 via-charcoal-900 to-charcoal-600 opacity-70 lg:opacity-60" />
        <div className="relative mx-auto flex max-w-[620px] flex-grow flex-col items-center justify-center pt-16 md:pt-20 lg:pt-0">
          <div className="space-y-6">
            {showLogo ? (
              <div className="flex justify-center">
                <Rosers className="h-20 w-20 md:h-28 md:w-28" />
              </div>
            ) : (
              <></>
            )}
            <div className="space-y-12">
              <h1
                className={"text-balance text-4xl leading-tight md:text-5xl md:leading-tight"
                  .concat(" ")
                  .concat(futuraStd.className)}
              >
                {title}
              </h1>
              <p
                className={"mx-auto hidden text-xl xs:block md:text-2xl"
                  .concat(" ")
                  .concat(garamond.className)}
              >
                {description}
              </p>
            </div>
          </div>
          {children}
        </div>
      </section>
    </>
  );
};

export default HeroSection;
