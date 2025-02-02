"use client";
import Review from "@/components/review/Review";
import "@/styles/splide.scss";
import { IReview } from "@/types/IReview";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const SplideReviewCarousel = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const translation = useTranslations();
  const reviews = translation.raw("Reviews");
  const options = {
    type: "loop",
    gap: "1rem",
    pauseOnHover: isMobile ? false : true,
    pauseOnFocus: false,
    resetProgress: false,
    interval: 20000,
    speed: 500,
    arrows: false,
    autoplay: true,
    perPage: 1,
    start: reviews.length,
    perMove: 1,
    focus: "center",
    loop: true,
  };
  return (
    <section>
      <Splide
        key={isMobile ? "mobile" : "desktop"}
        options={options}
        aria-labelledby=""
        hasTrack={false}
      >
        <div className="splide__wrapper">
          <SplideTrack className="hover:cursor-grab active:cursor-grabbing">
            {reviews.map((review: IReview, index: number) => (
              <SplideSlide key={index}>
                <div className="splide-slide">
                  <Review review={review} />
                </div>
              </SplideSlide>
            ))}
          </SplideTrack>
        </div>
        <div className="mx-auto my-4 flex max-w-fit flex-col gap-8">
          <div className="splide__pagination" />
          <div className="splide__progress">
            <div className="splide__progress__bar" />
          </div>
        </div>
      </Splide>
    </section>
  );
};

export default SplideReviewCarousel;
