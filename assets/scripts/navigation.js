const sectionLinks = [...document.querySelectorAll('nav a[href^="#"]')]
  .map((link) => ({
    link,
    section: document.querySelector(link.getAttribute("href")),
  }))
  .filter(({ section }) => section);

const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visibleSections = entries.filter((entry) => entry.isIntersecting);
    if (visibleSections.length === 0) return;

    const activeSection = visibleSections.reduce((closest, entry) =>
      Math.abs(entry.boundingClientRect.top) <
      Math.abs(closest.boundingClientRect.top)
        ? entry
        : closest,
    );

    sectionLinks.forEach(({ link, section }) => {
      if (section === activeSection.target) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  },
  {
    rootMargin: `-${Math.round(window.innerHeight * 0.25)}px 0px -${Math.round(
      window.innerHeight * 0.65,
    )}px 0px`,
  },
);

sectionLinks.forEach(({ section }) => sectionObserver.observe(section));
