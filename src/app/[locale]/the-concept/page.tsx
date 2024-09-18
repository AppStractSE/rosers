import Divider from "@/components/divider/Divider";
import BreadcrumbsSection from "@/components/sections/BreadcrumbsSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSubPageSection from "@/components/sections/HeroSubPageSection";
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
    <>
      <main>
        <HeroSubPageSection />
        <BreadcrumbsSection />
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
                Each event is hosted in handpicked venues that exude elegance
                and uniqueness. Every detail is meticulously planned to reflect
                your style and preferences. Indulge in unparalleled dining
                moments crafted especially for discerning clients like you.
              </p>
            </div>
          </div>
        </section>
        <Tabs />
        <Divider />
        <ContactSection />
        <Divider />
      </main>
    </>
  );
};

export default page;
