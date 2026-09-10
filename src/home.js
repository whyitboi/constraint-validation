import { homeText } from "./text.js";

function displayHome() {
  const divContent = document.getElementById("content");
  const homeDiv = document.createElement("div");

  homeDiv.textContent = homeText;

  divContent.replaceChildren(homeDiv);
}

export { displayHome };
