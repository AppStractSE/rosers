"use client";

import { twMerge } from "tailwind-merge";

interface Props {
  src: string;
  className?: string;
}

const Video = ({ src, className }: Props) => {
  const videoBaseClasses =
    "h-auto w-full max-w-full object-cover duration-300 transition-all ease-in-out rounded-sm border border-[#a28668d7]";
  return (
    <video
      data-loaded="false"
      onLoadedData={(event) => {
        event.currentTarget.setAttribute("data-loaded", "true");
      }}
      src={src}
      autoPlay
      loop
      muted
      playsInline
      className={twMerge(videoBaseClasses, className)}
    />
  );
};

export default Video;
