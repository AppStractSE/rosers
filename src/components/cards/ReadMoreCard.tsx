import { futuraStd, garamond } from "@/util/fonts";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";

interface Props {
  title: string;
  subtitle: string;
  image: string;
  link: string;
}

const ReadMoreCard = ({ title, subtitle, image, link }: Props) => {
  const locale = useLocale();
  const translation = useTranslations();
  return (
    <div className="grid-item flex flex-col gap-4">
      <Link
        href={`/${locale}${link}`}
        className="group overflow-hidden rounded-sm border border-brass"
      >
        <img
          src={image}
          className="aspect-[1] h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-[102.5%]"
        />
      </Link>
      <div className="">
        <p className="text-sm uppercase text-brass">{subtitle}</p>
        <h3
          className={"text-2xl text-gold"
            .concat(" ")
            .concat(futuraStd.className)}
        >
          {title}
        </h3>
        <Link
          href={`/${locale}${link}`}
          className={"mt-1 flex w-fit items-center gap-2 text-base tracking-wide text-brass transition-all duration-200 ease-in-out hover:gap-3 hover:underline hover:underline-offset-4"
            .concat(" ")
            .concat(garamond.className)}
        >
          <span>{translation("ReadMore")}</span>
          <BsChevronRight className="text-xs" />
        </Link>
      </div>
    </div>
  );
};

export default ReadMoreCard;
