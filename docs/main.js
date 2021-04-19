(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Mada\Documents\GitHub\madalinaeleonorag.github.io\src\main.ts */"zUnb");


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/menu */ "rJgo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _custom_svg_custom_svg_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../custom-svg/custom-svg.component */ "HoFA");






function HeaderComponent_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "selected-page": a0 }; };
class HeaderComponent {
    constructor(router) {
        this.router = router;
        this.selectedPageUrl = '/';
        this.router.events.subscribe(value => {
            this.selectedPageUrl = router.url.toString();
        });
    }
    ngOnInit() {
    }
    goToPage(page) {
        this.router.navigateByUrl(`${page}`);
    }
    isPageSelected(page) {
        return page === this.selectedPageUrl;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 36, vars: 33, consts: [["mat-icon-button", "", 1, "menu-icon", 3, "matMenuTriggerFor"], ["t", "matMenuTrigger"], ["class", "", 4, "ngIf"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "ngClass", "click"], [1, "title", 3, "click"], [1, "links"], [3, "ngClass", "click"], [1, "social-icons-wrapper"], ["target", "_blank", "href", "https://madalinaeleonorag.medium.com/"], ["type", "medium"], ["target", "_blank", "href", "https://github.com/madalinaeleonorag"], ["type", "github"], [1, ""]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_mat_icon_2_Template, 2, 0, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_mat_icon_3_Template, 2, 0, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_6_listener() { return ctx.goToPage("/"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_8_listener() { return ctx.goToPage("projects"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_10_listener() { return ctx.goToPage("skills"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Skills ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_12_listener() { return ctx.goToPage("experience"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Experience ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_14_listener() { return ctx.goToPage("contact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Contact ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_16_listener() { return ctx.goToPage("/"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Madalina");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Eleonora");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_21_listener() { return ctx.goToPage("/"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_23_listener() { return ctx.goToPage("projects"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_25_listener() { return ctx.goToPage("skills"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Skills ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_27_listener() { return ctx.goToPage("experience"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Experience ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_29_listener() { return ctx.goToPage("contact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Contact ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "app-custom-svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "app-custom-svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r0.menuOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.menuOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.isPageSelected("/")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.isPageSelected("/projects")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.isPageSelected("/skills")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx.isPageSelected("/experience")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, ctx.isPageSelected("/contact")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c0, ctx.isPageSelected("/")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c0, ctx.isPageSelected("/projects")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c0, ctx.isPageSelected("/skills")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](29, _c0, ctx.isPageSelected("/experience")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](31, _c0, ctx.isPageSelected("/contact")));
    } }, directives: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuTrigger"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuItem"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _custom_svg_custom_svg_component__WEBPACK_IMPORTED_MODULE_4__["CustomSvgComponent"]], styles: ["app-header {\n  display: flex;\n  height: 30px;\n  flex-flow: row;\n  background-color: #18191A;\n  align-items: center;\n  justify-content: space-between;\n  padding: 15px;\n  margin-top: -60px;\n  position: fixed;\n  width: -webkit-fill-available;\n  z-index: 99999;\n}\napp-header .menu-icon {\n  display: none;\n}\napp-header .title {\n  cursor: pointer;\n  text-transform: uppercase;\n  font-size: 1rem;\n  font-weight: normal;\n  color: #FFFFFF;\n  margin: 0 10px;\n}\napp-header .title span {\n  color: #d02929;\n}\napp-header .title:hover span {\n  color: #FFFFFF;\n}\napp-header .links {\n  flex-flow: row;\n  display: flex;\n  margin-right: auto;\n}\napp-header .links div {\n  margin: 0 10px;\n  text-decoration: none;\n  font-weight: bold;\n  color: white !important;\n}\napp-header .links div:hover {\n  color: #d02929 !important;\n  cursor: pointer;\n}\napp-header .links .selected-page {\n  color: #d02929 !important;\n}\napp-header a {\n  margin: 0 10px !important;\n}\n@media (max-width: 800px) {\n  app-header .links {\n    display: none;\n  }\n  app-header .menu-icon {\n    display: inline;\n  }\n  app-header .title {\n    margin: auto;\n  }\n}\n@media (max-width: 800px) {\n  app-header .social-icons-wrapper {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQ05NO0VET04sbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7QUFERjtBQUdFO0VBQ0UsYUFBQTtBQURKO0FBSUU7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQ3BCSTtFRHFCSixjQUFBO0FBRko7QUFJSTtFQUNFLGNDdkJJO0FEcUJWO0FBT0k7RUFDRSxjQzlCRTtBRHlCUjtBQVNFO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQVBKO0FBU0k7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FBUE47QUFTSTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQVBOO0FBVUk7RUFDRSx5QkFBQTtBQVJOO0FBWUU7RUFDRSx5QkFBQTtBQVZKO0FBYUU7RUFDRTtJQUNFLGFBQUE7RUFYSjtFQWFFO0lBQ0UsZUFBQTtFQVhKO0VBYUU7SUFDRSxZQUFBO0VBWEo7QUFDRjtBQWNFO0VBQ0U7SUFDRSxhQUFBO0VBWko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuYXBwLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgZmxleC1mbG93OiByb3c7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDogLTYwcHg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gIHotaW5kZXg6IDk5OTk5O1xyXG5cclxuICAubWVudS1pY29uIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAudGl0bGUge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgbWFyZ2luOiAwIDEwcHg7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgIGNvbG9yOiAkcHJpbWFyeTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50aXRsZTpob3ZlciB7XHJcbiAgICBzcGFuIHtcclxuICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5saW5rcyB7XHJcbiAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblxyXG4gICAgZGl2IHtcclxuICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgZGl2OmhvdmVyIHtcclxuICAgICAgY29sb3I6ICRwcmltYXJ5ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuc2VsZWN0ZWQtcGFnZSB7XHJcbiAgICAgIGNvbG9yOiAkcHJpbWFyeSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICBtYXJnaW46IDAgMTBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAubGlua3Mge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLm1lbnUtaWNvbiB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIH1cclxuICAgIC50aXRsZSB7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgLnNvY2lhbC1pY29ucy13cmFwcGVyIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiJGJsYWNrOiAjMTgxOTFBO1xyXG4kZ3JheTogIzRmNGY0ZjtcclxuJGxpZ2h0Z3JheTogIzljOTM5MztcclxuJGJhY2tncm91bmQ6ICNGOEY4RkY7XHJcbiR3aGl0ZTogI0ZGRkZGRjtcclxuJHByaW1hcnk6ICNkMDI5Mjk7XHJcbiRwcmltYXJ5b3BhY2l0eTogI2QwMjkyOTJiOyJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "2yNh":
/*!**************************************************!*\
  !*** ./src/app/pages/skills/skills.component.ts ***!
  \**************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_assets_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/assets/data */ "6Xnp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _components_skill_card_skill_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/skill-card/skill-card.component */ "fTIr");
/* harmony import */ var _components_info_card_info_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/info-card/info-card.component */ "kya/");






function SkillsComponent_app_skill_card_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-skill-card", 4);
} if (rf & 2) {
    const skill_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", skill_r2);
} }
function SkillsComponent_app_info_card_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-info-card", 4);
} if (rf & 2) {
    const certification_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", certification_r3);
} }
class SkillsComponent {
    constructor() {
        this.columns = ['logo', 'name', 'organization'];
        this.skills = src_assets_data__WEBPACK_IMPORTED_MODULE_1__["SKILLS"];
        this.certifications = src_assets_data__WEBPACK_IMPORTED_MODULE_1__["CERTIFICATIONS"];
        this.keysSkills = Object.keys(this.skills);
    }
    ngOnInit() {
    }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(); };
SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 10, vars: 2, consts: [[1, "category"], [1, "category-name"], [1, "category-items"], [3, "item", 4, "ngFor", "ngForOf"], [3, "item"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SkillsComponent_app_skill_card_4_Template, 1, 1, "app-skill-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Certifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SkillsComponent_app_info_card_9_Template, 1, 1, "app-info-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.certifications);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _components_skill_card_skill_card_component__WEBPACK_IMPORTED_MODULE_3__["SkillCardComponent"], _components_info_card_info_card_component__WEBPACK_IMPORTED_MODULE_4__["InfoCardComponent"]], styles: ["app-skills {\n  display: flex;\n  flex-flow: column;\n}\napp-skills .category .category-name {\n  font-weight: bold;\n  padding: 10px 0;\n  font-size: medium;\n  font-size: 1.5rem;\n  text-align: -webkit-center;\n}\napp-skills .category .category-items {\n  display: flex;\n  flex-flow: wrap;\n  justify-content: center;\n}\napp-skills .category .category-items.courses {\n  display: flex;\n  flex-flow: column;\n  margin: 0 10%;\n}\napp-skills .category .category-items.courses .course {\n  display: flex;\n  align-items: center;\n  padding: 10px;\n}\napp-skills .category .category-items.courses .course .image-course {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\napp-skills .category .category-items.courses .course .course-detail {\n  padding-left: 10px;\n}\napp-skills .category .category-items .name {\n  font-weight: bold;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQURGO0FBS0k7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUFITjtBQU1JO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQUpOO0FBTU07RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FBSlI7QUFNUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFKVjtBQU1VO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUpaO0FBT1U7RUFDRSxrQkFBQTtBQUxaO0FBVU07RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUFSUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NraWxscy9za2lsbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbmFwcC1za2lsbHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcblxyXG4gIC5jYXRlZ29yeSB7XHJcblxyXG4gICAgLmNhdGVnb3J5LW5hbWUge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXRlZ29yeS1pdGVtcyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZmxvdzogd3JhcDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAmLmNvdXJzZXMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICAgICAgbWFyZ2luOiAwIDEwJTtcclxuXHJcbiAgICAgICAgLmNvdXJzZSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gICAgICAgICAgLmltYWdlLWNvdXJzZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuY291cnNlLWRldGFpbCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5uYW1lIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skills',
                templateUrl: './skills.component.html',
                styleUrls: ['./skills.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "6Xnp":
/*!****************************!*\
  !*** ./src/assets/data.ts ***!
  \****************************/
/*! exports provided: PROJECTS, SKILLS, CERTIFICATIONS, EDUCATION, AWARDS, OTHER_PUBLICATIONS, EXPERIENCE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROJECTS", function() { return PROJECTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SKILLS", function() { return SKILLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CERTIFICATIONS", function() { return CERTIFICATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDUCATION", function() { return EDUCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AWARDS", function() { return AWARDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OTHER_PUBLICATIONS", function() { return OTHER_PUBLICATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPERIENCE", function() { return EXPERIENCE; });
const PROJECTS = [
    {
        id: 1,
        featured: true,
        category: 'design',
        name: 'Photography',
        startDate: 'Jun 2018',
        endDate: 'Present',
        type: 'Personal project',
        technologies: ['Photoshop', 'Lightroom', 'Photography'],
        live: 'https://www.viewbug.com/member/madalinaeleonorag',
        images: [
            '../assets/projects/1/1.jpg',
            '../assets/projects/1/2.jpg',
            '../assets/projects/1/3.jpg',
            '../assets/projects/1/4.jpg',
            '../assets/projects/1/5.jpg',
            '../assets/projects/1/6.jpg',
            '../assets/projects/1/7.jpg',
            '../assets/projects/1/8.jpg',
            '../assets/projects/1/9.jpg',
            '../assets/projects/1/10.jpg',
            '../assets/projects/1/11.jpg',
            '../assets/projects/1/12.jpg',
            '../assets/projects/1/13.jpg',
            '../assets/projects/1/14.jpg',
            '../assets/projects/1/15.jpg',
            '../assets/projects/1/16.jpg',
            '../assets/projects/1/17.jpg',
            '../assets/projects/1/18.jpg',
            '../assets/projects/1/19.jpg',
            '../assets/projects/1/20.jpg',
            '../assets/projects/1/21.jpg',
            '../assets/projects/1/22.jpg',
            '../assets/projects/1/23.jpg',
            '../assets/projects/1/24.jpg',
            '../assets/projects/1/25.jpg',
            '../assets/projects/1/26.jpg',
            '../assets/projects/1/27.jpg',
            '../assets/projects/1/28.jpg',
            '../assets/projects/1/29.jpg',
            '../assets/projects/1/30.jpg',
            '../assets/projects/1/31.jpg',
            '../assets/projects/1/32.jpg',
            '../assets/projects/1/33.jpg',
            '../assets/projects/1/34.jpg',
            '../assets/projects/1/35.jpg',
            '../assets/projects/1/36.jpg',
            '../assets/projects/1/37.jpg',
            '../assets/projects/1/38.jpg',
            '../assets/projects/1/39.jpg'
        ],
        logo: '../assets/projects/1/4.jpg'
    },
    {
        id: 2,
        name: 'Madalina Eleonora - Furniture Design',
        startDate: 'Dec 2018',
        category: 'design',
        featured: true,
        endDate: 'Present',
        technologies: ['Photoshop'],
        type: 'Personal project',
        description: `
            Long time ago I started drawing furniture design for my own place or for others, discovering that I have a passion for it.
        `,
        images: [
            '../assets/projects/2/1.png',
            '../assets/projects/2/2.png',
            '../assets/projects/2/3.png',
            '../assets/projects/2/4.png',
            '../assets/projects/2/5.png'
        ],
        logo: '../assets/projects/2/1.png'
    },
    {
        id: 3,
        name: 'CRUD PHP MySQL',
        startDate: 'Feb 2021',
        endDate: 'Feb 2021',
        category: 'programming',
        technologies: ['HTML', 'CSS', 'PHP', 'MySQL'],
        type: 'Personal project',
        code: 'https://github.com/madalinaeleonorag/CRUD-PHP-mySQL',
        description: `
            CRUD PHP and MySQL application
        `,
        images: [
            '../assets/projects/3/1.png',
            '../assets/projects/3/2.png',
            '../assets/projects/3/3.png',
            '../assets/projects/3/4.png',
        ],
        logo: '../assets/projects/3/4.png',
    },
    {
        id: 4,
        name: 'FreeCodeCamp.com Projects',
        startDate: 'Sep 2020',
        endDate: 'Present',
        category: 'programming',
        technologies: ['HTML', 'CSS'],
        type: 'Course',
        code: 'https://github.com/madalinaeleonorag/FreeCodeCamp.com-Projects',
        description: `
            Projects made by following the courses from FreeCodeCamp.com<br><br>
            This includes:<br>
            1. Responsive Web Design Certification Projects<br>
            - Tribute page;<br>
            - Form page;<br>
            - Landing page;<br>
            - Technical page;<br>
            - Portfolio page.
        `,
        images: [
            '../assets/projects/4/1.png',
            '../assets/projects/4/2.png',
            '../assets/projects/4/3.png',
            '../assets/projects/4/4.png',
            '../assets/projects/4/5.png',
        ],
        logo: '../assets/projects/4/3.png',
    },
    {
        id: 5,
        name: 'JavaScript30 Wes Bos Challenge',
        startDate: 'Nov 2020',
        endDate: 'Dec 2020',
        category: 'programming',
        technologies: ['HTML', 'CSS', 'Javascript'],
        type: 'Challenge',
        code: 'https://github.com/madalinaeleonorag/JavaScript30-WesBos-Challenge',
        description: `30 day vanilla JS coding challenge from Web Bos`,
        images: [
            'https://github.com/madalinaeleonorag/JavaScript30-WesBos-Challenge/raw/main/screenshots/01.png',
            'https://raw.githubusercontent.com/madalinaeleonorag/JavaScript30-WesBos-Challenge/main/screenshots/02.png',
            'https://github.com/madalinaeleonorag/JavaScript30-WesBos-Challenge/raw/main/screenshots/03.png',
            'https://github.com/madalinaeleonorag/JavaScript30-WesBos-Challenge/raw/main/screenshots/04-1.png',
            'https://github.com/madalinaeleonorag/JavaScript30-WesBos-Challenge/raw/main/screenshots/05.png',
            'https://raw.githubusercontent.com/madalinaeleonorag/JavaScript30-WesBos-Challenge/main/screenshots/06.png',
            'https://github.com/madalinaeleonorag/JavaScript30-WesBos-Challenge/raw/main/screenshots/07.png',
            'https://github.com/madalinaeleonorag/JavaScript30-WesBos-Challenge/raw/main/screenshots/08-update.png',
            'https://github.com/madalinaeleonorag/JavaScript30-WesBos-Challenge/raw/main/screenshots/09.png',
            'https://github.com/madalinaeleonorag/JavaScript30-WesBos-Challenge/raw/main/screenshots/10.png',
            'https://github.com/madalinaeleonorag/JavaScript30-WesBos-Challenge/raw/main/screenshots/11.png',
            'https://github.com/madalinaeleonorag/JavaScript30-WesBos-Challenge/raw/main/screenshots/12.png',
            'https://github.com/madalinaeleonorag/JavaScript30-WesBos-Challenge/raw/main/screenshots/13.png',
            'https://github.com/madalinaeleonorag/JavaScript30-WesBos-Challenge/raw/main/screenshots/14.png',
            'https://github.com/madalinaeleonorag/JavaScript30-WesBos-Challenge/raw/main/screenshots/15.png',
            'https://github.com/madalinaeleonorag/JavaScript30-WesBos-Challenge/raw/main/screenshots/16.png',
            'https://github.com/madalinaeleonorag/JavaScript30-WesBos-Challenge/raw/main/screenshots/17.png',
            'https://github.com/madalinaeleonorag/JavaScript30-WesBos-Challenge/raw/main/screenshots/18.png',
            'https://github.com/madalinaeleonorag/JavaScript30-WesBos-Challenge/raw/main/screenshots/19.png',
            'https://github.com/madalinaeleonorag/JavaScript30-WesBos-Challenge/raw/main/screenshots/20.png',
            'https://github.com/madalinaeleonorag/JavaScript30-WesBos-Challenge/raw/main/screenshots/21.png',
            'https://github.com/madalinaeleonorag/JavaScript30-WesBos-Challenge/raw/main/screenshots/22.png',
            'https://github.com/madalinaeleonorag/JavaScript30-WesBos-Challenge/raw/main/screenshots/23.png',
            'https://github.com/madalinaeleonorag/JavaScript30-WesBos-Challenge/raw/main/screenshots/24.png',
            'https://github.com/madalinaeleonorag/JavaScript30-WesBos-Challenge/raw/main/screenshots/25.png',
            'https://github.com/madalinaeleonorag/JavaScript30-WesBos-Challenge/raw/main/screenshots/26.png',
            'https://github.com/madalinaeleonorag/JavaScript30-WesBos-Challenge/raw/main/screenshots/27.png',
            'https://github.com/madalinaeleonorag/JavaScript30-WesBos-Challenge/raw/main/screenshots/28.png',
            'https://github.com/madalinaeleonorag/JavaScript30-WesBos-Challenge/raw/main/screenshots/29.png',
            'https://github.com/madalinaeleonorag/JavaScript30-WesBos-Challenge/raw/main/screenshots/30.png'
        ],
        logo: 'https://raw.githubusercontent.com/madalinaeleonorag/24days-of-JavaScriptmas-by-Scrimba/master/screenshots/24.jpg'
    },
    {
        id: 6,
        featured: true,
        name: 'Learning League - Hipo DevHack Hackathon',
        startDate: 'Nov 2020',
        category: 'programming',
        technologies: ['HTML', 'CSS', 'Javascript', 'Vue', 'Vuetify', 'CometChat', 'Firebase'],
        type: 'Hackathon',
        code: 'https://github.com/madalinaeleonorag/LearningLeague-Hipo-DevHack-Hackathon',
        live: 'https://devhacks2020-1c585.web.app',
        description: `
      Education application created using Vue.js CLI version 2.6.11 with Vuetify. Video and voice calling are made through CometChat and data is saved through Firebase.
      Key Features:<br>
      1. The user can login into the platform as a teacher or as a student<br>
      2. As a teacher the user will have access to all of the app resources<br>
      3. As a student the user will have access only on what the teacher shares with him for security purposes and for creating a community based on trust<br>
      4. On the homepage the user will have the following options:<br>
      - search for uploaded resources by other teachers or students and download them;<br>
      - upload resources with selecting the privacy type to define which users can access the resource;<br>
      - view classrooms and filter them by name or description;<br>
      - view courses and filter them by name or description;<br>
      - take tests from different categories.<br>
      5. The user can search for resources, download them and filter them by name or description<br>
      6. The user can enter several classrooms where they can talk about different topics with or without a teacher<br>
      7. Users can make voice calls, video calls, share screen in the chatroom and upload/download documents<br>
      8. User can take courses in order to develop their e-learning skills<br>
      9. Users cand take tests in order to verify their knowledges from different categories
      `,
        images: [
            'https://github.com/madalinaeleonorag/LearningLeague-Hipo-DevHack-Hackathon/raw/master/src/assets/1.png?raw=true',
            'https://github.com/madalinaeleonorag/LearningLeague-Hipo-DevHack-Hackathon/raw/master/src/assets/2.png?raw=true',
            'https://github.com/madalinaeleonorag/LearningLeague-Hipo-DevHack-Hackathon/raw/master/src/assets/3.png?raw=true',
            'https://github.com/madalinaeleonorag/LearningLeague-Hipo-DevHack-Hackathon/raw/master/src/assets/4.png?raw=true',
            'https://github.com/madalinaeleonorag/LearningLeague-Hipo-DevHack-Hackathon/raw/master/src/assets/5.png?raw=true',
            'https://github.com/madalinaeleonorag/LearningLeague-Hipo-DevHack-Hackathon/raw/master/src/assets/6.png?raw=true',
            'https://github.com/madalinaeleonorag/LearningLeague-Hipo-DevHack-Hackathon/raw/master/src/assets/7.png?raw=true',
            'https://github.com/madalinaeleonorag/LearningLeague-Hipo-DevHack-Hackathon/raw/master/src/assets/8.png?raw=true',
            'https://github.com/madalinaeleonorag/LearningLeague-Hipo-DevHack-Hackathon/raw/master/src/assets/9.png?raw=true',
            'https://github.com/madalinaeleonorag/LearningLeague-Hipo-DevHack-Hackathon/raw/master/src/assets/10.png?raw=true',
            'https://github.com/madalinaeleonorag/LearningLeague-Hipo-DevHack-Hackathon/raw/master/src/assets/11.png?raw=true',
            'https://github.com/madalinaeleonorag/LearningLeague-Hipo-DevHack-Hackathon/raw/master/src/assets/12.png?raw=true'
        ],
        logo: 'assets/projects/3.png'
    },
    {
        id: 7,
        name: 'ToDo App',
        startDate: 'Aug 2020',
        category: 'programming',
        technologies: ['HTML', 'CSS', 'Javascript', 'Vue', 'Vuetify', 'SweetAlert2', 'Firebase'],
        type: 'Personal project',
        code: 'https://github.com/madalinaeleonorag/Todo',
        live: 'https://todovuevuetify.web.app',
        description: `
      Todo application created using HTML, Vue.js, Vuetify and JavaScript.<br>
      This project was created using Vue.js CLI version 2.6.11 with Vuetify, SweetAlert2. Data is saved through local storage.<br>
      Key Features:<br>
      - Create a task with priority and due date;<br>
      - Edit or delete a task;<br>
      - Mark task as completed;<br>
      - Views tasks in lists according to their status ('Overdue', 'To do', 'Done items') or in a calendar;<br>
      - Filter tasks by priority or due date;<br>
      - Data saved through local storage.
      `,
        images: [
            'https://github.com/madalinaeleonorag/Todo/raw/master/src/assets/1.png?raw=true',
            'https://github.com/madalinaeleonorag/Todo/raw/master/src/assets/2.png?raw=true',
            'https://github.com/madalinaeleonorag/Todo/raw/master/src/assets/3.png?raw=true'
        ],
        logo: 'assets/projects/4.png'
    },
    {
        id: 8,
        featured: true,
        name: 'UniversityRating',
        startDate: 'Jul 2018',
        endDate: 'Jul 2020',
        category: 'programming',
        type: 'Personal project',
        technologies: ['HTML', 'CSS', 'Javascript', 'Sass', 'Angular', 'Angular Material', 'Microsoft Text Analytics', 'RxJs', 'Google Charts', 'Google Maps'],
        code: 'https://github.com/madalinaeleonorag/UniversityRating',
        live: 'https://universityraking.web.app',
        description: `
      In this application you can search for your best option through hundred of updated universities around the world. Users can grade and add a comment to institutions so others can see if it fits for them. Only verified ratings, using Microsoft Text Analysis will be displayed. After creating an account, the user can activate it to claim a university and add verified informations about it. The user needs to provide full informations and will be contacted by administrators in order to securely activate the account. The information accuracy depends on institution representant.<br>
      This project was created using Angular CLI version 8.3.2 with TypeScript, Angular Material, Microsoft Text Analytics, Google Maps API, Google Charts and RxJs. For database used to store the data is Firebase Firestore.
      `,
        images: [
            'https://github.com/madalinaeleonorag/UniversityRating/raw/master/src/assets/presentation/homepage.png',
            'https://github.com/madalinaeleonorag/UniversityRating/raw/master/src/assets/presentation/login.png',
            'https://github.com/madalinaeleonorag/UniversityRating/raw/master/src/assets/presentation/search.png',
            'https://github.com/madalinaeleonorag/UniversityRating/raw/master/src/assets/presentation/university.png',
            'https://github.com/madalinaeleonorag/UniversityRating/raw/master/src/assets/presentation/faculty.png',
            'https://github.com/madalinaeleonorag/UniversityRating/raw/master/src/assets/presentation/course.png',
            'https://github.com/madalinaeleonorag/UniversityRating/raw/master/src/assets/presentation/user-details.png',
            'https://github.com/madalinaeleonorag/UniversityRating/raw/master/src/assets/presentation/university-edit.png',
            'https://github.com/madalinaeleonorag/UniversityRating/raw/master/src/assets/presentation/faculty-edit.png',
            'https://github.com/madalinaeleonorag/UniversityRating/raw/master/src/assets/presentation/barcharts.png',
            'https://github.com/madalinaeleonorag/UniversityRating/raw/master/src/assets/presentation/piecharts.png',
            'https://github.com/madalinaeleonorag/UniversityRating/raw/master/src/assets/presentation/raports.png',
            'https://github.com/madalinaeleonorag/UniversityRating/raw/master/src/assets/presentation/requests.png',
            'https://github.com/madalinaeleonorag/UniversityRating/raw/master/src/assets/presentation/database.png'
        ],
        logo: 'https://raw.githubusercontent.com/madalinaeleonorag/UniversityRating/master/src/assets/presentation/homepage.png'
    },
    {
        id: 9,
        featured: true,
        name: 'Exams Schedule',
        startDate: 'Apr 2020',
        category: 'programming',
        endDate: 'May 2020',
        technologies: ['HTML', 'CSS', 'Javascript', 'Firebase', 'React', 'AXIOS', 'Redux', 'Sass'],
        type: 'Personal project',
        code: 'https://github.com/madalinaeleonorag/ExamsSchedule',
        live: 'https://reactproject-df131.web.app',
        description: `
      Application that allows the management of university exams.<br>
      This project was created using React.js, axios, Redux and Sass.<br>
      For database used to store the data is Firebase Realtime Database.
      `,
        images: [
            'https://github.com/madalinaeleonorag/ExamsSchedule/raw/master/src/assets/homepage.png',
            'https://github.com/madalinaeleonorag/ExamsSchedule/raw/master/src/assets/exams-grid.png',
            'https://github.com/madalinaeleonorag/ExamsSchedule/raw/master/src/assets/archive.png',
            'https://github.com/madalinaeleonorag/ExamsSchedule/raw/master/src/assets/add-exam.png',
            'https://github.com/madalinaeleonorag/ExamsSchedule/raw/master/src/assets/edit-exam.png',
            'https://github.com/madalinaeleonorag/ExamsSchedule/raw/master/src/assets/edit-remove-exam.png'
        ],
        logo: 'https://raw.githubusercontent.com/madalinaeleonorag/ExamsSchedule/master/src/assets/homepage.png'
    },
    {
        id: 10,
        name: 'Madalina Eleonora - Graphic Design',
        startDate: 'June 2015',
        endDate: 'Present',
        category: 'design',
        featured: true,
        technologies: ['Photoshop'],
        type: 'Personal project',
        description: `
            Providing logos for different clients and pro bono`,
        images: [
            'assets/projects/10/1.png',
            'assets/projects/10/2.png',
            'assets/projects/10/3.png',
            'assets/projects/10/4.png',
            'assets/projects/10/5.png',
            'assets/projects/10/6.png'
        ],
        logo: 'assets/projects/10/2.png'
    },
    {
        id: 11,
        name: 'Johnny\'z website',
        startDate: 'May 2019',
        endDate: 'Oct 2019',
        category: 'programming',
        technologies: ['CSS', 'Wordpress'],
        type: 'Personal project',
        live: 'https://www.johnnypizza.ro/',
        description: `Is a site created in Wordpress, the result of a faculty project and currently used as the official site of Johhny'z restaurants.`,
        images: [
            'assets/projects/11/1.png',
            'assets/projects/11/2.png',
            'assets/projects/11/3.png',
            'assets/projects/11/4.png',
            'assets/projects/11/5.png',
            'assets/projects/11/6.png'
        ],
        logo: 'assets/projects/11/1.png'
    },
    {
        id: 12,
        name: 'TeachMe',
        startDate: 'Mar 2019',
        category: 'programming',
        endDate: 'May 2019',
        technologies: ['HTML', 'CSS', 'Javascript', 'Vue', 'Vuetify', 'Ionic', 'Firebase'],
        type: 'Personal project',
        code: 'https://github.com/madalinaeleonorag/TeachMeSecure',
        live: 'https://teachme-7a1a2.web.app/login',
        description: `
      TeachMe mobile application created using Vue.js, Vuex, Ionic and Firebase which helps you learn new things by taking several courses.
      <br>
      Key features:<br>
      - Create an account and login;<br>
      - Take different courses from multiple categories (IT software and hardware, languages, general knowledge);<br>
      - Each course has a theory part and a quiz at the end;<br>
      - Keep track on how many courses did you finish;<br>
      - Collect points from every test you take.
      `,
        images: [
            'https://github.com/madalinaeleonorag/TeachMe/raw/master/src/assets/login%20.png?raw=true',
            'https://github.com/madalinaeleonorag/TeachMe/raw/master/src/assets/signup.png?raw=true',
            'https://github.com/madalinaeleonorag/TeachMe/raw/master/src/assets/hp2.png?raw=true',
            'https://github.com/madalinaeleonorag/TeachMe/raw/master/src/assets/theory.png?raw=true',
            'https://github.com/madalinaeleonorag/TeachMe/raw/master/src/assets/quiz.png?raw=true',
            'https://github.com/madalinaeleonorag/TeachMe/raw/master/src/assets/results.png?raw=true'
        ],
        logo: 'https://raw.githubusercontent.com/madalinaeleonorag/TeachMe/master/src/assets/hp2.png'
    },
    {
        id: 13,
        name: 'PhotoBooking - RauDevHack Hackathon',
        startDate: 'Apr 2019',
        category: 'programming',
        technologies: ['HTML', 'CSS', 'Javascript', 'Vue', 'Vuetify', 'Firebase'],
        type: 'Hackathon',
        code: 'https://github.com/madalinaeleonorag/PhotoBooking-URA-RauDevHack-Hackathon',
        description: `
      PhotoBooking App that recommends a suitable photographer for a customer's event, according to his visual preferences, budget and period. Application created using Vue.js, Vuetify, Vuex, Firebase.
      <br>
      Features:<br>
      - Users can login into the platform as a customer or as a photographer;<br>
      - Customers can take a test so that the app can recommend the best photographer for their event, according to their visual preferences, budget and period;<br>
      - Users can access their profile (as customer or photographer) where they can change their details;<br>
      - Both types of users cand see a list of their requests and status;<br>
      - Informations are saved through Firebase.
      `,
        images: [
            'https://github.com/madalinaeleonorag/PhotoBooking-URA-RauDevHack-Hackathon/raw/master/src/assets/hp.png?raw=true',
            'https://github.com/madalinaeleonorag/PhotoBooking-URA-RauDevHack-Hackathon/raw/master/src/assets/login.png?raw=true',
            'https://github.com/madalinaeleonorag/PhotoBooking-URA-RauDevHack-Hackathon/raw/master/src/assets/signup.png?raw=true',
            'https://github.com/madalinaeleonorag/PhotoBooking-URA-RauDevHack-Hackathon/raw/master/src/assets/profile.png?raw=true',
            'https://github.com/madalinaeleonorag/PhotoBooking-URA-RauDevHack-Hackathon/raw/master/src/assets/test1.png?raw=true',
            'https://github.com/madalinaeleonorag/PhotoBooking-URA-RauDevHack-Hackathon/raw/master/src/assets/test2.png?raw=true',
            'https://github.com/madalinaeleonorag/PhotoBooking-URA-RauDevHack-Hackathon/raw/master/src/assets/test3.png?raw=true',
            'https://github.com/madalinaeleonorag/PhotoBooking-URA-RauDevHack-Hackathon/raw/master/src/assets/test4.png?raw=true',
            'https://github.com/madalinaeleonorag/PhotoBooking-URA-RauDevHack-Hackathon/raw/master/src/assets/table.png?raw=true'
        ],
        logo: 'assets/projects/10.png'
    },
    {
        id: 14,
        name: 'SmileSharing App - Do IT Girls! Hackathon. Powered by Microsoft',
        startDate: 'Mar 2019',
        category: 'programming',
        technologies: ['HTML', 'CSS', 'Javascript', 'Vue', 'Vuetify', 'Firebase'],
        type: 'Hackathon',
        code: 'https://github.com/madalinaeleonorag/SmileSharingApp-Microsoft-DoITGirls-Hackathon',
        live: 'https://doitgirls-ed93d.web.app',
        description: `
      Ride sharing application created using HTML, Vue.js, Vuetify, JavaScript and Google Maps.
      <br>
      Key Features:<br>
      - View list of rides;<br>
      - Filter rides by locality leaving, locality going or by car model;<br>
      - Login in order to add or book a ride;<br>
      - Show route on Google Maps by pressing the 'View recomanded route' button;<br>
      - Book a ride by pressing the 'Go with this driver' button;<br>
      - Add a ride by completing a form;<br>
      - View profile page which includes personal informations (name, phone number, email address) and the rides situation;<br>
      - View user's rides list: one where the user is booked as a passenger and one where the user is the driver of the car;<br>
      - View rides details.
      `,
        images: [
            'https://github.com/madalinaeleonorag/SmileSharingApp-Microsoft-DoITGirls-Hackathon/raw/master/src/assets/1.png?raw=true',
            'https://github.com/madalinaeleonorag/SmileSharingApp-Microsoft-DoITGirls-Hackathon/raw/master/src/assets/2.png?raw=true',
            'https://github.com/madalinaeleonorag/SmileSharingApp-Microsoft-DoITGirls-Hackathon/raw/master/src/assets/3.png?raw=true',
            'https://github.com/madalinaeleonorag/SmileSharingApp-Microsoft-DoITGirls-Hackathon/raw/master/src/assets/4.png?raw=true',
            'https://github.com/madalinaeleonorag/SmileSharingApp-Microsoft-DoITGirls-Hackathon/raw/master/src/assets/5.png?raw=true'
        ],
        logo: 'https://raw.githubusercontent.com/madalinaeleonorag/SmileSharingApp-Microsoft-DoITGirls-Hackathon/master/src/assets/1.png'
    },
    {
        id: 15,
        name: 'Rap Jobs - Hipo DevHack Hackathon',
        startDate: 'Nov 2018',
        category: 'programming',
        technologies: ['HTML', 'CSS', 'Javascript', 'Vue', 'Vuetify', 'Firebase'],
        type: 'Hackathon',
        code: 'https://github.com/madalinaeleonorag/RapJobs-Hipo-DevHack-Hackathon',
        live: 'https://devhacks2018.web.app/',
        description: `
      This application allows candidates from Romania the possibility to offer reviews/ratings to companies about key areas such as:
      - recruitment process
      - work environment (team, schedule, etc)
      - trainings, learning and development opportunities
      - salary & benefits
      - work-life balance
      - management
      - internal systems (procedures, values, way of working)
      - other relevant areas
      The aim of this product is to help candidates find the employer that best suits their needs and personality, using our personality test
      `,
        images: [
            'https://github.com/madalinaeleonorag/RapJobs-Hipo-DevHack-Hackathon/raw/master/src/assets/hp.png?raw=true',
            'https://github.com/madalinaeleonorag/RapJobs-Hipo-DevHack-Hackathon/raw/master/src/assets/login.png?raw=true',
            'https://github.com/madalinaeleonorag/RapJobs-Hipo-DevHack-Hackathon/raw/master/src/assets/signup.png?raw=true',
            'https://github.com/madalinaeleonorag/RapJobs-Hipo-DevHack-Hackathon/raw/master/src/assets/test.png?raw=true',
            'https://github.com/madalinaeleonorag/RapJobs-Hipo-DevHack-Hackathon/raw/master/src/assets/search.png?raw=true',
            'https://github.com/madalinaeleonorag/RapJobs-Hipo-DevHack-Hackathon/raw/master/src/assets/company.png?raw=true',
            'https://github.com/madalinaeleonorag/RapJobs-Hipo-DevHack-Hackathon/raw/master/src/assets/profile.png?raw=true'
        ],
        logo: 'assets/projects/12.png'
    },
    {
        id: 16,
        name: 'Waffic',
        startDate: 'Mar 2018',
        category: 'programming',
        endDate: 'Jul 2018',
        technologies: ['HTML', 'CSS', 'Javascript', 'Vue', 'Vuetify', 'Firebase'],
        type: 'Personal project',
        code: 'https://github.com/madalinaeleonorag/Waffic',
        live: 'https://waffic1997.web.app',
        description: `
      Integrated application for tracking weather and traffic conditions, using AccuWeather, Google Maps and Google Charts APIs.<br>
      This project was created using Vue.js CLI version 2.5.2 with Vuetify, Google Maps API, Google Charts, VUEX and Router. For database used to store the data is Firebase Realtime Database.
      `,
        images: [
            'https://github.com/madalinaeleonorag/Waffic/raw/master/src/assets/Presentation/homepage.jpg',
            'https://github.com/madalinaeleonorag/Waffic/raw/master/src/assets/Presentation/signup.jpg',
            'https://github.com/madalinaeleonorag/Waffic/raw/master/src/assets/Presentation/collaborations.jpg',
            'https://github.com/madalinaeleonorag/Waffic/raw/master/src/assets/Presentation/contact.jpg',
            'https://github.com/madalinaeleonorag/Waffic/raw/master/src/assets/Presentation/tutorial.jpg',
            'https://github.com/madalinaeleonorag/Waffic/raw/master/src/assets/Presentation/user-profile.jpg',
            'https://github.com/madalinaeleonorag/Waffic/raw/master/src/assets/Presentation/travel-history.jpg',
            'https://github.com/madalinaeleonorag/Waffic/raw/master/src/assets/Presentation/map.jpg',
            'https://github.com/madalinaeleonorag/Waffic/raw/master/src/assets/Presentation/admin-account.jpg',
            'https://github.com/madalinaeleonorag/Waffic/raw/master/src/assets/Presentation/messages.jpg',
            'https://github.com/madalinaeleonorag/Waffic/raw/master/src/assets/Presentation/statistics.png',
            'https://github.com/madalinaeleonorag/Waffic/raw/master/src/assets/Presentation/search.png',
            'https://github.com/madalinaeleonorag/Waffic/raw/master/src/assets/Presentation/database.jpg'
        ],
        logo: 'https://raw.githubusercontent.com/madalinaeleonorag/Waffic/master/src/assets/Presentation/map.jpg'
    },
    {
        id: 17,
        name: 'Events Attendances',
        startDate: 'Jan 2018',
        category: 'programming',
        endDate: 'May 2018',
        technologies: ['HTML', 'CSS', 'Javascript', 'Vue', 'Vuetify', 'Firebase'],
        type: 'Personal project',
        code: 'https://github.com/madalinaeleonorag/Events-Attendances',
        live: 'https://attendances-62382.web.app',
        description: `
      Events Attendance App application created using HTML, Vue.js, Element and Firebase.
      <br>
      This project was created using Vue.js CLI version 2.6.11 with Element. Data is saved through Firebase Database and the login is with Firebase Authentification.
      <br>
      Key Features:<br>
      - Create an account and login;<br>
      - Edit profile page;<br>
      - View list of events;<br>
      - Filter events by date ('Past evets', 'This week', 'Next week', 'Future events', 'Anytime');<br>
      - See events details and people attending;<br>
      - Attend event;<br>
      - Data saved through Firebase Database.
      `,
        images: [
            'https://github.com/madalinaeleonorag/Events-Attendances/raw/master/src/assets/1.png?raw=true',
            'https://github.com/madalinaeleonorag/Events-Attendances/raw/master/src/assets/2.png?raw=true',
            'https://github.com/madalinaeleonorag/Events-Attendances/raw/master/src/assets/3.png?raw=true',
            'https://github.com/madalinaeleonorag/Events-Attendances/raw/master/src/assets/4.png?raw=true',
            'https://github.com/madalinaeleonorag/Events-Attendances/raw/master/src/assets/5.png?raw=true',
            'https://github.com/madalinaeleonorag/Events-Attendances/raw/master/src/assets/6.png?raw=true'
        ],
        logo: 'https://raw.githubusercontent.com/madalinaeleonorag/Events-Attendances/master/src/assets/1.png'
    },
    {
        id: 18,
        name: 'Backpropagation',
        startDate: 'Dec 2019',
        category: 'programming',
        technologies: ['C#', 'Visual Studio'],
        type: 'Personal project',
        code: 'https://github.com/madalinaeleonorag/Backpropagation',
        description: `Backpropagation program using C#
        <br><br>
        Last 2 instructions:<br><br>
        
        --------------Instruire: 98
           <br> Se utilizeaza exemplul 1
           <br>
           <br>
           <br> δ5 = -0.0298615276428424
           <br>
           <br> Determinam corectia
           <br> Delta w35 = -0.0018772072410127
           <br> Delta w45 = -0.00259208055658181
           <br> Delta Teta  5 = 0.00298615276428424
           <br>
           <br> Prin calculul gradientului erorii se determina:
           <br> δ3 = 0.010892788230975
           <br> δ4 = -0.001879541855416
           <br>
           <br> Calculam apoi corectiile ponderilor si obtinem:
           <br> Delta w13 = 0
           <br> Delta w23 = 0
           <br> Delta Teta 3 = -0.0010892788230975
           <br> Delta w14 = 0
           <br> Delta w24 = 0
           <br> Delta Teta 4 = 0.0001879541855416
           <br>
           <br> Ajustam toate ponderile si nivelurile pragurilor din retea (biasurile):
           <br> w13 = 0.608353543465978
           <br> w14 = 0.870265059825897
           <br> w23 = 0.507687716489308
           <br> w24 = 0.970573683236741
           <br> w35 = -1.56440823158843
           <br> w45 = 0.546872524323644
           <br> Teta 2 = 0.588576403627556
           <br> Teta 3 = -0.042655277882563
           <br> Teta 4 = 0.932964811489868
           <br> ----Eroare: 0.00101389634619537
           <br>
           <br> Oc,3 = 0.62889163611443
           <br> Oc,4 = 0.868011941669101
           <br> Oc,5 = 0.191217859528008
           <br> Eroare neuron 5, e5 = -0.191217859528008
           <br>
           <br> --------------Instruire: 99
           <br> Se utilizeaza exemplul 2
           <br>
           <br> δ5 = -0.0295725283956396
           <br>
           <br> Determinam corectia
           <br> Delta w35 = -0.00185979157667742
           <br> Delta w45 = -0.00256693077927637
           <br> Delta Teta  5 = 0.00295725283956396
           <br>
           <br> Prin calculul gradientului erorii se determina:
           <br> δ3 = 0.010797298581675
           <br> δ4 = -0.00185282713260552
           <br>
           <br> Calculam apoi corectiile ponderilor si obtinem:
           <br> Delta w13 = 0.0010797298581675
           <br> Delta w23 = 0
           <br> Delta Teta 3 = -0.0010797298581675
           <br> Delta w14 = -0.000185282713260552
           <br> Delta w24 = 0
           <br> Delta Teta 4 = 0.000185282713260552
           <br>
           <br> Ajustam toate ponderile si nivelurile pragurilor din retea (biasurile):
           <br> w13 = 0.609433273324146
           <br> w14 = 0.870079777112637
           <br> w23 = 0.507687716489308
           <br> w24 = 0.970573683236741
           <br> w35 = -1.56626802316511
           <br> w45 = 0.544305593544368
           <br> Teta 2 = 0.587496673769388
           <br> Teta 3 = -0.0424699951693025
           <br> Teta 4 = 0.935922064329432
           <br> ----Eroare: 0.000994549060756069
        `,
        logo: 'https://victorzhou.com/media/nn-series/network.svg'
    },
    {
        id: 19,
        name: 'Sudoku Backtracking',
        startDate: 'Dec 2019',
        category: 'programming',
        technologies: ['C#', 'Visual Studio'],
        type: 'Personal project',
        code: 'https://github.com/madalinaeleonorag/Sudoku_Backtracking',
        description: `Sudoku program made using C# backtracking
        <br><br>
        Initial value of sudoku
        <br>
        <br> int[, ] board = { 
        <br>     { 3, 0, 6, 5, 0, 8, 4, 0, 0 },
        <br>     { 5, 2, 0, 0, 0, 0, 0, 0, 0 },
        <br>     { 0, 8, 7, 0, 0, 0, 0, 3, 1 },
        <br>     { 0, 0, 3, 0, 1, 0, 0, 8, 0 },
        <br>     { 9, 0, 0, 8, 6, 3, 0, 0, 5 },
        <br>     { 0, 5, 0, 0, 9, 0, 6, 0, 0 },
        <br>     { 1, 3, 0, 0, 0, 0, 2, 5, 0 },
        <br>     { 0, 0, 0, 0, 0, 0, 0, 7, 4 },
        <br>     { 0, 0, 5, 2, 0, 6, 3, 0, 0 }
        <br> };
        <br><br> Solution after 770 iterations:
        <br>
        <br> ------------------- 
        <br> | 316 | 578 | 492 | 
        <br> | 529 | 134 | 768 | 
        <br> | 487 | 629 | 531 | 
        <br> ------------------- 
        <br> | 263 | 415 | 987 | 
        <br> | 974 | 863 | 125 | 
        <br> | 851 | 792 | 643 | 
        <br> ------------------- 
        <br> | 138 | 947 | 256 | 
        <br> | 692 | 351 | 874 | 
        <br> | 745 | 286 | 319 | 
        <br> ------------------- `,
        images: ['assets/projects/16.png'],
        logo: 'assets/projects/16.png'
    }
];
const SKILLS = [
    { name: 'HTML5', level: 3, color: '#E85D25', logo: 'HTML5' },
    { name: 'CSS3', level: 2, color: '#249CDA', logo: 'CSS3' },
    { name: 'SCSS', level: 2, color: '#C96195', logo: 'SCSS' },
    { name: 'Bootstrap', level: 2, color: '#533B78', logo: 'Bootstrap' },
    { name: 'Javascript', level: 3, color: '#EFD81D', logo: 'Javascript' },
    { name: 'Vue.js', level: 3, color: '#3FB27F', logo: 'Vuejs' },
    { name: 'Vuex', level: 3, color: '#33475B', logo: 'Vuex' },
    { name: 'Angular', level: 3, color: '#BD002E', logo: 'Angular' },
    { name: 'JQuery', level: 1, color: '#0864A7', logo: 'JQuery' },
    { name: 'Ionic', level: 2, color: '#367CF7', logo: 'Ionic' },
    { name: 'React.js', level: 0, color: '#50BBD7', logo: 'Reactjs' },
    { name: 'Wordpress', level: 1, color: '#207196', logo: 'Wordpress' },
    { name: 'Git', level: 3, color: '#E84E31', logo: 'Git' },
    { name: 'NoSQL', level: 2, color: '#F7C52B', logo: 'NoSQL' },
    { name: 'Photoshop', level: 2, color: '#001D34', logo: 'Photoshop' },
    { name: 'Lightroom', level: 1, color: '#0A232F', logo: 'Lightroom' }
];
const CERTIFICATIONS = [
    {
        logo: 'https://images.youracclaim.com/size/680x680/images/88bef918-2e93-4e68-8782-60f706db53f4/IBM_Quantum_Conversations.png',
        name: 'IBM Quantum Conversations',
        organization: 'IBM',
        issueDate: 'Feb 2021',
        url: 'https://www.youracclaim.com/badges/7e32724d-8e1b-444f-a44d-0c527fd63ca6x'
    },
    {
        logo: 'https://images.youracclaim.com/size/680x680/images/58e2cad5-5551-44a6-8285-06d6a4aa9cb3/IBM_Cloud_Essentials.png',
        name: 'IBM Cloud Essentials',
        organization: 'IBM',
        issueDate: 'Jan 2021',
        url: 'https://www.youracclaim.com/badges/26b0884f-9c3a-42f1-be74-6b23c4f6a743'
    },
    {
        logo: 'https://images.youracclaim.com/size/680x680/images/c1ca6570-bdc6-40e9-8992-722050788418/Security-_-Privacy-by-Design-Foundational.png',
        name: 'Security and Privacy by Design Foundations',
        organization: 'IBM',
        issueDate: 'Jan 2021',
        url: 'https://www.youracclaim.com/badges/84998ca5-487f-4c61-b1e5-298ec991bb20'
    },
    {
        logo: 'https://images.youracclaim.com/size/680x680/images/53608ce6-a597-40fa-a42d-d243b3ecfba4/Watson_and_Cloud_Foundations.png',
        name: 'Watson and Cloud Foundations',
        organization: 'IBM',
        issueDate: 'Jan 2021',
        url: 'https://www.youracclaim.com/badges/11c2db76-b461-4bf9-8a12-9a42663d404f'
    },
    {
        logo: 'https://images.youracclaim.com/size/680x680/images/cef56b02-49c4-43c8-9913-733569bd39cc/IBM-Mentor__282_29.png',
        name: 'IBM Mentor',
        organization: 'IBM',
        issueDate: 'Dec 2020',
        url: 'https://www.youracclaim.com/badges/841adfea-65df-4a8e-bbe1-267d70cb6a21'
    },
    {
        logo: 'https://images.credly.com/size/680x680/images/2acbb8fa-6b28-4b55-87e9-da0839a70ceb/JavaScript-Front-End-Development.png',
        name: 'JavaScript Front End Development',
        organization: 'IBM',
        issueDate: 'Dec 2020',
        url: 'https://www.youracclaim.com/badges/b6792b26-e919-4de1-bc24-d4192439aa50'
    },
    {
        logo: 'https://media-exp1.licdn.com/dms/image/C560BAQH0VNXBrdkklA/company-logo_200_200/0/1593711193383?e=1619049600&v=beta&t=lrBAcOWGtkwOM3MtvBw55FRiEHzMyNwaaeJycjzvC7k',
        name: 'Web Design for Web Developers: Build Beautiful Websites!',
        organization: 'Udemy',
        issueDate: 'Sep 2020',
        url: 'https://udemy-certificate.s3.amazonaws.com/image/UC-4b147be3-753e-47b3-bd44-df452ffc3018.jpg?v=1601294558000'
    },
    {
        logo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQE0iRUqSJueUw/company-logo_200_200/0/1519902704390?e=1619049600&v=beta&t=AmcNPqTADleh6FV8bDZ1yJhJb7QcwaEoZha72rhz4TY',
        name: 'ES SET English Certificate',
        organization: 'EF Standard English Test (EF SET)',
        issueDate: 'Jul 2020',
        url: 'https://www.efset.org/cert/V3b9C2'
    },
    {
        logo: 'https://images.youracclaim.com/size/680x680/images/bc08972c-3c7d-4b99-82a0-c94bcca36674/Badges_v8-07_Practitioner.png',
        name: 'Enterprise Design Thinking Practitioner',
        organization: 'IBM',
        issueDate: 'Mar 2020',
        url: 'https://www.youracclaim.com/badges/f28084ab-7407-4d30-8f84-e612adc40402'
    },
    {
        logo: 'https://images.youracclaim.com/size/680x680/images/a972f054-be07-4845-85c7-95c8d11852f5/IBM-Agile-Explorer.png',
        name: 'IBM Agile Explorer',
        organization: 'IBM',
        issueDate: 'Mar 2020',
        url: 'https://www.youracclaim.com/badges/8ed472e8-38c5-42c0-aee7-c1993e9f737f'
    },
    {
        logo: 'https://images.youracclaim.com/size/680x680/images/faaa312a-4ea2-4094-8287-f34671cdac55/Insurance-Industry-Jumpstart.png',
        name: 'Insurance Industry Foundations',
        organization: 'IBM',
        issueDate: 'Oct 2019',
        url: 'https://www.youracclaim.com/badges/073a4a5e-b2f0-4165-8684-c6a427a005b3'
    }
];
const EDUCATION = [
    {
        school: 'Universitatea Româno-Americană din București',
        degree: 'Master\'s degree',
        fieldOfStudy: 'Computer/Information Technology Administration and Management',
        startYear: '2018',
        endYear: '2020',
        grade: '9.66',
        logo: '../assets/logos/romanian-american university.png',
        description: 'I\'ve assimilated informations about IOT, mobile applications development, web technologies, AI, GDPR, PL/SQL, BigData, project management, WordPress, security of computer networks and E-Commerce. Those knowledges are proved by the projects worked for the graduation of the course. Participation in scientific communication session with transportation optimisation in pl/sql and an article regarding security for client-server applications'
    },
    {
        school: 'Universitatea Româno-Americană din București',
        fieldOfStudy: 'Computer/Information Technology Administration and Management',
        degree: 'Licentiate degree',
        startYear: '2015',
        endYear: '2018',
        grade: '9.50',
        logo: '../assets/logos/romanian-american university.png',
        description: 'The knowledge is supported by practical projects to prove a good assimilation of basic information. These are both economics, such as management, economics, statistics, accounting, office, marketing, econometrics and programming in various languages such as C ++, C # (Console and Windows Forms), Access databases, SQL, HTML, PHP. Participation in scientific communication session with micro and macro economy, management and digital marketing'
    }
];
const AWARDS = [
    {
        name: 'Rau-DevHack Hackathon',
        place: 2,
        date: 'Apr 2019',
        description: 'Creating an application to help users choose the most recommended photographer for their event, according to their visual preferences, budget and period, giving photographers easier management on the event calendar and applications.'
    },
    {
        name: 'Web&Mobile Challenge at DevHacks',
        date: 'Nov 2018',
        place: 1,
        description: `
      Our result should allows candidates from Romania the possibility to offer reviews/ratings to companies about key areas such as: recruitment process,  work environment (team, schedule, etc), trainings, learning and development opportunities, salary & benefits, work-life balance, management, internal systems (procedures, values, way of working), other relevant areas. The aim of this product is to help candidates find the employer that best suits their needs and personality, something different. The target audience of the product will be made up students and young professionals.
      `
    }
];
const OTHER_PUBLICATIONS = [
    {
        title: 'Providing Security for Client-Server Applications',
        link: 'https://df38f438-aa8a-4f56-925f-3f56c5f61c2a.filesusr.com/ugd/b8ce10_e3835a03a0664499927aafdd75540127.pdf',
        thumbnail: 'https://image.isu.pub/170105105000-13074954e5ffd8949525023c1f6c49c3/jpg/page_1.jpg',
    }
];
const EXPERIENCE = [
    {
        companyName: 'IBM iX',
        role: 'Front End Developer',
        dateStart: 'Dec 2018',
        dateEnd: 'Present',
        location: 'Bucharest, Romania',
        description: `
      <b>Client 1</b><br>
      <i>03/2019 - 03/2020</i><br>
      Industry: Insurance<br>
      Assignment description:<br>
      - Develop Web based applications including UX design, application building and supporting solutions;<br>
      - Collaborate with back-end developers and web designers to improve usability;<br>
      - Get feedback from, and build solutions for, users and customers;<br>
      - Create quality mockups and prototypes;<br>
      - Stay up-to-date on emerging technologies;<br>
      - Participate in shadowing sessions with Senior Front End Developers in solving different problems;<br>
      - Attended relevant courses for the knowledge used in my field;<br>
      - Investigate and fixed vulnerabilities in packages.<br>
      Contribution:<br>
      - I delivered a good quality presentation website for our client in order to present our projects to their customers, in a small amount of time so the client was able to see the results and to use it;<br>
      - I investigated and solved some vulnerabilities from the applications;<br>
      - I contributed actively on a project from march and until the end of November, by helping other colleagues with code review and implementing reusable components. I also helped taking decisions in business rules and in development process;<br>
      - I participated in every meeting and decision in a proactive way in order to deliver a quality and clean code which meets the client requirements. I also suggested various changes to the design that was taken into account.<br>
      <b>Technologies:</b> Angular, Ionic, Sass, TypeScript, REST, Capacitor, RxJs<br><br>
      <b>Client 2</b><br>
      <i>03/2020 - 03/2020</i><br>
      Industry: Retail<br>
      Assignment description:<br>
      - Redesigning the on-boarding process for non plastic material and packaging suppliers onto the materials library and reimagining the presentation and navigation of the library in parallel.<br>
      Contribution:<br>
      - I participated in discussions with the design and front-end team in order to clarify and suggest edits so the user can have a better experience using the website;<br>
      - I created reusable pages using React.js which corresponds to the design;<br>
      - I created dynamic forms using Formik framework for the registration of new plastic free materials.<br>
      <b>Technologies:</b> React.js<br><br>
      <b>Client 3</b><br>
      <i>04/2020 - to date</i><br>
      Industry: Retail<br>
      Assignment description:<br>
      - Being a member of the a subdivision from the team and delivering features and quality code.<br>
      Contribution:<br>
      - I created new components and features for the application in a way that we can reuse them when it's need;<br>
      - I helped both design and development departments to take decisions in order to deliver the best features;<br>
      - I learned better ways to solve the problems that appears during the development;<br>
      - Delivered WYSIWYG (What You See Is What You Get), a feature that wants to improve the customer experience regarding the promotional codes.The first phase included changing the design of both coupons and product promotions, including more descriptive text and a user-friendly design, changes made throughout the application, on all banners. In the same phase was included the creation of the right drawer, which replaces the pop-up with the description of the promotion or the description page for it, being available by clicking on the link with the coupon / promotion details. If there are multiple promotions for a single product, they are displayed as a total, and will be described accordingly in the right drawer. The second phase includes the implementation of the new API response, which includes a new possibility to process the offers, displaying the requirement quantity, following that on the stores where the feature is activated, to display and if the offer has been completed and benefit from it. The new treatment system is visible both in the coupon design, in the mini-cart or in the top menu, in the right drawer and in the product page.<br>
      <b>Technologies:</b> Angular, Sass, TypeScript, REST, RxJs, Adobe Experience Manager, VirtualBox<br>`,
        companyLogo: '../assets/logos/ibm.jpg',
        skill: ['Angular', 'Vagrant', 'Ionic', 'Sass', 'TypeScript', 'REST', 'Capacitor', 'RxJs', 'React.js', 'Adobe Experience Manager', 'Jira'],
    },
    {
        companyName: 'Groupe Renault',
        role: 'Practicant - Drive your future',
        dateStart: 'Jun 2017',
        dateEnd: 'Sept 2017',
        location: 'Bucharest, Romania',
        description: 'Database maintenance using my own Matlab scripts',
        companyLogo: '../assets/logos/renault.png',
        skill: ['Matlab']
    },
    {
        companyName: 'Telekom Romania',
        role: 'Inbound Agent',
        dateStart: 'Feb 2016',
        dateEnd: 'Jun 2017',
        location: 'Bucharest, Romania',
        description: 'Taking calls and solving the situations encountered by clients, making recordings and offering them.',
        companyLogo: '../assets/logos/telekom.png',
        skill: ['Work under pressure', 'Adaptability', 'Multitasking']
    }
];


/***/ }),

/***/ "82IS":
/*!*************************************************************!*\
  !*** ./src/app/directives/progress-bar-colors.directive.ts ***!
  \*************************************************************/
/*! exports provided: ProgressBarColorsDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarColorsDirective", function() { return ProgressBarColorsDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class ProgressBarColorsDirective {
    constructor(el) {
        this.el = el;
        this.styleEl = document.createElement('style');
        this.uniqueAttr = `app-progress-bar-color-${ProgressBarColorsDirective.counter++}`;
        const nativeEl = this.el.nativeElement;
        nativeEl.setAttribute(this.uniqueAttr, '');
        nativeEl.appendChild(this.styleEl);
    }
    ngOnChanges(changes) {
        this.updateColor();
    }
    updateColor() {
        this.styleEl.innerText =
            `[${this.uniqueAttr}] .mat-progress-bar-fill::after {
              background-color: ${this.appProgressBarColors};
          }`;
    }
}
ProgressBarColorsDirective.counter = 0;
ProgressBarColorsDirective.ɵfac = function ProgressBarColorsDirective_Factory(t) { return new (t || ProgressBarColorsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ProgressBarColorsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ProgressBarColorsDirective, selectors: [["", "appProgressBarColors", ""]], inputs: { appProgressBarColors: "appProgressBarColors" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressBarColorsDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appProgressBarColors]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { appProgressBarColors: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BBdW":
/*!*******************************************************************!*\
  !*** ./src/app/components/publications/publications.component.ts ***!
  \*******************************************************************/
/*! exports provided: PublicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicationsComponent", function() { return PublicationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");



const _c0 = function (a0) { return { background: a0, "background-position": "center", "background-size": "cover" }; };
function PublicationsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 5);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, "url(" + ctx_r0.publication.thumbnail + ")"));
} }
function PublicationsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "See publication");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r1.publication.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class PublicationsComponent {
    constructor() { }
    ngOnInit() {
    }
}
PublicationsComponent.ɵfac = function PublicationsComponent_Factory(t) { return new (t || PublicationsComponent)(); };
PublicationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PublicationsComponent, selectors: [["app-publications"]], inputs: { publication: "publication" }, decls: 6, vars: 3, consts: [[1, "publication-wrapper"], ["class", "image", 3, "ngStyle", 4, "ngIf"], [1, "summary"], [1, "name"], ["class", "grade", 4, "ngIf"], [1, "image", 3, "ngStyle"], [1, "grade"], ["target", "_blank", 3, "href"]], template: function PublicationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PublicationsComponent_div_1_Template, 1, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PublicationsComponent_div_5_Template, 3, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.publication.thumbnail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.publication.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.publication.link);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: ["app-publications .publication-wrapper {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  padding: 20px;\n  text-align: center;\n}\napp-publications .publication-wrapper .image {\n  height: 150px;\n  width: 150px;\n}\napp-publications .publication-wrapper .summary {\n  display: flex;\n  padding-top: 10px;\n  flex-flow: column;\n}\napp-publications .publication-wrapper .summary .name {\n  font-weight: bold;\n  font-size: 1rem;\n  padding: 10px 0;\n}\n@media (max-width: 750px) {\n  .header {\n    flex-flow: wrap;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wdWJsaWNhdGlvbnMvcHVibGljYXRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFERjtBQUdFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUFESjtBQUlFO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFGSjtBQUlJO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUZOO0FBT0E7RUFDRTtJQUNFLGVBQUE7RUFKRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wdWJsaWNhdGlvbnMvcHVibGljYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG5hcHAtcHVibGljYXRpb25zIC5wdWJsaWNhdGlvbi13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIC5pbWFnZSB7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gIH1cclxuXHJcbiAgLnN1bW1hcnkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcblxyXG4gICAgLm5hbWUge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcclxuICAuaGVhZGVyIHtcclxuICAgIGZsZXgtZmxvdzogd3JhcDtcclxuICB9XHJcbn1cclxuIl19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublicationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-publications',
                templateUrl: './publications.component.html',
                styleUrls: ['./publications.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, { publication: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "HoFA":
/*!***************************************************************!*\
  !*** ./src/app/components/custom-svg/custom-svg.component.ts ***!
  \***************************************************************/
/*! exports provided: CustomSvgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomSvgComponent", function() { return CustomSvgComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");



function CustomSvgComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomSvgComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomSvgComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomSvgComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomSvgComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomSvgComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomSvgComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomSvgComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomSvgComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomSvgComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomSvgComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CustomSvgComponent {
    constructor() { }
    ngOnInit() {
    }
}
CustomSvgComponent.ɵfac = function CustomSvgComponent_Factory(t) { return new (t || CustomSvgComponent)(); };
CustomSvgComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomSvgComponent, selectors: [["app-custom-svg"]], inputs: { type: "type" }, decls: 11, vars: 11, consts: [[4, "ngIf"], ["width", "25", "height", "25", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "52 42 88 66", 1, "icon"], ["d", "M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6"], ["d", "M120 108h14c3.32 0 6-2.69 6-6V59l-20 15"], ["d", "M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"], ["d", "M72 74V48l24 18 24-18v26L96 92"], ["d", "M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"], ["width", "25", "height", "25", "xmlns", "http://www.w3.org/2000/svg", "width", "25", "height", "25", "viewBox", "0 0 24 24", 1, "icon"], ["d", "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"], ["width", "25", "height", "25", "xmlns", "http://www.w3.org/2000/svg", "fill-rule", "evenodd", "clip-rule", "evenodd", 1, "icon"], ["d", "M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z"], ["xmlns", "http://www.w3.org/2000/svg", "width", "25", "height", "25", "viewBox", "0 0 24 24", 1, "icon"], ["width", "25", "height", "25", "d", "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z", 1, "icon"], ["d", "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"], ["d", "M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"], ["d", "M22 9.761c0 .536-.065 1.084-.169 1.627-.847 4.419-3.746 5.946-7.449 5.946h-.572c-.453 0-.838.334-.908.789l-.803 5.09c-.071.453-.456.787-.908.787h-2.736c-.39 0-.688-.348-.628-.732l1.386-8.88.062-.056h2.155c5.235 0 8.509-2.618 9.473-7.568.812.814 1.097 1.876 1.097 2.997zm-14.216 4.252c.116-.826.459-1.177 1.385-1.179l2.26-.002c4.574 0 7.198-2.09 8.023-6.39.8-4.134-2.102-6.442-6.031-6.442h-7.344c-.517 0-.958.382-1.038.901-2.304 14.835-2.97 18.607-3.038 19.758-.021.362.269.672.635.672h3.989l1.159-7.318z"], ["id", "Bold", "enable-background", "new 0 0 24 24", "viewBox", "0 0 24 24", "width", "25", "height", "25", "xmlns", "http://www.w3.org/2000/svg", 1, "icon"], ["d", "m7 13.859v9.391c0 .285.162.546.418.672.254.126.561.097.788-.077l3.794-2.901 3.794 2.901c.134.103.294.155.456.155.113 0 .227-.025.332-.078.256-.126.418-.387.418-.672v-9.391c-1.405 1.027-3.13 1.641-5 1.641s-3.595-.614-5-1.641z"], ["d", "m12 0c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 10.25c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-4.792c-.292-.104-.5-.381-.5-.708 0-.414.336-.75.75-.75h.5c.414 0 .75.336.75.75z"], ["d", "m12 0c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1.25 9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-2.5c-.414 0-.75-.336-.75-.75v-1.375c0-1.172.897-2.125 2-2.125.271 0 .5-.286.5-.625s-.229-.625-.5-.625h-1.25c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.25c1.103 0 2 .953 2 2.125s-.897 2.125-2 2.125c-.271 0-.5.286-.5.625v.625z"], ["d", "m5.96 12.98-3.87 6.95c-.13.24-.12.54.03.77s.41.37.69.34l3.08-.23 1.36 2.77c.13.25.38.41.65.42h.02c.27 0 .53-.15.66-.38l2.52-4.48-2.45-4.33c-1.01-.43-1.92-1.06-2.69-1.83z"], ["d", "m21.9 19.93-3.9-6.91c-1.27 1.27-2.94 2.13-4.8 2.39-.39.06-.79.09-1.2.09-.44 0-.87-.03-1.29-.1l1.25 2.21 3.39 6.01c.13.23.38.38.65.38h.02c.28-.01.53-.17.66-.42l1.37-2.77 3.14.24c.28.02.54-.11.69-.35.15-.23.16-.53.02-.77z"], ["id", "Bold", "enable-background", "new 0 0 24 24", "width", "25", "height", "25", "viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg", 1, "icon"], ["d", "m12 0c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm2 7.5v1.833c0 .919-.71 1.667-1.583 1.667h-1.667c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.667c.021 0 .083-.059.083-.167v-1.083h-1.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.75v-1.083c0-.107-.062-.167-.083-.167h-1.667c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.667c.873 0 1.583.748 1.583 1.667z"], ["d", "m12 0c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm3.787 6.757-1.361 1.395.323 1.978c.046.283-.073.568-.309.734-.128.09-.28.136-.431.136-.125 0-.25-.031-.363-.094l-1.646-.909-1.646.91c-.251.139-.561.123-.795-.043-.235-.166-.354-.451-.309-.734l.323-1.978-1.36-1.395c-.196-.201-.264-.496-.174-.762.089-.267.319-.46.598-.503l1.851-.283.834-1.777c.246-.527 1.111-.527 1.357 0l.834 1.777 1.851.283c.278.042.509.236.598.503.089.266.021.561-.175.762z"]], template: function CustomSvgComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CustomSvgComponent_div_0_Template, 7, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomSvgComponent_div_1_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomSvgComponent_div_2_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CustomSvgComponent_div_3_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CustomSvgComponent_div_4_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CustomSvgComponent_div_5_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CustomSvgComponent_div_6_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CustomSvgComponent_div_7_Template, 6, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CustomSvgComponent_div_8_Template, 8, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CustomSvgComponent_div_9_Template, 8, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CustomSvgComponent_div_10_Template, 8, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "linkedin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "github");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "paypal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "first-place");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "second-place");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "third-place");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "mention-place");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["app-custom-svg .icon {\n  fill: #FFFFFF;\n  width: 25px;\n  height: 25px;\n}\napp-custom-svg .icon:hover {\n  fill: #d02929;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdXN0b20tc3ZnL2N1c3RvbS1zdmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRko7QUFLRTtFQUNFLGFDTE07QURFViIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VzdG9tLXN2Zy9jdXN0b20tc3ZnLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG5hcHAtY3VzdG9tLXN2ZyB7XHJcbiAgLmljb24ge1xyXG4gICAgZmlsbDogJHdoaXRlO1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgfVxyXG5cclxuICAuaWNvbjpob3ZlciB7XHJcbiAgICBmaWxsOiAkcHJpbWFyeTtcclxuICB9XHJcbn1cclxuIiwiJGJsYWNrOiAjMTgxOTFBO1xyXG4kZ3JheTogIzRmNGY0ZjtcclxuJGxpZ2h0Z3JheTogIzljOTM5MztcclxuJGJhY2tncm91bmQ6ICNGOEY4RkY7XHJcbiR3aGl0ZTogI0ZGRkZGRjtcclxuJHByaW1hcnk6ICNkMDI5Mjk7XHJcbiRwcmltYXJ5b3BhY2l0eTogI2QwMjkyOTJiOyJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomSvgComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-custom-svg',
                templateUrl: './custom-svg.component.html',
                styleUrls: ['./custom-svg.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, { type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "M0Pn":
/*!*******************************************************************!*\
  !*** ./src/app/components/project-card/project-card.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProjectCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectCardComponent", function() { return ProjectCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _custom_button_custom_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../custom-button/custom-button.component */ "bGnb");
/* harmony import */ var _custom_chip_custom_chip_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../custom-chip/custom-chip.component */ "k2K2");







function ProjectCardComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" - ", ctx_r0.project.endDate, "");
} }
function ProjectCardComponent_div_9_app_custom_chip_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-custom-chip", 8);
} if (rf & 2) {
    const technology_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", technology_r5);
} }
function ProjectCardComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectCardComponent_div_9_app_custom_chip_1_Template, 1, 1, "app-custom-chip", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.project.technologies);
} }
function ProjectCardComponent_app_custom_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-custom-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectCardComponent_app_custom_button_11_Template_app_custom_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.openNewTab("code"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isFilledButton", false);
} }
function ProjectCardComponent_app_custom_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-custom-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectCardComponent_app_custom_button_12_Template_app_custom_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.openNewTab("live"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isFilledButton", false);
} }
const _c0 = function (a0) { return { "background-image": a0 }; };
class ProjectCardComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    seeDetails() {
        this.router.navigateByUrl(`/project/${this.project.id}`);
    }
    openNewTab(type) {
        switch (type) {
            case 'live': window.open(this.project.live);
            case 'code': window.open(this.project.code);
        }
    }
}
ProjectCardComponent.ɵfac = function ProjectCardComponent_Factory(t) { return new (t || ProjectCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ProjectCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectCardComponent, selectors: [["app-project-card"]], inputs: { project: "project" }, decls: 14, vars: 10, consts: [[1, "image", 3, "ngStyle"], [4, "ngIf"], ["class", "technologies", 4, "ngIf"], ["buttonText", "</Code>", 3, "isFilledButton", "click", 4, "ngIf"], ["buttonText", "Demo", 3, "isFilledButton", "click", 4, "ngIf"], ["buttonText", "See details", 3, "isFilledButton", "click"], [1, "technologies"], [3, "text", 4, "ngFor", "ngForOf"], [3, "text"], ["buttonText", "</Code>", 3, "isFilledButton", "click"], ["buttonText", "Demo", 3, "isFilledButton", "click"]], template: function ProjectCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProjectCardComponent_span_7_Template, 2, 1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProjectCardComponent_div_9_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProjectCardComponent_app_custom_button_11_Template, 1, 1, "app-custom-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProjectCardComponent_app_custom_button_12_Template, 1, 1, "app-custom-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "app-custom-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectCardComponent_Template_app_custom_button_click_13_listener() { return ctx.seeDetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, "url(" + ctx.project.logo + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.project.startDate, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.project.endDate && ctx.project.startDate != ctx.project.endDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.project.technologies.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.project.code);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.project.live);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isFilledButton", true);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardActions"], _custom_button_custom_button_component__WEBPACK_IMPORTED_MODULE_4__["CustomButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _custom_chip_custom_chip_component__WEBPACK_IMPORTED_MODULE_5__["CustomChipComponent"]], styles: ["app-project-card {\n  flex: 0 0 30%;\n  margin: 15px;\n  display: flex;\n}\napp-project-card .mat-card {\n  box-shadow: 0px 0px 3px -1px #9c9393 !important;\n  display: flex;\n  flex-direction: column;\n  height: -webkit-fill-available;\n  width: 100%;\n  border-radius: unset;\n  padding: unset;\n}\napp-project-card .mat-card-actions {\n  margin: 0 !important;\n}\napp-project-card .image {\n  height: 25vh;\n  background-size: cover;\n  background-position: center;\n}\napp-project-card .technologies {\n  display: flex;\n  flex-flow: wrap;\n  justify-content: center;\n}\napp-project-card .mat-card:hover .technologies span {\n  color: #d02929;\n}\napp-project-card .mat-card-content {\n  margin-top: auto;\n}\napp-project-card .mat-card-actions {\n  display: flex;\n  justify-content: space-between;\n}\napp-project-card .mat-card-header-text {\n  text-align: -webkit-center;\n}\napp-project-card .mat-card-header {\n  place-content: center;\n}\napp-project-card .mat-card-header .mat-card-title {\n  padding: 12px 0;\n  margin: 0;\n}\n@media (max-width: 900px) {\n  app-project-card {\n    flex: 0 0 40%;\n  }\n}\n@media (max-width: 500px) {\n  app-project-card {\n    flex: 0 0 80%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0LWNhcmQvcHJvamVjdC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQURGO0FBR0U7RUFDRSwrQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQURKO0FBSUU7RUFDRSxvQkFBQTtBQUZKO0FBS0U7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQUhKO0FBTUU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBSko7QUFTTTtFQUNFLGNDL0JFO0FEd0JWO0FBWUU7RUFDRSxnQkFBQTtBQVZKO0FBYUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFYSjtBQWNFO0VBQ0UsMEJBQUE7QUFaSjtBQWVFO0VBQ0UscUJBQUE7QUFiSjtBQWdCRTtFQUNFLGVBQUE7RUFDQSxTQUFBO0FBZEo7QUFrQkE7RUFDRTtJQUNFLGFBQUE7RUFmRjtBQUNGO0FBa0JBO0VBQ0U7SUFDRSxhQUFBO0VBaEJGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2plY3QtY2FyZC9wcm9qZWN0LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbmFwcC1wcm9qZWN0LWNhcmQge1xyXG4gIGZsZXg6IDAgMCAzMCU7XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIC5tYXQtY2FyZCB7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAtMXB4ICRsaWdodGdyYXkgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiB1bnNldDtcclxuICAgIHBhZGRpbmc6IHVuc2V0O1xyXG4gIH1cclxuXHJcbiAgLm1hdC1jYXJkLWFjdGlvbnMge1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW1hZ2Uge1xyXG4gICAgaGVpZ2h0OiAyNXZoO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC50ZWNobm9sb2dpZXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1jYXJkOmhvdmVyIHtcclxuICAgIC50ZWNobm9sb2dpZXMge1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tYXQtY2FyZC1jb250ZW50IHtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgfVxyXG5cclxuICAubWF0LWNhcmQtYWN0aW9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1jYXJkLWhlYWRlci10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1jYXJkLWhlYWRlciB7XHJcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC10aXRsZSB7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICBhcHAtcHJvamVjdC1jYXJkIHtcclxuICAgIGZsZXg6IDAgMCA0MCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICBhcHAtcHJvamVjdC1jYXJkIHtcclxuICAgIGZsZXg6IDAgMCA4MCU7XHJcbiAgfVxyXG59XHJcbiIsIiRibGFjazogIzE4MTkxQTtcclxuJGdyYXk6ICM0ZjRmNGY7XHJcbiRsaWdodGdyYXk6ICM5YzkzOTM7XHJcbiRiYWNrZ3JvdW5kOiAjRjhGOEZGO1xyXG4kd2hpdGU6ICNGRkZGRkY7XHJcbiRwcmltYXJ5OiAjZDAyOTI5O1xyXG4kcHJpbWFyeW9wYWNpdHk6ICNkMDI5MjkyYjsiXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-project-card',
                templateUrl: './project-card.component.html',
                styleUrls: ['./project-card.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { project: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "QrEi":
/*!*******************************************************!*\
  !*** ./src/app/components/awards/awards.component.ts ***!
  \*******************************************************/
/*! exports provided: AwardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwardsComponent", function() { return AwardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _custom_svg_custom_svg_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../custom-svg/custom-svg.component */ "HoFA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");




function AwardsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.award.date, " ");
} }
function AwardsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 8);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r1.award.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class AwardsComponent {
    constructor() { }
    ngOnInit() {
        switch (this.award.place) {
            case 1:
                this.place = 'first-place';
                break;
            case 2:
                this.place = 'second-place';
                break;
            case 3:
                this.place = 'third-place';
                break;
            default:
                this.place = 'mention-place';
                break;
        }
    }
}
AwardsComponent.ɵfac = function AwardsComponent_Factory(t) { return new (t || AwardsComponent)(); };
AwardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AwardsComponent, selectors: [["app-awards"]], inputs: { award: "award" }, decls: 8, vars: 4, consts: [[1, "award-wrapper"], [1, "header"], [1, "summary"], [3, "type"], [1, "name"], ["class", "date", 4, "ngIf"], ["class", "description", 3, "innerHTML", 4, "ngIf"], [1, "date"], [1, "description", 3, "innerHTML"]], template: function AwardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-custom-svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AwardsComponent_div_6_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AwardsComponent_div_7_Template, 1, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.place);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.award.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.award.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.award.description);
    } }, directives: [_custom_svg_custom_svg_component__WEBPACK_IMPORTED_MODULE_1__["CustomSvgComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["app-awards .award-wrapper .header {\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  padding-bottom: 10px;\n  justify-content: center;\n  text-align: center;\n}\napp-awards .award-wrapper .header .summary {\n  display: flex;\n  flex-flow: column;\n  padding: 10px 0;\n}\napp-awards .award-wrapper .header .summary img {\n  height: 15vh;\n}\napp-awards .award-wrapper .header .summary .name {\n  font-weight: bold;\n  font-size: 1.5rem;\n  color: #d02929;\n  margin: 10px 0;\n}\napp-awards .award-wrapper .header .summary .date {\n  font-weight: bold;\n  color: #9c9393;\n}\napp-awards .award-wrapper .description {\n  line-height: 1.5rem;\n  text-align: center;\n}\n@media (max-width: 800px) {\n  app-awards .award-wrapper .header {\n    flex-flow: wrap;\n  }\n  app-awards .award-wrapper .description {\n    padding: 0 5vw;\n    font-size: smaller;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hd2FyZHMvYXdhcmRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFGSjtBQUlJO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUZOO0FBSU07RUFDRSxZQUFBO0FBRlI7QUFLTTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQ2xCRTtFRG1CRixjQUFBO0FBSFI7QUFNTTtFQUNFLGlCQUFBO0VBQ0EsY0MzQkk7QUR1Qlo7QUFTRTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUFQSjtBQVVFO0VBQ0U7SUFDRSxlQUFBO0VBUko7RUFVRTtJQUNFLGNBQUE7SUFDQSxrQkFBQTtFQVJKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2F3YXJkcy9hd2FyZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbmFwcC1hd2FyZHMgLmF3YXJkLXdyYXBwZXIge1xyXG4gIC5oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgLnN1bW1hcnkge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgICAgcGFkZGluZzogMTBweCAwO1xyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDE1dmg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5uYW1lIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnk7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kYXRlIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogJGxpZ2h0Z3JheTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmRlc2NyaXB0aW9uIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIC5oZWFkZXIge1xyXG4gICAgICBmbGV4LWZsb3c6IHdyYXA7XHJcbiAgICB9XHJcbiAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICBwYWRkaW5nOiAwIDV2dztcclxuICAgICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIkYmxhY2s6ICMxODE5MUE7XHJcbiRncmF5OiAjNGY0ZjRmO1xyXG4kbGlnaHRncmF5OiAjOWM5MzkzO1xyXG4kYmFja2dyb3VuZDogI0Y4RjhGRjtcclxuJHdoaXRlOiAjRkZGRkZGO1xyXG4kcHJpbWFyeTogI2QwMjkyOTtcclxuJHByaW1hcnlvcGFjaXR5OiAjZDAyOTI5MmI7Il19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AwardsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-awards',
                templateUrl: './awards.component.html',
                styleUrls: ['./awards.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, { award: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _commons_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commons.service */ "zZLy");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");





class AppComponent {
    constructor(_commonsService) {
        this._commonsService = _commonsService;
        this.title = 'Project';
    }
    ngOnInit() {
        this.cookieConsoleMessage();
        this._commonsService.getDataFromAPIs();
    }
    cookieConsoleMessage() {
        var consoleSignatureStyle = "font-size: 12px;" +
            "background: #a50c0c;" +
            "color: white;" +
            "text-align: center;" +
            "padding: 5px 10px;" +
            "margin: 5px 0;" +
            "width: 100%;" +
            "border-radius: 20px;";
        var consoleSignatureText = "%cDon't steal my cookies! 🍪";
        console.log(consoleSignatureText, consoleSignatureStyle);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_commons_service__WEBPACK_IMPORTED_MODULE_1__["CommonsService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "body"], [1, "component-wrapper"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _commons_service__WEBPACK_IMPORTED_MODULE_1__["CommonsService"] }]; }, null); })();


/***/ }),

/***/ "X1wX":
/*!********************************************************************!*\
  !*** ./src/app/pages/project-details/project-details.component.ts ***!
  \********************************************************************/
/*! exports provided: ProjectDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailsComponent", function() { return ProjectDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_assets_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/assets/data */ "6Xnp");
/* harmony import */ var _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ks89/angular-modal-gallery */ "rHMi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _components_custom_chip_custom_chip_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/custom-chip/custom-chip.component */ "k2K2");
/* harmony import */ var _components_custom_button_custom_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/custom-button/custom-button.component */ "bGnb");









function ProjectDetailsComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "</ See code >");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r0.project.code, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ProjectDetailsComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" - ", ctx_r1.project.endDate, "");
} }
function ProjectDetailsComponent_div_8_app_custom_chip_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-custom-chip", 13);
} if (rf & 2) {
    const technology_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", technology_r5);
} }
function ProjectDetailsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectDetailsComponent_div_8_app_custom_chip_1_Template, 1, 1, "app-custom-chip", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.project.technologies);
} }
function ProjectDetailsComponent_app_custom_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-custom-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectDetailsComponent_app_custom_button_9_Template_app_custom_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.openNewTab(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isFilledButton", false);
} }
const _c0 = function (a0) { return { "background-image": a0 }; };
const _c1 = function () { return { show: false }; };
const _c2 = function (a1) { return { infinite: true, sidePreviews: a1 }; };
class ProjectDetailsComponent {
    constructor(route) {
        this.route = route;
        this.projects = src_assets_data__WEBPACK_IMPORTED_MODULE_1__["PROJECTS"];
    }
    ngOnInit() {
        this.getProjectByID(this.route.snapshot.paramMap.get('id'));
    }
    getProjectByID(ID) {
        this.project = this.projects.filter(project => project.id == ID)[0];
        this.images = this.project.images ? this.project.images.map((imageUrl, index) => new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["Image"](index, {
            img: imageUrl
        })) : [];
    }
    openNewTab() {
        window.open(this.project.live);
    }
}
ProjectDetailsComponent.ɵfac = function ProjectDetailsComponent_Factory(t) { return new (t || ProjectDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
ProjectDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectDetailsComponent, selectors: [["app-project-details"]], decls: 12, vars: 16, consts: [[1, "image", 3, "ngStyle"], [1, "summary"], [1, "name"], ["target", "_blank", 3, "href", 4, "ngIf"], [1, "date"], [4, "ngIf"], ["class", "technologies", 4, "ngIf"], ["buttonText", "See live", 3, "isFilledButton", "click", 4, "ngIf"], [1, "description", 3, "innerHTML"], [3, "id", "modalImages", "slideConfig"], ["target", "_blank", 3, "href"], [1, "technologies"], [3, "text", 4, "ngFor", "ngForOf"], [3, "text"], ["buttonText", "See live", 3, "isFilledButton", "click"]], template: function ProjectDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProjectDetailsComponent_a_4_Template, 2, 1, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProjectDetailsComponent_span_7_Template, 2, 1, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProjectDetailsComponent_div_8_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProjectDetailsComponent_app_custom_button_9_Template, 1, 1, "app-custom-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "ks-modal-gallery", 9);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, "url(" + ctx.project.logo + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.project.code);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.project.startDate, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.project.endDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.project.technologies.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.project.live);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.project.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", 6)("modalImages", ctx.images)("slideConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c1)));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["ɵd"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _components_custom_chip_custom_chip_component__WEBPACK_IMPORTED_MODULE_5__["CustomChipComponent"], _components_custom_button_custom_button_component__WEBPACK_IMPORTED_MODULE_6__["CustomButtonComponent"]], styles: ["app-project-details {\n  display: flex;\n  flex-flow: column;\n}\napp-project-details .image {\n  height: 50vh;\n  background-size: cover;\n  background-position: center;\n}\napp-project-details .summary {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  margin: 15px 10%;\n}\napp-project-details .summary .name {\n  font-weight: bold;\n  font-size: 1.2rem;\n  color: #a50c0c;\n  margin: 4px 0;\n}\napp-project-details .summary .date {\n  padding-top: 5px;\n  color: #9c9393;\n  font-weight: normal;\n}\napp-project-details .summary .technologies {\n  display: flex;\n  flex-flow: wrap;\n}\napp-project-details .summary .technologies .mat-chip-list-wrapper {\n  justify-content: center;\n}\napp-project-details .description {\n  margin: 10px 40px 30px;\n  padding: 10px;\n  line-height: 1.5rem;\n}\napp-project-details .plain-container {\n  justify-content: center !important;\n  margin: 20px 40px 40px;\n  display: flex !important;\n  flex-flow: wrap;\n}\napp-project-details .plain-container .image {\n  margin: 5px !important;\n  height: 200px !important;\n  width: auto !important;\n  box-shadow: 0 0 10px -3px #9c9393;\n}\n@media (max-width: 800px) {\n  app-project-details .summary {\n    margin: 15px;\n    text-align: center;\n  }\n  app-project-details .summary .technologies {\n    margin: 10px 0;\n    justify-content: center;\n  }\n  app-project-details .description {\n    margin: 10px;\n  }\n  app-project-details .plain-container {\n    margin: 5px 20px 20px;\n  }\n  app-project-details .plain-container .image {\n    width: auto !important;\n    height: 60px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvamVjdC1kZXRhaWxzL3Byb2plY3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUFERjtBQUdFO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUFESjtBQUlFO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUZKO0FBSUk7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFGTjtBQUlJO0VBQ0UsZ0JBQUE7RUFDQSxjQ3hCTTtFRHlCTixtQkFBQTtBQUZOO0FBS0k7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQUhOO0FBS007RUFDRSx1QkFBQTtBQUhSO0FBUUU7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQU5KO0FBU0U7RUFDRSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0FBUEo7QUFTSTtFQUNFLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0FBUE47QUFXRTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGtCQUFBO0VBVEo7RUFXSTtJQUNFLGNBQUE7SUFDQSx1QkFBQTtFQVROO0VBWUU7SUFDRSxZQUFBO0VBVko7RUFZRTtJQUNFLHFCQUFBO0VBVko7RUFZSTtJQUNFLHNCQUFBO0lBQ0EsdUJBQUE7RUFWTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvamVjdC1kZXRhaWxzL3Byb2plY3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuYXBwLXByb2plY3QtZGV0YWlscyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuXHJcbiAgLmltYWdlIHtcclxuICAgIGhlaWdodDogNTB2aDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuc3VtbWFyeSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxNXB4IDEwJTtcclxuXHJcbiAgICAubmFtZSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgY29sb3I6ICNhNTBjMGM7XHJcbiAgICAgIG1hcmdpbjogNHB4IDA7XHJcbiAgICB9XHJcbiAgICAuZGF0ZSB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgIGNvbG9yOiAkbGlnaHRncmF5O1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgfVxyXG5cclxuICAgIC50ZWNobm9sb2dpZXMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWZsb3c6IHdyYXA7XHJcblxyXG4gICAgICAubWF0LWNoaXAtbGlzdC13cmFwcGVyIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmRlc2NyaXB0aW9uIHtcclxuICAgIG1hcmdpbjogMTBweCA0MHB4IDMwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcclxuICB9XHJcblxyXG4gIC5wbGFpbi1jb250YWluZXIge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMjBweCA0MHB4IDQwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4LWZsb3c6IHdyYXA7XHJcblxyXG4gICAgLmltYWdlIHtcclxuICAgICAgbWFyZ2luOiA1cHggIWltcG9ydGFudDtcclxuICAgICAgaGVpZ2h0OiAyMDBweCAhaW1wb3J0YW50O1xyXG4gICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAtM3B4ICRsaWdodGdyYXk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIC5zdW1tYXJ5IHtcclxuICAgICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAudGVjaG5vbG9naWVzIHtcclxuICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLnBsYWluLWNvbnRhaW5lciB7XHJcbiAgICAgIG1hcmdpbjogNXB4IDIwcHggMjBweDtcclxuICAgICAgXHJcbiAgICAgIC5pbWFnZSB7XHJcbiAgICAgICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIkYmxhY2s6ICMxODE5MUE7XHJcbiRncmF5OiAjNGY0ZjRmO1xyXG4kbGlnaHRncmF5OiAjOWM5MzkzO1xyXG4kYmFja2dyb3VuZDogI0Y4RjhGRjtcclxuJHdoaXRlOiAjRkZGRkZGO1xyXG4kcHJpbWFyeTogI2QwMjkyOTtcclxuJHByaW1hcnlvcGFjaXR5OiAjZDAyOTI5MmI7Il19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-project-details',
                templateUrl: './project-details.component.html',
                styleUrls: ['./project-details.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "XEn3":
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _components_custom_svg_custom_svg_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/custom-svg/custom-svg.component */ "HoFA");



class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 25, vars: 0, consts: [[1, "info-text"], [1, "text"], ["href", "mailto:madalinaeleonora.gheorghe@gmail.com"], [1, "social-icons-wrapper"], ["target", "_blank", "href", "mailto:madalinaeleonora.gheorghe@gmail.com"], ["type", "email"], ["target", "_blank", "href", "https://www.linkedin.com/in/madalinaeleonorag/"], ["type", "linkedin"], ["target", "_blank", "href", "https://madalinaeleonorag.medium.com/"], ["type", "medium"], ["target", "_blank", "href", "https://github.com/madalinaeleonorag"], ["type", "github"], ["target", "_blank", "href", "https://www.instagram.com/madalinaeleonorag/"], ["type", "instagram"], ["target", "_blank", "href", "https://www.facebook.com/mdx.madalinaeleonora/"], ["type", "facebook"], ["target", "_blank", "href", "https://www.paypal.com/paypalme/madalinaeleonorag"], ["type", "paypal"], [1, "copyright"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Let's be internet BFFs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Contact me via email at");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " madalinaeleonora.gheorghe@gmail.com\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "or on social media");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-custom-svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-custom-svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-custom-svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-custom-svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-custom-svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-custom-svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-custom-svg", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u00A9 Madalina-Eleonora Gheorghe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_custom_svg_custom_svg_component__WEBPACK_IMPORTED_MODULE_1__["CustomSvgComponent"]], styles: ["app-contact {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n}\napp-contact .text {\n  padding: 15px 0;\n  font-weight: bold;\n}\napp-contact .info-text {\n  color: #d02929;\n  padding: 10px 0px;\n  font-weight: bold;\n  font-size: x-large;\n}\napp-contact .copyright {\n  color: #4f4f4f;\n  padding: 10px 0px;\n  font-size: small;\n}\napp-contact .copyright:hover {\n  color: #d02929;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBREY7QUFHRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQURKO0FBSUU7RUFDRSxjQ1JNO0VEU04saUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBRko7QUFLRTtFQUNFLGNDbkJHO0VEb0JILGlCQUFBO0VBQ0EsZ0JBQUE7QUFISjtBQU1FO0VBQ0UsY0NyQk07QURpQlYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbmFwcC1jb250YWN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIC50ZXh0IHtcclxuICAgIHBhZGRpbmc6IDE1cHggMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgLmluZm8tdGV4dCB7XHJcbiAgICBjb2xvcjogJHByaW1hcnk7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gIH1cclxuXHJcbiAgLmNvcHlyaWdodCB7XHJcbiAgICBjb2xvcjogJGdyYXk7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgfVxyXG5cclxuICAuY29weXJpZ2h0OmhvdmVyIHtcclxuICAgIGNvbG9yOiAkcHJpbWFyeTtcclxuICB9XHJcbn1cclxuIiwiJGJsYWNrOiAjMTgxOTFBO1xyXG4kZ3JheTogIzRmNGY0ZjtcclxuJGxpZ2h0Z3JheTogIzljOTM5MztcclxuJGJhY2tncm91bmQ6ICNGOEY4RkY7XHJcbiR3aGl0ZTogI0ZGRkZGRjtcclxuJHByaW1hcnk6ICNkMDI5Mjk7XHJcbiRwcmltYXJ5b3BhY2l0eTogI2QwMjkyOTJiOyJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/progress-bar */ "BTe0");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/expansion */ "o4Yh");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/chips */ "f44v");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var mousetrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! mousetrap */ "imBb");
/* harmony import */ var mousetrap__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(mousetrap__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ks89/angular-modal-gallery */ "rHMi");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/contact/contact.component */ "XEn3");
/* harmony import */ var _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/homepage/homepage.component */ "ojyh");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _pages_skills_skills_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/skills/skills.component */ "2yNh");
/* harmony import */ var _directives_progress_bar_colors_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./directives/progress-bar-colors.directive */ "82IS");
/* harmony import */ var _pages_experience_experience_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/experience/experience.component */ "mKaJ");
/* harmony import */ var _components_experience_card_experience_card_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/experience-card/experience-card.component */ "uoxI");
/* harmony import */ var _components_education_level_education_level_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/education-level/education-level.component */ "zeqP");
/* harmony import */ var _components_awards_awards_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/awards/awards.component */ "QrEi");
/* harmony import */ var _components_publications_publications_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/publications/publications.component */ "BBdW");
/* harmony import */ var _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/projects/projects.component */ "u/sh");
/* harmony import */ var _components_project_card_project_card_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/project-card/project-card.component */ "M0Pn");
/* harmony import */ var _pages_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/project-details/project-details.component */ "X1wX");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! angular-responsive-carousel */ "0L5U");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/menu */ "rJgo");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "v2M4");
/* harmony import */ var _components_skill_card_skill_card_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/skill-card/skill-card.component */ "fTIr");
/* harmony import */ var _components_info_card_info_card_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/info-card/info-card.component */ "kya/");
/* harmony import */ var _components_custom_button_custom_button_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/custom-button/custom-button.component */ "bGnb");
/* harmony import */ var _components_custom_svg_custom_svg_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/custom-svg/custom-svg.component */ "HoFA");
/* harmony import */ var _components_custom_category_button_custom_category_button_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/custom-category-button/custom-category-button.component */ "fPRL");
/* harmony import */ var _components_custom_chip_custom_chip_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/custom-chip/custom-chip.component */ "k2K2");


