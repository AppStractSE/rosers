"use client";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import TextsAndImageSections from "@/components/TextsAndImageSections";
import Divider from "@/components/divider/Divider";
import ConceptSection from "@/components/sections/ConceptSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";

export default function Index() {
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
