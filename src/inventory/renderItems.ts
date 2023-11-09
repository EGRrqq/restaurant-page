import { foodData } from "../../db/foodData";

const createArticle = () => {
  const article = document.createElement("article");

  article.textContent = ["1", "2", "3"][Math.floor(Math.random() * 3)];

  return article;
};

export function renderFoodItems(parent: HTMLElement) {
  foodData.forEach((item) => parent.appendChild(createArticle()));
}
