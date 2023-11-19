import { fuzzySearch } from "../utils";

const getTabs = () =>
  document.querySelectorAll(".menu-tab > a") as NodeListOf<HTMLAnchorElement>;

const tabsId = [...getTabs()].map((node) => node.getAttribute("href").slice(1));

const getVisitorInv = () =>
  document.querySelector("section[data-type='visitor']");

export const findTabId = (hash: string) =>
  tabsId.find((tab) => fuzzySearch(hash, tab)) || tabsId[0];

export function toggleWrapper(wrapper: HTMLElement) {
  wrapper.classList.toggle("visually-hidden");
  wrapper.setAttribute(
    "aria-hidden",
    wrapper.classList.contains("visually-hidden").toString(),
  );
}

export function toggleVisitorInv(id: string, wrapper: HTMLElement) {
  if (findTabId(id) !== "character" && findTabId(id) !== "store") return;

  if (![...wrapper.childNodes].includes(getVisitorInv())) {
    wrapper.appendChild(getVisitorInv());
  }
}

export class keyboardController {
  constructor() {
    window.addEventListener("keydown", (event) => {
      if (this.#validateKey(event)) {
        getTabs()[parseInt(event.key) - 1].click();

        // In firefox, the focus is not set without a small timeout
        setTimeout(() => getTabs()[parseInt(event.key) - 1].focus(), 1);
      }
    });
  }

  #validateKey(event: KeyboardEvent) {
    return parseInt(event.key) > 0 && parseInt(event.key) <= getTabs().length;
  }
}
