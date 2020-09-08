import { createElement } from "./createElement.js";

export function createModalForm() {
  const homePage = document.querySelector(".container");

  const modalBg = createElement(1, "div", "modal_bg", homePage);
  const form = createElement(1, "div", "form_modal", homePage);
  const closeBtn = (createElement(1, "div", "close_btn", form).innerHTML =
    "&#10006");
  const formTitle = createElement(1, "div", "form_title", form);
  const formTitleText = createElement(2, "h2", "form_title-active", formTitle);

  const signIn = createElement(1, "form", "sign_in", form);
  const signInDiv = createElement(4, "div", "form_inner", signIn);
  const signUp = createElement(1, "form", "sign_up", form);
  const signUpDiv = createElement(7, "div", "form_inner", signUp);

  let signInArr = signIn.childNodes;
  let signUpArr = signUp.childNodes;

  formTitle.firstChild.innerText = "Вход";
  formTitle.lastChild.innerText = "Регистрация";

  const createInputAtr = (tag, props) => {
    const element = document.createElement(tag);
    Object.keys(props).forEach((key) => (element[key] = props[key]));
    return element;
  };

  signInArr.forEach((element, i) => {
    if (i === 0) {
      element.append(
        createInputAtr("input", {
          placeholder: "Введите логин",
          type: "text",
          id: "userName",
          classList: "form_input",
        })
      );
      createElement(1, "div", "text_message-userName", element);
    } else if (i === 1) {
      element.append(
        createInputAtr("input", {
          placeholder: "Введите пароль",
          type: "password",
          id: "userPassword",
          classList: "form_input",
        })
      );
      createElement(1, "div", "text_message-userPassword", element);
    } else if (i === 2) {
      element.append(
        createInputAtr("button", {
          innerText: "Войти",
          type: "submit",
          classList: "form_btn",
        })
      );
    } else {
      element.append(
        createInputAtr("button", {
          innerText: "Очистить",
          type: "reset",
          classList: "form_btn",
        })
      );
    }
  });

  signUpArr.forEach((element, i) => {
    if (i === 0) {
      element.append(
        createInputAtr("input", {
          placeholder: "Введите имя",
          type: "text",
          id: "firstName",
          classList: "form_input",
        })
      );
      createElement(1, "div", "text_message-firstName", element);
    } else if (i === 1) {
      element.append(
        createInputAtr("input", {
          placeholder: "Введите фамилию",
          type: "text",
          id: "lastName",
          classList: "form_input",
        })
      );
      createElement(1, "div", "text_message-lastName", element);
    } else if (i === 2) {
      element.append(
        createInputAtr("input", {
          placeholder: "Введите логин",
          type: "text",
          id: "login",
          classList: "form_input",
        })
      );
      createElement(1, "div", "text_message-login", element);
    } else if (i === 3) {
      element.append(
        createInputAtr("input", {
          placeholder: "Введите пароль",
          type: "password",
          id: "password",
          classList: "form_input",
        })
      );
      createElement(1, "div", "text_message-password", element);
    } else if (i === 4) {
      element.append(
        createInputAtr("input", {
          placeholder: "Повторите пароль",
          type: "password",
          id: "repeatPassword",
          classList: "form_input",
        })
      );
      createElement(1, "div", "text_message-repeatPassword", element);
    } else if (i === 5) {
      element.append(
        createInputAtr("button", {
          innerText: "Зарегистрироваться",
          type: "submit",
          classList: "form_btn",
        })
      );
    } else if (i === 6) {
      element.append(
        createInputAtr("button", {
          innerText: "Очистить",
          type: "reset",
          classList: "form_btn",
        })
      );
    }
  });
}
