import ConceptCards from "@/components/cards/ConceptCards";
import Divider from "@/components/divider/Divider";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import TextAndImageSection from "@/components/sections/TextAndImageSection";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Index({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const translation = useTranslations();

  return (
    <main>
      <HeroSection
        title={translation("Home.HeroSection.title")}
        description={translation("Home.HeroSection.description")}
        image="/hero-image-homepage.webp"
        showLogo
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
      <ConceptCards showHeader />
      <Divider />
      <TextAndImageSection
        title={translation("Events.secondary_title")}
        subTitle={translation("Events.third_title")}
        text={translation("Events.description")}
        image="/event001.webp"
        button={{
          text: translation("ReadMore"),
          link: translation("RosersGlobalEvents.href"),
        }}
      />
      <Divider />
      <TextAndImageSection
        rtl
        title={translation("OurHistory.secondary_title")}
        subTitle={translation("OurHistory.title")}
        text={translation("OurHistory.secondary_description")}
        image="/bengt001.webp"
        button={{
          text: translation("ReadMore"),
          link: translation("OurHistory.href"),
        }}
      />
      <Divider />
      <ContactSection />
      <Divider />
    </main>
  );
}
