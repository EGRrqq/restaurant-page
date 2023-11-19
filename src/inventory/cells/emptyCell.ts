import { getStoreMeals, getVisitorMeals } from "../../db";
import cell from "./cell";

export default class emptyCell extends cell {
  #parent: HTMLElement;

  constructor() {
    super();

    this.cell.classList.add("cell");
    this.cell.dataset.type = "empty";

    this.cell.addEventListener("dragover", this.cellDragOver);
    this.cell.addEventListener("dragleave", this.cellDragLeave);
    this.cell.addEventListener("drop", this.cellDragDrop);
  }

  get parent() {
    return this.#parent;
  }

  set parent(parent: HTMLElement) {
    this.#parent = parent;
  }

  appendTo(parent: HTMLElement) {
    parent.appendChild(this.cell);

    this.#parent = parent;
    this.setPositionIndex([...parent.childNodes].indexOf(this.cell));

    return this;
  }

  cellDragOver(event: DragEvent) {
    event.preventDefault();

    (event.target as HTMLElement).classList.add("cell-over");
  }

  cellDragLeave(event: DragEvent) {
    (event.target as HTMLElement).classList.remove("cell-over");
  }

  cellDragDrop = (event: DragEvent) => {
    (event.target as HTMLElement).classList.remove("cell-over");

    const getId = () => event.dataTransfer.getData("element/id");

    const getStoreMeal = () =>
      getStoreMeals().find((meal) => meal.id === getId());

    const getVisitorMeal = () =>
      getVisitorMeals().find((meal) => meal.id === getId());

    console.log("meal", getStoreMeal(), getVisitorMeal(), getId());

    if (!getStoreMeal()) {
      console.log("push store", getVisitorMeal());
      getStoreMeals().push(getVisitorMeal());

      getVisitorMeals().splice(getVisitorMeals().indexOf(getStoreMeal()), 1);
    }

    const initPos = getStoreMeal().positionIndex;

    const mealElement = () =>
      getStoreMeal()
        .setPositionIndex(parseInt(this.positionIndex))
        .setAttributes().cell;

    mealElement().replaceWith(
      new emptyCell().setPositionIndex(parseInt(initPos)).setAttributes().cell,
    );

    (event.target as HTMLElement).replaceWith(mealElement());

    if (this.parent.dataset.type === "visitor") {
      console.log("push visitor", getStoreMeal());
      getVisitorMeals().push(getStoreMeal());

      getStoreMeals().splice(getStoreMeals().indexOf(getStoreMeal()), 1);
    }

    console.log("mealarr", getStoreMeals(), getVisitorMeals());
  };
}
