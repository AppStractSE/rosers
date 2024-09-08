"use client";

import { futuraStd, garamond } from "@/util/fonts";
import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import TextAndImageSection from "../sections/TextAndImageSection";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const concepts = [
    {
      title: "Rosers Kitchen",
      subTitle: "The Cloud Kitchen",
      icon: BiArrowBack,
      component: (
        <TextAndImageSection
          rtl={false}
          title="The Rosers 2"
          subTitle="Who we are 2"
          text={`We are more than just a culinary team; we are pioneers of  unforgettable dining experiences. With a legacy spanning over 50 years,  our passion for culinary excellence drives us to redefine the art of  dining. Led by our visionary founder Bengt Roser, our team is dedicated  to crafting moments that transcend taste, transforming ordinary  gatherings into extraordinary occasions.
      Welcome to a world where every  bite tells a story, and every meal is an unforgettable journey.`}
          image="/image002.png"
          button={{
            text: "Read more",
            link: "/about/who-we-are",
          }}
        />
      ),
    },
    {
      title: "Rosers Global Events",
      subTitle: "Globally Renowned",
      icon: BiArrowBack,
      component: <div className="bg-orange-800 py-24">asdf</div>,
    },
    {
      title: "Rosers Consulting",
      subTitle: "The Culinary Pioneers",
      icon: BiArrowBack,
      component: (
        <TextAndImageSection
          rtl={false}
          title="Rosers Consulting"
          subTitle="Who we are 2"
          text={`We are more than just a culinary team; we are pioneers of  unforgettable dining experiences. With a legacy spanning over 50 years,  our passion for culinary excellence drives us to redefine the art of  dining. Led by our visionary founder Bengt Roser, our team is dedicated  to crafting moments that transcend taste, transforming ordinary  gatherings into extraordinary occasions.
      Welcome to a world where every  bite tells a story, and every meal is an unforgettable journey. We are more than just a culinary team; we are pioneers of  unforgettable dining experiences. With a legacy spanning over 50 years,  our passion for culinary excellence drives us to redefine the art of  dining. Led by our visionary founder Bengt Roser, our team is dedicated  to crafting moments that transcend taste, transforming ordinary  gatherings into extraordinary occasions.
      Welcome to a world where every  bite tells a story, and every meal is an unforgettable journey.`}
          image="/image002.png"
          button={{
            text: "Read more",
            link: "/about/who-we-are",
          }}
        />
      ),
    },
  ];
  return (
    <section>
      <div className="mx-auto my-24 px-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {concepts.map((concept, index) => (
            <div key={index} className="grid-item flex flex-col gap-4">
              <img
                src="/image002.png"
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
