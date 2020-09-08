export const dragAndDrop = () => {
  const dragBlocks = document.querySelectorAll(".draggable");
  const grassField = document.querySelector(".field");
  const cloneField = grassField.cloneNode(true);
  cloneField.className = "clone_field";
  grassField.appendChild(cloneField);
  const grassFieldblock = cloneField.childNodes;

  grassFieldblock.forEach((element) => {
    element.className = "up_block";
  });

  let block;

  dragBlocks.forEach((item) => {
    item.addEventListener("dragstart", function () {
      this.className += " hold";
      setTimeout(() => (this.className = "invisible"), 0);
      block = item;
    });
  });

  dragBlocks.forEach((item) => {
    item.addEventListener("dragend", function () {
      this.className = "draggable";
      block = item;
    });
  });

  grassFieldblock.forEach((block) => {
    block.addEventListener("dragover", dragOver);
    block.addEventListener("dragenter", dragEnter);
    block.addEventListener("dragleave", dragLeave);
    block.addEventListener("drop", dragDrop);
  });

  function dragOver(e) {
    e.preventDefault();
  }
  function dragEnter(e) {
    e.preventDefault();
    this.className += " hovered";
  }
  function dragLeave() {
    this.className = "up_block";
  }
  function dragDrop() {
    this.className = "up_block";
    this.append(block);
  }
};
