import { clearInput } from "./clearInput.js";
import { createInputsArray } from "./createInputsArray.js";

export const showForm = () => {
  const formShow = document.querySelector(".form_modal");
  const modalBgShow = document.querySelector(".modal_bg");
  const formTitleBlock = document.querySelector(".form_title");
  const formTitleSignIn = formTitleBlock.firstChild;
  const formTitleSignUp = formTitleBlock.lastChild;

  formShow.classList.add("show");
  modalBgShow.classList.add("show");
  formTitleSignUp.classList.add("form_title-inactive");

  const signIn = document.querySelector(".sign_in");
  const signUp = document.querySelector(".sign_up");

  document.addEventListener("click", () => {
    let click = event.target.innerText;
    if (click === "Регистрация") {
      signIn.classList.add("sign_in-close");
      signUp.classList.add("sign_up-show");
      formTitleSignIn.classList.add("form_title-inactive");
      formTitleSignUp.classList.remove("form_title-inactive");
    } else if (
      click === "Вход" &&
      signIn.classList.contains("sign_in-close") &&
      signUp.classList.contains("sign_up-show")
    ) {
      signIn.classList.remove("sign_in-close");
      signUp.classList.remove("sign_up-show");
      formTitleSignIn.classList.remove("form_title-inactive");
      formTitleSignUp.classList.add("form_title-inactive");
    }
  });

  document.addEventListener("click", () => {
    let click = event.target.classList.value;

    if (
      (click === "modal_bg show" || click === "close_btn") &&
      formShow.classList.contains("show")
    ) {
      formShow.classList.remove("show");
      modalBgShow.classList.remove("show");
      signIn.classList.remove("sign_in-show");
      signIn.classList.remove("sign_up-show");
      createInputsArray(".sign_in input").forEach((input) => {
        clearInput(input);
      });

      createInputsArray(".sign_up input").forEach((input) => {
        clearInput(input);
      });
    }
  });
};
