export const createElement = (number, tag, className, parentElement) => {
  let element;
  for (let i = 0; i < number; i++) {
    element = document.createElement(tag);
    element.classList.add(className);
    parentElement.append(element);
  }
  return element;
};
