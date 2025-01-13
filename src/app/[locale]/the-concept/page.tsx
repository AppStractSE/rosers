import CTAButton from "@/components/buttons/CTAButton";
import ConceptCards from "@/components/cards/ConceptCards";
import Divider from "@/components/divider/Divider";
import ContactSection from "@/components/sections/ContactSection";
import HeroSubPageSection from "@/components/sections/HeroSubPageSection";
import InfoSection from "@/components/sections/InfoSection";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "The Roser Concept",
};

export default function Index({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const translation = useTranslations();
  return (
    <main>
      <HeroSubPageSection image="/hero-image-about.webp" />
      <InfoSection
        title={translation("TheConcept.title")}
        subtitle={translation("TheConcept.subtitle")}
        description={translation("TheConcept.description")}
      >
        <CTAButton
          label={translation("GetInTouch")}
          href={`/${locale}${translation("Contact.href")}`}
        />
      </InfoSection>
      <Divider />
      <ConceptCards showHeader />
      <Divider />
      <ContactSection />
      <Divider />
    </main>
  );
}
