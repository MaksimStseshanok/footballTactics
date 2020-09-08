import { createUser } from "./createUser.js";
import { checkForm } from "./userCheck.js";
import { checkLocalStorage } from "./userCheck.js";
import { createLevelPage } from "../levelPagesJS/createLevelPage.js";
import { toggleForm } from "./toggleForm.js";

export const onSubmitForm = () => {
  addEventListener("submit", (event) => {
    event.preventDefault();
    if (event.target.classList.contains("sign_up")) {
      if (checkForm(".sign_up input") && checkLocalStorage()) {
        createUser();
        toggleForm();
      }
    }
    if (event.target.classList.contains("sign_in")) {
      if (checkForm(".sign_in input") && localStorage.getItem(userName.value)) {
        const currentUser = JSON.parse(localStorage.getItem(userName.value));
        if (
          currentUser.password === userPassword.value &&
          currentUser.login === userName.value
        ) {
          alert(
            `Здравствуйте ${currentUser.firstName} ${currentUser.lastName}`
          );

          localStorage.setItem("currentUser", JSON.stringify(currentUser));

          createLevelPage();
        } else alert("Неверный логин или пароль");
      }
    }
  });
};
