import { LocalePrefix, Pathnames } from "next-intl/routing";

export const defaultLocale = "en" as const;
export const locales = ["en", "se"] as const;

export const pathnames: Pathnames<typeof locales> = {
  "/": "/",
  "/the-concept": {
    en: "/the-concept",
    se: "/konceptet",
  },
  "/the-concept/rosers-kitchen": {
    en: "/the-concept/rosers-kitchen",
    se: "/konceptet/rosers-kok",
  },
  "/the-concept/global-events": {
    en: "/the-concept/global-events",
    se: "/konceptet/globala-evenemang",
  },
  "/the-concept/rosers-consulting": {
    en: "/the-concept/rosers-consulting",
    se: "/konceptet/rosers-konsultering",
  },
  "/about": {
    en: "/about",
    se: "/om-oss",
  },
  "/about/what-we-do": {
    en: "/about/what-we-do",
    se: "/om-oss/vad-vi-gor",
  },
  "/about/who-we-are": {
    en: "/about/who-we-are",
    se: "/om-oss/vilka-vi-ar",
  },
  "/about/our-history": {
    en: "/about/our-history",
    se: "/om-oss/var-historia",
  },
  "/news": {
    en: "/news",
    se: "/nyheter",
  },
  "/events": {
    en: "/events",
    se: "/evenemang",
  },
  "/contact": {
    en: "/contact",
    se: "/kontakt",
  },
  "/our-creativity": {
    en: "/our-creativity",
    se: "/var-kreativitet",
  },
  "/our-creativity/vision": {
    en: "/our-creativity/vision",
    se: "/var-kreativitet/vision",
  },
  "/our-creativity/inspiration": {
    en: "/our-creativity/inspiration",
    se: "/var-kreativitet/inspiration",
  },
};

export const localePrefix: LocalePrefix<typeof locales> = "always";
