"use client";

import { futuraStd, garamond } from "@/util/fonts";
import { useTranslations } from "next-intl";
import ReadMoreCard from "./ReadMoreCard";

interface ConceptItem {
  title: string;
  subtitle: string;
  image: string;
  link: string;
  className?: string;
}

interface Props {
  showHeader?: boolean;
}

const ConceptCards = ({ showHeader }: Props) => {
  const translation = useTranslations();
  const concepts = translation.raw("Concepts.labels");
  return (
    <section>
      {showHeader && (
        <div className="mx-auto mb-12 max-w-screen-xl space-y-2 px-4 2xl:px-0">
          <h3
            className={"text-xs uppercase text-brass"
              .concat(" ")
              .concat(futuraStd.className)}
          >
            {translation("TheConcept.our_concept")}
          </h3>
          <h3
            className={"text-3xl text-gold md:text-4xl"
              .concat(" ")
              .concat(futuraStd.className)}
          >
            {translation("the_rosers_concept_title")}
          </h3>
          <p
            className={"text-xl font-thin tracking-wide"
              .concat(" ")
              .concat(garamond.className)}
          >
            {translation("the_rosers_concept_description")}
          </p>
        </div>
      )}
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
