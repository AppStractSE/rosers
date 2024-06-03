import { futuraStd, garamond } from "@/util/fonts";
import Link from "next/link";

interface Props {
  rtl: boolean;
  title: string;
  subTitle: string;
  text: string;
  image: string;
  button: {
    text: string;
    link: string;
  };
}

const TextAndImageSection = ({ rtl, title, subTitle, text, image, button }: Props) => {
  return (
    <section className="w-full px-4 py-8">
      <div className="mx-auto max-w-screen-2xl">
        <div
          className={`flex items-center gap-14 justify-between ${
            rtl ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <div className="basis-5/12 rounded-sm border border-[#a28668d7] overflow-hidden">
            <img src={image} alt="Image" className="w-full h-auto" />
          </div>
          <div className="basis-7/12">
            <h3 className={`${futuraStd.className} text-xs uppercase text-[#A28668]`}>
              {subTitle}
            </h3>
            <h2 className={`${futuraStd.className} text-4xl mt-2`}>{title}</h2>
            <p className={`${garamond.className} text-xl tracking-wide font-thin mt-8 whitespace-pre-line`}>
              {text}
            </p>
            <div className="flex justify-end">
              <Link
                href={button.link}
                className={`${futuraStd.className} inline-block ml-auto px-12 py-5 border text-[#a28668d7] transition-all duration-200 ease-in-out border-[#a28668d7] rounded-sm tracking-[0.2em] mt-16 hover:bg-[#A28668] hover:text-[#232323]`}
              >
                {button.text}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextAndImageSection;
