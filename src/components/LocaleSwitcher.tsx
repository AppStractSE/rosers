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
    <div className={showAsCol ? "flex-col items-start gap-4" : "flex gap-2 items-center"}>
      {locales.map((lang, index) => (
        <React.Fragment key={lang}>
          <button
            disabled={isPending}
            onClick={handleLocaleChange}
            value={lang}
            className={"block uppercase text-xs font-extralight tracking-widest hover:underline underline-offset-4 py-2 "
              .concat(locale === lang ? "underline " : "")
              .concat(futuraStd.className)}
          >
            {translation("locale", { locale: lang })}
          </button>
          {!showAsCol && index === 0 ? (
            <div className="h-[3px] w-[3px] bg-gold rounded-full" />
          ) : null}
        </React.Fragment>
      ))}
    </div>
  );
}
