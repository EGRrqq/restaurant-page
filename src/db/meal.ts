export default class meal {
  #meal = document.createElement("article");
  #id = Math.random().toString(36).substring(2);
  #positionIndex = "0";

  constructor(src: string) {
    this.meal.style.background = "darkcyan";
    this.meal.dataset.type = "food";
    this.meal.id = this.id;

    this.meal.setAttribute("draggable", "true");

    this.meal.addEventListener("dragstart", this.cellDragStart);
  }

  get meal() {
    return this.#meal;
  }

  get id() {
    return this.#id;
  }

  get positionIndex(): string {
    return this.#positionIndex;
  }

  setPositionIndex(value: number) {
    this.#positionIndex = value.toString();

    return this;
  }

  setAttributes() {
    this.meal.dataset.position = this.#positionIndex;

    return this;
  }

  cellDragStart(event: DragEvent) {
    event.dataTransfer.setData("element/id", (event.target as HTMLElement).id);

    event.dataTransfer.effectAllowed = "move";

    console.log(event.dataTransfer);
  }
}
