import {
  getStoreMeals,
  getSwapMeals,
  getVisitorMeals,
  resetSwapMeals,
} from "../db";
import { emptyCell } from "./cells";
import { inventoryWithItems } from "./inventory";

const storeContentWrapper = () => document.getElementById("kitchen");

const storeInventory = new inventoryWithItems("store", getStoreMeals)
  .appendTo(storeContentWrapper())
  .classList("inventory")
  .setId("left-menu-section");

const visitorInventorySt = new inventoryWithItems("visitor", getVisitorMeals)
  .appendTo(storeContentWrapper())
  .classList("inventory");

const getSwapBtn = () => document.getElementById("swap-btn");

window.addEventListener("DOMContentLoaded", init);

function init() {
  window.addEventListener("resize", sync);
  window.addEventListener("hashchange", sync);
  getSwapBtn().addEventListener("click", swapBtnInit);

  window.removeEventListener("DOMContentLoaded", init);
}

function sync() {
  storeInventory.syncCells().syncMeals();
  visitorInventorySt.syncCells().syncMeals();
}

function swapBtnInit() {
  const getEmptyCell = () =>
    document.querySelector(
      "section[data-type='visitor'] article[data-type='empty']",
    ) as HTMLElement;

  if (getSwapMeals().length && getEmptyCell()) {
    getSwapMeals().forEach((meal) => {
      meal.cell.removeAttribute("data-select");
      meal.cell.classList.remove("select-cell");
      getSwapBtn().setAttribute("disabled", "true");

      const initPos = meal.positionIndex;

      const mealElement = () =>
        meal
          .setPositionIndex(parseInt(getEmptyCell().dataset.position))
          .setAttributes().cell;

      const newCell = new emptyCell();

      mealElement().replaceWith(
        newCell.setPositionIndex(parseInt(initPos)).setAttributes().cell,
      );

      newCell.setParent();
      getEmptyCell().replaceWith(mealElement());

      getVisitorMeals().push(meal);
      getStoreMeals().splice(getStoreMeals().indexOf(meal), 1);

      document.getElementById("getfood").dataset.task = "completed";
    });

    resetSwapMeals();
  }
}
