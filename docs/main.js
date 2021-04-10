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
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 33, vars: 16, consts: [["src", "assets/menu.png", 1, "menu-icon", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], [1, "title", 3, "click"], [1, "links"], [3, "ngClass", "click"], [1, "social-icons-wrapper"], ["target", "_blank", "href", "https://madalinaeleonorag.medium.com/"], ["type", "medium"], ["target", "_blank", "href", "https://github.com/madalinaeleonorag"], ["type", "github"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-menu", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_3_listener() { return ctx.goToPage("/"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_5_listener() { return ctx.goToPage("projects"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_7_listener() { return ctx.goToPage("skills"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_9_listener() { return ctx.goToPage("experience"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_11_listener() { return ctx.goToPage("contact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_13_listener() { return ctx.goToPage("/"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Madalina");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Eleonora");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_18_listener() { return ctx.goToPage("/"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_20_listener() { return ctx.goToPage("projects"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_22_listener() { return ctx.goToPage("skills"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Skills ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_24_listener() { return ctx.goToPage("experience"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Experience ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_26_listener() { return ctx.goToPage("contact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Contact ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-custom-svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "app-custom-svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.isPageSelected("/")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.isPageSelected("/projects")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.isPageSelected("/skills")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.isPageSelected("/experience")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.isPageSelected("/contact")));
    } }, directives: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuItem"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _custom_svg_custom_svg_component__WEBPACK_IMPORTED_MODULE_4__["CustomSvgComponent"]], styles: ["app-header {\n  display: flex;\n  height: 30px;\n  flex-flow: row;\n  background-color: #18191A;\n  align-items: center;\n  justify-content: space-between;\n  padding: 15px;\n  margin-top: -60px;\n  position: fixed;\n  width: -webkit-fill-available;\n  z-index: 99999;\n}\napp-header .menu-icon {\n  display: none;\n}\napp-header .title {\n  cursor: pointer;\n  text-transform: uppercase;\n  font-size: 1rem;\n  font-weight: normal;\n  color: #FFFFFF;\n  margin: 0 10px;\n}\napp-header .title span {\n  color: #a50c0c;\n}\napp-header .title:hover span {\n  color: #FFFFFF;\n}\napp-header .links {\n  flex-flow: row;\n  display: flex;\n  margin-right: auto;\n}\napp-header .links div {\n  margin: 0 10px;\n  text-decoration: none;\n  font-weight: bold;\n  color: white !important;\n}\napp-header .links div:hover {\n  color: #a50c0c !important;\n  cursor: pointer;\n}\napp-header .links .selected-page {\n  color: #a50c0c !important;\n}\napp-header a {\n  margin: 0 10px !important;\n}\n@media (max-width: 800px) {\n  app-header .links {\n    display: none;\n  }\n  app-header .menu-icon {\n    display: inline;\n  }\n  app-header .title {\n    margin: auto;\n  }\n}\n@media (max-width: 800px) {\n  app-header .social-icons-wrapper {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQ05NO0VET04sbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7QUFERjtBQUdFO0VBQ0UsYUFBQTtBQURKO0FBSUU7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQ3BCSTtFRHFCSixjQUFBO0FBRko7QUFJSTtFQUNFLGNDdkJFO0FEcUJSO0FBT0k7RUFDRSxjQzlCRTtBRHlCUjtBQVNFO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQVBKO0FBU0k7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FBUE47QUFTSTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQVBOO0FBU0k7RUFDRSx5QkFBQTtBQVBOO0FBV0U7RUFDRSx5QkFBQTtBQVRKO0FBWUU7RUFDRTtJQUNFLGFBQUE7RUFWSjtFQVlFO0lBQ0UsZUFBQTtFQVZKO0VBWUU7SUFDRSxZQUFBO0VBVko7QUFDRjtBQWFFO0VBQ0U7SUFDRSxhQUFBO0VBWEo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuYXBwLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgZmxleC1mbG93OiByb3c7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDogLTYwcHg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gIHotaW5kZXg6IDk5OTk5O1xyXG5cclxuICAubWVudS1pY29uIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAudGl0bGUge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgbWFyZ2luOiAwIDEwcHg7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgIGNvbG9yOiAkYm9yZG87XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudGl0bGU6aG92ZXIge1xyXG4gICAgc3BhbiB7XHJcbiAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubGlua3Mge1xyXG4gICAgZmxleC1mbG93OiByb3c7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cclxuICAgIGRpdiB7XHJcbiAgICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIGRpdjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAkYm9yZG8gIWltcG9ydGFudDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgLnNlbGVjdGVkLXBhZ2Uge1xyXG4gICAgICBjb2xvcjogJGJvcmRvICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIG1hcmdpbjogMCAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIC5saW5rcyB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAubWVudS1pY29uIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgfVxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAuc29jaWFsLWljb25zLXdyYXBwZXIge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIkYmxhY2s6ICMxODE5MUE7XHJcbiRncmF5OiAjM0EzQjNDO1xyXG4kbGlnaHRncmF5OiAjOGI4YjhiO1xyXG4kYmFja2dyb3VuZDogI0Y4RjhGRjtcclxuJHdoaXRlOiAjRkZGRkZGO1xyXG4kYm9yZG86ICNhNTBjMGM7XHJcbiRib3Jkb29wYWNpdHk6ICNhNTBjMGMyYjsiXX0= */"], encapsulation: 2 });
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
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var _components_skill_card_skill_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/skill-card/skill-card.component */ "fTIr");
/* harmony import */ var _components_info_card_info_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/info-card/info-card.component */ "kya/");







function SkillsComponent_app_skill_card_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-skill-card", 14);
} if (rf & 2) {
    const skill_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", skill_r11);
} }
function SkillsComponent_app_info_card_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-info-card", 14);
} if (rf & 2) {
    const certification_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", certification_r12);
} }
function SkillsComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 15);
} }
const _c0 = function (a0) { return { background: a0, "background-position": "center", "background-size": "cover" }; };
function SkillsComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, "url(" + element_r13["logo"] + ")"));
} }
function SkillsComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SkillsComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r14["name"]);
} }
function SkillsComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Organization");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SkillsComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r15["organization"], " ");
} }
function SkillsComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 19);
} }
function SkillsComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 20);
} }
function SkillsComponent_app_course_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-course", 21);
} if (rf & 2) {
    const course_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("course", course_r17);
} }
class SkillsComponent {
    constructor() {
        this.columns = ['logo', 'name', 'organization'];
        this.skills = src_assets_data__WEBPACK_IMPORTED_MODULE_1__["SKILLS"];
        this.certifications = src_assets_data__WEBPACK_IMPORTED_MODULE_1__["CERTIFICATIONS"];
        this.courses = src_assets_data__WEBPACK_IMPORTED_MODULE_1__["COURSES"];
        this.keysSkills = Object.keys(this.skills);
    }
    ngOnInit() {
    }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(); };
SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 27, vars: 6, consts: [[1, "category"], [1, "category-name"], [1, "category-items"], [3, "item", 4, "ngFor", "ngForOf"], ["mat-table", "", 1, "courses-table", 3, "dataSource"], ["matColumnDef", "logo"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-cell", "", "class", "name", 4, "matCellDef"], ["matColumnDef", "organization"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "course", 4, "ngFor", "ngForOf"], [3, "item"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "image-course", 3, "ngStyle"], ["mat-cell", "", 1, "name"], ["mat-header-row", ""], ["mat-row", ""], [3, "course"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SkillsComponent_th_16_Template, 1, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SkillsComponent_td_17_Template, 2, 3, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SkillsComponent_th_19_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SkillsComponent_td_20_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SkillsComponent_th_22_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SkillsComponent_td_23_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SkillsComponent_tr_24_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SkillsComponent_tr_25_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, SkillsComponent_app_course_26_Template, 1, 1, "app-course", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.certifications);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.courses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.courses);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _components_skill_card_skill_card_component__WEBPACK_IMPORTED_MODULE_4__["SkillCardComponent"], _components_info_card_info_card_component__WEBPACK_IMPORTED_MODULE_5__["InfoCardComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], styles: ["app-skills {\n  display: flex;\n  flex-flow: column;\n}\napp-skills .category {\n  margin: 10px;\n}\napp-skills .category .category-name {\n  font-weight: bold;\n  padding: 20px;\n  font-size: medium;\n  font-size: 1.5rem;\n  text-align: -webkit-center;\n}\napp-skills .category .category-items {\n  display: flex;\n  flex-flow: wrap;\n  justify-content: center;\n}\napp-skills .category .category-items .courses-table {\n  margin: 0 30px 30px 30px;\n  width: 100%;\n}\napp-skills .category .category-items .courses-table .image-course {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\napp-skills .category .category-items .courses-table .name {\n  font-weight: bold;\n}\napp-skills .category .category-items .courses-table th.mat-header-cell, app-skills .category .category-items .courses-table td.mat-cell, app-skills .category .category-items .courses-table td.mat-footer-cell {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQURGO0FBR0U7RUFDRSxZQUFBO0FBREo7QUFHSTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQUROO0FBSUk7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBRk47QUFJTTtFQUNFLHdCQUFBO0VBQ0EsV0FBQTtBQUZSO0FBSVE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBRlY7QUFLUTtFQUNFLGlCQUFBO0FBSFY7QUFNUTtFQUNFLGFBQUE7QUFKViIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NraWxscy9za2lsbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbmFwcC1za2lsbHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcblxyXG4gIC5jYXRlZ29yeSB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcblxyXG4gICAgLmNhdGVnb3J5LW5hbWUge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuY2F0ZWdvcnktaXRlbXMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWZsb3c6IHdyYXA7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgLmNvdXJzZXMtdGFibGUge1xyXG4gICAgICAgIG1hcmdpbjogMCAzMHB4IDMwcHggMzBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgLmltYWdlLWNvdXJzZSB7XHJcbiAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGgubWF0LWhlYWRlci1jZWxsLCB0ZC5tYXQtY2VsbCwgdGQubWF0LWZvb3Rlci1jZWxsIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59Il19 */"], encapsulation: 2 });
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
/*! exports provided: PROJECTS, SKILLS, CERTIFICATIONS, COURSES, EDUCATION, VOLUNTEER, AWARDS, PUBLICATIONS, EXPERIENCE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROJECTS", function() { return PROJECTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SKILLS", function() { return SKILLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CERTIFICATIONS", function() { return CERTIFICATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COURSES", function() { return COURSES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDUCATION", function() { return EDUCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOLUNTEER", function() { return VOLUNTEER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AWARDS", function() { return AWARDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PUBLICATIONS", function() { return PUBLICATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPERIENCE", function() { return EXPERIENCE; });
const PROJECTS = [
    {
        id: 1,
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
        name: 'Learning League - Hipo DevHack Hackathon',
        startDate: 'Nov 2020',
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
        name: 'UniversityRating',
        startDate: 'Jul 2018',
        endDate: 'Jul 2020',
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
        name: 'Exams Schedule',
        startDate: 'Apr 2020',
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
        logo: 'https://images.youracclaim.com/size/680x680/images/9f990990-c8bc-4c9a-8ceb-fb8dd68f8bea/front_end_dev.png',
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
    },
    {
        logo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQGxoHjf6gCmyQ/company-logo_200_200/0/1601991684673?e=1619049600&v=beta&t=ZDc7BD5euDuuUZaJHgPgoZxpUvn_Sh49rmRau3-pGbw',
        name: '"Live for the story" Canon Summer school',
        organization: 'Canon',
        issueDate: 'Jul 2018'
    },
    {
        logo: 'https://ecdl.ro/uploads/files/ECDL_SHORT_LOGO_WITH_REGISTRATION_RGB.jpg',
        name: 'ECDL Complete',
        organization: 'ECDL Romania',
        issueDate: 'May 2015'
    },
    {
        logo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQHiNSL4Or29cg/company-logo_200_200/0/1519856215226?e=1619049600&v=beta&t=wqGS0p4XpSRfUOSwlJ1_GDzkLcGNhFrMFdkps_mlOHc',
        name: 'Google Digital Garage',
        organization: 'Google'
    }
];
const COURSES = [
    {
        logo: 'https://media-exp1.licdn.com/dms/image/C4E0BAQGfKOtAsJ7gOQ/company-logo_200_200/0/1591028793640?e=1619654400&v=beta&t=A9VFnYMjQ0PrDh-LPlZRFvr21Bg_Xp6A0qFqjq0Va9Q',
        name: 'Artificial Intelligence Concepts',
        organization: 'IBM',
    },
    {
        name: 'DevAcademy Front End Track',
        organization: 'Digital Nation',
        logo: 'https://media-exp1.licdn.com/dms/image/C560BAQH-3eg_GcQLXQ/company-logo_200_200/0/1563458292520?e=2159024400&v=beta&t=ryfw6wzxS6a6-UmIRGcTa-Q1D0WahCtot-bNSmdDB1Y',
        startYear: 'Jun 2018',
        endYear: 'Dec 2018',
        description: 'I was part of the Frontend Track learing HTML, CSS, JavaScript, Vue.js, REST, Firebase Realtime Database. All the knowledge was applied in different exercises and projects.'
    },
    {
        name: 'Digital Marketing',
        organization: 'Google',
        logo: 'https://www.lucabottarostudio.com/wp-content/uploads/2019/05/google_PNG19635.png'
    },
    {
        name: 'IoT & Mobile Apps Workshop by Oracle Academy Romania',
        organization: 'Oracle',
        logo: 'https://sybyl.com/wp-content/uploads/2019/11/Oracle-Logo-For-Website.png'
    },
    {
        name: 'New Front-End Adventures Workshop with Vitaly Friedman',
        organization: 'Hipo',
        logo: 'https://sisc.ro/wp-content/uploads/2017/06/conf-dev-talks.jpg'
    },
    {
        name: 'Responsive Web Design Fundamentals by Google',
        organization: 'Google',
        logo: 'https://www.lucabottarostudio.com/wp-content/uploads/2019/05/google_PNG19635.png'
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
        logo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQHjuCqBJaQ94w/company-logo_200_200/0/1519912629039?e=1618444800&v=beta&t=0AXa7bstZ1nG0hQ5M4GW4L473FOdVXwejrE79X9XZBE',
        activities: 'Participation in scientific communication session with transportation optimisation in pl/sql and an article regarding security for client-server applications',
        description: 'I\'ve assimilated informations about IOT, mobile applications development, web technologies, AI, GDPR, PL/SQL, BigData, project management, WordPress, security of computer networks and E-Commerce. Those knowledges are proved by the projects worked for the graduation of the course.'
    },
    {
        school: 'Universitatea Româno-Americană din București',
        fieldOfStudy: 'Computer/Information Technology Administration and Management',
        degree: 'Licentiate degree',
        startYear: '2015',
        endYear: '2018',
        grade: '9.50',
        logo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQHjuCqBJaQ94w/company-logo_200_200/0/1519912629039?e=1618444800&v=beta&t=0AXa7bstZ1nG0hQ5M4GW4L473FOdVXwejrE79X9XZBE',
        activities: 'Participation in scientific communication session with micro and macro economy, management and digital marketing',
        description: 'The knowledge is supported by practical projects to prove a good assimilation of basic information. These are both economics, such as management, economics, statistics, accounting, office, marketing, econometrics and programming in various languages such as C ++, C # (Console and Windows Forms), Access databases, SQL, HTML, PHP.'
    },
    {
        school: 'Theoretical High School Nichita Stanescu',
        degree: 'High school',
        fieldOfStudy: 'Mathematical Informatics',
        startYear: '2011',
        endYear: '2015',
        grade: '',
        logo: 'https://www.admitereliceu.ro/uploads/school/9/6/32/300x200/0_53_sigla.jpg',
        activities: '',
        description: 'Acquiring logical and organizational thinking.'
    }
];
const VOLUNTEER = [
    {
        startYear: 'Aug 2014',
        endYear: 'Nov 2014',
        description: 'Theater project with the stage of frequent social situations for finding solutions',
        role: 'Role Player',
        organization: 'ArtFusion',
        logo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQE0R_odMk40zQ/company-logo_200_200/0/1583400910416?e=1619049600&v=beta&t=FrnDEuYXI-gv_NLAZr7e2xMe2vrazFjnUsY0HhPQu2Y'
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
      Our result should allows candidates from Romania the possibility to offer reviews/ratings to companies about key areas such as:<br>
        - recruitment process;<br>
        - work environment (team, schedule, etc);<br>
        - trainings, learning and development opportunities;<br>
        - salary & benefits;<br>
        - work-life balance;<br>
        - management;<br>
        - internal systems (procedures, values, way of working);<br>
        - other relevant areas;<br>
        The aim of this product is to help candidates find the employer that best suits their needs and personality, something different.<br>
        The target audience of the product will be made up students and young professionals.
      `
    },
    {
        name: 'IE Robot Contest',
        place: 4,
        date: 'May 2014',
        description: 'Edition V-organized in Electrical Engineering Days 2014 in Politehnica University.'
    }
];
const PUBLICATIONS = [
    {
        name: 'How I personalized my GitHub Overview',
        date: 'Jan 2021',
        description: '',
        url: 'https://madalinaeleonorag.medium.com/how-i-personalized-my-github-overview-7144fd15d1e1',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Medium_logo_Monogram.svg/1200px-Medium_logo_Monogram.svg.png',
        organization: 'Medium'
    },
    {
        name: 'My JavaScriptmas Journey 🎄',
        date: 'Dec 2020',
        description: '',
        url: 'https://madalinaeleonorag.medium.com/my-javascriptmas-journey-69a29ea5845a',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Medium_logo_Monogram.svg/1200px-Medium_logo_Monogram.svg.png',
        organization: 'Medium'
    },
    {
        name: 'Providing Security for Client-Server Applications',
        date: '2019',
        description: '',
        url: 'https://df38f438-aa8a-4f56-925f-3f56c5f61c2a.filesusr.com/ugd/b8ce10_e3835a03a0664499927aafdd75540127.pdf',
        logo: 'https://image.isu.pub/170105105000-13074954e5ffd8949525023c1f6c49c3/jpg/page_1.jpg',
        organization: 'Research Focus'
    },
    {
        name: 'Dreptul la timp',
        date: 'Jan 11, 2013',
        description: 'Publishing poems in high school magazine',
        url: '',
        logo: 'https://www.admitereliceu.ro/uploads/school/9/6/32/300x200/0_53_sigla.jpg',
        organization: 'Liceul Teoretic Nichita Stanescu'
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
        companyLogo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQEEhxqhOHJVUA/company-logo_200_200/0/1525123751467?e=1618444800&v=beta&t=tAnznEreYDswd0JJE-g8HdvJrCVhwAN_WvxGdBxS1aQ',
        skill: ['Angular', 'Ionic', 'Sass', 'TypeScript', 'REST', 'Capacitor', 'RxJs', 'React.js', 'Adobe Experience Manager', 'VirtualBox', 'Jira'],
    },
    {
        companyName: 'OTP Bank',
        role: 'Project - Referent',
        dateStart: 'Nov 2017',
        dateEnd: 'Dec 2017',
        location: 'Bucharest, Romania',
        description: 'The main responsibility was the selection of the clients that were in line with the requirements for digitization of bank transfers, within the project Digital Ambassador',
        companyLogo: 'https://media-exp1.licdn.com/dms/image/C4E0BAQHp7dhOc8uDUQ/company-logo_200_200/0/1600108531146?e=1618444800&v=beta&t=ICwjhVXsA3S4IQ6u-U-jBYkjPDzTjcipb8bxqPC_F7s',
        skill: []
    },
    {
        companyName: 'Groupe Renault',
        role: 'Practicant - Drive your future',
        dateStart: 'Jun 2017',
        dateEnd: 'Sept 2017',
        location: 'Bucharest, Romania',
        description: 'Database maintenance using my own Matlab scripts',
        companyLogo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQEuvhNwiJCyZw/company-logo_200_200/0/1610449180280?e=1618444800&v=beta&t=UVG0Xg3Ie6rz4MW6Pm6J3Ta5btoCsTrZk50YTHJZhkU',
        skill: ['Matlab']
    },
    {
        companyName: 'DB Schenker',
        role: 'Practitioner - Financial accountant',
        dateStart: 'May 2017',
        dateEnd: 'Jun 2017',
        location: 'Bucharest, Romania',
        description: 'Specialized practice in financial accounting',
        companyLogo: 'https://media-exp1.licdn.com/dms/image/C560BAQE2argdPgynxQ/company-logo_200_200/0/1603714685129?e=1618444800&v=beta&t=fT9L8bRpvfbTyfjCOEMd3LfuvVC5cETSRX7gK53SBIA',
        skill: ['SAP', 'Basic accountancy ']
    },
    {
        companyName: 'Telekom Romania',
        role: 'Inbound Agent',
        dateStart: 'Feb 2016',
        dateEnd: 'Jun 2017',
        location: 'Bucharest, Romania',
        description: 'Taking calls and solving the situations encountered by clients, making recordings and offering them.',
        companyLogo: 'https://media-exp1.licdn.com/dms/image/C4E0BAQHhi7yDzxguBQ/company-logo_200_200/0/1591696739930?e=1618444800&v=beta&t=6JQBq6aZFNdS8-GIPsmGPpE21aNsss4ycZuNFQk--4M',
        skill: ['Work under pressure', 'Adaptability', 'Multitasking']
    },
    {
        companyName: 'Springtime',
        role: 'Cashier and Comercial Worker',
        dateStart: 'Aug 2015',
        dateEnd: 'Dec 2015',
        location: 'Bucharest, Romania',
        description: 'Making orders as quickly and accurately, respecting customer requirements',
        companyLogo: 'https://www.springtime.ro/workspace/img/Logo-Site.png',
        skill: ['Meeting customer expectations', 'Multitasking', 'Work under pressure']
    },
    {
        companyName: 'Kantar Millward Brown Romania',
        role: 'Survey Operator',
        dateStart: 'May 2015',
        dateEnd: 'Aug 2015',
        location: 'Bucharest, Romania',
        description: 'Recruitment of people meeting the criteria communicated',
        companyLogo: 'https://media-exp1.licdn.com/dms/image/C560BAQETvYin9MN05w/company-logo_200_200/0/1579084333483?e=1618444800&v=beta&t=L_ANBm4wO7v6WoW5D3vNvoDP_jm-7Za0bWdgcbr2q18',
        skill: ['Persuasivity']
    }
];


/***/ }),

/***/ "7ntx":
/*!*************************************************************!*\
  !*** ./src/app/components/volunteer/volunteer.component.ts ***!
  \*************************************************************/
