export const drawField = () => {
  const field = document.querySelector(".field");
  let block;
  let flag = true;

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 12; j++) {
      if (j == 0) flag = !flag;

      block = document.createElement("div");

      if (flag) block.className = "block dark_green";
      else block.className = "block light_green";

      field.appendChild(block);
      flag = !flag;
    }
  }
};
