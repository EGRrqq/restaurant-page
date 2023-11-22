import { mealCell } from "../inventory/cells";

let meals: mealCell[] = [];

export const getSwapMeals = () => meals;
export const getSwapMeal = (id: string) =>
  getSwapMeals().find((meal) => meal.id === id);
export const resetSwapMeals = () => (meals = [] as mealCell[]);
