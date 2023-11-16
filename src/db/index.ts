import meal from "./meal";
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
  new meal(cake),
  new meal(burger),
  new meal(nachos),
  new meal(icecream),
  new meal(cookies),
  new meal(meat),
  new meal(corn),
  new meal(taco),
  new meal(pizza),
  new meal(candy),
]
  .sort(() => Math.random() - 0.5)
  .map((item, i) => {
    item.positionIndex = i;

    return item;
  });

export const getMeals = () => meals;
