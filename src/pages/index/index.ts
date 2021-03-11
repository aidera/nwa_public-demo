import "@components/layout/layout";
import "./index.scss";


/* Слайдер компаний */

if (document.querySelector(".swiper-container")) {
  // @ts-ignore
  const partnersSlider = new Swiper(".swiper-container", {
    direction: "horizontal",
    loop: true,
    speed: 5000,
    updateOnWindowResize: true,
    slidesPerView: "auto",
    delay: 0,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      stopOnLastSlide: false,
    }
  });
}

/* Sticky позиционирование СЕО комании */
const changeIndexPageWorkerPosition = () => {
  const container = document.querySelector("section.index_our-team .team") as HTMLElement;
  const sticky = document.querySelector("section.index_our-team .team .ceo .person") as HTMLElement;

  if (container && sticky) {

    const containerHeight = container.getBoundingClientRect().height;
    const stickyHeight = sticky.getBoundingClientRect().height;

    const containerOffset = container.getBoundingClientRect().top;

    if (window.innerWidth > 1300) {

      if (containerOffset < 30 && -containerOffset < (containerHeight - stickyHeight)) {
        sticky.style.position = "fixed";
        sticky.style.top = "30px";
      } else if (containerOffset >= 30) {
        sticky.style.position = "relative";
        sticky.style.top = "0";
      } else {
        sticky.style.position = "relative";
        sticky.style.top = (containerHeight - stickyHeight) + "px";
      }

    } else {
      sticky.style.position = "relative";
      sticky.style.top = "0";
    }
  }

};

changeIndexPageWorkerPosition();


const startTeamSectionAnimation = () => {
  const teamContainer = document.querySelector("section.index_our-team") as HTMLElement;

  if (teamContainer) {
    const teamContainerOffset = teamContainer.getBoundingClientRect().top;
    if (teamContainerOffset <= 200) {
      teamContainer.classList.add("start-animation");
    }

    const mainPerson = document.querySelector("section.index_our-team .team .ceo .person") as HTMLElement;
    const firstLineWorkers = document.querySelectorAll("section.index_our-team .team .other .person:nth-child(2n-1)") as NodeListOf<HTMLElement>;
    const secondLineWorkers = document.querySelectorAll("section.index_our-team .team .other .person:nth-child(2n)") as NodeListOf<HTMLElement>;

    const container = document.querySelector("section.index_our-team .team") as HTMLElement;



    if (window.innerWidth > 1300) {
      if (container && mainPerson) {

        const containerHeight = container.getBoundingClientRect().height;
        const stickyHeight = mainPerson.getBoundingClientRect().height;

        const containerOffset = container.getBoundingClientRect().top;

        if (containerOffset < 30 && -containerOffset < (containerHeight - stickyHeight)) {
          mainPerson.style.transform = `translateY(0)`;
        } else if (containerOffset >= 30) {
          mainPerson.style.transform = `translateY(${teamContainerOffset * 0.1}px)`;
        } else {
          mainPerson.style.transform = `translateY(0)`;
        }
      }


      firstLineWorkers.forEach(worker => {
        worker.style.transform = `translateY(${teamContainerOffset * 0.05}px)`;
      });

      secondLineWorkers.forEach(worker => {
        worker.style.transform = `translateY(${teamContainerOffset * 0.2}px)`;
      });
    } else {
      mainPerson.style.transform = `translateY(0px)`;


      firstLineWorkers.forEach(worker => {
        worker.style.transform = `translateY(0px)`;
      });

      secondLineWorkers.forEach(worker => {
        worker.style.transform = `translateY(0px)`;
      });
    }
  }
};
startTeamSectionAnimation();


window.addEventListener("scroll", () => {
  changeIndexPageWorkerPosition();
  startTeamSectionAnimation();
});

window.addEventListener("resize", () => {
  changeIndexPageWorkerPosition();
  startTeamSectionAnimation();
});


if (document.querySelector("section.welcome")) {
  document.querySelector("header").classList.add("with-start-animation_slow");
}












