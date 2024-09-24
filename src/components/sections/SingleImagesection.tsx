interface Props {
  image: string;
}
const SingleImagesection = ({ image }: Props) => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 lg:my-12 xl:my-24">
        <img
          className="row-span-1 block h-full w-full rounded-sm border border-brass object-cover"
          src={image}
          alt="Your alt text"
        />
      </div>
    </section>
  );
};

export default SingleImagesection;
