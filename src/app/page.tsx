import FullwidthCarousel from "@/components/carousels/FullwidthCarousel";
import TextAndImageSection from "@/components/sections/TextAndImageSection";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="">Section 1</section>
      <section className="">Section 2</section>
      <section className="">Section 3</section>
      <section className="">Section 4</section>
      <section className="">Section 5</section>
      <TextAndImageSection
        rtl={false}
        title="The Rosers"
        subTitle="Who we are"
        text={`We are more than just a culinary team; we are pioneers of  unforgettable dining experiences. With a legacy spanning over 50 years,  our passion for culinary excellence drives us to redefine the art of  dining. Led by our visionary founder Bengt Roser, our team is dedicated  to crafting moments that transcend taste, transforming ordinary  gatherings into extraordinary occasions.
        \nWelcome to a world where every  bite tells a story, and every meal is an unforgettable journey.`}
        image="https://placehold.co/600x700.png"
        button={{
          text: "Read more",
          link: "/who-we-are",
        }}
      />
      <TextAndImageSection
        rtl={true}
        title="The Rosers"
        subTitle="Who we are"
        text={`We are more than just a culinary team; we are pioneers of  unforgettable dining experiences. With a legacy spanning over 50 years,  our passion for culinary excellence drives us to redefine the art of  dining. Led by our visionary founder Bengt Roser, our team is dedicated  to crafting moments that transcend taste, transforming ordinary  gatherings into extraordinary occasions.
        Welcome to a world where every  bite tells a story, and every meal is an unforgettable journey.`}
        image="https://placehold.co/600x700.png"
        button={{
          text: "Read more",
          link: "/who-we-are",
        }}
      />
      <section className="w-full">
        <FullwidthCarousel />
      </section>
    </main>
  );
}
