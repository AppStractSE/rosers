import { LocalePrefix, Pathnames } from "next-intl/routing";

export const defaultLocale = "sv" as const;
export const locales = ["en", "sv"] as const;

export const pathnames: Pathnames<typeof locales> = {
  "/": "/",
  "/the-concept": {
    en: "/the-concept",
    sv: "/konceptet",
  },
  "/the-concept/rosers-global-events": {
    en: "/the-concept/rosers-global-events",
    sv: "/konceptet/rosers-globala-evenemang",
  },
  "/the-concept/rosers-consulting": {
    en: "/the-concept/rosers-consulting",
    sv: "/konceptet/rosers-konsultering",
  },
  "/about": {
    en: "/about",
    sv: "/om-oss",
  },
  "/about/what-we-do": {
    en: "/about/what-we-do",
    sv: "/om-oss/vad-vi-gor",
  },
  "/about/who-we-are": {
    en: "/about/who-we-are",
    sv: "/om-oss/vilka-vi-ar",
  },
  "/about/our-history": {
    en: "/about/our-history",
    sv: "/om-oss/var-historia",
  },
  "/events": {
    en: "/events",
    sv: "/evenemang",
  },
  "/contact": {
    en: "/contact",
    sv: "/kontakt",
  },
};

export const localePrefix: LocalePrefix<typeof locales> = "always";

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`;
