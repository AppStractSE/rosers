import InternalButton from "@/components/buttons/InternalButton";
import ConceptCards from "@/components/cards/ConceptCards";
import Divider from "@/components/divider/Divider";
import ContactSection from "@/components/sections/ContactSection";
import HeroSubPageSection from "@/components/sections/HeroSubPageSection";
import InfoSection from "@/components/sections/InfoSection";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Rosers Consulting",
};

export default function Index({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const translation = useTranslations();
  return (
    <>
      <main>
        <HeroSubPageSection image="/hero-image-our-history.webp" />
        <InfoSection
          title={translation("TheConcept.what_is_the_concept_title")}
          subtitle={translation("TheConcept.subtitle")}
          description={translation("TheConcept.description")}
        />
        <ConceptCards />
        <Divider />
        <ContactSection />
        <Divider />
      </main>
    </>
  );
}
