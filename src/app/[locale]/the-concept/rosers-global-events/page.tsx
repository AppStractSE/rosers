import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Rosers Global Events",
};

const page = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale);
  return (
    <div className="mt-48">
      {/* The Concept/Rosers Global Events */}
      <Breadcrumbs />
    </div>
  );
};

export default page;
