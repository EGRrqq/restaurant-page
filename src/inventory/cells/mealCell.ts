import cell from "./cell";

export default class mealCell extends cell {
  #id = Math.random().toString(36).substring(2);

  constructor(src: string) {
    super();

    this.cell.style.background = "darkcyan";
    this.cell.dataset.type = "food";
    this.cell.id = this.id;

    this.cell.setAttribute("draggable", "true");

    this.cell.addEventListener("dragstart", this.cellDragStart);
  }

  get id() {
    return this.#id;
  }

  cellDragStart(event: DragEvent) {
    event.dataTransfer.setData("element/id", (event.target as HTMLElement).id);

    event.dataTransfer.effectAllowed = "move";

    console.log(event.dataTransfer);
  }
}
