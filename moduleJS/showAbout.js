export const showAbout = () => {
  const aboutShow = document.querySelector(".about_modal");
  const modalBgShow = document.querySelector(".modal_bg");

  aboutShow.classList.add("show");
  modalBgShow.classList.add("show");

  document.addEventListener("click", () => {
    let click = event.target.classList.value;

    if (
      (click === "modal_bg show" || click === "close_btn") &&
      aboutShow.classList.contains("show")
    ) {
      aboutShow.classList.remove("show");
      modalBgShow.classList.remove("show");
    }
  });
};
