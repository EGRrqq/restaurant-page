import { mealCell } from "../inventory/cells";

import {
  puke_1,
  puke_2,
  puke_3,
  puke_4,
  puke_5,
  taste_1,
  taste_2,
  taste_3,
  taste_4,
  taste_5,
} from "../../public/icons";

const meals = [
  new mealCell(puke_1, -25),
  new mealCell(puke_2, -25),
  new mealCell(puke_3, -25),
  new mealCell(puke_4, -25),
  new mealCell(puke_5, -25),
  new mealCell(taste_1, +25),
  new mealCell(taste_2, +25),
  new mealCell(taste_3, +25),
  new mealCell(taste_4, +25),
  new mealCell(taste_5, +25),
]
  .sort(() => Math.random() - 0.5)
  .map((item, i) => item.setPositionIndex(i));

export const getStoreMeals = () => meals;
export const getStoreMeal = (id: string) =>
  getStoreMeals().find((meal) => meal.id === id);
