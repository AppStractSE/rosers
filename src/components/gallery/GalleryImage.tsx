import { futuraStd, garamond } from "@/util/fonts";
import { twMerge } from "tailwind-merge";

interface Props {
  title: string;
  subtitle: string;
  image: string;
  size: string;
  description: string;
}

const  GalleryImage = ({ title, subtitle, size, image, description }: Props) => (
  <div
    className={twMerge(
      "flex flex-1 basis-full flex-col gap-4 object-cover transition-all duration-300 ease-in-out",
      "group relative overflow-hidden rounded-sm border border-brass",
      size,
    )}
  >
    <div className="absolute inset-0 h-full w-full bg-[#232323]/75 p-8 opacity-0 transition-all duration-1000 group-hover:opacity-100 group-hover:backdrop-blur-sm">
      <div className="-translate-y-full transform opacity-0 transition-all delay-100 duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
        <p
          className={twMerge(
            "text-balance whitespace-pre-line text-lg",
            garamond.className,
          )}
        >
          {description}
        </p>
      </div>
    </div>
    <img
      src={image}
      className="h-full w-full object-cover transition-all duration-300 ease-in-out"
    />
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-b from-charcoal-950/50 to-charcoal-950 px-4 py-2.5 backdrop-blur-sm">
      <div className="flex items-center gap-4 transition-all duration-300 ease-in-out group-hover:ml-0">
        <div>
          <p className="text-xxs uppercase text-brass lg:text-xs">{subtitle}</p>
          <h3 className={twMerge("text-gold lg:text-lg", futuraStd.className)}>
            {title}
          </h3>
        </div>
      </div>
    </div>
  </div>
);

export default GalleryImage;