// Material imports







// Modal galery imports
































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_28__["ReactiveFormsModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
            _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_11__["GalleryModule"].forRoot(),
            angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_29__["IvyCarouselModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HttpClientModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__["MatMenuModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"]
        ], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__["MatMenuModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
        _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"],
        _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_16__["HomepageComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"],
        _pages_skills_skills_component__WEBPACK_IMPORTED_MODULE_18__["SkillsComponent"],
        _directives_progress_bar_colors_directive__WEBPACK_IMPORTED_MODULE_19__["ProgressBarColorsDirective"],
        _pages_experience_experience_component__WEBPACK_IMPORTED_MODULE_20__["ExperienceComponent"],
        _components_experience_card_experience_card_component__WEBPACK_IMPORTED_MODULE_21__["ExperienceCardComponent"],
        _components_education_level_education_level_component__WEBPACK_IMPORTED_MODULE_22__["EducationLevelComponent"],
        _components_awards_awards_component__WEBPACK_IMPORTED_MODULE_23__["AwardsComponent"],
        _components_publications_publications_component__WEBPACK_IMPORTED_MODULE_24__["PublicationsComponent"],
        _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_25__["ProjectsComponent"],
        _components_project_card_project_card_component__WEBPACK_IMPORTED_MODULE_26__["ProjectCardComponent"],
        _pages_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_27__["ProjectDetailsComponent"],
        _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_32__["NotFoundComponent"],
        _components_skill_card_skill_card_component__WEBPACK_IMPORTED_MODULE_33__["SkillCardComponent"],
        _components_info_card_info_card_component__WEBPACK_IMPORTED_MODULE_34__["InfoCardComponent"],
        _components_custom_button_custom_button_component__WEBPACK_IMPORTED_MODULE_35__["CustomButtonComponent"],
        _components_custom_svg_custom_svg_component__WEBPACK_IMPORTED_MODULE_36__["CustomSvgComponent"],
        _components_custom_category_button_custom_category_button_component__WEBPACK_IMPORTED_MODULE_37__["CustomCategoryButtonComponent"],
        _components_custom_chip_custom_chip_component__WEBPACK_IMPORTED_MODULE_38__["CustomChipComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_28__["ReactiveFormsModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_11__["GalleryModule"], angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_29__["IvyCarouselModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HttpClientModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__["MatMenuModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"]], exports: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__["MatMenuModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
                    _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"],
                    _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_16__["HomepageComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"],
                    _pages_skills_skills_component__WEBPACK_IMPORTED_MODULE_18__["SkillsComponent"],
                    _directives_progress_bar_colors_directive__WEBPACK_IMPORTED_MODULE_19__["ProgressBarColorsDirective"],
                    _pages_experience_experience_component__WEBPACK_IMPORTED_MODULE_20__["ExperienceComponent"],
                    _components_experience_card_experience_card_component__WEBPACK_IMPORTED_MODULE_21__["ExperienceCardComponent"],
                    _components_education_level_education_level_component__WEBPACK_IMPORTED_MODULE_22__["EducationLevelComponent"],
                    _components_awards_awards_component__WEBPACK_IMPORTED_MODULE_23__["AwardsComponent"],
                    _components_publications_publications_component__WEBPACK_IMPORTED_MODULE_24__["PublicationsComponent"],
                    _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_25__["ProjectsComponent"],
                    _components_project_card_project_card_component__WEBPACK_IMPORTED_MODULE_26__["ProjectCardComponent"],
                    _pages_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_27__["ProjectDetailsComponent"],
                    _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_32__["NotFoundComponent"],
                    _components_skill_card_skill_card_component__WEBPACK_IMPORTED_MODULE_33__["SkillCardComponent"],
                    _components_info_card_info_card_component__WEBPACK_IMPORTED_MODULE_34__["InfoCardComponent"],
                    _components_custom_button_custom_button_component__WEBPACK_IMPORTED_MODULE_35__["CustomButtonComponent"],
                    _components_custom_svg_custom_svg_component__WEBPACK_IMPORTED_MODULE_36__["CustomSvgComponent"],
                    _components_custom_category_button_custom_category_button_component__WEBPACK_IMPORTED_MODULE_37__["CustomCategoryButtonComponent"],
                    _components_custom_chip_custom_chip_component__WEBPACK_IMPORTED_MODULE_38__["CustomChipComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_28__["ReactiveFormsModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                    _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_11__["GalleryModule"].forRoot(),
                    angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_29__["IvyCarouselModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HttpClientModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__["MatMenuModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"]
                ],
                exports: [
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__["MatMenuModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"]
                ],
                bootstrap: [
                    _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "bGnb":
/*!*********************************************************************!*\
  !*** ./src/app/components/custom-button/custom-button.component.ts ***!
  \*********************************************************************/
/*! exports provided: CustomButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomButtonComponent", function() { return CustomButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");



const _c0 = function (a0) { return { "border-btn-background": a0 }; };
class CustomButtonComponent {
    constructor() { }
    ngOnInit() {
    }
}
CustomButtonComponent.ɵfac = function CustomButtonComponent_Factory(t) { return new (t || CustomButtonComponent)(); };
CustomButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomButtonComponent, selectors: [["app-custom-button"]], inputs: { buttonText: "buttonText", isFilledButton: "isFilledButton" }, decls: 5, vars: 4, consts: [[1, "border-btn", 3, "ngClass"], [1, "border-btn__inner"], [1, "border-btn__lines-1"], [1, "border-btn__lines-2"]], template: function CustomButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.isFilledButton));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.buttonText);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["app-custom-button {\n  width: 100%;\n}\napp-custom-button div {\n  border: none;\n  color: inherit;\n  text-decoration: none;\n  cursor: pointer;\n}\napp-custom-button div:hover {\n  text-decoration: none;\n}\napp-custom-button div:focus {\n  outline: none;\n}\napp-custom-button .border-btn {\n  display: inline-block;\n  position: relative;\n  width: -webkit-fill-available;\n  text-align: center;\n  height: 45px;\n}\napp-custom-button .border-btn-background {\n  background-color: #d029292b;\n}\napp-custom-button .border-btn__inner {\n  display: inline-block;\n  padding: 10px 15px 10px 15px;\n  font-size: 10px;\n  font-weight: 400;\n  letter-spacing: 2px;\n  line-height: 1.2;\n  text-transform: uppercase;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: -webkit-fill-available;\n  color: #d02929;\n  transition: 0.5s cubic-bezier(0.17, 0.85, 0.438, 0.99);\n}\napp-custom-button .border-btn:before,\napp-custom-button .border-btn:after,\napp-custom-button .border-btn__inner:before,\napp-custom-button .border-btn__inner:after {\n  content: \"\";\n  position: absolute;\n  background-color: #d02929;\n  opacity: 0.2;\n  transition: 0.5s cubic-bezier(0.17, 0.85, 0.438, 0.99);\n}\napp-custom-button .border-btn:before {\n  width: 100%;\n  height: 1px;\n  left: 0;\n  top: 0;\n  transform: scaleX(1);\n  transform-origin: right;\n}\napp-custom-button .border-btn:after {\n  width: 1px;\n  height: 100%;\n  top: 0;\n  right: 0;\n  transform: scaleY(1);\n  transform-origin: bottom;\n}\napp-custom-button .border-btn__inner:before {\n  width: 100%;\n  height: 1px;\n  left: 0;\n  bottom: 0;\n  transform: scaleX(1);\n  transform-origin: left;\n}\napp-custom-button .border-btn__inner:after {\n  width: 1px;\n  height: 100%;\n  left: 0;\n  top: 0;\n  transform: scaleY(1);\n  transform-origin: top;\n}\napp-custom-button .border-btn:hover:before,\napp-custom-button .border-btn:hover .border-btn__inner:before {\n  transform: scaleX(0);\n}\napp-custom-button .border-btn:hover:after,\napp-custom-button .border-btn:hover .border-btn__inner:after {\n  transform: scaleY(0);\n}\napp-custom-button .border-btn__lines-1:before,\napp-custom-button .border-btn__lines-1:after,\napp-custom-button .border-btn__lines-2:before,\napp-custom-button .border-btn__lines-2:after {\n  content: \"\";\n  position: absolute;\n  background-color: #d02929;\n  transition: 0.5s cubic-bezier(0.17, 0.85, 0.438, 0.99);\n}\napp-custom-button .border-btn__lines-1:before {\n  width: 100%;\n  height: 1px;\n  left: 0;\n  top: 0;\n  transform: scaleX(0);\n  transform-origin: left;\n}\napp-custom-button .border-btn__lines-1:after {\n  width: 1px;\n  height: 100%;\n  top: 0;\n  right: 0;\n  transform: scaleY(0);\n  transform-origin: top;\n}\napp-custom-button .border-btn__lines-2:before {\n  width: 100%;\n  height: 1px;\n  left: 0;\n  bottom: 0;\n  transform: scaleX(0);\n  transform-origin: right;\n}\napp-custom-button .border-btn__lines-2:after {\n  width: 1px;\n  height: 100%;\n  left: 0;\n  top: 0;\n  transform: scaleY(0);\n  transform-origin: bottom;\n}\napp-custom-button .border-btn:hover .border-btn__lines-1:before,\napp-custom-button .border-btn:hover .border-btn__lines-2:before {\n  transform: scaleX(1);\n}\napp-custom-button .border-btn:hover .border-btn__lines-1:after,\napp-custom-button .border-btn:hover .border-btn__lines-2:after {\n  transform: scaleY(1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdXN0b20tYnV0dG9uL2N1c3RvbS1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBQTtBQURGO0FBRUU7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQUFKO0FBRUU7RUFDRSxxQkFBQTtBQUFKO0FBRUU7RUFDRSxhQUFBO0FBQUo7QUFFRTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUFKO0FBRUU7RUFDRSwyQkNsQmE7QURrQmpCO0FBRUU7RUFDRSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLGNDakNNO0VEa0NOLHNEQUFBO0FBQUo7QUFFRTs7OztFQUlFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQzFDTTtFRDJDTixZQUFBO0VBQ0Esc0RBQUE7QUFBSjtBQUVFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUVBLG9CQUFBO0VBRUEsdUJBQUE7QUFBSjtBQUVFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUVBLG9CQUFBO0VBRUEsd0JBQUE7QUFBSjtBQUVFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUVBLG9CQUFBO0VBRUEsc0JBQUE7QUFBSjtBQUVFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUVBLG9CQUFBO0VBRUEscUJBQUE7QUFBSjtBQUVFOztFQUdFLG9CQUFBO0FBQUo7QUFFRTs7RUFHRSxvQkFBQTtBQUFKO0FBRUU7Ozs7RUFJRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkN0R007RUR1R04sc0RBQUE7QUFBSjtBQUVFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUVBLG9CQUFBO0VBRUEsc0JBQUE7QUFBSjtBQUVFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUVBLG9CQUFBO0VBRUEscUJBQUE7QUFBSjtBQUVFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUVBLG9CQUFBO0VBRUEsdUJBQUE7QUFBSjtBQUVFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUVBLG9CQUFBO0VBRUEsd0JBQUE7QUFBSjtBQUVFOztFQUdFLG9CQUFBO0FBQUo7QUFFRTs7RUFHRSxvQkFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jdXN0b20tYnV0dG9uL2N1c3RvbS1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbmFwcC1jdXN0b20tYnV0dG9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXYge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIGRpdjpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIGRpdjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICAuYm9yZGVyLWJ0biB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogNDVweDtcclxuICB9XHJcbiAgLmJvcmRlci1idG4tYmFja2dyb3VuZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeW9wYWNpdHk7XHJcbiAgfVxyXG4gIC5ib3JkZXItYnRuX19pbm5lciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweCAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgICBjb2xvcjogJHByaW1hcnk7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGN1YmljLWJlemllcigwLjE3LCAwLjg1LCAwLjQzOCwgMC45OSk7XHJcbiAgfVxyXG4gIC5ib3JkZXItYnRuOmJlZm9yZSxcclxuICAuYm9yZGVyLWJ0bjphZnRlcixcclxuICAuYm9yZGVyLWJ0bl9faW5uZXI6YmVmb3JlLFxyXG4gIC5ib3JkZXItYnRuX19pbm5lcjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XHJcbiAgICBvcGFjaXR5OiAwLjI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGN1YmljLWJlemllcigwLjE3LCAwLjg1LCAwLjQzOCwgMC45OSk7XHJcbiAgfVxyXG4gIC5ib3JkZXItYnRuOmJlZm9yZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcclxuICB9XHJcbiAgLmJvcmRlci1idG46YWZ0ZXIge1xyXG4gICAgd2lkdGg6IDFweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgxKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XHJcbiAgfVxyXG4gIC5ib3JkZXItYnRuX19pbm5lcjpiZWZvcmUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xyXG4gIH1cclxuICAuYm9yZGVyLWJ0bl9faW5uZXI6YWZ0ZXIge1xyXG4gICAgd2lkdGg6IDFweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcDtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcclxuICB9XHJcbiAgLmJvcmRlci1idG46aG92ZXI6YmVmb3JlLFxyXG4gIC5ib3JkZXItYnRuOmhvdmVyIC5ib3JkZXItYnRuX19pbm5lcjpiZWZvcmUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gIH1cclxuICAuYm9yZGVyLWJ0bjpob3ZlcjphZnRlcixcclxuICAuYm9yZGVyLWJ0bjpob3ZlciAuYm9yZGVyLWJ0bl9faW5uZXI6YWZ0ZXIge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgwKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xyXG4gIH1cclxuICAuYm9yZGVyLWJ0bl9fbGluZXMtMTpiZWZvcmUsXHJcbiAgLmJvcmRlci1idG5fX2xpbmVzLTE6YWZ0ZXIsXHJcbiAgLmJvcmRlci1idG5fX2xpbmVzLTI6YmVmb3JlLFxyXG4gIC5ib3JkZXItYnRuX19saW5lcy0yOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcclxuICAgIHRyYW5zaXRpb246IDAuNXMgY3ViaWMtYmV6aWVyKDAuMTcsIDAuODUsIDAuNDM4LCAwLjk5KTtcclxuICB9XHJcbiAgLmJvcmRlci1idG5fX2xpbmVzLTE6YmVmb3JlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcclxuICB9XHJcbiAgLmJvcmRlci1idG5fX2xpbmVzLTE6YWZ0ZXIge1xyXG4gICAgd2lkdGg6IDFweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgwKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XHJcbiAgfVxyXG4gIC5ib3JkZXItYnRuX19saW5lcy0yOmJlZm9yZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcclxuICB9XHJcbiAgLmJvcmRlci1idG5fX2xpbmVzLTI6YWZ0ZXIge1xyXG4gICAgd2lkdGg6IDFweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDApO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcclxuICB9XHJcbiAgLmJvcmRlci1idG46aG92ZXIgLmJvcmRlci1idG5fX2xpbmVzLTE6YmVmb3JlLFxyXG4gIC5ib3JkZXItYnRuOmhvdmVyIC5ib3JkZXItYnRuX19saW5lcy0yOmJlZm9yZSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgfVxyXG4gIC5ib3JkZXItYnRuOmhvdmVyIC5ib3JkZXItYnRuX19saW5lcy0xOmFmdGVyLFxyXG4gIC5ib3JkZXItYnRuOmhvdmVyIC5ib3JkZXItYnRuX19saW5lcy0yOmFmdGVyIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcclxuICB9XHJcbn1cclxuIiwiJGJsYWNrOiAjMTgxOTFBO1xyXG4kZ3JheTogIzRmNGY0ZjtcclxuJGxpZ2h0Z3JheTogIzljOTM5MztcclxuJGJhY2tncm91bmQ6ICNGOEY4RkY7XHJcbiR3aGl0ZTogI0ZGRkZGRjtcclxuJHByaW1hcnk6ICNkMDI5Mjk7XHJcbiRwcmltYXJ5b3BhY2l0eTogI2QwMjkyOTJiOyJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-custom-button',
                templateUrl: './custom-button.component.html',
                styleUrls: ['./custom-button.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, { buttonText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isFilledButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "fPRL":
/*!***************************************************************************************!*\
  !*** ./src/app/components/custom-category-button/custom-category-button.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CustomCategoryButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomCategoryButtonComponent", function() { return CustomCategoryButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");



const _c0 = function (a0) { return { "button-selected": a0 }; };
class CustomCategoryButtonComponent {
    constructor() { }
    ngOnInit() {
    }
}
CustomCategoryButtonComponent.ɵfac = function CustomCategoryButtonComponent_Factory(t) { return new (t || CustomCategoryButtonComponent)(); };
CustomCategoryButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomCategoryButtonComponent, selectors: [["app-custom-category-button"]], inputs: { text: "text", isSelected: "isSelected" }, decls: 5, vars: 4, consts: [[1, "button", 3, "ngClass"], [1, "button__inner"], [1, "button__lines-1"], [1, "button__lines-2"]], template: function CustomCategoryButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.isSelected));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["app-custom-category-button div {\n  border: none;\n  color: inherit;\n  text-decoration: none;\n  cursor: pointer;\n}\napp-custom-category-button div:hover {\n  text-decoration: none;\n}\napp-custom-category-button div:focus {\n  outline: none;\n}\napp-custom-category-button .button {\n  display: inline-block;\n  position: relative;\n  text-align: center;\n  height: 45px;\n}\napp-custom-category-button .button-selected {\n  background-color: #d029292b;\n}\napp-custom-category-button .button__inner {\n  display: inline-block;\n  padding: 10px 15px 10px 15px;\n  font-size: 10px;\n  font-weight: 400;\n  letter-spacing: 2px;\n  line-height: 1.2;\n  text-transform: uppercase;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: -webkit-fill-available;\n  color: #d02929;\n  transition: 0.5s cubic-bezier(0.17, 0.85, 0.438, 0.99);\n}\napp-custom-category-button .button:before,\napp-custom-category-button .button:after,\napp-custom-category-button .button__inner:before,\napp-custom-category-button .button__inner:after {\n  content: \"\";\n  position: absolute;\n  background-color: #d02929;\n  opacity: 0.2;\n  transition: 0.5s cubic-bezier(0.17, 0.85, 0.438, 0.99);\n}\napp-custom-category-button .button:before {\n  width: 100%;\n  height: 1px;\n  left: 0;\n  top: 0;\n  transform: scaleX(1);\n  transform-origin: right;\n}\napp-custom-category-button .button:after {\n  width: 1px;\n  height: 100%;\n  top: 0;\n  right: 0;\n  transform: scaleY(1);\n  transform-origin: bottom;\n}\napp-custom-category-button .button__inner:before {\n  width: 100%;\n  height: 1px;\n  left: 0;\n  bottom: 0;\n  transform: scaleX(1);\n  transform-origin: left;\n}\napp-custom-category-button .button__inner:after {\n  width: 1px;\n  height: 100%;\n  left: 0;\n  top: 0;\n  transform: scaleY(1);\n  transform-origin: top;\n}\napp-custom-category-button .button:hover:before,\napp-custom-category-button .button:hover .button__inner:before {\n  transform: scaleX(0);\n}\napp-custom-category-button .button:hover:after,\napp-custom-category-button .button:hover .button__inner:after {\n  transform: scaleY(0);\n}\napp-custom-category-button .button__lines-1:before,\napp-custom-category-button .button__lines-1:after,\napp-custom-category-button .button__lines-2:before,\napp-custom-category-button .button__lines-2:after {\n  content: \"\";\n  position: absolute;\n  background-color: #d02929;\n  transition: 0.5s cubic-bezier(0.17, 0.85, 0.438, 0.99);\n}\napp-custom-category-button .button__lines-1:before {\n  width: 100%;\n  height: 1px;\n  left: 0;\n  top: 0;\n  transform: scaleX(0);\n  transform-origin: left;\n}\napp-custom-category-button .button__lines-1:after {\n  width: 1px;\n  height: 100%;\n  top: 0;\n  right: 0;\n  transform: scaleY(0);\n  transform-origin: top;\n}\napp-custom-category-button .button__lines-2:before {\n  width: 100%;\n  height: 1px;\n  left: 0;\n  bottom: 0;\n  transform: scaleX(0);\n  transform-origin: right;\n}\napp-custom-category-button .button__lines-2:after {\n  width: 1px;\n  height: 100%;\n  left: 0;\n  top: 0;\n  transform: scaleY(0);\n  transform-origin: bottom;\n}\napp-custom-category-button .button:hover .button__lines-1:before,\napp-custom-category-button .button:hover .button__lines-2:before {\n  transform: scaleX(1);\n}\napp-custom-category-button .button:hover .button__lines-1:after,\napp-custom-category-button .button:hover .button__lines-2:after {\n  transform: scaleY(1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdXN0b20tY2F0ZWdvcnktYnV0dG9uL2N1c3RvbS1jYXRlZ29yeS1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFGTjtBQUlJO0VBQ0UscUJBQUE7QUFGTjtBQUlJO0VBQ0UsYUFBQTtBQUZOO0FBSUk7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBRk47QUFJSTtFQUNFLDJCQ2hCVztBRGNqQjtBQUlJO0VBQ0UscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQy9CSTtFRGdDSixzREFBQTtBQUZOO0FBSUk7Ozs7RUFJRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkN4Q0k7RUR5Q0osWUFBQTtFQUNBLHNEQUFBO0FBRk47QUFJSTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFFQSxvQkFBQTtFQUVBLHVCQUFBO0FBRk47QUFJSTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFFQSxvQkFBQTtFQUVBLHdCQUFBO0FBRk47QUFJSTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFFQSxvQkFBQTtFQUVBLHNCQUFBO0FBRk47QUFJSTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFFQSxvQkFBQTtFQUVBLHFCQUFBO0FBRk47QUFJSTs7RUFHRSxvQkFBQTtBQUZOO0FBSUk7O0VBR0Usb0JBQUE7QUFGTjtBQUlJOzs7O0VBSUUsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJDcEdJO0VEcUdKLHNEQUFBO0FBRk47QUFJSTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFFQSxvQkFBQTtFQUVBLHNCQUFBO0FBRk47QUFJSTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFFQSxvQkFBQTtFQUVBLHFCQUFBO0FBRk47QUFJSTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFFQSxvQkFBQTtFQUVBLHVCQUFBO0FBRk47QUFJSTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFFQSxvQkFBQTtFQUVBLHdCQUFBO0FBRk47QUFJSTs7RUFHRSxvQkFBQTtBQUZOO0FBSUk7O0VBR0Usb0JBQUE7QUFGTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VzdG9tLWNhdGVnb3J5LWJ1dHRvbi9jdXN0b20tY2F0ZWdvcnktYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG5hcHAtY3VzdG9tLWNhdGVnb3J5LWJ1dHRvbiB7XHJcbiAgICBkaXYge1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIGRpdjpob3ZlciB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuICAgIGRpdjpmb2N1cyB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgfVxyXG4gICAgLmJ1dHRvbi1zZWxlY3RlZCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5b3BhY2l0eTtcclxuICAgIH1cclxuICAgIC5idXR0b25fX2lubmVyIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweCAxNXB4O1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgICAgIGNvbG9yOiAkcHJpbWFyeTtcclxuICAgICAgdHJhbnNpdGlvbjogMC41cyBjdWJpYy1iZXppZXIoMC4xNywgMC44NSwgMC40MzgsIDAuOTkpO1xyXG4gICAgfVxyXG4gICAgLmJ1dHRvbjpiZWZvcmUsXHJcbiAgICAuYnV0dG9uOmFmdGVyLFxyXG4gICAgLmJ1dHRvbl9faW5uZXI6YmVmb3JlLFxyXG4gICAgLmJ1dHRvbl9faW5uZXI6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgICBvcGFjaXR5OiAwLjI7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuNXMgY3ViaWMtYmV6aWVyKDAuMTcsIDAuODUsIDAuNDM4LCAwLjk5KTtcclxuICAgIH1cclxuICAgIC5idXR0b246YmVmb3JlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcclxuICAgIH1cclxuICAgIC5idXR0b246YWZ0ZXIge1xyXG4gICAgICB3aWR0aDogMXB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMSk7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xyXG4gICAgfVxyXG4gICAgLmJ1dHRvbl9faW5uZXI6YmVmb3JlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uX19pbm5lcjphZnRlciB7XHJcbiAgICAgIHdpZHRoOiAxcHg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDEpO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcclxuICAgIH1cclxuICAgIC5idXR0b246aG92ZXI6YmVmb3JlLFxyXG4gICAgLmJ1dHRvbjpob3ZlciAuYnV0dG9uX19pbm5lcjpiZWZvcmUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgIH1cclxuICAgIC5idXR0b246aG92ZXI6YWZ0ZXIsXHJcbiAgICAuYnV0dG9uOmhvdmVyIC5idXR0b25fX2lubmVyOmFmdGVyIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgwKTtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uX19saW5lcy0xOmJlZm9yZSxcclxuICAgIC5idXR0b25fX2xpbmVzLTE6YWZ0ZXIsXHJcbiAgICAuYnV0dG9uX19saW5lcy0yOmJlZm9yZSxcclxuICAgIC5idXR0b25fX2xpbmVzLTI6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjVzIGN1YmljLWJlemllcigwLjE3LCAwLjg1LCAwLjQzOCwgMC45OSk7XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uX19saW5lcy0xOmJlZm9yZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgLmJ1dHRvbl9fbGluZXMtMTphZnRlciB7XHJcbiAgICAgIHdpZHRoOiAxcHg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgwKTtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uX19saW5lcy0yOmJlZm9yZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uX19saW5lcy0yOmFmdGVyIHtcclxuICAgICAgd2lkdGg6IDFweDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xyXG4gICAgfVxyXG4gICAgLmJ1dHRvbjpob3ZlciAuYnV0dG9uX19saW5lcy0xOmJlZm9yZSxcclxuICAgIC5idXR0b246aG92ZXIgLmJ1dHRvbl9fbGluZXMtMjpiZWZvcmUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgIH1cclxuICAgIC5idXR0b246aG92ZXIgLmJ1dHRvbl9fbGluZXMtMTphZnRlcixcclxuICAgIC5idXR0b246aG92ZXIgLmJ1dHRvbl9fbGluZXMtMjphZnRlciB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMSk7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xyXG4gICAgfVxyXG59IiwiJGJsYWNrOiAjMTgxOTFBO1xyXG4kZ3JheTogIzRmNGY0ZjtcclxuJGxpZ2h0Z3JheTogIzljOTM5MztcclxuJGJhY2tncm91bmQ6ICNGOEY4RkY7XHJcbiR3aGl0ZTogI0ZGRkZGRjtcclxuJHByaW1hcnk6ICNkMDI5Mjk7XHJcbiRwcmltYXJ5b3BhY2l0eTogI2QwMjkyOTJiOyJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomCategoryButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-custom-category-button',
                templateUrl: './custom-category-button.component.html',
                styleUrls: ['./custom-category-button.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, { text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "fTIr":
/*!***************************************************************!*\
  !*** ./src/app/components/skill-card/skill-card.component.ts ***!
  \***************************************************************/
/*! exports provided: SkillCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillCardComponent", function() { return SkillCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/progress-bar */ "BTe0");
/* harmony import */ var _directives_progress_bar_colors_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/progress-bar-colors.directive */ "82IS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");





const _c0 = function (a0) { return { color: a0 }; };
class SkillCardComponent {
    constructor() {
        // 'Begginer' = 0, 'Medium' = 1, 'Intermediate' = 2, 'Advanced'= 3 
        this.SKILL_LEVELS = [{
                name: 'Begginer', value: 20
            }, {
                name: 'Medium', value: 50
            }, {
                name: 'Intermediate', value: 80
            }, {
                name: 'Advanced', value: 100
            }];
    }
    ngOnInit() {
    }
}
SkillCardComponent.ɵfac = function SkillCardComponent_Factory(t) { return new (t || SkillCardComponent)(); };
SkillCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillCardComponent, selectors: [["app-skill-card"]], inputs: { item: "item" }, decls: 8, vars: 8, consts: [[1, "logo"], [3, "src"], [1, "name"], [1, "progress"], ["mode", "determinate", 3, "value", "appProgressBarColors"], [1, "level-legend", 3, "ngStyle"]], template: function SkillCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-progress-bar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", "../../../assets/skills/" + ctx.item.logo + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.item.name, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.SKILL_LEVELS[ctx.item.level].value)("appProgressBarColors", ctx.item.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.item.color));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.SKILL_LEVELS[ctx.item.level].name, " ");
    } }, directives: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_1__["MatProgressBar"], _directives_progress_bar_colors_directive__WEBPACK_IMPORTED_MODULE_2__["ProgressBarColorsDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]], styles: ["app-skill-card {\n  display: flex;\n  flex-flow: column;\n  text-align: center;\n  margin: 10px;\n  padding: 15px;\n  width: 110px;\n}\napp-skill-card .logo img {\n  height: 50px;\n  width: auto;\n}\napp-skill-card .name {\n  padding: 5px;\n  font-weight: bold;\n  color: #18191A;\n}\napp-skill-card .progress {\n  width: 100%;\n  display: flex;\n  flex-flow: column;\n}\napp-skill-card .progress .level-legend {\n  filter: brightness(2);\n  font-size: small;\n  padding: 5px;\n}\napp-skill-card .mat-progress-bar {\n  height: 6px;\n}\napp-skill-card .mat-progress-bar .mat-progress-bar-fill::after {\n  animation: load 3s normal forwards;\n}\n@media (max-width: 800px) {\n  app-skill-card {\n    margin: 5px;\n    padding: 8px;\n    width: 80px;\n  }\n  app-skill-card .logo img {\n    height: 40px;\n  }\n  app-skill-card .name {\n    padding: 5px 0;\n  }\n  app-skill-card .progress .level-legend {\n    font-size: x-small;\n    padding: 3px;\n  }\n}\n@keyframes load {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: 68%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9za2lsbC1jYXJkL3NraWxsLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFERjtBQUlJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFGTjtBQU1FO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0NwQkk7QURnQlI7QUFPRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFMSjtBQU9JO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFMTjtBQVNFO0VBQ0UsV0FBQTtBQVBKO0FBUUk7RUFDRSxrQ0FBQTtBQU5OO0FBV0E7RUFDRTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtFQVJGO0VBV0k7SUFDRSxZQUFBO0VBVE47RUFhRTtJQUNFLGNBQUE7RUFYSjtFQWVJO0lBQ0Usa0JBQUE7SUFDQSxZQUFBO0VBYk47QUFDRjtBQWtCQTtFQUNFO0lBQ0UsUUFBQTtFQWhCRjtFQWtCQTtJQUNFLFVBQUE7RUFoQkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2tpbGwtY2FyZC9za2lsbC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG5hcHAtc2tpbGwtY2FyZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgd2lkdGg6IDExMHB4O1xyXG5cclxuICAubG9nbyB7XHJcbiAgICBpbWcge1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm5hbWUge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogJGJsYWNrO1xyXG4gIH1cclxuXHJcbiAgLnByb2dyZXNzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG5cclxuICAgIC5sZXZlbC1sZWdlbmQge1xyXG4gICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMik7XHJcbiAgICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyIHtcclxuICAgIGhlaWdodDogNnB4O1xyXG4gICAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xyXG4gICAgICBhbmltYXRpb246IGxvYWQgM3Mgbm9ybWFsIGZvcndhcmRzO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgYXBwLXNraWxsLWNhcmQge1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICB3aWR0aDogODBweDtcclxuXHJcbiAgICAubG9nbyB7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm5hbWUge1xyXG4gICAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZ3Jlc3Mge1xyXG4gICAgICAubGV2ZWwtbGVnZW5kIHtcclxuICAgICAgICBmb250LXNpemU6IHgtc21hbGw7XHJcbiAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGxvYWQge1xyXG4gIDAlIHtcclxuICAgIHdpZHRoOiAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHdpZHRoOiA2OCU7XHJcbiAgfVxyXG59XHJcbiIsIiRibGFjazogIzE4MTkxQTtcclxuJGdyYXk6ICM0ZjRmNGY7XHJcbiRsaWdodGdyYXk6ICM5YzkzOTM7XHJcbiRiYWNrZ3JvdW5kOiAjRjhGOEZGO1xyXG4kd2hpdGU6ICNGRkZGRkY7XHJcbiRwcmltYXJ5OiAjZDAyOTI5O1xyXG4kcHJpbWFyeW9wYWNpdHk6ICNkMDI5MjkyYjsiXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skill-card',
                templateUrl: './skill-card.component.html',
                styleUrls: ['./skill-card.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "k2K2":
/*!*****************************************************************!*\
  !*** ./src/app/components/custom-chip/custom-chip.component.ts ***!
  \*****************************************************************/
/*! exports provided: CustomChipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomChipComponent", function() { return CustomChipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class CustomChipComponent {
    constructor() { }
    ngOnInit() {
    }
}
CustomChipComponent.ɵfac = function CustomChipComponent_Factory(t) { return new (t || CustomChipComponent)(); };
CustomChipComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomChipComponent, selectors: [["app-custom-chip"]], inputs: { text: "text" }, decls: 3, vars: 1, consts: [[1, "chip"], [1, "chip__inner"]], template: function CustomChipComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
    } }, styles: ["app-custom-chip div {\n  border: none;\n  color: inherit;\n  text-decoration: none;\n  cursor: pointer;\n}\napp-custom-chip div:hover {\n  text-decoration: none;\n}\napp-custom-chip div:focus {\n  outline: none;\n}\napp-custom-chip .chip {\n  display: inline-block;\n  position: relative;\n  text-align: center;\n  margin: 2px;\n}\napp-custom-chip .chip__inner {\n  display: inline-block;\n  padding: 10px;\n  font-size: 10px;\n  font-weight: 400;\n  letter-spacing: 2px;\n  line-height: 1.2;\n  text-transform: uppercase;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: -webkit-fill-available;\n  color: #d02929;\n  transition: 0.5s cubic-bezier(0.17, 0.85, 0.438, 0.99);\n}\napp-custom-chip .chip:before,\napp-custom-chip .chip:after,\napp-custom-chip .chip__inner:before,\napp-custom-chip .chip__inner:after {\n  content: \"\";\n  position: absolute;\n  background-color: #d02929;\n  opacity: 0.2;\n  transition: 0.5s cubic-bezier(0.17, 0.85, 0.438, 0.99);\n}\napp-custom-chip .chip:before {\n  width: 100%;\n  height: 1px;\n  left: 0;\n  top: 0;\n  transform: scaleX(1);\n  transform-origin: right;\n}\napp-custom-chip .chip:after {\n  width: 1px;\n  height: 100%;\n  top: 0;\n  right: 0;\n  transform: scaleY(1);\n  transform-origin: bottom;\n}\napp-custom-chip .chip__inner:before {\n  width: 100%;\n  height: 1px;\n  left: 0;\n  bottom: 0;\n  transform: scaleX(1);\n  transform-origin: left;\n}\napp-custom-chip .chip__inner:after {\n  width: 1px;\n  height: 100%;\n  left: 0;\n  top: 0;\n  transform: scaleY(1);\n  transform-origin: top;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdXN0b20tY2hpcC9jdXN0b20tY2hpcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0k7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQUZOO0FBSUk7RUFDRSxxQkFBQTtBQUZOO0FBSUk7RUFDRSxhQUFBO0FBRk47QUFJSTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFGTjtBQUlJO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLGNDNUJJO0VENkJKLHNEQUFBO0FBRk47QUFJSTs7OztFQUlFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQ3JDSTtFRHNDSixZQUFBO0VBQ0Esc0RBQUE7QUFGTjtBQUlJO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUVBLG9CQUFBO0VBRUEsdUJBQUE7QUFGTjtBQUlJO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUVBLG9CQUFBO0VBRUEsd0JBQUE7QUFGTjtBQUlJO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUVBLG9CQUFBO0VBRUEsc0JBQUE7QUFGTjtBQUlJO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUVBLG9CQUFBO0VBRUEscUJBQUE7QUFGTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VzdG9tLWNoaXAvY3VzdG9tLWNoaXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbmFwcC1jdXN0b20tY2hpcCB7XHJcbiAgICBkaXYge1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIGRpdjpob3ZlciB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuICAgIGRpdjpmb2N1cyB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuY2hpcCB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbjogMnB4O1xyXG4gICAgfVxyXG4gICAgLmNoaXBfX2lubmVyIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgICAgIGNvbG9yOiAkcHJpbWFyeTtcclxuICAgICAgdHJhbnNpdGlvbjogMC41cyBjdWJpYy1iZXppZXIoMC4xNywgMC44NSwgMC40MzgsIDAuOTkpO1xyXG4gICAgfVxyXG4gICAgLmNoaXA6YmVmb3JlLFxyXG4gICAgLmNoaXA6YWZ0ZXIsXHJcbiAgICAuY2hpcF9faW5uZXI6YmVmb3JlLFxyXG4gICAgLmNoaXBfX2lubmVyOmFmdGVyIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcclxuICAgICAgb3BhY2l0eTogMC4yO1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjVzIGN1YmljLWJlemllcigwLjE3LCAwLjg1LCAwLjQzOCwgMC45OSk7XHJcbiAgICB9XHJcbiAgICAuY2hpcDpiZWZvcmUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLmNoaXA6YWZ0ZXIge1xyXG4gICAgICB3aWR0aDogMXB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMSk7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xyXG4gICAgfVxyXG4gICAgLmNoaXBfX2lubmVyOmJlZm9yZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgLmNoaXBfX2lubmVyOmFmdGVyIHtcclxuICAgICAgd2lkdGg6IDFweDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMSk7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcDtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xyXG4gICAgfVxyXG59IiwiJGJsYWNrOiAjMTgxOTFBO1xyXG4kZ3JheTogIzRmNGY0ZjtcclxuJGxpZ2h0Z3JheTogIzljOTM5MztcclxuJGJhY2tncm91bmQ6ICNGOEY4RkY7XHJcbiR3aGl0ZTogI0ZGRkZGRjtcclxuJHByaW1hcnk6ICNkMDI5Mjk7XHJcbiRwcmltYXJ5b3BhY2l0eTogI2QwMjkyOTJiOyJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomChipComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-custom-chip',
                templateUrl: './custom-chip.component.html',
                styleUrls: ['./custom-chip.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, { text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "kya/":
/*!*************************************************************!*\
  !*** ./src/app/components/info-card/info-card.component.ts ***!
  \*************************************************************/
/*! exports provided: InfoCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoCardComponent", function() { return InfoCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");



const _c0 = function (a0) { return { "cursor": a0 }; };
const _c1 = function (a0) { return { background: a0, "background-position": "center", "background-size": "cover" }; };
class InfoCardComponent {
    constructor() { }
    ngOnInit() {
    }
    openNewTab() {
        window.open(this.item.url);
    }
}
InfoCardComponent.ɵfac = function InfoCardComponent_Factory(t) { return new (t || InfoCardComponent)(); };
InfoCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InfoCardComponent, selectors: [["app-info-card"]], inputs: { item: "item" }, decls: 4, vars: 7, consts: [[1, "wrapper", 3, "ngStyle", "click"], [1, "image", 3, "ngStyle"], [1, "name"]], template: function InfoCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InfoCardComponent_Template_div_click_0_listener() { return ctx.openNewTab(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.item.url ? "pointer" : "unset"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, "url(" + ctx.item.logo + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.name);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: ["app-info-card {\n  display: flex;\n}\napp-info-card .wrapper {\n  display: flex;\n  flex-flow: column;\n  text-align: center;\n  align-items: center;\n  margin: 10px;\n  padding: 15px;\n  width: 150px;\n}\napp-info-card .wrapper .image {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n}\napp-info-card .wrapper .name {\n  font-weight: bold;\n  color: #18191A;\n  padding: 10px 0;\n}\napp-info-card .wrapper:hover {\n  box-shadow: 0px 0px 3px -1px #9c9393;\n}\n@media (max-width: 800px) {\n  app-info-card .wrapper {\n    margin: 0;\n    padding: 8px;\n    width: 90px;\n  }\n  app-info-card .wrapper .image {\n    width: 80px;\n    height: 80px;\n  }\n  app-info-card .wrapper .name {\n    font-size: smaller;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbmZvLWNhcmQvaW5mby1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7QUFERjtBQUdFO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQURKO0FBR0k7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBRE47QUFJSTtFQUNFLGlCQUFBO0VBQ0EsY0N0QkU7RUR1QkYsZUFBQTtBQUZOO0FBTUU7RUFDRSxvQ0FBQTtBQUpKO0FBUUE7RUFFSTtJQUNFLFNBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtFQU5KO0VBUUk7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQU5OO0VBU0k7SUFDRSxrQkFBQTtFQVBOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2luZm8tY2FyZC9pbmZvLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbmFwcC1pbmZvLWNhcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIC53cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG5cclxuICAgIC5pbWFnZSB7XHJcbiAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5uYW1lIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGNvbG9yOiAkYmxhY2s7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC53cmFwcGVyOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IC0xcHggJGxpZ2h0Z3JheTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIGFwcC1pbmZvLWNhcmQge1xyXG4gICAgLndyYXBwZXIge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgd2lkdGg6IDkwcHg7XHJcblxyXG4gICAgICAuaW1hZ2Uge1xyXG4gICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm5hbWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIkYmxhY2s6ICMxODE5MUE7XHJcbiRncmF5OiAjNGY0ZjRmO1xyXG4kbGlnaHRncmF5OiAjOWM5MzkzO1xyXG4kYmFja2dyb3VuZDogI0Y4RjhGRjtcclxuJHdoaXRlOiAjRkZGRkZGO1xyXG4kcHJpbWFyeTogI2QwMjkyOTtcclxuJHByaW1hcnlvcGFjaXR5OiAjZDAyOTI5MmI7Il19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-info-card',
                templateUrl: './info-card.component.html',
                styleUrls: ['./info-card.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "mKaJ":
/*!**********************************************************!*\
  !*** ./src/app/pages/experience/experience.component.ts ***!
  \**********************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_assets_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/assets/data */ "6Xnp");
/* harmony import */ var _components_experience_card_experience_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/experience-card/experience-card.component */ "uoxI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _components_awards_awards_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/awards/awards.component */ "QrEi");
/* harmony import */ var _components_education_level_education_level_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/education-level/education-level.component */ "zeqP");







function ExperienceComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-awards", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("award", item_r3);
} }
function ExperienceComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-education-level", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("education", item_r4);
} }
function ExperienceComponent_app_experience_card_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-experience-card", 0);
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("experience", item_r5);
} }
class ExperienceComponent {
    constructor() {
        this.experience = [];
        this.education = [];
        this.awards = [];
        this.otherExperiences = [];
        this.experience = src_assets_data__WEBPACK_IMPORTED_MODULE_1__["EXPERIENCE"];
        this.education = src_assets_data__WEBPACK_IMPORTED_MODULE_1__["EDUCATION"];
        this.awards = src_assets_data__WEBPACK_IMPORTED_MODULE_1__["AWARDS"];
        this.otherExperiences = this.experience.slice(1, this.experience.length);
    }
    ngOnInit() {
    }
}
ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) { return new (t || ExperienceComponent)(); };
ExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperienceComponent, selectors: [["app-experience"]], decls: 7, vars: 4, consts: [[3, "experience"], [4, "ngFor", "ngForOf"], [1, "title-category"], [1, "other-work-experiences"], [3, "experience", 4, "ngFor", "ngForOf"], [3, "award"], [3, "education"]], template: function ExperienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-experience-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExperienceComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExperienceComponent_div_2_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Other work experiences");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExperienceComponent_app_experience_card_6_Template, 1, 1, "app-experience-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("experience", ctx.experience[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.awards);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.education);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.otherExperiences);
    } }, directives: [_components_experience_card_experience_card_component__WEBPACK_IMPORTED_MODULE_2__["ExperienceCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _components_awards_awards_component__WEBPACK_IMPORTED_MODULE_4__["AwardsComponent"], _components_education_level_education_level_component__WEBPACK_IMPORTED_MODULE_5__["EducationLevelComponent"]], styles: ["app-experience .other-work-experiences {\n  display: flex;\n  flex-flow: wrap;\n}\napp-experience .other-work-experiences app-experience-card {\n  flex: 0 0 50%;\n}\n@media (max-width: 800px) {\n  app-experience .other-work-experiences app-experience-card {\n    flex: 0 0 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFGSjtBQUlJO0VBQ0UsYUFBQTtBQUZOO0FBT0E7RUFHTTtJQUNFLGNBQUE7RUFOTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG5hcHAtZXhwZXJpZW5jZSB7XHJcbiAgLm90aGVyLXdvcmstZXhwZXJpZW5jZXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogd3JhcDtcclxuXHJcbiAgICBhcHAtZXhwZXJpZW5jZS1jYXJkIHtcclxuICAgICAgZmxleDogMCAwIDUwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIGFwcC1leHBlcmllbmNlIHtcclxuICAgIC5vdGhlci13b3JrLWV4cGVyaWVuY2VzIHtcclxuICAgICAgYXBwLWV4cGVyaWVuY2UtY2FyZCB7XHJcbiAgICAgICAgZmxleDogMCAwIDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-experience',
                templateUrl: './experience.component.html',
                styleUrls: ['./experience.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ojyh":
/*!******************************************************!*\
  !*** ./src/app/pages/homepage/homepage.component.ts ***!
  \******************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_assets_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/assets/data */ "6Xnp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_commons_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commons.service */ "zZLy");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _components_custom_button_custom_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/custom-button/custom-button.component */ "bGnb");
/* harmony import */ var _components_project_card_project_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/project-card/project-card.component */ "M0Pn");
/* harmony import */ var _components_publications_publications_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/publications/publications.component */ "BBdW");










function HomepageComponent_app_project_card_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-project-card", 10);
} if (rf & 2) {
    const project_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("project", project_r4);
} }
function HomepageComponent_app_project_card_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-project-card", 10);
} if (rf & 2) {
    const project_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("project", project_r5);
} }
function HomepageComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Latest publications\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomepageComponent_div_14_app_publications_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-publications", 13);
} if (rf & 2) {
    const publication_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("publication", publication_r7);
} }
function HomepageComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomepageComponent_div_14_app_publications_1_Template, 1, 1, "app-publications", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.publications);
} }
class HomepageComponent {
    constructor(router, commonsService) {
        this.router = router;
        this.commonsService = commonsService;
        this.experience = {};
        this.publications = [];
        this.projects = [];
        this.projectsTechnology = [];
        this.projectsDesign = [];
    }
    ngOnInit() {
        this.isMobileView = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent);
        this.experience = src_assets_data__WEBPACK_IMPORTED_MODULE_1__["EXPERIENCE"][0];
        this.projects = src_assets_data__WEBPACK_IMPORTED_MODULE_1__["PROJECTS"].filter(project => project.featured);
        this.projectsTechnology = this.projects.filter(project => project.category === 'programming');
        this.projectsDesign = this.projects.filter(project => project.category === 'design');
        this.commonsService.publications$.subscribe(publications => {
            this.publications = publications;
        });
    }
    goToPage(page) {
        this.router.navigateByUrl(`${page}`);
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_commons_service__WEBPACK_IMPORTED_MODULE_3__["CommonsService"])); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 15, vars: 5, consts: [[1, "description-homepage"], [1, "title-category"], ["label", "\uD83D\uDCBB Programming"], [1, "projects"], [3, "project", 4, "ngFor", "ngForOf"], ["label", "\uD83C\uDFA8 Design"], [1, "see-more"], ["buttonText", "</See more projects>", 3, "isFilledButton", "click"], ["class", "title-category", 4, "ngIf"], ["class", "publications", 4, "ngIf"], [3, "project"], [1, "publications"], [3, "publication", 4, "ngFor", "ngForOf"], [3, "publication"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " I am an application developer open for collaborations, passionate about digital graphics and photography, eager to learn and evolve in the Front-End field. During the last years, i focused both on my technical and soft skills, working with people around the globe and learning how to deliver their expectations.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Lastest projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomepageComponent_app_project_card_7_Template, 1, 1, "app-project-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-tab", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomepageComponent_app_project_card_10_Template, 1, 1, "app-project-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "app-custom-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_Template_app_custom_button_click_12_listener() { return ctx.goToPage("/projects"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HomepageComponent_div_13_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomepageComponent_div_14_Template, 2, 1, "div", 9);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projectsTechnology);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projectsDesign);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isFilledButton", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.publications.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.publications.length > 0);
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTab"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _components_custom_button_custom_button_component__WEBPACK_IMPORTED_MODULE_6__["CustomButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _components_project_card_project_card_component__WEBPACK_IMPORTED_MODULE_7__["ProjectCardComponent"], _components_publications_publications_component__WEBPACK_IMPORTED_MODULE_8__["PublicationsComponent"]], styles: ["app-homepage .logo {\n  text-align-last: center;\n  padding: 20px;\n}\napp-homepage .logo img {\n  width: auto;\n  height: 25vh;\n}\napp-homepage .description-homepage {\n  text-align: center;\n  font-size: 1rem;\n  line-height: 1.7rem;\n  margin: 20px 10vw;\n}\napp-homepage .see-more {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: auto;\n}\napp-homepage .projects {\n  display: flex;\n  margin: 10px;\n  overflow: auto;\n  justify-content: center;\n}\napp-homepage .mat-tab-header {\n  border-bottom: none;\n}\napp-homepage .mat-tab-labels {\n  justify-content: center;\n}\napp-homepage .mat-tab-label {\n  opacity: 1;\n  color: #FFFFFF;\n}\napp-homepage .publications {\n  display: flex;\n  justify-content: center;\n  flex-flow: wrap;\n}\napp-homepage .publications app-publications {\n  flex: 0 0 25%;\n}\napp-homepage .plain-container {\n  justify-content: center !important;\n  margin: 20px 40px 40px;\n  display: flex !important;\n  flex-flow: wrap;\n}\napp-homepage .plain-container .image {\n  margin: 5px !important;\n  height: 200px !important;\n  width: auto !important;\n  box-shadow: 0 0 10px -3px #9c9393;\n}\n@media (max-width: 850px) {\n  app-homepage .description-homepage {\n    margin: 3vh 5vw;\n  }\n  app-homepage .publications app-publications {\n    flex: 0 0 50%;\n  }\n  app-homepage .publications app-publications .publication-wrapper {\n    padding: 10px;\n  }\n  app-homepage .publications app-publications .publication-wrapper .image {\n    height: 125px;\n    width: 125px;\n  }\n  app-homepage .projects {\n    justify-content: unset;\n  }\n}\n@media (max-width: 700px) {\n  app-homepage .plain-container .image {\n    height: auto !important;\n    width: 100% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0FBRko7QUFJSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBRk47QUFNRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFKSjtBQU9FO0VBQ0UsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsWUFBQTtBQUxKO0FBUUU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQU5KO0FBU0U7RUFDRSxtQkFBQTtBQVBKO0FBVUU7RUFDRSx1QkFBQTtBQVJKO0FBV0U7RUFDRSxVQUFBO0VBQ0EsY0N0Q0k7QUQ2QlI7QUFZRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFWSjtBQVlJO0VBQ0UsYUFBQTtBQVZOO0FBY0U7RUFDRSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0FBWko7QUFjSTtFQUNFLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0FBWk47QUFnQkU7RUFDRTtJQUNFLGVBQUE7RUFkSjtFQWlCSTtJQUNFLGFBQUE7RUFmTjtFQWlCTTtJQUNFLGFBQUE7RUFmUjtFQWlCUTtJQUNFLGFBQUE7SUFDQSxZQUFBO0VBZlY7RUFvQkU7SUFDRSxzQkFBQTtFQWxCSjtBQUNGO0FBcUJFO0VBRUk7SUFDRSx1QkFBQTtJQUNBLHNCQUFBO0VBcEJOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuYXBwLWhvbWVwYWdlIHtcclxuICAubG9nbyB7XHJcbiAgICB0ZXh0LWFsaWduLWxhc3Q6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgIGhlaWdodDogMjV2aDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5kZXNjcmlwdGlvbi1ob21lcGFnZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS43cmVtO1xyXG4gICAgbWFyZ2luOiAyMHB4IDEwdnc7XHJcbiAgfVxyXG5cclxuICAuc2VlLW1vcmUge1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLnByb2plY3RzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLm1hdC10YWItaGVhZGVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubWF0LXRhYi1sYWJlbHMge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAubWF0LXRhYi1sYWJlbCB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgY29sb3I6ICR3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5wdWJsaWNhdGlvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1mbG93OiB3cmFwO1xyXG5cclxuICAgIGFwcC1wdWJsaWNhdGlvbnMge1xyXG4gICAgICBmbGV4OiAwIDAgMjUlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnBsYWluLWNvbnRhaW5lciB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAyMHB4IDQwcHggNDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIGZsZXgtZmxvdzogd3JhcDtcclxuXHJcbiAgICAuaW1hZ2Uge1xyXG4gICAgICBtYXJnaW46IDVweCAhaW1wb3J0YW50O1xyXG4gICAgICBoZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IC0zcHggJGxpZ2h0Z3JheTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4NTBweCkge1xyXG4gICAgLmRlc2NyaXB0aW9uLWhvbWVwYWdlIHtcclxuICAgICAgbWFyZ2luOiAzdmggNXZ3O1xyXG4gICAgfVxyXG4gICAgLnB1YmxpY2F0aW9ucyB7XHJcbiAgICAgIGFwcC1wdWJsaWNhdGlvbnMge1xyXG4gICAgICAgIGZsZXg6IDAgMCA1MCU7XHJcblxyXG4gICAgICAgIC5wdWJsaWNhdGlvbi13cmFwcGVyIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gICAgICAgICAgLmltYWdlIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMjVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEyNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnByb2plY3RzIHtcclxuICAgICAganVzdGlmeS1jb250ZW50OiB1bnNldDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgLnBsYWluLWNvbnRhaW5lciB7XHJcbiAgICAgIC5pbWFnZSB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIkYmxhY2s6ICMxODE5MUE7XHJcbiRncmF5OiAjNGY0ZjRmO1xyXG4kbGlnaHRncmF5OiAjOWM5MzkzO1xyXG4kYmFja2dyb3VuZDogI0Y4RjhGRjtcclxuJHdoaXRlOiAjRkZGRkZGO1xyXG4kcHJpbWFyeTogI2QwMjkyOTtcclxuJHByaW1hcnlvcGFjaXR5OiAjZDAyOTI5MmI7Il19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-homepage',
                templateUrl: './homepage.component.html',
                styleUrls: ['./homepage.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_commons_service__WEBPACK_IMPORTED_MODULE_3__["CommonsService"] }]; }, null); })();


/***/ }),

