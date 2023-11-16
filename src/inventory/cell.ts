export default class cell {
  #cell = document.createElement("article");

  constructor(parent: HTMLElement) {
    this.cell.classList.add("cell");

    parent.appendChild(this.cell);
  }

  get cell() {
    return this.#cell;
  }

  set bg(src: string) {
    this.#cell.style.background = src;
  }
}
