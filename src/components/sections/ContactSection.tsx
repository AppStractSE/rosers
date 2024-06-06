import { futuraStd, garamond } from "@/util/fonts";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import ContactForm from "../forms/ContactForm";

const ContactSection = () => {
  return (
    <section>
      <div className="mx-auto py-8 lg:py-24 px-4">
        <div className="lg:space-y-8 space-y-4 mb-8 lg:mb-16 max-w-lg">
          <h2 className={`${futuraStd.className} lg:text-center text-3xl lg:text-6xl`}>
            Need help? Contact us today!
          </h2>
          <p className={`${garamond.className} lg:text-center text-lg lg:text-2xl`}>
            Fill in the form below and we will get back to you as soon as possible. You may also
            reach us via phone or email.
          </p>
        </div>
        <ContactForm />
        <div className="mt-8 space-y-4">
          <Link
            href="mailto:info@rosers.se"
            className={`${garamond.className} tracking-wider font-normal text-base lg:text-lg flex w-fit leading-normal items-center gap-4 hover:underline hover:underline-offset-4`}
          >
            <div className="text-[#8B7257] text-base lg:text-lg">
              <TbMailFilled />
            </div>
            info@rosers.se
          </Link>
          <Link
            href="tel:+4670-123-45-67"
            className={`${garamond.className} tracking-wider font-normal text-base lg:text-lg flex w-fit leading-normal items-center gap-4 hover:underline hover:underline-offset-4`}
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
