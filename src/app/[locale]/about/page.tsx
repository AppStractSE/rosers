import CTAButton from "@/components/buttons/CTAButton";
import ConceptCards from "@/components/cards/ConceptCards";
import Divider from "@/components/divider/Divider";
import ContactSection from "@/components/sections/ContactSection";
import HeroSubPageSection from "@/components/sections/HeroSubPageSection";
import InfoSection from "@/components/sections/InfoSection";
import TextAndImageSection from "@/components/sections/TextAndImageSection";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "About" });

   return {
     title: t("title"),
     description: t("description"),
     openGraph: {
       title: `Rosers | ${t("title")}`,
       description: t("description"),
       url: `https://rosers.se/${locale}/${t("href")}`,
       siteName: "Rosers",
       images: [
         {
           url: "https://rosers.se/hero-image-about.webp",
           width: 1200,
           height: 630,
           alt: `Rosers | ${t("title")}`,
         },
       ],
     },
     twitter: {
       card: "summary_large_image",
       site: "@",
       title: `Rosers | ${t("title")}`,
       images: [
         {
           url: "https://rosers.se/hero-image-about.webp",
           width: 1200,
           height: 630,
           alt: `Rosers | ${t("title")}`,
         },
       ],
       description: t("description"),
     },
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
        image="/food006.webp"
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
      <InfoSection
        title="Kunglig Hovleverantör"
        subtitle="En utmärkelse av högsta rang"
        description={`Att bli utsedd till Kunglig Hovleverantör är en ära som vittnar om kvalitet, tradition och förtroende. Med årtionden av erfarenhet inom gastronomi och eventcatering är vi stolta över att få leverera matupplevelser av högsta klass till kungliga sammanhang.\n\nGenom noggrant utvalda råvaror och ett kompromisslöst hantverk skapar vi minnesvärda måltider – en kombination av tradition och innovation, värdig de mest prestigefyllda tillställningarna.`}
      >
        <div className="mx-auto mt-8 max-w-[250px] md:max-w-md">
          <Image
            // data-loaded="false"
            // onLoad={(event) => {
            //   event.currentTarget.setAttribute("data-loaded", "true");
            // }}
            src="/riksvapnet.webp"
            priority
            width={1920}
            height={1080}
            quality={100}
            alt="Image"
            blurDataURL="/riksvapnet.webp"
            placeholder="blur"
            // className={twMerge(imageBaseClasses, loadingClasses)}
          />
        </div>
      </InfoSection>
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
