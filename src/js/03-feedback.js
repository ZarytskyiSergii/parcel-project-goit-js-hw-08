import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

const storageKey = 'feedback-form-state';
let formData = {
    email: email.value,
    message: message.value,
};

populateInput();

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onTextareaInput, 500));

function onFormSubmit(e) {
    e.preventDefault();
    e.target.reset();
    localStorage.removeItem(storageKey);
    console.log(formData);
}

function onTextareaInput() {
    formData[email.name] = email.value;
    formData[message.name] = message.value;

    localStorage.setItem(storageKey, JSON.stringify(formData));
}


function populateInput() {
    const savedData = JSON.parse(localStorage.getItem(storageKey));
    if (savedData) {
        formData = savedData;

        const email = document.querySelector('.feedback-form input[name="email"]');
        const message = document.querySelector('.feedback-form textarea[name="message"]');


email.value = formData.email;
message.value = formData.message;
    }
    
}

