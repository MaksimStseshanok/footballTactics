import { createElement } from "./createElement.js";
import { showModalForm } from "./showModal.js";

export const createHomePage = () => {
  const root = document.getElementById("root");
  const homePage = createElement(1, "div", "container", root);
  const homePageTitle = createElement(1, "h1", "home_title", homePage);
  const homePageMenu = createElement(1, "div", "menu", homePage);
  const menuList = createElement(1, "ul", "menu_list", homePageMenu);
  const menuListItem = createElement(2, "li", "menu_list-item", menuList);

  menuList.firstChild.innerText = "Вход";
  menuList.lastChild.innerText = "Об игре";
  homePageTitle.innerText = "Football Tactics";

  showModalForm();
};
