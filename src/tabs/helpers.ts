import {
  connectBgEq,
  disconnectBgEq,
  getCloseDoorSound,
  getOpenDoorSound,
} from "../inventory/soundController";
import { fuzzySearch } from "../utils";

const getTabs = () =>
  document.querySelectorAll(".menu-tab > a") as NodeListOf<HTMLAnchorElement>;

const tabsId = [...getTabs()].map((node) => node.getAttribute("href").slice(1));

const getVisitorInv = () =>
  document.querySelector("section[data-type='visitor']");

export const findTabId = (hash: string) =>
  tabsId.find((tab) => fuzzySearch(hash, tab)) || tabsId[0];

export function toggleBgSound(id: string) {
  switch (findTabId(id)) {
    case "kitchen":
      disconnectBgEq();
      break;
    default:
      connectBgEq();
      break;
  }
}

export function toggleTabSounds(id: string) {
  switch (findTabId(id)) {
    case "kitchen":
      if (getCloseDoorSound().currentTime && !getCloseDoorSound().paused) {
        getCloseDoorSound().pause();
        getCloseDoorSound().currentTime = 0;
      }

      getOpenDoorSound().play();
      break;
    case "quests":
    case "pet":
      if (getOpenDoorSound().currentTime && !getOpenDoorSound().paused) {
        getOpenDoorSound().pause();
        getOpenDoorSound().currentTime = 0;
      }

      getCloseDoorSound().play();
      break;

    default:
      break;
  }
}

export function toggleWrapper(wrapper: HTMLElement) {
  wrapper.classList.toggle("visually-hidden");
  wrapper.setAttribute(
    "aria-hidden",
    wrapper.classList.contains("visually-hidden").toString(),
  );
}

export function toggleVisitorInv(id: string, wrapper: HTMLElement) {
  if (findTabId(id) !== "pet" && findTabId(id) !== "kitchen") return;

  findTabId(id) === "pet"
    ? (getVisitorInv().id = "left-menu-section")
    : (getVisitorInv().id = "right-menu-section");

  if (![...wrapper.childNodes].includes(getVisitorInv())) {
    wrapper.appendChild(getVisitorInv());
  }
}

export function toggleTemp(id: string) {
  switch (findTabId(id)) {
    case "kitchen":
      document.body.style.background = "var(--warm-cold)";
      document.querySelector("header").dataset.temp = "warm";
      break;

    default:
      document.body.style.background = "var(--cold-warm)";
      document.querySelector("header").dataset.temp = "cold";
      break;
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
