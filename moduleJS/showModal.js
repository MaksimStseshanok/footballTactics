import { createModalForm } from "./createModalForm.js";
import { createModalAbout } from "./createModalAbout.js";
import { showForm } from "./showForm.js";
import { showAbout } from "./showAbout.js";

export const showModalForm = () => {
  createModalForm();
  createModalAbout();

  document.addEventListener("click", () => {
    let click = event.target.innerText;
    if (click === "Вход") {
      showForm();
    } else if (click === "Об игре") {
      showAbout();
    }
  });
};
