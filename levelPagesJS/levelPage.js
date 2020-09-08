import { createElement } from "../moduleJS/createElement.js";
import { dragAndDrop } from "./dragAndDrop.js";

export const levelPage = () => {
  const field = document.querySelector(".field_container");
  const inner = createElement(1, "div", "inner", field);
  const fieldBlock = document.querySelector(".block");

  for (let i = 0; i < 4; i++) {
    const innerBlock = createElement(1, "div", "inner_draggable", inner);
    innerBlock.style.width = fieldBlock.clientWidth + "px";
    innerBlock.style.height = fieldBlock.clientHeight + "px";

    window.addEventListener("resize", () => {
      innerBlock.style.width = fieldBlock.offsetWidth + "px";
      innerBlock.style.height = fieldBlock.offsetHeight + "px";
    });

    const dragBlock = createElement(1, "div", "draggable", innerBlock);
    dragBlock.setAttribute("draggable", "true");
    const arrowDownLeft = createElement(1, "img", "draggable_icons", dragBlock);
    if (i === 0) {
      arrowDownLeft.src = "img/arrows/down_right.png";
    }
    if (i === 1) {
      arrowDownLeft.src = "img/arrows/left_down.png";
    }
    if (i === 2) {
      arrowDownLeft.src = "img/arrows/up_right.png";
    }
    if (i === 3) {
      arrowDownLeft.src = "img/arrows/left_up.png";
    }
  }
  dragAndDrop();
};
