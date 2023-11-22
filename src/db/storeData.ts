import { mealCell } from "../inventory/cells";

import {
  cake,
  burger,
  icecream,
  cookies,
  nachos,
  meat,
  corn,
  taco,
  pizza,
  candy,
} from "../../public/icons";

const meals = [
  new mealCell(cake),
  new mealCell(burger),
  new mealCell(nachos),
  new mealCell(icecream),
  new mealCell(cookies),
  new mealCell(meat),
  new mealCell(corn),
  new mealCell(taco),
  new mealCell(pizza),
  new mealCell(candy),
  new mealCell(cake),
  new mealCell(burger),
  new mealCell(nachos),
  new mealCell(icecream),
  new mealCell(cookies),
  new mealCell(meat),
  new mealCell(corn),
  new mealCell(taco),
  new mealCell(pizza),
  new mealCell(candy),
  new mealCell(cake),
  new mealCell(burger),
  new mealCell(nachos),
  new mealCell(icecream),
  new mealCell(cookies),
  new mealCell(meat),
  new mealCell(corn),
  new mealCell(taco),
  new mealCell(pizza),
  new mealCell(candy),
]
  .sort(() => Math.random() - 0.5)
  .map((item, i) => item.setPositionIndex(i));

export const getStoreMeals = () => meals;
export const getStoreMeal = (id: string) =>
  getStoreMeals().find((meal) => meal.id === id);
