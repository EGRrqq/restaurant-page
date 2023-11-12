import { fuzzySearch } from "../utils";

const tabsId = ["quests", "store", "character"];

export const findTabId = (hash: string) =>
  tabsId.find((tab) => fuzzySearch(hash, tab)) || tabsId[0];

export function toggleWrapper(wrapper: HTMLElement) {
  wrapper.classList.toggle("visually-hidden");
  wrapper.setAttribute(
    "aria-hidden",
    wrapper.classList.contains("visually-hidden").toString(),
  );
}
