import { futuraStd, garamond } from "@/util/fonts";
import { useTranslations } from "next-intl";
import { IoChevronDownSharp } from "react-icons/io5";

const MobileHeroSection = () => {
  const translation = useTranslations("Home");
  return (
    <section className="block overflow-hidden lg:hidden">
      <img
        src="/hero-frontpage.png"
        className="h-full w-full border-b border-[#a286688e] object-cover"
      />
      <div className="mx-auto mt-6 max-w-screen-xl px-4 2xl:px-0">
        <div className="space-y-6">
          <h1
            className={"text-3xl md:text-4xl"
              .concat(" ")
              .concat(futuraStd.className)}
          >
            {translation("HeroSection.title")}
          </h1>
          <p
            className={"mx-auto text-xl md:text-2xl"
              .concat(" ")
              .concat(garamond.className)}
          >
            {translation("HeroSection.description")}
          </p>
        </div>
        <div className="group mb-12 mt-12 grid cursor-pointer place-items-center gap-4 duration-200 ease-in-out hover:scale-110">
          <p
            className={futuraStd.className
              .concat(" ")
              .concat("text-xxs uppercase tracking-[0.2em]")}
          >
            {translation("HeroSection.buttonText")}
          </p>
          <IoChevronDownSharp className="animate-pulse text-2xl transition-all duration-200 ease-in md:text-4xl" />
        </div>
      </div>
    </section>
  );
};

export default MobileHeroSection;
