import './layout.scss';

import '../header/header.ts';
import '../footer/footer.ts';
import '../post-card/post-card.ts';

import '../../pages/index/index.ts';
import '../../pages/service/service.ts';
import '../../pages/contacts/contacts.ts';
import '../../pages/news/news.ts';
import '../../pages/404/404.ts';
import '../../pages/analytics/analytics.ts';
import '../../pages/search/search.ts';
import '../../pages/team/team.ts';
import '../../pages/about/about.ts';




const cursor = document.querySelector('#cursor') as HTMLElement;
if (cursor) {

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    cursor.style.display = "none";
  } else {
    window.addEventListener("mousemove", e => {
      const x = e.clientX;
      const y = e.clientY;
      cursor.style.top = y + "px";
      cursor.style.left = x + "px";
    });
  }

  const linkElements = document.querySelectorAll("a") as NodeListOf<HTMLElement>;
  if (linkElements && linkElements.length > 0) {
    linkElements.forEach(el => {
      if (el) {
        el.classList.add("pointer");
      }
    });
  }

  const buttonElements = document.querySelectorAll("button") as NodeListOf<HTMLElement>;
  if (buttonElements && buttonElements.length > 0) {
    buttonElements.forEach(el => {
      if (el) {
        el.classList.add("pointer");
      }
    });
  }

  const inputElements = document.querySelectorAll("input") as NodeListOf<HTMLElement>;
  if (inputElements && inputElements.length > 0) {
    inputElements.forEach(el => {
      if (el) {
        el.classList.add("pointer");
      }
    });
  }


  const pointerElements = document.querySelectorAll(".pointer") as NodeListOf<HTMLElement>;

  if (pointerElements && pointerElements.length > 0) {
    pointerElements.forEach(el => {
      el.addEventListener("mouseenter", () => {
        cursor.classList.add("cursor-pointer");
      });
      el.addEventListener("mouseleave", () => {
        cursor.classList.remove("cursor-pointer");
      });
    });
  }
  document.body.addEventListener("mousedown", () => {
    cursor.classList.add("cursor-click");
  });
  document.body.addEventListener("mouseup", () => {
    cursor.classList.remove("cursor-click");
  });
}

