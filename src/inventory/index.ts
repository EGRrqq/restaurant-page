import { getStoreMeals, getVisitorMeals } from "../db";
import { inventoryWithItems } from "./inventory";

const storeContentWrapper = () => document.getElementById("store");

const storeInventory = new inventoryWithItems("store", getStoreMeals)
  .appendTo(storeContentWrapper())
  .classList("inventory");

const visitorInventorySt = new inventoryWithItems("visitor", getVisitorMeals)
  .appendTo(storeContentWrapper())
  .classList("inventory");

(function init() {
  document
    .querySelector("a[href='#store']")
    .addEventListener("click", syncWithDelay);
  document
    .querySelector("a[href='#character']")
    .addEventListener("click", syncWithDelay);

  window.addEventListener("resize", sync);
  window.addEventListener("hashchange", syncWithDelay);
})();

function syncWithDelay() {
  // When the current tab is not an inventory tab, styles are not computed,
  // to compute it, add a small timeout

  setTimeout(() => {
    sync();
  }, 5);
}

function sync() {
  storeInventory.syncCells().syncMeals();
  visitorInventorySt.syncCells().syncMeals();
}
