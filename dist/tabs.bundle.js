"use strict";
(self["webpackChunkpoggers"] = self["webpackChunkpoggers"] || []).push([["tabs"],{

/***/ "./public/sounds/index.ts":
/*!********************************!*\
  !*** ./public/sounds/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   doorClosingSound: () => (/* reexport default export from named module */ _door_closing_18398_wav__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   doorOpeneningSound: () => (/* reexport default export from named module */ _door_opening_18398_wav__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   eatSound: () => (/* reexport default export from named module */ _munch_sound_effect_mp3__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   equipSound: () => (/* reexport default export from named module */ _item_equip_6904_mp3__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   meowSound: () => (/* reexport default export from named module */ _cat_89108_wav__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   peopleTalkingSound: () => (/* reexport default export from named module */ _people_talking_in_small_room_6064_mp3__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   selectSound: () => (/* reexport default export from named module */ _select_sound_121244_mp3__WEBPACK_IMPORTED_MODULE_4__)
/* harmony export */ });
/* harmony import */ var _item_equip_6904_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-equip-6904.mp3 */ "./public/sounds/item-equip-6904.mp3");
/* harmony import */ var _door_closing_18398_wav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./door-closing-18398.wav */ "./public/sounds/door-closing-18398.wav");
/* harmony import */ var _door_opening_18398_wav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./door-opening-18398.wav */ "./public/sounds/door-opening-18398.wav");
/* harmony import */ var _people_talking_in_small_room_6064_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./people-talking-in-small-room-6064.mp3 */ "./public/sounds/people-talking-in-small-room-6064.mp3");
/* harmony import */ var _select_sound_121244_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select-sound-121244.mp3 */ "./public/sounds/select-sound-121244.mp3");
/* harmony import */ var _cat_89108_wav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cat-89108.wav */ "./public/sounds/cat-89108.wav");
/* harmony import */ var _munch_sound_effect_mp3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./munch-sound-effect.mp3 */ "./public/sounds/munch-sound-effect.mp3");










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
/* harmony export */   getEatSound: () => (/* binding */ getEatSound),
/* harmony export */   getEquipSound: () => (/* binding */ getEquipSound),
/* harmony export */   getMeowSound: () => (/* binding */ getMeowSound),
/* harmony export */   getOpenDoorSound: () => (/* binding */ getOpenDoorSound),
/* harmony export */   getSelectSound: () => (/* binding */ getSelectSound),
/* harmony export */   getTalkSound: () => (/* binding */ getTalkSound)
/* harmony export */ });
/* harmony import */ var _public_sounds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/sounds */ "./public/sounds/index.ts");

const selectSoundEl = new Audio(_public_sounds__WEBPACK_IMPORTED_MODULE_0__.selectSound);
const equipSoundEl = new Audio(_public_sounds__WEBPACK_IMPORTED_MODULE_0__.equipSound);
const meowSoundEl = new Audio(_public_sounds__WEBPACK_IMPORTED_MODULE_0__.meowSound);
const eatSoundEl = new Audio(_public_sounds__WEBPACK_IMPORTED_MODULE_0__.eatSound);
const openDoorSoundEl = new Audio(_public_sounds__WEBPACK_IMPORTED_MODULE_0__.doorOpeneningSound);
const closeDoorSoundEl = new Audio(_public_sounds__WEBPACK_IMPORTED_MODULE_0__.doorClosingSound);
openDoorSoundEl.volume = 0.15;
closeDoorSoundEl.volume = 0.05;
const getSelectSound = () => selectSoundEl;
const getEquipSound = () => equipSoundEl;
const getMeowSound = () => meowSoundEl;
const getEatSound = () => eatSoundEl;
const getTalkSound = () => document.getElementById("bg-sound");
const getOpenDoorSound = () => openDoorSoundEl;
const getCloseDoorSound = () => closeDoorSoundEl;
getTalkSound().volume = 0.25;
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
function toggleTabSounds(id) {
    switch (findTabId(id)) {
        case "kitchen":
            if ((0,_inventory_soundController__WEBPACK_IMPORTED_MODULE_0__.getCloseDoorSound)().currentTime && !(0,_inventory_soundController__WEBPACK_IMPORTED_MODULE_0__.getCloseDoorSound)().paused) {
                (0,_inventory_soundController__WEBPACK_IMPORTED_MODULE_0__.getCloseDoorSound)().pause();
                (0,_inventory_soundController__WEBPACK_IMPORTED_MODULE_0__.getCloseDoorSound)().currentTime = 0;
            }
            (0,_inventory_soundController__WEBPACK_IMPORTED_MODULE_0__.getOpenDoorSound)().play();
            break;
        case "quests":
        case "pet":
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
    if (getOldId() !== getNewId()) {
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.toggleBgSound)(getNewId());
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.toggleTabSounds)(getNewId());
    }
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

