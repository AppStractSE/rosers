import TextAndImageSection from "./sections/TextAndImageSection";

const TextsAndImageSections = () => {
  const data = [
    {
      rtl: false,
      title: "The Rosers",
      subTitle: "Who we are",
      text: `We are more than just a culinary team; we are pioneers of  unforgettable dining experiences. With a legacy spanning over 50 years,  our passion for culinary excellence drives us to redefine the art of  dining. Led by our visionary founder Bengt Roser, our team is dedicated  to crafting moments that transcend taste, transforming ordinary  gatherings into extraordinary occasions.
      \nWelcome to a world where every  bite tells a story, and every meal is an unforgettable journey.`,
      image: "https://placehold.co/600x700.png",
      button: {
        text: "Read more",
        link: "/who-we-are",
      },
    },
    {
      rtl: true,
      title: "The Rosers",
      subTitle: "Who we are",
      text: `We are more than just a culinary team; we are pioneers of  unforgettable dining experiences. With a legacy spanning over 50 years,  our passion for culinary excellence drives us to redefine the art of  dining. Led by our visionary founder Bengt Roser, our team is dedicated  to crafting moments that transcend taste, transforming ordinary  gatherings into extraordinary occasions.
      Welcome to a world where every  bite tells a story, and every meal is an unforgettable journey.`,
      image: "https://placehold.co/600x700.png",
      button: {
        text: "Read more",
        link: "/who-we-are",
      },
    },
  ];
  return (
    <>
      {data.map((item, index) => (
        <TextAndImageSection
          key={index}
          rtl={item.rtl}
          title={item.title}
          subTitle={item.subTitle}
          text={item.text}
          image={item.image}
          button={item.button}
        />
      ))}
    </>
  );
};

export default TextsAndImageSections;
