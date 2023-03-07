const phoneInputs = document.querySelectorAll('input[type="tel"]');
const submitButtons = document.querySelectorAll('.form__submit');

const validateLengthPhone = () => {
  phoneInputs.forEach((input, index) => {
    input.addEventListener('input', () => {
      if (input.value.length < 18) {
        submitButtons[index].disabled = true;
      } else {
        submitButtons[index].disabled = false;
      }
    });
  });
};

export {validateLengthPhone};
