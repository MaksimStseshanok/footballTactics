import { onResetForm } from "./onResetForm.js";
import { checkInputs } from "./validateForms.js";

export const authorizationForm = () => {
  checkInputs(".sign_in input");
  onResetForm(".sign_in input");
};
