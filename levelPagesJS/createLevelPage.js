import { createElement } from "../moduleJS/createElement.js";
import { createLevelHeader } from "./createLevelHeader.js";
import { drawField } from "./drawField.js";
import { levelPage } from "./levelPage.js";
import { exitUserBtn } from "./exitUserBtn.js";

export const createLevelPage = () => {
  const homePage = document.querySelector(".container");
  if (homePage) {
    homePage.remove();
  }

  createLevelHeader();
  const levelContainer = createElement(1, "div", "field_container", root);
  const footballContainer = createElement(
    1,
    "div",
    "football_container",
    levelContainer
  );
  const field = createElement(1, "div", "field", footballContainer);
  const markup = createElement(1, "div", "markup", footballContainer);
  const border = createElement(1, "div", "border", markup);
  const separator = createElement(1, "div", "separator", markup);
  const centralCircle = createElement(1, "div", "central_circle", markup);
  const guests = createElement(1, "div", "guests", markup);
  const home = createElement(1, "div", "home", markup);
  const penalty = createElement(1, "div", "penalty", markup);
  const homeGoal = createElement(1, "div", "home_goal", markup);
  const guestsGoal = createElement(1, "div", "guests_goal", markup);
  const penaltyGuests = createElement(1, "div", "penalty", markup);

  footballContainer.classList.add("outline_border");
  guests.classList.add("circle");
  home.classList.add("circle");
  penalty.classList.add("home");
  homeGoal.classList.add("zone");
  guestsGoal.classList.add("zone");
  penaltyGuests.classList.add("guests");

  drawField();
  levelPage();
  exitUserBtn();
};
