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
/* harmony export */   toggleBodyBg: () => (/* binding */ toggleBodyBg),
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
    if (findTabId(id) !== "pet" && findTabId(id) !== "kitchen")
        return;
    if (![...wrapper.childNodes].includes(getVisitorInv())) {
        wrapper.appendChild(getVisitorInv());
    }
}
function toggleBodyBg(id) {
    switch (findTabId(id)) {
        case "kitchen":
            document.body.style.background = "var(--warm-cold)";
            break;
        default:
            document.body.style.background = "var(--cold-warm)";
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
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.toggleBodyBg)(getInitId());
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.toggleVisitorInv)(getInitId(), wrapper);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.toggleWrapper)(wrapper);
    window.removeEventListener("DOMContentLoaded", init);
}
function tabChange(event) {
    const getOldId = () => new URL(event.oldURL).hash.slice(1);
    const getNewId = () => new URL(event.newURL).hash.slice(1);
    const oldWrapper = document.getElementById((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.findTabId)(getOldId()));
    const newWrapper = document.getElementById((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.findTabId)(getNewId()));
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.toggleBodyBg)(getNewId());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOEJBQThCLFNBQUksSUFBSSxTQUFJO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ08saURBQWlELG1EQUFXO0FBQzVEO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOUMwRztBQUMxRztBQUNBO0FBQ0EsUUFBUSx3REFBa0I7QUFDMUI7QUFDQTtBQUNBLDRDQUE0QyxtREFBUztBQUNyRCxJQUFJLHNEQUFZO0FBQ2hCLElBQUksMERBQWdCO0FBQ3BCLElBQUksdURBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxtREFBUztBQUN4RCwrQ0FBK0MsbURBQVM7QUFDeEQsSUFBSSxzREFBWTtBQUNoQixJQUFJLDBEQUFnQjtBQUNwQixJQUFJLHVEQUFhO0FBQ2pCLElBQUksdURBQWE7QUFDakI7Ozs7Ozs7Ozs7Ozs7OztBQ3JCTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsVUFBVTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25CNEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb2dnZXJzLy4vc3JjL3RhYnMvaGVscGVycy50cyIsIndlYnBhY2s6Ly9wb2dnZXJzLy4vc3JjL3RhYnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcG9nZ2Vycy8uL3NyYy91dGlscy9mdXp6eVNlYXJjaC50cyIsIndlYnBhY2s6Ly9wb2dnZXJzLy4vc3JjL3V0aWxzL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59O1xudmFyIF9rZXlib2FyZENvbnRyb2xsZXJfaW5zdGFuY2VzLCBfa2V5Ym9hcmRDb250cm9sbGVyX3ZhbGlkYXRlS2V5O1xuaW1wb3J0IHsgZnV6enlTZWFyY2ggfSBmcm9tIFwiLi4vdXRpbHNcIjtcbmNvbnN0IGdldFRhYnMgPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1lbnUtdGFiID4gYVwiKTtcbmNvbnN0IHRhYnNJZCA9IFsuLi5nZXRUYWJzKCldLm1hcCgobm9kZSkgPT4gbm9kZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnNsaWNlKDEpKTtcbmNvbnN0IGdldFZpc2l0b3JJbnYgPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VjdGlvbltkYXRhLXR5cGU9J3Zpc2l0b3InXVwiKTtcbmV4cG9ydCBjb25zdCBmaW5kVGFiSWQgPSAoaGFzaCkgPT4gdGFic0lkLmZpbmQoKHRhYikgPT4gZnV6enlTZWFyY2goaGFzaCwgdGFiKSkgfHwgdGFic0lkWzBdO1xuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVdyYXBwZXIod3JhcHBlcikge1xuICAgIHdyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZShcInZpc3VhbGx5LWhpZGRlblwiKTtcbiAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIHdyYXBwZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwidmlzdWFsbHktaGlkZGVuXCIpLnRvU3RyaW5nKCkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVZpc2l0b3JJbnYoaWQsIHdyYXBwZXIpIHtcbiAgICBpZiAoZmluZFRhYklkKGlkKSAhPT0gXCJwZXRcIiAmJiBmaW5kVGFiSWQoaWQpICE9PSBcImtpdGNoZW5cIilcbiAgICAgICAgcmV0dXJuO1xuICAgIGlmICghWy4uLndyYXBwZXIuY2hpbGROb2Rlc10uaW5jbHVkZXMoZ2V0VmlzaXRvckludigpKSkge1xuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGdldFZpc2l0b3JJbnYoKSk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUJvZHlCZyhpZCkge1xuICAgIHN3aXRjaCAoZmluZFRhYklkKGlkKSkge1xuICAgICAgICBjYXNlIFwia2l0Y2hlblwiOlxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gXCJ2YXIoLS13YXJtLWNvbGQpXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IFwidmFyKC0tY29sZC13YXJtKVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIGtleWJvYXJkQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIF9rZXlib2FyZENvbnRyb2xsZXJfaW5zdGFuY2VzLmFkZCh0aGlzKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2tleWJvYXJkQ29udHJvbGxlcl9pbnN0YW5jZXMsIFwibVwiLCBfa2V5Ym9hcmRDb250cm9sbGVyX3ZhbGlkYXRlS2V5KS5jYWxsKHRoaXMsIGV2ZW50KSkge1xuICAgICAgICAgICAgICAgIGdldFRhYnMoKVtwYXJzZUludChldmVudC5rZXkpIC0gMV0uY2xpY2soKTtcbiAgICAgICAgICAgICAgICAvLyBJbiBmaXJlZm94LCB0aGUgZm9jdXMgaXMgbm90IHNldCB3aXRob3V0IGEgc21hbGwgdGltZW91dFxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZ2V0VGFicygpW3BhcnNlSW50KGV2ZW50LmtleSkgLSAxXS5mb2N1cygpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuX2tleWJvYXJkQ29udHJvbGxlcl9pbnN0YW5jZXMgPSBuZXcgV2Vha1NldCgpLCBfa2V5Ym9hcmRDb250cm9sbGVyX3ZhbGlkYXRlS2V5ID0gZnVuY3Rpb24gX2tleWJvYXJkQ29udHJvbGxlcl92YWxpZGF0ZUtleShldmVudCkge1xuICAgIHJldHVybiBwYXJzZUludChldmVudC5rZXkpID4gMCAmJiBwYXJzZUludChldmVudC5rZXkpIDw9IGdldFRhYnMoKS5sZW5ndGg7XG59O1xuIiwiaW1wb3J0IHsgZmluZFRhYklkLCBrZXlib2FyZENvbnRyb2xsZXIsIHRvZ2dsZVdyYXBwZXIsIHRvZ2dsZVZpc2l0b3JJbnYsIHRvZ2dsZUJvZHlCZywgfSBmcm9tIFwiLi9oZWxwZXJzXCI7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW5pdCk7XG5mdW5jdGlvbiBpbml0KCkge1xuICAgIG5ldyBrZXlib2FyZENvbnRyb2xsZXIoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImhhc2hjaGFuZ2VcIiwgdGFiQ2hhbmdlKTtcbiAgICBjb25zdCBnZXRJbml0SWQgPSAoKSA9PiB3aW5kb3cubG9jYXRpb24uaGFzaC5zbGljZSgxKTtcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZmluZFRhYklkKGdldEluaXRJZCgpKSk7XG4gICAgdG9nZ2xlQm9keUJnKGdldEluaXRJZCgpKTtcbiAgICB0b2dnbGVWaXNpdG9ySW52KGdldEluaXRJZCgpLCB3cmFwcGVyKTtcbiAgICB0b2dnbGVXcmFwcGVyKHdyYXBwZXIpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0KTtcbn1cbmZ1bmN0aW9uIHRhYkNoYW5nZShldmVudCkge1xuICAgIGNvbnN0IGdldE9sZElkID0gKCkgPT4gbmV3IFVSTChldmVudC5vbGRVUkwpLmhhc2guc2xpY2UoMSk7XG4gICAgY29uc3QgZ2V0TmV3SWQgPSAoKSA9PiBuZXcgVVJMKGV2ZW50Lm5ld1VSTCkuaGFzaC5zbGljZSgxKTtcbiAgICBjb25zdCBvbGRXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZmluZFRhYklkKGdldE9sZElkKCkpKTtcbiAgICBjb25zdCBuZXdXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZmluZFRhYklkKGdldE5ld0lkKCkpKTtcbiAgICB0b2dnbGVCb2R5QmcoZ2V0TmV3SWQoKSk7XG4gICAgdG9nZ2xlVmlzaXRvckludihnZXROZXdJZCgpLCBuZXdXcmFwcGVyKTtcbiAgICB0b2dnbGVXcmFwcGVyKG9sZFdyYXBwZXIpO1xuICAgIHRvZ2dsZVdyYXBwZXIobmV3V3JhcHBlcik7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZnV6enlTZWFyY2gobmVlZGxlLCBoYXlzdGFjaykge1xuICAgIGNvbnN0IGhsZW4gPSBoYXlzdGFjay5sZW5ndGg7XG4gICAgY29uc3QgbmxlbiA9IG5lZWRsZS5sZW5ndGg7XG4gICAgaWYgKG5sZW4gPiBobGVuKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKG5sZW4gPT09IGhsZW4pIHtcbiAgICAgICAgcmV0dXJuIG5lZWRsZSA9PT0gaGF5c3RhY2s7XG4gICAgfVxuICAgIG91dGVyOiBmb3IgKHZhciBpID0gMCwgaiA9IDA7IGkgPCBubGVuOyBpKyspIHtcbiAgICAgICAgdmFyIG5jaCA9IG5lZWRsZS5jaGFyQ29kZUF0KGkpO1xuICAgICAgICB3aGlsZSAoaiA8IGhsZW4pIHtcbiAgICAgICAgICAgIGlmIChoYXlzdGFjay5jaGFyQ29kZUF0KGorKykgPT09IG5jaCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlIG91dGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG4iLCJleHBvcnQgeyBmdXp6eVNlYXJjaCB9IGZyb20gXCIuL2Z1enp5U2VhcmNoXCI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=