import CTAButton from "@/components/buttons/CTAButton";
import ConceptCards from "@/components/cards/ConceptCards";
import Divider from "@/components/divider/Divider";
import ContactSection from "@/components/sections/ContactSection";
import HeroSubPageSection from "@/components/sections/HeroSubPageSection";
import InfoSection from "@/components/sections/InfoSection";
import TextAndImageSection from "@/components/sections/TextAndImageSection";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";

export const metadata: Metadata = {
  title: "Events",
};

export default function Index({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const translation = useTranslations();
  const sections = translation.raw("Events.sections");
  return (
    <main>
      <HeroSubPageSection image="/hero-image-events.webp" />
      <InfoSection
        title={translation("Events.title")}
        subtitle={translation("Events.subtitle")}
        description={translation("Events.description")}
      >
        <CTAButton
          label={translation("GetInTouch")}
          href={`/${locale}${translation("Contact.href")}`}
        />
      </InfoSection>
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
      <ConceptCards showHeader />
      <Divider />
      <ContactSection />
      <Divider />
    </main>
  );
}
