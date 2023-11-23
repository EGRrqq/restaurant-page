import { getSwapMeals } from "../../db";
import cell from "./cell";

export default class mealCell extends cell {
  #id = Math.random().toString(36).substring(2);

  constructor(src: string) {
    super();

    this.cell.style.background = `url(${src}) 100%/100% no-repeat, darkseagreen`;
    this.cell.dataset.type = "food";
    this.cell.id = this.id;

    this.cell.setAttribute("draggable", "true");

    this.cell.addEventListener("dragstart", this.cellDragStart);
    this.cell.addEventListener("click", this.cellClick);
  }

  get id() {
    return this.#id;
  }

  cellDragStart(event: DragEvent) {
    event.dataTransfer.setData("element/id", (event.target as HTMLElement).id);

    event.dataTransfer.effectAllowed = "move";

    console.log(event.dataTransfer);
  }

  cellClick = (event: Event) => {
    const getSwapBtn = () =>
      document.getElementById("swap-btn") as HTMLButtonElement;

    if (this.cell.dataset.select) {
      if (this.cell.parentElement.dataset.type !== "store") return;

      (event.target as HTMLElement).removeAttribute("data-select");
      (event.target as HTMLElement).classList.toggle("select-cell");

      getSwapMeals().splice(getSwapMeals().indexOf(this, 1));
      if (!getSwapMeals().length) {
        getSwapBtn().setAttribute("disabled", "true");
      }

      console.log("dataset", getSwapMeals());
    } else {
      if (this.cell.parentElement.dataset.type !== "store") return;

      (event.target as HTMLElement).dataset.select = "true";
      (event.target as HTMLElement).classList.toggle("select-cell");

      getSwapMeals().push(this);
      if (getSwapBtn().disabled) {
        getSwapBtn().removeAttribute("disabled");
      }
      console.log(getSwapMeals());
    }
  };
}
