import { futuraStd, garamond } from "@/util/fonts";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { twMerge } from "tailwind-merge";
import ContactForm from "../forms/ContactForm";

const ContactSection = () => {
  const translation = useTranslations("ContactForm");
  return (
    <section>
      <div className="mx-auto max-w-lg px-4 2xl:px-0">
        <div className="mx-auto mb-8 space-y-4 lg:mb-16 lg:space-y-8">
          <h2
            className={twMerge(
              "text-3xl lg:text-center lg:text-5xl",
              futuraStd.className,
            )}
          >
            {translation("title")}
          </h2>
          <p
            className={twMerge(
              "text-balance text-xl font-thin lg:text-center lg:text-2xl",
              garamond.className,
            )}
          >
            {translation("description")}
          </p>
        </div>
        <ContactForm />
        <div className="mx-auto mt-8 space-y-4">
          <Link
            href="mailto:bengt@rosers.se"
            className={twMerge(
              "flex w-fit items-center gap-4 text-base font-normal leading-normal tracking-wider hover:underline hover:underline-offset-4 lg:text-lg",
              garamond.className,
            )}
          >
            <div className="text-base text-[#8B7257] lg:text-lg">
              <TbMailFilled />
            </div>
            bengt@rosers.se
          </Link>
          <Link
            href="tel:+46705203573"
            className={twMerge(
              "flex w-fit items-center gap-4 text-base font-normal leading-normal tracking-wider hover:underline hover:underline-offset-4 lg:text-lg",
              garamond.className,
            )}
          >
            <div className="text-base text-[#8B7257] lg:text-lg">
              <FaPhone />
            </div>
            +46 (0) 70 520 35 73
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
