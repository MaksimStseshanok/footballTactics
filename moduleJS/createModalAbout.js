import { createElement } from "./createElement.js";

export const createModalAbout = () => {
  const homePage = document.querySelector(".container");
  const modalBg = document.querySelector(".modal_bg");
  const aboutBlock = createElement(1, "div", "about_modal", homePage);
  const closeBtn = createElement(1, "div", "close_btn", aboutBlock);
  const aboutText = createElement(1, "p", "about_modal-text", aboutBlock);

  aboutText.innerText =
    "Это логическая игра в которой Вы играете в абстрактный футбол.Вам нужно придумать маршрут мяча и правильно расставить игроков на футбольном поле.Каждый игрок может принять и отбить мяч один раз и только в одну сторону.";
  closeBtn.innerHTML = "&#10006";
};
