import { displayHome } from "./home.js";

function pageLoad() {
  const header = document.querySelector("header");
  const headline = document.createElement("h2");

  headline.textContent = "Fancy Lads";
  header.prepend(headline);

  displayHome();
}
export { pageLoad };
