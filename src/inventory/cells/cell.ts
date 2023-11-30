import { selectSound, equipSound } from "../../../public/sounds";

export default class cell {
  #cell = document.createElement("article");
  #positionIndex = "0";

  constructor() {
    this.cell.classList.add("cell");
  }

  get cell() {
    return this.#cell;
  }

  get positionIndex(): string {
    return this.#positionIndex;
  }

  setPositionIndex(value: number) {
    this.#positionIndex = value.toString();

    return this;
  }

  setAttributes() {
    this.cell.dataset.position = this.#positionIndex;

    return this;
  }
}
