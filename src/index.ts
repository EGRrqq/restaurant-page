import { renderFoodItems } from "./inventory";
import "./style.css";

function mysweetcomponent() {
  const main = document.createElement("main");
  const section = document.createElement("section");

  renderFoodItems(section);
  main.appendChild(section);

  return main;
}

document.body.appendChild(mysweetcomponent());
