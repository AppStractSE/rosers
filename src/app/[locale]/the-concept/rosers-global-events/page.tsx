import ConceptCards from "@/components/cards/ConceptCards";
import Divider from "@/components/divider/Divider";
import ContactSection from "@/components/sections/ContactSection";
import GallerySection from "@/components/sections/GallerySection";
import HeroSubPageSection from "@/components/sections/HeroSubPageSection";
import InfoSection from "@/components/sections/InfoSection";
import TextAndImageSection from "@/components/sections/TextAndImageSection";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";

export const metadata: Metadata = {
  title: "The Concept",
};

export default function Index({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const translation = useTranslations();
  const sections = translation.raw("RosersGlobalEvents.sections");
  return (
    <main>
      <HeroSubPageSection image="/hero-image-global-events.webp" />
      <InfoSection
        showBreadcrumbs
        title={translation("RosersGlobalEvents.subtitle")}
        subtitle={translation("RosersGlobalEvents.title")}
        description={translation("RosersGlobalEvents.description")}
      />
      <Divider />
      {sections.map((section: any, index: number) => (
        <React.Fragment key={index}>
          <TextAndImageSection
            rtl={index % 2 === 0}
            title={section.title}
            subTitle={section.subtitle}
            text={section.description}
            image={section.image}
          />
          <Divider />
        </React.Fragment>
      ))}
      <GallerySection showHeader />
      <Divider />
      <ConceptCards showHeader />
      <Divider />
      <ContactSection />
      <Divider />
    </main>
  );
}
