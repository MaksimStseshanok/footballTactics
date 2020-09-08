import { makeInvalid } from "./toggleValidator.js";
import { createInputsArray } from "./createInputsArray.js";

export const checkLocalStorage = () => {
  const inputs = document.forms[1].getElementsByTagName("input");
  let inputsArray = Array.from(inputs);
  let keys = Object.keys(localStorage);
  if (keys.length === 0) {
    return true;
  } else {
    for (let key of keys)
      if (login.value === key) {
        alert(`Логин "${login.value}" уже занят`);
        makeInvalid(login);
        login.focus();
        return false;
      }
  }
  return true;
};

export const checkForm = (form) => {
  let errorInput = [];
  createInputsArray(form).filter((input) => {
    if (input.value === "" || input.classList.contains("input_error")) {
      errorInput.push(input);
      errorInput[0].focus();
      makeInvalid(input);
    }
  });

  return errorInput.length === 0 ? true : false;
};
