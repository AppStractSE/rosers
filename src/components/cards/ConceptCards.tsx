"use client";

import { useTranslations } from "next-intl";
import ReadMoreCard from "./ReadMoreCard";

interface ConceptItem {
  title: string;
  subtitle: string;
  image: string;
  link: string;
  className?: string;
}

const ConceptCards = () => {
  const translation = useTranslations();
  const concepts = translation.raw("Concepts.labels");
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 xl:px-0">
        <div className="flex flex-col gap-4 lg:flex-row">
          {concepts.map((concept: ConceptItem, index: number) => (
            <ReadMoreCard
              key={index}
              className="flex basis-full flex-col gap-4 transition-all duration-500 ease-in-out lg:basis-4/12 lg:hover:basis-6/12"
              title={concept.title}
              subtitle={concept.subtitle}
              image={concept.image}
              link={concept.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConceptCards;
