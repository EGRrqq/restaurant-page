import { getMeals } from "../db";

export default class cell {
  #cell = document.createElement("article");
  #parent: HTMLElement;
  #positionIndex = "0";

  constructor() {
    this.cell.classList.add("cell");
    this.cell.dataset.type = "empty";

    this.cell.addEventListener("dragover", this.cellDragOver);
    this.cell.addEventListener("dragleave", this.cellDragLeave);
    this.cell.addEventListener("drop", this.cellDragDrop);
  }

  get cell() {
    return this.#cell;
  }

  get parent() {
    return this.#parent;
  }

  set parent(parent: HTMLElement) {
    this.#parent = parent;
  }

  get positionIndex(): string {
    return this.#positionIndex;
  }

  setPositionIndex(value: number) {
    this.#positionIndex = value.toString();

    return this;
  }

  appendTo(parent: HTMLElement) {
    parent.appendChild(this.cell);

    this.#parent = parent;
    this.setPositionIndex([...parent.childNodes].indexOf(this.cell));

    return this;
  }

  setAttributes() {
    this.cell.dataset.position = this.#positionIndex;

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
    const getMeal = () => getMeals().find((meal) => meal.id === getId());

    const mealElement = () =>
      getMeal().setPositionIndex(parseInt(this.positionIndex)).setAttributes()
        .meal;

    mealElement().replaceWith(
      new cell()
        .setPositionIndex(parseInt(getMeal().positionIndex))
        .setAttributes().cell,
    );

    (event.target as HTMLElement).replaceWith(mealElement());

    console.log(getMeals(), mealElement());
  };
}
