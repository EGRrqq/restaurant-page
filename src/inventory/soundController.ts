import {
  doorClosingSound,
  doorOpeneningSound,
  eatSound,
  equipSound,
  meowSound,
  selectSound,
} from "../../public/sounds";

const selectSoundEl = new Audio(selectSound);
const equipSoundEl = new Audio(equipSound);
const meowSoundEl = new Audio(meowSound);
const eatSoundEl = new Audio(eatSound);
const openDoorSoundEl = new Audio(doorOpeneningSound);
const closeDoorSoundEl = new Audio(doorClosingSound);

openDoorSoundEl.volume = 0.15;
closeDoorSoundEl.volume = 0.05;

export const getSelectSound = () => selectSoundEl;
export const getEquipSound = () => equipSoundEl;
export const getMeowSound = () => meowSoundEl;
export const getEatSound = () => eatSoundEl;
export const getTalkSound = () =>
  document.getElementById("bg-sound") as HTMLAudioElement;
export const getOpenDoorSound = () => openDoorSoundEl;
export const getCloseDoorSound = () => closeDoorSoundEl;

getTalkSound().volume = 0.25;
const bgAudioCtx = new AudioContext();
const bgSource = bgAudioCtx.createMediaElementSource(getTalkSound());
const bgEq = bgAudioCtx.createBiquadFilter();

export const connectBgEq = () => {
  bgSource.disconnect();
  bgEq.type = "bandpass";

  bgSource.connect(bgEq);
  bgEq.connect(bgAudioCtx.destination);
};

export const disconnectBgEq = () => {
  bgEq.disconnect();
  bgSource.connect(bgAudioCtx.destination);
};
