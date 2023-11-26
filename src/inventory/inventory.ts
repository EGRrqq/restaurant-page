import { emptyCell, mealCell } from "./cells";

export default class inventory {
  #inventory = document.createElement("section");

  constructor() {
    const fillInventory = () => {
      this.syncCells();

      window.removeEventListener("load", fillInventory);
    };

    window.addEventListener("load", fillInventory);
  }

  get getInventory() {
    return this.#inventory;
  }

  get getStyles() {
    return window.getComputedStyle(this.getInventory);
  }

  get getColumns() {
    return this.getStyles.gridTemplateColumns
      .split(" ")
      .filter((col) => col !== "0px").length;
  }

  get getRows() {
    return this.getStyles.gridTemplateRows
      .split(" ")
      .filter((row) => row !== "0px").length;
  }

  get getCells() {
    return this.getColumns * this.getRows;
  }

  get getInitCells() {
    return this.getInventory.childNodes.length;
  }

  get getCellsDifference() {
    return this.getInitCells - this.getCells;
  }

  fillCells(cells: number) {
    let i = 0;

    while (i < cells) {
      new emptyCell().appendTo(this.getInventory).setAttributes();

      i++;
    }
  }

  removeCells(cells: number) {
    let i = 0;

    while (i < cells) {
      this.getInventory.lastChild.remove();

      i++;
    }
  }

  syncCells() {
    if (this.getCellsDifference < 0) {
      this.fillCells(Math.abs(this.getCellsDifference));
    }

    if (this.getCellsDifference > 0) {
      this.removeCells(Math.abs(this.getCellsDifference));
    }

    return this;
  }

  appendTo(parent: HTMLElement) {
    parent.appendChild(this.getInventory);

    return this;
  }

  classList(...classes: string[]) {
    this.getInventory.classList.add(...classes);

    return this;
  }

  setId(value: string) {
    this.getInventory.id = value;

    return this;
  }
}

export class inventoryWithItems extends inventory {
  #db: () => mealCell[];

  constructor(type: string, db: () => mealCell[]) {
    super();

    this.getInventory.dataset.type = type;
    this.#db = db;

    const init = () => {
      this.syncMeals();
      window.removeEventListener("load", init);
    };

    window.addEventListener("load", init);
  }

  get db() {
    return this.#db;
  }

  syncMeals() {
    let i = 0;
    const length = this.db().length;

    const getPositionIndex = () => this.db()[i].positionIndex;
    const getCurrentCell = () =>
      this.getInventory.childNodes[parseInt(getPositionIndex())] as HTMLElement;

    while (i < length) {
      if (getCurrentCell() && getCurrentCell().dataset.type !== "food") {
        getCurrentCell().replaceWith(this.db()[i].setAttributes().cell);
      }

      i++;
    }
  }
}
