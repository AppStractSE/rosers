import { futuraStd, garamond } from "@/util/fonts";
import scrollToNextSection from "@/util/scrolltoNextSection";

interface Props {
  title: string;
  description: string;
  buttonText: string;
  image: string;
}

const MobileHeroSection = ({
  title,
  description,
  buttonText,
  image,
}: Props) => {
  return (
    <section className="block overflow-hidden lg:hidden">
      <img
        src={image}
        className="h-full w-full border-b border-[#a286688e] object-cover"
      />
      <div className="mx-auto mt-6 max-w-screen-xl px-4 2xl:px-0">
        <div className="space-y-6">
          <h1
            className={"text-3xl md:text-4xl"
              .concat(" ")
              .concat(futuraStd.className)}
          >
            {title}
          </h1>
          <p
            className={"mx-auto text-xl md:text-2xl"
              .concat(" ")
              .concat(garamond.className)}
          >
            {description}
          </p>
          <button
            onClick={() => scrollToNextSection(2, -64)}
            className={"mt-12 inline-block w-full rounded-sm border-brass border bg-[#232323] py-2.5 text-center text-sm tracking-[0.2em] transition-all duration-200 ease-in-out hover:bg-brass hover:text-[#232323] sm:mt-16 sm:w-fit sm:px-12 sm:py-4 sm:text-base sm:text-brass"
              .concat(" ")
              .concat(futuraStd.className)}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default MobileHeroSection;
