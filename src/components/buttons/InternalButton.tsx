"use client";
import { futuraStd } from "@/util/fonts";
import { useLocale } from "next-intl";
import Link from "next/link";

interface Props {
  title: string;
  href?: string;
  className?: string;
  onClick?: () => void;
}
// extend this to a html button component
const InternalButton = ({ title, href, onClick, className }: Props) => {
  const locale = useLocale();
  return (
    <Link
      onClick={onClick}
      href={`/${locale}/${href}`}
      className={"inline-block w-fit rounded-sm border border-gold bg-charcoal-900 p-2 px-4 text-center text-lg transition-all duration-200 ease-in-out hover:bg-gold hover:text-[#232323]"
        .concat(" ")
        .concat(futuraStd.className)
        .concat(" ")
        .concat(className ?? "")}
    >
      {title}
    </Link>
  );
};

export default InternalButton;
