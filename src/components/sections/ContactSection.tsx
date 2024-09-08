import { futuraStd, garamond } from "@/util/fonts";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import ContactForm from "../forms/ContactForm";

const ContactSection = () => {
  const translation = useTranslations("ContactForm");
  return (
    <section>
      <div className="mx-auto max-w-lg px-4 2xl:px-0">
        <div className="mx-auto mb-8 space-y-4 lg:mb-16 lg:space-y-8">
          <h2
            className={futuraStd.className
              .concat(" ")
              .concat("text-3xl lg:text-center lg:text-5xl")}
          >
            {translation("title")}
          </h2>
          <p
            className={garamond.className
              .concat(" ")
              .concat(
                "text-balance text-xl font-thin lg:text-center lg:text-2xl",
              )}
          >
            {translation("description")}
          </p>
        </div>
        <ContactForm />
        <div className="mx-auto mt-8 space-y-4">
          <Link
            href="mailto:info@rosers.se"
            className={garamond.className
              .concat(" ")
              .concat(
                "flex w-fit items-center gap-4 text-base font-normal leading-normal tracking-wider hover:underline hover:underline-offset-4 lg:text-lg",
              )}
          >
            <div className="text-base text-[#8B7257] lg:text-lg">
              <TbMailFilled />
            </div>
            info@rosers.se
          </Link>
          <Link
            href="tel:+4670-123-45-67"
            className={garamond.className
              .concat(" ")
              .concat(
                "flex w-fit items-center gap-4 text-base font-normal leading-normal tracking-wider hover:underline hover:underline-offset-4 lg:text-lg",
              )}
          >
            <div className="text-base text-[#8B7257] lg:text-lg">
              <FaPhone />
            </div>
            +46 (0)70 123 45 67
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
