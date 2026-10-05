"use client";

import { futuraStd } from "@/util/fonts";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

const JulbordBanner = ({ locale }: { locale: string }) => {
  const pathname = usePathname();
  const href = locale === "sv" ? "/sv/julbord" : "/en/julebord";

  if (pathname === href) return null;

  return (
    <Link
      href={href}
      className={twMerge(
        futuraStd.className,
        "relative flex items-center justify-center gap-2 border-b border-[#a286688e] bg-gold py-2 text-center text-sm uppercase text-charcoal-700 underline-offset-4 transition-all duration-200 hover:underline md:py-4 md:text-base",
      )}
    >
      {locale === "sv" ? "Julbord 2026! Boka här" : "Julebord 2026! Book here"}
      <ArrowRight size={22} />
    </Link>
  );
};

export default JulbordBanner;
