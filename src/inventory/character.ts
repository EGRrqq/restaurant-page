import { walter_lie } from "../../public/character";
import { getVisitorMeal, getVisitorMeals } from "../db";
import { emptyCell } from "./cells";
import {
  getDogBarkSoundEl,
  getDogHugSoundEl,
  getDogPantingSoundEl,
  getEatSound,
  setFoodReactionSound,
} from "./soundController";

const getCharacterWrapper = () => document.querySelector(".character-wrapper");
const getProgress = () => document.querySelector("progress");
const getCharacter = () =>
  document.getElementById("character") as HTMLImageElement;

export function characterInit() {
  getCharacterWrapper().addEventListener("dragover", characterDragOver);
  getCharacterWrapper().addEventListener("drop", characterDragDrop);
}

function characterDragOver(event: DragEvent) {
  event.preventDefault();
  event.dataTransfer.dropEffect = "move";

  if (getProgress().value <= 0 || getProgress().value >= 100) return;

  const getId = () => event.dataTransfer.getData("element/id");
  getVisitorMeal(getId()).satiety < 0
    ? getDogBarkSoundEl().play()
    : getDogPantingSoundEl().play();
}

function characterDragDrop(event: DragEvent) {
  const getId = () => event.dataTransfer.getData("element/id");

  if (getVisitorMeal(getId()).cell.parentElement.dataset.type === "store")
    return;
  if (getVisitorMeal(getId()).cell.closest(".content-wrapper").id !== "pet")
    return;

  if (getProgress().value <= 0 || getProgress().value >= 100) return;

  getProgress().value += getVisitorMeal(getId()).satiety;

  const initPos = getVisitorMeal(getId()).positionIndex;

  const newCell = new emptyCell();

  getEatSound().play();
  getVisitorMeal(getId()).satiety < 0
    ? setFoodReactionSound(getDogHugSoundEl())
    : setFoodReactionSound(getDogPantingSoundEl());

  getVisitorMeal(getId()).cell.replaceWith(
    newCell.setPositionIndex(parseInt(initPos)).setAttributes().cell,
  );

  newCell.setParent();

  getVisitorMeals().splice(
    getVisitorMeals().indexOf(getVisitorMeal(getVisitorMeal(getId()).id)),
    1,
  );

  const getFoodTask = () => document.getElementById("getfood");

  if (!getVisitorMeals().length && getFoodTask().dataset.task === "completed") {
    document.getElementById("getfood").dataset.task = "not-completed";
  }

  if (getProgress().value >= 100) {
    if (getFoodTask().dataset.task === "not-completed") {
      document.getElementById("getfood").dataset.task = "completed";
    }

    document.getElementById("damage-shader").remove();
    getCharacter().src = walter_lie;
    getCharacter().alt = "The dog full, let him rest";
    document.getElementById("feedpet").dataset.task = "completed";
  }
}
