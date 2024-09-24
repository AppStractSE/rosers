import { futuraStd, garamond } from "@/util/fonts";

interface Props {
  title: string;
  description: string;
  image: string;
}

const MobileHeroSection = ({ title, description, image }: Props) => {
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
        </div>
      </div>
    </section>
  );
};

export default MobileHeroSection;
