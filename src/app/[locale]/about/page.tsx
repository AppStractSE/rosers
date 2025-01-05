import CTAButton from "@/components/buttons/CTAButton";
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
  title: "About us",
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
        <HeroSubPageSection image="/herotest_bw.png" />
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
          image="/14_15._00A8688.jpg"
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
          image="/_00A8854ss.jpg"
          button={{
            text: translation("WhoWeAre.label"),
            link: translation("WhoWeAre.href"),
          }}
        />
        <TextAndImageSection
          rtl
          title={translation("OurHistory.secondary_title")}
          subTitle={translation("OurHistory.title")}
          text={translation("OurHistory.secondary_description")}
          image="/bengt-roser-black-and-white.jpeg"
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
    </>
  );
}
