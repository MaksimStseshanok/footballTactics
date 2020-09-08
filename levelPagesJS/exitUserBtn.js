export const exitUserBtn = () => {
  const exitBtn = document.querySelector("h2");
  exitBtn.addEventListener("click", () => {
    localStorage.removeItem("currentUser");
    location.reload();
  });
};
