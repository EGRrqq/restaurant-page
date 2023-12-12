"use strict";
(self["webpackChunkpoggers"] = self["webpackChunkpoggers"] || []).push([["tabs"],{

/***/ "./public/sounds/index.ts":
/*!********************************!*\
  !*** ./public/sounds/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dogBarkSound: () => (/* reexport default export from named module */ _dog_barking_mp3__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   dogHugSound: () => (/* reexport default export from named module */ _dog_hug_mp3__WEBPACK_IMPORTED_MODULE_8__),
/* harmony export */   dogPantingSound: () => (/* reexport default export from named module */ _dog_panting_mp3__WEBPACK_IMPORTED_MODULE_7__),
/* harmony export */   doorClosingSound: () => (/* reexport default export from named module */ _door_closing_mp3__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   doorOpeneningSound: () => (/* reexport default export from named module */ _door_opening_mp3__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   eatSound: () => (/* reexport default export from named module */ _munch_mp3__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   peopleTalkingSound: () => (/* reexport default export from named module */ _people_talking_in_small_room_mp3__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   pickUpSound: () => (/* reexport default export from named module */ _pick_up_mp3__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   selectSound: () => (/* reexport default export from named module */ _select_mp3__WEBPACK_IMPORTED_MODULE_3__)
/* harmony export */ });
/* harmony import */ var _door_closing_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./door-closing.mp3 */ "./public/sounds/door-closing.mp3");
/* harmony import */ var _door_opening_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./door-opening.mp3 */ "./public/sounds/door-opening.mp3");
/* harmony import */ var _people_talking_in_small_room_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./people-talking-in-small-room.mp3 */ "./public/sounds/people-talking-in-small-room.mp3");
/* harmony import */ var _select_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select.mp3 */ "./public/sounds/select.mp3");
/* harmony import */ var _pick_up_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pick-up.mp3 */ "./public/sounds/pick-up.mp3");
/* harmony import */ var _munch_mp3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./munch.mp3 */ "./public/sounds/munch.mp3");
/* harmony import */ var _dog_barking_mp3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dog-barking.mp3 */ "./public/sounds/dog-barking.mp3");
/* harmony import */ var _dog_panting_mp3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dog-panting.mp3 */ "./public/sounds/dog-panting.mp3");
/* harmony import */ var _dog_hug_mp3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dog-hug.mp3 */ "./public/sounds/dog-hug.mp3");












/***/ }),

/***/ "./src/inventory/soundController.ts":
/*!******************************************!*\
  !*** ./src/inventory/soundController.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   connectBgEq: () => (/* binding */ connectBgEq),
/* harmony export */   disconnectBgEq: () => (/* binding */ disconnectBgEq),
/* harmony export */   getCloseDoorSound: () => (/* binding */ getCloseDoorSound),
/* harmony export */   getDogBarkSoundEl: () => (/* binding */ getDogBarkSoundEl),
/* harmony export */   getDogHugSoundEl: () => (/* binding */ getDogHugSoundEl),
/* harmony export */   getDogPantingSoundEl: () => (/* binding */ getDogPantingSoundEl),
/* harmony export */   getEatSound: () => (/* binding */ getEatSound),
/* harmony export */   getOpenDoorSound: () => (/* binding */ getOpenDoorSound),
/* harmony export */   getPickUpSound: () => (/* binding */ getPickUpSound),
/* harmony export */   getSelectSound: () => (/* binding */ getSelectSound),
/* harmony export */   setFoodReactionSound: () => (/* binding */ setFoodReactionSound)
/* harmony export */ });
/* harmony import */ var _public_sounds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/sounds */ "./public/sounds/index.ts");

const selectSoundEl = new Audio(_public_sounds__WEBPACK_IMPORTED_MODULE_0__.selectSound);
const eatSoundEl = new Audio(_public_sounds__WEBPACK_IMPORTED_MODULE_0__.eatSound);
const openDoorSoundEl = new Audio(_public_sounds__WEBPACK_IMPORTED_MODULE_0__.doorOpeneningSound);
const closeDoorSoundEl = new Audio(_public_sounds__WEBPACK_IMPORTED_MODULE_0__.doorClosingSound);
const talkSoundEl = new Audio(_public_sounds__WEBPACK_IMPORTED_MODULE_0__.peopleTalkingSound);
const pickUpSoundEl = new Audio(_public_sounds__WEBPACK_IMPORTED_MODULE_0__.pickUpSound);
const dogHugSoundEl = new Audio(_public_sounds__WEBPACK_IMPORTED_MODULE_0__.dogHugSound);
const dogPantingSoundEl = new Audio(_public_sounds__WEBPACK_IMPORTED_MODULE_0__.dogPantingSound);
const dogBarkSoundEl = new Audio(_public_sounds__WEBPACK_IMPORTED_MODULE_0__.dogBarkSound);
const getDamageShader = () => document.getElementById("damage-shader");
const getProgress = () => document.getElementById("saturation");
const getCharacter = () => document.getElementById("character");
const getSteamParticle = () => document.getElementById("steam-particle");
const getLieCharacter = () => document.getElementById("character-lie");
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
        getSteamParticle().addEventListener("animationstart", function steamParticleInit() {
            getSteamParticle().ariaHidden = "false";
            getSteamParticle().alt = "effect of a dog disappearing";
            getSteamParticle().removeEventListener("animationstart", steamParticleInit);
        });
        getSteamParticle().addEventListener("animationend", function steamParticleEnd() {
            getSteamParticle().ariaHidden = "true";
            getSteamParticle().removeEventListener("animationend", steamParticleEnd);
            getSteamParticle().remove();
        });
        getSteamParticle().classList.add("fade-out");
    }
});
const getDogHugSoundEl = () => dogHugSoundEl;
const getDogPantingSoundEl = () => dogPantingSoundEl;
const getDogBarkSoundEl = () => dogBarkSoundEl;
dogHugSoundEl.volume = 0.7;
let foodReactionSound;
const getFoodReactionSound = () => foodReactionSound;
const setFoodReactionSound = (reactSound) => (foodReactionSound = reactSound);
eatSoundEl.addEventListener("ended", function foodReaction() {
    if (getFoodReactionSound()) {
        // little delay
        setTimeout(() => getFoodReactionSound().play(), 5);
    }
});
openDoorSoundEl.volume = 0.3;
closeDoorSoundEl.volume = 0.25;
talkSoundEl.volume = 0.3;
const getSelectSound = () => selectSoundEl;
const getEatSound = () => eatSoundEl;
const getOpenDoorSound = () => openDoorSoundEl;
const getCloseDoorSound = () => closeDoorSoundEl;
const getPickUpSound = () => pickUpSoundEl;
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
const connectBgEq = () => {
    bgSource.disconnect();
    bgEq.type = "bandpass";
    bgSource.connect(bgEq);
    bgEq.connect(bgAudioCtx.destination);
};
const disconnectBgEq = () => {
    bgEq.disconnect();
    bgSource.connect(bgAudioCtx.destination);
};


