import { walter_lie } from "../../public/character";
import {
  doorClosingSound,
  doorOpeneningSound,
  eatSound,
  peopleTalkingSound,
  selectSound,
  pickUpSound,
  dogHugSound,
  dogPantingSound,
  dogBarkSound,
} from "../../public/sounds";

const selectSoundEl = new Audio(selectSound);
const eatSoundEl = new Audio(eatSound);
const openDoorSoundEl = new Audio(doorOpeneningSound);
const closeDoorSoundEl = new Audio(doorClosingSound);
const talkSoundEl = new Audio(peopleTalkingSound);
const pickUpSoundEl = new Audio(pickUpSound);

const dogHugSoundEl = new Audio(dogHugSound);
const dogPantingSoundEl = new Audio(dogPantingSound);
const dogBarkSoundEl = new Audio(dogBarkSound);

const getDamageShader = () => document.getElementById("damage-shader");
const getProgress = () =>
  document.getElementById("saturation") as HTMLProgressElement;
const getCharacter = () =>
  document.getElementById("character") as HTMLImageElement;
const getSteamParticle = () =>
  document.getElementById("steam-particle") as HTMLImageElement;
const getLieCharacter = () =>
  document.getElementById("character-lie") as HTMLImageElement;

dogHugSoundEl.addEventListener("play", () => {
  getDamageShader().style.mixBlendMode = "normal";
  getDamageShader().style.opacity = "50%";
  getDamageShader().ariaHidden = "false";
});

dogHugSoundEl.addEventListener("ended", () => {
  getDamageShader().style.mixBlendMode = "hue";
  getDamageShader().style.opacity = "1%";
  getDamageShader().ariaHidden = "true";

  if (getProgress().value <= 0) {
    getCharacter().remove();
    getLieCharacter().remove();
    getDamageShader().remove();

    getSteamParticle().classList.remove("display-none");

    getSteamParticle().addEventListener(
      "animationstart",
      function steamParticleInit() {
        getSteamParticle().ariaHidden = "false";
        getSteamParticle().alt = "effect of a dog disappearing";

        getSteamParticle().removeEventListener(
          "animationstart",
          steamParticleInit,
        );
      },
    );

    getSteamParticle().addEventListener(
      "animationend",
      function steamParticleEnd() {
        getSteamParticle().ariaHidden = "true";

        getSteamParticle().removeEventListener(
          "animationend",
          steamParticleEnd,
        );

        getSteamParticle().remove();
      },
    );

    getSteamParticle().classList.add("fade-out");
  }
});

export const getDogHugSoundEl = () => dogHugSoundEl;
export const getDogPantingSoundEl = () => dogPantingSoundEl;
export const getDogBarkSoundEl = () => dogBarkSoundEl;

dogHugSoundEl.volume = 0.7;

let foodReactionSound: HTMLAudioElement;
const getFoodReactionSound = () => foodReactionSound;
export const setFoodReactionSound = (reactSound: HTMLAudioElement) =>
  (foodReactionSound = reactSound);

eatSoundEl.addEventListener("ended", function foodReaction() {
  if (getFoodReactionSound()) {
    // little delay
    setTimeout(() => getFoodReactionSound().play(), 5);
  }
});

openDoorSoundEl.volume = 0.3;
closeDoorSoundEl.volume = 0.25;
talkSoundEl.volume = 0.3;

export const getSelectSound = () => selectSoundEl;
export const getEatSound = () => eatSoundEl;
export const getOpenDoorSound = () => openDoorSoundEl;
export const getCloseDoorSound = () => closeDoorSoundEl;
export const getPickUpSound = () => pickUpSoundEl;

const getTalkSound = () => talkSoundEl;
getTalkSound().autoplay = true;
getTalkSound().loop = true;

const selectAudioCtx = new AudioContext();
const pickUpAudioCtx = new AudioContext();

const selectSource = selectAudioCtx.createMediaElementSource(getSelectSound());
const pickUpSource = pickUpAudioCtx.createMediaElementSource(getPickUpSound());

const selectGain = selectAudioCtx.createGain();
const pickUpGain = pickUpAudioCtx.createGain();

selectGain.gain.value = 1.25;
pickUpGain.gain.value = 1.25;

selectSource.connect(selectGain).connect(selectAudioCtx.destination);
pickUpSource.connect(pickUpGain).connect(pickUpAudioCtx.destination);

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
