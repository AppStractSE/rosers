const scrollToNextSection = (skipTo: number = 1, marginOffset: number = 0) => {
  const sections = Array.from(
    document.querySelectorAll<HTMLElement>("section"),
  );
  const headerHeight = document.querySelector("header")?.offsetHeight || 0;
  const currentScroll = window.scrollY;

  // Find the next section BELOW the current scroll
  const nextSections = sections.filter(
    (section) => section.offsetTop > currentScroll + 1,
  );

  // If none found, just pick the last section
  const targetSection =
    nextSections[skipTo - 1] || sections[sections.length - 1];

  if (targetSection) {
    window.scrollTo({
      top: targetSection.offsetTop - headerHeight - marginOffset,
      behavior: "smooth",
    });
  }
};

export default scrollToNextSection;