/***/ }),

/***/ "./src/tabs/helpers.ts":
/*!*****************************!*\
  !*** ./src/tabs/helpers.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findTabId: () => (/* binding */ findTabId),
/* harmony export */   keyboardController: () => (/* binding */ keyboardController),
/* harmony export */   toggleBgSound: () => (/* binding */ toggleBgSound),
/* harmony export */   toggleTabSounds: () => (/* binding */ toggleTabSounds),
/* harmony export */   toggleTemp: () => (/* binding */ toggleTemp),
/* harmony export */   toggleVisitorInv: () => (/* binding */ toggleVisitorInv),
/* harmony export */   toggleWrapper: () => (/* binding */ toggleWrapper)
/* harmony export */ });
/* harmony import */ var _inventory_soundController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inventory/soundController */ "./src/inventory/soundController.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _keyboardController_instances, _keyboardController_validateKey;


const getTabs = () => document.querySelectorAll(".menu-tab > a");
const tabsId = [...getTabs()].map((node) => node.getAttribute("href").slice(1));
const getVisitorInv = () => document.querySelector("section[data-type='visitor']");
const findTabId = (hash) => tabsId.find((tab) => (0,_utils__WEBPACK_IMPORTED_MODULE_1__.fuzzySearch)(hash, tab)) || tabsId[0];
function toggleBgSound(id) {
    switch (findTabId(id)) {
        case "kitchen":
            (0,_inventory_soundController__WEBPACK_IMPORTED_MODULE_0__.disconnectBgEq)();
            break;
        default:
            (0,_inventory_soundController__WEBPACK_IMPORTED_MODULE_0__.connectBgEq)();
            break;
    }
}
function toggleTabSounds(newId, oldId) {
    switch (findTabId(newId)) {
        case "kitchen":
            if (findTabId(oldId) === findTabId(newId)) {
                break;
            }
            if ((0,_inventory_soundController__WEBPACK_IMPORTED_MODULE_0__.getCloseDoorSound)().currentTime && !(0,_inventory_soundController__WEBPACK_IMPORTED_MODULE_0__.getCloseDoorSound)().paused) {
                (0,_inventory_soundController__WEBPACK_IMPORTED_MODULE_0__.getCloseDoorSound)().pause();
                (0,_inventory_soundController__WEBPACK_IMPORTED_MODULE_0__.getCloseDoorSound)().currentTime = 0;
            }
            (0,_inventory_soundController__WEBPACK_IMPORTED_MODULE_0__.getOpenDoorSound)().play();
            break;
        case "quest":
        case "pet":
            if ((findTabId(oldId) === "pet" && findTabId(newId) === "quest") ||
                (findTabId(oldId) === "quest" && findTabId(newId) === "pet") ||
                (findTabId(oldId) === "" && findTabId(newId) === "quest") ||
                (findTabId(oldId) === "" && findTabId(newId) === "pet") ||
                findTabId(oldId) === findTabId(newId)) {
                break;
            }
            if ((0,_inventory_soundController__WEBPACK_IMPORTED_MODULE_0__.getOpenDoorSound)().currentTime && !(0,_inventory_soundController__WEBPACK_IMPORTED_MODULE_0__.getOpenDoorSound)().paused) {
                (0,_inventory_soundController__WEBPACK_IMPORTED_MODULE_0__.getOpenDoorSound)().pause();
                (0,_inventory_soundController__WEBPACK_IMPORTED_MODULE_0__.getOpenDoorSound)().currentTime = 0;
            }
            (0,_inventory_soundController__WEBPACK_IMPORTED_MODULE_0__.getCloseDoorSound)().play();
            break;
        default:
            break;
    }
}
function toggleWrapper(wrapper) {
    wrapper.classList.toggle("visually-hidden");
    wrapper.setAttribute("aria-hidden", wrapper.classList.contains("visually-hidden").toString());
}
function toggleVisitorInv(id, wrapper) {
    if (findTabId(id) !== "pet" && findTabId(id) !== "kitchen")
        return;
    findTabId(id) === "pet"
        ? (getVisitorInv().id = "left-menu-section")
        : (getVisitorInv().id = "right-menu-section");
    if (![...wrapper.childNodes].includes(getVisitorInv())) {
        wrapper.appendChild(getVisitorInv());
    }
}
function toggleTemp(id) {
    switch (findTabId(id)) {
        case "kitchen":
            document.body.style.background = "var(--warm-cold)";
            document.querySelector("header").dataset.temp = "warm";
            break;
        default:
            document.body.style.background = "var(--cold-warm)";
            document.querySelector("header").dataset.temp = "cold";
            break;
    }
}
class keyboardController {
    constructor() {
        _keyboardController_instances.add(this);
        window.addEventListener("keydown", (event) => {
            if (__classPrivateFieldGet(this, _keyboardController_instances, "m", _keyboardController_validateKey).call(this, event)) {
                getTabs()[parseInt(event.key) - 1].click();
                // In firefox, the focus is not set without a small timeout
                setTimeout(() => getTabs()[parseInt(event.key) - 1].focus(), 1);
            }
        });
    }
}
_keyboardController_instances = new WeakSet(), _keyboardController_validateKey = function _keyboardController_validateKey(event) {
    return parseInt(event.key) > 0 && parseInt(event.key) <= getTabs().length;
};


