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

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi, onNavButtonClick);

  return (
    <section className="mx-auto max-w-full">
      <div className="overflow-hidden border-t border-b border-[#8B7257]" ref={emblaRef}>
        <div className="flex touch-pan-y touch-pinch-zoom">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="shrink-0 grow-0 basis-full h-[20rem] lg:h-[30rem] xl:h-[40rem] bg-center bg-no-repeat bg-cover"
              style={{ backgroundImage: `url('${slide}')` }}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4 py-8 justify-center">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={"w-2 h-2 lg:h-3 lg:w-3 xl:h-4 xl:w-4 transform rotate-45 rounded-sm ".concat(
              index === selectedIndex ? " bg-[#F5CEA4]" : "bg-[#8B7257]",
            )}
          />
        ))}
      </div>
    </section>
  );
};

export default EmblaCarousel;
