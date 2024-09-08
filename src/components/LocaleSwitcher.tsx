"use client";
import { locales } from "@/config";
import { usePathname, useRouter } from "@/navigation";
import { futuraStd } from "@/util/fonts";
import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import React, { useTransition } from "react";

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
  function handleLocaleChange(event: any) {
    const nextLocale = event.target.value;
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
      {locales.map((lang, index) => (
        <React.Fragment key={lang}>
          <button
            disabled={isPending}
            onClick={handleLocaleChange}
            value={lang}
            className={"block py-2 text-xs font-extralight uppercase tracking-widest hover:text-brass"
              .concat(" ")
              .concat(locale === lang ? "text-brass" : "")
              .concat(" ")
              .concat(futuraStd.className)}
          >
            {translation("locale", { locale: lang })}
          </button>
          {!showAsCol && index === 0 ? (
            <div className="h-[3px] w-[3px] rounded-full bg-gold" />
          ) : null}
        </React.Fragment>
      ))}
    </div>
  );
}
