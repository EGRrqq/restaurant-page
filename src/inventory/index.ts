import { getStoreMeals, getVisitorMeals } from "../db";
import { inventoryWithItems } from "./inventory";

const storeContentWrapper = () => document.getElementById("store");

const storeInventory = new inventoryWithItems("store", getStoreMeals)
  .appendTo(storeContentWrapper())
  .classList("inventory");

const visitorInventorySt = new inventoryWithItems("visitor", getVisitorMeals)
  .appendTo(storeContentWrapper())
  .classList("inventory");

window.addEventListener("DOMContentLoaded", init);

function init() {
  window.addEventListener("resize", sync);
  window.addEventListener("hashchange", sync);

  window.removeEventListener("DOMContentLoaded", init);
}

function sync() {
  storeInventory.syncCells().syncMeals();
  visitorInventorySt.syncCells().syncMeals();
}
