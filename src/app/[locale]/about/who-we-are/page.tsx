import ConceptCards from "@/components/cards/ConceptCards";
import Divider from "@/components/divider/Divider";
import ContactSection from "@/components/sections/ContactSection";
import HeroSubPageSection from "@/components/sections/HeroSubPageSection";
import InfoSection from "@/components/sections/InfoSection";
import TextAndImageSection from "@/components/sections/TextAndImageSection";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import React from "react";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "WhoWeAre" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function Index({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const translation = useTranslations();
  const sections = translation.raw("WhoWeAre.sections");
  return (
    <main>
      <HeroSubPageSection image="/hero-image-who-we-are.webp" />
      <InfoSection
        title={translation("WhoWeAre.title")}
        subtitle={translation("WhoWeAre.subtitle")}
        description={translation("WhoWeAre.description")}
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
      <ConceptCards />
      <Divider />
      <ContactSection />
      <Divider />
    </main>
  );
}
