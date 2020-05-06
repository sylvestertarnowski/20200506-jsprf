
export function makeTag(tagName, elements = [], cssClasses = []) {
  const node = document.createElement(tagName);
  node.classList.add(...cssClasses);
  elements.forEach(el => node.appendChild(el));
  return node;
}

export function txt(text) {
  return document.createTextNode(text);
}

export const div = (elements = [], cssClasses = []) => makeTag('div', elements, cssClasses);
export const ul = (elements = [], cssClasses = ['list-group']) => makeTag('ul', elements, cssClasses);
export const p = (elements = [], cssClasses = []) => makeTag('p', elements, cssClasses);
export const li = (innerText, cssClasses = ['list-group-item']) => makeTag('li', [txt(innerText)], cssClasses);
export const h2 = (text, cssClasses = []) => makeTag('h2', [txt(text)], cssClasses);
export const h6 = (text, cssClasses = []) => makeTag('h6', [txt(text)], cssClasses);
export const button = (text, cssClasses = ['btn']) => makeTag('button', [txt(text)], cssClasses);
export const input = (attributes = {}) => {
  const myInput = makeTag('input', [], ['form-control', 'mb-2']);
  Object
    .keys(attributes)
    .forEach((a) => myInput.setAttribute(a, attributes[a]));
  return myInput
};
