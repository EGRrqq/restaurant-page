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
  new mealCell(cake, +15),
  new mealCell(burger, +30),
  new mealCell(nachos, -25),
  new mealCell(icecream, +15),
  new mealCell(cookies, -30),
  new mealCell(meat, +30),
  new mealCell(corn, +15),
  new mealCell(taco, -25),
  new mealCell(pizza, +30),
  new mealCell(candy, -15),
]
  .sort(() => Math.random() - 0.5)
  .map((item, i) => item.setPositionIndex(i));

export const getStoreMeals = () => meals;
export const getStoreMeal = (id: string) =>
  getStoreMeals().find((meal) => meal.id === id);
