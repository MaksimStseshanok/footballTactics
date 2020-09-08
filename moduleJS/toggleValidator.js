export const makeValid = (input) => {
  input.classList.add("input_success");
  input.classList.remove("input_error");

  input.nextSibling.classList.add("text_message-success");
  input.nextSibling.classList.remove("text_message-error");
  input.nextSibling.innerText = "Отлично";
};

export const makeInvalid = (input) => {
  input.classList.remove("input_success");
  input.classList.add("input_error");

  input.nextSibling.classList.remove("text_message-success");
  input.nextSibling.classList.add("text_message-error");
  input.nextSibling.innerText = `Пожалуйста ${input.placeholder}`;
};
