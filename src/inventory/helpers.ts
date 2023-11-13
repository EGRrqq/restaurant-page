export class inventory {
  #inventory;

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
      const div = document.createElement("div");
      div.classList.add("cell");
      this.getInventory.appendChild(div);

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
  }
}
