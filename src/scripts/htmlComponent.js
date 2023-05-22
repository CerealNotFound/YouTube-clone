export const htmlComponent = (element, attributes = []) => {
  let htmlElement;
  if (element != "svg") {
    htmlElement = document.createElement(element);
    attributes.map((htmlAttribute) => {
      htmlAttribute.attribute == "class"
        ? htmlElement.classList.add(htmlAttribute.value)
        : htmlElement.setAttribute(
            htmlAttribute.attribute,
            htmlAttribute.value
          );
    });
    // document.querySelector(parent).appendChild(htmlElement);
  }

  return htmlElement;
};

export const appendElements = (children = [], parent) => {
  children.map((child) => {
    parent.appendChild(child);
  });
};
