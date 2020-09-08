// import { onSubmitForm } from "./onSubmitForm.js";
import { onResetForm } from "./onResetForm.js";
import { checkInputs } from "./validateForms.js";

export const registrationForm = () => {
  checkInputs(".sign_up input");
  // onSubmitForm();
  onResetForm(".sign_up input");
};