/***/ "./public/sounds/cat-89108.wav":
/*!*************************************!*\
  !*** ./public/sounds/cat-89108.wav ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a72ad8d3d62b80ac6b3e.wav";

/***/ }),

/***/ "./public/sounds/door-closing-18398.wav":
/*!**********************************************!*\
  !*** ./public/sounds/door-closing-18398.wav ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d174e09c6f99daa61b65.wav";

/***/ }),

/***/ "./public/sounds/door-opening-18398.wav":
/*!**********************************************!*\
  !*** ./public/sounds/door-opening-18398.wav ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fd31cb0b454e5c55e247.wav";

/***/ }),

/***/ "./public/sounds/item-equip-6904.mp3":
/*!*******************************************!*\
  !*** ./public/sounds/item-equip-6904.mp3 ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3ac421cb0bd63fb4faee.mp3";

/***/ }),

/***/ "./public/sounds/munch-sound-effect.mp3":
/*!**********************************************!*\
  !*** ./public/sounds/munch-sound-effect.mp3 ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1bcba30edfec8d45eb00.mp3";

/***/ }),

/***/ "./public/sounds/people-talking-in-small-room-6064.mp3":
/*!*************************************************************!*\
  !*** ./public/sounds/people-talking-in-small-room-6064.mp3 ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "665330d35397321f379b.mp3";

/***/ }),

