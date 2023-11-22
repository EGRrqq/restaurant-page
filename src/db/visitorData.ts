import { mealCell } from "../inventory/cells";

const meals: mealCell[] = [];

export const getVisitorMeals = () => meals;
export const getVisitorMeal = (id: string) =>
  getVisitorMeals().find((meal) => meal.id === id);
