import {
  getStoreMeals,
  getSwapMeals,
  getVisitorMeals,
  resetSwapMeals,
} from "../db";
import { emptyCell } from "./cells";
import { characterInit } from "./character";
import { inventoryWithItems } from "./inventory";
import { getPickUpSound } from "./soundController";

const storeContentWrapper = () => document.getElementById("kitchen");

const storeInventory = new inventoryWithItems("store", getStoreMeals)
  .appendTo(storeContentWrapper())
  .classList("inventory")
  .setId("left-menu-section");

const visitorInventorySt = new inventoryWithItems("visitor", getVisitorMeals)
  .appendTo(storeContentWrapper())
  .classList("inventory");

const getSwapBtn = () =>
  document.getElementById("swap-btn") as HTMLButtonElement;

const getCharacter = () =>
  document.getElementById("character") as HTMLImageElement;

const getDamageShader = () =>
  document.getElementById("damage-shader") as HTMLImageElement;

window.addEventListener("DOMContentLoaded", init);
window.addEventListener("load", function loadInit() {
  // to syncronize character with shader
  getCharacter().classList.remove("display-none");
  getDamageShader().classList.remove("display-none");

  window.removeEventListener("load", loadInit);
});

function init() {
  window.addEventListener("resize", sync);
  window.addEventListener("hashchange", sync);
  getSwapBtn().addEventListener("click", swapBtnInit);
  characterInit();

  // because firefox can save disabled=false after a reload
  getSwapBtn().disabled = true;

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
      getPickUpSound().play();

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
