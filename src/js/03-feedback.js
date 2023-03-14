import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

const USER_DATA = 'feedback-form-state';

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', resetForm);

function onFormInput(event) {
  const obj = {
    email: input.value,
    message: textarea.value,
  };
  localStorage.setItem(USER_DATA, JSON.stringify(obj));
}

function onFormUpdate() {
  const getData = JSON.parse(localStorage.getItem(USER_DATA));
  if (getData) {
    input.value = getData.email;
    textarea.value = getData.message;
  }
}
onFormUpdate();

function resetForm(event) {
  event.preventDefault();
  console.log(localStorage.getItem(USER_DATA));
  localStorage.removeItem(USER_DATA);
  event.currentTarget.reset();
}
