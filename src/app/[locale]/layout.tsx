import Footer from "@/components/footer/Footer";
import Navigation from "@/components/navigation/Navigation";
import SplashScreen from "@/components/splashscreen/SplashScreen";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";
import { Toaster } from "react-hot-toast";
import "../globals.scss";

// export const metadata: Metadata = {
//   title: {
//     template: "%s | Rosers",
//     default: "Rosers | Unforgettable dining experiences for all occasions",
//   },
//   icons: ["/Logo.svg"],
// };

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Home.HeroSection" });
  const localeMap: any = {
    en: "en_US",
    sv: "sv_SE",
  };

  return {
    metadataBase: new URL("https://rosers.se"),
    title: {
      template: "Rosers | %s",
      default: `Rosers | ${t("title")}`,
    },
    icons: ["/Logo.svg"],
    description: t("description"),
    openGraph: {
      locale: localeMap[locale] || "en_US",
      title: `Rosers | ${t("title")}`,
      description: t("description"),
      url: `https://rosers.se/${locale}`,
      siteName: "Rosers",
      images: [
        {
          url: `https://rosers.se/hero-image-homepage.webp`,
          width: 1200,
          height: 630,
          alt: `Rosers | ${t("title")}`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@",
      title: `Rosers | ${t("title")}`,
      images: [
        {
          url: "https://rosers.se/hero-image-homepage.webp",
          width: 1200,
          height: 630,
          alt: `Rosers | ${t("title")}`,
        },
      ],
      description: t("description"),
    },
  };
}
const locales = ["en", "sv"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <SplashScreen />
          <Toaster />
          <Navigation />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
