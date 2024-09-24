import { futuraStd, garamond } from "@/util/fonts";

interface Props {
  title: string;
  subtitle: string;
  description: string;
  cta?: React.ReactNode;
}

const HeroSubPageSection = ({ title, subtitle, description, cta }: Props) => {
  return (
    <section
      className="border-b border-b-brass bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/hero-image.webp')` }}
    >
      <div className="fixed inset-0 bg-charcoal-800 bg-opacity-60"></div>
      <div className="h-12 w-full md:h-24"></div>
      <div className="mx-auto min-h-[70vh] max-w-screen-md px-4 py-12 xl:py-24">
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
            className={"text-balance mb-12 whitespace-pre-line text-center text-2xl font-thin tracking-wide"
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

export default HeroSubPageSection;
