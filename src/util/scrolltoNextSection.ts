const scrollToNextSection = (skipTo: number, marginOffset: number) => {
  const sections = document.querySelectorAll("section");
  const headerHeight = document.querySelector("header")?.offsetHeight || 0;
  const currentScroll = window.scrollY;

  for (let i = 0; i < sections.length; i++) {
    const sectionTop = sections[i].offsetTop;
    if (sectionTop > currentScroll) {
      const targetIndex = Math.min(i + skipTo, sections.length - 1);
      const targetSection = sections[targetIndex];

      window.scrollTo({
        top: targetSection.offsetTop - headerHeight - marginOffset,
        behavior: "smooth",
      });

      break;
    }
  }
};

export default scrollToNextSection;
