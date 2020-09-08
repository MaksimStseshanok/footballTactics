import { createInputsArray } from "./createInputsArray.js";
import { clearInput } from "./clearInput.js";

export const createUser = () => {
  const user = {
    login: login.value,
    firstName: firstName.value,
    lastName: lastName.value,
    password: password.value,
    level: 1,
  };

  localStorage.setItem(login.value, JSON.stringify(user));

  alert(
    `Здравствуйте ${user.firstName} ${user.lastName}! Ваш логин ${login.value}, ваш пароль ${user.password}`
  );
  createInputsArray(".sign_up input").forEach((input) => {
    clearInput(input);
  });
};
