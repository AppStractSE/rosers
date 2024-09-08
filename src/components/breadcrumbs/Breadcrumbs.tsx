"use client";

import { futuraStd } from "@/util/fonts";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { GoChevronRight } from "react-icons/go";

interface BreadcrumbItem {
  href: string;
  label: string | JSX.Element;
}

const Breadcrumbs = () => {
  const translation = useTranslations("Breadcrumbs");
  const breadcrumbs = translation.raw("labels");
  const locale = useLocale();
  const pathname = usePathname();

  // Combine locale and pathname and remove leading slash
  const cleanedPathname = pathname.startsWith(`/${locale}`)
    ? pathname.slice(locale.length + 1)
    : pathname.slice(1);

  // Split the cleaned pathname into segments
  const pathSegments = cleanedPathname.split("/").filter(Boolean);

  // Generate breadcrumb items
  const breadcrumbItems: BreadcrumbItem[] = [
    {
      href: "/",
      label: breadcrumbs.find((link: BreadcrumbItem) => link.href === "/")
        ?.label,
    }, // Home breadcrumb with icon
  ].concat(
    pathSegments.map((segment, index) => {
      const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
      const label =
        breadcrumbs.find((link: BreadcrumbItem) => link.href === href)?.label ||
        segment;
      return { href, label };
    }),
  );

  return (
    <div className="mx-auto max-w-screen-xl">
      <nav
        className={futuraStd.className
          .concat(" ")
          .concat("flex items-center gap-2 text-xs")}
      >
        {breadcrumbItems.map((item, index) => (
          <React.Fragment key={item.href}>
            {index > 0 && <GoChevronRight />}
            {index < breadcrumbItems.length - 1 ? (
              <Link
                className="transition-all duration-200 ease-in-out hover:text-brass hover:underline hover:underline-offset-4"
                href={item.href}
              >
                {item.label}
              </Link>
            ) : (
              <div className="transition-all duration-200 ease-in-out">
                <span>{item.label}</span>
              </div>
            )}
          </React.Fragment>
        ))}
      </nav>
    </div>
  );
};

export default Breadcrumbs;