/***/ "u/sh":
/*!******************************************************!*\
  !*** ./src/app/pages/projects/projects.component.ts ***!
  \******************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_assets_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/assets/data */ "6Xnp");
/* harmony import */ var _components_custom_category_button_custom_category_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/custom-category-button/custom-category-button.component */ "fPRL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _components_project_card_project_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/project-card/project-card.component */ "M0Pn");






function ProjectsComponent_app_custom_category_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-custom-category-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_app_custom_category_button_2_Template_app_custom_category_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const technology_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.selectTechnology(technology_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const technology_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", technology_r2)("isSelected", ctx_r0.isSelected(technology_r2));
} }
function ProjectsComponent_app_project_card_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-project-card", 6);
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("project", item_r5);
} }
class ProjectsComponent {
    constructor() {
        this.selectedTechnologies = [];
        this.uniqueTechnologies = [];
        this.data = src_assets_data__WEBPACK_IMPORTED_MODULE_1__["PROJECTS"];
    }
    ngOnInit() {
        let allTechnologies = [];
        this.data.forEach(project => {
            allTechnologies.push(...project.technologies);
        });
        this.uniqueTechnologies = [...new Set(allTechnologies)].sort();
    }
    isSelected(name) {
        return this.selectedTechnologies.includes(name) || this.selectedTechnologies.length === 0;
    }
    selectTechnology(name) {
        if (name === 'all') {
            this.selectedTechnologies = [];
        }
        else {
            if (this.selectedTechnologies.includes(name)) {
                const index = this.selectedTechnologies.indexOf(name);
                this.selectedTechnologies.splice(index, 1);
            }
            else {
                this.selectedTechnologies.push(name);
            }
        }
    }
    filteredData() {
        return this.selectedTechnologies.length > 0
            ? this.data.filter((project) => project.technologies.some((technology) => this.selectedTechnologies.indexOf(technology) >= 0))
            : this.data;
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 5, vars: 3, consts: [[1, "filters"], ["text", "All technologies", 3, "isSelected", "click"], [3, "text", "isSelected", "click", 4, "ngFor", "ngForOf"], [1, "projects-cards"], [3, "project", 4, "ngFor", "ngForOf"], [3, "text", "isSelected", "click"], [3, "project"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-custom-category-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_Template_app_custom_category_button_click_1_listener() { return ctx.selectTechnology("all"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProjectsComponent_app_custom_category_button_2_Template, 1, 2, "app-custom-category-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProjectsComponent_app_project_card_4_Template, 1, 1, "app-project-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isSelected", ctx.isSelected());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.uniqueTechnologies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredData());
    } }, directives: [_components_custom_category_button_custom_category_button_component__WEBPACK_IMPORTED_MODULE_2__["CustomCategoryButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _components_project_card_project_card_component__WEBPACK_IMPORTED_MODULE_4__["ProjectCardComponent"]], styles: ["app-projects {\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n}\napp-projects .projects-cards {\n  display: flex;\n  justify-content: center;\n  flex-flow: wrap;\n}\napp-projects .filters {\n  display: flex;\n  flex-flow: wrap;\n  justify-content: center;\n}\napp-projects .filters .button {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQURGO0FBR0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBREo7QUFJRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFGSjtBQUlJO0VBQ0UsV0FBQTtBQUZOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbmFwcC1wcm9qZWN0cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgLnByb2plY3RzLWNhcmRzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZmxvdzogd3JhcDtcclxuICB9XHJcblxyXG4gIC5maWx0ZXJzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAuYnV0dG9uIHtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "uoxI":
/*!*************************************************************************!*\
  !*** ./src/app/components/experience-card/experience-card.component.ts ***!
  \*************************************************************************/
/*! exports provided: ExperienceCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceCardComponent", function() { return ExperienceCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _custom_chip_custom_chip_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../custom-chip/custom-chip.component */ "k2K2");




function ExperienceCardComponent_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.experience.companyLogo ? ctx_r0.experience.companyLogo : ctx_r0.experience.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ExperienceCardComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.experience.location, " ");
} }
function ExperienceCardComponent_div_11_app_custom_chip_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-custom-chip", 14);
} if (rf & 2) {
    const skill_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", skill_r5);
} }
function ExperienceCardComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExperienceCardComponent_div_11_app_custom_chip_1_Template, 1, 1, "app-custom-chip", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.experience.skill);
} }
function ExperienceCardComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 15);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r3.experience.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class ExperienceCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
ExperienceCardComponent.ɵfac = function ExperienceCardComponent_Factory(t) { return new (t || ExperienceCardComponent)(); };
ExperienceCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperienceCardComponent, selectors: [["app-experience-card"]], inputs: { experience: "experience", parentPage: "parentPage" }, decls: 13, vars: 8, consts: [[1, "header"], [1, "image"], [3, "src", 4, "ngIf"], [1, "summary"], [1, "name"], [1, "role"], [1, "date"], ["class", "location", 4, "ngIf"], ["class", "skills", 4, "ngIf"], ["class", "description", 3, "innerHTML", 4, "ngIf"], [3, "src"], [1, "location"], [1, "skills"], [3, "text", 4, "ngFor", "ngForOf"], [3, "text"], [1, "description", 3, "innerHTML"]], template: function ExperienceCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExperienceCardComponent_img_2_Template, 1, 1, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExperienceCardComponent_div_10_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ExperienceCardComponent_div_11_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ExperienceCardComponent_div_12_Template, 1, 1, "div", 9);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.experience.companyLogo || ctx.experience.logo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.experience.companyName ? ctx.experience.companyName : ctx.experience.organization, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.experience.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.experience.dateStart ? ctx.experience.dateStart : ctx.experience.startYear, " - ", ctx.experience.dateEnd ? ctx.experience.dateEnd : ctx.experience.endYear, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.experience.location);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.experience.skill && ctx.experience.skill.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.parentPage !== "homepage");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _custom_chip_custom_chip_component__WEBPACK_IMPORTED_MODULE_2__["CustomChipComponent"]], styles: ["app-experience-card .header {\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n}\napp-experience-card .header .image img {\n  max-width: 150px;\n  height: auto;\n}\napp-experience-card .header .summary {\n  display: flex;\n  flex-flow: column;\n  padding: 20px;\n}\napp-experience-card .header .summary .name {\n  font-weight: bold;\n  color: #4f4f4f;\n}\napp-experience-card .header .summary .role {\n  font-weight: bold;\n  font-size: 1.2rem;\n  color: #d02929;\n  margin: 4px 0;\n}\napp-experience-card .header .summary .date {\n  font-weight: normal;\n}\napp-experience-card .header .summary .location {\n  color: #9c9393;\n}\napp-experience-card .skills {\n  display: flex;\n  flex-flow: wrap;\n  margin: 10px 0;\n}\napp-experience-card .description {\n  line-height: 1.5rem;\n}\n@media (max-width: 800px) {\n  app-experience-card .header {\n    flex-flow: wrap;\n    margin: 10px 0;\n  }\n  app-experience-card .header .image img {\n    max-width: 80px;\n  }\n  app-experience-card .header .summary {\n    padding: 0 10px;\n  }\n  app-experience-card .header .summary .role {\n    font-size: small;\n  }\n  app-experience-card .description {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9leHBlcmllbmNlLWNhcmQvZXhwZXJpZW5jZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFGSjtBQUtNO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBSFI7QUFNSTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUFKTjtBQU1NO0VBQ0UsaUJBQUE7RUFDQSxjQ3BCRDtBRGdCUDtBQU1NO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNDckJFO0VEc0JGLGFBQUE7QUFKUjtBQU1NO0VBQ0UsbUJBQUE7QUFKUjtBQU1NO0VBQ0UsY0MvQkk7QUQyQlo7QUFTRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQVBKO0FBVUU7RUFDRSxtQkFBQTtBQVJKO0FBV0U7RUFDRTtJQUNFLGVBQUE7SUFDQSxjQUFBO0VBVEo7RUFXSTtJQUNFLGVBQUE7RUFUTjtFQVlJO0lBQ0UsZUFBQTtFQVZOO0VBWU07SUFDRSxnQkFBQTtFQVZSO0VBY0U7SUFDRSxhQUFBO0VBWko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXhwZXJpZW5jZS1jYXJkL2V4cGVyaWVuY2UtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuYXBwLWV4cGVyaWVuY2UtY2FyZCB7XHJcbiAgLmhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIC5pbWFnZSB7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxNTBweDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5zdW1tYXJ5IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICAgIHBhZGRpbmc6IDIwcHg7XHJcblxyXG4gICAgICAubmFtZSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6ICRncmF5O1xyXG4gICAgICB9XHJcbiAgICAgIC5yb2xlIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnk7XHJcbiAgICAgICAgbWFyZ2luOiA0cHggMDtcclxuICAgICAgfVxyXG4gICAgICAuZGF0ZSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgfVxyXG4gICAgICAubG9jYXRpb24ge1xyXG4gICAgICAgIGNvbG9yOiAkbGlnaHRncmF5O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2tpbGxzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHdyYXA7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICB9XHJcblxyXG4gIC5kZXNjcmlwdGlvbiB7XHJcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgZmxleC1mbG93OiB3cmFwO1xyXG4gICAgICBtYXJnaW46IDEwcHggMDtcclxuXHJcbiAgICAgIC5pbWFnZSBpbWcge1xyXG4gICAgICAgIG1heC13aWR0aDogODBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnN1bW1hcnkge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuXHJcbiAgICAgICAgLnJvbGUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiRibGFjazogIzE4MTkxQTtcclxuJGdyYXk6ICM0ZjRmNGY7XHJcbiRsaWdodGdyYXk6ICM5YzkzOTM7XHJcbiRiYWNrZ3JvdW5kOiAjRjhGOEZGO1xyXG4kd2hpdGU6ICNGRkZGRkY7XHJcbiRwcmltYXJ5OiAjZDAyOTI5O1xyXG4kcHJpbWFyeW9wYWNpdHk6ICNkMDI5MjkyYjsiXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-experience-card',
                templateUrl: './experience-card.component.html',
                styleUrls: ['./experience-card.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, { experience: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], parentPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "v2M4":
/*!********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.ts ***!
  \********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");



class NotFoundComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    goToHomepage() {
        this.router.navigateByUrl("/");
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 8, vars: 0, consts: [[1, "wrapper"], [3, "click"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "404 - Page not found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " You might want to go to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotFoundComponent_Template_a_click_5_listener() { return ctx.goToHomepage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Homepage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " and try again. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["app-not-found .wrapper {\n  margin: 20px;\n}\napp-not-found .wrapper a {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLFlBQUE7QUFGSjtBQUlJO0VBQ0UsZUFBQTtBQUZOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuYXBwLW5vdC1mb3VuZCB7XHJcbiAgLndyYXBwZXIge1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG5cclxuICAgIGEge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/contact/contact.component */ "XEn3");
/* harmony import */ var _pages_experience_experience_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/experience/experience.component */ "mKaJ");
/* harmony import */ var _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/homepage/homepage.component */ "ojyh");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "v2M4");
/* harmony import */ var _pages_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/project-details/project-details.component */ "X1wX");
/* harmony import */ var _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/projects/projects.component */ "u/sh");
/* harmony import */ var _pages_skills_skills_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/skills/skills.component */ "2yNh");