/***/ "./public/sounds/select-sound-121244.mp3":
/*!***********************************************!*\
  !*** ./public/sounds/select-sound-121244.mp3 ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "96966333aa989c794362.mp3";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/tabs/index.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0M7QUFDUztBQUNFO0FBQ2U7QUFDckI7QUFDWjtBQUNRO0FBQ21FOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQTztBQUMxSCxnQ0FBZ0MsdURBQVc7QUFDM0MsK0JBQStCLHNEQUFVO0FBQ3pDLDhCQUE4QixxREFBUztBQUN2Qyw2QkFBNkIsb0RBQVE7QUFDckMsa0NBQWtDLDhEQUFrQjtBQUNwRCxtQ0FBbUMsNERBQWdCO0FBQ25EO0FBQ0E7QUFDTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBLDhCQUE4QixTQUFJLElBQUksU0FBSTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2lIO0FBQzFFO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNPLGlEQUFpRCxtREFBVztBQUM1RDtBQUNQO0FBQ0E7QUFDQSxZQUFZLDBFQUFjO0FBQzFCO0FBQ0E7QUFDQSxZQUFZLHVFQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLGdCQUFnQiw2RUFBaUIsbUJBQW1CLDZFQUFpQjtBQUNyRSxnQkFBZ0IsNkVBQWlCO0FBQ2pDLGdCQUFnQiw2RUFBaUI7QUFDakM7QUFDQSxZQUFZLDRFQUFnQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNEVBQWdCLG1CQUFtQiw0RUFBZ0I7QUFDbkUsZ0JBQWdCLDRFQUFnQjtBQUNoQyxnQkFBZ0IsNEVBQWdCO0FBQ2hDO0FBQ0EsWUFBWSw2RUFBaUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25Gd0k7QUFDeEk7QUFDQTtBQUNBLFFBQVEsd0RBQWtCO0FBQzFCO0FBQ0E7QUFDQSw0Q0FBNEMsbURBQVM7QUFDckQsSUFBSSx1REFBYTtBQUNqQixJQUFJLG9EQUFVO0FBQ2QsSUFBSSwwREFBZ0I7QUFDcEIsSUFBSSx1REFBYTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLG1EQUFTO0FBQ3hELCtDQUErQyxtREFBUztBQUN4RCxJQUFJLG9EQUFVO0FBQ2QsSUFBSSwwREFBZ0I7QUFDcEI7QUFDQSxRQUFRLHVEQUFhO0FBQ3JCLFFBQVEseURBQWU7QUFDdkI7QUFDQSxJQUFJLHVEQUFhO0FBQ2pCLElBQUksdURBQWE7QUFDakI7Ozs7Ozs7Ozs7Ozs7OztBQzFCTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsVUFBVTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25CNEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb2dnZXJzLy4vcHVibGljL3NvdW5kcy9pbmRleC50cyIsIndlYnBhY2s6Ly9wb2dnZXJzLy4vc3JjL2ludmVudG9yeS9zb3VuZENvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vcG9nZ2Vycy8uL3NyYy90YWJzL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vcG9nZ2Vycy8uL3NyYy90YWJzL2luZGV4LnRzIiwid2VicGFjazovL3BvZ2dlcnMvLi9zcmMvdXRpbHMvZnV6enlTZWFyY2gudHMiLCJ3ZWJwYWNrOi8vcG9nZ2Vycy8uL3NyYy91dGlscy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXF1aXBTb3VuZCBmcm9tIFwiLi9pdGVtLWVxdWlwLTY5MDQubXAzXCI7XG5pbXBvcnQgZG9vckNsb3NpbmdTb3VuZCBmcm9tIFwiLi9kb29yLWNsb3NpbmctMTgzOTgud2F2XCI7XG5pbXBvcnQgZG9vck9wZW5lbmluZ1NvdW5kIGZyb20gXCIuL2Rvb3Itb3BlbmluZy0xODM5OC53YXZcIjtcbmltcG9ydCBwZW9wbGVUYWxraW5nU291bmQgZnJvbSBcIi4vcGVvcGxlLXRhbGtpbmctaW4tc21hbGwtcm9vbS02MDY0Lm1wM1wiO1xuaW1wb3J0IHNlbGVjdFNvdW5kIGZyb20gXCIuL3NlbGVjdC1zb3VuZC0xMjEyNDQubXAzXCI7XG5pbXBvcnQgbWVvd1NvdW5kIGZyb20gXCIuL2NhdC04OTEwOC53YXZcIjtcbmltcG9ydCBlYXRTb3VuZCBmcm9tIFwiLi9tdW5jaC1zb3VuZC1lZmZlY3QubXAzXCI7XG5leHBvcnQgeyBlcXVpcFNvdW5kLCBkb29yQ2xvc2luZ1NvdW5kLCBkb29yT3BlbmVuaW5nU291bmQsIHBlb3BsZVRhbGtpbmdTb3VuZCwgc2VsZWN0U291bmQsIG1lb3dTb3VuZCwgZWF0U291bmQsIH07XG4iLCJpbXBvcnQgeyBkb29yQ2xvc2luZ1NvdW5kLCBkb29yT3BlbmVuaW5nU291bmQsIGVhdFNvdW5kLCBlcXVpcFNvdW5kLCBtZW93U291bmQsIHNlbGVjdFNvdW5kLCB9IGZyb20gXCIuLi8uLi9wdWJsaWMvc291bmRzXCI7XG5jb25zdCBzZWxlY3RTb3VuZEVsID0gbmV3IEF1ZGlvKHNlbGVjdFNvdW5kKTtcbmNvbnN0IGVxdWlwU291bmRFbCA9IG5ldyBBdWRpbyhlcXVpcFNvdW5kKTtcbmNvbnN0IG1lb3dTb3VuZEVsID0gbmV3IEF1ZGlvKG1lb3dTb3VuZCk7XG5jb25zdCBlYXRTb3VuZEVsID0gbmV3IEF1ZGlvKGVhdFNvdW5kKTtcbmNvbnN0IG9wZW5Eb29yU291bmRFbCA9IG5ldyBBdWRpbyhkb29yT3BlbmVuaW5nU291bmQpO1xuY29uc3QgY2xvc2VEb29yU291bmRFbCA9IG5ldyBBdWRpbyhkb29yQ2xvc2luZ1NvdW5kKTtcbm9wZW5Eb29yU291bmRFbC52b2x1bWUgPSAwLjE1O1xuY2xvc2VEb29yU291bmRFbC52b2x1bWUgPSAwLjA1O1xuZXhwb3J0IGNvbnN0IGdldFNlbGVjdFNvdW5kID0gKCkgPT4gc2VsZWN0U291bmRFbDtcbmV4cG9ydCBjb25zdCBnZXRFcXVpcFNvdW5kID0gKCkgPT4gZXF1aXBTb3VuZEVsO1xuZXhwb3J0IGNvbnN0IGdldE1lb3dTb3VuZCA9ICgpID0+IG1lb3dTb3VuZEVsO1xuZXhwb3J0IGNvbnN0IGdldEVhdFNvdW5kID0gKCkgPT4gZWF0U291bmRFbDtcbmV4cG9ydCBjb25zdCBnZXRUYWxrU291bmQgPSAoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJnLXNvdW5kXCIpO1xuZXhwb3J0IGNvbnN0IGdldE9wZW5Eb29yU291bmQgPSAoKSA9PiBvcGVuRG9vclNvdW5kRWw7XG5leHBvcnQgY29uc3QgZ2V0Q2xvc2VEb29yU291bmQgPSAoKSA9PiBjbG9zZURvb3JTb3VuZEVsO1xuZ2V0VGFsa1NvdW5kKCkudm9sdW1lID0gMC4yNTtcbmNvbnN0IGJnQXVkaW9DdHggPSBuZXcgQXVkaW9Db250ZXh0KCk7XG5jb25zdCBiZ1NvdXJjZSA9IGJnQXVkaW9DdHguY3JlYXRlTWVkaWFFbGVtZW50U291cmNlKGdldFRhbGtTb3VuZCgpKTtcbmNvbnN0IGJnRXEgPSBiZ0F1ZGlvQ3R4LmNyZWF0ZUJpcXVhZEZpbHRlcigpO1xuZXhwb3J0IGNvbnN0IGNvbm5lY3RCZ0VxID0gKCkgPT4ge1xuICAgIGJnU291cmNlLmRpc2Nvbm5lY3QoKTtcbiAgICBiZ0VxLnR5cGUgPSBcImJhbmRwYXNzXCI7XG4gICAgYmdTb3VyY2UuY29ubmVjdChiZ0VxKTtcbiAgICBiZ0VxLmNvbm5lY3QoYmdBdWRpb0N0eC5kZXN0aW5hdGlvbik7XG59O1xuZXhwb3J0IGNvbnN0IGRpc2Nvbm5lY3RCZ0VxID0gKCkgPT4ge1xuICAgIGJnRXEuZGlzY29ubmVjdCgpO1xuICAgIGJnU291cmNlLmNvbm5lY3QoYmdBdWRpb0N0eC5kZXN0aW5hdGlvbik7XG59O1xuIiwidmFyIF9fY2xhc3NQcml2YXRlRmllbGRHZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRHZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn07XG52YXIgX2tleWJvYXJkQ29udHJvbGxlcl9pbnN0YW5jZXMsIF9rZXlib2FyZENvbnRyb2xsZXJfdmFsaWRhdGVLZXk7XG5pbXBvcnQgeyBjb25uZWN0QmdFcSwgZGlzY29ubmVjdEJnRXEsIGdldENsb3NlRG9vclNvdW5kLCBnZXRPcGVuRG9vclNvdW5kLCB9IGZyb20gXCIuLi9pbnZlbnRvcnkvc291bmRDb250cm9sbGVyXCI7XG5pbXBvcnQgeyBmdXp6eVNlYXJjaCB9IGZyb20gXCIuLi91dGlsc1wiO1xuY29uc3QgZ2V0VGFicyA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudS10YWIgPiBhXCIpO1xuY29uc3QgdGFic0lkID0gWy4uLmdldFRhYnMoKV0ubWFwKChub2RlKSA9PiBub2RlLmdldEF0dHJpYnV0ZShcImhyZWZcIikuc2xpY2UoMSkpO1xuY29uc3QgZ2V0VmlzaXRvckludiA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWN0aW9uW2RhdGEtdHlwZT0ndmlzaXRvciddXCIpO1xuZXhwb3J0IGNvbnN0IGZpbmRUYWJJZCA9IChoYXNoKSA9PiB0YWJzSWQuZmluZCgodGFiKSA9PiBmdXp6eVNlYXJjaChoYXNoLCB0YWIpKSB8fCB0YWJzSWRbMF07XG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlQmdTb3VuZChpZCkge1xuICAgIHN3aXRjaCAoZmluZFRhYklkKGlkKSkge1xuICAgICAgICBjYXNlIFwia2l0Y2hlblwiOlxuICAgICAgICAgICAgZGlzY29ubmVjdEJnRXEoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY29ubmVjdEJnRXEoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVUYWJTb3VuZHMoaWQpIHtcbiAgICBzd2l0Y2ggKGZpbmRUYWJJZChpZCkpIHtcbiAgICAgICAgY2FzZSBcImtpdGNoZW5cIjpcbiAgICAgICAgICAgIGlmIChnZXRDbG9zZURvb3JTb3VuZCgpLmN1cnJlbnRUaW1lICYmICFnZXRDbG9zZURvb3JTb3VuZCgpLnBhdXNlZCkge1xuICAgICAgICAgICAgICAgIGdldENsb3NlRG9vclNvdW5kKCkucGF1c2UoKTtcbiAgICAgICAgICAgICAgICBnZXRDbG9zZURvb3JTb3VuZCgpLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdldE9wZW5Eb29yU291bmQoKS5wbGF5KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInF1ZXN0c1wiOlxuICAgICAgICBjYXNlIFwicGV0XCI6XG4gICAgICAgICAgICBpZiAoZ2V0T3BlbkRvb3JTb3VuZCgpLmN1cnJlbnRUaW1lICYmICFnZXRPcGVuRG9vclNvdW5kKCkucGF1c2VkKSB7XG4gICAgICAgICAgICAgICAgZ2V0T3BlbkRvb3JTb3VuZCgpLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgZ2V0T3BlbkRvb3JTb3VuZCgpLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdldENsb3NlRG9vclNvdW5kKCkucGxheSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlV3JhcHBlcih3cmFwcGVyKSB7XG4gICAgd3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKFwidmlzdWFsbHktaGlkZGVuXCIpO1xuICAgIHdyYXBwZXIuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgd3JhcHBlci5jbGFzc0xpc3QuY29udGFpbnMoXCJ2aXN1YWxseS1oaWRkZW5cIikudG9TdHJpbmcoKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlVmlzaXRvckludihpZCwgd3JhcHBlcikge1xuICAgIGlmIChmaW5kVGFiSWQoaWQpICE9PSBcInBldFwiICYmIGZpbmRUYWJJZChpZCkgIT09IFwia2l0Y2hlblwiKVxuICAgICAgICByZXR1cm47XG4gICAgZmluZFRhYklkKGlkKSA9PT0gXCJwZXRcIlxuICAgICAgICA/IChnZXRWaXNpdG9ySW52KCkuaWQgPSBcImxlZnQtbWVudS1zZWN0aW9uXCIpXG4gICAgICAgIDogKGdldFZpc2l0b3JJbnYoKS5pZCA9IFwicmlnaHQtbWVudS1zZWN0aW9uXCIpO1xuICAgIGlmICghWy4uLndyYXBwZXIuY2hpbGROb2Rlc10uaW5jbHVkZXMoZ2V0VmlzaXRvckludigpKSkge1xuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGdldFZpc2l0b3JJbnYoKSk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVRlbXAoaWQpIHtcbiAgICBzd2l0Y2ggKGZpbmRUYWJJZChpZCkpIHtcbiAgICAgICAgY2FzZSBcImtpdGNoZW5cIjpcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IFwidmFyKC0td2FybS1jb2xkKVwiO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKS5kYXRhc2V0LnRlbXAgPSBcIndhcm1cIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gXCJ2YXIoLS1jb2xkLXdhcm0pXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpLmRhdGFzZXQudGVtcCA9IFwiY29sZFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIGtleWJvYXJkQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIF9rZXlib2FyZENvbnRyb2xsZXJfaW5zdGFuY2VzLmFkZCh0aGlzKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2tleWJvYXJkQ29udHJvbGxlcl9pbnN0YW5jZXMsIFwibVwiLCBfa2V5Ym9hcmRDb250cm9sbGVyX3ZhbGlkYXRlS2V5KS5jYWxsKHRoaXMsIGV2ZW50KSkge1xuICAgICAgICAgICAgICAgIGdldFRhYnMoKVtwYXJzZUludChldmVudC5rZXkpIC0gMV0uY2xpY2soKTtcbiAgICAgICAgICAgICAgICAvLyBJbiBmaXJlZm94LCB0aGUgZm9jdXMgaXMgbm90IHNldCB3aXRob3V0IGEgc21hbGwgdGltZW91dFxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZ2V0VGFicygpW3BhcnNlSW50KGV2ZW50LmtleSkgLSAxXS5mb2N1cygpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuX2tleWJvYXJkQ29udHJvbGxlcl9pbnN0YW5jZXMgPSBuZXcgV2Vha1NldCgpLCBfa2V5Ym9hcmRDb250cm9sbGVyX3ZhbGlkYXRlS2V5ID0gZnVuY3Rpb24gX2tleWJvYXJkQ29udHJvbGxlcl92YWxpZGF0ZUtleShldmVudCkge1xuICAgIHJldHVybiBwYXJzZUludChldmVudC5rZXkpID4gMCAmJiBwYXJzZUludChldmVudC5rZXkpIDw9IGdldFRhYnMoKS5sZW5ndGg7XG59O1xuIiwiaW1wb3J0IHsgZmluZFRhYklkLCBrZXlib2FyZENvbnRyb2xsZXIsIHRvZ2dsZVdyYXBwZXIsIHRvZ2dsZVZpc2l0b3JJbnYsIHRvZ2dsZVRlbXAsIHRvZ2dsZVRhYlNvdW5kcywgdG9nZ2xlQmdTb3VuZCwgfSBmcm9tIFwiLi9oZWxwZXJzXCI7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW5pdCk7XG5mdW5jdGlvbiBpbml0KCkge1xuICAgIG5ldyBrZXlib2FyZENvbnRyb2xsZXIoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImhhc2hjaGFuZ2VcIiwgdGFiQ2hhbmdlKTtcbiAgICBjb25zdCBnZXRJbml0SWQgPSAoKSA9PiB3aW5kb3cubG9jYXRpb24uaGFzaC5zbGljZSgxKTtcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZmluZFRhYklkKGdldEluaXRJZCgpKSk7XG4gICAgdG9nZ2xlQmdTb3VuZChnZXRJbml0SWQoKSk7XG4gICAgdG9nZ2xlVGVtcChnZXRJbml0SWQoKSk7XG4gICAgdG9nZ2xlVmlzaXRvckludihnZXRJbml0SWQoKSwgd3JhcHBlcik7XG4gICAgdG9nZ2xlV3JhcHBlcih3cmFwcGVyKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW5pdCk7XG59XG5mdW5jdGlvbiB0YWJDaGFuZ2UoZXZlbnQpIHtcbiAgICBjb25zdCBnZXRPbGRJZCA9ICgpID0+IG5ldyBVUkwoZXZlbnQub2xkVVJMKS5oYXNoLnNsaWNlKDEpO1xuICAgIGNvbnN0IGdldE5ld0lkID0gKCkgPT4gbmV3IFVSTChldmVudC5uZXdVUkwpLmhhc2guc2xpY2UoMSk7XG4gICAgY29uc3Qgb2xkV3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZpbmRUYWJJZChnZXRPbGRJZCgpKSk7XG4gICAgY29uc3QgbmV3V3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZpbmRUYWJJZChnZXROZXdJZCgpKSk7XG4gICAgdG9nZ2xlVGVtcChnZXROZXdJZCgpKTtcbiAgICB0b2dnbGVWaXNpdG9ySW52KGdldE5ld0lkKCksIG5ld1dyYXBwZXIpO1xuICAgIGlmIChnZXRPbGRJZCgpICE9PSBnZXROZXdJZCgpKSB7XG4gICAgICAgIHRvZ2dsZUJnU291bmQoZ2V0TmV3SWQoKSk7XG4gICAgICAgIHRvZ2dsZVRhYlNvdW5kcyhnZXROZXdJZCgpKTtcbiAgICB9XG4gICAgdG9nZ2xlV3JhcHBlcihvbGRXcmFwcGVyKTtcbiAgICB0b2dnbGVXcmFwcGVyKG5ld1dyYXBwZXIpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGZ1enp5U2VhcmNoKG5lZWRsZSwgaGF5c3RhY2spIHtcbiAgICBjb25zdCBobGVuID0gaGF5c3RhY2subGVuZ3RoO1xuICAgIGNvbnN0IG5sZW4gPSBuZWVkbGUubGVuZ3RoO1xuICAgIGlmIChubGVuID4gaGxlbikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChubGVuID09PSBobGVuKSB7XG4gICAgICAgIHJldHVybiBuZWVkbGUgPT09IGhheXN0YWNrO1xuICAgIH1cbiAgICBvdXRlcjogZm9yICh2YXIgaSA9IDAsIGogPSAwOyBpIDwgbmxlbjsgaSsrKSB7XG4gICAgICAgIHZhciBuY2ggPSBuZWVkbGUuY2hhckNvZGVBdChpKTtcbiAgICAgICAgd2hpbGUgKGogPCBobGVuKSB7XG4gICAgICAgICAgICBpZiAoaGF5c3RhY2suY2hhckNvZGVBdChqKyspID09PSBuY2gpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZSBvdXRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuIiwiZXhwb3J0IHsgZnV6enlTZWFyY2ggfSBmcm9tIFwiLi9mdXp6eVNlYXJjaFwiO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9