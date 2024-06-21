import { futuraStd, garamond } from "@/util/fonts";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import ContactForm from "../forms/ContactForm";

const ContactSection = () => {
  const translation = useTranslations("ContactForm");
  return (
    <section className="mx-auto max-w-full">
      <div className="max-w-lg mx-auto px-4 2xl:px-0">
        <div className="lg:space-y-8 space-y-4 mb-8 lg:mb-16  mx-auto">
          <h2 className={futuraStd.className.concat(" lg:text-center text-3xl lg:text-5xl")}>
            {translation("title")}
          </h2>
          <p
            className={garamond.className.concat(
              " lg:text-center text-xl font-thin lg:text-2xl text-balance",
            )}
          >
            {translation("description")}
          </p>
        </div>
        <ContactForm />
        <div className="mt-8 space-y-4 mx-auto">
          <Link
            href="mailto:info@rosers.se"
            className={garamond.className.concat(
              " tracking-wider font-normal text-base lg:text-lg flex w-fit leading-normal items-center gap-4 hover:underline hover:underline-offset-4",
            )}
          >
            <div className="text-[#8B7257] text-base lg:text-lg">
              <TbMailFilled />
            </div>
            info@rosers.se
          </Link>
          <Link
            href="tel:+4670-123-45-67"
            className={garamond.className.concat(
              " tracking-wider font-normal text-base lg:text-lg flex w-fit leading-normal items-center gap-4 hover:underline hover:underline-offset-4",
            )}
          >
            <div className="text-[#8B7257] text-base lg:text-lg">
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
