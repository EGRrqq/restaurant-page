import {
  getStoreMeals,
  getSwapMeals,
  getVisitorMeal,
  getVisitorMeals,
} from "../../db";
import {
  getDogHugSoundEl,
  getDogPantingSoundEl,
  getEatSound,
  getSelectSound,
  setFoodReactionSound,
} from "../soundController";
import cell from "./cell";
import emptyCell from "./emptyCell";

export default class mealCell extends cell {
  #id = Math.random().toString(36).substring(2);
  #satiety: number;

  constructor(src: string, satiety: number) {
    super();

    this.cell.style.backgroundImage = `url(${src})`;
    this.cell.dataset.type = "food";
    this.cell.classList.add("meal");
    this.cell.id = this.id;
    this.#satiety = satiety;

    this.cell.setAttribute("draggable", "true");

    this.cell.addEventListener("dragstart", this.cellDragStart);
    this.cell.addEventListener("click", this.cellSelectClick);
    this.cell.addEventListener("click", this.cellProgressClick);
  }

  get id() {
    return this.#id;
  }

  get satiety() {
    return this.#satiety;
  }

  cellDragStart(event: DragEvent) {
    event.dataTransfer.setData("element/id", (event.target as HTMLElement).id);

    event.dataTransfer.effectAllowed = "move";
  }

  cellProgressClick = () => {
    if (this.cell.parentElement.dataset.type === "store") return;
    if (this.cell.closest(".content-wrapper").id !== "pet") return;

    const getProgress = () => document.querySelector("progress");

    if (getProgress().value <= 0 || getProgress().value >= 100) return;

    this.satiety < 0
      ? setFoodReactionSound(getDogHugSoundEl())
      : setFoodReactionSound(getDogPantingSoundEl());

    getProgress().value += this.satiety;

    const initPos = this.positionIndex;

    const newCell = new emptyCell();

    getEatSound().play();
    this.cell.replaceWith(
      newCell.setPositionIndex(parseInt(initPos)).setAttributes().cell,
    );

    newCell.setParent();

    getVisitorMeals().splice(
      getVisitorMeals().indexOf(getVisitorMeal(this.id)),
      1,
    );

    const getFoodTask = () => document.getElementById("getfood");

    if (
      !getVisitorMeals().length &&
      getFoodTask().dataset.task === "completed"
    ) {
      document.getElementById("getfood").dataset.task = "not-completed";
    }

    if (getProgress().value >= 100) {
      if (getFoodTask().dataset.task === "not-completed") {
        document.getElementById("getfood").dataset.task = "completed";
      }

      const getCharacter = () =>
        document.getElementById("character") as HTMLImageElement;

      const getLieCharacter = () =>
        document.getElementById("character-lie") as HTMLImageElement;

      getCharacter().style.opacity = "0%";
      getLieCharacter().style.opacity = "100%";
      document.getElementById("feedpet").dataset.task = "completed";
    }

    if (!getStoreMeals().length && !getVisitorMeals().length) {
      document.getElementById("getfood").dataset.task = "completed";
    }
  };

  cellSelectClick = (event: Event) => {
    const getSwapBtn = () =>
      document.getElementById("swap-btn") as HTMLButtonElement;

    if (this.cell.dataset.select) {
      if (this.cell.parentElement.dataset.type !== "store") return;

      getSelectSound().play();

      (event.target as HTMLElement).removeAttribute("data-select");
      (event.target as HTMLElement).classList.toggle("select-cell");

      getSwapMeals().splice(getSwapMeals().indexOf(this), 1);
      if (!getSwapMeals().length) {
        getSwapBtn().setAttribute("disabled", "true");
      }
    } else {
      if (this.cell.parentElement.dataset.type !== "store") return;

      getSelectSound().play();

      (event.target as HTMLElement).dataset.select = "true";
      (event.target as HTMLElement).classList.toggle("select-cell");

      getSwapMeals().push(this);
      if (getSwapBtn().disabled) {
        getSwapBtn().removeAttribute("disabled");
      }
    }
  };
}
