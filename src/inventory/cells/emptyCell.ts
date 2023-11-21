import { getStoreMeals, getVisitorMeals } from "../../db";
import cell from "./cell";

export default class emptyCell extends cell {
  #parent: HTMLElement;

  constructor() {
    super();

    this.cell.classList.add("cell");
    this.cell.dataset.type = "empty";

    this.cell.setAttribute("draggable", "false");

    this.cell.addEventListener("dragover", this.cellDragOver);
    this.cell.addEventListener("dragleave", this.cellDragLeave);
    this.cell.addEventListener("drop", this.cellDragDrop);

    // even if I set the draggable parameter to false, it can somehow drag,
    // so I need to use an event that prevents dragging by default
    this.cell.addEventListener("dragstart", (event) => event.preventDefault());
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

  setParent() {
    this.parent = this.cell.parentElement;

    return this;
  }

  cellDragOver(event: DragEvent) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";

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

    if (!getStoreMeal()) {
      getStoreMeals().push(getVisitorMeal());

      getVisitorMeals().splice(getVisitorMeals().indexOf(getStoreMeal()), 1);
    }

    const initPos = getStoreMeal().positionIndex;

    const mealElement = () =>
      getStoreMeal()
        .setPositionIndex(parseInt(this.positionIndex))
        .setAttributes().cell;

    const newCell = new emptyCell();

    mealElement().replaceWith(
      newCell.setPositionIndex(parseInt(initPos)).setAttributes().cell,
    );

    newCell.setParent();

    (event.target as HTMLElement).replaceWith(mealElement());

    if (this.parent.dataset.type === "visitor") {
      getVisitorMeals().push(getStoreMeal());

      getStoreMeals().splice(getStoreMeals().indexOf(getStoreMeal()), 1);
    }
  };
}
