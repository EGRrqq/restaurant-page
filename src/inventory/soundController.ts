import {
  eatSound,
  equipSound,
  meowSound,
  selectSound,
} from "../../public/sounds";

const selectSoundEl = new Audio(selectSound);
const equipSoundEl = new Audio(equipSound);
const meowSoundEl = new Audio(meowSound);
const eatSoundEl = new Audio(eatSound);

const getSelectSound = () => selectSoundEl;
const getEquipSound = () => equipSoundEl;
const getMeowSound = () => meowSoundEl;
const getEatSound = () => eatSoundEl;

export const selectPlaySound = () => {
  getSelectSound().play();
};

export const equipPlaySound = () => {
  getEquipSound().play();
};

export const meowPlaySound = () => {
  getMeowSound().play();
};

export const eatPlaySound = () => {
  getEatSound().play();
};