/*! exports provided: VolunteerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolunteerComponent", function() { return VolunteerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");



function VolunteerComponent_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 8);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.volunteer.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class VolunteerComponent {
    constructor() { }
    ngOnInit() {
    }
}
VolunteerComponent.ɵfac = function VolunteerComponent_Factory(t) { return new (t || VolunteerComponent)(); };
VolunteerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VolunteerComponent, selectors: [["app-volunteer"]], inputs: { volunteer: "volunteer" }, decls: 11, vars: 6, consts: [[1, "header"], [1, "image"], [3, "src", 4, "ngIf"], [1, "summary"], [1, "organization"], [1, "role"], [1, "date"], [1, "description", 3, "innerHTML"], [3, "src"]], template: function VolunteerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VolunteerComponent_img_2_Template, 1, 1, "img", 2);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.volunteer.logo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.volunteer.organization);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.volunteer.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.volunteer.startYear, " - ", ctx.volunteer.endYear, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.volunteer.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["app-volunteer .header {\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  padding: 20px 20px 10px 20px;\n}\napp-volunteer .header .image {\n  padding-right: 20px;\n}\napp-volunteer .header .image img {\n  max-width: 150px;\n  height: auto;\n}\napp-volunteer .header .summary {\n  display: flex;\n  flex-flow: column;\n}\napp-volunteer .header .summary .organization {\n  font-weight: bold;\n  color: #3A3B3C;\n}\napp-volunteer .header .summary .role {\n  font-weight: bold;\n  font-size: 1.2rem;\n  color: #a50c0c;\n  margin: 4px 0;\n}\napp-volunteer .header .summary .date {\n  font-weight: normal;\n}\napp-volunteer .description {\n  padding: 0 20px 20px;\n  line-height: 1.5rem;\n}\n@media (max-width: 750px) {\n  app-volunteer .header {\n    flex-flow: wrap;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92b2x1bnRlZXIvdm9sdW50ZWVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtBQUZKO0FBSUk7RUFDRSxtQkFBQTtBQUZOO0FBSU07RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUFGUjtBQUtJO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FBSE47QUFLTTtFQUNFLGlCQUFBO0VBQ0EsY0N0QkQ7QURtQlA7QUFLTTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQ3ZCQTtFRHdCQSxhQUFBO0FBSFI7QUFLTTtFQUNFLG1CQUFBO0FBSFI7QUFRRTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7QUFOSjtBQVNFO0VBQ0U7SUFDRSxlQUFBO0VBUEo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdm9sdW50ZWVyL3ZvbHVudGVlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuYXBwLXZvbHVudGVlciB7XHJcbiAgLmhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMjBweCAyMHB4IDEwcHggMjBweDtcclxuXHJcbiAgICAuaW1hZ2Uge1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnN1bW1hcnkge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuXHJcbiAgICAgIC5vcmdhbml6YXRpb24ge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiAkZ3JheTtcclxuICAgICAgfVxyXG4gICAgICAucm9sZSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgY29sb3I6ICRib3JkbztcclxuICAgICAgICBtYXJnaW46IDRweCAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5kYXRlIHtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZGVzY3JpcHRpb24ge1xyXG4gICAgcGFkZGluZzogMCAyMHB4IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgZmxleC1mbG93OiB3cmFwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIkYmxhY2s6ICMxODE5MUE7XHJcbiRncmF5OiAjM0EzQjNDO1xyXG4kbGlnaHRncmF5OiAjOGI4YjhiO1xyXG4kYmFja2dyb3VuZDogI0Y4RjhGRjtcclxuJHdoaXRlOiAjRkZGRkZGO1xyXG4kYm9yZG86ICNhNTBjMGM7XHJcbiRib3Jkb29wYWNpdHk6ICNhNTBjMGMyYjsiXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VolunteerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-volunteer',
                templateUrl: './volunteer.component.html',
                styleUrls: ['./volunteer.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, { volunteer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 7);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, "url(" + ctx_r0.publication.logo + ")"));
} }
function PublicationsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.publication.organization, " ");
} }
function PublicationsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.publication.date);
} }
function PublicationsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "See publication");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r3.publication.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class PublicationsComponent {
    constructor() { }
    ngOnInit() {
    }
}
PublicationsComponent.ɵfac = function PublicationsComponent_Factory(t) { return new (t || PublicationsComponent)(); };
PublicationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PublicationsComponent, selectors: [["app-publications"]], inputs: { publication: "publication" }, decls: 8, vars: 5, consts: [[1, "publication-wrapper"], ["class", "image", 3, "ngStyle", 4, "ngIf"], [1, "summary"], ["class", "organization", 4, "ngIf"], [1, "name"], ["class", "date", 4, "ngIf"], ["class", "grade", 4, "ngIf"], [1, "image", 3, "ngStyle"], [1, "organization"], [1, "date"], [1, "grade"], ["target", "_blank", 3, "href"]], template: function PublicationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PublicationsComponent_div_1_Template, 1, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PublicationsComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PublicationsComponent_div_6_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PublicationsComponent_div_7_Template, 3, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.publication.logo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.publication.organization);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.publication.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.publication.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.publication.url);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: ["app-publications .publication-wrapper {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  padding: 20px;\n  text-align: center;\n}\napp-publications .publication-wrapper .image {\n  height: 150px;\n  width: 150px;\n}\napp-publications .publication-wrapper .summary {\n  display: flex;\n  padding-top: 10px;\n  flex-flow: column;\n}\napp-publications .publication-wrapper .summary .organization {\n  font-weight: bold;\n  color: #3A3B3C;\n}\napp-publications .publication-wrapper .summary .name {\n  font-weight: bold;\n  font-size: 1.2rem;\n  color: #a50c0c;\n  padding: 10px 0;\n}\napp-publications .publication-wrapper .summary .date {\n  font-weight: bold;\n  color: #8b8b8b;\n  padding-bottom: 5px;\n}\n.description {\n  padding: 0 20px 20px;\n  line-height: 1.5rem;\n}\n@media (max-width: 750px) {\n  .header {\n    flex-flow: wrap;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wdWJsaWNhdGlvbnMvcHVibGljYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBREY7QUFHRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBREo7QUFJRTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBRko7QUFJSTtFQUNFLGlCQUFBO0VBQ0EsY0NwQkM7QURrQlA7QUFJSTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQ3JCRTtFRHNCRixlQUFBO0FBRk47QUFJSTtFQUNFLGlCQUFBO0VBQ0EsY0M3Qk07RUQ4Qk4sbUJBQUE7QUFGTjtBQU9BO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtBQUpGO0FBT0E7RUFDRTtJQUNFLGVBQUE7RUFKRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wdWJsaWNhdGlvbnMvcHVibGljYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG5hcHAtcHVibGljYXRpb25zIC5wdWJsaWNhdGlvbi13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIC5pbWFnZSB7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gIH1cclxuXHJcbiAgLnN1bW1hcnkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcblxyXG4gICAgLm9yZ2FuaXphdGlvbiB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBjb2xvcjogJGdyYXk7XHJcbiAgICB9XHJcbiAgICAubmFtZSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgY29sb3I6ICRib3JkbztcclxuICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgfVxyXG4gICAgLmRhdGUge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgY29sb3I6ICRsaWdodGdyYXk7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZGVzY3JpcHRpb24ge1xyXG4gIHBhZGRpbmc6IDAgMjBweCAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xyXG4gIC5oZWFkZXIge1xyXG4gICAgZmxleC1mbG93OiB3cmFwO1xyXG4gIH1cclxufVxyXG4iLCIkYmxhY2s6ICMxODE5MUE7XHJcbiRncmF5OiAjM0EzQjNDO1xyXG4kbGlnaHRncmF5OiAjOGI4YjhiO1xyXG4kYmFja2dyb3VuZDogI0Y4RjhGRjtcclxuJHdoaXRlOiAjRkZGRkZGO1xyXG4kYm9yZG86ICNhNTBjMGM7XHJcbiRib3Jkb29wYWNpdHk6ICNhNTBjMGMyYjsiXX0= */"], encapsulation: 2 });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomSvgComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomSvgComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CustomSvgComponent {
    constructor() { }
    ngOnInit() {
    }
}
CustomSvgComponent.ɵfac = function CustomSvgComponent_Factory(t) { return new (t || CustomSvgComponent)(); };
CustomSvgComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomSvgComponent, selectors: [["app-custom-svg"]], inputs: { type: "type" }, decls: 7, vars: 7, consts: [[4, "ngIf"], ["width", "25", "height", "25", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "52 42 88 66", 1, "icon"], ["d", "M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6"], ["d", "M120 108h14c3.32 0 6-2.69 6-6V59l-20 15"], ["d", "M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"], ["d", "M72 74V48l24 18 24-18v26L96 92"], ["d", "M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"], ["width", "25", "height", "25", "xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", 1, "icon"], ["d", "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"], ["width", "25", "height", "25", "xmlns", "http://www.w3.org/2000/svg", "fill-rule", "evenodd", "clip-rule", "evenodd", 1, "icon"], ["d", "M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z"], ["xmlns", "http://www.w3.org/2000/svg", "width", "25", "height", "25", "viewBox", "0 0 24 24", 1, "icon"], ["width", "25", "height", "25", "d", "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z", 1, "icon"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", 1, "icon"], ["d", "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"], ["width", "24", "height", "24", "xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", 1, "icon"], ["d", "M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"], ["d", "M22 9.761c0 .536-.065 1.084-.169 1.627-.847 4.419-3.746 5.946-7.449 5.946h-.572c-.453 0-.838.334-.908.789l-.803 5.09c-.071.453-.456.787-.908.787h-2.736c-.39 0-.688-.348-.628-.732l1.386-8.88.062-.056h2.155c5.235 0 8.509-2.618 9.473-7.568.812.814 1.097 1.876 1.097 2.997zm-14.216 4.252c.116-.826.459-1.177 1.385-1.179l2.26-.002c4.574 0 7.198-2.09 8.023-6.39.8-4.134-2.102-6.442-6.031-6.442h-7.344c-.517 0-.958.382-1.038.901-2.304 14.835-2.97 18.607-3.038 19.758-.021.362.269.672.635.672h3.989l1.159-7.318z"]], template: function CustomSvgComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CustomSvgComponent_div_0_Template, 7, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomSvgComponent_div_1_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomSvgComponent_div_2_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CustomSvgComponent_div_3_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CustomSvgComponent_div_4_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CustomSvgComponent_div_5_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CustomSvgComponent_div_6_Template, 3, 0, "div", 0);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["app-custom-svg .icon {\n  fill: #FFFFFF;\n  width: 25px;\n  height: 25px;\n}\napp-custom-svg .icon:hover {\n  fill: #a50c0c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdXN0b20tc3ZnL2N1c3RvbS1zdmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRko7QUFLRTtFQUNFLGFDTEk7QURFUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VzdG9tLXN2Zy9jdXN0b20tc3ZnLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG5hcHAtY3VzdG9tLXN2ZyB7XHJcbiAgLmljb24ge1xyXG4gICAgZmlsbDogJHdoaXRlO1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgfVxyXG5cclxuICAuaWNvbjpob3ZlciB7XHJcbiAgICBmaWxsOiAkYm9yZG87XHJcbiAgfVxyXG59XHJcbiIsIiRibGFjazogIzE4MTkxQTtcclxuJGdyYXk6ICMzQTNCM0M7XHJcbiRsaWdodGdyYXk6ICM4YjhiOGI7XHJcbiRiYWNrZ3JvdW5kOiAjRjhGOEZGO1xyXG4kd2hpdGU6ICNGRkZGRkY7XHJcbiRib3JkbzogI2E1MGMwYztcclxuJGJvcmRvb3BhY2l0eTogI2E1MGMwYzJiOyJdfQ== */"], encapsulation: 2 });
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






function ProjectCardComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" - ", ctx_r0.project.endDate, "");
} }
function ProjectCardComponent_div_9_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const technology_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", technology_r5, "");
} }
function ProjectCardComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectCardComponent_div_9_span_1_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.project.technologies);
} }
function ProjectCardComponent_app_custom_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-custom-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectCardComponent_app_custom_button_11_Template_app_custom_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.openNewTab("code"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isFilledButton", false);
} }
function ProjectCardComponent_app_custom_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-custom-button", 9);
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
ProjectCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectCardComponent, selectors: [["app-project-card"]], inputs: { project: "project" }, decls: 14, vars: 10, consts: [[1, "image", 3, "ngStyle"], [4, "ngIf"], ["class", "technologies", 4, "ngIf"], ["buttonText", "</Code>", 3, "isFilledButton", "click", 4, "ngIf"], ["buttonText", "Demo", 3, "isFilledButton", "click", 4, "ngIf"], ["buttonText", "See details", 3, "isFilledButton", "click"], [1, "technologies"], [4, "ngFor", "ngForOf"], ["buttonText", "</Code>", 3, "isFilledButton", "click"], ["buttonText", "Demo", 3, "isFilledButton", "click"]], template: function ProjectCardComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardActions"], _custom_button_custom_button_component__WEBPACK_IMPORTED_MODULE_4__["CustomButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["app-project-card {\n  flex: 0 0 20%;\n  margin: 15px;\n  display: flex;\n}\napp-project-card .mat-card {\n  box-shadow: 0px 0px 3px -1px #8b8b8b !important;\n  display: flex;\n  flex-direction: column;\n  height: -webkit-fill-available;\n  width: 100%;\n  border-radius: unset;\n  padding: unset;\n}\napp-project-card .mat-card-actions {\n  margin: 0 !important;\n}\napp-project-card .image {\n  height: 25vh;\n  background-size: cover;\n  background-position: center;\n}\napp-project-card .technologies {\n  display: flex;\n  flex-flow: wrap;\n  justify-content: center;\n}\napp-project-card .technologies span {\n  color: #a50c0c2b;\n  padding: 3px;\n}\napp-project-card .mat-card:hover .technologies span {\n  color: #a50c0c;\n}\napp-project-card .mat-card-content {\n  margin-top: auto;\n}\napp-project-card .mat-card-actions {\n  display: flex;\n  justify-content: space-between;\n}\napp-project-card .mat-card-header-text {\n  text-align: -webkit-center;\n}\napp-project-card .mat-card-header {\n  place-content: center;\n}\napp-project-card .mat-card-header .mat-card-title {\n  padding: 12px 0;\n  margin: 0;\n}\n@media (max-width: 900px) {\n  app-project-card {\n    flex: 0 0 40%;\n  }\n}\n@media (max-width: 500px) {\n  app-project-card {\n    flex: 0 0 80%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0LWNhcmQvcHJvamVjdC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQURGO0FBR0U7RUFDRSwrQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQURKO0FBSUU7RUFDRSxvQkFBQTtBQUZKO0FBS0U7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQUhKO0FBTUU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBSko7QUFNSTtFQUNFLGdCQzNCUztFRDRCVCxZQUFBO0FBSk47QUFVTTtFQUNFLGNDcENBO0FENEJSO0FBYUU7RUFDRSxnQkFBQTtBQVhKO0FBY0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFaSjtBQWVFO0VBQ0UsMEJBQUE7QUFiSjtBQWdCRTtFQUNFLHFCQUFBO0FBZEo7QUFpQkU7RUFDRSxlQUFBO0VBQ0EsU0FBQTtBQWZKO0FBbUJBO0VBQ0U7SUFDRSxhQUFBO0VBaEJGO0FBQ0Y7QUFtQkE7RUFDRTtJQUNFLGFBQUE7RUFqQkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC1jYXJkL3Byb2plY3QtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuYXBwLXByb2plY3QtY2FyZCB7XHJcbiAgZmxleDogMCAwIDIwJTtcclxuICBtYXJnaW46IDE1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgLm1hdC1jYXJkIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IC0xcHggJGxpZ2h0Z3JheSAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IHVuc2V0O1xyXG4gICAgcGFkZGluZzogdW5zZXQ7XHJcbiAgfVxyXG5cclxuICAubWF0LWNhcmQtYWN0aW9ucyB7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pbWFnZSB7XHJcbiAgICBoZWlnaHQ6IDI1dmg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnRlY2hub2xvZ2llcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgIGNvbG9yOiAkYm9yZG9vcGFjaXR5O1xyXG4gICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWF0LWNhcmQ6aG92ZXIge1xyXG4gICAgLnRlY2hub2xvZ2llcyB7XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGNvbG9yOiAkYm9yZG87XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tYXQtY2FyZC1jb250ZW50IHtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgfVxyXG5cclxuICAubWF0LWNhcmQtYWN0aW9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1jYXJkLWhlYWRlci10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1jYXJkLWhlYWRlciB7XHJcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC10aXRsZSB7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICBhcHAtcHJvamVjdC1jYXJkIHtcclxuICAgIGZsZXg6IDAgMCA0MCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICBhcHAtcHJvamVjdC1jYXJkIHtcclxuICAgIGZsZXg6IDAgMCA4MCU7XHJcbiAgfVxyXG59XHJcbiIsIiRibGFjazogIzE4MTkxQTtcclxuJGdyYXk6ICMzQTNCM0M7XHJcbiRsaWdodGdyYXk6ICM4YjhiOGI7XHJcbiRiYWNrZ3JvdW5kOiAjRjhGOEZGO1xyXG4kd2hpdGU6ICNGRkZGRkY7XHJcbiRib3JkbzogI2E1MGMwYztcclxuJGJvcmRvb3BhY2l0eTogI2E1MGMwYzJiOyJdfQ== */"], encapsulation: 2 });
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");



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
AwardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AwardsComponent, selectors: [["app-awards"]], inputs: { award: "award" }, decls: 8, vars: 4, consts: [[1, "award-wrapper"], [1, "header"], [1, "summary"], [3, "src"], [1, "name"], ["class", "date", 4, "ngIf"], ["class", "description", 3, "innerHTML", 4, "ngIf"], [1, "date"], [1, "description", 3, "innerHTML"]], template: function AwardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/prizes/" + ctx.place + ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.award.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.award.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.award.description);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["app-awards .award-wrapper {\n  padding: 30px;\n}\napp-awards .award-wrapper .header {\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  padding-bottom: 20px;\n  justify-content: center;\n  text-align: center;\n}\napp-awards .award-wrapper .header .summary {\n  display: flex;\n  flex-flow: column;\n}\napp-awards .award-wrapper .header .summary img {\n  height: 15vh;\n}\napp-awards .award-wrapper .header .summary .name {\n  font-weight: bold;\n  font-size: 1.5rem;\n  color: #a50c0c;\n  margin: 10px 0;\n}\napp-awards .award-wrapper .header .summary .date {\n  font-weight: bold;\n  color: #8b8b8b;\n}\napp-awards .award-wrapper .description {\n  line-height: 1.5rem;\n  padding: 0 15vw;\n}\n@media (max-width: 750px) {\n  app-awards .award-wrapper .header {\n    flex-flow: wrap;\n  }\n  app-awards .award-wrapper .description {\n    padding: 0 5vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hd2FyZHMvYXdhcmRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7QUFERjtBQUdFO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQURKO0FBR0k7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUFETjtBQUdNO0VBQ0UsWUFBQTtBQURSO0FBSU07RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0NuQkE7RURvQkEsY0FBQTtBQUZSO0FBS007RUFDRSxpQkFBQTtFQUNBLGNDNUJJO0FEeUJaO0FBUUU7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUFOSjtBQVNFO0VBQ0U7SUFDRSxlQUFBO0VBUEo7RUFTRTtJQUNFLGNBQUE7RUFQSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hd2FyZHMvYXdhcmRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG5hcHAtYXdhcmRzIC5hd2FyZC13cmFwcGVyIHtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG5cclxuICAuaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIC5zdW1tYXJ5IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIGhlaWdodDogMTV2aDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm5hbWUge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIGNvbG9yOiAkYm9yZG87XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kYXRlIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogJGxpZ2h0Z3JheTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmRlc2NyaXB0aW9uIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XHJcbiAgICBwYWRkaW5nOiAwIDE1dnc7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcclxuICAgIC5oZWFkZXIge1xyXG4gICAgICBmbGV4LWZsb3c6IHdyYXA7XHJcbiAgICB9XHJcbiAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICBwYWRkaW5nOiAwIDV2dztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiJGJsYWNrOiAjMTgxOTFBO1xyXG4kZ3JheTogIzNBM0IzQztcclxuJGxpZ2h0Z3JheTogIzhiOGI4YjtcclxuJGJhY2tncm91bmQ6ICNGOEY4RkY7XHJcbiR3aGl0ZTogI0ZGRkZGRjtcclxuJGJvcmRvOiAjYTUwYzBjO1xyXG4kYm9yZG9vcGFjaXR5OiAjYTUwYzBjMmI7Il19 */"], encapsulation: 2 });
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
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");




class AppComponent {
    constructor() {
        this.title = 'Project';
    }
    ngOnInit() {
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
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "body"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/chips */ "f44v");
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
function ProjectDetailsComponent_mat_chip_list_8_mat_chip_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const technology_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](technology_r5);
} }
function ProjectDetailsComponent_mat_chip_list_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip-list", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectDetailsComponent_mat_chip_list_8_mat_chip_1_Template, 2, 1, "mat-chip", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.project.technologies);
} }
function ProjectDetailsComponent_app_custom_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-custom-button", 13);
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
ProjectDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectDetailsComponent, selectors: [["app-project-details"]], decls: 12, vars: 16, consts: [[1, "image", 3, "ngStyle"], [1, "summary"], [1, "name"], ["target", "_blank", 3, "href", 4, "ngIf"], [1, "date"], [4, "ngIf"], ["class", "technologies", 4, "ngIf"], ["buttonText", "See live", 3, "isFilledButton", "click", 4, "ngIf"], [1, "description", 3, "innerHTML"], [3, "id", "modalImages", "slideConfig"], ["target", "_blank", 3, "href"], [1, "technologies"], [4, "ngFor", "ngForOf"], ["buttonText", "See live", 3, "isFilledButton", "click"]], template: function ProjectDetailsComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProjectDetailsComponent_mat_chip_list_8_Template, 2, 1, "mat-chip-list", 6);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["ɵd"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChip"], _components_custom_button_custom_button_component__WEBPACK_IMPORTED_MODULE_6__["CustomButtonComponent"]], styles: ["app-project-details {\n  display: flex;\n  flex-flow: column;\n}\napp-project-details .image {\n  height: 50vh;\n  background-size: cover;\n  background-position: center;\n}\napp-project-details .summary {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  margin: 15px 10%;\n}\napp-project-details .summary .name {\n  font-weight: bold;\n  font-size: 1.2rem;\n  color: #a50c0c;\n  margin: 4px 0;\n}\napp-project-details .summary .date {\n  padding-top: 5px;\n  color: #8b8b8b;\n  font-weight: normal;\n}\napp-project-details .summary .technologies {\n  display: flex;\n}\napp-project-details .summary .technologies .mat-chip-list-wrapper {\n  justify-content: center;\n}\napp-project-details .description {\n  margin: 10px 40px 30px;\n  padding: 10px;\n  line-height: 1.5rem;\n}\napp-project-details .plain-container {\n  justify-content: center !important;\n  margin: 20px 40px 40px;\n  display: flex !important;\n  flex-flow: wrap;\n}\napp-project-details .plain-container .image {\n  margin: 5px !important;\n  height: 200px !important;\n  width: auto !important;\n  box-shadow: 0 0 10px -3px #8b8b8b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvamVjdC1kZXRhaWxzL3Byb2plY3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUFERjtBQUdFO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUFESjtBQUlFO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUZKO0FBSUk7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFGTjtBQUlJO0VBQ0UsZ0JBQUE7RUFDQSxjQ3hCTTtFRHlCTixtQkFBQTtBQUZOO0FBS0k7RUFDRSxhQUFBO0FBSE47QUFLTTtFQUNFLHVCQUFBO0FBSFI7QUFRRTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBTko7QUFTRTtFQUNFLGtDQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7QUFQSjtBQVNJO0VBQ0Usc0JBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7QUFQTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2plY3QtZGV0YWlscy9wcm9qZWN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbmFwcC1wcm9qZWN0LWRldGFpbHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcblxyXG4gIC5pbWFnZSB7XHJcbiAgICBoZWlnaHQ6IDUwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnN1bW1hcnkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTVweCAxMCU7XHJcblxyXG4gICAgLm5hbWUge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgIGNvbG9yOiAjYTUwYzBjO1xyXG4gICAgICBtYXJnaW46IDRweCAwO1xyXG4gICAgfVxyXG4gICAgLmRhdGUge1xyXG4gICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICBjb2xvcjogJGxpZ2h0Z3JheTtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIH1cclxuXHJcbiAgICAudGVjaG5vbG9naWVzIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgIC5tYXQtY2hpcC1saXN0LXdyYXBwZXIge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZGVzY3JpcHRpb24ge1xyXG4gICAgbWFyZ2luOiAxMHB4IDQwcHggMzBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgLnBsYWluLWNvbnRhaW5lciB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAyMHB4IDQwcHggNDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIGZsZXgtZmxvdzogd3JhcDtcclxuXHJcbiAgICAuaW1hZ2Uge1xyXG4gICAgICBtYXJnaW46IDVweCAhaW1wb3J0YW50O1xyXG4gICAgICBoZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IC0zcHggJGxpZ2h0Z3JheTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiJGJsYWNrOiAjMTgxOTFBO1xyXG4kZ3JheTogIzNBM0IzQztcclxuJGxpZ2h0Z3JheTogIzhiOGI4YjtcclxuJGJhY2tncm91bmQ6ICNGOEY4RkY7XHJcbiR3aGl0ZTogI0ZGRkZGRjtcclxuJGJvcmRvOiAjYTUwYzBjO1xyXG4kYm9yZG9vcGFjaXR5OiAjYTUwYzBjMmI7Il19 */"], encapsulation: 2 });
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
    } }, directives: [_components_custom_svg_custom_svg_component__WEBPACK_IMPORTED_MODULE_1__["CustomSvgComponent"]], styles: ["app-contact {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  margin: 20px;\n}\napp-contact .text {\n  color: #3A3B3C;\n  padding: 10px 0;\n  font-weight: bold;\n}\napp-contact .info-text {\n  color: #a50c0c;\n  padding: 10px 0px;\n  font-weight: bold;\n  font-size: x-large;\n}\napp-contact .copyright {\n  color: #3A3B3C;\n  padding: 10px 0px;\n  font-size: small;\n}\napp-contact .copyright:hover {\n  color: #a50c0c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQURGO0FBR0U7RUFDRSxjQ1JHO0VEU0gsZUFBQTtFQUNBLGlCQUFBO0FBREo7QUFJRTtFQUNFLGNDVkk7RURXSixpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFGSjtBQUtFO0VBQ0UsY0NyQkc7RURzQkgsaUJBQUE7RUFDQSxnQkFBQTtBQUhKO0FBTUU7RUFDRSxjQ3ZCSTtBRG1CUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuYXBwLWNvbnRhY3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDIwcHg7XHJcblxyXG4gIC50ZXh0IHtcclxuICAgIGNvbG9yOiAkZ3JheTtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgLmluZm8tdGV4dCB7XHJcbiAgICBjb2xvcjogJGJvcmRvO1xyXG4gICAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICB9XHJcblxyXG4gIC5jb3B5cmlnaHQge1xyXG4gICAgY29sb3I6ICRncmF5O1xyXG4gICAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gIH1cclxuXHJcbiAgLmNvcHlyaWdodDpob3ZlciB7XHJcbiAgICBjb2xvcjogJGJvcmRvO1xyXG4gIH1cclxufVxyXG4iLCIkYmxhY2s6ICMxODE5MUE7XHJcbiRncmF5OiAjM0EzQjNDO1xyXG4kbGlnaHRncmF5OiAjOGI4YjhiO1xyXG4kYmFja2dyb3VuZDogI0Y4RjhGRjtcclxuJHdoaXRlOiAjRkZGRkZGO1xyXG4kYm9yZG86ICNhNTBjMGM7XHJcbiRib3Jkb29wYWNpdHk6ICNhNTBjMGMyYjsiXX0= */"], encapsulation: 2 });
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
/* harmony import */ var _components_volunteer_volunteer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/volunteer/volunteer.component */ "7ntx");
/* harmony import */ var _components_awards_awards_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/awards/awards.component */ "QrEi");
/* harmony import */ var _components_publications_publications_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/publications/publications.component */ "BBdW");
/* harmony import */ var _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/projects/projects.component */ "u/sh");
/* harmony import */ var _components_project_card_project_card_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/project-card/project-card.component */ "M0Pn");
/* harmony import */ var _pages_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/project-details/project-details.component */ "X1wX");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! angular-responsive-carousel */ "0L5U");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/menu */ "rJgo");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "v2M4");
/* harmony import */ var _components_skill_card_skill_card_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/skill-card/skill-card.component */ "fTIr");
/* harmony import */ var _components_info_card_info_card_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/info-card/info-card.component */ "kya/");
/* harmony import */ var _components_custom_button_custom_button_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/custom-button/custom-button.component */ "bGnb");
/* harmony import */ var _components_custom_svg_custom_svg_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/custom-svg/custom-svg.component */ "HoFA");
/* harmony import */ var _components_custom_category_chip_custom_category_chip_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/custom-category-chip/custom-category-chip.component */ "zPib");


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
            _angular_forms__WEBPACK_IMPORTED_MODULE_29__["ReactiveFormsModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
            _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_11__["GalleryModule"].forRoot(),
            angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_30__["IvyCarouselModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpClientModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__["MatMenuModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"]
        ], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__["MatMenuModule"],
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
        _components_volunteer_volunteer_component__WEBPACK_IMPORTED_MODULE_23__["VolunteerComponent"],
        _components_awards_awards_component__WEBPACK_IMPORTED_MODULE_24__["AwardsComponent"],
        _components_publications_publications_component__WEBPACK_IMPORTED_MODULE_25__["PublicationsComponent"],
        _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_26__["ProjectsComponent"],
        _components_project_card_project_card_component__WEBPACK_IMPORTED_MODULE_27__["ProjectCardComponent"],
        _pages_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_28__["ProjectDetailsComponent"],
        _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_33__["NotFoundComponent"],
        _components_skill_card_skill_card_component__WEBPACK_IMPORTED_MODULE_34__["SkillCardComponent"],
        _components_info_card_info_card_component__WEBPACK_IMPORTED_MODULE_35__["InfoCardComponent"],
        _components_custom_button_custom_button_component__WEBPACK_IMPORTED_MODULE_36__["CustomButtonComponent"],
        _components_custom_svg_custom_svg_component__WEBPACK_IMPORTED_MODULE_37__["CustomSvgComponent"],
        _components_custom_category_chip_custom_category_chip_component__WEBPACK_IMPORTED_MODULE_38__["CustomCategoryChipComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_29__["ReactiveFormsModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_11__["GalleryModule"], angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_30__["IvyCarouselModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpClientModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__["MatMenuModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"]], exports: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__["MatMenuModule"],
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
                    _components_volunteer_volunteer_component__WEBPACK_IMPORTED_MODULE_23__["VolunteerComponent"],
                    _components_awards_awards_component__WEBPACK_IMPORTED_MODULE_24__["AwardsComponent"],
                    _components_publications_publications_component__WEBPACK_IMPORTED_MODULE_25__["PublicationsComponent"],
                    _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_26__["ProjectsComponent"],
                    _components_project_card_project_card_component__WEBPACK_IMPORTED_MODULE_27__["ProjectCardComponent"],
                    _pages_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_28__["ProjectDetailsComponent"],
                    _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_33__["NotFoundComponent"],
                    _components_skill_card_skill_card_component__WEBPACK_IMPORTED_MODULE_34__["SkillCardComponent"],
                    _components_info_card_info_card_component__WEBPACK_IMPORTED_MODULE_35__["InfoCardComponent"],
                    _components_custom_button_custom_button_component__WEBPACK_IMPORTED_MODULE_36__["CustomButtonComponent"],
                    _components_custom_svg_custom_svg_component__WEBPACK_IMPORTED_MODULE_37__["CustomSvgComponent"],
                    _components_custom_category_chip_custom_category_chip_component__WEBPACK_IMPORTED_MODULE_38__["CustomCategoryChipComponent"],
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
                    _angular_forms__WEBPACK_IMPORTED_MODULE_29__["ReactiveFormsModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                    _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_11__["GalleryModule"].forRoot(),
                    angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_30__["IvyCarouselModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpClientModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__["MatMenuModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"]
                ],
                exports: [
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__["MatMenuModule"],
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["app-custom-button {\n  width: 100%;\n}\napp-custom-button div {\n  border: none;\n  color: inherit;\n  text-decoration: none;\n  cursor: pointer;\n}\napp-custom-button div:hover {\n  text-decoration: none;\n}\napp-custom-button div:focus {\n  outline: none;\n}\napp-custom-button .border-btn {\n  display: inline-block;\n  position: relative;\n  width: -webkit-fill-available;\n  text-align: center;\n  height: 45px;\n}\napp-custom-button .border-btn-background {\n  background-color: #a50c0c2b;\n}\napp-custom-button .border-btn__inner {\n  display: inline-block;\n  padding: 10px 15px 10px 15px;\n  font-size: 10px;\n  font-weight: 400;\n  letter-spacing: 2px;\n  line-height: 1.2;\n  text-transform: uppercase;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: -webkit-fill-available;\n  color: #a50c0c;\n  transition: 0.5s cubic-bezier(0.17, 0.85, 0.438, 0.99);\n}\napp-custom-button .border-btn:before,\napp-custom-button .border-btn:after,\napp-custom-button .border-btn__inner:before,\napp-custom-button .border-btn__inner:after {\n  content: \"\";\n  position: absolute;\n  background-color: #a50c0c;\n  opacity: 0.2;\n  transition: 0.5s cubic-bezier(0.17, 0.85, 0.438, 0.99);\n}\napp-custom-button .border-btn:before {\n  width: 100%;\n  height: 1px;\n  left: 0;\n  top: 0;\n  transform: scaleX(1);\n  transform-origin: right;\n}\napp-custom-button .border-btn:after {\n  width: 1px;\n  height: 100%;\n  top: 0;\n  right: 0;\n  transform: scaleY(1);\n  transform-origin: bottom;\n}\napp-custom-button .border-btn__inner:before {\n  width: 100%;\n  height: 1px;\n  left: 0;\n  bottom: 0;\n  transform: scaleX(1);\n  transform-origin: left;\n}\napp-custom-button .border-btn__inner:after {\n  width: 1px;\n  height: 100%;\n  left: 0;\n  top: 0;\n  transform: scaleY(1);\n  transform-origin: top;\n}\napp-custom-button .border-btn:hover:before,\napp-custom-button .border-btn:hover .border-btn__inner:before {\n  transform: scaleX(0);\n}\napp-custom-button .border-btn:hover:after,\napp-custom-button .border-btn:hover .border-btn__inner:after {\n  transform: scaleY(0);\n}\napp-custom-button .border-btn__lines-1:before,\napp-custom-button .border-btn__lines-1:after,\napp-custom-button .border-btn__lines-2:before,\napp-custom-button .border-btn__lines-2:after {\n  content: \"\";\n  position: absolute;\n  background-color: #a50c0c;\n  transition: 0.5s cubic-bezier(0.17, 0.85, 0.438, 0.99);\n}\napp-custom-button .border-btn__lines-1:before {\n  width: 100%;\n  height: 1px;\n  left: 0;\n  top: 0;\n  transform: scaleX(0);\n  transform-origin: left;\n}\napp-custom-button .border-btn__lines-1:after {\n  width: 1px;\n  height: 100%;\n  top: 0;\n  right: 0;\n  transform: scaleY(0);\n  transform-origin: top;\n}\napp-custom-button .border-btn__lines-2:before {\n  width: 100%;\n  height: 1px;\n  left: 0;\n  bottom: 0;\n  transform: scaleX(0);\n  transform-origin: right;\n}\napp-custom-button .border-btn__lines-2:after {\n  width: 1px;\n  height: 100%;\n  left: 0;\n  top: 0;\n  transform: scaleY(0);\n  transform-origin: bottom;\n}\napp-custom-button .border-btn:hover .border-btn__lines-1:before,\napp-custom-button .border-btn:hover .border-btn__lines-2:before {\n  transform: scaleX(1);\n}\napp-custom-button .border-btn:hover .border-btn__lines-1:after,\napp-custom-button .border-btn:hover .border-btn__lines-2:after {\n  transform: scaleY(1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdXN0b20tYnV0dG9uL2N1c3RvbS1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBQTtBQURGO0FBRUU7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQUFKO0FBRUU7RUFDRSxxQkFBQTtBQUFKO0FBRUU7RUFDRSxhQUFBO0FBQUo7QUFFRTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUFKO0FBRUU7RUFDRSwyQkNsQlc7QURrQmY7QUFFRTtFQUNFLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsY0NqQ0k7RURrQ0osc0RBQUE7QUFBSjtBQUVFOzs7O0VBSUUsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJDMUNJO0VEMkNKLFlBQUE7RUFDQSxzREFBQTtBQUFKO0FBRUU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBRUEsb0JBQUE7RUFFQSx1QkFBQTtBQUFKO0FBRUU7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBRUEsb0JBQUE7RUFFQSx3QkFBQTtBQUFKO0FBRUU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBRUEsb0JBQUE7RUFFQSxzQkFBQTtBQUFKO0FBRUU7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBRUEsb0JBQUE7RUFFQSxxQkFBQTtBQUFKO0FBRUU7O0VBR0Usb0JBQUE7QUFBSjtBQUVFOztFQUdFLG9CQUFBO0FBQUo7QUFFRTs7OztFQUlFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQ3RHSTtFRHVHSixzREFBQTtBQUFKO0FBRUU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBRUEsb0JBQUE7RUFFQSxzQkFBQTtBQUFKO0FBRUU7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBRUEsb0JBQUE7RUFFQSxxQkFBQTtBQUFKO0FBRUU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBRUEsb0JBQUE7RUFFQSx1QkFBQTtBQUFKO0FBRUU7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBRUEsb0JBQUE7RUFFQSx3QkFBQTtBQUFKO0FBRUU7O0VBR0Usb0JBQUE7QUFBSjtBQUVFOztFQUdFLG9CQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2N1c3RvbS1idXR0b24vY3VzdG9tLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuYXBwLWN1c3RvbS1idXR0b24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpdiB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgZGl2OmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgZGl2OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gIC5ib3JkZXItYnRuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gIH1cclxuICAuYm9yZGVyLWJ0bi1iYWNrZ3JvdW5kIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRib3Jkb29wYWNpdHk7XHJcbiAgfVxyXG4gIC5ib3JkZXItYnRuX19pbm5lciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweCAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgICBjb2xvcjogJGJvcmRvO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyBjdWJpYy1iZXppZXIoMC4xNywgMC44NSwgMC40MzgsIDAuOTkpO1xyXG4gIH1cclxuICAuYm9yZGVyLWJ0bjpiZWZvcmUsXHJcbiAgLmJvcmRlci1idG46YWZ0ZXIsXHJcbiAgLmJvcmRlci1idG5fX2lubmVyOmJlZm9yZSxcclxuICAuYm9yZGVyLWJ0bl9faW5uZXI6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRib3JkbztcclxuICAgIG9wYWNpdHk6IDAuMjtcclxuICAgIHRyYW5zaXRpb246IDAuNXMgY3ViaWMtYmV6aWVyKDAuMTcsIDAuODUsIDAuNDM4LCAwLjk5KTtcclxuICB9XHJcbiAgLmJvcmRlci1idG46YmVmb3JlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xyXG4gIH1cclxuICAuYm9yZGVyLWJ0bjphZnRlciB7XHJcbiAgICB3aWR0aDogMXB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcclxuICB9XHJcbiAgLmJvcmRlci1idG5fX2lubmVyOmJlZm9yZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XHJcbiAgfVxyXG4gIC5ib3JkZXItYnRuX19pbm5lcjphZnRlciB7XHJcbiAgICB3aWR0aDogMXB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xyXG4gIH1cclxuICAuYm9yZGVyLWJ0bjpob3ZlcjpiZWZvcmUsXHJcbiAgLmJvcmRlci1idG46aG92ZXIgLmJvcmRlci1idG5fX2lubmVyOmJlZm9yZSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgfVxyXG4gIC5ib3JkZXItYnRuOmhvdmVyOmFmdGVyLFxyXG4gIC5ib3JkZXItYnRuOmhvdmVyIC5ib3JkZXItYnRuX19pbm5lcjphZnRlciB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDApO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XHJcbiAgfVxyXG4gIC5ib3JkZXItYnRuX19saW5lcy0xOmJlZm9yZSxcclxuICAuYm9yZGVyLWJ0bl9fbGluZXMtMTphZnRlcixcclxuICAuYm9yZGVyLWJ0bl9fbGluZXMtMjpiZWZvcmUsXHJcbiAgLmJvcmRlci1idG5fX2xpbmVzLTI6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRib3JkbztcclxuICAgIHRyYW5zaXRpb246IDAuNXMgY3ViaWMtYmV6aWVyKDAuMTcsIDAuODUsIDAuNDM4LCAwLjk5KTtcclxuICB9XHJcbiAgLmJvcmRlci1idG5fX2xpbmVzLTE6YmVmb3JlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcclxuICB9XHJcbiAgLmJvcmRlci1idG5fX2xpbmVzLTE6YWZ0ZXIge1xyXG4gICAgd2lkdGg6IDFweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgwKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XHJcbiAgfVxyXG4gIC5ib3JkZXItYnRuX19saW5lcy0yOmJlZm9yZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcclxuICB9XHJcbiAgLmJvcmRlci1idG5fX2xpbmVzLTI6YWZ0ZXIge1xyXG4gICAgd2lkdGg6IDFweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDApO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcclxuICB9XHJcbiAgLmJvcmRlci1idG46aG92ZXIgLmJvcmRlci1idG5fX2xpbmVzLTE6YmVmb3JlLFxyXG4gIC5ib3JkZXItYnRuOmhvdmVyIC5ib3JkZXItYnRuX19saW5lcy0yOmJlZm9yZSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgfVxyXG4gIC5ib3JkZXItYnRuOmhvdmVyIC5ib3JkZXItYnRuX19saW5lcy0xOmFmdGVyLFxyXG4gIC5ib3JkZXItYnRuOmhvdmVyIC5ib3JkZXItYnRuX19saW5lcy0yOmFmdGVyIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcclxuICB9XHJcbn1cclxuIiwiJGJsYWNrOiAjMTgxOTFBO1xyXG4kZ3JheTogIzNBM0IzQztcclxuJGxpZ2h0Z3JheTogIzhiOGI4YjtcclxuJGJhY2tncm91bmQ6ICNGOEY4RkY7XHJcbiR3aGl0ZTogI0ZGRkZGRjtcclxuJGJvcmRvOiAjYTUwYzBjO1xyXG4kYm9yZG9vcGFjaXR5OiAjYTUwYzBjMmI7Il19 */"], encapsulation: 2 });
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
    } }, directives: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_1__["MatProgressBar"], _directives_progress_bar_colors_directive__WEBPACK_IMPORTED_MODULE_2__["ProgressBarColorsDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]], styles: ["app-skill-card {\n  display: flex;\n  flex-flow: column;\n  text-align: center;\n  margin: 10px;\n  padding: 15px;\n  width: 110px;\n}\napp-skill-card .logo img {\n  height: 50px;\n  width: auto;\n}\napp-skill-card .name {\n  padding: 5px;\n  font-weight: bold;\n  color: #18191A;\n}\napp-skill-card .progress {\n  width: 100%;\n  display: flex;\n  flex-flow: column;\n}\napp-skill-card .progress .level-legend {\n  opacity: 0.5;\n  font-size: small;\n  padding: 5px;\n}\n@media (max-width: 800px) {\n  app-skill-card {\n    margin: 5px;\n    padding: 10px;\n    width: 90px;\n  }\n  app-skill-card .logo img {\n    height: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9za2lsbC1jYXJkL3NraWxsLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFERjtBQUlJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFGTjtBQU1FO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0NwQkk7QURnQlI7QUFPRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFMSjtBQU9JO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUxOO0FBVUE7RUFDRTtJQUNFLFdBQUE7SUFDQSxhQUFBO0lBQ0EsV0FBQTtFQVBGO0VBVUk7SUFDRSxZQUFBO0VBUk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2tpbGwtY2FyZC9za2lsbC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG5hcHAtc2tpbGwtY2FyZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgd2lkdGg6IDExMHB4O1xyXG5cclxuICAubG9nbyB7XHJcbiAgICBpbWcge1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm5hbWUge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogJGJsYWNrO1xyXG4gIH1cclxuXHJcbiAgLnByb2dyZXNzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG5cclxuICAgIC5sZXZlbC1sZWdlbmQge1xyXG4gICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIGFwcC1za2lsbC1jYXJkIHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG5cclxuICAgIC5sb2dvIHtcclxuICAgICAgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0iLCIkYmxhY2s6ICMxODE5MUE7XHJcbiRncmF5OiAjM0EzQjNDO1xyXG4kbGlnaHRncmF5OiAjOGI4YjhiO1xyXG4kYmFja2dyb3VuZDogI0Y4RjhGRjtcclxuJHdoaXRlOiAjRkZGRkZGO1xyXG4kYm9yZG86ICNhNTBjMGM7XHJcbiRib3Jkb29wYWNpdHk6ICNhNTBjMGMyYjsiXX0= */"], encapsulation: 2 });
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: ["app-info-card {\n  display: flex;\n  filter: opacity(0.5);\n}\napp-info-card .wrapper {\n  background-color: #FFFFFF;\n  display: flex;\n  flex-flow: column;\n  text-align: center;\n  align-items: center;\n  margin: 10px;\n  padding: 15px;\n  width: 150px;\n  box-shadow: 0px 0px 3px -1px #8b8b8b;\n}\napp-info-card .wrapper .image {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n}\napp-info-card .wrapper .name {\n  font-weight: bold;\n  color: #18191A;\n  padding: 10px 0;\n}\napp-info-card:hover {\n  filter: none;\n}\n@media (max-width: 800px) {\n  app-info-card .wrapper {\n    margin: 8px;\n    padding: 12px;\n    width: 90px;\n  }\n  app-info-card .wrapper .image {\n    width: 80px;\n    height: 80px;\n  }\n  app-info-card .wrapper .name {\n    font-size: smaller;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbmZvLWNhcmQvaW5mby1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtBQURGO0FBR0U7RUFDRSx5QkNISTtFRElKLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtBQURKO0FBR0k7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBRE47QUFJSTtFQUNFLGlCQUFBO0VBQ0EsY0N6QkU7RUQwQkYsZUFBQTtBQUZOO0FBT0E7RUFDRSxZQUFBO0FBSkY7QUFPQTtFQUVJO0lBQ0UsV0FBQTtJQUNBLGFBQUE7SUFDQSxXQUFBO0VBTEo7RUFPSTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VBTE47RUFRSTtJQUNFLGtCQUFBO0VBTk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5mby1jYXJkL2luZm8tY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuYXBwLWluZm8tY2FyZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmaWx0ZXI6IG9wYWNpdHkoMC41KTtcclxuXHJcbiAgLndyYXBwZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAtMXB4ICRsaWdodGdyYXk7XHJcblxyXG4gICAgLmltYWdlIHtcclxuICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hbWUge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgY29sb3I6ICRibGFjaztcclxuICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuYXBwLWluZm8tY2FyZDpob3ZlciB7XHJcbiAgZmlsdGVyOiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICBhcHAtaW5mby1jYXJkIHtcclxuICAgIC53cmFwcGVyIHtcclxuICAgICAgbWFyZ2luOiA4cHg7XHJcbiAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICAgIHdpZHRoOiA5MHB4O1xyXG5cclxuICAgICAgLmltYWdlIHtcclxuICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5uYW1lIHtcclxuICAgICAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiJGJsYWNrOiAjMTgxOTFBO1xyXG4kZ3JheTogIzNBM0IzQztcclxuJGxpZ2h0Z3JheTogIzhiOGI4YjtcclxuJGJhY2tncm91bmQ6ICNGOEY4RkY7XHJcbiR3aGl0ZTogI0ZGRkZGRjtcclxuJGJvcmRvOiAjYTUwYzBjO1xyXG4kYm9yZG9vcGFjaXR5OiAjYTUwYzBjMmI7Il19 */"], encapsulation: 2 });
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
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var _components_experience_card_experience_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/experience-card/experience-card.component */ "uoxI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _components_education_level_education_level_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/education-level/education-level.component */ "zeqP");
/* harmony import */ var _components_awards_awards_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/awards/awards.component */ "QrEi");








