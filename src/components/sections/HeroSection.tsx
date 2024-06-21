import Rosers from "@/util/Rosers";
import { futuraStd, garamond } from "@/util/fonts";
import { useTranslations } from "next-intl";
import { IoChevronDownSharp } from "react-icons/io5";

const HeroSection = () => {
  const translation = useTranslations("Home");
  return (
    <div className="text-center flex flex-col items-center justify-between h-dynamic w-full bg-charcoal-800 px-4">
      <div className="flex-grow flex items-center justify-center text-brass max-w-[620px] mx-auto">
        <div className="space-y-6">
          <div className="flex justify-center">
            <Rosers className="h-20 md:h-28 w-20 md:w-28" />
          </div>
          <div className="space-y-12">
            <h1 className={futuraStd.className.concat(" text-4xl md:text-5xl text-balance")}>
              {translation("HeroSection.title")}
            </h1>
            <p
              className={garamond.className.concat(
                " max-w-lg mx-auto text-xl md:text-2xl text-balance",
              )}
            >
              {translation("HeroSection.description")}
            </p>
          </div>
        </div>
      </div>
      <div className="grid place-items-center gap-4 mt-12 mb-4 duration-200 ease-in-out cursor-pointer hover:scale-110 group">
        <p
          className={futuraStd.className.concat(
            " text-brass uppercase tracking-[0.2em] font-thin text-xxs",
          )}
        >
          {translation("HeroSection.buttonText")}
        </p>
        <IoChevronDownSharp className="text-brass text-2xl md:text-4xl animate-pulse" />
      </div>
    </div>
  );
};

export default HeroSection;
