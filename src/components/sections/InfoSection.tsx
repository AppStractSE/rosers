import { futuraStd, garamond } from "@/util/fonts";

interface Props {
  title: string;
  subtitle: string;
  description: string;
  cta?: React.ReactNode;
}
const InfoSection = ({ title, subtitle, description, cta }: Props) => {
  return (
    <section>
      <div className="mx-auto my-12 max-w-screen-md px-4 xl:my-24">
        <div className="relative mx-auto flex flex-col items-center justify-center">
          <p
            className={"mb-4 text-sm uppercase text-brass"
              .concat(" ")
              .concat(futuraStd.className)}
          >
            {title}
          </p>
          <h3
            className={"text-balance mb-12 text-center text-4xl leading-tight md:text-5xl"
              .concat(" ")
              .concat(futuraStd.className)}
          >
            {subtitle}
          </h3>
          <p
            className={"text-balance whitespace-pre-line text-center text-2xl font-thin tracking-wide"
              .concat(" ")
              .concat(garamond.className)}
          >
            {description}
          </p>
          {cta}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
