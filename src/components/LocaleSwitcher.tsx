"use client";
import { locales } from "@/config";
import { usePathname, useRouter } from "@/navigation";
import { futuraStd } from "@/util/fonts";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useTransition } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  showAsCol?: boolean;
}

export default function LocaleSwitcher({ showAsCol }: Props) {
  const router = useRouter();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const translation = useTranslations("LocaleSwitcher");

  function handleLocaleChange(nextLocale: string) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error
        { pathname, params },
        { locale: nextLocale },
      );
    });
  }

  return (
    <div
      className={
        showAsCol ? "flex-col items-start gap-4" : "flex items-center gap-2"
      }
    >
      {locales.map((lang, index) => {
        const localeData = translation("locale", { locale: lang });
        const [svgSrc, text] = localeData.split(",");

        return (
          <React.Fragment key={lang}>
            <button
              disabled={isPending}
              onClick={() => handleLocaleChange(lang)}
              className={twMerge(
                "block py-2 text-xs font-extralight uppercase tracking-widest hover:text-brass",
                locale === lang ? "text-brass" : "",
                futuraStd.className,
              )}
            >
              <div className="flex items-center gap-2">
                <Image
                  src={svgSrc.trim()}
                  alt={`${lang} flag`}
                  width={16}
                  height={16}
                />
                {text.trim()}
              </div>
            </button>
            {!showAsCol && index === 0 ? (
              <div className="h-[3px] w-[3px] rounded-full bg-gold" />
            ) : null}
          </React.Fragment>
        );
      })}
    </div>
  );
}
