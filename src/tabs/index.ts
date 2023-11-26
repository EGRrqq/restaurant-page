import {
  findTabId,
  keyboardController,
  toggleWrapper,
  toggleVisitorInv,
  toggleTemp,
} from "./helpers";

window.addEventListener("DOMContentLoaded", init);

function init() {
  new keyboardController();
  window.addEventListener("hashchange", tabChange);

  const getInitId = () => window.location.hash.slice(1);
  const wrapper = document.getElementById(findTabId(getInitId()));

  toggleTemp(getInitId());
  toggleVisitorInv(getInitId(), wrapper);
  toggleWrapper(wrapper);

  window.removeEventListener("DOMContentLoaded", init);
}

function tabChange(event: HashChangeEvent) {
  const getOldId = () => new URL(event.oldURL).hash.slice(1);
  const getNewId = () => new URL(event.newURL).hash.slice(1);

  const oldWrapper = document.getElementById(findTabId(getOldId()));
  const newWrapper = document.getElementById(findTabId(getNewId()));

  toggleTemp(getNewId());
  toggleVisitorInv(getNewId(), newWrapper);

  toggleWrapper(oldWrapper);
  toggleWrapper(newWrapper);
}
