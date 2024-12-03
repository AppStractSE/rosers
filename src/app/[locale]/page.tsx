import ExploreButton from "@/components/buttons/ExploreButton";
import Divider from "@/components/divider/Divider";
import ConceptSection from "@/components/sections/ConceptSection";
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
    <>
      <main>
        <HeroSection
          title={translation("Home.HeroSection.title")}
          description={translation("Home.HeroSection.description")}
          image="/hero-frontpage.png"
          showLogo
        >
          <ExploreButton />
        </HeroSection>
        <Divider />
        <TextAndImageSection
          title={translation("WhoWeAre.secondary_title")}
          subTitle={translation("WhoWeAre.title")}
          text={translation("WhoWeAre.secondary_description")}
          image="/image001.png"
          button={{
            text: translation("ReadMore"),
            link: translation("WhoWeAre.href"),
          }}
        />
        <TextAndImageSection
          rtl
          title={translation("WhatWeDo.secondary_title")}
          subTitle={translation("WhatWeDo.title")}
          text={translation("WhatWeDo.secondary_description")}
          image="/swedish_royal_wedding.webp"
          button={{
            text: translation("ReadMore"),
            link: translation("WhatWeDo.href"),
          }}
        />
        <Divider />
        <ConceptSection />
        <Divider />
        <TextAndImageSection
          rtl
          title={translation("OurHistory.secondary_title")}
          subTitle={translation("OurHistory.title")}
          text={translation("OurHistory.secondary_description")}
          image="/our-history.png"
          button={{
            text: translation("ReadMore"),
            link: translation("OurHistory.href"),
          }}
        />
        <TextAndImageSection
          title={translation("Events.secondary_title")}
          subTitle={translation("Events.title")}
          text={translation("Events.secondary_description")}
          image="/pouring_wine.webp"
          button={{
            text: translation("ReadMore"),
            link: translation("Events.href"),
          }}
        />
        <Divider />
        <ContactSection />
        <Divider />
      </main>
    </>
  );
}
