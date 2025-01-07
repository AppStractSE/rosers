"use client";

import { futuraStd } from "@/util/fonts";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiChevronRight } from "react-icons/bi";
import { twMerge } from "tailwind-merge";

const Breadcrumbs = () => {
  const translation = useTranslations();
  const path = usePathname();
  const locale = useLocale();

  // Retrieve breadcrumb labels from translations
  const breadcrumbs = translation.raw("Breadcrumbs.labels");

  // Normalize the path by removing the locale prefix and trailing slashes
  const normalizePath = (pathname: string) => {
    const localePrefix = `/${locale}`;
    return pathname.startsWith(localePrefix)
      ? pathname.slice(localePrefix.length).replace(/\/$/, "")
      : pathname.replace(/\/$/, "");
  };

  const normalizedPath = normalizePath(path);

  // Filter breadcrumbs to match the current normalized path
  const matchedBreadcrumbs = breadcrumbs.filter((breadcrumb: any) =>
    normalizedPath.startsWith(breadcrumb.href.replace(/\/$/, "")),
  );

  return (
    <div className={twMerge("flex items-center text-xs", futuraStd.className)}>
      {matchedBreadcrumbs.length > 0 ? (
        matchedBreadcrumbs.map((breadcrumb: any, index: number) => {
          const isLast = index === matchedBreadcrumbs.length - 1;
          return (
            <span key={breadcrumb.href} className="">
              {!isLast ? (
                <Link
                  href={breadcrumb.href}
                  className={twMerge(
                    "opacity-50 hover:underline hover:underline-offset-4 hover:opacity-100",
                  )}
                >
                  {breadcrumb.label}
                </Link>
              ) : (
                <span
                  className={twMerge(
                    "underline underline-offset-4 opacity-50",
                  )}
                >
                  {breadcrumb.label}
                </span>
              )}
              {!isLast && <BiChevronRight className="inline opacity-50" />}
            </span>
          );
        })
      ) : (
        <span className="text-gray-500">Home</span> // Fallback for no breadcrumbs
      )}
    </div>
  );
};

export default Breadcrumbs;
