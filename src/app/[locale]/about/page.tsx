import CTAButton from "@/components/buttons/CTAButton";
import ConceptCards from "@/components/cards/ConceptCards";
import Divider from "@/components/divider/Divider";
import ContactSection from "@/components/sections/ContactSection";
import HeroSubPageSection from "@/components/sections/HeroSubPageSection";
import InfoSection from "@/components/sections/InfoSection";
import TextAndImageSection from "@/components/sections/TextAndImageSection";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "About" });

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
      <HeroSubPageSection image="/hero-image-about.webp" />
      <InfoSection
        title={translation("About.title")}
        subtitle={translation("About.subtitle")}
        description={translation("About.description")}
      >
        <CTAButton
          label={translation("GetInTouch")}
          href={`/${locale}${translation("Contact.href")}`}
        />
      </InfoSection>
      <Divider />
      <TextAndImageSection
        rtl
        title={translation("WhatWeDo.secondary_title")}
        subTitle={translation("WhatWeDo.title")}
        text={translation("WhatWeDo.secondary_description")}
        image="/staff001.webp"
        button={{
          text: translation("WhatWeDo.label"),
          link: translation("WhatWeDo.href"),
        }}
      />
      <Divider />
      <TextAndImageSection
        title={translation("WhoWeAre.secondary_title")}
        subTitle={translation("WhoWeAre.title")}
        text={translation("WhoWeAre.secondary_description")}
        image="/bengt.webp"
        button={{
          text: translation("WhoWeAre.label"),
          link: translation("WhoWeAre.href"),
        }}
      />
      <Divider />
      <TextAndImageSection
        rtl
        title={translation("OurHistory.secondary_title")}
        subTitle={translation("OurHistory.title")}
        text={translation("OurHistory.secondary_description")}
        image="/bengt002.webp"
        button={{
          text: translation("OurHistory.label"),
          link: translation("OurHistory.href"),
        }}
      />
      <Divider />
      <ConceptCards showHeader />
      <Divider />
      <ContactSection />
      <Divider />
    </main>
  );
}
