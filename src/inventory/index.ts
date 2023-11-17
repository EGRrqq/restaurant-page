import inventory, { store } from "./inventory";

const inv1 = new store("#store #left-menu-section");
const inv2 = new inventory("#store #right-menu-section");
const inv3 = new inventory("#character #left-menu-section");

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
  inv1.syncCells();
  inv1.addMeals();

  inv2.syncCells();
  inv3.syncCells();
}
