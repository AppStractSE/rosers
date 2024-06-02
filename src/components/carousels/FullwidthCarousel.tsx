"use client";

import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "../embla/EmblaCarousel";

const FullwidthCarousel = () => {
  const OPTIONS: EmblaOptionsType = {
    loop: true,
    duration: 150,
  };
  const SLIDES = [
    "https://cdn.discordapp.com/attachments/1210235642467057764/1245507005674819726/catering_rosers.png?ex=665d9d8a&is=665c4c0a&hm=f52a90bb02154d813e85089e8790832a14544c4ae5481c1a2cf45490218cfb65&",
    "https://cdn.discordapp.com/attachments/1210235642467057764/1245507005674819726/catering_rosers.png?ex=665d9d8a&is=665c4c0a&hm=f52a90bb02154d813e85089e8790832a14544c4ae5481c1a2cf45490218cfb65&",
    "https://cdn.discordapp.com/attachments/1210235642467057764/1245507005674819726/catering_rosers.png?ex=665d9d8a&is=665c4c0a&hm=f52a90bb02154d813e85089e8790832a14544c4ae5481c1a2cf45490218cfb65&",
    "https://cdn.discordapp.com/attachments/1210235642467057764/1245507005674819726/catering_rosers.png?ex=665d9d8a&is=665c4c0a&hm=f52a90bb02154d813e85089e8790832a14544c4ae5481c1a2cf45490218cfb65&",
  ];

  return <EmblaCarousel slides={SLIDES} options={OPTIONS} />;
};

export default FullwidthCarousel;
