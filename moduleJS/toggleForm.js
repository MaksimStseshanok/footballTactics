export const toggleForm = () => {
  const formTitleBlock = document.querySelector(".form_title");
  const formTitleSignIn = formTitleBlock.firstChild;
  const formTitleSignUp = formTitleBlock.lastChild;

  const signIn = document.querySelector(".sign_in");
  const signUp = document.querySelector(".sign_up");

  signIn.classList.remove("sign_in-close");
  signUp.classList.remove("sign_up-show");
  formTitleSignIn.classList.remove("form_title-inactive");
  formTitleSignUp.classList.add("form_title-inactive");
};
