"use client";

import { futuraStd, garamond } from "@/util/fonts";

const Tabs = () => {
  const concepts = [
    {
      title: "Rosers Kitchen",
      subTitle: "The Cloud Kitchen",
      image: "/rosers-kitchen.png",
    },
    {
      title: "Rosers Global Events",
      subTitle: "Globally Renowned",
      image: "/rosers-global-events.png",
    },
    {
      title: "Rosers Consulting",
      subTitle: "The Culinary Pioneers",
      image: "/rosers-consulting.png",
    },
  ];
  return (
    <section>
      <div className="mx-auto my-24 px-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {concepts.map((concept, index) => (
            <div key={index} className="grid-item flex flex-col gap-4">
              <img
                src={concept.image}
                className="aspect-[1] h-full w-full object-cover"
              />
              <div className="">
                <p className="text-sm uppercase text-brass">
                  {concept.subTitle}
                </p>
                <h3
                  className={"text-2xl text-gold"
                    .concat(" ")
                    .concat(futuraStd.className)}
                >
                  {concept.title}
                </h3>
                <p
                  className={"text-xl font-thin tracking-wide"
                    .concat(" ")
                    .concat(garamond.className)}
                >
                  {concept.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tabs;
