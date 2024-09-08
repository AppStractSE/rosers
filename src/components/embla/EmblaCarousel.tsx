import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

interface Props {
  slides: string[];
  options?: EmblaOptionsType;
}
const EmblaCarousel = ({ slides, options }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay(), Fade()]);
  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick,
  );

  return (
    <section className="mx-auto max-w-full">
      <div
        className="overflow-hidden border-b border-t border-[#8B7257]"
        ref={emblaRef}
      >
        <div className="flex touch-pan-y touch-pinch-zoom">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`h-[20rem] shrink-0 grow-0 basis-full bg-cover bg-center bg-no-repeat lg:h-[30rem] xl:h-[40rem]`}
              style={{ backgroundImage: `url('${slide}')` }}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 py-8">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={`h-2 w-2 rotate-45 transform rounded-sm lg:h-3 lg:w-3 xl:h-4 xl:w-4 ${index === selectedIndex ? "bg-[#F5CEA4]" : "bg-[#8B7257]"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default EmblaCarousel;
