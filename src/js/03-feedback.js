import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

const LOCALSTORAGE_KEY = 'feedback-form-state';

const email = formEl.elements.email;

const message = formEl.elements.message;

UpdatePage();

const throttledHandleFormElInput = throttle(handleFormElInput, 500);

formEl.addEventListener('input', throttledHandleFormElInput);

formEl.addEventListener('submit', handleFormElSubmit);

function handleFormElInput(event) {
  const userFeedback = {
    email: email.value,
    message: message.value,
  };

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(userFeedback));
}

function handleFormElSubmit(event) {
  event.preventDefault();

  if (email.value === '' || message.value === '') {
    return console.log('Please fill in all the fields!');
  }

  const savedSettings = localStorage.getItem(LOCALSTORAGE_KEY);
  const parsedSettings = JSON.parse(savedSettings);
  console.log(parsedSettings);

  localStorage.removeItem(LOCALSTORAGE_KEY);

  event.currentTarget.reset();
}

function UpdatePage() {
  const savedSettings = localStorage.getItem(LOCALSTORAGE_KEY);
  const parsedSettings = JSON.parse(savedSettings);

  if (parsedSettings !== null) {
    email.value = parsedSettings.email;
    message.value = parsedSettings.message;
  }
}
