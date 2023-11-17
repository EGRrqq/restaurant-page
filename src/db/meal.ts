import cell from "../inventory/cell";

export default class meal extends cell {
  #node = document.createElement("article");

  #src: string;
  #saturation: string;
  #positionIndex = "0";
  #id = Math.random().toString(36).substring(2);

  constructor(src: string, saturation = 0) {
    super();

    this.dragInit(this.node);
    this.#src = src;
    this.#saturation = saturation.toString();
  }

  set meal(cell: HTMLElement) {
    this.node.classList.add("cell");
    this.node.id = this.#id;
    this.node.dataset.saturation = this.#saturation;
    this.node.dataset.position = this.#positionIndex;
    this.node.dataset.type = "food";

    this.node.style.background = this.style;

    cell.replaceWith(this.node);
  }

  get style() {
    return `url(${this.#src}) 100%/100% no-repeat, darkseagreen`;
  }

  get node() {
    return this.#node;
  }

  get positionIndex(): string {
    return this.#positionIndex;
  }

  set positionIndex(value: number) {
    this.#positionIndex = value.toString();
  }
}