function ExperienceComponent_ng_template_2_app_experience_card_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-experience-card", 4);
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("experience", item_r5);
} }
function ExperienceComponent_ng_template_2_app_experience_card_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-experience-card", 4);
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("experience", item_r6);
} }
function ExperienceComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-experience-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Other work experiences");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExperienceComponent_ng_template_2_app_experience_card_4_Template, 1, 1, "app-experience-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Volunteer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExperienceComponent_ng_template_2_app_experience_card_8_Template, 1, 1, "app-experience-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("experience", ctx_r0.experience[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.otherExperiences);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.volunteer);
} }
function ExperienceComponent_ng_template_4_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-education-level", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("education", item_r8);
} }
function ExperienceComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExperienceComponent_ng_template_4_div_0_Template, 2, 1, "div", 8);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.education);
} }
function ExperienceComponent_ng_template_6_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-awards", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("award", item_r10);
} }
function ExperienceComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExperienceComponent_ng_template_6_div_0_Template, 2, 1, "div", 8);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.awards);
} }
class ExperienceComponent {
    constructor() {
        this.experience = [];
        this.education = [];
        this.volunteer = [];
        this.awards = [];
        this.otherExperiences = [];
        this.experience = src_assets_data__WEBPACK_IMPORTED_MODULE_1__["EXPERIENCE"];
        this.education = src_assets_data__WEBPACK_IMPORTED_MODULE_1__["EDUCATION"];
        this.volunteer = src_assets_data__WEBPACK_IMPORTED_MODULE_1__["VOLUNTEER"];
        this.awards = src_assets_data__WEBPACK_IMPORTED_MODULE_1__["AWARDS"];
        this.otherExperiences = this.experience.slice(1, this.experience.length);
    }
    ngOnInit() {
    }
}
ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) { return new (t || ExperienceComponent)(); };
ExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperienceComponent, selectors: [["app-experience"]], decls: 7, vars: 0, consts: [["label", "Work experiences"], ["matTabContent", ""], ["label", "Education"], ["label", "Honors & Awards"], [3, "experience"], [1, "title-category"], [1, "other-work-experiences"], [3, "experience", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [3, "education"], [3, "award"]], template: function ExperienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExperienceComponent_ng_template_2_Template, 9, 3, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExperienceComponent_ng_template_4_Template, 1, 1, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-tab", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExperienceComponent_ng_template_6_Template, 1, 1, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabContent"], _components_experience_card_experience_card_component__WEBPACK_IMPORTED_MODULE_3__["ExperienceCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _components_education_level_education_level_component__WEBPACK_IMPORTED_MODULE_5__["EducationLevelComponent"], _components_awards_awards_component__WEBPACK_IMPORTED_MODULE_6__["AwardsComponent"]], styles: ["app-experience .other-work-experiences {\n  display: flex;\n  flex-flow: wrap;\n}\napp-experience .other-work-experiences app-experience-card {\n  flex: 0 0 50%;\n}\n@media (max-width: 800px) {\n  app-experience .other-work-experiences app-experience-card {\n    flex: 0 0 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFGSjtBQUlJO0VBQ0UsYUFBQTtBQUZOO0FBT0E7RUFHTTtJQUNFLGNBQUE7RUFOTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG5hcHAtZXhwZXJpZW5jZSB7XHJcbiAgLm90aGVyLXdvcmstZXhwZXJpZW5jZXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogd3JhcDtcclxuXHJcbiAgICBhcHAtZXhwZXJpZW5jZS1jYXJkIHtcclxuICAgICAgZmxleDogMCAwIDUwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIGFwcC1leHBlcmllbmNlIHtcclxuICAgIC5vdGhlci13b3JrLWV4cGVyaWVuY2VzIHtcclxuICAgICAgYXBwLWV4cGVyaWVuY2UtY2FyZCB7XHJcbiAgICAgICAgZmxleDogMCAwIDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"], encapsulation: 2 });
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
/* harmony import */ var _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ks89/angular-modal-gallery */ "rHMi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _components_experience_card_experience_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/experience-card/experience-card.component */ "uoxI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _components_project_card_project_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/project-card/project-card.component */ "M0Pn");
/* harmony import */ var _components_publications_publications_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/publications/publications.component */ "BBdW");










function HomepageComponent_app_project_card_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-project-card", 14);
} if (rf & 2) {
    const project_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("project", project_r2);
} }
function HomepageComponent_app_publications_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-publications", 15);
} if (rf & 2) {
    const publication_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("publication", publication_r3);
} }
const _c0 = function () { return { show: false }; };
const _c1 = function (a1) { return { infinite: true, sidePreviews: a1 }; };
class HomepageComponent {
    constructor(router) {
        this.router = router;
        this.selfies = [
            'assets/selfies/1.jpg',
            'assets/selfies/2.jpg',
            'assets/selfies/3.jpg'
        ];
    }
    ngOnInit() {
        this.isMobileView = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent);
        this.experience = src_assets_data__WEBPACK_IMPORTED_MODULE_1__["EXPERIENCE"][0];
        this.publications = src_assets_data__WEBPACK_IMPORTED_MODULE_1__["PUBLICATIONS"];
        this.projects = src_assets_data__WEBPACK_IMPORTED_MODULE_1__["PROJECTS"].slice(0, 4);
        this.images = this.selfies ? this.selfies.map((imageUrl, index) => new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["Image"](index, {
            img: imageUrl
        })) : [];
    }
    goToPage(page) {
        this.router.navigateByUrl(`${page}`);
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 27, vars: 9, consts: [[1, "logo"], ["src", "assets/LOGO-black.png"], [1, "description-homepage"], [1, "selfies"], [3, "id", "modalImages", "slideConfig"], [1, "title-category"], [1, "experience"], ["parentPage", "homepage", 3, "experience"], [1, "see-more"], [3, "click"], [1, "projects"], [3, "project", 4, "ngFor", "ngForOf"], [1, "publications"], [3, "publication", 4, "ngFor", "ngForOf"], [3, "project"], [3, "publication"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " I am an application developer open for collaborations, passionate about digital graphics and photography, eager to learn and evolve in the Front-End field. During the last years, i focused both on my technical and soft skills, working with people around the globe and learning how to deliver their expectations.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ks-modal-gallery", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Last job experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-experience-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_Template_a_click_12_listener() { return ctx.goToPage("/experience"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "</See more job experiences>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Last projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HomepageComponent_app_project_card_18_Template, 1, 1, "app-project-card", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_Template_a_click_20_listener() { return ctx.goToPage("/projects"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "</See more projects>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Last publications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, HomepageComponent_app_publications_26_Template, 1, 1, "app-publications", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", 6)("modalImages", ctx.images)("slideConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("experience", ctx.experience);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.publications);
    } }, directives: [_ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["ɵd"], _components_experience_card_experience_card_component__WEBPACK_IMPORTED_MODULE_4__["ExperienceCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _components_project_card_project_card_component__WEBPACK_IMPORTED_MODULE_6__["ProjectCardComponent"], _components_publications_publications_component__WEBPACK_IMPORTED_MODULE_7__["PublicationsComponent"]], styles: ["app-homepage .logo {\n  text-align-last: center;\n  padding: 20px;\n}\napp-homepage .logo img {\n  width: auto;\n  height: 25vh;\n}\napp-homepage .description-homepage {\n  text-align: center;\n  font-size: 1rem;\n  line-height: 1.7rem;\n  margin: 20px 10vw;\n}\napp-homepage .selfies {\n  height: 50% !important;\n  margin: 30px;\n  width: auto;\n}\napp-homepage .see-more {\n  text-align-last: end;\n  padding: 20px;\n}\napp-homepage .see-more a {\n  cursor: pointer;\n  text-decoration: underline;\n}\napp-homepage .projects {\n  display: flex;\n  margin: 10px;\n  overflow: auto;\n  justify-content: center;\n}\napp-homepage hr {\n  margin: 20px;\n}\napp-homepage .experience app-experience-card .header {\n  justify-content: center;\n}\napp-homepage .publications {\n  display: flex;\n  flex-flow: wrap;\n}\napp-homepage .publications app-publications {\n  flex: 0 0 25%;\n}\napp-homepage .plain-container {\n  justify-content: center !important;\n  margin: 20px 40px 40px;\n  display: flex !important;\n  flex-flow: wrap;\n}\napp-homepage .plain-container .image {\n  margin: 5px !important;\n  height: 200px !important;\n  width: auto !important;\n  box-shadow: 0 0 10px -3px #8b8b8b;\n}\n@media (max-width: 850px) {\n  app-homepage .publications app-publications {\n    flex: 0 0 50%;\n  }\n}\n@media (max-width: 700px) {\n  app-homepage .plain-container .image {\n    height: auto !important;\n    width: 100% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSx1QkFBQTtFQUNBLGFBQUE7QUFGSjtBQUlJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFGTjtBQU1FO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUpKO0FBT0U7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBTEo7QUFRRTtFQUNFLG9CQUFBO0VBQ0EsYUFBQTtBQU5KO0FBUUk7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7QUFOTjtBQVVFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUFSSjtBQVdFO0VBQ0UsWUFBQTtBQVRKO0FBY007RUFDRSx1QkFBQTtBQVpSO0FBaUJFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFmSjtBQWlCSTtFQUNFLGFBQUE7QUFmTjtBQW1CRTtFQUNFLGtDQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7QUFqQko7QUFtQkk7RUFDRSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQ0FBQTtBQWpCTjtBQXFCRTtFQUVJO0lBQ0UsYUFBQTtFQXBCTjtBQUNGO0FBd0JFO0VBRUk7SUFDRSx1QkFBQTtJQUNBLHNCQUFBO0VBdkJOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuYXBwLWhvbWVwYWdlIHtcclxuICAubG9nbyB7XHJcbiAgICB0ZXh0LWFsaWduLWxhc3Q6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgIGhlaWdodDogMjV2aDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5kZXNjcmlwdGlvbi1ob21lcGFnZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS43cmVtO1xyXG4gICAgbWFyZ2luOiAyMHB4IDEwdnc7XHJcbiAgfVxyXG5cclxuICAuc2VsZmllcyB7XHJcbiAgICBoZWlnaHQ6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAzMHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG5cclxuICAuc2VlLW1vcmUge1xyXG4gICAgdGV4dC1hbGlnbi1sYXN0OiBlbmQ7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG5cclxuICAgIGEge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnByb2plY3RzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgaHIge1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmV4cGVyaWVuY2Uge1xyXG4gICAgYXBwLWV4cGVyaWVuY2UtY2FyZCB7XHJcbiAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucHVibGljYXRpb25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHdyYXA7XHJcblxyXG4gICAgYXBwLXB1YmxpY2F0aW9ucyB7XHJcbiAgICAgIGZsZXg6IDAgMCAyNSU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucGxhaW4tY29udGFpbmVyIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDIwcHggNDBweCA0MHB4O1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgZmxleC1mbG93OiB3cmFwO1xyXG5cclxuICAgIC5pbWFnZSB7XHJcbiAgICAgIG1hcmdpbjogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGhlaWdodDogMjAwcHggIWltcG9ydGFudDtcclxuICAgICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggLTNweCAkbGlnaHRncmF5O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDg1MHB4KSB7XHJcbiAgICAucHVibGljYXRpb25zIHtcclxuICAgICAgYXBwLXB1YmxpY2F0aW9ucyB7XHJcbiAgICAgICAgZmxleDogMCAwIDUwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgICAucGxhaW4tY29udGFpbmVyIHtcclxuICAgICAgLmltYWdlIHtcclxuICAgICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-homepage',
                templateUrl: './homepage.component.html',
                styleUrls: ['./homepage.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


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
/* harmony import */ var _components_custom_category_chip_custom_category_chip_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/custom-category-chip/custom-category-chip.component */ "zPib");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _components_project_card_project_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/project-card/project-card.component */ "M0Pn");






function ProjectsComponent_app_custom_category_chip_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-custom-category-chip", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_app_custom_category_chip_2_Template_app_custom_category_chip_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const technology_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.selectTechnology(technology_r2); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-custom-category-chip", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_Template_app_custom_category_chip_click_1_listener() { return ctx.selectTechnology("all"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProjectsComponent_app_custom_category_chip_2_Template, 1, 2, "app-custom-category-chip", 2);
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
    } }, directives: [_components_custom_category_chip_custom_category_chip_component__WEBPACK_IMPORTED_MODULE_2__["CustomCategoryChipComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _components_project_card_project_card_component__WEBPACK_IMPORTED_MODULE_4__["ProjectCardComponent"]], styles: ["app-projects {\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n}\napp-projects .projects-cards {\n  display: flex;\n  justify-content: center;\n  flex-flow: wrap;\n}\napp-projects .filters {\n  margin: 0 10%;\n  display: flex;\n  flex-flow: wrap;\n  justify-content: center;\n}\napp-projects .filters .chip {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQURGO0FBR0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBREo7QUFJRTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBRko7QUFJSTtFQUNFLFdBQUE7QUFGTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG5hcHAtcHJvamVjdHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIC5wcm9qZWN0cy1jYXJkcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWZsb3c6IHdyYXA7XHJcbiAgfVxyXG5cclxuICAuZmlsdGVycyB7XHJcbiAgICBtYXJnaW46IDAgMTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIC5jaGlwIHtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"], encapsulation: 2 });
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
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/chips */ "f44v");




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
function ExperienceCardComponent_mat_chip_list_11_mat_chip_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r5);
} }
function ExperienceCardComponent_mat_chip_list_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip-list", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExperienceCardComponent_mat_chip_list_11_mat_chip_1_Template, 2, 1, "mat-chip", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.experience.skill);
} }
function ExperienceCardComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 14);
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
ExperienceCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperienceCardComponent, selectors: [["app-experience-card"]], inputs: { experience: "experience", parentPage: "parentPage" }, decls: 13, vars: 8, consts: [[1, "header"], [1, "image"], [3, "src", 4, "ngIf"], [1, "summary"], [1, "name"], [1, "role"], [1, "date"], ["class", "location", 4, "ngIf"], ["class", "skills", 4, "ngIf"], ["class", "description", 3, "innerHTML", 4, "ngIf"], [3, "src"], [1, "location"], [1, "skills"], [4, "ngFor", "ngForOf"], [1, "description", 3, "innerHTML"]], template: function ExperienceCardComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ExperienceCardComponent_mat_chip_list_11_Template, 2, 1, "mat-chip-list", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__["MatChip"]], styles: ["app-experience-card .header {\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  padding: 20px 20px 10px 20px;\n}\napp-experience-card .header .image {\n  padding-right: 20px;\n}\napp-experience-card .header .image img {\n  max-width: 150px;\n  height: auto;\n}\napp-experience-card .header .summary {\n  display: flex;\n  flex-flow: column;\n}\napp-experience-card .header .summary .name {\n  font-weight: bold;\n  color: #3A3B3C;\n}\napp-experience-card .header .summary .role {\n  font-weight: bold;\n  font-size: 1.2rem;\n  color: #a50c0c;\n  margin: 4px 0;\n}\napp-experience-card .header .summary .date {\n  font-weight: normal;\n}\napp-experience-card .header .summary .location {\n  color: #8b8b8b;\n}\napp-experience-card .header .summary .skills {\n  display: flex;\n  margin: 5px 0;\n}\napp-experience-card .description {\n  padding: 0 20px 20px;\n  line-height: 1.5rem;\n}\n@media (max-width: 750px) {\n  app-experience-card .header {\n    flex-flow: wrap;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9leHBlcmllbmNlLWNhcmQvZXhwZXJpZW5jZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtBQUZKO0FBSUk7RUFDRSxtQkFBQTtBQUZOO0FBSU07RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUFGUjtBQUtJO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FBSE47QUFLTTtFQUNFLGlCQUFBO0VBQ0EsY0N0QkQ7QURtQlA7QUFLTTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQ3ZCQTtFRHdCQSxhQUFBO0FBSFI7QUFLTTtFQUNFLG1CQUFBO0FBSFI7QUFLTTtFQUNFLGNDakNJO0FEOEJaO0FBS007RUFDRSxhQUFBO0VBQ0EsYUFBQTtBQUhSO0FBUUU7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0FBTko7QUFTRTtFQUNFO0lBQ0UsZUFBQTtFQVBKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2V4cGVyaWVuY2UtY2FyZC9leHBlcmllbmNlLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbmFwcC1leHBlcmllbmNlLWNhcmQge1xyXG4gIC5oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIwcHggMjBweCAxMHB4IDIwcHg7XHJcblxyXG4gICAgLmltYWdlIHtcclxuICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxNTBweDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5zdW1tYXJ5IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcblxyXG4gICAgICAubmFtZSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6ICRncmF5O1xyXG4gICAgICB9XHJcbiAgICAgIC5yb2xlIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICBjb2xvcjogJGJvcmRvO1xyXG4gICAgICAgIG1hcmdpbjogNHB4IDA7XHJcbiAgICAgIH1cclxuICAgICAgLmRhdGUge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIH1cclxuICAgICAgLmxvY2F0aW9uIHtcclxuICAgICAgICBjb2xvcjogJGxpZ2h0Z3JheTtcclxuICAgICAgfVxyXG4gICAgICAuc2tpbGxzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5kZXNjcmlwdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHggMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcclxuICAgIC5oZWFkZXIge1xyXG4gICAgICBmbGV4LWZsb3c6IHdyYXA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiRibGFjazogIzE4MTkxQTtcclxuJGdyYXk6ICMzQTNCM0M7XHJcbiRsaWdodGdyYXk6ICM4YjhiOGI7XHJcbiRiYWNrZ3JvdW5kOiAjRjhGOEZGO1xyXG4kd2hpdGU6ICNGRkZGRkY7XHJcbiRib3JkbzogI2E1MGMwYztcclxuJGJvcmRvb3BhY2l0eTogI2E1MGMwYzJiOyJdfQ== */"], encapsulation: 2 });
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

