import { aboutText } from "./text.js";
function displayAbout() {
  const divContent = document.getElementById("content");
  const aboutDiv = document.createElement("div");

  aboutDiv.textContent = aboutText;

  divContent.replaceChildren(aboutDiv);
}

export { displayAbout };
