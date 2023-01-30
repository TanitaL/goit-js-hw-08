import throttle from 'lodash.throttle';

const formObject = {
    email: document.querySelector("input"),
    message: document.querySelector("textarea"),
    form: document.querySelector("form")
}
const STORAGE_KEY = "feedback-form-state";

const formParams = {};

formObject.form.addEventListener("input", throttle(saveData, 500))
formObject.form.addEventListener("submit", onSubmit)

function saveData(event) {
    const field = event.target.name
    const value = event.target.value;
    formParams[field] = value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formParams));
}

function onSubmit(event) {
    event.preventDefault();

    console.log(formParams);
    localStorage.removeItem(STORAGE_KEY);
    event.currentTarget.reset();
}

function fillForm() { 
    const data = localStorage.getItem(STORAGE_KEY);
    const parsedData = JSON.parse(data);
    if (parsedData) { 
        parsedData.email ? formObject.email.value = parsedData.email : formObject.email.value = ""
        parsedData.message ? formObject.message.value = parsedData.message : formObject.message.value = ""   
    }
}

fillForm()