/***/ }),

/***/ "./src/tabs/index.ts":
/*!***************************!*\
  !*** ./src/tabs/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/tabs/helpers.ts");

window.addEventListener("DOMContentLoaded", init);
function init() {
    new _helpers__WEBPACK_IMPORTED_MODULE_0__.keyboardController();
    window.addEventListener("hashchange", tabChange);
    const getInitId = () => window.location.hash.slice(1);
    const wrapper = document.getElementById((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.findTabId)(getInitId()));
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.toggleBgSound)(getInitId());
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.toggleTemp)(getInitId());
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.toggleVisitorInv)(getInitId(), wrapper);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.toggleWrapper)(wrapper);
    window.removeEventListener("DOMContentLoaded", init);
}
function tabChange(event) {
    const getOldId = () => new URL(event.oldURL).hash.slice(1);
    const getNewId = () => new URL(event.newURL).hash.slice(1);
    const oldWrapper = document.getElementById((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.findTabId)(getOldId()));
    const newWrapper = document.getElementById((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.findTabId)(getNewId()));
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.toggleTemp)(getNewId());
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.toggleVisitorInv)(getNewId(), newWrapper);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.toggleBgSound)(getNewId());
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.toggleTabSounds)(getNewId(), getOldId());
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.toggleWrapper)(oldWrapper);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.toggleWrapper)(newWrapper);
}


/***/ }),

/***/ "./src/utils/fuzzySearch.ts":
/*!**********************************!*\
  !*** ./src/utils/fuzzySearch.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fuzzySearch: () => (/* binding */ fuzzySearch)
/* harmony export */ });
function fuzzySearch(needle, haystack) {
    const hlen = haystack.length;
    const nlen = needle.length;
    if (nlen > hlen) {
        return false;
    }
    if (nlen === hlen) {
        return needle === haystack;
    }
    outer: for (var i = 0, j = 0; i < nlen; i++) {
        var nch = needle.charCodeAt(i);
        while (j < hlen) {
            if (haystack.charCodeAt(j++) === nch) {
                continue outer;
            }
        }
        return false;
    }
    return true;
}


/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fuzzySearch: () => (/* reexport safe */ _fuzzySearch__WEBPACK_IMPORTED_MODULE_0__.fuzzySearch)
/* harmony export */ });
/* harmony import */ var _fuzzySearch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fuzzySearch */ "./src/utils/fuzzySearch.ts");



/***/ }),

/***/ "./public/sounds/dog-barking.mp3":
/*!***************************************!*\
  !*** ./public/sounds/dog-barking.mp3 ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ffba58b413f4fc7f1d97.mp3";

/***/ }),

/***/ "./public/sounds/dog-hug.mp3":
/*!***********************************!*\
  !*** ./public/sounds/dog-hug.mp3 ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "38219dd8d2c8be7aeb9b.mp3";

/***/ }),

/***/ "./public/sounds/dog-panting.mp3":
/*!***************************************!*\
  !*** ./public/sounds/dog-panting.mp3 ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7db115c146d09dd6042b.mp3";

/***/ }),

/***/ "./public/sounds/door-closing.mp3":
/*!****************************************!*\
  !*** ./public/sounds/door-closing.mp3 ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7abfc7d94fba45702f2d.mp3";

/***/ }),

/***/ "./public/sounds/door-opening.mp3":
/*!****************************************!*\
  !*** ./public/sounds/door-opening.mp3 ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "776cdc264b86a752b561.mp3";

/***/ }),

/***/ "./public/sounds/munch.mp3":
/*!*********************************!*\
  !*** ./public/sounds/munch.mp3 ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b225e24126a01f228c6d.mp3";

/***/ }),

/***/ "./public/sounds/people-talking-in-small-room.mp3":
/*!********************************************************!*\
  !*** ./public/sounds/people-talking-in-small-room.mp3 ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "58c325dcea45bc302f10.mp3";

/***/ }),

/***/ "./public/sounds/pick-up.mp3":
/*!***********************************!*\
  !*** ./public/sounds/pick-up.mp3 ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ba2a845afb3d24884ea4.mp3";

/***/ }),

