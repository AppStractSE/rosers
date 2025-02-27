import { futuraStd } from "@/util/fonts";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface Props {
  label: string;
  href: string;
}

const CTAButton = ({ label, href }: Props) => {
  return (
    <Link
      href={href}
      className={twMerge(
        "mt-12 inline-block w-full rounded-sm border border-brass bg-[#232323] py-2.5 text-center text-sm tracking-[0.2em] transition-all duration-200 ease-in-out hover:bg-brass hover:text-[#232323] sm:mt-16 sm:w-fit sm:px-12 sm:py-4 sm:text-base sm:text-brass",
        futuraStd.className,
      )}
    >
      {label}
    </Link>
  );
};

export default CTAButton;
