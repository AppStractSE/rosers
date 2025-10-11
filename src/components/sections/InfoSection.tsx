import { futuraStd, garamond } from "@/util/fonts";
import { twMerge } from "tailwind-merge";

interface Props {
  title: string;
  subtitle: string;
  description: string;
  children?: React.ReactNode;
}
const InfoSection = ({ title, subtitle, description, children }: Props) => {
  return (
    <section>
      <div className="mx-auto my-6 max-w-screen-lg px-4 lg:my-12">
        <div className="relative mx-auto flex flex-col items-center justify-center">
          <p
            className={twMerge(
              "mb-4 text-xs uppercase text-brass md:text-sm",
              futuraStd.className,
            )}
          >
            {title}
          </p>
          <h3
            className={twMerge(
              "text-balance mb-8 text-center text-4xl leading-tight md:mb-12 md:text-5xl",
              futuraStd.className,
            )}
          >
            {subtitle}
          </h3>
          <p
            className={twMerge(
              "text-balance whitespace-pre-line text-center text-xl font-thin tracking-wide md:text-2xl",
              garamond.className,
            )}
          >
            {description}
          </p>
          {children}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
