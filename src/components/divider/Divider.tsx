import Rosers from "@/util/Rosers";

const Divider = () => {
  return (
    <section>
      <div className="lg:my-6 xl:my-12 flex items-center gap-8 w-full">
        <div className="w-full bg-[#a286688e] h-[1px]" />
        <Rosers className="h-32 w-32" />
        <div className="w-full bg-[#a286688e] h-[1px]" />
      </div>
    </section>
  );
};

export default Divider;