const routes = [
    { path: '', component: _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"] },
    { path: 'skills', component: _pages_skills_skills_component__WEBPACK_IMPORTED_MODULE_8__["SkillsComponent"] },
    { path: 'experience', component: _pages_experience_experience_component__WEBPACK_IMPORTED_MODULE_3__["ExperienceComponent"] },
    { path: 'contact', component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"] },
    { path: 'projects', component: _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"] },
    { path: 'project/:id', component: _pages_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_6__["ProjectDetailsComponent"] },
    { path: '404', component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"] },
    { path: '**', redirectTo: '/404' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zZLy":
/*!************************************!*\
  !*** ./src/app/commons.service.ts ***!
  \************************************/
/*! exports provided: CommonsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonsService", function() { return CommonsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_assets_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/data */ "6Xnp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");





class CommonsService {
    constructor(_http) {
        this._http = _http;
        this._publications = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.publications$ = this._publications.asObservable();
    }
    getDataFromAPIs() {
        this.getPublications();
    }
    getPublications() {
        let articlesToShow = [];
        this._http.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@madalinaeleonorag').subscribe(data => {
            switch (true) {
                case data['items'].length > 4:
                    articlesToShow = [...data['items'].slice(0, 3)];
                    break;
                case data['items'].length < 4:
                    articlesToShow = [...data['items'], ...src_assets_data__WEBPACK_IMPORTED_MODULE_2__["OTHER_PUBLICATIONS"]];
                    break;
                default:
                    articlesToShow = [...data['items']];
                    break;
            }
            this._publications.next(articlesToShow);
        });
    }
}
CommonsService.ɵfac = function CommonsService_Factory(t) { return new (t || CommonsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
CommonsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommonsService, factory: CommonsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "zeqP":
/*!*************************************************************************!*\
  !*** ./src/app/components/education-level/education-level.component.ts ***!
  \*************************************************************************/
/*! exports provided: EducationLevelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationLevelComponent", function() { return EducationLevelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");



function EducationLevelComponent_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.education.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function EducationLevelComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Grade: ", ctx_r1.education.grade, "");
} }
class EducationLevelComponent {
    constructor() { }
    ngOnInit() {
    }
}
EducationLevelComponent.ɵfac = function EducationLevelComponent_Factory(t) { return new (t || EducationLevelComponent)(); };
EducationLevelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EducationLevelComponent, selectors: [["app-education-level"]], inputs: { education: "education" }, decls: 14, vars: 8, consts: [[1, "header"], [1, "image"], [3, "src", 4, "ngIf"], [1, "summary"], [1, "name"], [1, "degree"], [1, "fieldOfStudy"], [1, "date"], ["class", "grade", 4, "ngIf"], [1, "description", 3, "innerHTML"], [3, "src"], [1, "grade"]], template: function EducationLevelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EducationLevelComponent_img_2_Template, 1, 1, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EducationLevelComponent_div_12_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 9);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.education.logo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.education.school);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.education.degree);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.education.fieldOfStudy);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.education.startYear, " - ", ctx.education.endYear, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.education.grade);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.education.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["app-education-level .header {\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  padding: 20px 0;\n}\napp-education-level .header .image {\n  padding-right: 20px;\n}\napp-education-level .header .image img {\n  max-width: 150px;\n  height: auto;\n}\napp-education-level .header .summary {\n  display: flex;\n  flex-flow: column;\n}\napp-education-level .header .summary .name {\n  font-weight: bold;\n  color: #4f4f4f;\n}\napp-education-level .header .summary .degree {\n  font-weight: bold;\n  font-size: 1.2rem;\n  color: #d02929;\n  margin: 4px 0;\n}\napp-education-level .header .summary .date {\n  font-weight: normal;\n}\napp-education-level .header .summary .fieldOfStudy {\n  font-weight: normal;\n  color: #9c9393;\n}\napp-education-level .header .summary .grade {\n  color: #9c9393;\n}\napp-education-level .description {\n  line-height: 1.5rem;\n}\n@media (max-width: 800px) {\n  app-education-level .header {\n    padding: 10px 0;\n  }\n  app-education-level .header .image {\n    display: none;\n  }\n  app-education-level .header .summary .name {\n    display: none;\n  }\n  app-education-level .description {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZHVjYXRpb24tbGV2ZWwvZWR1Y2F0aW9uLWxldmVsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBRko7QUFJSTtFQUNFLG1CQUFBO0FBRk47QUFJTTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQUZSO0FBS0k7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUFITjtBQUtNO0VBQ0UsaUJBQUE7RUFDQSxjQ3RCRDtBRG1CUDtBQUtNO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNDdkJFO0VEd0JGLGFBQUE7QUFIUjtBQUtNO0VBQ0UsbUJBQUE7QUFIUjtBQUtNO0VBQ0UsbUJBQUE7RUFDQSxjQ2xDSTtBRCtCWjtBQUtNO0VBQ0UsY0NyQ0k7QURrQ1o7QUFRRTtFQUNFLG1CQUFBO0FBTko7QUFTRTtFQUNFO0lBQ0UsZUFBQTtFQVBKO0VBU0k7SUFDRSxhQUFBO0VBUE47RUFXTTtJQUNFLGFBQUE7RUFUUjtFQWFFO0lBQ0UsYUFBQTtFQVhKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2VkdWNhdGlvbi1sZXZlbC9lZHVjYXRpb24tbGV2ZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbmFwcC1lZHVjYXRpb24tbGV2ZWwge1xyXG4gIC5oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIwcHggMDtcclxuXHJcbiAgICAuaW1hZ2Uge1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnN1bW1hcnkge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuXHJcbiAgICAgIC5uYW1lIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogJGdyYXk7XHJcbiAgICAgIH1cclxuICAgICAgLmRlZ3JlZSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgICAgIG1hcmdpbjogNHB4IDA7XHJcbiAgICAgIH1cclxuICAgICAgLmRhdGUge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIH1cclxuICAgICAgLmZpZWxkT2ZTdHVkeSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBjb2xvcjogJGxpZ2h0Z3JheTtcclxuICAgICAgfVxyXG4gICAgICAuZ3JhZGUge1xyXG4gICAgICAgIGNvbG9yOiAkbGlnaHRncmF5O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZGVzY3JpcHRpb24ge1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgXHJcbiAgICAgIC5pbWFnZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnN1bW1hcnkge1xyXG4gICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIkYmxhY2s6ICMxODE5MUE7XHJcbiRncmF5OiAjNGY0ZjRmO1xyXG4kbGlnaHRncmF5OiAjOWM5MzkzO1xyXG4kYmFja2dyb3VuZDogI0Y4RjhGRjtcclxuJHdoaXRlOiAjRkZGRkZGO1xyXG4kcHJpbWFyeTogI2QwMjkyOTtcclxuJHByaW1hcnlvcGFjaXR5OiAjZDAyOTI5MmI7Il19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EducationLevelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-education-level',
                templateUrl: './education-level.component.html',
                styleUrls: ['./education-level.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, { education: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map