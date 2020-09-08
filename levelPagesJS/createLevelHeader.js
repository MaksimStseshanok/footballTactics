import { createElement } from "../moduleJS/createElement.js";

export const createLevelHeader = () => {
  const levelHeader = createElement(1, "div", "level_header", root);
  const user = createElement(1, "div", "user_info", levelHeader);
  const userLogo = createElement(1, "span", "material-icons", user);
  const userName = createElement(1, "span", "level_header-text", user);
  const exit = createElement(1, "h2", "level_header-text", levelHeader);

  const userInfo = JSON.parse(localStorage.getItem("currentUser"));
  user.classList.add("level_header-text");

  userLogo.innerText = "person";
  userName.innerText = userInfo.login;
  exit.innerText = "Выйти";
};
