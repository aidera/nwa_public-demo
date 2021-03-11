import './header.scss';

import { gsap } from "gsap";



const body = document.querySelector('body') as HTMLElement;
const main = document.querySelector('main') as HTMLElement;
const defaultBodyOverflow = body.style.overflowY;
const defaultMainOverflow = main.style.overflowY;

const mobileMenu = document.querySelector('#mobile-menu') as HTMLElement;

const mobileMenuOpenTriggers = document.querySelectorAll('.mobile-menu-open-trigger') as NodeListOf<HTMLElement>;
const mobileMenuCloseTrigger = document.querySelector('.mobile-menu-close-trigger') as HTMLElement;

const linksCount = (document.querySelectorAll('#mobile-menu .content nav >*') as NodeListOf<HTMLElement>).length;

mobileMenuOpenTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    mobileMenu.style.display = 'block';
    body.style.overflowY = 'hidden';
    setTimeout(() => {
      mobileMenuCloseTrigger.classList.add('animation');
      mobileMenu.style.opacity = '1';

      gsap.from("#mobile-menu .content nav>a", {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.3,
        delay: 0.5,
        ease: "power3.out"
      });

      gsap.from("#mobile-menu .content .search-panel", {
        y: 50,
        opacity: 0,
        delay: 0.1 * linksCount + 0.5,
        duration: 0.3,
        ease: "power3.out"
      });

      gsap.from("#mobile-menu .content .language-panel", {
        y: 50,
        opacity: 0,
        delay: 0.1 * (linksCount + 1) + 0.5,
        duration: 0.3,
        ease: "power3.out"
      });
    }, 100);
  })
})

mobileMenuCloseTrigger.addEventListener('click', () => {

  mobileMenuCloseTrigger.classList.remove('animation');
  setTimeout(() => {
    body.style.overflowY = defaultBodyOverflow;
    mobileMenu.style.opacity = '0';
  }, 100);
  setTimeout(() => {
    mobileMenu.style.display = 'none';
  }, 350);
})



