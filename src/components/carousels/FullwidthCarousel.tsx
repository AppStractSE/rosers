"use client";

import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "../embla/EmblaCarousel";

const FullwidthCarousel = () => {
  const OPTIONS: EmblaOptionsType = {
    loop: true,
    duration: 150,
  };
  const SLIDES = [
    "https://placehold.co/1920x1080.png",
    "https://placehold.co/1920x1080.png",
    "https://placehold.co/1920x1080.png",
    "https://placehold.co/1920x1080.png",
  ];

  return <EmblaCarousel slides={SLIDES} options={OPTIONS} />;
};

export default FullwidthCarousel;
