import CTAButton from "@/components/buttons/CTAButton";
import ConceptCards from "@/components/cards/ConceptCards";
import Divider from "@/components/divider/Divider";
import ContactSection from "@/components/sections/ContactSection";
import HeroSubPageSection from "@/components/sections/HeroSubPageSection";
import InfoSection from "@/components/sections/InfoSection";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "TheConcept" });

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
  return (
    <main>
      <HeroSubPageSection image="/hero-image-concept.webp" />
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
