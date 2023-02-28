const buttonMore = document.querySelector('.about__more');
const descriptionText = document.querySelector('.about__description--more');

const showMoreText = () => {
  buttonMore.addEventListener('click', () => {
    descriptionText.classList.toggle('about__description-active');
    if (buttonMore.textContent === 'Подробнее') {
      buttonMore.textContent = 'свернуть';
    } else {
      buttonMore.textContent = 'Подробнее';
    }
  });
};

export {showMoreText};
