import Footer from "@/components/footer/Footer";
import Navigation from "@/components/navigation/Navigation";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import "../globals.scss";

export const metadata: Metadata = {
  title: {
    template: "%s | Rosers",
    default: "Rosers | Unforgettable dining experiences for all occasions",
  },
};
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
          <Navigation />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
