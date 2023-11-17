import { findTabId, keyboardController, toggleWrapper } from "./helpers";

(function init() {
  new keyboardController();
  window.addEventListener("hashchange", tabChange);

  const getInitId = () => window.location.hash.slice(1);
  const wrapper = document.getElementById(findTabId(getInitId()));

  toggleWrapper(wrapper);
})();

function tabChange(event: HashChangeEvent) {
  const getOldId = () => new URL(event.oldURL).hash.slice(1);
  const getNewId = () => new URL(event.newURL).hash.slice(1);

  const oldWrapper = document.getElementById(findTabId(getOldId()));
  const newWrapper = document.getElementById(findTabId(getNewId()));

  toggleWrapper(oldWrapper);
  toggleWrapper(newWrapper);
}
