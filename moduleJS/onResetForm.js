import { clearInput } from "./clearInput.js";
import { createInputsArray } from "./createInputsArray.js";

export const onResetForm = (form) => {
  addEventListener("reset", () => {
    createInputsArray(form).forEach((input) => {
      clearInput(input);
    });
  });
};
