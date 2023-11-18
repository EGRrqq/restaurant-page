import { getMeals } from "../db";
import cell from "./cell";

export default class inventory {
  #inventory: HTMLElement;

  constructor(query: string) {
    this.#inventory = document.querySelector(query);

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
      new cell().appendTo(this.getInventory).setAttributes();

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

  syncEvents() {
    if (this.getCellsDifference < 0) {
      this.getInventory;
    }
  }

  syncCells() {
    if (this.getCellsDifference < 0) {
      // this is the place to add events on resize
      this.fillCells(Math.abs(this.getCellsDifference));
    }

    if (this.getCellsDifference > 0) {
      this.removeCells(Math.abs(this.getCellsDifference));
    }
  }
}

export class store extends inventory {
  constructor(query: string) {
    super(query);

    const init = () => {
      this.addMeals();
      window.removeEventListener("load", init);
    };

    window.addEventListener("load", init);
  }

  addMeals() {
    let i = 0;
    const length = getMeals().length;

    const getPositionIndex = () => getMeals()[i].positionIndex;
    const getCurrentCell = () =>
      this.getInventory.childNodes[parseInt(getPositionIndex())] as HTMLElement;

    while (i < length) {
      if (getCurrentCell()) {
        getCurrentCell().replaceWith(getMeals()[i].setAttributes().meal);

        console.log("addMeal", i, getMeals()[i]);
      }

      i++;
    }
  }
}
