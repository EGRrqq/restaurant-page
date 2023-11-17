import { getMeals } from "../db";

export default class cell {
  #cell = document.createElement("article");

  constructor() {
    this.cell.classList.add("cell");
    this.cell.dataset.type = "empty";

    // this.cellDragDrop = this.cellDragDrop.bind(this);

    this.addEmptyCellEvents();
  }

  get cell() {
    return this.#cell;
  }

  appendTo(parent: HTMLElement) {
    parent.appendChild(this.cell);

    this.cell.dataset.position = [...parent.childNodes]
      .indexOf(this.cell)
      .toString();
  }

  addEmptyCellEvents() {
    this.cell.addEventListener("dragover", this.cellDragOver);
    this.cell.addEventListener("dragleave", this.cellDragLeave);
    this.cell.addEventListener("drop", this.cellDragDrop);
  }

  removeEmptyCellEvents(cell: HTMLElement) {
    cell.removeEventListener("dragover", this.cellDragOver);
    cell.removeEventListener("dragleave", this.cellDragLeave);
    cell.removeEventListener("drop", this.cellDragDrop);
  }

  removeAttributes(cell: HTMLElement) {
    cell.removeAttribute("draggable");
    cell.removeAttribute("id");
    cell.removeAttribute("data-saturation");
    cell.removeAttribute("style");

    cell.dataset.type = "empty";
  }

  addAttributes(
    cell: HTMLElement,
    id: string,
    saturation: string,
    style: string,
  ) {
    cell.id = id;
    cell.dataset.saturation = saturation;

    cell.style.background = style;

    cell.dataset.type = "food";
  }

  cellDragDrop = (event: DragEvent) => {
    (event.target as HTMLElement).classList.remove("cell-over");

    const getId = () => event.dataTransfer.getData("element/id");
    const getMeal = () => document.getElementById(getId());
    const getMealPosition = () => parseInt(getMeal().dataset.position);

    const getCellPosition = () =>
      parseInt((event.target as HTMLElement).dataset.position);

    getMeal().removeEventListener("dragstart", this.cellDragStart);
    getMeals()[getMealPosition()].positionIndex = getCellPosition();

    this.addAttributes(
      event.target as HTMLElement,
      getMeal().id,
      getMeal().dataset.saturation,
      getMeals()[getMealPosition()].style,
    );
    this.removeAttributes(getMeal());

    this.removeEmptyCellEvents(event.target as HTMLElement);
    this.dragInit(event.target as HTMLElement);
  };

  cellDragOver(event: DragEvent) {
    event.preventDefault();

    event.dataTransfer.dropEffect = "move";
    (event.target as HTMLElement).classList.add("cell-over");

    console.log("empty", "drag over");
  }

  cellDragLeave(event: DragEvent) {
    (event.target as HTMLElement).classList.remove("cell-over");
  }

  dragInit(node: HTMLElement) {
    node.setAttribute("draggable", "true");

    node.addEventListener("dragstart", this.cellDragStart);
  }

  cellDragStart(event: DragEvent) {
    event.dataTransfer.setData("element/id", (event.target as HTMLElement).id);

    event.dataTransfer.effectAllowed = "move";

    console.log(event.dataTransfer);
  }
}
