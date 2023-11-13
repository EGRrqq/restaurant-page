import { inventory } from "./helpers";

const inv1 = new inventory("#store #left-menu-section");
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
})();

function syncWithDelay() {
  setTimeout(() => {
    sync();
  }, 1);
}

function sync() {
  inv1.syncCells();
  inv2.syncCells();
  inv3.syncCells();
}
