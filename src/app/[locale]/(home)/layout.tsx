import Footer from "@/components/footer/Footer";
import Navigation from "@/components/navigation/Navigation";
import SplashScreen from "@/components/splashscreen/SplashScreen";
import { futuraStd } from "@/util/fonts";
import { ArrowRight } from "lucide-react";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";
import Link from "next/link";
import { Toaster } from "react-hot-toast";
import { twMerge } from "tailwind-merge";
import "../../globals.scss";

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
        <SplashScreen>
          <NextIntlClientProvider messages={messages}>
            <Toaster />
            <Link
              href={locale === "sv" ? "/sv/julbord" : "/en/julebord"}
              className={twMerge(
                futuraStd.className,
                "flex items-center justify-center gap-2 border-b border-[#a2866848] bg-charcoal-600 py-2 text-center text-base uppercase transition-all duration-200 hover:bg-charcoal-500 md:py-4",
              )}
            >
              {locale === "sv"
                ? "Julbord 2025! Boka här"
                : "Julebord 2025! Book here"}
              <ArrowRight size={20} />
            </Link>
            <Navigation />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </SplashScreen>
      </body>
    </html>
  );
}
