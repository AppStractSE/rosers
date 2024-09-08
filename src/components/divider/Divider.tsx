import Rosers from "@/util/Rosers";

const Divider = () => {
  return (
    <section>
      <div className="flex w-full items-center gap-8 lg:my-6 xl:my-12">
        <div className="h-[1px] w-full bg-[#a286688e]" />
        <Rosers className="h-32 w-32" />
        <div className="h-[1px] w-full bg-[#a286688e]" />
      </div>
    </section>
  );
};

export default Divider;
