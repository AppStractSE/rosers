import ConceptCards from "@/components/cards/ConceptCards";
import Divider from "@/components/divider/Divider";
import ContactSection from "@/components/sections/ContactSection";
import HeroSubPageSection from "@/components/sections/HeroSubPageSection";
import InfoSection from "@/components/sections/InfoSection";
import TextAndImageSection from "@/components/sections/TextAndImageSection";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

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
  return (
    <>
      <main>
        <HeroSubPageSection
          title={translation("OurHistory.title")}
          subtitle={translation("OurHistory.subtitle")}
          description={translation("OurHistory.description")}
          image="/hero-image-our-history.webp"
        />
        <InfoSection
          title={translation("OurHistory.secondary_title")}
          subtitle={translation("OurHistory.title")}
          description={translation("OurHistory.secondary_description")}
        />
        <Divider />
        <TextAndImageSection
          rtl
          title={translation("OurHistory.secondary_title")}
          subTitle={translation("OurHistory.title")}
          text={translation("OurHistory.secondary_description")}
          image="/our-history.png"
        />
        <Divider />
        <InfoSection
          title={translation("TheConcept.what_is_the_concept_title")}
          subtitle={translation("TheConcept.subtitle")}
          description={translation("TheConcept.description")}
        />
        <Divider />
        <TextAndImageSection
          title={translation("OurHistory.secondary_title")}
          subTitle={translation("OurHistory.title")}
          text={translation("OurHistory.secondary_description")}
          image="/IMG_3614.jpeg"
        />
        <TextAndImageSection
          rtl
          title={translation("OurHistory.secondary_title")}
          subTitle={translation("OurHistory.title")}
          text={translation("OurHistory.secondary_description")}
          image="/bengt-roser-black-and-white.jpeg"
        />
        <Divider />
        <InfoSection
          title={translation("OurHistory.secondary_title")}
          subtitle={translation("OurHistory.title")}
          description={translation("OurHistory.secondary_description")}
        />
        <Divider />
        <ConceptCards />
        <Divider />
        <ContactSection />
        <Divider />
      </main>
    </>
  );
}
