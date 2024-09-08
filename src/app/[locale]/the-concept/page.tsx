import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import Divider from "@/components/divider/Divider";
import ContactSection from "@/components/sections/ContactSection";
import Tabs from "@/components/tabs/Tabs";
import { futuraStd, garamond } from "@/util/fonts";
import { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "The Concept",
};

const page = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale);
  return (
    <main>
      <section className="min-h-[480px] border-b border-b-brass bg-[url('/hero-image.webp')] bg-cover bg-center bg-no-repeat">
        <div className="fixed inset-0 bg-charcoal-800 bg-opacity-60"></div>
        <div className="relative mx-auto max-w-screen-xl">
          <div className="h-32 w-full"></div>
          <div className="mx-auto my-12 flex flex-col items-center justify-center py-12">
            <h1
              className={futuraStd.className
                .concat(" ")
                .concat(
                  "text-balance mb-8 text-center text-4xl leading-tight md:text-6xl",
                )}
            >
              The Rosers Concept
            </h1>
            <p
              className={"text-balance mb-16 max-w-lg whitespace-pre-line text-center text-2xl font-thin tracking-wide"
                .concat(" ")
                .concat(garamond.className)}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              tincidunt, felis nec facilisis tincidunt, nulla sapien ultricies
              nunc, nec ullamcorper nunc odio nec quam
            </p>
            <button
              className={"inline-block w-fit rounded-sm border border-gold bg-charcoal-900 p-2 px-4 text-center text-lg transition-all duration-200 ease-in-out hover:bg-gold hover:text-[#232323]"
                .concat(" ")
                .concat(futuraStd.className)}
            >
              Book a demo
            </button>
          </div>
          <div className="h-32 w-full"></div>
        </div>
      </section>
      <section className="">
        <div className="px-4 py-4">
          <Breadcrumbs />
        </div>
      </section>
      {/* <Divider /> */}
      <section>
        <div className="mx-auto my-24 max-w-screen-md">
          <div className="flex flex-col justify-center space-y-12 text-center">
            {/* <Rosers className="flex h-16 w-16 justify-center self-center" /> */}
            <p
              className={"text-sm uppercase text-brass"
                .concat(" ")
                .concat(futuraStd.className)}
            >
              The concept
            </p>
            <h3
              className={"text-balance mb-8 text-center text-4xl leading-tight md:text-5xl"
                .concat(" ")
                .concat(futuraStd.className)}
            >
              Exclusive culinary experiences and events for discerning clients
              who value unparalleled quality
            </h3>
            <p
              className={"text-balance whitespace-pre-line text-2xl font-thin tracking-wide"
                .concat(" ")
                .concat(garamond.className)}
            >
              Our top chefs create personalized menus tailored to your tastes.
              Each event is hosted in handpicked venues that exude elegance and
              uniqueness. Every detail is meticulously planned to reflect your
              style and preferences. Indulge in unparalleled dining moments
              crafted especially for discerning clients like you.
            </p>
          </div>
        </div>
      </section>
      <Tabs />
      {/* <ConceptSection /> */}
      <Divider />
      <ContactSection />
      <Divider />
    </main>
  );
};

export default page;
