import TextsAndImageSections from "@/components/TextsAndImageSections";
import FullwidthCarousel from "@/components/carousels/FullwidthCarousel";
import ContactSection from "@/components/sections/ContactSection";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="">Section 1</section>
      <section className="">Section 2</section>
      <section className="">Section 3</section>
      <section className="">Section 4</section>
      <section className="">Section 5</section>
      <TextsAndImageSections />
      <ContactSection />
      <section className="w-full">
        <FullwidthCarousel />
      </section>
    </main>
  );
}
