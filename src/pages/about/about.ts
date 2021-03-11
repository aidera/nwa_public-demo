import "@components/layout/layout";
import "./about.scss";

const aboutSection = document.querySelector('section.about-page') as HTMLElement;
if (aboutSection) {
  const aboutSectionTitle = aboutSection.querySelector(".title") as HTMLElement;
  const aboutSectionBG = aboutSection.querySelector(".bg-color") as HTMLElement;

  const resizeAboutSectionBG = () => {
    if (aboutSectionBG) {
      aboutSectionBG.style.height = aboutSectionTitle.getBoundingClientRect().height + "px";
    }
  };
  resizeAboutSectionBG();
  window.addEventListener("resize", resizeAboutSectionBG);
}
