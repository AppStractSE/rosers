import { futuraStd } from "@/util/fonts";
import { useLocale } from "next-intl";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";
import { twMerge } from "tailwind-merge";
interface Props {
  title: string;
  subtitle: string;
  image: string;
  link: string;
  className?: string;
}

const ReadMoreCard = ({ title, subtitle, image, link, className }: Props) => {
  const locale = useLocale();
  return (
    <Link
      prefetch={true}
      href={`/${locale}${link}`}
      className={twMerge(
        "group relative overflow-hidden rounded-sm border border-brass",
        className,
      )}
    >
      <img
        src={image}
        className="h-[300px] w-full object-cover transition-all duration-500 ease-in-out md:h-[450px] lg:h-[550px]"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-b from-charcoal-950/50 to-charcoal-950 p-4 backdrop-blur-sm">
        <div className="-ml-12 flex items-center gap-4 transition-all duration-500 ease-in-out group-hover:ml-0">
          <IoMdArrowForward className="duration-250 -translate-x-2 text-4xl opacity-0 transition-all ease-in-out group-hover:translate-x-0 group-hover:opacity-100" />
          <div>
            <p className="text-sm uppercase text-brass lg:text-xs">
              {subtitle}
            </p>
            <h3
              className={twMerge(
                "text-lg text-gold lg:text-xl xl:text-2xl",
                futuraStd.className,
              )}
            >
              {title}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ReadMoreCard;
