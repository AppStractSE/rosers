import { LocalePrefix, Pathnames } from "next-intl/routing";

export const defaultLocale = "en" as const;
export const locales = ["en", "sv"] as const;

export const pathnames: Pathnames<typeof locales> = {
  "/": "/",
  "/the-concept": {
    en: "/the-concept",
    sv: "/konceptet",
  },
  "/the-concept/rosers-kitchen": {
    en: "/the-concept/rosers-kitchen",
    sv: "/konceptet/rosers-kok",
  },
  "/the-concept/global-events": {
    en: "/the-concept/global-events",
    sv: "/konceptet/globala-evenemang",
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
  "/news": {
    en: "/news",
    sv: "/nyheter",
  },
  "/events": {
    en: "/events",
    sv: "/evenemang",
  },
  "/contact": {
    en: "/contact",
    sv: "/kontakt",
  },
  "/our-creativity": {
    en: "/our-creativity",
    sv: "/var-kreativitet",
  },
  "/our-creativity/vision": {
    en: "/our-creativity/vision",
    sv: "/var-kreativitet/vision",
  },
  "/our-creativity/inspiration": {
    en: "/our-creativity/inspiration",
    sv: "/var-kreativitet/inspiration",
  },
};

export const localePrefix: LocalePrefix<typeof locales> = "always";

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`;
