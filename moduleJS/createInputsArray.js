export const createInputsArray = (form) => {
  const inputs = document.querySelectorAll(form);
  let inputsArray = Array.from(inputs);
  return inputsArray;
};
