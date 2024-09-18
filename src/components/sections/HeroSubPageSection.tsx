import { futuraStd, garamond } from "@/util/fonts";
import { useTranslations } from "next-intl";

const HeroSubPageSection = () => {
  const translation = useTranslations("ContactForm");
  return (
    <section className="min-h-[480px] border-b border-b-brass bg-[url('/hero-image.webp')] bg-cover bg-center bg-no-repeat">
      <div className="fixed inset-0 bg-charcoal-800 bg-opacity-60"></div>
      <div className="relative mx-auto max-w-screen-xl">
        <div className="h-32 w-full"></div>
        <div className="mx-auto my-12 flex flex-col items-center justify-center py-12">
          <h1
            className={futuraStd.className
              .concat(" ")
              .concat(
                "text-balance mb-8 text-center text-4xl leading-tight md:text-6xl",
              )}
          >
            The Rosers Concept
          </h1>
          <p
            className={"text-balance mb-16 max-w-lg whitespace-pre-line text-center text-2xl font-thin tracking-wide"
              .concat(" ")
              .concat(garamond.className)}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            tincidunt, felis nec facilisis tincidunt, nulla sapien ultricies
            nunc, nec ullamcorper nunc odio nec quam
          </p>
          <button
            className={"inline-block w-fit rounded-sm border border-gold bg-charcoal-900 p-2 px-4 text-center text-lg transition-all duration-200 ease-in-out hover:bg-gold hover:text-[#232323]"
              .concat(" ")
              .concat(futuraStd.className)}
          >
            {translation("title")}
          </button>
        </div>
        <div className="h-32 w-full"></div>
      </div>
    </section>
  );
};

export default HeroSubPageSection;
