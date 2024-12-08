import InternalButton from "@/components/buttons/InternalButton";
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
  title: "Our creativity",
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
          title={translation("TheConcept.title")}
          subtitle={translation("TheConcept.subtitle")}
          description={translation("TheConcept.description")}
          cta={
            <InternalButton
              title={translation("ContactForm.title")}
              href="contact"
            />
          }
        />
        <InfoSection
          title={translation("TheConcept.what_is_the_concept_title")}
          subtitle={translation("TheConcept.subtitle")}
          description={translation("TheConcept.description")}
        />
        <Divider />
        <TextAndImageSection
          rtl
          title={translation("OurHistory.secondary_title")}
          subTitle={translation("OurHistory.title")}
          text={translation("OurHistory.secondary_description")}
          image="/bengt-roser-black-and-white.jpeg"
        />
        <Divider />
        <TextAndImageSection
          title={translation("OurHistory.secondary_title")}
          subTitle={translation("OurHistory.title")}
          text={translation("OurHistory.secondary_description")}
          image="/IMG_3614.jpeg"
          button={{
            text: "Read more",
            link: "/about/our-history",
          }}
        />
        <TextAndImageSection
          rtl
          title={translation("OurHistory.secondary_title")}
          subTitle={translation("OurHistory.title")}
          text={translation("OurHistory.secondary_description")}
          image="/bengt-roser-black-and-white.jpeg"
          button={{
            text: "Read more",
            link: "/about/our-history",
          }}
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
