interface Props {
  image?: string;
}

const HeroSubPageSection = ({ image }: Props) => {
  return (
    <section
      className="aspect-[21/9] h-auto max-h-[70vh] w-full border-b border-b-brass bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${image ?? "/hero-image.webp"}')` }}
    ></section>
  );
};

export default HeroSubPageSection;
