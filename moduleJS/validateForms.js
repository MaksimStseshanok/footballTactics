import { makeValid } from "./toggleValidator.js";
import { makeInvalid } from "./toggleValidator.js";
import { createInputsArray } from "./createInputsArray.js";

export const checkInputs = (form) => inputsListener(form);

const inputsListener = (form) => {
  createInputsArray(form).forEach((input) => {
    input.addEventListener("keyup", onKeyUp);
  });
};

let password;

const onKeyUp = (event) => {
  switch (event.target.id) {
    case "userName": {
      validateForm(event.target, /^[a-zA-Z]{4,10}$/);
      break;
    }
    case "userPassword": {
      validateForm(event.target, /^[a-zA-Z0-9]{6,10}$/);
      break;
    }
    case "firstName": {
      validateForm(event.target, /^[a-zA-Z]{2,10}$/);
      break;
    }
    case "lastName": {
      validateForm(event.target, /^[a-zA-Z]{2,16}$/);
      break;
    }
    case "login": {
      validateForm(event.target, /^[a-zA-Z]{4,10}$/);
      break;
    }
    case "password": {
      validateForm(event.target, /^[a-zA-Z0-9]{6,10}$/);
      password = event.target.value;
      break;
    }
    case "repeatPassword": {
      validatePasswords(event.target, /^[a-zA-Z0-9]{6,10}$/);
      break;
    }
  }
};

const validateForm = (inputId, regExp) => {
  if (regExp.test(inputId.value)) {
    makeValid(inputId);
  } else {
    makeInvalid(inputId);
  }
};

const validatePasswords = (inputId, regExp) => {
  if (regExp.test(inputId.value) && inputId.value === password) {
    makeValid(inputId);
  } else {
    makeInvalid(inputId);
  }
};
