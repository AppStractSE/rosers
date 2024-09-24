"use client";

import { useTranslations } from "next-intl";
import ReadMoreCard from "./ReadMoreCard";

interface ConceptItem {
  title: string;
  subtitle: string;
  image: string;
  link: string;
}

const ConceptCards = () => {
  const translation = useTranslations();
  const concepts = translation.raw("Concepts.labels");
  return (
    <section>
      <div className="mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {concepts.map((concept: ConceptItem, index: number) => (
            <ReadMoreCard
              key={index}
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
