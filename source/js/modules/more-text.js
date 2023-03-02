const buttonMore = document.querySelector('.about__more');
const descriptionText = document.querySelector('.about__description--more');
const textWrapper = document.querySelector('.about__text-wrapper');

const showMoreText = () => {
  buttonMore.addEventListener('click', () => {
    descriptionText.classList.toggle('about__description-active');
    textWrapper.classList.toggle('about__text-wrapper--active');
    if (buttonMore.textContent === 'Подробнее') {
      buttonMore.textContent = 'свернуть';
    } else {
      buttonMore.textContent = 'Подробнее';
    }
  });
};

export {showMoreText};
