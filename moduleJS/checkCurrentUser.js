import { createLevelPage } from "../levelPagesJS/createLevelPage.js";
import { createHomePage } from "./createHomePage.js";

export const checkCurrentUser = () =>
  JSON.parse(localStorage.getItem("currentUser"))
    ? createLevelPage()
    : createHomePage();