/***/ "./public/sounds/select.mp3":
/*!**********************************!*\
  !*** ./public/sounds/select.mp3 ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2d103f3b3817ebf46d20.mp3";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/tabs/index.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ0U7QUFDZ0I7QUFDN0I7QUFDQztBQUNMO0FBQ1U7QUFDRztBQUNSO0FBQzZHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1QyQjtBQUNoTCxnQ0FBZ0MsdURBQVc7QUFDM0MsNkJBQTZCLG9EQUFRO0FBQ3JDLGtDQUFrQyw4REFBa0I7QUFDcEQsbUNBQW1DLDREQUFnQjtBQUNuRCw4QkFBOEIsOERBQWtCO0FBQ2hELGdDQUFnQyx1REFBVztBQUMzQyxnQ0FBZ0MsdURBQVc7QUFDM0Msb0NBQW9DLDJEQUFlO0FBQ25ELGlDQUFpQyx3REFBWTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7QUFDTTtBQUNBO0FBQ0E7QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ087QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBLDhCQUE4QixTQUFJLElBQUksU0FBSTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2lIO0FBQzFFO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNPLGlEQUFpRCxtREFBVztBQUM1RDtBQUNQO0FBQ0E7QUFDQSxZQUFZLDBFQUFjO0FBQzFCO0FBQ0E7QUFDQSxZQUFZLHVFQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw2RUFBaUIsbUJBQW1CLDZFQUFpQjtBQUNyRSxnQkFBZ0IsNkVBQWlCO0FBQ2pDLGdCQUFnQiw2RUFBaUI7QUFDakM7QUFDQSxZQUFZLDRFQUFnQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw0RUFBZ0IsbUJBQW1CLDRFQUFnQjtBQUNuRSxnQkFBZ0IsNEVBQWdCO0FBQ2hDLGdCQUFnQiw0RUFBZ0I7QUFDaEM7QUFDQSxZQUFZLDZFQUFpQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0Z3STtBQUN4STtBQUNBO0FBQ0EsUUFBUSx3REFBa0I7QUFDMUI7QUFDQTtBQUNBLDRDQUE0QyxtREFBUztBQUNyRCxJQUFJLHVEQUFhO0FBQ2pCLElBQUksb0RBQVU7QUFDZCxJQUFJLDBEQUFnQjtBQUNwQixJQUFJLHVEQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsbURBQVM7QUFDeEQsK0NBQStDLG1EQUFTO0FBQ3hELElBQUksb0RBQVU7QUFDZCxJQUFJLDBEQUFnQjtBQUNwQixJQUFJLHVEQUFhO0FBQ2pCLElBQUkseURBQWU7QUFDbkIsSUFBSSx1REFBYTtBQUNqQixJQUFJLHVEQUFhO0FBQ2pCOzs7Ozs7Ozs7Ozs7Ozs7QUN4Qk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLFVBQVU7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQjRDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9nZ2Vycy8uL3B1YmxpYy9zb3VuZHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcG9nZ2Vycy8uL3NyYy9pbnZlbnRvcnkvc291bmRDb250cm9sbGVyLnRzIiwid2VicGFjazovL3BvZ2dlcnMvLi9zcmMvdGFicy9oZWxwZXJzLnRzIiwid2VicGFjazovL3BvZ2dlcnMvLi9zcmMvdGFicy9pbmRleC50cyIsIndlYnBhY2s6Ly9wb2dnZXJzLy4vc3JjL3V0aWxzL2Z1enp5U2VhcmNoLnRzIiwid2VicGFjazovL3BvZ2dlcnMvLi9zcmMvdXRpbHMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRvb3JDbG9zaW5nU291bmQgZnJvbSBcIi4vZG9vci1jbG9zaW5nLm1wM1wiO1xuaW1wb3J0IGRvb3JPcGVuZW5pbmdTb3VuZCBmcm9tIFwiLi9kb29yLW9wZW5pbmcubXAzXCI7XG5pbXBvcnQgcGVvcGxlVGFsa2luZ1NvdW5kIGZyb20gXCIuL3Blb3BsZS10YWxraW5nLWluLXNtYWxsLXJvb20ubXAzXCI7XG5pbXBvcnQgc2VsZWN0U291bmQgZnJvbSBcIi4vc2VsZWN0Lm1wM1wiO1xuaW1wb3J0IHBpY2tVcFNvdW5kIGZyb20gXCIuL3BpY2stdXAubXAzXCI7XG5pbXBvcnQgZWF0U291bmQgZnJvbSBcIi4vbXVuY2gubXAzXCI7XG5pbXBvcnQgZG9nQmFya1NvdW5kIGZyb20gXCIuL2RvZy1iYXJraW5nLm1wM1wiO1xuaW1wb3J0IGRvZ1BhbnRpbmdTb3VuZCBmcm9tIFwiLi9kb2ctcGFudGluZy5tcDNcIjtcbmltcG9ydCBkb2dIdWdTb3VuZCBmcm9tIFwiLi9kb2ctaHVnLm1wM1wiO1xuZXhwb3J0IHsgZG9vckNsb3NpbmdTb3VuZCwgZG9vck9wZW5lbmluZ1NvdW5kLCBwZW9wbGVUYWxraW5nU291bmQsIHNlbGVjdFNvdW5kLCBlYXRTb3VuZCwgcGlja1VwU291bmQsIGRvZ1BhbnRpbmdTb3VuZCwgZG9nSHVnU291bmQsIGRvZ0JhcmtTb3VuZCwgfTtcbiIsImltcG9ydCB7IGRvb3JDbG9zaW5nU291bmQsIGRvb3JPcGVuZW5pbmdTb3VuZCwgZWF0U291bmQsIHBlb3BsZVRhbGtpbmdTb3VuZCwgc2VsZWN0U291bmQsIHBpY2tVcFNvdW5kLCBkb2dIdWdTb3VuZCwgZG9nUGFudGluZ1NvdW5kLCBkb2dCYXJrU291bmQsIH0gZnJvbSBcIi4uLy4uL3B1YmxpYy9zb3VuZHNcIjtcbmNvbnN0IHNlbGVjdFNvdW5kRWwgPSBuZXcgQXVkaW8oc2VsZWN0U291bmQpO1xuY29uc3QgZWF0U291bmRFbCA9IG5ldyBBdWRpbyhlYXRTb3VuZCk7XG5jb25zdCBvcGVuRG9vclNvdW5kRWwgPSBuZXcgQXVkaW8oZG9vck9wZW5lbmluZ1NvdW5kKTtcbmNvbnN0IGNsb3NlRG9vclNvdW5kRWwgPSBuZXcgQXVkaW8oZG9vckNsb3NpbmdTb3VuZCk7XG5jb25zdCB0YWxrU291bmRFbCA9IG5ldyBBdWRpbyhwZW9wbGVUYWxraW5nU291bmQpO1xuY29uc3QgcGlja1VwU291bmRFbCA9IG5ldyBBdWRpbyhwaWNrVXBTb3VuZCk7XG5jb25zdCBkb2dIdWdTb3VuZEVsID0gbmV3IEF1ZGlvKGRvZ0h1Z1NvdW5kKTtcbmNvbnN0IGRvZ1BhbnRpbmdTb3VuZEVsID0gbmV3IEF1ZGlvKGRvZ1BhbnRpbmdTb3VuZCk7XG5jb25zdCBkb2dCYXJrU291bmRFbCA9IG5ldyBBdWRpbyhkb2dCYXJrU291bmQpO1xuY29uc3QgZ2V0RGFtYWdlU2hhZGVyID0gKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYW1hZ2Utc2hhZGVyXCIpO1xuY29uc3QgZ2V0UHJvZ3Jlc3MgPSAoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNhdHVyYXRpb25cIik7XG5jb25zdCBnZXRDaGFyYWN0ZXIgPSAoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXJhY3RlclwiKTtcbmNvbnN0IGdldFN0ZWFtUGFydGljbGUgPSAoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0ZWFtLXBhcnRpY2xlXCIpO1xuY29uc3QgZ2V0TGllQ2hhcmFjdGVyID0gKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGFyYWN0ZXItbGllXCIpO1xuZG9nSHVnU291bmRFbC5hZGRFdmVudExpc3RlbmVyKFwicGxheVwiLCAoKSA9PiB7XG4gICAgZ2V0RGFtYWdlU2hhZGVyKCkuc3R5bGUubWl4QmxlbmRNb2RlID0gXCJub3JtYWxcIjtcbiAgICBnZXREYW1hZ2VTaGFkZXIoKS5zdHlsZS5vcGFjaXR5ID0gXCI1MCVcIjtcbiAgICBnZXREYW1hZ2VTaGFkZXIoKS5hcmlhSGlkZGVuID0gXCJmYWxzZVwiO1xufSk7XG5kb2dIdWdTb3VuZEVsLmFkZEV2ZW50TGlzdGVuZXIoXCJlbmRlZFwiLCAoKSA9PiB7XG4gICAgZ2V0RGFtYWdlU2hhZGVyKCkuc3R5bGUubWl4QmxlbmRNb2RlID0gXCJodWVcIjtcbiAgICBnZXREYW1hZ2VTaGFkZXIoKS5zdHlsZS5vcGFjaXR5ID0gXCIxJVwiO1xuICAgIGdldERhbWFnZVNoYWRlcigpLmFyaWFIaWRkZW4gPSBcInRydWVcIjtcbiAgICBpZiAoZ2V0UHJvZ3Jlc3MoKS52YWx1ZSA8PSAwKSB7XG4gICAgICAgIGdldENoYXJhY3RlcigpLnJlbW92ZSgpO1xuICAgICAgICBnZXRMaWVDaGFyYWN0ZXIoKS5yZW1vdmUoKTtcbiAgICAgICAgZ2V0RGFtYWdlU2hhZGVyKCkucmVtb3ZlKCk7XG4gICAgICAgIGdldFN0ZWFtUGFydGljbGUoKS5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzcGxheS1ub25lXCIpO1xuICAgICAgICBnZXRTdGVhbVBhcnRpY2xlKCkuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbnN0YXJ0XCIsIGZ1bmN0aW9uIHN0ZWFtUGFydGljbGVJbml0KCkge1xuICAgICAgICAgICAgZ2V0U3RlYW1QYXJ0aWNsZSgpLmFyaWFIaWRkZW4gPSBcImZhbHNlXCI7XG4gICAgICAgICAgICBnZXRTdGVhbVBhcnRpY2xlKCkuYWx0ID0gXCJlZmZlY3Qgb2YgYSBkb2cgZGlzYXBwZWFyaW5nXCI7XG4gICAgICAgICAgICBnZXRTdGVhbVBhcnRpY2xlKCkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbnN0YXJ0XCIsIHN0ZWFtUGFydGljbGVJbml0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGdldFN0ZWFtUGFydGljbGUoKS5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGZ1bmN0aW9uIHN0ZWFtUGFydGljbGVFbmQoKSB7XG4gICAgICAgICAgICBnZXRTdGVhbVBhcnRpY2xlKCkuYXJpYUhpZGRlbiA9IFwidHJ1ZVwiO1xuICAgICAgICAgICAgZ2V0U3RlYW1QYXJ0aWNsZSgpLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgc3RlYW1QYXJ0aWNsZUVuZCk7XG4gICAgICAgICAgICBnZXRTdGVhbVBhcnRpY2xlKCkucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBnZXRTdGVhbVBhcnRpY2xlKCkuY2xhc3NMaXN0LmFkZChcImZhZGUtb3V0XCIpO1xuICAgIH1cbn0pO1xuZXhwb3J0IGNvbnN0IGdldERvZ0h1Z1NvdW5kRWwgPSAoKSA9PiBkb2dIdWdTb3VuZEVsO1xuZXhwb3J0IGNvbnN0IGdldERvZ1BhbnRpbmdTb3VuZEVsID0gKCkgPT4gZG9nUGFudGluZ1NvdW5kRWw7XG5leHBvcnQgY29uc3QgZ2V0RG9nQmFya1NvdW5kRWwgPSAoKSA9PiBkb2dCYXJrU291bmRFbDtcbmRvZ0h1Z1NvdW5kRWwudm9sdW1lID0gMC43O1xubGV0IGZvb2RSZWFjdGlvblNvdW5kO1xuY29uc3QgZ2V0Rm9vZFJlYWN0aW9uU291bmQgPSAoKSA9PiBmb29kUmVhY3Rpb25Tb3VuZDtcbmV4cG9ydCBjb25zdCBzZXRGb29kUmVhY3Rpb25Tb3VuZCA9IChyZWFjdFNvdW5kKSA9PiAoZm9vZFJlYWN0aW9uU291bmQgPSByZWFjdFNvdW5kKTtcbmVhdFNvdW5kRWwuYWRkRXZlbnRMaXN0ZW5lcihcImVuZGVkXCIsIGZ1bmN0aW9uIGZvb2RSZWFjdGlvbigpIHtcbiAgICBpZiAoZ2V0Rm9vZFJlYWN0aW9uU291bmQoKSkge1xuICAgICAgICAvLyBsaXR0bGUgZGVsYXlcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBnZXRGb29kUmVhY3Rpb25Tb3VuZCgpLnBsYXkoKSwgNSk7XG4gICAgfVxufSk7XG5vcGVuRG9vclNvdW5kRWwudm9sdW1lID0gMC4zO1xuY2xvc2VEb29yU291bmRFbC52b2x1bWUgPSAwLjI1O1xudGFsa1NvdW5kRWwudm9sdW1lID0gMC4zO1xuZXhwb3J0IGNvbnN0IGdldFNlbGVjdFNvdW5kID0gKCkgPT4gc2VsZWN0U291bmRFbDtcbmV4cG9ydCBjb25zdCBnZXRFYXRTb3VuZCA9ICgpID0+IGVhdFNvdW5kRWw7XG5leHBvcnQgY29uc3QgZ2V0T3BlbkRvb3JTb3VuZCA9ICgpID0+IG9wZW5Eb29yU291bmRFbDtcbmV4cG9ydCBjb25zdCBnZXRDbG9zZURvb3JTb3VuZCA9ICgpID0+IGNsb3NlRG9vclNvdW5kRWw7XG5leHBvcnQgY29uc3QgZ2V0UGlja1VwU291bmQgPSAoKSA9PiBwaWNrVXBTb3VuZEVsO1xuY29uc3QgZ2V0VGFsa1NvdW5kID0gKCkgPT4gdGFsa1NvdW5kRWw7XG5nZXRUYWxrU291bmQoKS5hdXRvcGxheSA9IHRydWU7XG5nZXRUYWxrU291bmQoKS5sb29wID0gdHJ1ZTtcbmNvbnN0IHNlbGVjdEF1ZGlvQ3R4ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuY29uc3QgcGlja1VwQXVkaW9DdHggPSBuZXcgQXVkaW9Db250ZXh0KCk7XG5jb25zdCBzZWxlY3RTb3VyY2UgPSBzZWxlY3RBdWRpb0N0eC5jcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UoZ2V0U2VsZWN0U291bmQoKSk7XG5jb25zdCBwaWNrVXBTb3VyY2UgPSBwaWNrVXBBdWRpb0N0eC5jcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UoZ2V0UGlja1VwU291bmQoKSk7XG5jb25zdCBzZWxlY3RHYWluID0gc2VsZWN0QXVkaW9DdHguY3JlYXRlR2FpbigpO1xuY29uc3QgcGlja1VwR2FpbiA9IHBpY2tVcEF1ZGlvQ3R4LmNyZWF0ZUdhaW4oKTtcbnNlbGVjdEdhaW4uZ2Fpbi52YWx1ZSA9IDEuMjU7XG5waWNrVXBHYWluLmdhaW4udmFsdWUgPSAxLjI1O1xuc2VsZWN0U291cmNlLmNvbm5lY3Qoc2VsZWN0R2FpbikuY29ubmVjdChzZWxlY3RBdWRpb0N0eC5kZXN0aW5hdGlvbik7XG5waWNrVXBTb3VyY2UuY29ubmVjdChwaWNrVXBHYWluKS5jb25uZWN0KHBpY2tVcEF1ZGlvQ3R4LmRlc3RpbmF0aW9uKTtcbmNvbnN0IGJnQXVkaW9DdHggPSBuZXcgQXVkaW9Db250ZXh0KCk7XG5jb25zdCBiZ1NvdXJjZSA9IGJnQXVkaW9DdHguY3JlYXRlTWVkaWFFbGVtZW50U291cmNlKGdldFRhbGtTb3VuZCgpKTtcbmNvbnN0IGJnRXEgPSBiZ0F1ZGlvQ3R4LmNyZWF0ZUJpcXVhZEZpbHRlcigpO1xuZXhwb3J0IGNvbnN0IGNvbm5lY3RCZ0VxID0gKCkgPT4ge1xuICAgIGJnU291cmNlLmRpc2Nvbm5lY3QoKTtcbiAgICBiZ0VxLnR5cGUgPSBcImJhbmRwYXNzXCI7XG4gICAgYmdTb3VyY2UuY29ubmVjdChiZ0VxKTtcbiAgICBiZ0VxLmNvbm5lY3QoYmdBdWRpb0N0eC5kZXN0aW5hdGlvbik7XG59O1xuZXhwb3J0IGNvbnN0IGRpc2Nvbm5lY3RCZ0VxID0gKCkgPT4ge1xuICAgIGJnRXEuZGlzY29ubmVjdCgpO1xuICAgIGJnU291cmNlLmNvbm5lY3QoYmdBdWRpb0N0eC5kZXN0aW5hdGlvbik7XG59O1xuIiwidmFyIF9fY2xhc3NQcml2YXRlRmllbGRHZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRHZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn07XG52YXIgX2tleWJvYXJkQ29udHJvbGxlcl9pbnN0YW5jZXMsIF9rZXlib2FyZENvbnRyb2xsZXJfdmFsaWRhdGVLZXk7XG5pbXBvcnQgeyBjb25uZWN0QmdFcSwgZGlzY29ubmVjdEJnRXEsIGdldENsb3NlRG9vclNvdW5kLCBnZXRPcGVuRG9vclNvdW5kLCB9IGZyb20gXCIuLi9pbnZlbnRvcnkvc291bmRDb250cm9sbGVyXCI7XG5pbXBvcnQgeyBmdXp6eVNlYXJjaCB9IGZyb20gXCIuLi91dGlsc1wiO1xuY29uc3QgZ2V0VGFicyA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudS10YWIgPiBhXCIpO1xuY29uc3QgdGFic0lkID0gWy4uLmdldFRhYnMoKV0ubWFwKChub2RlKSA9PiBub2RlLmdldEF0dHJpYnV0ZShcImhyZWZcIikuc2xpY2UoMSkpO1xuY29uc3QgZ2V0VmlzaXRvckludiA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWN0aW9uW2RhdGEtdHlwZT0ndmlzaXRvciddXCIpO1xuZXhwb3J0IGNvbnN0IGZpbmRUYWJJZCA9IChoYXNoKSA9PiB0YWJzSWQuZmluZCgodGFiKSA9PiBmdXp6eVNlYXJjaChoYXNoLCB0YWIpKSB8fCB0YWJzSWRbMF07XG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlQmdTb3VuZChpZCkge1xuICAgIHN3aXRjaCAoZmluZFRhYklkKGlkKSkge1xuICAgICAgICBjYXNlIFwia2l0Y2hlblwiOlxuICAgICAgICAgICAgZGlzY29ubmVjdEJnRXEoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY29ubmVjdEJnRXEoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVUYWJTb3VuZHMobmV3SWQsIG9sZElkKSB7XG4gICAgc3dpdGNoIChmaW5kVGFiSWQobmV3SWQpKSB7XG4gICAgICAgIGNhc2UgXCJraXRjaGVuXCI6XG4gICAgICAgICAgICBpZiAoZmluZFRhYklkKG9sZElkKSA9PT0gZmluZFRhYklkKG5ld0lkKSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGdldENsb3NlRG9vclNvdW5kKCkuY3VycmVudFRpbWUgJiYgIWdldENsb3NlRG9vclNvdW5kKCkucGF1c2VkKSB7XG4gICAgICAgICAgICAgICAgZ2V0Q2xvc2VEb29yU291bmQoKS5wYXVzZSgpO1xuICAgICAgICAgICAgICAgIGdldENsb3NlRG9vclNvdW5kKCkuY3VycmVudFRpbWUgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ2V0T3BlbkRvb3JTb3VuZCgpLnBsYXkoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwicXVlc3RcIjpcbiAgICAgICAgY2FzZSBcInBldFwiOlxuICAgICAgICAgICAgaWYgKChmaW5kVGFiSWQob2xkSWQpID09PSBcInBldFwiICYmIGZpbmRUYWJJZChuZXdJZCkgPT09IFwicXVlc3RcIikgfHxcbiAgICAgICAgICAgICAgICAoZmluZFRhYklkKG9sZElkKSA9PT0gXCJxdWVzdFwiICYmIGZpbmRUYWJJZChuZXdJZCkgPT09IFwicGV0XCIpIHx8XG4gICAgICAgICAgICAgICAgKGZpbmRUYWJJZChvbGRJZCkgPT09IFwiXCIgJiYgZmluZFRhYklkKG5ld0lkKSA9PT0gXCJxdWVzdFwiKSB8fFxuICAgICAgICAgICAgICAgIChmaW5kVGFiSWQob2xkSWQpID09PSBcIlwiICYmIGZpbmRUYWJJZChuZXdJZCkgPT09IFwicGV0XCIpIHx8XG4gICAgICAgICAgICAgICAgZmluZFRhYklkKG9sZElkKSA9PT0gZmluZFRhYklkKG5ld0lkKSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGdldE9wZW5Eb29yU291bmQoKS5jdXJyZW50VGltZSAmJiAhZ2V0T3BlbkRvb3JTb3VuZCgpLnBhdXNlZCkge1xuICAgICAgICAgICAgICAgIGdldE9wZW5Eb29yU291bmQoKS5wYXVzZSgpO1xuICAgICAgICAgICAgICAgIGdldE9wZW5Eb29yU291bmQoKS5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnZXRDbG9zZURvb3JTb3VuZCgpLnBsYXkoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVdyYXBwZXIod3JhcHBlcikge1xuICAgIHdyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZShcInZpc3VhbGx5LWhpZGRlblwiKTtcbiAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIHdyYXBwZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwidmlzdWFsbHktaGlkZGVuXCIpLnRvU3RyaW5nKCkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVZpc2l0b3JJbnYoaWQsIHdyYXBwZXIpIHtcbiAgICBpZiAoZmluZFRhYklkKGlkKSAhPT0gXCJwZXRcIiAmJiBmaW5kVGFiSWQoaWQpICE9PSBcImtpdGNoZW5cIilcbiAgICAgICAgcmV0dXJuO1xuICAgIGZpbmRUYWJJZChpZCkgPT09IFwicGV0XCJcbiAgICAgICAgPyAoZ2V0VmlzaXRvckludigpLmlkID0gXCJsZWZ0LW1lbnUtc2VjdGlvblwiKVxuICAgICAgICA6IChnZXRWaXNpdG9ySW52KCkuaWQgPSBcInJpZ2h0LW1lbnUtc2VjdGlvblwiKTtcbiAgICBpZiAoIVsuLi53cmFwcGVyLmNoaWxkTm9kZXNdLmluY2x1ZGVzKGdldFZpc2l0b3JJbnYoKSkpIHtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChnZXRWaXNpdG9ySW52KCkpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVUZW1wKGlkKSB7XG4gICAgc3dpdGNoIChmaW5kVGFiSWQoaWQpKSB7XG4gICAgICAgIGNhc2UgXCJraXRjaGVuXCI6XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSBcInZhcigtLXdhcm0tY29sZClcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIikuZGF0YXNldC50ZW1wID0gXCJ3YXJtXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IFwidmFyKC0tY29sZC13YXJtKVwiO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKS5kYXRhc2V0LnRlbXAgPSBcImNvbGRcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBrZXlib2FyZENvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBfa2V5Ym9hcmRDb250cm9sbGVyX2luc3RhbmNlcy5hZGQodGhpcyk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9rZXlib2FyZENvbnRyb2xsZXJfaW5zdGFuY2VzLCBcIm1cIiwgX2tleWJvYXJkQ29udHJvbGxlcl92YWxpZGF0ZUtleSkuY2FsbCh0aGlzLCBldmVudCkpIHtcbiAgICAgICAgICAgICAgICBnZXRUYWJzKClbcGFyc2VJbnQoZXZlbnQua2V5KSAtIDFdLmNsaWNrKCk7XG4gICAgICAgICAgICAgICAgLy8gSW4gZmlyZWZveCwgdGhlIGZvY3VzIGlzIG5vdCBzZXQgd2l0aG91dCBhIHNtYWxsIHRpbWVvdXRcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGdldFRhYnMoKVtwYXJzZUludChldmVudC5rZXkpIC0gMV0uZm9jdXMoKSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbl9rZXlib2FyZENvbnRyb2xsZXJfaW5zdGFuY2VzID0gbmV3IFdlYWtTZXQoKSwgX2tleWJvYXJkQ29udHJvbGxlcl92YWxpZGF0ZUtleSA9IGZ1bmN0aW9uIF9rZXlib2FyZENvbnRyb2xsZXJfdmFsaWRhdGVLZXkoZXZlbnQpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoZXZlbnQua2V5KSA+IDAgJiYgcGFyc2VJbnQoZXZlbnQua2V5KSA8PSBnZXRUYWJzKCkubGVuZ3RoO1xufTtcbiIsImltcG9ydCB7IGZpbmRUYWJJZCwga2V5Ym9hcmRDb250cm9sbGVyLCB0b2dnbGVXcmFwcGVyLCB0b2dnbGVWaXNpdG9ySW52LCB0b2dnbGVUZW1wLCB0b2dnbGVUYWJTb3VuZHMsIHRvZ2dsZUJnU291bmQsIH0gZnJvbSBcIi4vaGVscGVyc1wiO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGluaXQpO1xuZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBuZXcga2V5Ym9hcmRDb250cm9sbGVyKCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsIHRhYkNoYW5nZSk7XG4gICAgY29uc3QgZ2V0SW5pdElkID0gKCkgPT4gd2luZG93LmxvY2F0aW9uLmhhc2guc2xpY2UoMSk7XG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZpbmRUYWJJZChnZXRJbml0SWQoKSkpO1xuICAgIHRvZ2dsZUJnU291bmQoZ2V0SW5pdElkKCkpO1xuICAgIHRvZ2dsZVRlbXAoZ2V0SW5pdElkKCkpO1xuICAgIHRvZ2dsZVZpc2l0b3JJbnYoZ2V0SW5pdElkKCksIHdyYXBwZXIpO1xuICAgIHRvZ2dsZVdyYXBwZXIod3JhcHBlcik7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGluaXQpO1xufVxuZnVuY3Rpb24gdGFiQ2hhbmdlKGV2ZW50KSB7XG4gICAgY29uc3QgZ2V0T2xkSWQgPSAoKSA9PiBuZXcgVVJMKGV2ZW50Lm9sZFVSTCkuaGFzaC5zbGljZSgxKTtcbiAgICBjb25zdCBnZXROZXdJZCA9ICgpID0+IG5ldyBVUkwoZXZlbnQubmV3VVJMKS5oYXNoLnNsaWNlKDEpO1xuICAgIGNvbnN0IG9sZFdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmaW5kVGFiSWQoZ2V0T2xkSWQoKSkpO1xuICAgIGNvbnN0IG5ld1dyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmaW5kVGFiSWQoZ2V0TmV3SWQoKSkpO1xuICAgIHRvZ2dsZVRlbXAoZ2V0TmV3SWQoKSk7XG4gICAgdG9nZ2xlVmlzaXRvckludihnZXROZXdJZCgpLCBuZXdXcmFwcGVyKTtcbiAgICB0b2dnbGVCZ1NvdW5kKGdldE5ld0lkKCkpO1xuICAgIHRvZ2dsZVRhYlNvdW5kcyhnZXROZXdJZCgpLCBnZXRPbGRJZCgpKTtcbiAgICB0b2dnbGVXcmFwcGVyKG9sZFdyYXBwZXIpO1xuICAgIHRvZ2dsZVdyYXBwZXIobmV3V3JhcHBlcik7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZnV6enlTZWFyY2gobmVlZGxlLCBoYXlzdGFjaykge1xuICAgIGNvbnN0IGhsZW4gPSBoYXlzdGFjay5sZW5ndGg7XG4gICAgY29uc3QgbmxlbiA9IG5lZWRsZS5sZW5ndGg7XG4gICAgaWYgKG5sZW4gPiBobGVuKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKG5sZW4gPT09IGhsZW4pIHtcbiAgICAgICAgcmV0dXJuIG5lZWRsZSA9PT0gaGF5c3RhY2s7XG4gICAgfVxuICAgIG91dGVyOiBmb3IgKHZhciBpID0gMCwgaiA9IDA7IGkgPCBubGVuOyBpKyspIHtcbiAgICAgICAgdmFyIG5jaCA9IG5lZWRsZS5jaGFyQ29kZUF0KGkpO1xuICAgICAgICB3aGlsZSAoaiA8IGhsZW4pIHtcbiAgICAgICAgICAgIGlmIChoYXlzdGFjay5jaGFyQ29kZUF0KGorKykgPT09IG5jaCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlIG91dGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG4iLCJleHBvcnQgeyBmdXp6eVNlYXJjaCB9IGZyb20gXCIuL2Z1enp5U2VhcmNoXCI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=