"use strict";
(self["webpackChunkpoggers"] = self["webpackChunkpoggers"] || []).push([["tabs"],{

/***/ "./src/tabs/helpers.ts":
/*!*****************************!*\
  !*** ./src/tabs/helpers.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findTabId: () => (/* binding */ findTabId),
/* harmony export */   keyboardController: () => (/* binding */ keyboardController),
/* harmony export */   toggleVisitorInv: () => (/* binding */ toggleVisitorInv),
/* harmony export */   toggleWrapper: () => (/* binding */ toggleWrapper)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _keyboardController_instances, _keyboardController_validateKey;

const getTabs = () => document.querySelectorAll(".menu-tab > a");
const tabsId = [...getTabs()].map((node) => node.getAttribute("href").slice(1));
const getVisitorInv = () => document.querySelector("section[data-type='visitor']");
const findTabId = (hash) => tabsId.find((tab) => (0,_utils__WEBPACK_IMPORTED_MODULE_0__.fuzzySearch)(hash, tab)) || tabsId[0];
function toggleWrapper(wrapper) {
    wrapper.classList.toggle("visually-hidden");
    wrapper.setAttribute("aria-hidden", wrapper.classList.contains("visually-hidden").toString());
}
function toggleVisitorInv(id, wrapper) {
    if (findTabId(id) !== "character" && findTabId(id) !== "store")
        return;
    if (![...wrapper.childNodes].includes(getVisitorInv())) {
        wrapper.appendChild(getVisitorInv());
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
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.toggleVisitorInv)(getInitId(), wrapper);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.toggleWrapper)(wrapper);
    window.removeEventListener("DOMContentLoaded", init);
}
function tabChange(event) {
    const getOldId = () => new URL(event.oldURL).hash.slice(1);
    const getNewId = () => new URL(event.newURL).hash.slice(1);
    const oldWrapper = document.getElementById((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.findTabId)(getOldId()));
    const newWrapper = document.getElementById((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.findTabId)(getNewId()));
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.toggleVisitorInv)(getNewId(), newWrapper);
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



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/tabs/index.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4QkFBOEIsU0FBSSxJQUFJLFNBQUk7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN1QztBQUN2QztBQUNBO0FBQ0E7QUFDTyxpREFBaUQsbURBQVc7QUFDNUQ7QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcEM0RjtBQUM1RjtBQUNBO0FBQ0EsUUFBUSx3REFBa0I7QUFDMUI7QUFDQTtBQUNBLDRDQUE0QyxtREFBUztBQUNyRCxJQUFJLDBEQUFnQjtBQUNwQixJQUFJLHVEQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsbURBQVM7QUFDeEQsK0NBQStDLG1EQUFTO0FBQ3hELElBQUksMERBQWdCO0FBQ3BCLElBQUksdURBQWE7QUFDakIsSUFBSSx1REFBYTtBQUNqQjs7Ozs7Ozs7Ozs7Ozs7O0FDbkJPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxVQUFVO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkI0QyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvZ2dlcnMvLi9zcmMvdGFicy9oZWxwZXJzLnRzIiwid2VicGFjazovL3BvZ2dlcnMvLi9zcmMvdGFicy9pbmRleC50cyIsIndlYnBhY2s6Ly9wb2dnZXJzLy4vc3JjL3V0aWxzL2Z1enp5U2VhcmNoLnRzIiwid2VicGFjazovL3BvZ2dlcnMvLi9zcmMvdXRpbHMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fY2xhc3NQcml2YXRlRmllbGRHZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRHZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn07XG52YXIgX2tleWJvYXJkQ29udHJvbGxlcl9pbnN0YW5jZXMsIF9rZXlib2FyZENvbnRyb2xsZXJfdmFsaWRhdGVLZXk7XG5pbXBvcnQgeyBmdXp6eVNlYXJjaCB9IGZyb20gXCIuLi91dGlsc1wiO1xuY29uc3QgZ2V0VGFicyA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudS10YWIgPiBhXCIpO1xuY29uc3QgdGFic0lkID0gWy4uLmdldFRhYnMoKV0ubWFwKChub2RlKSA9PiBub2RlLmdldEF0dHJpYnV0ZShcImhyZWZcIikuc2xpY2UoMSkpO1xuY29uc3QgZ2V0VmlzaXRvckludiA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWN0aW9uW2RhdGEtdHlwZT0ndmlzaXRvciddXCIpO1xuZXhwb3J0IGNvbnN0IGZpbmRUYWJJZCA9IChoYXNoKSA9PiB0YWJzSWQuZmluZCgodGFiKSA9PiBmdXp6eVNlYXJjaChoYXNoLCB0YWIpKSB8fCB0YWJzSWRbMF07XG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlV3JhcHBlcih3cmFwcGVyKSB7XG4gICAgd3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKFwidmlzdWFsbHktaGlkZGVuXCIpO1xuICAgIHdyYXBwZXIuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgd3JhcHBlci5jbGFzc0xpc3QuY29udGFpbnMoXCJ2aXN1YWxseS1oaWRkZW5cIikudG9TdHJpbmcoKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlVmlzaXRvckludihpZCwgd3JhcHBlcikge1xuICAgIGlmIChmaW5kVGFiSWQoaWQpICE9PSBcImNoYXJhY3RlclwiICYmIGZpbmRUYWJJZChpZCkgIT09IFwic3RvcmVcIilcbiAgICAgICAgcmV0dXJuO1xuICAgIGlmICghWy4uLndyYXBwZXIuY2hpbGROb2Rlc10uaW5jbHVkZXMoZ2V0VmlzaXRvckludigpKSkge1xuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGdldFZpc2l0b3JJbnYoKSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIGtleWJvYXJkQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIF9rZXlib2FyZENvbnRyb2xsZXJfaW5zdGFuY2VzLmFkZCh0aGlzKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2tleWJvYXJkQ29udHJvbGxlcl9pbnN0YW5jZXMsIFwibVwiLCBfa2V5Ym9hcmRDb250cm9sbGVyX3ZhbGlkYXRlS2V5KS5jYWxsKHRoaXMsIGV2ZW50KSkge1xuICAgICAgICAgICAgICAgIGdldFRhYnMoKVtwYXJzZUludChldmVudC5rZXkpIC0gMV0uY2xpY2soKTtcbiAgICAgICAgICAgICAgICAvLyBJbiBmaXJlZm94LCB0aGUgZm9jdXMgaXMgbm90IHNldCB3aXRob3V0IGEgc21hbGwgdGltZW91dFxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZ2V0VGFicygpW3BhcnNlSW50KGV2ZW50LmtleSkgLSAxXS5mb2N1cygpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuX2tleWJvYXJkQ29udHJvbGxlcl9pbnN0YW5jZXMgPSBuZXcgV2Vha1NldCgpLCBfa2V5Ym9hcmRDb250cm9sbGVyX3ZhbGlkYXRlS2V5ID0gZnVuY3Rpb24gX2tleWJvYXJkQ29udHJvbGxlcl92YWxpZGF0ZUtleShldmVudCkge1xuICAgIHJldHVybiBwYXJzZUludChldmVudC5rZXkpID4gMCAmJiBwYXJzZUludChldmVudC5rZXkpIDw9IGdldFRhYnMoKS5sZW5ndGg7XG59O1xuIiwiaW1wb3J0IHsgZmluZFRhYklkLCBrZXlib2FyZENvbnRyb2xsZXIsIHRvZ2dsZVdyYXBwZXIsIHRvZ2dsZVZpc2l0b3JJbnYsIH0gZnJvbSBcIi4vaGVscGVyc1wiO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGluaXQpO1xuZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBuZXcga2V5Ym9hcmRDb250cm9sbGVyKCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsIHRhYkNoYW5nZSk7XG4gICAgY29uc3QgZ2V0SW5pdElkID0gKCkgPT4gd2luZG93LmxvY2F0aW9uLmhhc2guc2xpY2UoMSk7XG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZpbmRUYWJJZChnZXRJbml0SWQoKSkpO1xuICAgIHRvZ2dsZVZpc2l0b3JJbnYoZ2V0SW5pdElkKCksIHdyYXBwZXIpO1xuICAgIHRvZ2dsZVdyYXBwZXIod3JhcHBlcik7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGluaXQpO1xufVxuZnVuY3Rpb24gdGFiQ2hhbmdlKGV2ZW50KSB7XG4gICAgY29uc3QgZ2V0T2xkSWQgPSAoKSA9PiBuZXcgVVJMKGV2ZW50Lm9sZFVSTCkuaGFzaC5zbGljZSgxKTtcbiAgICBjb25zdCBnZXROZXdJZCA9ICgpID0+IG5ldyBVUkwoZXZlbnQubmV3VVJMKS5oYXNoLnNsaWNlKDEpO1xuICAgIGNvbnN0IG9sZFdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmaW5kVGFiSWQoZ2V0T2xkSWQoKSkpO1xuICAgIGNvbnN0IG5ld1dyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmaW5kVGFiSWQoZ2V0TmV3SWQoKSkpO1xuICAgIHRvZ2dsZVZpc2l0b3JJbnYoZ2V0TmV3SWQoKSwgbmV3V3JhcHBlcik7XG4gICAgdG9nZ2xlV3JhcHBlcihvbGRXcmFwcGVyKTtcbiAgICB0b2dnbGVXcmFwcGVyKG5ld1dyYXBwZXIpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGZ1enp5U2VhcmNoKG5lZWRsZSwgaGF5c3RhY2spIHtcbiAgICBjb25zdCBobGVuID0gaGF5c3RhY2subGVuZ3RoO1xuICAgIGNvbnN0IG5sZW4gPSBuZWVkbGUubGVuZ3RoO1xuICAgIGlmIChubGVuID4gaGxlbikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChubGVuID09PSBobGVuKSB7XG4gICAgICAgIHJldHVybiBuZWVkbGUgPT09IGhheXN0YWNrO1xuICAgIH1cbiAgICBvdXRlcjogZm9yICh2YXIgaSA9IDAsIGogPSAwOyBpIDwgbmxlbjsgaSsrKSB7XG4gICAgICAgIHZhciBuY2ggPSBuZWVkbGUuY2hhckNvZGVBdChpKTtcbiAgICAgICAgd2hpbGUgKGogPCBobGVuKSB7XG4gICAgICAgICAgICBpZiAoaGF5c3RhY2suY2hhckNvZGVBdChqKyspID09PSBuY2gpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZSBvdXRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuIiwiZXhwb3J0IHsgZnV6enlTZWFyY2ggfSBmcm9tIFwiLi9mdXp6eVNlYXJjaFwiO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9