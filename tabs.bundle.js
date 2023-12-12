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
dogHugSoundEl.addEventListener("play", () => {
    getDamageShader().style.opacity = "50%";
    getDamageShader().ariaHidden = "false";
});
dogHugSoundEl.addEventListener("ended", () => {
    getDamageShader().style.opacity = "1%";
    getDamageShader().ariaHidden = "true";
    if (getProgress().value <= 0) {
        getCharacter().remove();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxVQUFVO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkI0QyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvZ2dlcnMvLi9wdWJsaWMvc291bmRzL2luZGV4LnRzIiwid2VicGFjazovL3BvZ2dlcnMvLi9zcmMvaW52ZW50b3J5L3NvdW5kQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9wb2dnZXJzLy4vc3JjL3RhYnMvaGVscGVycy50cyIsIndlYnBhY2s6Ly9wb2dnZXJzLy4vc3JjL3RhYnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcG9nZ2Vycy8uL3NyYy91dGlscy9mdXp6eVNlYXJjaC50cyIsIndlYnBhY2s6Ly9wb2dnZXJzLy4vc3JjL3V0aWxzL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkb29yQ2xvc2luZ1NvdW5kIGZyb20gXCIuL2Rvb3ItY2xvc2luZy5tcDNcIjtcbmltcG9ydCBkb29yT3BlbmVuaW5nU291bmQgZnJvbSBcIi4vZG9vci1vcGVuaW5nLm1wM1wiO1xuaW1wb3J0IHBlb3BsZVRhbGtpbmdTb3VuZCBmcm9tIFwiLi9wZW9wbGUtdGFsa2luZy1pbi1zbWFsbC1yb29tLm1wM1wiO1xuaW1wb3J0IHNlbGVjdFNvdW5kIGZyb20gXCIuL3NlbGVjdC5tcDNcIjtcbmltcG9ydCBwaWNrVXBTb3VuZCBmcm9tIFwiLi9waWNrLXVwLm1wM1wiO1xuaW1wb3J0IGVhdFNvdW5kIGZyb20gXCIuL211bmNoLm1wM1wiO1xuaW1wb3J0IGRvZ0JhcmtTb3VuZCBmcm9tIFwiLi9kb2ctYmFya2luZy5tcDNcIjtcbmltcG9ydCBkb2dQYW50aW5nU291bmQgZnJvbSBcIi4vZG9nLXBhbnRpbmcubXAzXCI7XG5pbXBvcnQgZG9nSHVnU291bmQgZnJvbSBcIi4vZG9nLWh1Zy5tcDNcIjtcbmV4cG9ydCB7IGRvb3JDbG9zaW5nU291bmQsIGRvb3JPcGVuZW5pbmdTb3VuZCwgcGVvcGxlVGFsa2luZ1NvdW5kLCBzZWxlY3RTb3VuZCwgZWF0U291bmQsIHBpY2tVcFNvdW5kLCBkb2dQYW50aW5nU291bmQsIGRvZ0h1Z1NvdW5kLCBkb2dCYXJrU291bmQsIH07XG4iLCJpbXBvcnQgeyBkb29yQ2xvc2luZ1NvdW5kLCBkb29yT3BlbmVuaW5nU291bmQsIGVhdFNvdW5kLCBwZW9wbGVUYWxraW5nU291bmQsIHNlbGVjdFNvdW5kLCBwaWNrVXBTb3VuZCwgZG9nSHVnU291bmQsIGRvZ1BhbnRpbmdTb3VuZCwgZG9nQmFya1NvdW5kLCB9IGZyb20gXCIuLi8uLi9wdWJsaWMvc291bmRzXCI7XG5jb25zdCBzZWxlY3RTb3VuZEVsID0gbmV3IEF1ZGlvKHNlbGVjdFNvdW5kKTtcbmNvbnN0IGVhdFNvdW5kRWwgPSBuZXcgQXVkaW8oZWF0U291bmQpO1xuY29uc3Qgb3BlbkRvb3JTb3VuZEVsID0gbmV3IEF1ZGlvKGRvb3JPcGVuZW5pbmdTb3VuZCk7XG5jb25zdCBjbG9zZURvb3JTb3VuZEVsID0gbmV3IEF1ZGlvKGRvb3JDbG9zaW5nU291bmQpO1xuY29uc3QgdGFsa1NvdW5kRWwgPSBuZXcgQXVkaW8ocGVvcGxlVGFsa2luZ1NvdW5kKTtcbmNvbnN0IHBpY2tVcFNvdW5kRWwgPSBuZXcgQXVkaW8ocGlja1VwU291bmQpO1xuY29uc3QgZG9nSHVnU291bmRFbCA9IG5ldyBBdWRpbyhkb2dIdWdTb3VuZCk7XG5jb25zdCBkb2dQYW50aW5nU291bmRFbCA9IG5ldyBBdWRpbyhkb2dQYW50aW5nU291bmQpO1xuY29uc3QgZG9nQmFya1NvdW5kRWwgPSBuZXcgQXVkaW8oZG9nQmFya1NvdW5kKTtcbmNvbnN0IGdldERhbWFnZVNoYWRlciA9ICgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGFtYWdlLXNoYWRlclwiKTtcbmNvbnN0IGdldFByb2dyZXNzID0gKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYXR1cmF0aW9uXCIpO1xuY29uc3QgZ2V0Q2hhcmFjdGVyID0gKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGFyYWN0ZXJcIik7XG5jb25zdCBnZXRTdGVhbVBhcnRpY2xlID0gKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGVhbS1wYXJ0aWNsZVwiKTtcbmRvZ0h1Z1NvdW5kRWwuYWRkRXZlbnRMaXN0ZW5lcihcInBsYXlcIiwgKCkgPT4ge1xuICAgIGdldERhbWFnZVNoYWRlcigpLnN0eWxlLm9wYWNpdHkgPSBcIjUwJVwiO1xuICAgIGdldERhbWFnZVNoYWRlcigpLmFyaWFIaWRkZW4gPSBcImZhbHNlXCI7XG59KTtcbmRvZ0h1Z1NvdW5kRWwuYWRkRXZlbnRMaXN0ZW5lcihcImVuZGVkXCIsICgpID0+IHtcbiAgICBnZXREYW1hZ2VTaGFkZXIoKS5zdHlsZS5vcGFjaXR5ID0gXCIxJVwiO1xuICAgIGdldERhbWFnZVNoYWRlcigpLmFyaWFIaWRkZW4gPSBcInRydWVcIjtcbiAgICBpZiAoZ2V0UHJvZ3Jlc3MoKS52YWx1ZSA8PSAwKSB7XG4gICAgICAgIGdldENoYXJhY3RlcigpLnJlbW92ZSgpO1xuICAgICAgICBnZXREYW1hZ2VTaGFkZXIoKS5yZW1vdmUoKTtcbiAgICAgICAgZ2V0U3RlYW1QYXJ0aWNsZSgpLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNwbGF5LW5vbmVcIik7XG4gICAgICAgIGdldFN0ZWFtUGFydGljbGUoKS5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uc3RhcnRcIiwgZnVuY3Rpb24gc3RlYW1QYXJ0aWNsZUluaXQoKSB7XG4gICAgICAgICAgICBnZXRTdGVhbVBhcnRpY2xlKCkuYXJpYUhpZGRlbiA9IFwiZmFsc2VcIjtcbiAgICAgICAgICAgIGdldFN0ZWFtUGFydGljbGUoKS5hbHQgPSBcImVmZmVjdCBvZiBhIGRvZyBkaXNhcHBlYXJpbmdcIjtcbiAgICAgICAgICAgIGdldFN0ZWFtUGFydGljbGUoKS5yZW1vdmVFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uc3RhcnRcIiwgc3RlYW1QYXJ0aWNsZUluaXQpO1xuICAgICAgICB9KTtcbiAgICAgICAgZ2V0U3RlYW1QYXJ0aWNsZSgpLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgZnVuY3Rpb24gc3RlYW1QYXJ0aWNsZUVuZCgpIHtcbiAgICAgICAgICAgIGdldFN0ZWFtUGFydGljbGUoKS5hcmlhSGlkZGVuID0gXCJ0cnVlXCI7XG4gICAgICAgICAgICBnZXRTdGVhbVBhcnRpY2xlKCkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBzdGVhbVBhcnRpY2xlRW5kKTtcbiAgICAgICAgICAgIGdldFN0ZWFtUGFydGljbGUoKS5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGdldFN0ZWFtUGFydGljbGUoKS5jbGFzc0xpc3QuYWRkKFwiZmFkZS1vdXRcIik7XG4gICAgfVxufSk7XG5leHBvcnQgY29uc3QgZ2V0RG9nSHVnU291bmRFbCA9ICgpID0+IGRvZ0h1Z1NvdW5kRWw7XG5leHBvcnQgY29uc3QgZ2V0RG9nUGFudGluZ1NvdW5kRWwgPSAoKSA9PiBkb2dQYW50aW5nU291bmRFbDtcbmV4cG9ydCBjb25zdCBnZXREb2dCYXJrU291bmRFbCA9ICgpID0+IGRvZ0JhcmtTb3VuZEVsO1xuZG9nSHVnU291bmRFbC52b2x1bWUgPSAwLjc7XG5sZXQgZm9vZFJlYWN0aW9uU291bmQ7XG5jb25zdCBnZXRGb29kUmVhY3Rpb25Tb3VuZCA9ICgpID0+IGZvb2RSZWFjdGlvblNvdW5kO1xuZXhwb3J0IGNvbnN0IHNldEZvb2RSZWFjdGlvblNvdW5kID0gKHJlYWN0U291bmQpID0+IChmb29kUmVhY3Rpb25Tb3VuZCA9IHJlYWN0U291bmQpO1xuZWF0U291bmRFbC5hZGRFdmVudExpc3RlbmVyKFwiZW5kZWRcIiwgZnVuY3Rpb24gZm9vZFJlYWN0aW9uKCkge1xuICAgIGlmIChnZXRGb29kUmVhY3Rpb25Tb3VuZCgpKSB7XG4gICAgICAgIC8vIGxpdHRsZSBkZWxheVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGdldEZvb2RSZWFjdGlvblNvdW5kKCkucGxheSgpLCA1KTtcbiAgICB9XG59KTtcbm9wZW5Eb29yU291bmRFbC52b2x1bWUgPSAwLjM7XG5jbG9zZURvb3JTb3VuZEVsLnZvbHVtZSA9IDAuMjU7XG50YWxrU291bmRFbC52b2x1bWUgPSAwLjM7XG5leHBvcnQgY29uc3QgZ2V0U2VsZWN0U291bmQgPSAoKSA9PiBzZWxlY3RTb3VuZEVsO1xuZXhwb3J0IGNvbnN0IGdldEVhdFNvdW5kID0gKCkgPT4gZWF0U291bmRFbDtcbmV4cG9ydCBjb25zdCBnZXRPcGVuRG9vclNvdW5kID0gKCkgPT4gb3BlbkRvb3JTb3VuZEVsO1xuZXhwb3J0IGNvbnN0IGdldENsb3NlRG9vclNvdW5kID0gKCkgPT4gY2xvc2VEb29yU291bmRFbDtcbmV4cG9ydCBjb25zdCBnZXRQaWNrVXBTb3VuZCA9ICgpID0+IHBpY2tVcFNvdW5kRWw7XG5jb25zdCBnZXRUYWxrU291bmQgPSAoKSA9PiB0YWxrU291bmRFbDtcbmdldFRhbGtTb3VuZCgpLmF1dG9wbGF5ID0gdHJ1ZTtcbmdldFRhbGtTb3VuZCgpLmxvb3AgPSB0cnVlO1xuY29uc3Qgc2VsZWN0QXVkaW9DdHggPSBuZXcgQXVkaW9Db250ZXh0KCk7XG5jb25zdCBwaWNrVXBBdWRpb0N0eCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcbmNvbnN0IHNlbGVjdFNvdXJjZSA9IHNlbGVjdEF1ZGlvQ3R4LmNyZWF0ZU1lZGlhRWxlbWVudFNvdXJjZShnZXRTZWxlY3RTb3VuZCgpKTtcbmNvbnN0IHBpY2tVcFNvdXJjZSA9IHBpY2tVcEF1ZGlvQ3R4LmNyZWF0ZU1lZGlhRWxlbWVudFNvdXJjZShnZXRQaWNrVXBTb3VuZCgpKTtcbmNvbnN0IHNlbGVjdEdhaW4gPSBzZWxlY3RBdWRpb0N0eC5jcmVhdGVHYWluKCk7XG5jb25zdCBwaWNrVXBHYWluID0gcGlja1VwQXVkaW9DdHguY3JlYXRlR2FpbigpO1xuc2VsZWN0R2Fpbi5nYWluLnZhbHVlID0gMS4yNTtcbnBpY2tVcEdhaW4uZ2Fpbi52YWx1ZSA9IDEuMjU7XG5zZWxlY3RTb3VyY2UuY29ubmVjdChzZWxlY3RHYWluKS5jb25uZWN0KHNlbGVjdEF1ZGlvQ3R4LmRlc3RpbmF0aW9uKTtcbnBpY2tVcFNvdXJjZS5jb25uZWN0KHBpY2tVcEdhaW4pLmNvbm5lY3QocGlja1VwQXVkaW9DdHguZGVzdGluYXRpb24pO1xuY29uc3QgYmdBdWRpb0N0eCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcbmNvbnN0IGJnU291cmNlID0gYmdBdWRpb0N0eC5jcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UoZ2V0VGFsa1NvdW5kKCkpO1xuY29uc3QgYmdFcSA9IGJnQXVkaW9DdHguY3JlYXRlQmlxdWFkRmlsdGVyKCk7XG5leHBvcnQgY29uc3QgY29ubmVjdEJnRXEgPSAoKSA9PiB7XG4gICAgYmdTb3VyY2UuZGlzY29ubmVjdCgpO1xuICAgIGJnRXEudHlwZSA9IFwiYmFuZHBhc3NcIjtcbiAgICBiZ1NvdXJjZS5jb25uZWN0KGJnRXEpO1xuICAgIGJnRXEuY29ubmVjdChiZ0F1ZGlvQ3R4LmRlc3RpbmF0aW9uKTtcbn07XG5leHBvcnQgY29uc3QgZGlzY29ubmVjdEJnRXEgPSAoKSA9PiB7XG4gICAgYmdFcS5kaXNjb25uZWN0KCk7XG4gICAgYmdTb3VyY2UuY29ubmVjdChiZ0F1ZGlvQ3R4LmRlc3RpbmF0aW9uKTtcbn07XG4iLCJ2YXIgX19jbGFzc1ByaXZhdGVGaWVsZEdldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZEdldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufTtcbnZhciBfa2V5Ym9hcmRDb250cm9sbGVyX2luc3RhbmNlcywgX2tleWJvYXJkQ29udHJvbGxlcl92YWxpZGF0ZUtleTtcbmltcG9ydCB7IGNvbm5lY3RCZ0VxLCBkaXNjb25uZWN0QmdFcSwgZ2V0Q2xvc2VEb29yU291bmQsIGdldE9wZW5Eb29yU291bmQsIH0gZnJvbSBcIi4uL2ludmVudG9yeS9zb3VuZENvbnRyb2xsZXJcIjtcbmltcG9ydCB7IGZ1enp5U2VhcmNoIH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5jb25zdCBnZXRUYWJzID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZW51LXRhYiA+IGFcIik7XG5jb25zdCB0YWJzSWQgPSBbLi4uZ2V0VGFicygpXS5tYXAoKG5vZGUpID0+IG5vZGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKS5zbGljZSgxKSk7XG5jb25zdCBnZXRWaXNpdG9ySW52ID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlY3Rpb25bZGF0YS10eXBlPSd2aXNpdG9yJ11cIik7XG5leHBvcnQgY29uc3QgZmluZFRhYklkID0gKGhhc2gpID0+IHRhYnNJZC5maW5kKCh0YWIpID0+IGZ1enp5U2VhcmNoKGhhc2gsIHRhYikpIHx8IHRhYnNJZFswXTtcbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVCZ1NvdW5kKGlkKSB7XG4gICAgc3dpdGNoIChmaW5kVGFiSWQoaWQpKSB7XG4gICAgICAgIGNhc2UgXCJraXRjaGVuXCI6XG4gICAgICAgICAgICBkaXNjb25uZWN0QmdFcSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25uZWN0QmdFcSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVRhYlNvdW5kcyhuZXdJZCwgb2xkSWQpIHtcbiAgICBzd2l0Y2ggKGZpbmRUYWJJZChuZXdJZCkpIHtcbiAgICAgICAgY2FzZSBcImtpdGNoZW5cIjpcbiAgICAgICAgICAgIGlmIChmaW5kVGFiSWQob2xkSWQpID09PSBmaW5kVGFiSWQobmV3SWQpKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZ2V0Q2xvc2VEb29yU291bmQoKS5jdXJyZW50VGltZSAmJiAhZ2V0Q2xvc2VEb29yU291bmQoKS5wYXVzZWQpIHtcbiAgICAgICAgICAgICAgICBnZXRDbG9zZURvb3JTb3VuZCgpLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgZ2V0Q2xvc2VEb29yU291bmQoKS5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnZXRPcGVuRG9vclNvdW5kKCkucGxheSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJxdWVzdFwiOlxuICAgICAgICBjYXNlIFwicGV0XCI6XG4gICAgICAgICAgICBpZiAoKGZpbmRUYWJJZChvbGRJZCkgPT09IFwicGV0XCIgJiYgZmluZFRhYklkKG5ld0lkKSA9PT0gXCJxdWVzdFwiKSB8fFxuICAgICAgICAgICAgICAgIChmaW5kVGFiSWQob2xkSWQpID09PSBcInF1ZXN0XCIgJiYgZmluZFRhYklkKG5ld0lkKSA9PT0gXCJwZXRcIikgfHxcbiAgICAgICAgICAgICAgICAoZmluZFRhYklkKG9sZElkKSA9PT0gXCJcIiAmJiBmaW5kVGFiSWQobmV3SWQpID09PSBcInF1ZXN0XCIpIHx8XG4gICAgICAgICAgICAgICAgKGZpbmRUYWJJZChvbGRJZCkgPT09IFwiXCIgJiYgZmluZFRhYklkKG5ld0lkKSA9PT0gXCJwZXRcIikgfHxcbiAgICAgICAgICAgICAgICBmaW5kVGFiSWQob2xkSWQpID09PSBmaW5kVGFiSWQobmV3SWQpKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZ2V0T3BlbkRvb3JTb3VuZCgpLmN1cnJlbnRUaW1lICYmICFnZXRPcGVuRG9vclNvdW5kKCkucGF1c2VkKSB7XG4gICAgICAgICAgICAgICAgZ2V0T3BlbkRvb3JTb3VuZCgpLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgZ2V0T3BlbkRvb3JTb3VuZCgpLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdldENsb3NlRG9vclNvdW5kKCkucGxheSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlV3JhcHBlcih3cmFwcGVyKSB7XG4gICAgd3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKFwidmlzdWFsbHktaGlkZGVuXCIpO1xuICAgIHdyYXBwZXIuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgd3JhcHBlci5jbGFzc0xpc3QuY29udGFpbnMoXCJ2aXN1YWxseS1oaWRkZW5cIikudG9TdHJpbmcoKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlVmlzaXRvckludihpZCwgd3JhcHBlcikge1xuICAgIGlmIChmaW5kVGFiSWQoaWQpICE9PSBcInBldFwiICYmIGZpbmRUYWJJZChpZCkgIT09IFwia2l0Y2hlblwiKVxuICAgICAgICByZXR1cm47XG4gICAgZmluZFRhYklkKGlkKSA9PT0gXCJwZXRcIlxuICAgICAgICA/IChnZXRWaXNpdG9ySW52KCkuaWQgPSBcImxlZnQtbWVudS1zZWN0aW9uXCIpXG4gICAgICAgIDogKGdldFZpc2l0b3JJbnYoKS5pZCA9IFwicmlnaHQtbWVudS1zZWN0aW9uXCIpO1xuICAgIGlmICghWy4uLndyYXBwZXIuY2hpbGROb2Rlc10uaW5jbHVkZXMoZ2V0VmlzaXRvckludigpKSkge1xuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGdldFZpc2l0b3JJbnYoKSk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVRlbXAoaWQpIHtcbiAgICBzd2l0Y2ggKGZpbmRUYWJJZChpZCkpIHtcbiAgICAgICAgY2FzZSBcImtpdGNoZW5cIjpcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IFwidmFyKC0td2FybS1jb2xkKVwiO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKS5kYXRhc2V0LnRlbXAgPSBcIndhcm1cIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gXCJ2YXIoLS1jb2xkLXdhcm0pXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpLmRhdGFzZXQudGVtcCA9IFwiY29sZFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIGtleWJvYXJkQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIF9rZXlib2FyZENvbnRyb2xsZXJfaW5zdGFuY2VzLmFkZCh0aGlzKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2tleWJvYXJkQ29udHJvbGxlcl9pbnN0YW5jZXMsIFwibVwiLCBfa2V5Ym9hcmRDb250cm9sbGVyX3ZhbGlkYXRlS2V5KS5jYWxsKHRoaXMsIGV2ZW50KSkge1xuICAgICAgICAgICAgICAgIGdldFRhYnMoKVtwYXJzZUludChldmVudC5rZXkpIC0gMV0uY2xpY2soKTtcbiAgICAgICAgICAgICAgICAvLyBJbiBmaXJlZm94LCB0aGUgZm9jdXMgaXMgbm90IHNldCB3aXRob3V0IGEgc21hbGwgdGltZW91dFxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZ2V0VGFicygpW3BhcnNlSW50KGV2ZW50LmtleSkgLSAxXS5mb2N1cygpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuX2tleWJvYXJkQ29udHJvbGxlcl9pbnN0YW5jZXMgPSBuZXcgV2Vha1NldCgpLCBfa2V5Ym9hcmRDb250cm9sbGVyX3ZhbGlkYXRlS2V5ID0gZnVuY3Rpb24gX2tleWJvYXJkQ29udHJvbGxlcl92YWxpZGF0ZUtleShldmVudCkge1xuICAgIHJldHVybiBwYXJzZUludChldmVudC5rZXkpID4gMCAmJiBwYXJzZUludChldmVudC5rZXkpIDw9IGdldFRhYnMoKS5sZW5ndGg7XG59O1xuIiwiaW1wb3J0IHsgZmluZFRhYklkLCBrZXlib2FyZENvbnRyb2xsZXIsIHRvZ2dsZVdyYXBwZXIsIHRvZ2dsZVZpc2l0b3JJbnYsIHRvZ2dsZVRlbXAsIHRvZ2dsZVRhYlNvdW5kcywgdG9nZ2xlQmdTb3VuZCwgfSBmcm9tIFwiLi9oZWxwZXJzXCI7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW5pdCk7XG5mdW5jdGlvbiBpbml0KCkge1xuICAgIG5ldyBrZXlib2FyZENvbnRyb2xsZXIoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImhhc2hjaGFuZ2VcIiwgdGFiQ2hhbmdlKTtcbiAgICBjb25zdCBnZXRJbml0SWQgPSAoKSA9PiB3aW5kb3cubG9jYXRpb24uaGFzaC5zbGljZSgxKTtcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZmluZFRhYklkKGdldEluaXRJZCgpKSk7XG4gICAgdG9nZ2xlQmdTb3VuZChnZXRJbml0SWQoKSk7XG4gICAgdG9nZ2xlVGVtcChnZXRJbml0SWQoKSk7XG4gICAgdG9nZ2xlVmlzaXRvckludihnZXRJbml0SWQoKSwgd3JhcHBlcik7XG4gICAgdG9nZ2xlV3JhcHBlcih3cmFwcGVyKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW5pdCk7XG59XG5mdW5jdGlvbiB0YWJDaGFuZ2UoZXZlbnQpIHtcbiAgICBjb25zdCBnZXRPbGRJZCA9ICgpID0+IG5ldyBVUkwoZXZlbnQub2xkVVJMKS5oYXNoLnNsaWNlKDEpO1xuICAgIGNvbnN0IGdldE5ld0lkID0gKCkgPT4gbmV3IFVSTChldmVudC5uZXdVUkwpLmhhc2guc2xpY2UoMSk7XG4gICAgY29uc3Qgb2xkV3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZpbmRUYWJJZChnZXRPbGRJZCgpKSk7XG4gICAgY29uc3QgbmV3V3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZpbmRUYWJJZChnZXROZXdJZCgpKSk7XG4gICAgdG9nZ2xlVGVtcChnZXROZXdJZCgpKTtcbiAgICB0b2dnbGVWaXNpdG9ySW52KGdldE5ld0lkKCksIG5ld1dyYXBwZXIpO1xuICAgIHRvZ2dsZUJnU291bmQoZ2V0TmV3SWQoKSk7XG4gICAgdG9nZ2xlVGFiU291bmRzKGdldE5ld0lkKCksIGdldE9sZElkKCkpO1xuICAgIHRvZ2dsZVdyYXBwZXIob2xkV3JhcHBlcik7XG4gICAgdG9nZ2xlV3JhcHBlcihuZXdXcmFwcGVyKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBmdXp6eVNlYXJjaChuZWVkbGUsIGhheXN0YWNrKSB7XG4gICAgY29uc3QgaGxlbiA9IGhheXN0YWNrLmxlbmd0aDtcbiAgICBjb25zdCBubGVuID0gbmVlZGxlLmxlbmd0aDtcbiAgICBpZiAobmxlbiA+IGhsZW4pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAobmxlbiA9PT0gaGxlbikge1xuICAgICAgICByZXR1cm4gbmVlZGxlID09PSBoYXlzdGFjaztcbiAgICB9XG4gICAgb3V0ZXI6IGZvciAodmFyIGkgPSAwLCBqID0gMDsgaSA8IG5sZW47IGkrKykge1xuICAgICAgICB2YXIgbmNoID0gbmVlZGxlLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIHdoaWxlIChqIDwgaGxlbikge1xuICAgICAgICAgICAgaWYgKGhheXN0YWNrLmNoYXJDb2RlQXQoaisrKSA9PT0gbmNoKSB7XG4gICAgICAgICAgICAgICAgY29udGludWUgb3V0ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbiIsImV4cG9ydCB7IGZ1enp5U2VhcmNoIH0gZnJvbSBcIi4vZnV6enlTZWFyY2hcIjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==