/***/ "zPib":
/*!***********************************************************************************!*\
  !*** ./src/app/components/custom-category-chip/custom-category-chip.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CustomCategoryChipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomCategoryChipComponent", function() { return CustomCategoryChipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");



const _c0 = function (a0) { return { "chip-selected": a0 }; };
class CustomCategoryChipComponent {
    constructor() { }
    ngOnInit() {
    }
}
CustomCategoryChipComponent.ɵfac = function CustomCategoryChipComponent_Factory(t) { return new (t || CustomCategoryChipComponent)(); };
CustomCategoryChipComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomCategoryChipComponent, selectors: [["app-custom-category-chip"]], inputs: { text: "text", isSelected: "isSelected" }, decls: 5, vars: 4, consts: [[1, "chip", 3, "ngClass"], [1, "chip__inner"], [1, "chip__lines-1"], [1, "chip__lines-2"]], template: function CustomCategoryChipComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["app-custom-category-chip div {\n  border: none;\n  color: inherit;\n  text-decoration: none;\n  cursor: pointer;\n}\napp-custom-category-chip div:hover {\n  text-decoration: none;\n}\napp-custom-category-chip div:focus {\n  outline: none;\n}\napp-custom-category-chip .chip {\n  display: inline-block;\n  position: relative;\n  text-align: center;\n  height: 45px;\n}\napp-custom-category-chip .chip-selected {\n  background-color: #a50c0c2b;\n}\napp-custom-category-chip .chip__inner {\n  display: inline-block;\n  padding: 10px 15px 10px 15px;\n  font-size: 10px;\n  font-weight: 400;\n  letter-spacing: 2px;\n  line-height: 1.2;\n  text-transform: uppercase;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: -webkit-fill-available;\n  color: #a50c0c;\n  transition: 0.5s cubic-bezier(0.17, 0.85, 0.438, 0.99);\n}\napp-custom-category-chip .chip:before,\napp-custom-category-chip .chip:after,\napp-custom-category-chip .chip__inner:before,\napp-custom-category-chip .chip__inner:after {\n  content: \"\";\n  position: absolute;\n  background-color: #a50c0c;\n  opacity: 0.2;\n  transition: 0.5s cubic-bezier(0.17, 0.85, 0.438, 0.99);\n}\napp-custom-category-chip .chip:before {\n  width: 100%;\n  height: 1px;\n  left: 0;\n  top: 0;\n  transform: scaleX(1);\n  transform-origin: right;\n}\napp-custom-category-chip .chip:after {\n  width: 1px;\n  height: 100%;\n  top: 0;\n  right: 0;\n  transform: scaleY(1);\n  transform-origin: bottom;\n}\napp-custom-category-chip .chip__inner:before {\n  width: 100%;\n  height: 1px;\n  left: 0;\n  bottom: 0;\n  transform: scaleX(1);\n  transform-origin: left;\n}\napp-custom-category-chip .chip__inner:after {\n  width: 1px;\n  height: 100%;\n  left: 0;\n  top: 0;\n  transform: scaleY(1);\n  transform-origin: top;\n}\napp-custom-category-chip .chip:hover:before,\napp-custom-category-chip .chip:hover .chip__inner:before {\n  transform: scaleX(0);\n}\napp-custom-category-chip .chip:hover:after,\napp-custom-category-chip .chip:hover .chip__inner:after {\n  transform: scaleY(0);\n}\napp-custom-category-chip .chip__lines-1:before,\napp-custom-category-chip .chip__lines-1:after,\napp-custom-category-chip .chip__lines-2:before,\napp-custom-category-chip .chip__lines-2:after {\n  content: \"\";\n  position: absolute;\n  background-color: #a50c0c;\n  transition: 0.5s cubic-bezier(0.17, 0.85, 0.438, 0.99);\n}\napp-custom-category-chip .chip__lines-1:before {\n  width: 100%;\n  height: 1px;\n  left: 0;\n  top: 0;\n  transform: scaleX(0);\n  transform-origin: left;\n}\napp-custom-category-chip .chip__lines-1:after {\n  width: 1px;\n  height: 100%;\n  top: 0;\n  right: 0;\n  transform: scaleY(0);\n  transform-origin: top;\n}\napp-custom-category-chip .chip__lines-2:before {\n  width: 100%;\n  height: 1px;\n  left: 0;\n  bottom: 0;\n  transform: scaleX(0);\n  transform-origin: right;\n}\napp-custom-category-chip .chip__lines-2:after {\n  width: 1px;\n  height: 100%;\n  left: 0;\n  top: 0;\n  transform: scaleY(0);\n  transform-origin: bottom;\n}\napp-custom-category-chip .chip:hover .chip__lines-1:before,\napp-custom-category-chip .chip:hover .chip__lines-2:before {\n  transform: scaleX(1);\n}\napp-custom-category-chip .chip:hover .chip__lines-1:after,\napp-custom-category-chip .chip:hover .chip__lines-2:after {\n  transform: scaleY(1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdXN0b20tY2F0ZWdvcnktY2hpcC9jdXN0b20tY2F0ZWdvcnktY2hpcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0k7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQUZOO0FBSUk7RUFDRSxxQkFBQTtBQUZOO0FBSUk7RUFDRSxhQUFBO0FBRk47QUFJSTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFGTjtBQUlJO0VBQ0UsMkJDaEJTO0FEY2Y7QUFJSTtFQUNFLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsY0MvQkU7RURnQ0Ysc0RBQUE7QUFGTjtBQUlJOzs7O0VBSUUsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJDeENFO0VEeUNGLFlBQUE7RUFDQSxzREFBQTtBQUZOO0FBSUk7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBRUEsb0JBQUE7RUFFQSx1QkFBQTtBQUZOO0FBSUk7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBRUEsb0JBQUE7RUFFQSx3QkFBQTtBQUZOO0FBSUk7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBRUEsb0JBQUE7RUFFQSxzQkFBQTtBQUZOO0FBSUk7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBRUEsb0JBQUE7RUFFQSxxQkFBQTtBQUZOO0FBSUk7O0VBR0Usb0JBQUE7QUFGTjtBQUlJOztFQUdFLG9CQUFBO0FBRk47QUFJSTs7OztFQUlFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQ3BHRTtFRHFHRixzREFBQTtBQUZOO0FBSUk7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBRUEsb0JBQUE7RUFFQSxzQkFBQTtBQUZOO0FBSUk7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBRUEsb0JBQUE7RUFFQSxxQkFBQTtBQUZOO0FBSUk7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBRUEsb0JBQUE7RUFFQSx1QkFBQTtBQUZOO0FBSUk7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBRUEsb0JBQUE7RUFFQSx3QkFBQTtBQUZOO0FBSUk7O0VBR0Usb0JBQUE7QUFGTjtBQUlJOztFQUdFLG9CQUFBO0FBRk4iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2N1c3RvbS1jYXRlZ29yeS1jaGlwL2N1c3RvbS1jYXRlZ29yeS1jaGlwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG5hcHAtY3VzdG9tLWNhdGVnb3J5LWNoaXAge1xyXG4gICAgZGl2IHtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICBkaXY6aG92ZXIge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgICBkaXY6Zm9jdXMge1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG4gICAgLmNoaXAge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICB9XHJcbiAgICAuY2hpcC1zZWxlY3RlZCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRib3Jkb29wYWNpdHk7XHJcbiAgICB9XHJcbiAgICAuY2hpcF9faW5uZXIge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4IDE1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICAgICAgY29sb3I6ICRib3JkbztcclxuICAgICAgdHJhbnNpdGlvbjogMC41cyBjdWJpYy1iZXppZXIoMC4xNywgMC44NSwgMC40MzgsIDAuOTkpO1xyXG4gICAgfVxyXG4gICAgLmNoaXA6YmVmb3JlLFxyXG4gICAgLmNoaXA6YWZ0ZXIsXHJcbiAgICAuY2hpcF9faW5uZXI6YmVmb3JlLFxyXG4gICAgLmNoaXBfX2lubmVyOmFmdGVyIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9yZG87XHJcbiAgICAgIG9wYWNpdHk6IDAuMjtcclxuICAgICAgdHJhbnNpdGlvbjogMC41cyBjdWJpYy1iZXppZXIoMC4xNywgMC44NSwgMC40MzgsIDAuOTkpO1xyXG4gICAgfVxyXG4gICAgLmNoaXA6YmVmb3JlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcclxuICAgIH1cclxuICAgIC5jaGlwOmFmdGVyIHtcclxuICAgICAgd2lkdGg6IDFweDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDEpO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcclxuICAgIH1cclxuICAgIC5jaGlwX19pbm5lcjpiZWZvcmUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcclxuICAgIH1cclxuICAgIC5jaGlwX19pbm5lcjphZnRlciB7XHJcbiAgICAgIHdpZHRoOiAxcHg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDEpO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcclxuICAgIH1cclxuICAgIC5jaGlwOmhvdmVyOmJlZm9yZSxcclxuICAgIC5jaGlwOmhvdmVyIC5jaGlwX19pbm5lcjpiZWZvcmUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgIH1cclxuICAgIC5jaGlwOmhvdmVyOmFmdGVyLFxyXG4gICAgLmNoaXA6aG92ZXIgLmNoaXBfX2lubmVyOmFmdGVyIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgwKTtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XHJcbiAgICB9XHJcbiAgICAuY2hpcF9fbGluZXMtMTpiZWZvcmUsXHJcbiAgICAuY2hpcF9fbGluZXMtMTphZnRlcixcclxuICAgIC5jaGlwX19saW5lcy0yOmJlZm9yZSxcclxuICAgIC5jaGlwX19saW5lcy0yOmFmdGVyIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9yZG87XHJcbiAgICAgIHRyYW5zaXRpb246IDAuNXMgY3ViaWMtYmV6aWVyKDAuMTcsIDAuODUsIDAuNDM4LCAwLjk5KTtcclxuICAgIH1cclxuICAgIC5jaGlwX19saW5lcy0xOmJlZm9yZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgLmNoaXBfX2xpbmVzLTE6YWZ0ZXIge1xyXG4gICAgICB3aWR0aDogMXB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcDtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xyXG4gICAgfVxyXG4gICAgLmNoaXBfX2xpbmVzLTI6YmVmb3JlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcclxuICAgIH1cclxuICAgIC5jaGlwX19saW5lcy0yOmFmdGVyIHtcclxuICAgICAgd2lkdGg6IDFweDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xyXG4gICAgfVxyXG4gICAgLmNoaXA6aG92ZXIgLmNoaXBfX2xpbmVzLTE6YmVmb3JlLFxyXG4gICAgLmNoaXA6aG92ZXIgLmNoaXBfX2xpbmVzLTI6YmVmb3JlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICB9XHJcbiAgICAuY2hpcDpob3ZlciAuY2hpcF9fbGluZXMtMTphZnRlcixcclxuICAgIC5jaGlwOmhvdmVyIC5jaGlwX19saW5lcy0yOmFmdGVyIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgxKTtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XHJcbiAgICB9XHJcbn0iLCIkYmxhY2s6ICMxODE5MUE7XHJcbiRncmF5OiAjM0EzQjNDO1xyXG4kbGlnaHRncmF5OiAjOGI4YjhiO1xyXG4kYmFja2dyb3VuZDogI0Y4RjhGRjtcclxuJHdoaXRlOiAjRkZGRkZGO1xyXG4kYm9yZG86ICNhNTBjMGM7XHJcbiRib3Jkb29wYWNpdHk6ICNhNTBjMGMyYjsiXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomCategoryChipComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-custom-category-chip',
                templateUrl: './custom-category-chip.component.html',
                styleUrls: ['./custom-category-chip.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, { text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.education.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function EducationLevelComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
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
EducationLevelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EducationLevelComponent, selectors: [["app-education-level"]], inputs: { education: "education" }, decls: 15, vars: 9, consts: [[1, "header"], [1, "image"], [3, "src", 4, "ngIf"], [1, "summary"], [1, "name"], [1, "degree"], [1, "fieldOfStudy"], [1, "date"], ["class", "grade", 4, "ngIf"], [1, "activities", 3, "innerHTML"], [1, "description", 3, "innerHTML"], [3, "src"], [1, "grade"]], template: function EducationLevelComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 10);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.education.activities, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.education.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["app-education-level .header {\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  padding: 20px 20px 10px 20px;\n}\napp-education-level .header .image {\n  padding-right: 20px;\n}\napp-education-level .header .image img {\n  max-width: 150px;\n  height: auto;\n}\napp-education-level .header .summary {\n  display: flex;\n  flex-flow: column;\n}\napp-education-level .header .summary .name {\n  font-weight: bold;\n  color: #3A3B3C;\n}\napp-education-level .header .summary .degree {\n  font-weight: bold;\n  font-size: 1.2rem;\n  color: #a50c0c;\n  margin: 4px 0;\n}\napp-education-level .header .summary .date {\n  font-weight: normal;\n}\napp-education-level .header .summary .fieldOfStudy {\n  font-weight: normal;\n  color: #8b8b8b;\n}\napp-education-level .header .summary .grade {\n  color: #8b8b8b;\n}\napp-education-level .description,\napp-education-level .activities {\n  padding: 0 20px 20px;\n  line-height: 1.5rem;\n}\n@media (max-width: 750px) {\n  app-education-level .header {\n    flex-flow: wrap;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZHVjYXRpb24tbGV2ZWwvZWR1Y2F0aW9uLWxldmVsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtBQUZKO0FBSUk7RUFDRSxtQkFBQTtBQUZOO0FBSU07RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUFGUjtBQUtJO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FBSE47QUFLTTtFQUNFLGlCQUFBO0VBQ0EsY0N0QkQ7QURtQlA7QUFLTTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQ3ZCQTtFRHdCQSxhQUFBO0FBSFI7QUFLTTtFQUNFLG1CQUFBO0FBSFI7QUFLTTtFQUNFLG1CQUFBO0VBQ0EsY0NsQ0k7QUQrQlo7QUFLTTtFQUNFLGNDckNJO0FEa0NaO0FBUUU7O0VBRUUsb0JBQUE7RUFDQSxtQkFBQTtBQU5KO0FBU0U7RUFDRTtJQUNFLGVBQUE7RUFQSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lZHVjYXRpb24tbGV2ZWwvZWR1Y2F0aW9uLWxldmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG5hcHAtZWR1Y2F0aW9uLWxldmVsIHtcclxuICAuaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHggMTBweCAyMHB4O1xyXG5cclxuICAgIC5pbWFnZSB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIG1heC13aWR0aDogMTUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuc3VtbWFyeSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG5cclxuICAgICAgLm5hbWUge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiAkZ3JheTtcclxuICAgICAgfVxyXG4gICAgICAuZGVncmVlIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICBjb2xvcjogJGJvcmRvO1xyXG4gICAgICAgIG1hcmdpbjogNHB4IDA7XHJcbiAgICAgIH1cclxuICAgICAgLmRhdGUge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIH1cclxuICAgICAgLmZpZWxkT2ZTdHVkeSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBjb2xvcjogJGxpZ2h0Z3JheTtcclxuICAgICAgfVxyXG4gICAgICAuZ3JhZGUge1xyXG4gICAgICAgIGNvbG9yOiAkbGlnaHRncmF5O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZGVzY3JpcHRpb24sXHJcbiAgLmFjdGl2aXRpZXMge1xyXG4gICAgcGFkZGluZzogMCAyMHB4IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgZmxleC1mbG93OiB3cmFwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIkYmxhY2s6ICMxODE5MUE7XHJcbiRncmF5OiAjM0EzQjNDO1xyXG4kbGlnaHRncmF5OiAjOGI4YjhiO1xyXG4kYmFja2dyb3VuZDogI0Y4RjhGRjtcclxuJHdoaXRlOiAjRkZGRkZGO1xyXG4kYm9yZG86ICNhNTBjMGM7XHJcbiRib3Jkb29wYWNpdHk6ICNhNTBjMGMyYjsiXX0= */"], encapsulation: 2 });
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