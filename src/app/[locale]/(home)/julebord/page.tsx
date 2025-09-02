import ScrollToNextSectionButton from "@/components/buttons/ScrollToNextSectionButton";
import Divider from "@/components/divider/Divider";
import HeroSubPageSection from "@/components/sections/HeroSubPageSection";
import InfoSection from "@/components/sections/InfoSection";
import JulbordSection from "@/components/sections/JulbordSection";
import TextAndImageSection from "@/components/sections/TextAndImageSection";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Julebord" });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: `Rosers | ${t("title")}`,
      description: t("description"),
      url: `https://rosers.se/${locale}${t("href")}`,
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
      <HeroSubPageSection image="/hero-image-julebord.webp" />
      <InfoSection
        title={translation("Julebord.title")}
        subtitle={translation("Julebord.subtitle")}
        description={translation("Julebord.description")}
      >
        <ScrollToNextSectionButton title={translation("Julebord.heroButton")} />
      </InfoSection>
      <Divider />
      {/* <TextAndImageSection
        rtl
        title={translation("Julebord.secondary_title")}
        subTitle={translation("Julebord.title")}
        text={translation("Julebord.secondary_description")}
        image="/julbord.webp"
        button={{
          text: translation("Julebord.secondary_button"),
          link: translation("Julebord.externalLink"),
        }}
      /> */}
      {/* <Divider /> */}
      <JulbordSection />
      <Divider />
    </main>
  );
}
