import TextsAndImageSections from "@/components/TextsAndImageSections";
import Divider from "@/components/divider/Divider";
import ConceptSection from "@/components/sections/ConceptSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Index({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  return (
    <>
      <main>
        <HeroSection />
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
