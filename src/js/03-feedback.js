import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

const LOCALSTORAGE_KEY = "feedback-form-state";

formEl.addEventListener('input', handleFormElInput);

formEl.addEventListener('submit', handleFormElSubmit);

function handleFormElInput(event) {
    const {
    elements: { email, message }
    } = event.currentTarget;
    
    const userFeedback = {
        email: email.value,
        message: message.value,
    };

    localStorage.setItem("userFeedback", JSON.stringify(userFeedback));

    const savedSettings = localStorage.getItem("userFeedback");
    const parsedSettings = JSON.parse(savedSettings);
    console.log(parsedSettings);
}

function handleFormElSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
}
