import NextSectionButton from "@/components/buttons/NextSectionButton";
import Divider from "@/components/divider/Divider";
import ContactSection from "@/components/sections/ContactSection";
import HeroSubPageSection from "@/components/sections/HeroSubPageSection";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Contact",
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
          title={translation("Contact.title")}
          subtitle={translation("Contact.subtitle")}
          description={translation("Contact.description")}
          cta={<NextSectionButton title={translation("ContactForm.title")} />}
        />
        <Divider />
        <ContactSection />
        <Divider />
      </main>
    </>
  );
}
