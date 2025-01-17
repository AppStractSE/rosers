import { IReview } from "@/types/IReview";
import { futuraStd, garamond } from "@/util/fonts";
import { twMerge } from "tailwind-merge";

interface Props {
  review: IReview;
}

const Review = ({ review }: Props) => {
  return (
    <div className="mx-auto flex max-w-screen-md flex-col px-4">
      <h1
        className={twMerge(
          "flex text-8xl leading-[1] opacity-50",
          garamond.className,
        )}
      >
        “
      </h1>
      <h3
        className={twMerge(
          "-mt-12 text-xl font-medium leading-relaxed sm:text-2xl md:-mt-8 md:text-3xl",
          garamond.className,
        )}
      >
        {review.title}
      </h3>
      <div className="mt-4 flex flex-col gap-2 md:mt-8">
        <h5
          className={twMerge(
            "text-base font-medium tracking-wider md:text-xl",
            futuraStd.className,
          )}
        >
          — {review.name}
        </h5>
        <p
          className={twMerge(
            "text-xs tracking-wider md:text-sm",
            futuraStd.className,
          )}
        >
          {review.company}
        </p>
      </div>
    </div>
  );
};

export default Review;
