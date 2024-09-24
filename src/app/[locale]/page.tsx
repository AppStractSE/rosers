import TextsAndImageSections from "@/components/TextsAndImageSections";
import ExploreButton from "@/components/buttons/ExploreButton";
import Divider from "@/components/divider/Divider";
import ConceptSection from "@/components/sections/ConceptSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Index({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const translation = useTranslations("Home");

  return (
    <>
      <main>
        <HeroSection
          title={translation("HeroSection.title")}
          description={translation("HeroSection.description")}
          image="/hero-frontpage.png"
          showLogo
        >
          <ExploreButton />
        </HeroSection>
        <Divider />
        <TextsAndImageSections />
        <Divider />
        <ConceptSection />
        <Divider />
        <ContactSection />
        <Divider />
      </main>
    </>
  );
}
