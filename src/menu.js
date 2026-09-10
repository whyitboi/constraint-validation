import { menuText } from "./text.js";

function displayMenu() {
  const divContent = document.getElementById("content");
  const menuDiv = document.createElement("div");

  menuDiv.textContent = menuText;

  divContent.replaceChildren(menuDiv);
}
export { displayMenu };
