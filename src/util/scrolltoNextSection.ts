const scrollToNextSection = () => {
  const sections = document.querySelectorAll("section");
  const currentScroll = window.scrollY;
  for (let i = 0; i < sections.length; i++) {
    const sectionTop = sections[i].offsetTop;
    if (sectionTop > currentScroll) {
      sections[i].scrollIntoView({ behavior: "smooth" });
      break;
    }
  }
};

export default scrollToNextSection;
