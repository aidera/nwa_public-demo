import "@components/layout/layout";
import "./team.scss";

const openFullContentButtons = document.querySelectorAll('.team-page .person .open-full-content') as NodeListOf<HTMLElement>;

openFullContentButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const parent = button.closest('.description');
    const shortContent = parent.querySelector('.short-content') as HTMLElement;
    const fullContent = parent.querySelector('.full-content') as HTMLElement;
    shortContent.style.display = 'none';
    fullContent.style.display = 'block';
    button.style.display = 'none';
  });
})
