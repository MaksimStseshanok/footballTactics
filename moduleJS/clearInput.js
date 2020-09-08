export const clearInput = (input) => {
  input.classList.remove("input_success");
  input.classList.remove("input_error");

  input.nextSibling.classList.remove("text_message-success");
  input.nextSibling.classList.remove("text_message-error");
  input.value = "";
  input.nextSibling.innerText = "";
};
