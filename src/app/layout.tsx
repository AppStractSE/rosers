import Footer from "@/components/footer/Footer";
import Navigation from "@/components/navigation/Navigation";
import { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.scss";

export const metadata: Metadata = {
  title: {
    template: "%s | Rosers",
    default: "Rosers | Unforgettable dining experiences for all occasions",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
