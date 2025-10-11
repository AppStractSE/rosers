import ConceptCards from "@/components/cards/ConceptCards";
import SplideReviewCarousel from "@/components/carousels/SplideReviewCarousel";
import Divider from "@/components/divider/Divider";
import RoyaltyImage from "@/components/royalty/RoyaltyImage";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import InfoSection from "@/components/sections/InfoSection";
import TextAndImageSection from "@/components/sections/TextAndImageSection";
import Video from "@/components/Video";
import { futuraStd } from "@/util/fonts";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function Index({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const translation = useTranslations();

  return (
    <main>
      <HeroSection
        title={translation("Home.HeroSection.title")}
        description={translation("Home.HeroSection.description")}
        image="/hero-image-homepage.webp"
        showLogo
      />
      <Divider />
      <InfoSection
        title={translation("Julebord.subtitle")}
        subtitle={translation("Julebord.title")}
        description={translation("Julebord.description")}
      >
        <div className="mt-8 flex justify-center">
          <Video
            src="/Julbord 16x9.mp4"
            className="sm:basis-10/12 md:basis-full"
          />
        </div>
        <Link
          href={`${locale}${translation("Julebord.href")}`}
          className={twMerge(
            "mt-8 inline-block w-full rounded-sm border border-brass py-2.5 text-center text-sm tracking-[0.2em] transition-all duration-200 ease-in-out hover:bg-brass hover:text-[#232323] sm:w-fit sm:bg-transparent sm:px-12 sm:py-4 sm:text-base sm:text-brass",
            futuraStd.className,
          )}
        >
          {translation("Julebord.heroButton")}
        </Link>
      </InfoSection>
      <Divider />
      <InfoSection
        title={translation("Royalty.title")}
        subtitle={translation("Royalty.subtitle")}
        description={translation("Royalty.description")}
      >
        <RoyaltyImage />
      </InfoSection>
      <Divider />
      <TextAndImageSection
        title={translation("WhoWeAre.secondary_title")}
        subTitle={translation("WhoWeAre.title")}
        text={translation("WhoWeAre.secondary_description")}
        image="/bengt.webp"
        button={{
          text: translation("WhoWeAre.label"),
          link: translation("WhoWeAre.href"),
        }}
      />
      <Divider />
      <TextAndImageSection
        rtl
        title={translation("WhatWeDo.secondary_title")}
        subTitle={translation("WhatWeDo.title")}
        text={translation("WhatWeDo.secondary_description")}
        image="/food006.webp"
        button={{
          text: translation("WhatWeDo.label"),
          link: translation("WhatWeDo.href"),
        }}
      />
      <Divider />
      <ConceptCards showHeader />
      <Divider />
      <TextAndImageSection
        title={translation("Events.secondary_title")}
        subTitle={translation("Events.third_title")}
        text={translation("Events.description")}
        image="/food005.webp"
        button={{
          text: translation("ReadMore"),
          link: translation("RosersGlobalEvents.href"),
        }}
      />
      <Divider />
      <TextAndImageSection
        rtl
        title={translation("OurHistory.secondary_title")}
        subTitle={translation("OurHistory.title")}
        text={translation("OurHistory.secondary_description")}
        image="/bengt001.webp"
        button={{
          text: translation("ReadMore"),
          link: translation("OurHistory.href"),
        }}
      />
      <Divider />
      <SplideReviewCarousel />
      <Divider />
      <ContactSection />
      <Divider />
    </main>
  );
}
