(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\Mada\Documents\GitHub\madalinaeleonorag.github.io\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "2D9T":
    /*!*******************************************************************************!*\
      !*** ./src/app/components/certification-card/certification-card.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: CertificationCardComponent */

    /***/
    function D9T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CertificationCardComponent", function () {
        return CertificationCardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      var _c0 = function _c0(a0) {
        return {
          background: a0,
          "background-position": "center",
          "background-size": "cover"
        };
      };

      var CertificationCardComponent = /*#__PURE__*/function () {
        function CertificationCardComponent() {
          _classCallCheck(this, CertificationCardComponent);
        }

        _createClass(CertificationCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CertificationCardComponent;
      }();

      CertificationCardComponent.ɵfac = function CertificationCardComponent_Factory(t) {
        return new (t || CertificationCardComponent)();
      };

      CertificationCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CertificationCardComponent,
        selectors: [["app-certification-card"]],
        inputs: {
          item: "item"
        },
        decls: 6,
        vars: 5,
        consts: [[1, "wrapper"], [1, "image", 3, "ngStyle"], [1, "name"], ["target", "_blank", 3, "href"]],
        template: function CertificationCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "See certification");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, "url(" + ctx.item.logo + ")"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.item.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]],
        styles: ["app-certification-card {\n  display: flex;\n}\napp-certification-card .wrapper {\n  display: flex;\n  flex-flow: column;\n  text-align: center;\n  align-items: center;\n  margin: 10px;\n  padding: 15px;\n  width: 150px;\n}\napp-certification-card .wrapper .image {\n  width: 100px;\n  height: 100px;\n}\napp-certification-card .wrapper .name {\n  color: var(--black);\n  padding: 10px 0;\n}\n@media (max-width: 800px) {\n  app-certification-card .wrapper {\n    margin: 0;\n    padding: 8px;\n    width: 90px;\n  }\n  app-certification-card .wrapper .image {\n    width: 80px;\n    height: 80px;\n  }\n  app-certification-card .wrapper .name {\n    font-size: smaller;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jZXJ0aWZpY2F0aW9uLWNhcmQvY2VydGlmaWNhdGlvbi1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtBQURGO0FBR0U7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBREo7QUFHSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBRE47QUFJSTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQUZOO0FBT0E7RUFFSTtJQUNFLFNBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtFQUxKO0VBT0k7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQUxOO0VBUUk7SUFDRSxrQkFBQTtFQU5OO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NlcnRpZmljYXRpb24tY2FyZC9jZXJ0aWZpY2F0aW9uLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmFwcC1jZXJ0aWZpY2F0aW9uLWNhcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIC53cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG5cclxuICAgIC5pbWFnZSB7XHJcbiAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIH1cclxuXHJcbiAgICAubmFtZSB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIGFwcC1jZXJ0aWZpY2F0aW9uLWNhcmQge1xyXG4gICAgLndyYXBwZXIge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgd2lkdGg6IDkwcHg7XHJcblxyXG4gICAgICAuaW1hZ2Uge1xyXG4gICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm5hbWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CertificationCardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-certification-card',
            templateUrl: './certification-card.component.html',
            styleUrls: ['./certification-card.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [];
        }, {
          item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "2MiI":
    /*!*******************************************************!*\
      !*** ./src/app/components/header/header.component.ts ***!
      \*******************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function MiI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var src_app_commons_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/commons.service */
      "zZLy");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/menu */
      "rJgo");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _custom_svg_custom_svg_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../custom-svg/custom-svg.component */
      "HoFA");
      /* harmony import */


      var _custom_button_custom_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../custom-button/custom-button.component */
      "bGnb");
      /* harmony import */


      var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../contact/contact.component */
      "G2Gn");

      function HeaderComponent_mat_icon_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HeaderComponent_mat_icon_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "selected-page": a0
        };
      };

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(router, commonsService) {
          var _this = this;

          _classCallCheck(this, HeaderComponent);

          this.router = router;
          this.commonsService = commonsService;
          this.selectedPageUrl = '/';
          this.isDarkThemeSelected = false;
          this.router.events.subscribe(function () {
            _this.selectedPageUrl = router.url.toString();
          });
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.commonsService.changeTheme$.subscribe(function (isDarkTheme) {
              _this2.isDarkThemeSelected = isDarkTheme;
              _this2.themeEmoji = isDarkTheme ? '☀️' : '🌙';
            });
          }
        }, {
          key: "goToPage",
          value: function goToPage(page) {
            this.commonsService.navigateToURL("".concat(page));
          }
        }, {
          key: "isPageSelected",
          value: function isPageSelected(page) {
            return page === this.selectedPageUrl;
          }
        }, {
          key: "openCV",
          value: function openCV() {
            this.commonsService.openNewTab('./../../../assets/CV.pdf');
          }
        }, {
          key: "changeTheme",
          value: function changeTheme() {
            this.isDarkThemeSelected ? this.commonsService.changeTheme.next(false) : this.commonsService.changeTheme.next(true);
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_commons_service__WEBPACK_IMPORTED_MODULE_2__["CommonsService"]));
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 38,
        vars: 26,
        consts: [["mat-icon-button", "", 1, "menu-icon", 3, "matMenuTriggerFor"], ["t", "matMenuTrigger"], ["class", "", 4, "ngIf"], [1, "title", 3, "click"], [1, "links"], [3, "ngClass", "click"], [1, "social-icons-wrapper"], ["target", "_blank", "href", "https://madalinaeleonorag.medium.com/"], ["type", "medium"], ["target", "_blank", "href", "https://github.com/madalinaeleonorag"], ["type", "github"], [1, "theme-change", 3, "click"], ["buttonText", "</Resume>", 3, "isFilledButton", "click"], ["buttonText", "Contact", 3, "isFilledButton", "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "ngClass", "click"], ["contactMenu", "matMenu"], [1, ""]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_mat_icon_2_Template, 2, 0, "mat-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_mat_icon_3_Template, 2, 0, "mat-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_4_listener() {
              return ctx.goToPage("/");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Madalina");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Eleonora");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_9_listener() {
              return ctx.goToPage("/");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Home ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_11_listener() {
              return ctx.goToPage("skills");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Skills ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_13_listener() {
              return ctx.goToPage("experience");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Experience ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-custom-svg", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-custom-svg", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_20_listener() {
              return ctx.changeTheme();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "app-custom-button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_app_custom_button_click_22_listener() {
              return ctx.openCV();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-custom-button", 13, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-menu", null, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_27_listener() {
              return ctx.goToPage("/");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Home ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_29_listener() {
              return ctx.goToPage("skills");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Skills ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_31_listener() {
              return ctx.goToPage("experience");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Experience ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "app-custom-button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_app_custom_button_click_33_listener() {
              return ctx.openCV();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "app-contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-menu", null, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "app-contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r0.menuOpen);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.menuOpen);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.isPageSelected("/")));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx.isPageSelected("/skills")));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, ctx.isPageSelected("/experience")));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.themeEmoji, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isFilledButton", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isFilledButton", true)("matMenuTriggerFor", _r5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, ctx.isPageSelected("/")));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c0, ctx.isPageSelected("/skills")));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c0, ctx.isPageSelected("/experience")));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isFilledButton", false);
          }
        },
        directives: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuTrigger"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _custom_svg_custom_svg_component__WEBPACK_IMPORTED_MODULE_5__["CustomSvgComponent"], _custom_button_custom_button_component__WEBPACK_IMPORTED_MODULE_6__["CustomButtonComponent"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuItem"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"]],
        styles: ["app-header {\n  display: flex;\n  height: 30px;\n  flex-flow: row;\n  background-color: var(--background);\n  align-items: center;\n  justify-content: space-between;\n  padding: 15px;\n  margin-top: -60px;\n  position: fixed;\n  width: -webkit-fill-available;\n  z-index: 99999;\n}\napp-header .menu-icon {\n  display: none;\n}\napp-header .title {\n  cursor: pointer;\n  text-transform: uppercase;\n  font-size: 1rem;\n  font-weight: normal;\n  color: var(--white);\n  margin: 0 10px;\n}\napp-header .title span {\n  color: var(--primary);\n}\napp-header .title:hover span {\n  color: var(--white);\n}\napp-header .links {\n  flex-flow: row;\n  display: flex;\n  margin-right: auto;\n  align-items: center;\n}\napp-header .links div {\n  margin: 0 10px;\n  text-decoration: none;\n  color: var(--white) !important;\n}\napp-header .links div:hover {\n  color: var(--primary) !important;\n  cursor: pointer;\n}\napp-header .links .selected-page {\n  color: var(--primary) !important;\n}\napp-header .social-icons-wrapper {\n  align-items: center;\n}\napp-header .social-icons-wrapper .border-btn {\n  margin: 0 5px;\n}\napp-header .social-icons-wrapper .theme-change {\n  cursor: pointer;\n  font-size: 2rem;\n}\napp-header a {\n  margin: 0 10px !important;\n}\n@media (max-width: 800px) {\n  app-header .links {\n    display: none;\n  }\n  app-header .menu-icon {\n    display: inline;\n  }\n  app-header .title {\n    margin: auto;\n  }\n}\n@media (max-width: 800px) {\n  app-header .social-icons-wrapper {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0FBQ0o7QUFFRTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUFKO0FBRUk7RUFDRSxxQkFBQTtBQUFOO0FBS0k7RUFDRSxtQkFBQTtBQUhOO0FBT0U7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFMSjtBQU9JO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7QUFMTjtBQU9JO0VBQ0UsZ0NBQUE7RUFDQSxlQUFBO0FBTE47QUFRSTtFQUNFLGdDQUFBO0FBTk47QUFVRTtFQUNFLG1CQUFBO0FBUko7QUFVSTtFQUNFLGFBQUE7QUFSTjtBQVdJO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUFUTjtBQWFFO0VBQ0UseUJBQUE7QUFYSjtBQWNFO0VBQ0U7SUFDRSxhQUFBO0VBWko7RUFjRTtJQUNFLGVBQUE7RUFaSjtFQWNFO0lBQ0UsWUFBQTtFQVpKO0FBQ0Y7QUFlRTtFQUNFO0lBQ0UsYUFBQTtFQWJKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBmbGV4LWZsb3c6IHJvdztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIG1hcmdpbi10b3A6IC02MHB4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICB6LWluZGV4OiA5OTk5OTtcclxuXHJcbiAgLm1lbnUtaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLnRpdGxlIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgIG1hcmdpbjogMCAxMHB4O1xyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudGl0bGU6aG92ZXIge1xyXG4gICAgc3BhbiB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubGlua3Mge1xyXG4gICAgZmxleC1mbG93OiByb3c7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBkaXYge1xyXG4gICAgICBtYXJnaW46IDAgMTBweDtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBjb2xvcjogdmFyKC0td2hpdGUpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBkaXY6aG92ZXIge1xyXG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSkgIWltcG9ydGFudDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWxlY3RlZC1wYWdlIHtcclxuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc29jaWFsLWljb25zLXdyYXBwZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAuYm9yZGVyLWJ0biB7XHJcbiAgICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRoZW1lLWNoYW5nZSB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICBtYXJnaW46IDAgMTBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAubGlua3Mge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLm1lbnUtaWNvbiB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIH1cclxuICAgIC50aXRsZSB7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgLnNvY2lhbC1pY29ucy13cmFwcGVyIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: src_app_commons_service__WEBPACK_IMPORTED_MODULE_2__["CommonsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "2yNh":
    /*!**************************************************!*\
      !*** ./src/app/pages/skills/skills.component.ts ***!
      \**************************************************/

    /*! exports provided: SkillsComponent */

    /***/
    function yNh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SkillsComponent", function () {
        return SkillsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_assets_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/assets/data */
      "6Xnp");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _components_skill_card_skill_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../components/skill-card/skill-card.component */
      "fTIr");
      /* harmony import */


      var _components_certification_card_certification_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../components/certification-card/certification-card.component */
      "2D9T");

      function SkillsComponent_app_skill_card_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-skill-card", 4);
        }

        if (rf & 2) {
          var skill_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", skill_r2);
        }
      }

      function SkillsComponent_app_certification_card_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-certification-card", 4);
        }

        if (rf & 2) {
          var certification_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", certification_r3);
        }
      }

      var SkillsComponent = /*#__PURE__*/function () {
        function SkillsComponent() {
          _classCallCheck(this, SkillsComponent);

          this.columns = ['logo', 'name', 'organization'];
          this.skills = src_assets_data__WEBPACK_IMPORTED_MODULE_1__["SKILLS"];
          this.certifications = src_assets_data__WEBPACK_IMPORTED_MODULE_1__["CERTIFICATIONS"];
        }

        _createClass(SkillsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SkillsComponent;
      }();

      SkillsComponent.ɵfac = function SkillsComponent_Factory(t) {
        return new (t || SkillsComponent)();
      };

      SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SkillsComponent,
        selectors: [["app-skills"]],
        decls: 10,
        vars: 2,
        consts: [[1, "category"], [1, "category-name"], [1, "category-items"], [3, "item", 4, "ngFor", "ngForOf"], [3, "item"]],
        template: function SkillsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "What i know \uD83C\uDF1F");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SkillsComponent_app_skill_card_4_Template, 1, 1, "app-skill-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "What certifications i achieved \uD83D\uDCC3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SkillsComponent_app_certification_card_9_Template, 1, 1, "app-certification-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.certifications);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _components_skill_card_skill_card_component__WEBPACK_IMPORTED_MODULE_3__["SkillCardComponent"], _components_certification_card_certification_card_component__WEBPACK_IMPORTED_MODULE_4__["CertificationCardComponent"]],
        styles: ["app-skills {\n  display: flex;\n  flex-flow: column;\n}\napp-skills .category .category-name {\n  font-weight: bold;\n  padding: 5vh 0;\n  font-size: medium;\n  font-size: 1.5rem;\n  text-align: -webkit-center;\n}\napp-skills .category .category-items {\n  display: flex;\n  flex-flow: wrap;\n  justify-content: center;\n}\napp-skills .category .category-items.courses {\n  display: flex;\n  flex-flow: column;\n  margin: 0 10%;\n}\napp-skills .category .category-items.courses .course {\n  display: flex;\n  align-items: center;\n  padding: 10px;\n}\napp-skills .category .category-items.courses .course .image-course {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\napp-skills .category .category-items.courses .course .course-detail {\n  padding-left: 10px;\n}\napp-skills .category .category-items .name {\n  color: var(--white);\n}\n@media (max-width: 850px) {\n  app-skills .category .category-name {\n    font-size: 1rem;\n    padding: 3vh 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQUNGO0FBRUk7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUFBTjtBQUdJO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQUROO0FBR007RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FBRFI7QUFHUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFEVjtBQUdVO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQURaO0FBSVU7RUFDRSxrQkFBQTtBQUZaO0FBT007RUFDRSxtQkFBQTtBQUxSO0FBVUU7RUFFSTtJQUNFLGVBQUE7SUFDQSxjQUFBO0VBVE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NraWxscy9za2lsbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtc2tpbGxzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG5cclxuICAuY2F0ZWdvcnkge1xyXG4gICAgLmNhdGVnb3J5LW5hbWUge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgcGFkZGluZzogNXZoIDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhdGVnb3J5LWl0ZW1zIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1mbG93OiB3cmFwO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICYuY291cnNlcyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgICAgICBtYXJnaW46IDAgMTAlO1xyXG5cclxuICAgICAgICAuY291cnNlIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgICAgICAgICAuaW1hZ2UtY291cnNlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5jb3Vyc2UtZGV0YWlsIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLm5hbWUge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4NTBweCkge1xyXG4gICAgLmNhdGVnb3J5IHtcclxuICAgICAgLmNhdGVnb3J5LW5hbWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAzdmggMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-skills',
            templateUrl: './skills.component.html',
            styleUrls: ['./skills.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "6Xnp":
    /*!****************************!*\
      !*** ./src/assets/data.ts ***!
      \****************************/

    /*! exports provided: DESIGNPROJECTS, SKILLS, CERTIFICATIONS, EDUCATION, AWARDS, EXPERIENCE */

    /***/
    function Xnp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DESIGNPROJECTS", function () {
        return DESIGNPROJECTS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SKILLS", function () {
        return SKILLS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CERTIFICATIONS", function () {
        return CERTIFICATIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EDUCATION", function () {
        return EDUCATION;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AWARDS", function () {
        return AWARDS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EXPERIENCE", function () {
        return EXPERIENCE;
      });

      var DESIGNPROJECTS = [{
        id: 1,
        featured: true,
        name: 'Photography',
        startDate: 'Jun 2018',
        endDate: 'Present',
        type: 'Personal project',
        noDetails: true,
        technologies: ['Photoshop', 'Lightroom', 'Photography'],
        live: 'https://500px.com/p/madalinaeleonorag?view=galleries&',
        logo: 'https://drscdn.500px.org/photo/274673693/q%3D80_m%3D2000/v2?sig=8ca6a504a9b659352523386d6b165d110ff3fc53618fd56f7dc6b136683c7e1d'
      }, {
        id: 2,
        name: 'Furniture Design',
        startDate: 'Dec 2018',
        featured: true,
        endDate: 'Present',
        technologies: ['Photoshop'],
        type: 'Personal project',
        description: "\n            Long time ago I started drawing furniture design for my own place or for others, discovering that I have a passion for it.\n        ",
        images: {
          screenshots: ['../assets/projects/2/1.png', '../assets/projects/2/2.png', '../assets/projects/2/3.png', '../assets/projects/2/4.png', '../assets/projects/2/5.png', '../assets/projects/2/6.png', '../assets/projects/2/7.png', '../assets/projects/2/8.png', '../assets/projects/2/9.png']
        },
        logo: '../assets/projects/2/1.png'
      }, {
        id: 3,
        name: 'Graphic Design',
        startDate: 'Jun 2015',
        endDate: 'Present',
        featured: true,
        technologies: ['Photoshop'],
        type: 'Personal project',
        description: "\n            Providing logos for different clients and pro bono",
        images: {
          screenshots: ['assets/projects/3/1.png', 'assets/projects/3/2.png', 'assets/projects/3/3.png', 'assets/projects/3/4.png', 'assets/projects/3/5.png', 'assets/projects/3/6.png']
        },
        logo: 'assets/projects/3/1.png'
      }];
      var SKILLS = [{
        name: 'HTML5',
        level: 3,
        color: '#E85D25',
        logo: 'HTML5'
      }, {
        name: 'CSS3',
        level: 2,
        color: '#249CDA',
        logo: 'CSS3'
      }, {
        name: 'SCSS',
        level: 2,
        color: '#C96195',
        logo: 'SCSS'
      }, {
        name: 'Bootstrap',
        level: 2,
        color: '#533B78',
        logo: 'Bootstrap'
      }, {
        name: 'Javascript',
        level: 3,
        color: '#EFD81D',
        logo: 'Javascript'
      }, {
        name: 'Vue.js',
        level: 3,
        color: '#3FB27F',
        logo: 'Vuejs'
      }, {
        name: 'Vuex',
        level: 3,
        color: '#33475B',
        logo: 'Vuex'
      }, {
        name: 'Angular',
        level: 3,
        color: '#BD002E',
        logo: 'Angular'
      }, {
        name: 'Node.js',
        level: 0,
        color: '#539e43',
        logo: 'nodejs'
      }, {
        name: 'JQuery',
        level: 1,
        color: '#0864A7',
        logo: 'JQuery'
      }, {
        name: 'Postman',
        level: 2,
        color: '#ff6c37',
        logo: 'Postman'
      }, {
        name: 'VS Code',
        level: 3,
        color: '#2981b9',
        logo: 'Visual Studio Code'
      }, {
        name: 'C#',
        level: 1,
        color: '#68217a',
        logo: 'CSharp'
      }, {
        name: 'C++',
        level: 1,
        color: '#00589c',
        logo: 'CPP'
      }, {
        name: 'Ionic',
        level: 2,
        color: '#367CF7',
        logo: 'Ionic'
      }, {
        name: 'React.js',
        level: 0,
        color: '#50BBD7',
        logo: 'Reactjs'
      }, {
        name: 'Wordpress',
        level: 1,
        color: '#207196',
        logo: 'Wordpress'
      }, {
        name: 'Git',
        level: 3,
        color: '#E84E31',
        logo: 'Git'
      }, {
        name: 'NoSQL',
        level: 2,
        color: '#F7C52B',
        logo: 'NoSQL'
      }, {
        name: 'PHP',
        level: 0,
        color: '#787cb4',
        logo: 'PHP'
      }, {
        name: 'Photoshop',
        level: 2,
        color: '#001D34',
        logo: 'Photoshop'
      }, {
        name: 'Lightroom',
        level: 1,
        color: '#0A232F',
        logo: 'Lightroom'
      }];
      var CERTIFICATIONS = [{
        logo: '../assets/certifications/Think-like-a-hacker.png',
        name: 'Think like a hacker',
        organization: 'IBM',
        issueDate: 'Sep 2021',
        url: 'https://www.credly.com/badges/2b0b25bd-328e-45c3-8248-85e09c380ef2'
      }, {
        logo: '../assets/certifications/IBM_Cloud_Essentials.png',
        name: 'IBM Cloud Essentials',
        organization: 'IBM',
        issueDate: 'Jan 2021',
        url: 'https://www.youracclaim.com/badges/26b0884f-9c3a-42f1-be74-6b23c4f6a743'
      }, {
        logo: '../assets/certifications/Security-_-Privacy-by-Design-Foundational.png',
        name: 'Security and Privacy by Design Foundations',
        organization: 'IBM',
        issueDate: 'Jan 2021',
        url: 'https://www.youracclaim.com/badges/84998ca5-487f-4c61-b1e5-298ec991bb20'
      }, {
        logo: '../assets/certifications/Watson_and_Cloud_Foundations.png',
        name: 'Watson and Cloud Foundations',
        organization: 'IBM',
        issueDate: 'Jan 2021',
        url: 'https://www.youracclaim.com/badges/11c2db76-b461-4bf9-8a12-9a42663d404f'
      }, {
        logo: '../assets/certifications/IBM-Mentor.png',
        name: 'IBM Mentor',
        organization: 'IBM',
        issueDate: 'Dec 2020',
        url: 'https://www.youracclaim.com/badges/841adfea-65df-4a8e-bbe1-267d70cb6a21'
      }, {
        logo: '../assets/certifications/JavaScript-Front-End-Development.png',
        name: 'JavaScript Frontend Development',
        organization: 'IBM',
        issueDate: 'Dec 2020',
        url: 'https://www.youracclaim.com/badges/b6792b26-e919-4de1-bc24-d4192439aa50'
      }, {
        logo: '../assets/certifications/EF-Standard.png',
        name: 'ES SET English Certificate',
        organization: 'EF Standard English Test (EF SET)',
        issueDate: 'Jul 2020',
        url: 'https://www.efset.org/cert/V3b9C2'
      }, {
        logo: '../assets/certifications/Badges_v8-07_Practitioner.png',
        name: 'Enterprise Design Thinking Practitioner',
        organization: 'IBM',
        issueDate: 'Mar 2020',
        url: 'https://www.youracclaim.com/badges/f28084ab-7407-4d30-8f84-e612adc40402'
      }, {
        logo: '../assets/certifications/IBM-Agile-Explorer.png',
        name: 'IBM Agile Explorer',
        organization: 'IBM',
        issueDate: 'Mar 2020',
        url: 'https://www.youracclaim.com/badges/8ed472e8-38c5-42c0-aee7-c1993e9f737f'
      }];
      var EDUCATION = [{
        school: 'Universitatea Româno-Americană din București',
        degree: 'Master\'s degree',
        fieldOfStudy: 'Computer/Information Technology Administration and Management',
        startYear: '2018',
        endYear: '2020',
        grade: '9.66',
        logo: '../assets/logos/romanian-american university.png',
        description: 'I\'ve assimilated informations about IOT, mobile applications development, web technologies, AI, GDPR, PL/SQL, BigData, project management, WordPress, security of computer networks and E-Commerce. Those knowledges are proved by the projects worked for the graduation of the course. Participation in scientific communication session with transportation optimisation in pl/sql and an article regarding security for client-server applications'
      }, {
        school: 'Universitatea Româno-Americană din București',
        fieldOfStudy: 'Computer/Information Technology Administration and Management',
        degree: 'Licentiate degree',
        startYear: '2015',
        endYear: '2018',
        grade: '9.50',
        logo: '../assets/logos/romanian-american university.png',
        description: 'The knowledge is supported by practical projects to prove a good assimilation of basic information. These are both economics, such as management, economics, statistics, accounting, office, marketing, econometrics and programming in various languages such as C ++, C # (Console and Windows Forms), Access databases, SQL, HTML, PHP. Participation in scientific communication session with micro and macro economy, management and digital marketing'
      }];
      var AWARDS = [{
        name: 'Rau-DevHack Hackathon',
        place: 2,
        date: 'Apr 2019',
        description: 'Creating an application to help users choose the most recommended photographer for their event, according to their visual preferences, budget and period, giving photographers easier management on the event calendar and applications.'
      }, {
        name: 'Web&Mobile Challenge at DevHacks',
        date: 'Nov 2018',
        place: 1,
        description: "\n      Our result should allows candidates from Romania the possibility to offer reviews/ratings to companies about key areas such as: recruitment process,  work environment (team, schedule, etc), trainings, learning and development opportunities, salary & benefits, work-life balance, management, internal systems (procedures, values, way of working), other relevant areas. The aim of this product is to help candidates find the employer that best suits their needs and personality, something different. The target audience of the product will be made up students and young professionals.\n      "
      }];
      var EXPERIENCE = [{
        companyName: 'Deloitte Digital',
        role: 'Frontend Developer / Consultant',
        dateStart: 'Oct 2021',
        dateEnd: 'Present',
        location: 'Bucharest, Romania',
        description: "\n            <h4>Assignment description:</h4>\n            <ul>\n            <li>I analyze and study the aspects of the program, decide the objectives to be achieved;</li>\n            <li>I design and implement quality applications, using technologies specific to each project, being up to date with news in the field;</li>\n            <li>I test the made product and I make the adequate documentation;</li>\n            <li>I perform maintenance for existing projects;</li>\n            <li>I make objective proposals for development and design;</li>\n            <li>I communicate with clients and their representatives, I identify clients' needs and propose optimal solutions to them, participating in all meetings;</li>\n            <li>I constantly participate in professional training courses and provide mentoring for other colleagues.</li>\n            </ul>\n            \uD83D\uDCBC Client 1 - United Arab Emirates<br>\n            \uD83D\uDDD3\uFE0F 10/2021 - to date<br>\n            \uD83C\uDFE6 Industry: Banking<br>\n            \uD83D\uDCBB Technologies: Angular, Sass, TypeScript, REST<br><br>\n            <h4>Assignment description:</h4>\n            <ul>\n            <li>Integrate <a href=\"https://www2.deloitte.com/uk/en/pages/financial-services/solutions/alphaplatform.html\">Alpha</a> platform;</li>\n            <li>Collaborate with back-end developers and web designers to improve usability.</li>\n            </ul>\n        ",
        companyLogo: '../assets/logos/deloitte.jpg',
        skill: ['Angular', 'Sass', 'TypeScript', 'REST', 'Jira']
      }, {
        companyName: 'IBM iX',
        role: 'Frontend Developer',
        dateStart: 'Dec 2018',
        dateEnd: 'Oct 2021',
        location: 'Bucharest, Romania',
        description: "\n            \uD83D\uDCBC Client 1 - Germany<br>\n            \uD83D\uDDD3\uFE0F 03/2019 - 03/2020<br>\n            \uD83C\uDFE6 Industry: Insurance<br>\n            \uD83D\uDCBB Technologies: Angular, Ionic, Sass, TypeScript, REST, Capacitor, RxJs<br><br>\n            <h4>Assignment description:</h4>\n            <ul>\n            <li>Develop Web based applications including UX design, application building and supporting solutions;</li>\n            <li>Collaborate with back-end developers and web designers to improve usability;</li>\n            <li>Get feedback from, and build solutions for, users and customers;</li>\n            <li>Create quality mockups and prototypes;</li>\n            <li>Stay up-to-date on emerging technologies;</li>\n            <li>Participate in shadowing sessions with Senior Frontend Developers in solving different problems;</li>\n            <li>Attended relevant courses for the knowledge used in my field;</li>\n            <li>Investigate and fixed vulnerabilities in packages.</li>\n            </ul>\n            <h4>Contribution:</h4>\n            <ul>\n            <li>Delivered a good quality presentation website for our client in order to present our projects to their customers, in a small amount of time so the client was able to see the results and to use it;</li>\n            <li>Investigated and solved some vulnerabilities from the applications;</li>\n            <li>Contributed actively on a project from march and until the end of November, by helping other colleagues with code review and implementing reusable components. I also helped taking decisions in business rules and in development process;</li>\n            <li>Participated in every meeting and decision in a proactive way in order to deliver a quality and clean code which meets the client requirements. I also suggested various changes to the design that was taken into account.</li>\n            </ul><br>\n            \uD83D\uDCBC Client 2 - United Kingdom<br>\n            \uD83D\uDDD3\uFE0F 03/2020 - 03/2020<br>\n            \uD83C\uDFEC Industry: Retail<br>\n            \uD83D\uDCBB Technologies: React.js<br><br>\n            <h4>Assignment description:</h4>\n            <ul>\n            <li>Redesigning the on-boarding process for non plastic material and packaging suppliers onto the materials library and reimagining the presentation and navigation of the library in parallel.</li>\n            </ul>\n            <h4>Contribution:</h4>\n            <ul>\n            <li>Participated in discussions with the design and front-end team in order to clarify and suggest edits so the user can have a better experience using the website;</li>\n            <li>Created reusable pages using React.js which corresponds to the design;</li>\n            <li>Created dynamic forms using Formik framework for the registration of new plastic free materials.</li>\n            </ul><br>\n            \uD83D\uDCBC Client 3 - United States<br>\n            \uD83D\uDDD3\uFE0F 04/2020 - 10/2021<br>\n            \uD83D\uDED2 Industry: E-Commerce<br>\n            \uD83D\uDCBB Technologies: Angular, Sass, TypeScript, REST, RxJs, Adobe Experience Manager, VirtualBox, JQuery, Unit Testing<br><br>\n            <h4>Assignment description:</h4>\n            <ul>\n            <li>Being a member of the a subdivision from the team and delivering features and quality code.</li>\n            </ul>\n            <h4>Contribution:</h4>\n            <ul>\n            <li>Created new components and features for the application in a way that we can reuse them when it's need;</li>\n            <li>Helped both design and development departments to take decisions in order to deliver the best features;</li>\n            <li>Learned better ways to solve the problems that appears during the development;</li>\n            <li>Delivered WYSIWYG (What You See Is What You Get), a feature that wants to improve the customer experience regarding the promotional codes.The first phase included changing the design of both coupons and product promotions, including more descriptive text and a user-friendly design, changes made throughout the application, on all banners. In the same phase was included the creation of the right drawer, which replaces the pop-up with the description of the promotion or the description page for it, being available by clicking on the link with the coupon / promotion details. If there are multiple promotions for a single product, they are displayed as a total, and will be described accordingly in the right drawer. The second phase includes the implementation of the new API response, which includes a new possibility to process the offers, displaying the requirement quantity, following that on the stores where the feature is activated, to display and if the offer has been completed and benefit from it. The new treatment system is visible both in the coupon design, in the mini-cart or in the top menu, in the right drawer and in the product page.</li>\n            </ul>\n        ",
        companyLogo: '../assets/logos/ibm.jpg',
        skill: ['Angular', 'Vagrant', 'Ionic', 'Sass', 'TypeScript', 'REST', 'Capacitor', 'RxJs', 'React.js', 'Adobe Experience Manager', 'Jira', 'Unit Testing']
      }, {
        companyName: 'Groupe Renault',
        role: 'Practicant - Drive your future',
        dateStart: 'Jun 2017',
        dateEnd: 'Sept 2017',
        location: 'Bucharest, Romania',
        companyLogo: '../assets/logos/renault.png',
        skill: ['Matlab']
      }, {
        companyName: 'Telekom Romania',
        role: 'Inbound Agent',
        dateStart: 'Feb 2016',
        dateEnd: 'Jun 2017',
        location: 'Bucharest, Romania',
        companyLogo: '../assets/logos/telekom.png',
        skill: ['Work under pressure', 'Adaptability', 'Multitasking']
      }];
      /***/
    },

    /***/
    "82IS":
    /*!*************************************************************!*\
      !*** ./src/app/directives/progress-bar-colors.directive.ts ***!
      \*************************************************************/

    /*! exports provided: ProgressBarColorsDirective */

    /***/
    function IS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgressBarColorsDirective", function () {
        return ProgressBarColorsDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var ProgressBarColorsDirective = /*#__PURE__*/function () {
        function ProgressBarColorsDirective(el) {
          _classCallCheck(this, ProgressBarColorsDirective);

          this.el = el;
          this.styleEl = document.createElement('style'); // generate unique attribute which we will use to minimize the scope of our dynamic style

          this.uniqueAttr = "app-progress-bar-color-".concat(ProgressBarColorsDirective.counter++);
          var nativeEl = this.el.nativeElement;
          nativeEl.setAttribute(this.uniqueAttr, '');
          nativeEl.appendChild(this.styleEl);
        }

        _createClass(ProgressBarColorsDirective, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.updateColor();
          }
        }, {
          key: "updateColor",
          value: function updateColor() {
            this.styleEl.innerText = "[".concat(this.uniqueAttr, "] .mat-progress-bar-fill::after {\n              background-color: ").concat(this.appProgressBarColors, ";\n          }");
          }
        }]);

        return ProgressBarColorsDirective;
      }();

      ProgressBarColorsDirective.counter = 0;

      ProgressBarColorsDirective.ɵfac = function ProgressBarColorsDirective_Factory(t) {
        return new (t || ProgressBarColorsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      ProgressBarColorsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: ProgressBarColorsDirective,
        selectors: [["", "appProgressBarColors", ""]],
        inputs: {
          appProgressBarColors: "appProgressBarColors"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressBarColorsDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[appProgressBarColors]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          appProgressBarColors: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
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

      /***/
    },

    /***/
    "G2Gn":
    /*!*********************************************************!*\
      !*** ./src/app/components/contact/contact.component.ts ***!
      \*********************************************************/

    /*! exports provided: ContactComponent */

    /***/
    function G2Gn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
        return ContactComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _custom_social_card_custom_social_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../custom-social-card/custom-social-card.component */
      "uMBx");

      var ContactComponent = /*#__PURE__*/function () {
        function ContactComponent() {
          _classCallCheck(this, ContactComponent);
        }

        _createClass(ContactComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ContactComponent;
      }();

      ContactComponent.ɵfac = function ContactComponent_Factory(t) {
        return new (t || ContactComponent)();
      };

      ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ContactComponent,
        selectors: [["app-contact"]],
        decls: 13,
        vars: 0,
        consts: [[1, "info-text"], [1, "social-wrapper"], ["text", "madalinaeleonora.gheorghe@gmail.com", "type", "email"], ["text", "/madalinaeleonorag", "type", "linkedin", "link", "https://www.linkedin.com/in/madalinaeleonorag/"], ["text", "/madalinaeleonorag", "type", "medium", "link", "https://madalinaeleonorag.medium.com/"], ["text", "/madalinaeleonorag", "type", "github", "link", "https://github.com/madalinaeleonorag"], ["text", "/madalinaeleonorag", "type", "instagram", "link", "https://www.instagram.com/madalinaeleonorag/"], ["text", "/madalinaeleonora", "type", "facebook", "link", "https://www.facebook.com/mdx.madalinaeleonora/"], ["text", "/madalinaeleonorag", "type", "paypal", "link", "https://www.paypal.com/paypalme/madalinaeleonorag"], ["text", "/madalinaeleonorag", "type", "500px", "link", "https://500px.com/p/madalinaeleonorag?view=galleries"], [1, "copyright"]],
        template: function ContactComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Let's be internet BFFs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-custom-social-card", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-custom-social-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-custom-social-card", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-custom-social-card", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-custom-social-card", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-custom-social-card", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-custom-social-card", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-custom-social-card", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\xA9 Madalina-Eleonora Gheorghe 2021");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_custom_social_card_custom_social_card_component__WEBPACK_IMPORTED_MODULE_1__["CustomSocialCardComponent"]],
        styles: ["app-contact {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  margin: 5vh 0 0 0;\n}\napp-contact .info-text {\n  color: var(--white);\n  padding: 10px 0px;\n  font-weight: bold;\n  font-size: 1.5rem;\n}\napp-contact .social-wrapper {\n  flex-flow: wrap;\n  place-content: center;\n  display: flex;\n}\napp-contact .copyright {\n  color: var(--primary);\n  padding: 10px;\n  font-size: smaller;\n  text-align-last: center;\n}\n@media (max-width: 850px) {\n  app-contact .info-text {\n    font-size: unset;\n  }\n  app-contact app-custom-social-card .border-btn {\n    margin: 0.1rem;\n  }\n  app-contact app-custom-social-card .border-btn__inner a span {\n    display: none;\n  }\n  app-contact app-custom-social-card .border-btn app-custom-svg .icon {\n    width: 25px;\n    height: 25px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBREY7QUFHRTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBREo7QUFJRTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7QUFGSjtBQUtFO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQUhKO0FBTUU7RUFDRTtJQUNFLGdCQUFBO0VBSko7RUFRSTtJQUNFLGNBQUE7RUFOTjtFQVVVO0lBQ0UsYUFBQTtFQVJaO0VBY1E7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQVpWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuYXBwLWNvbnRhY3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDV2aCAwIDAgMDtcclxuXHJcbiAgLmluZm8tdGV4dCB7XHJcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgLnNvY2lhbC13cmFwcGVyIHtcclxuICAgIGZsZXgtZmxvdzogd3JhcDtcclxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG5cclxuICAuY29weXJpZ2h0IHtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgICB0ZXh0LWFsaWduLWxhc3Q6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4NTBweCkge1xyXG4gICAgLmluZm8tdGV4dCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogdW5zZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgYXBwLWN1c3RvbS1zb2NpYWwtY2FyZCB7XHJcbiAgICAgIC5ib3JkZXItYnRuIHtcclxuICAgICAgICBtYXJnaW46IDAuMXJlbTtcclxuXHJcbiAgICAgICAgJl9faW5uZXIge1xyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFwcC1jdXN0b20tc3ZnIHtcclxuICAgICAgICAgIC5pY29uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-contact',
            templateUrl: './contact.component.html',
            styleUrls: ['./contact.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "HoFA":
    /*!***************************************************************!*\
      !*** ./src/app/components/custom-svg/custom-svg.component.ts ***!
      \***************************************************************/

    /*! exports provided: CustomSvgComponent */

    /***/
    function HoFA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomSvgComponent", function () {
        return CustomSvgComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      function CustomSvgComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
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
        }
      }

      function CustomSvgComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CustomSvgComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CustomSvgComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CustomSvgComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CustomSvgComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CustomSvgComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CustomSvgComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
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
        }
      }

      function CustomSvgComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
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
        }
      }

      function CustomSvgComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
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
        }
      }

      function CustomSvgComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
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
        }
      }

      function CustomSvgComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var CustomSvgComponent = /*#__PURE__*/function () {
        function CustomSvgComponent() {
          _classCallCheck(this, CustomSvgComponent);
        }

        _createClass(CustomSvgComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CustomSvgComponent;
      }();

      CustomSvgComponent.ɵfac = function CustomSvgComponent_Factory(t) {
        return new (t || CustomSvgComponent)();
      };

      CustomSvgComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CustomSvgComponent,
        selectors: [["app-custom-svg"]],
        inputs: {
          type: "type"
        },
        decls: 12,
        vars: 12,
        consts: [[4, "ngIf"], ["width", "25", "height", "25", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "52 42 88 66", 1, "icon"], ["d", "M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6"], ["d", "M120 108h14c3.32 0 6-2.69 6-6V59l-20 15"], ["d", "M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"], ["d", "M72 74V48l24 18 24-18v26L96 92"], ["d", "M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"], ["width", "25", "height", "25", "xmlns", "http://www.w3.org/2000/svg", "width", "25", "height", "25", "viewBox", "0 0 24 24", 1, "icon"], ["d", "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"], ["width", "25", "height", "25", "xmlns", "http://www.w3.org/2000/svg", "fill-rule", "evenodd", "clip-rule", "evenodd", 1, "icon"], ["d", "M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z"], ["xmlns", "http://www.w3.org/2000/svg", "width", "25", "height", "25", "viewBox", "0 0 24 24", 1, "icon"], ["width", "25", "height", "25", "d", "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z", 1, "icon"], ["d", "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"], ["d", "M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"], ["d", "M22 9.761c0 .536-.065 1.084-.169 1.627-.847 4.419-3.746 5.946-7.449 5.946h-.572c-.453 0-.838.334-.908.789l-.803 5.09c-.071.453-.456.787-.908.787h-2.736c-.39 0-.688-.348-.628-.732l1.386-8.88.062-.056h2.155c5.235 0 8.509-2.618 9.473-7.568.812.814 1.097 1.876 1.097 2.997zm-14.216 4.252c.116-.826.459-1.177 1.385-1.179l2.26-.002c4.574 0 7.198-2.09 8.023-6.39.8-4.134-2.102-6.442-6.031-6.442h-7.344c-.517 0-.958.382-1.038.901-2.304 14.835-2.97 18.607-3.038 19.758-.021.362.269.672.635.672h3.989l1.159-7.318z"], ["id", "Bold", "enable-background", "new 0 0 24 24", "viewBox", "0 0 24 24", "width", "25", "height", "25", "xmlns", "http://www.w3.org/2000/svg", 1, "icon"], ["d", "m7 13.859v9.391c0 .285.162.546.418.672.254.126.561.097.788-.077l3.794-2.901 3.794 2.901c.134.103.294.155.456.155.113 0 .227-.025.332-.078.256-.126.418-.387.418-.672v-9.391c-1.405 1.027-3.13 1.641-5 1.641s-3.595-.614-5-1.641z"], ["d", "m12 0c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 10.25c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-4.792c-.292-.104-.5-.381-.5-.708 0-.414.336-.75.75-.75h.5c.414 0 .75.336.75.75z"], ["d", "m12 0c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1.25 9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-2.5c-.414 0-.75-.336-.75-.75v-1.375c0-1.172.897-2.125 2-2.125.271 0 .5-.286.5-.625s-.229-.625-.5-.625h-1.25c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.25c1.103 0 2 .953 2 2.125s-.897 2.125-2 2.125c-.271 0-.5.286-.5.625v.625z"], ["d", "m5.96 12.98-3.87 6.95c-.13.24-.12.54.03.77s.41.37.69.34l3.08-.23 1.36 2.77c.13.25.38.41.65.42h.02c.27 0 .53-.15.66-.38l2.52-4.48-2.45-4.33c-1.01-.43-1.92-1.06-2.69-1.83z"], ["d", "m21.9 19.93-3.9-6.91c-1.27 1.27-2.94 2.13-4.8 2.39-.39.06-.79.09-1.2.09-.44 0-.87-.03-1.29-.1l1.25 2.21 3.39 6.01c.13.23.38.38.65.38h.02c.28-.01.53-.17.66-.42l1.37-2.77 3.14.24c.28.02.54-.11.69-.35.15-.23.16-.53.02-.77z"], ["id", "Bold", "enable-background", "new 0 0 24 24", "width", "25", "height", "25", "viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg", 1, "icon"], ["d", "m12 0c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm2 7.5v1.833c0 .919-.71 1.667-1.583 1.667h-1.667c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.667c.021 0 .083-.059.083-.167v-1.083h-1.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.75v-1.083c0-.107-.062-.167-.083-.167h-1.667c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.667c.873 0 1.583.748 1.583 1.667z"], ["d", "m12 0c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm3.787 6.757-1.361 1.395.323 1.978c.046.283-.073.568-.309.734-.128.09-.28.136-.431.136-.125 0-.25-.031-.363-.094l-1.646-.909-1.646.91c-.251.139-.561.123-.795-.043-.235-.166-.354-.451-.309-.734l.323-1.978-1.36-1.395c-.196-.201-.264-.496-.174-.762.089-.267.319-.46.598-.503l1.851-.283.834-1.777c.246-.527 1.111-.527 1.357 0l.834 1.777 1.851.283c.278.042.509.236.598.503.089.266.021.561-.175.762z"], ["width", "25", "height", "25", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "version", "1.1", "id", "Layer_1", "x", "0px", "y", "0px", "viewBox", "0 0 305 305", 0, "xml", "space", "preserve", 1, "icon", 2, "enable-background", "new 0 0 305 305"], ["id", "XMLID_455_"], ["id", "XMLID_458_", "d", "M254.773,118.227c-29.076,0-47.951,22.781-54.153,30.267c-0.045,0.055-0.091,0.11-0.137,0.165   c-0.04-0.049-0.08-0.097-0.119-0.145c-6.182-7.491-24.991-30.287-54.303-30.287c-19.289,0-34.163,9.72-44.242,28.899   c-8.588-15.419-21.261-23.232-37.703-23.232c-13.762,0-21.114,3.656-25.234,6.855c0.822-5.127,2.112-13.014,3.859-23.262h55.846   c1.381,0,2.5-1.119,2.5-2.5V82.321c0-1.381-1.119-2.5-2.5-2.5h-78.41c-1.215,0-2.254,0.873-2.463,2.07l-13.258,75.93   c-0.127,0.727,0.074,1.474,0.549,2.039c0.476,0.565,1.176,0.892,1.914,0.892h25.379c0.917,0,1.76-0.502,2.197-1.308   c0.051-0.094,5.258-9.396,19.016-9.396c14.606,0,22.248,11.411,22.248,22.684c0,12.016-9.515,25.454-22.248,25.454   c-12.532,0-20.228-10.719-20.228-18.403c0-1.381-1.119-2.5-2.5-2.5H2.5c-1.381,0-2.5,1.119-2.5,2.5   c0,4.918,1.923,15.876,9.129,25.755c6.536,8.961,19.541,19.642,44.381,19.642c28.598,0,43.368-16.391,48.603-26.428   c5.636,9.817,20.028,26.428,43.947,26.428c29.243,0,46.779-20.657,53.382-28.433c0.371-0.438,0.763-0.899,1.116-1.306   c0.475,0.492,1.026,1.079,1.544,1.63c7.22,7.688,26.398,28.109,52.67,28.109c31.44,0,50.227-27.307,50.227-53.707   c0-13.186-4.34-26.202-11.907-35.712C283.965,124.29,270.714,118.227,254.773,118.227z M254.994,193.137   c-13.944,0-29.453-16.033-34.087-21.199c4.634-5.166,20.143-21.199,34.087-21.199c18.277,0,18.807,20.982,18.807,21.203   C273.801,172.154,273.272,193.137,254.994,193.137z M146.219,193.137c-18.278,0-18.808-20.982-18.808-21.198v-0.005h0.001   c0-0.212,0.525-21.194,18.807-21.194c13.884,0,29.429,16.028,34.082,21.199C175.652,177.105,160.105,193.137,146.219,193.137z"]],
        template: function CustomSvgComponent_Template(rf, ctx) {
          if (rf & 1) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CustomSvgComponent_div_11_Template, 4, 0, "div", 0);
          }

          if (rf & 2) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "500px");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: ["app-custom-svg .icon {\n  fill: var(--white);\n  width: 25px;\n  height: 25px;\n}\napp-custom-svg .icon:hover {\n  fill: var(--primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdXN0b20tc3ZnL2N1c3RvbS1zdmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRko7QUFLRTtFQUNFLG9CQUFBO0FBSEoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2N1c3RvbS1zdmcvY3VzdG9tLXN2Zy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuYXBwLWN1c3RvbS1zdmcge1xyXG4gIC5pY29uIHtcclxuICAgIGZpbGw6IHZhcigtLXdoaXRlKTtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gIH1cclxuXHJcbiAgLmljb246aG92ZXIge1xyXG4gICAgZmlsbDogdmFyKC0tcHJpbWFyeSk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomSvgComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-custom-svg',
            templateUrl: './custom-svg.component.html',
            styleUrls: ['./custom-svg.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [];
        }, {
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "PUJg":
    /*!*******************************!*\
      !*** ./src/app/data.model.ts ***!
      \*******************************/

    /*! exports provided: ProjectModel, SkillModel, CertificationModel, EducationModel, AwardModel, PublicationModel, ExperienceModel */

    /***/
    function PUJg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectModel", function () {
        return ProjectModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SkillModel", function () {
        return SkillModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CertificationModel", function () {
        return CertificationModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EducationModel", function () {
        return EducationModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AwardModel", function () {
        return AwardModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PublicationModel", function () {
        return PublicationModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExperienceModel", function () {
        return ExperienceModel;
      });

      var ProjectModel = function ProjectModel(data) {
        _classCallCheck(this, ProjectModel);

        Object.assign(this, data);
      };

      var SkillModel = function SkillModel() {
        _classCallCheck(this, SkillModel);
      };

      var CertificationModel = function CertificationModel() {
        _classCallCheck(this, CertificationModel);
      };

      var EducationModel = function EducationModel() {
        _classCallCheck(this, EducationModel);
      };

      var AwardModel = function AwardModel() {
        _classCallCheck(this, AwardModel);
      };

      var PublicationModel = function PublicationModel() {
        _classCallCheck(this, PublicationModel);
      };

      var ExperienceModel = function ExperienceModel() {
        _classCallCheck(this, ExperienceModel);
      };
      /***/

    },

    /***/
    "QrEi":
    /*!*******************************************************!*\
      !*** ./src/app/components/awards/awards.component.ts ***!
      \*******************************************************/

    /*! exports provided: AwardsComponent */

    /***/
    function QrEi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AwardsComponent", function () {
        return AwardsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _custom_svg_custom_svg_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../custom-svg/custom-svg.component */
      "HoFA");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      function AwardsComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.award.date, " ");
        }
      }

      function AwardsComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 8);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r1.award.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      var AwardsComponent = /*#__PURE__*/function () {
        function AwardsComponent() {
          _classCallCheck(this, AwardsComponent);
        }

        _createClass(AwardsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
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
        }]);

        return AwardsComponent;
      }();

      AwardsComponent.ɵfac = function AwardsComponent_Factory(t) {
        return new (t || AwardsComponent)();
      };

      AwardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AwardsComponent,
        selectors: [["app-awards"]],
        inputs: {
          award: "award"
        },
        decls: 8,
        vars: 4,
        consts: [[1, "award-wrapper"], [1, "header"], [1, "summary"], [3, "type"], [1, "name"], ["class", "date", 4, "ngIf"], ["class", "description", 3, "innerHTML", 4, "ngIf"], [1, "date"], [1, "description", 3, "innerHTML"]],
        template: function AwardsComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.place);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.award.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.award.date);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.award.description);
          }
        },
        directives: [_custom_svg_custom_svg_component__WEBPACK_IMPORTED_MODULE_1__["CustomSvgComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        styles: ["app-awards .award-wrapper .header {\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  padding-bottom: 10px;\n  justify-content: center;\n  text-align: center;\n}\napp-awards .award-wrapper .header .summary {\n  display: flex;\n  flex-flow: column;\n  padding: 10px 0;\n}\napp-awards .award-wrapper .header .summary img {\n  height: 15vh;\n}\napp-awards .award-wrapper .header .summary .name {\n  font-weight: bold;\n  font-size: 1.5rem;\n  color: var(--primary);\n  margin: 10px 0;\n}\napp-awards .award-wrapper .header .summary .date {\n  font-weight: bold;\n  color: var(--lightgray);\n}\napp-awards .award-wrapper .description {\n  line-height: 1.5rem;\n  text-align: center;\n}\n@media (max-width: 800px) {\n  app-awards .award-wrapper .header {\n    flex-flow: wrap;\n  }\n  app-awards .award-wrapper .description {\n    padding: 0 5vw;\n    font-size: smaller;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hd2FyZHMvYXdhcmRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUZKO0FBSUk7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBRk47QUFJTTtFQUNFLFlBQUE7QUFGUjtBQUtNO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQUhSO0FBTU07RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0FBSlI7QUFTRTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUFQSjtBQVVFO0VBQ0U7SUFDRSxlQUFBO0VBUko7RUFVRTtJQUNFLGNBQUE7SUFDQSxrQkFBQTtFQVJKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2F3YXJkcy9hd2FyZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmFwcC1hd2FyZHMgLmF3YXJkLXdyYXBwZXIge1xyXG4gIC5oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgLnN1bW1hcnkge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgICAgcGFkZGluZzogMTBweCAwO1xyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDE1dmg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5uYW1lIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kYXRlIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogdmFyKC0tbGlnaHRncmF5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmRlc2NyaXB0aW9uIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIC5oZWFkZXIge1xyXG4gICAgICBmbGV4LWZsb3c6IHdyYXA7XHJcbiAgICB9XHJcbiAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICBwYWRkaW5nOiAwIDV2dztcclxuICAgICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AwardsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-awards',
            templateUrl: './awards.component.html',
            styleUrls: ['./awards.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [];
        }, {
          award: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _commons_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./commons.service */
      "zZLy");
      /* harmony import */


      var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/header/header.component */
      "2MiI");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(commonsService, el) {
          _classCallCheck(this, AppComponent);

          this.commonsService = commonsService;
          this.el = el;
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.commonsService.getDataFromAPIs();
            this.commonsService.cookieConsoleMessage();
            this.commonsService.changeTheme$.subscribe(function (isDarkTheme) {
              if (isDarkTheme === true) {
                localStorage.setItem('theme', 'dark');

                _this3.el.nativeElement.style.setProperty('--black', ' #170404');

                _this3.el.nativeElement.style.setProperty('--white', ' #fff');

                _this3.el.nativeElement.style.setProperty('--background', ' #1c0505');

                _this3.el.nativeElement.style.setProperty('--darkPrimary', ' #fcdede');

                _this3.el.nativeElement.style.setProperty('--lightgray', ' #621111');
              } else {
                localStorage.setItem('theme', 'light');

                _this3.el.nativeElement.style.setProperty('--black', ' #fff');

                _this3.el.nativeElement.style.setProperty('--white', ' #170404');

                _this3.el.nativeElement.style.setProperty('--background', '#fffafa');

                _this3.el.nativeElement.style.setProperty('--darkPrimary', '#621111');

                _this3.el.nativeElement.style.setProperty('--lightgray', '#fcdede');
              }

              ;
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_commons_service__WEBPACK_IMPORTED_MODULE_1__["CommonsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 4,
        vars: 0,
        consts: [[1, "body"], [1, "component-wrapper"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
        styles: [":root {\n  --black: #170404;\n  --darkPrimary: #621111;\n  --lightgray: #fcdede;\n  --white: #fff;\n  --primary: #d02929;\n  --background: #1c0505;\n}\n\n/* Colors for the ripple elements.*/\n\n/* stylelint-disable-next-line material/theme-mixin-api */\n\n/* stylelint-disable-next-line material/theme-mixin-api */\n\n/* stylelint-disable material/no-prefixes */\n\n/* stylelint-enable */\n\n.mat-badge-content {\n  font-weight: 600;\n  font-size: 12px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n.mat-badge-small .mat-badge-content {\n  font-size: 9px;\n}\n\n.mat-badge-large .mat-badge-content {\n  font-size: 24px;\n}\n\n.mat-h1, .mat-headline, .mat-typography h1 {\n  font: 400 24px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n  margin: 0 0 16px;\n}\n\n.mat-h2, .mat-title, .mat-typography h2 {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n  margin: 0 0 16px;\n}\n\n.mat-h3, .mat-subheading-2, .mat-typography h3 {\n  font: 400 16px/28px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n  margin: 0 0 16px;\n}\n\n.mat-h4, .mat-subheading-1, .mat-typography h4 {\n  font: 400 15px/24px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n  margin: 0 0 16px;\n}\n\n.mat-h5, .mat-typography h5 {\n  font: 400 calc(14px * 0.83)/20px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 12px;\n}\n\n.mat-h6, .mat-typography h6 {\n  font: 400 calc(14px * 0.67)/20px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 12px;\n}\n\n.mat-body-strong, .mat-body-2 {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n}\n\n.mat-body, .mat-body-1, .mat-typography {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n}\n\n.mat-body p, .mat-body-1 p, .mat-typography p {\n  margin: 0 0 12px;\n}\n\n.mat-small, .mat-caption {\n  font: 400 12px/20px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n}\n\n.mat-display-4, .mat-typography .mat-display-4 {\n  font: 300 112px/112px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: -0.05em;\n  margin: 0 0 56px;\n}\n\n.mat-display-3, .mat-typography .mat-display-3 {\n  font: 400 56px/56px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: -0.02em;\n  margin: 0 0 64px;\n}\n\n.mat-display-2, .mat-typography .mat-display-2 {\n  font: 400 45px/48px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: -0.005em;\n  margin: 0 0 64px;\n}\n\n.mat-display-1, .mat-typography .mat-display-1 {\n  font: 400 34px/40px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n  margin: 0 0 64px;\n}\n\n.mat-bottom-sheet-container {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n}\n\n.mat-button, .mat-raised-button, .mat-icon-button, .mat-stroked-button,\n.mat-flat-button, .mat-fab, .mat-mini-fab {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.mat-button-toggle {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n.mat-card {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n.mat-card-title {\n  font-size: 24px;\n  font-weight: 500;\n}\n\n.mat-card-header .mat-card-title {\n  font-size: 20px;\n}\n\n.mat-card-subtitle,\n.mat-card-content {\n  font-size: 14px;\n}\n\n.mat-checkbox {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n.mat-checkbox-layout .mat-checkbox-label {\n  line-height: 24px;\n}\n\n.mat-chip {\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.mat-chip .mat-chip-trailing-icon.mat-icon,\n.mat-chip .mat-chip-remove.mat-icon {\n  font-size: 18px;\n}\n\n.mat-table {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n.mat-header-cell {\n  font-size: 12px;\n  font-weight: 500;\n}\n\n.mat-cell, .mat-footer-cell {\n  font-size: 14px;\n}\n\n.mat-calendar {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n.mat-calendar-body {\n  font-size: 13px;\n}\n\n.mat-calendar-body-label,\n.mat-calendar-period-button {\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.mat-calendar-table-header th {\n  font-size: 11px;\n  font-weight: 400;\n}\n\n.mat-dialog-title {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n}\n\n.mat-expansion-panel-header {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 15px;\n  font-weight: 400;\n}\n\n.mat-expansion-panel-content {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n}\n\n.mat-form-field {\n  font-size: inherit;\n  font-weight: 400;\n  line-height: 1.125;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n}\n\n.mat-form-field-wrapper {\n  padding-bottom: 1.34375em;\n}\n\n.mat-form-field-prefix .mat-icon,\n.mat-form-field-suffix .mat-icon {\n  font-size: 150%;\n  line-height: 1.125;\n}\n\n.mat-form-field-prefix .mat-icon-button,\n.mat-form-field-suffix .mat-icon-button {\n  height: 1.5em;\n  width: 1.5em;\n}\n\n.mat-form-field-prefix .mat-icon-button .mat-icon,\n.mat-form-field-suffix .mat-icon-button .mat-icon {\n  height: 1.125em;\n  line-height: 1.125;\n}\n\n.mat-form-field-infix {\n  padding: 0.5em 0;\n  border-top: 0.84375em solid transparent;\n}\n\n.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n  transform: translateY(-1.34375em) scale(0.75);\n  width: 133.3333333333%;\n}\n\n.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper .mat-form-field-label {\n  transform: translateY(-1.34374em) scale(0.75);\n  width: 133.3333433333%;\n}\n\n.mat-form-field-label-wrapper {\n  top: -0.84375em;\n  padding-top: 0.84375em;\n}\n\n.mat-form-field-label {\n  top: 1.34375em;\n}\n\n.mat-form-field-underline {\n  bottom: 1.34375em;\n}\n\n.mat-form-field-subscript-wrapper {\n  font-size: 75%;\n  margin-top: 0.6666666667em;\n  top: calc(100% - 1.7916666667em);\n}\n\n.mat-form-field-appearance-legacy .mat-form-field-wrapper {\n  padding-bottom: 1.25em;\n}\n\n.mat-form-field-appearance-legacy .mat-form-field-infix {\n  padding: 0.4375em 0;\n}\n\n.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n  transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n  -ms-transform: translateY(-1.28125em) scale(0.75);\n  width: 133.3333333333%;\n}\n\n.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill + .mat-form-field-label-wrapper .mat-form-field-label {\n  transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00101px);\n  -ms-transform: translateY(-1.28124em) scale(0.75);\n  width: 133.3333433333%;\n}\n\n.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper .mat-form-field-label {\n  transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00102px);\n  -ms-transform: translateY(-1.28123em) scale(0.75);\n  width: 133.3333533333%;\n}\n\n.mat-form-field-appearance-legacy .mat-form-field-label {\n  top: 1.28125em;\n}\n\n.mat-form-field-appearance-legacy .mat-form-field-underline {\n  bottom: 1.25em;\n}\n\n.mat-form-field-appearance-legacy .mat-form-field-subscript-wrapper {\n  margin-top: 0.5416666667em;\n  top: calc(100% - 1.6666666667em);\n}\n\n@media print {\n  .mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n    transform: translateY(-1.28122em) scale(0.75);\n  }\n  .mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill + .mat-form-field-label-wrapper .mat-form-field-label {\n    transform: translateY(-1.28121em) scale(0.75);\n  }\n  .mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper .mat-form-field-label {\n    transform: translateY(-1.2812em) scale(0.75);\n  }\n}\n\n.mat-form-field-appearance-fill .mat-form-field-infix {\n  padding: 0.25em 0 0.75em 0;\n}\n\n.mat-form-field-appearance-fill .mat-form-field-label {\n  top: 1.09375em;\n  margin-top: -0.5em;\n}\n\n.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n  transform: translateY(-0.59375em) scale(0.75);\n  width: 133.3333333333%;\n}\n\n.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper .mat-form-field-label {\n  transform: translateY(-0.59374em) scale(0.75);\n  width: 133.3333433333%;\n}\n\n.mat-form-field-appearance-outline .mat-form-field-infix {\n  padding: 1em 0 1em 0;\n}\n\n.mat-form-field-appearance-outline .mat-form-field-label {\n  top: 1.84375em;\n  margin-top: -0.25em;\n}\n\n.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n  transform: translateY(-1.59375em) scale(0.75);\n  width: 133.3333333333%;\n}\n\n.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper .mat-form-field-label {\n  transform: translateY(-1.59374em) scale(0.75);\n  width: 133.3333433333%;\n}\n\n.mat-grid-tile-header,\n.mat-grid-tile-footer {\n  font-size: 14px;\n}\n\n.mat-grid-tile-header .mat-line,\n.mat-grid-tile-footer .mat-line {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  box-sizing: border-box;\n}\n\n.mat-grid-tile-header .mat-line:nth-child(n+2),\n.mat-grid-tile-footer .mat-line:nth-child(n+2) {\n  font-size: 12px;\n}\n\ninput.mat-input-element {\n  margin-top: -0.0625em;\n}\n\n.mat-menu-item {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.mat-paginator,\n.mat-paginator-page-size .mat-select-trigger {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n}\n\n.mat-radio-button {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n.mat-select {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n.mat-select-trigger {\n  height: 1.125em;\n}\n\n.mat-slide-toggle-content {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n.mat-slider-thumb-label-text {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n}\n\n.mat-stepper-vertical, .mat-stepper-horizontal {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n.mat-step-label {\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.mat-step-sub-label-error {\n  font-weight: normal;\n}\n\n.mat-step-label-error {\n  font-size: 14px;\n}\n\n.mat-step-label-selected {\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.mat-tab-group {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n.mat-tab-label, .mat-tab-link {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.mat-toolbar,\n.mat-toolbar h1,\n.mat-toolbar h2,\n.mat-toolbar h3,\n.mat-toolbar h4,\n.mat-toolbar h5,\n.mat-toolbar h6 {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n  margin: 0;\n}\n\n.mat-tooltip {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 10px;\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\n\n.mat-tooltip-handset {\n  font-size: 14px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n\n.mat-list-item {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n.mat-list-option {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n.mat-list-base .mat-list-item {\n  font-size: 16px;\n}\n\n.mat-list-base .mat-list-item .mat-line {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  box-sizing: border-box;\n}\n\n.mat-list-base .mat-list-item .mat-line:nth-child(n+2) {\n  font-size: 14px;\n}\n\n.mat-list-base .mat-list-option {\n  font-size: 16px;\n}\n\n.mat-list-base .mat-list-option .mat-line {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  box-sizing: border-box;\n}\n\n.mat-list-base .mat-list-option .mat-line:nth-child(n+2) {\n  font-size: 14px;\n}\n\n.mat-list-base .mat-subheader {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.mat-list-base[dense] .mat-list-item {\n  font-size: 12px;\n}\n\n.mat-list-base[dense] .mat-list-item .mat-line {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  box-sizing: border-box;\n}\n\n.mat-list-base[dense] .mat-list-item .mat-line:nth-child(n+2) {\n  font-size: 12px;\n}\n\n.mat-list-base[dense] .mat-list-option {\n  font-size: 12px;\n}\n\n.mat-list-base[dense] .mat-list-option .mat-line {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  box-sizing: border-box;\n}\n\n.mat-list-base[dense] .mat-list-option .mat-line:nth-child(n+2) {\n  font-size: 12px;\n}\n\n.mat-list-base[dense] .mat-subheader {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n}\n\n.mat-option {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px;\n}\n\n.mat-optgroup-label {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n}\n\n.mat-simple-snackbar {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n}\n\n.mat-simple-snackbar-action {\n  line-height: 1;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 500;\n}\n\n.mat-tree {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n.mat-tree-node,\n.mat-nested-tree-node {\n  font-weight: 400;\n  font-size: 14px;\n}\n\n.mat-ripple {\n  overflow: hidden;\n  position: relative;\n}\n\n.mat-ripple:not(:empty) {\n  transform: translateZ(0);\n}\n\n.mat-ripple.mat-ripple-unbounded {\n  overflow: visible;\n}\n\n.mat-ripple-element {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transform: scale(0);\n}\n\n.cdk-high-contrast-active .mat-ripple-element {\n  display: none;\n}\n\n.cdk-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  outline: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\n\n.cdk-overlay-container, .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.cdk-overlay-container {\n  position: fixed;\n  z-index: 1000;\n}\n\n.cdk-overlay-container:empty {\n  display: none;\n}\n\n.cdk-global-overlay-wrapper {\n  display: flex;\n  position: absolute;\n  z-index: 1000;\n}\n\n.cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000;\n  display: flex;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.cdk-overlay-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0;\n}\n\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n  opacity: 1;\n}\n\n@media screen and (-ms-high-contrast: active) {\n  .cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n    opacity: 0.6;\n  }\n}\n\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.32);\n}\n\n.cdk-overlay-transparent-backdrop, .cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing {\n  opacity: 0;\n}\n\n.cdk-overlay-connected-position-bounding-box {\n  position: absolute;\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  min-width: 1px;\n  min-height: 1px;\n}\n\n.cdk-global-scrollblock {\n  position: fixed;\n  width: 100%;\n  overflow-y: scroll;\n}\n\n@keyframes cdk-text-field-autofill-start {\n  /*!*/\n}\n\n@keyframes cdk-text-field-autofill-end {\n  /*!*/\n}\n\n.cdk-text-field-autofill-monitored:-webkit-autofill {\n  animation: cdk-text-field-autofill-start 0s 1ms;\n}\n\n.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {\n  animation: cdk-text-field-autofill-end 0s 1ms;\n}\n\ntextarea.cdk-textarea-autosize {\n  resize: none;\n}\n\ntextarea.cdk-textarea-autosize-measuring {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: auto !important;\n  overflow: hidden !important;\n}\n\ntextarea.cdk-textarea-autosize-measuring-firefox {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: 0 !important;\n}\n\n.mat-focus-indicator {\n  position: relative;\n}\n\n.mat-mdc-focus-indicator {\n  position: relative;\n}\n\n.mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\n.mat-option {\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.mat-option:hover:not(.mat-option-disabled), .mat-option:focus:not(.mat-option-disabled) {\n  background: rgba(0, 0, 0, 0.04);\n}\n\n.mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled) {\n  background: rgba(0, 0, 0, 0.04);\n}\n\n.mat-option.mat-active {\n  background: rgba(0, 0, 0, 0.04);\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.mat-option.mat-option-disabled {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #3f51b5;\n}\n\n.mat-accent .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #ff4081;\n}\n\n.mat-warn .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #f44336;\n}\n\n.mat-optgroup-label {\n  color: rgba(0, 0, 0, 0.54);\n}\n\n.mat-optgroup-disabled .mat-optgroup-label {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.mat-pseudo-checkbox {\n  color: rgba(0, 0, 0, 0.54);\n}\n\n.mat-pseudo-checkbox::after {\n  color: #fafafa;\n}\n\n.mat-pseudo-checkbox-disabled {\n  color: #b0b0b0;\n}\n\n.mat-primary .mat-pseudo-checkbox-checked,\n.mat-primary .mat-pseudo-checkbox-indeterminate {\n  background: #3f51b5;\n}\n\n.mat-pseudo-checkbox-checked,\n.mat-pseudo-checkbox-indeterminate,\n.mat-accent .mat-pseudo-checkbox-checked,\n.mat-accent .mat-pseudo-checkbox-indeterminate {\n  background: #ff4081;\n}\n\n.mat-warn .mat-pseudo-checkbox-checked,\n.mat-warn .mat-pseudo-checkbox-indeterminate {\n  background: #f44336;\n}\n\n.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,\n.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {\n  background: #b0b0b0;\n}\n\n.mat-app-background {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.mat-elevation-z0 {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-elevation-z1 {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-elevation-z2 {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-elevation-z3 {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-elevation-z4 {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-elevation-z5 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-elevation-z6 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-elevation-z7 {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12);\n}\n\n.mat-elevation-z8 {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.mat-elevation-z9 {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12);\n}\n\n.mat-elevation-z10 {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12);\n}\n\n.mat-elevation-z11 {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12);\n}\n\n.mat-elevation-z12 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);\n}\n\n.mat-elevation-z13 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12);\n}\n\n.mat-elevation-z14 {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12);\n}\n\n.mat-elevation-z15 {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12);\n}\n\n.mat-elevation-z16 {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n}\n\n.mat-elevation-z17 {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12);\n}\n\n.mat-elevation-z18 {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12);\n}\n\n.mat-elevation-z19 {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12);\n}\n\n.mat-elevation-z20 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12);\n}\n\n.mat-elevation-z21 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12);\n}\n\n.mat-elevation-z22 {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12);\n}\n\n.mat-elevation-z23 {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12);\n}\n\n.mat-elevation-z24 {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n}\n\n.mat-theme-loaded-marker {\n  display: none;\n}\n\n.mat-autocomplete-panel {\n  background: white;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.mat-autocomplete-panel:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover) {\n  background: white;\n}\n\n.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled) {\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.mat-badge-content {\n  color: white;\n  background: #3f51b5;\n}\n\n.cdk-high-contrast-active .mat-badge-content {\n  outline: solid 1px;\n  border-radius: 0;\n}\n\n.mat-badge-accent .mat-badge-content {\n  background: #ff4081;\n  color: white;\n}\n\n.mat-badge-warn .mat-badge-content {\n  color: white;\n  background: #f44336;\n}\n\n.mat-badge {\n  position: relative;\n}\n\n.mat-badge-hidden .mat-badge-content {\n  display: none;\n}\n\n.mat-badge-disabled .mat-badge-content {\n  background: #b9b9b9;\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.mat-badge-content {\n  position: absolute;\n  text-align: center;\n  display: inline-block;\n  border-radius: 50%;\n  transition: transform 200ms ease-in-out;\n  transform: scale(0.6);\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  pointer-events: none;\n}\n\n.ng-animate-disabled .mat-badge-content,\n.mat-badge-content._mat-animation-noopable {\n  transition: none;\n}\n\n.mat-badge-content.mat-badge-active {\n  transform: none;\n}\n\n.mat-badge-small .mat-badge-content {\n  width: 16px;\n  height: 16px;\n  line-height: 16px;\n}\n\n.mat-badge-small.mat-badge-above .mat-badge-content {\n  top: -8px;\n}\n\n.mat-badge-small.mat-badge-below .mat-badge-content {\n  bottom: -8px;\n}\n\n.mat-badge-small.mat-badge-before .mat-badge-content {\n  left: -16px;\n}\n\n[dir=rtl] .mat-badge-small.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -16px;\n}\n\n.mat-badge-small.mat-badge-after .mat-badge-content {\n  right: -16px;\n}\n\n[dir=rtl] .mat-badge-small.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -16px;\n}\n\n.mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: -8px;\n}\n\n[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -8px;\n}\n\n.mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: -8px;\n}\n\n[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -8px;\n}\n\n.mat-badge-medium .mat-badge-content {\n  width: 22px;\n  height: 22px;\n  line-height: 22px;\n}\n\n.mat-badge-medium.mat-badge-above .mat-badge-content {\n  top: -11px;\n}\n\n.mat-badge-medium.mat-badge-below .mat-badge-content {\n  bottom: -11px;\n}\n\n.mat-badge-medium.mat-badge-before .mat-badge-content {\n  left: -22px;\n}\n\n[dir=rtl] .mat-badge-medium.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -22px;\n}\n\n.mat-badge-medium.mat-badge-after .mat-badge-content {\n  right: -22px;\n}\n\n[dir=rtl] .mat-badge-medium.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -22px;\n}\n\n.mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: -11px;\n}\n\n[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -11px;\n}\n\n.mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: -11px;\n}\n\n[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -11px;\n}\n\n.mat-badge-large .mat-badge-content {\n  width: 28px;\n  height: 28px;\n  line-height: 28px;\n}\n\n.mat-badge-large.mat-badge-above .mat-badge-content {\n  top: -14px;\n}\n\n.mat-badge-large.mat-badge-below .mat-badge-content {\n  bottom: -14px;\n}\n\n.mat-badge-large.mat-badge-before .mat-badge-content {\n  left: -28px;\n}\n\n[dir=rtl] .mat-badge-large.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -28px;\n}\n\n.mat-badge-large.mat-badge-after .mat-badge-content {\n  right: -28px;\n}\n\n[dir=rtl] .mat-badge-large.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -28px;\n}\n\n.mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: -14px;\n}\n\n[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -14px;\n}\n\n.mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: -14px;\n}\n\n[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -14px;\n}\n\n.mat-bottom-sheet-container {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n  background: white;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.mat-button, .mat-icon-button, .mat-stroked-button {\n  color: inherit;\n  background: transparent;\n}\n\n.mat-button.mat-primary, .mat-icon-button.mat-primary, .mat-stroked-button.mat-primary {\n  color: #3f51b5;\n}\n\n.mat-button.mat-accent, .mat-icon-button.mat-accent, .mat-stroked-button.mat-accent {\n  color: #ff4081;\n}\n\n.mat-button.mat-warn, .mat-icon-button.mat-warn, .mat-stroked-button.mat-warn {\n  color: #f44336;\n}\n\n.mat-button.mat-primary.mat-button-disabled, .mat-button.mat-accent.mat-button-disabled, .mat-button.mat-warn.mat-button-disabled, .mat-button.mat-button-disabled.mat-button-disabled, .mat-icon-button.mat-primary.mat-button-disabled, .mat-icon-button.mat-accent.mat-button-disabled, .mat-icon-button.mat-warn.mat-button-disabled, .mat-icon-button.mat-button-disabled.mat-button-disabled, .mat-stroked-button.mat-primary.mat-button-disabled, .mat-stroked-button.mat-accent.mat-button-disabled, .mat-stroked-button.mat-warn.mat-button-disabled, .mat-stroked-button.mat-button-disabled.mat-button-disabled {\n  color: rgba(0, 0, 0, 0.26);\n}\n\n.mat-button.mat-primary .mat-button-focus-overlay, .mat-icon-button.mat-primary .mat-button-focus-overlay, .mat-stroked-button.mat-primary .mat-button-focus-overlay {\n  background-color: #3f51b5;\n}\n\n.mat-button.mat-accent .mat-button-focus-overlay, .mat-icon-button.mat-accent .mat-button-focus-overlay, .mat-stroked-button.mat-accent .mat-button-focus-overlay {\n  background-color: #ff4081;\n}\n\n.mat-button.mat-warn .mat-button-focus-overlay, .mat-icon-button.mat-warn .mat-button-focus-overlay, .mat-stroked-button.mat-warn .mat-button-focus-overlay {\n  background-color: #f44336;\n}\n\n.mat-button.mat-button-disabled .mat-button-focus-overlay, .mat-icon-button.mat-button-disabled .mat-button-focus-overlay, .mat-stroked-button.mat-button-disabled .mat-button-focus-overlay {\n  background-color: transparent;\n}\n\n.mat-button .mat-ripple-element, .mat-icon-button .mat-ripple-element, .mat-stroked-button .mat-ripple-element {\n  opacity: 0.1;\n  background-color: currentColor;\n}\n\n.mat-button-focus-overlay {\n  background: black;\n}\n\n.mat-stroked-button:not(.mat-button-disabled) {\n  border-color: rgba(0, 0, 0, 0.12);\n}\n\n.mat-flat-button, .mat-raised-button, .mat-fab, .mat-mini-fab {\n  color: rgba(0, 0, 0, 0.87);\n  background-color: white;\n}\n\n.mat-flat-button.mat-primary, .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n  color: white;\n}\n\n.mat-flat-button.mat-accent, .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n  color: white;\n}\n\n.mat-flat-button.mat-warn, .mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n  color: white;\n}\n\n.mat-flat-button.mat-primary.mat-button-disabled, .mat-flat-button.mat-accent.mat-button-disabled, .mat-flat-button.mat-warn.mat-button-disabled, .mat-flat-button.mat-button-disabled.mat-button-disabled, .mat-raised-button.mat-primary.mat-button-disabled, .mat-raised-button.mat-accent.mat-button-disabled, .mat-raised-button.mat-warn.mat-button-disabled, .mat-raised-button.mat-button-disabled.mat-button-disabled, .mat-fab.mat-primary.mat-button-disabled, .mat-fab.mat-accent.mat-button-disabled, .mat-fab.mat-warn.mat-button-disabled, .mat-fab.mat-button-disabled.mat-button-disabled, .mat-mini-fab.mat-primary.mat-button-disabled, .mat-mini-fab.mat-accent.mat-button-disabled, .mat-mini-fab.mat-warn.mat-button-disabled, .mat-mini-fab.mat-button-disabled.mat-button-disabled {\n  color: rgba(0, 0, 0, 0.26);\n}\n\n.mat-flat-button.mat-primary, .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n  background-color: #3f51b5;\n}\n\n.mat-flat-button.mat-accent, .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n  background-color: #ff4081;\n}\n\n.mat-flat-button.mat-warn, .mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n  background-color: #f44336;\n}\n\n.mat-flat-button.mat-primary.mat-button-disabled, .mat-flat-button.mat-accent.mat-button-disabled, .mat-flat-button.mat-warn.mat-button-disabled, .mat-flat-button.mat-button-disabled.mat-button-disabled, .mat-raised-button.mat-primary.mat-button-disabled, .mat-raised-button.mat-accent.mat-button-disabled, .mat-raised-button.mat-warn.mat-button-disabled, .mat-raised-button.mat-button-disabled.mat-button-disabled, .mat-fab.mat-primary.mat-button-disabled, .mat-fab.mat-accent.mat-button-disabled, .mat-fab.mat-warn.mat-button-disabled, .mat-fab.mat-button-disabled.mat-button-disabled, .mat-mini-fab.mat-primary.mat-button-disabled, .mat-mini-fab.mat-accent.mat-button-disabled, .mat-mini-fab.mat-warn.mat-button-disabled, .mat-mini-fab.mat-button-disabled.mat-button-disabled {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n\n.mat-flat-button.mat-primary .mat-ripple-element, .mat-raised-button.mat-primary .mat-ripple-element, .mat-fab.mat-primary .mat-ripple-element, .mat-mini-fab.mat-primary .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\n.mat-flat-button.mat-accent .mat-ripple-element, .mat-raised-button.mat-accent .mat-ripple-element, .mat-fab.mat-accent .mat-ripple-element, .mat-mini-fab.mat-accent .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\n.mat-flat-button.mat-warn .mat-ripple-element, .mat-raised-button.mat-warn .mat-ripple-element, .mat-fab.mat-warn .mat-ripple-element, .mat-mini-fab.mat-warn .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\n.mat-stroked-button:not([class*=mat-elevation-z]), .mat-flat-button:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-raised-button:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-raised-button:not(.mat-button-disabled):active:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.mat-raised-button.mat-button-disabled:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-fab:not([class*=mat-elevation-z]), .mat-mini-fab:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-fab:not(.mat-button-disabled):active:not([class*=mat-elevation-z]), .mat-mini-fab:not(.mat-button-disabled):active:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);\n}\n\n.mat-fab.mat-button-disabled:not([class*=mat-elevation-z]), .mat-mini-fab.mat-button-disabled:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-button-toggle-standalone,\n.mat-button-toggle-group {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,\n.mat-button-toggle-group-appearance-standard {\n  box-shadow: none;\n}\n\n.mat-button-toggle {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.mat-button-toggle .mat-button-toggle-focus-overlay {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n\n.mat-button-toggle-appearance-standard {\n  color: rgba(0, 0, 0, 0.87);\n  background: white;\n}\n\n.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {\n  background-color: black;\n}\n\n.mat-button-toggle-group-appearance-standard .mat-button-toggle + .mat-button-toggle {\n  border-left: solid 1px rgba(0, 0, 0, 0.12);\n}\n\n[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle + .mat-button-toggle {\n  border-left: none;\n  border-right: solid 1px rgba(0, 0, 0, 0.12);\n}\n\n.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle + .mat-button-toggle {\n  border-left: none;\n  border-right: none;\n  border-top: solid 1px rgba(0, 0, 0, 0.12);\n}\n\n.mat-button-toggle-checked {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.54);\n}\n\n.mat-button-toggle-checked.mat-button-toggle-appearance-standard {\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.mat-button-toggle-disabled {\n  color: rgba(0, 0, 0, 0.26);\n  background-color: #eeeeee;\n}\n\n.mat-button-toggle-disabled.mat-button-toggle-appearance-standard {\n  background: white;\n}\n\n.mat-button-toggle-disabled.mat-button-toggle-checked {\n  background-color: #bdbdbd;\n}\n\n.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,\n.mat-button-toggle-group-appearance-standard {\n  border: solid 1px rgba(0, 0, 0, 0.12);\n}\n\n.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {\n  line-height: 48px;\n}\n\n.mat-card {\n  background: white;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.mat-card:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-card.mat-card-flat:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-card-subtitle {\n  color: rgba(0, 0, 0, 0.54);\n}\n\n.mat-checkbox-frame {\n  border-color: rgba(0, 0, 0, 0.54);\n}\n\n.mat-checkbox-checkmark {\n  fill: #fafafa;\n}\n\n.mat-checkbox-checkmark-path {\n  stroke: #fafafa !important;\n}\n\n.mat-checkbox-mixedmark {\n  background-color: #fafafa;\n}\n\n.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background, .mat-checkbox-checked.mat-primary .mat-checkbox-background {\n  background-color: #3f51b5;\n}\n\n.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background, .mat-checkbox-checked.mat-accent .mat-checkbox-background {\n  background-color: #ff4081;\n}\n\n.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background, .mat-checkbox-checked.mat-warn .mat-checkbox-background {\n  background-color: #f44336;\n}\n\n.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background, .mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background {\n  background-color: #b0b0b0;\n}\n\n.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame {\n  border-color: #b0b0b0;\n}\n\n.mat-checkbox-disabled .mat-checkbox-label {\n  color: rgba(0, 0, 0, 0.54);\n}\n\n.mat-checkbox .mat-ripple-element {\n  background-color: black;\n}\n\n.mat-checkbox-checked:not(.mat-checkbox-disabled).mat-primary .mat-ripple-element,\n.mat-checkbox:active:not(.mat-checkbox-disabled).mat-primary .mat-ripple-element {\n  background: #3f51b5;\n}\n\n.mat-checkbox-checked:not(.mat-checkbox-disabled).mat-accent .mat-ripple-element,\n.mat-checkbox:active:not(.mat-checkbox-disabled).mat-accent .mat-ripple-element {\n  background: #ff4081;\n}\n\n.mat-checkbox-checked:not(.mat-checkbox-disabled).mat-warn .mat-ripple-element,\n.mat-checkbox:active:not(.mat-checkbox-disabled).mat-warn .mat-ripple-element {\n  background: #f44336;\n}\n\n.mat-chip.mat-standard-chip {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.mat-chip.mat-standard-chip .mat-chip-remove {\n  color: rgba(0, 0, 0, 0.87);\n  opacity: 0.4;\n}\n\n.mat-chip.mat-standard-chip:not(.mat-chip-disabled):active {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-chip.mat-standard-chip:not(.mat-chip-disabled) .mat-chip-remove:hover {\n  opacity: 0.54;\n}\n\n.mat-chip.mat-standard-chip.mat-chip-disabled {\n  opacity: 0.4;\n}\n\n.mat-chip.mat-standard-chip::after {\n  background: black;\n}\n\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary {\n  background-color: #3f51b5;\n  color: white;\n}\n\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove {\n  color: white;\n  opacity: 0.4;\n}\n\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn {\n  background-color: #f44336;\n  color: white;\n}\n\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove {\n  color: white;\n  opacity: 0.4;\n}\n\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent {\n  background-color: #ff4081;\n  color: white;\n}\n\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove {\n  color: white;\n  opacity: 0.4;\n}\n\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\n.mat-table {\n  background: white;\n}\n\n.mat-table thead, .mat-table tbody, .mat-table tfoot,\nmat-header-row, mat-row, mat-footer-row,\n[mat-header-row], [mat-row], [mat-footer-row],\n.mat-table-sticky {\n  background: inherit;\n}\n\nmat-row, mat-header-row, mat-footer-row,\nth.mat-header-cell, td.mat-cell, td.mat-footer-cell {\n  border-bottom-color: rgba(0, 0, 0, 0.12);\n}\n\n.mat-header-cell {\n  color: rgba(0, 0, 0, 0.54);\n}\n\n.mat-cell, .mat-footer-cell {\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.mat-calendar-arrow {\n  border-top-color: rgba(0, 0, 0, 0.54);\n}\n\n.mat-datepicker-toggle,\n.mat-datepicker-content .mat-calendar-next-button,\n.mat-datepicker-content .mat-calendar-previous-button {\n  color: rgba(0, 0, 0, 0.54);\n}\n\n.mat-calendar-table-header {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.mat-calendar-table-header-divider::after {\n  background: rgba(0, 0, 0, 0.12);\n}\n\n.mat-calendar-body-label {\n  color: rgba(0, 0, 0, 0.54);\n}\n\n.mat-calendar-body-cell-content,\n.mat-date-range-input-separator {\n  color: rgba(0, 0, 0, 0.87);\n  border-color: transparent;\n}\n\n.mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.mat-form-field-disabled .mat-date-range-input-separator {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical),\n.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical),\n.cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {\n  background-color: rgba(0, 0, 0, 0.04);\n}\n\n.mat-calendar-body-in-preview {\n  color: rgba(0, 0, 0, 0.24);\n}\n\n.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {\n  border-color: rgba(0, 0, 0, 0.38);\n}\n\n.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {\n  border-color: rgba(0, 0, 0, 0.18);\n}\n\n.mat-calendar-body-in-range::before {\n  background: rgba(63, 81, 181, 0.2);\n}\n\n.mat-calendar-body-comparison-identical,\n.mat-calendar-body-in-comparison-range::before {\n  background: rgba(249, 171, 0, 0.2);\n}\n\n.mat-calendar-body-comparison-bridge-start::before,\n[dir=rtl] .mat-calendar-body-comparison-bridge-end::before {\n  background: linear-gradient(to right, rgba(63, 81, 181, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%);\n}\n\n.mat-calendar-body-comparison-bridge-end::before,\n[dir=rtl] .mat-calendar-body-comparison-bridge-start::before {\n  background: linear-gradient(to left, rgba(63, 81, 181, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%);\n}\n\n.mat-calendar-body-in-range > .mat-calendar-body-comparison-identical,\n.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after {\n  background: #a8dab5;\n}\n\n.mat-calendar-body-comparison-identical.mat-calendar-body-selected,\n.mat-calendar-body-in-comparison-range > .mat-calendar-body-selected {\n  background: #46a35e;\n}\n\n.mat-calendar-body-selected {\n  background-color: #3f51b5;\n  color: white;\n}\n\n.mat-calendar-body-disabled > .mat-calendar-body-selected {\n  background-color: rgba(63, 81, 181, 0.4);\n}\n\n.mat-calendar-body-today.mat-calendar-body-selected {\n  box-shadow: inset 0 0 0 1px white;\n}\n\n.mat-datepicker-content {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.mat-datepicker-content.mat-accent .mat-calendar-body-in-range::before {\n  background: rgba(255, 64, 129, 0.2);\n}\n\n.mat-datepicker-content.mat-accent .mat-calendar-body-comparison-identical,\n.mat-datepicker-content.mat-accent .mat-calendar-body-in-comparison-range::before {\n  background: rgba(249, 171, 0, 0.2);\n}\n\n.mat-datepicker-content.mat-accent .mat-calendar-body-comparison-bridge-start::before,\n.mat-datepicker-content.mat-accent [dir=rtl] .mat-calendar-body-comparison-bridge-end::before {\n  background: linear-gradient(to right, rgba(255, 64, 129, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%);\n}\n\n.mat-datepicker-content.mat-accent .mat-calendar-body-comparison-bridge-end::before,\n.mat-datepicker-content.mat-accent [dir=rtl] .mat-calendar-body-comparison-bridge-start::before {\n  background: linear-gradient(to left, rgba(255, 64, 129, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%);\n}\n\n.mat-datepicker-content.mat-accent .mat-calendar-body-in-range > .mat-calendar-body-comparison-identical,\n.mat-datepicker-content.mat-accent .mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after {\n  background: #a8dab5;\n}\n\n.mat-datepicker-content.mat-accent .mat-calendar-body-comparison-identical.mat-calendar-body-selected,\n.mat-datepicker-content.mat-accent .mat-calendar-body-in-comparison-range > .mat-calendar-body-selected {\n  background: #46a35e;\n}\n\n.mat-datepicker-content.mat-accent .mat-calendar-body-selected {\n  background-color: #ff4081;\n  color: white;\n}\n\n.mat-datepicker-content.mat-accent .mat-calendar-body-disabled > .mat-calendar-body-selected {\n  background-color: rgba(255, 64, 129, 0.4);\n}\n\n.mat-datepicker-content.mat-accent .mat-calendar-body-today.mat-calendar-body-selected {\n  box-shadow: inset 0 0 0 1px white;\n}\n\n.mat-datepicker-content.mat-warn .mat-calendar-body-in-range::before {\n  background: rgba(244, 67, 54, 0.2);\n}\n\n.mat-datepicker-content.mat-warn .mat-calendar-body-comparison-identical,\n.mat-datepicker-content.mat-warn .mat-calendar-body-in-comparison-range::before {\n  background: rgba(249, 171, 0, 0.2);\n}\n\n.mat-datepicker-content.mat-warn .mat-calendar-body-comparison-bridge-start::before,\n.mat-datepicker-content.mat-warn [dir=rtl] .mat-calendar-body-comparison-bridge-end::before {\n  background: linear-gradient(to right, rgba(244, 67, 54, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%);\n}\n\n.mat-datepicker-content.mat-warn .mat-calendar-body-comparison-bridge-end::before,\n.mat-datepicker-content.mat-warn [dir=rtl] .mat-calendar-body-comparison-bridge-start::before {\n  background: linear-gradient(to left, rgba(244, 67, 54, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%);\n}\n\n.mat-datepicker-content.mat-warn .mat-calendar-body-in-range > .mat-calendar-body-comparison-identical,\n.mat-datepicker-content.mat-warn .mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after {\n  background: #a8dab5;\n}\n\n.mat-datepicker-content.mat-warn .mat-calendar-body-comparison-identical.mat-calendar-body-selected,\n.mat-datepicker-content.mat-warn .mat-calendar-body-in-comparison-range > .mat-calendar-body-selected {\n  background: #46a35e;\n}\n\n.mat-datepicker-content.mat-warn .mat-calendar-body-selected {\n  background-color: #f44336;\n  color: white;\n}\n\n.mat-datepicker-content.mat-warn .mat-calendar-body-disabled > .mat-calendar-body-selected {\n  background-color: rgba(244, 67, 54, 0.4);\n}\n\n.mat-datepicker-content.mat-warn .mat-calendar-body-today.mat-calendar-body-selected {\n  box-shadow: inset 0 0 0 1px white;\n}\n\n.mat-datepicker-content-touch {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-datepicker-toggle-active {\n  color: #3f51b5;\n}\n\n.mat-datepicker-toggle-active.mat-accent {\n  color: #ff4081;\n}\n\n.mat-datepicker-toggle-active.mat-warn {\n  color: #f44336;\n}\n\n.mat-date-range-input-inner[disabled] {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.mat-dialog-container {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n  background: white;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.mat-divider {\n  border-top-color: rgba(0, 0, 0, 0.12);\n}\n\n.mat-divider-vertical {\n  border-right-color: rgba(0, 0, 0, 0.12);\n}\n\n.mat-expansion-panel {\n  background: white;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.mat-expansion-panel:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-action-row {\n  border-top-color: rgba(0, 0, 0, 0.12);\n}\n\n.mat-expansion-panel .mat-expansion-panel-header.cdk-keyboard-focused:not([aria-disabled=true]), .mat-expansion-panel .mat-expansion-panel-header.cdk-program-focused:not([aria-disabled=true]), .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:hover:not([aria-disabled=true]) {\n  background: rgba(0, 0, 0, 0.04);\n}\n\n@media (hover: none) {\n  .mat-expansion-panel:not(.mat-expanded):not([aria-disabled=true]) .mat-expansion-panel-header:hover {\n    background: white;\n  }\n}\n\n.mat-expansion-panel-header-title {\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.mat-expansion-panel-header-description,\n.mat-expansion-indicator::after {\n  color: rgba(0, 0, 0, 0.54);\n}\n\n.mat-expansion-panel-header[aria-disabled=true] {\n  color: rgba(0, 0, 0, 0.26);\n}\n\n.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,\n.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description {\n  color: inherit;\n}\n\n.mat-expansion-panel-header {\n  height: 48px;\n}\n\n.mat-expansion-panel-header.mat-expanded {\n  height: 64px;\n}\n\n.mat-form-field-label {\n  color: rgba(0, 0, 0, 0.6);\n}\n\n.mat-hint {\n  color: rgba(0, 0, 0, 0.6);\n}\n\n.mat-form-field.mat-focused .mat-form-field-label {\n  color: #3f51b5;\n}\n\n.mat-form-field.mat-focused .mat-form-field-label.mat-accent {\n  color: #ff4081;\n}\n\n.mat-form-field.mat-focused .mat-form-field-label.mat-warn {\n  color: #f44336;\n}\n\n.mat-focused .mat-form-field-required-marker {\n  color: #ff4081;\n}\n\n.mat-form-field-ripple {\n  background-color: rgba(0, 0, 0, 0.87);\n}\n\n.mat-form-field.mat-focused .mat-form-field-ripple {\n  background-color: #3f51b5;\n}\n\n.mat-form-field.mat-focused .mat-form-field-ripple.mat-accent {\n  background-color: #ff4081;\n}\n\n.mat-form-field.mat-focused .mat-form-field-ripple.mat-warn {\n  background-color: #f44336;\n}\n\n.mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid) .mat-form-field-infix::after {\n  color: #3f51b5;\n}\n\n.mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid).mat-accent .mat-form-field-infix::after {\n  color: #ff4081;\n}\n\n.mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid).mat-warn .mat-form-field-infix::after {\n  color: #f44336;\n}\n\n.mat-form-field.mat-form-field-invalid .mat-form-field-label {\n  color: #f44336;\n}\n\n.mat-form-field.mat-form-field-invalid .mat-form-field-label.mat-accent,\n.mat-form-field.mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker {\n  color: #f44336;\n}\n\n.mat-form-field.mat-form-field-invalid .mat-form-field-ripple,\n.mat-form-field.mat-form-field-invalid .mat-form-field-ripple.mat-accent {\n  background-color: #f44336;\n}\n\n.mat-error {\n  color: #f44336;\n}\n\n.mat-form-field-appearance-legacy .mat-form-field-label {\n  color: rgba(0, 0, 0, 0.54);\n}\n\n.mat-form-field-appearance-legacy .mat-hint {\n  color: rgba(0, 0, 0, 0.54);\n}\n\n.mat-form-field-appearance-legacy .mat-form-field-underline {\n  background-color: rgba(0, 0, 0, 0.42);\n}\n\n.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);\n  background-size: 4px 100%;\n  background-repeat: repeat-x;\n}\n\n.mat-form-field-appearance-standard .mat-form-field-underline {\n  background-color: rgba(0, 0, 0, 0.42);\n}\n\n.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);\n  background-size: 4px 100%;\n  background-repeat: repeat-x;\n}\n\n.mat-form-field-appearance-fill .mat-form-field-flex {\n  background-color: rgba(0, 0, 0, 0.04);\n}\n\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex {\n  background-color: rgba(0, 0, 0, 0.02);\n}\n\n.mat-form-field-appearance-fill .mat-form-field-underline::before {\n  background-color: rgba(0, 0, 0, 0.42);\n}\n\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-label {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-underline::before {\n  background-color: transparent;\n}\n\n.mat-form-field-appearance-outline .mat-form-field-outline {\n  color: rgba(0, 0, 0, 0.12);\n}\n\n.mat-form-field-appearance-outline .mat-form-field-outline-thick {\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: #3f51b5;\n}\n\n.mat-form-field-appearance-outline.mat-focused.mat-accent .mat-form-field-outline-thick {\n  color: #ff4081;\n}\n\n.mat-form-field-appearance-outline.mat-focused.mat-warn .mat-form-field-outline-thick {\n  color: #f44336;\n}\n\n.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick {\n  color: #f44336;\n}\n\n.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-label {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline {\n  color: rgba(0, 0, 0, 0.06);\n}\n\n.mat-icon.mat-primary {\n  color: #3f51b5;\n}\n\n.mat-icon.mat-accent {\n  color: #ff4081;\n}\n\n.mat-icon.mat-warn {\n  color: #f44336;\n}\n\n.mat-form-field-type-mat-native-select .mat-form-field-infix::after {\n  color: rgba(0, 0, 0, 0.54);\n}\n\n.mat-input-element:disabled,\n.mat-form-field-type-mat-native-select.mat-form-field-disabled .mat-form-field-infix::after {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.mat-input-element {\n  caret-color: #3f51b5;\n}\n\n.mat-input-element::placeholder {\n  color: rgba(0, 0, 0, 0.42);\n}\n\n.mat-input-element::-moz-placeholder {\n  color: rgba(0, 0, 0, 0.42);\n}\n\n.mat-input-element::-webkit-input-placeholder {\n  color: rgba(0, 0, 0, 0.42);\n}\n\n.mat-input-element:-ms-input-placeholder {\n  color: rgba(0, 0, 0, 0.42);\n}\n\n.mat-form-field.mat-accent .mat-input-element {\n  caret-color: #ff4081;\n}\n\n.mat-form-field.mat-warn .mat-input-element,\n.mat-form-field-invalid .mat-input-element {\n  caret-color: #f44336;\n}\n\n.mat-form-field-type-mat-native-select.mat-form-field-invalid .mat-form-field-infix::after {\n  color: #f44336;\n}\n\n.mat-list-base .mat-list-item {\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.mat-list-base .mat-list-option {\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.mat-list-base .mat-subheader {\n  color: rgba(0, 0, 0, 0.54);\n}\n\n.mat-list-item-disabled {\n  background-color: #eeeeee;\n}\n\n.mat-list-option:hover, .mat-list-option:focus,\n.mat-nav-list .mat-list-item:hover,\n.mat-nav-list .mat-list-item:focus,\n.mat-action-list .mat-list-item:hover,\n.mat-action-list .mat-list-item:focus {\n  background: rgba(0, 0, 0, 0.04);\n}\n\n.mat-list-single-selected-option, .mat-list-single-selected-option:hover, .mat-list-single-selected-option:focus {\n  background: rgba(0, 0, 0, 0.12);\n}\n\n.mat-menu-panel {\n  background: white;\n}\n\n.mat-menu-panel:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-menu-item {\n  background: transparent;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.mat-menu-item[disabled], .mat-menu-item[disabled]::after {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.mat-menu-item .mat-icon-no-color,\n.mat-menu-item-submenu-trigger::after {\n  color: rgba(0, 0, 0, 0.54);\n}\n\n.mat-menu-item:hover:not([disabled]),\n.mat-menu-item.cdk-program-focused:not([disabled]),\n.mat-menu-item.cdk-keyboard-focused:not([disabled]),\n.mat-menu-item-highlighted:not([disabled]) {\n  background: rgba(0, 0, 0, 0.04);\n}\n\n.mat-paginator {\n  background: white;\n}\n\n.mat-paginator,\n.mat-paginator-page-size .mat-select-trigger {\n  color: rgba(0, 0, 0, 0.54);\n}\n\n.mat-paginator-decrement,\n.mat-paginator-increment {\n  border-top: 2px solid rgba(0, 0, 0, 0.54);\n  border-right: 2px solid rgba(0, 0, 0, 0.54);\n}\n\n.mat-paginator-first,\n.mat-paginator-last {\n  border-top: 2px solid rgba(0, 0, 0, 0.54);\n}\n\n.mat-icon-button[disabled] .mat-paginator-decrement,\n.mat-icon-button[disabled] .mat-paginator-increment,\n.mat-icon-button[disabled] .mat-paginator-first,\n.mat-icon-button[disabled] .mat-paginator-last {\n  border-color: rgba(0, 0, 0, 0.38);\n}\n\n.mat-paginator-container {\n  min-height: 56px;\n}\n\n.mat-progress-bar-background {\n  fill: #c5cae9;\n}\n\n.mat-progress-bar-buffer {\n  background-color: #c5cae9;\n}\n\n.mat-progress-bar-fill::after {\n  background-color: #3f51b5;\n}\n\n.mat-progress-bar.mat-accent .mat-progress-bar-background {\n  fill: #ff80ab;\n}\n\n.mat-progress-bar.mat-accent .mat-progress-bar-buffer {\n  background-color: #ff80ab;\n}\n\n.mat-progress-bar.mat-accent .mat-progress-bar-fill::after {\n  background-color: #ff4081;\n}\n\n.mat-progress-bar.mat-warn .mat-progress-bar-background {\n  fill: #ffcdd2;\n}\n\n.mat-progress-bar.mat-warn .mat-progress-bar-buffer {\n  background-color: #ffcdd2;\n}\n\n.mat-progress-bar.mat-warn .mat-progress-bar-fill::after {\n  background-color: #f44336;\n}\n\n.mat-progress-spinner circle, .mat-spinner circle {\n  stroke: #3f51b5;\n}\n\n.mat-progress-spinner.mat-accent circle, .mat-spinner.mat-accent circle {\n  stroke: #ff4081;\n}\n\n.mat-progress-spinner.mat-warn circle, .mat-spinner.mat-warn circle {\n  stroke: #f44336;\n}\n\n.mat-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.54);\n}\n\n.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #3f51b5;\n}\n\n.mat-radio-button.mat-primary .mat-radio-inner-circle,\n.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple), .mat-radio-button.mat-primary.mat-radio-checked .mat-radio-persistent-ripple, .mat-radio-button.mat-primary:active .mat-radio-persistent-ripple {\n  background-color: #3f51b5;\n}\n\n.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #ff4081;\n}\n\n.mat-radio-button.mat-accent .mat-radio-inner-circle,\n.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple), .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple, .mat-radio-button.mat-accent:active .mat-radio-persistent-ripple {\n  background-color: #ff4081;\n}\n\n.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #f44336;\n}\n\n.mat-radio-button.mat-warn .mat-radio-inner-circle,\n.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple), .mat-radio-button.mat-warn.mat-radio-checked .mat-radio-persistent-ripple, .mat-radio-button.mat-warn:active .mat-radio-persistent-ripple {\n  background-color: #f44336;\n}\n\n.mat-radio-button.mat-radio-disabled.mat-radio-checked .mat-radio-outer-circle,\n.mat-radio-button.mat-radio-disabled .mat-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.38);\n}\n\n.mat-radio-button.mat-radio-disabled .mat-radio-ripple .mat-ripple-element,\n.mat-radio-button.mat-radio-disabled .mat-radio-inner-circle {\n  background-color: rgba(0, 0, 0, 0.38);\n}\n\n.mat-radio-button.mat-radio-disabled .mat-radio-label-content {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.mat-radio-button .mat-ripple-element {\n  background-color: black;\n}\n\n.mat-select-value {\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.mat-select-placeholder {\n  color: rgba(0, 0, 0, 0.42);\n}\n\n.mat-select-disabled .mat-select-value {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.mat-select-arrow {\n  color: rgba(0, 0, 0, 0.54);\n}\n\n.mat-select-panel {\n  background: white;\n}\n\n.mat-select-panel:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple) {\n  background: rgba(0, 0, 0, 0.12);\n}\n\n.mat-form-field.mat-focused.mat-primary .mat-select-arrow {\n  color: #3f51b5;\n}\n\n.mat-form-field.mat-focused.mat-accent .mat-select-arrow {\n  color: #ff4081;\n}\n\n.mat-form-field.mat-focused.mat-warn .mat-select-arrow {\n  color: #f44336;\n}\n\n.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow {\n  color: #f44336;\n}\n\n.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.mat-drawer-container {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.mat-drawer {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.mat-drawer.mat-drawer-push {\n  background-color: white;\n}\n\n.mat-drawer:not(.mat-drawer-side) {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n}\n\n.mat-drawer-side {\n  border-right: solid 1px rgba(0, 0, 0, 0.12);\n}\n\n.mat-drawer-side.mat-drawer-end {\n  border-left: solid 1px rgba(0, 0, 0, 0.12);\n  border-right: none;\n}\n\n[dir=rtl] .mat-drawer-side {\n  border-left: solid 1px rgba(0, 0, 0, 0.12);\n  border-right: none;\n}\n\n[dir=rtl] .mat-drawer-side.mat-drawer-end {\n  border-left: none;\n  border-right: solid 1px rgba(0, 0, 0, 0.12);\n}\n\n.mat-drawer-backdrop.mat-drawer-shown {\n  background-color: rgba(0, 0, 0, 0.6);\n}\n\n.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb {\n  background-color: #ff4081;\n}\n\n.mat-slide-toggle.mat-checked .mat-slide-toggle-bar {\n  background-color: rgba(255, 64, 129, 0.54);\n}\n\n.mat-slide-toggle.mat-checked .mat-ripple-element {\n  background-color: #ff4081;\n}\n\n.mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-thumb {\n  background-color: #3f51b5;\n}\n\n.mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-bar {\n  background-color: rgba(63, 81, 181, 0.54);\n}\n\n.mat-slide-toggle.mat-primary.mat-checked .mat-ripple-element {\n  background-color: #3f51b5;\n}\n\n.mat-slide-toggle.mat-warn.mat-checked .mat-slide-toggle-thumb {\n  background-color: #f44336;\n}\n\n.mat-slide-toggle.mat-warn.mat-checked .mat-slide-toggle-bar {\n  background-color: rgba(244, 67, 54, 0.54);\n}\n\n.mat-slide-toggle.mat-warn.mat-checked .mat-ripple-element {\n  background-color: #f44336;\n}\n\n.mat-slide-toggle:not(.mat-checked) .mat-ripple-element {\n  background-color: black;\n}\n\n.mat-slide-toggle-thumb {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n  background-color: #fafafa;\n}\n\n.mat-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.38);\n}\n\n.mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.26);\n}\n\n.mat-primary .mat-slider-track-fill,\n.mat-primary .mat-slider-thumb,\n.mat-primary .mat-slider-thumb-label {\n  background-color: #3f51b5;\n}\n\n.mat-primary .mat-slider-thumb-label-text {\n  color: white;\n}\n\n.mat-primary .mat-slider-focus-ring {\n  background-color: rgba(63, 81, 181, 0.2);\n}\n\n.mat-accent .mat-slider-track-fill,\n.mat-accent .mat-slider-thumb,\n.mat-accent .mat-slider-thumb-label {\n  background-color: #ff4081;\n}\n\n.mat-accent .mat-slider-thumb-label-text {\n  color: white;\n}\n\n.mat-accent .mat-slider-focus-ring {\n  background-color: rgba(255, 64, 129, 0.2);\n}\n\n.mat-warn .mat-slider-track-fill,\n.mat-warn .mat-slider-thumb,\n.mat-warn .mat-slider-thumb-label {\n  background-color: #f44336;\n}\n\n.mat-warn .mat-slider-thumb-label-text {\n  color: white;\n}\n\n.mat-warn .mat-slider-focus-ring {\n  background-color: rgba(244, 67, 54, 0.2);\n}\n\n.mat-slider:hover .mat-slider-track-background,\n.cdk-focused .mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.38);\n}\n\n.mat-slider-disabled .mat-slider-track-background,\n.mat-slider-disabled .mat-slider-track-fill,\n.mat-slider-disabled .mat-slider-thumb {\n  background-color: rgba(0, 0, 0, 0.26);\n}\n\n.mat-slider-disabled:hover .mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.26);\n}\n\n.mat-slider-min-value .mat-slider-focus-ring {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label {\n  background-color: rgba(0, 0, 0, 0.87);\n}\n\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label {\n  background-color: rgba(0, 0, 0, 0.26);\n}\n\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.26);\n  background-color: transparent;\n}\n\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.38);\n}\n\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.26);\n}\n\n.mat-slider-has-ticks .mat-slider-wrapper::after {\n  border-color: rgba(0, 0, 0, 0.7);\n}\n\n.mat-slider-horizontal .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent);\n  background-image: -moz-repeating-linear-gradient(0.0001deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent);\n}\n\n.mat-slider-vertical .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent);\n}\n\n.mat-step-header.cdk-keyboard-focused, .mat-step-header.cdk-program-focused, .mat-step-header:hover {\n  background-color: rgba(0, 0, 0, 0.04);\n}\n\n@media (hover: none) {\n  .mat-step-header:hover {\n    background: none;\n  }\n}\n\n.mat-step-header .mat-step-label,\n.mat-step-header .mat-step-optional {\n  color: rgba(0, 0, 0, 0.54);\n}\n\n.mat-step-header .mat-step-icon {\n  background-color: rgba(0, 0, 0, 0.54);\n  color: white;\n}\n\n.mat-step-header .mat-step-icon-selected,\n.mat-step-header .mat-step-icon-state-done,\n.mat-step-header .mat-step-icon-state-edit {\n  background-color: #3f51b5;\n  color: white;\n}\n\n.mat-step-header .mat-step-icon-state-error {\n  background-color: transparent;\n  color: #f44336;\n}\n\n.mat-step-header .mat-step-label.mat-step-label-active {\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.mat-step-header .mat-step-label.mat-step-label-error {\n  color: #f44336;\n}\n\n.mat-stepper-horizontal, .mat-stepper-vertical {\n  background-color: white;\n}\n\n.mat-stepper-vertical-line::before {\n  border-left-color: rgba(0, 0, 0, 0.12);\n}\n\n.mat-horizontal-stepper-header::before,\n.mat-horizontal-stepper-header::after,\n.mat-stepper-horizontal-line {\n  border-top-color: rgba(0, 0, 0, 0.12);\n}\n\n.mat-horizontal-stepper-header {\n  height: 72px;\n}\n\n.mat-stepper-label-position-bottom .mat-horizontal-stepper-header,\n.mat-vertical-stepper-header {\n  padding: 24px 24px;\n}\n\n.mat-stepper-vertical-line::before {\n  top: -16px;\n  bottom: -16px;\n}\n\n.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::after, .mat-stepper-label-position-bottom .mat-horizontal-stepper-header::before {\n  top: 36px;\n}\n\n.mat-stepper-label-position-bottom .mat-stepper-horizontal-line {\n  top: 36px;\n}\n\n.mat-sort-header-arrow {\n  color: #757575;\n}\n\n.mat-tab-nav-bar,\n.mat-tab-header {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n\n.mat-tab-group-inverted-header .mat-tab-nav-bar,\n.mat-tab-group-inverted-header .mat-tab-header {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  border-bottom: none;\n}\n\n.mat-tab-label, .mat-tab-link {\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.mat-tab-label.mat-tab-disabled, .mat-tab-link.mat-tab-disabled {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.87);\n}\n\n.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.38);\n}\n\n.mat-tab-group[class*=mat-background-] .mat-tab-header,\n.mat-tab-nav-bar[class*=mat-background-] {\n  border-bottom: none;\n  border-top: none;\n}\n\n.mat-tab-group.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(197, 202, 233, 0.3);\n}\n\n.mat-tab-group.mat-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary .mat-ink-bar {\n  background-color: #3f51b5;\n}\n\n.mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar {\n  background-color: white;\n}\n\n.mat-tab-group.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(255, 128, 171, 0.3);\n}\n\n.mat-tab-group.mat-accent .mat-ink-bar, .mat-tab-nav-bar.mat-accent .mat-ink-bar {\n  background-color: #ff4081;\n}\n\n.mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar, .mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar {\n  background-color: white;\n}\n\n.mat-tab-group.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(255, 205, 210, 0.3);\n}\n\n.mat-tab-group.mat-warn .mat-ink-bar, .mat-tab-nav-bar.mat-warn .mat-ink-bar {\n  background-color: #f44336;\n}\n\n.mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar, .mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar {\n  background-color: white;\n}\n\n.mat-tab-group.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(197, 202, 233, 0.3);\n}\n\n.mat-tab-group.mat-background-primary .mat-tab-header, .mat-tab-group.mat-background-primary .mat-tab-links, .mat-tab-group.mat-background-primary .mat-tab-header-pagination, .mat-tab-nav-bar.mat-background-primary .mat-tab-header, .mat-tab-nav-bar.mat-background-primary .mat-tab-links, .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination {\n  background-color: #3f51b5;\n}\n\n.mat-tab-group.mat-background-primary .mat-tab-label, .mat-tab-group.mat-background-primary .mat-tab-link, .mat-tab-nav-bar.mat-background-primary .mat-tab-label, .mat-tab-nav-bar.mat-background-primary .mat-tab-link {\n  color: white;\n}\n\n.mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled {\n  color: rgba(255, 255, 255, 0.4);\n}\n\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron {\n  border-color: white;\n}\n\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4);\n}\n\n.mat-tab-group.mat-background-primary .mat-ripple-element, .mat-tab-nav-bar.mat-background-primary .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12);\n}\n\n.mat-tab-group.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(255, 128, 171, 0.3);\n}\n\n.mat-tab-group.mat-background-accent .mat-tab-header, .mat-tab-group.mat-background-accent .mat-tab-links, .mat-tab-group.mat-background-accent .mat-tab-header-pagination, .mat-tab-nav-bar.mat-background-accent .mat-tab-header, .mat-tab-nav-bar.mat-background-accent .mat-tab-links, .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination {\n  background-color: #ff4081;\n}\n\n.mat-tab-group.mat-background-accent .mat-tab-label, .mat-tab-group.mat-background-accent .mat-tab-link, .mat-tab-nav-bar.mat-background-accent .mat-tab-label, .mat-tab-nav-bar.mat-background-accent .mat-tab-link {\n  color: white;\n}\n\n.mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled {\n  color: rgba(255, 255, 255, 0.4);\n}\n\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron {\n  border-color: white;\n}\n\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4);\n}\n\n.mat-tab-group.mat-background-accent .mat-ripple-element, .mat-tab-nav-bar.mat-background-accent .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12);\n}\n\n.mat-tab-group.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(255, 205, 210, 0.3);\n}\n\n.mat-tab-group.mat-background-warn .mat-tab-header, .mat-tab-group.mat-background-warn .mat-tab-links, .mat-tab-group.mat-background-warn .mat-tab-header-pagination, .mat-tab-nav-bar.mat-background-warn .mat-tab-header, .mat-tab-nav-bar.mat-background-warn .mat-tab-links, .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination {\n  background-color: #f44336;\n}\n\n.mat-tab-group.mat-background-warn .mat-tab-label, .mat-tab-group.mat-background-warn .mat-tab-link, .mat-tab-nav-bar.mat-background-warn .mat-tab-label, .mat-tab-nav-bar.mat-background-warn .mat-tab-link {\n  color: white;\n}\n\n.mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled {\n  color: rgba(255, 255, 255, 0.4);\n}\n\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron {\n  border-color: white;\n}\n\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4);\n}\n\n.mat-tab-group.mat-background-warn .mat-ripple-element, .mat-tab-nav-bar.mat-background-warn .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12);\n}\n\n.mat-toolbar {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.mat-toolbar.mat-primary {\n  background: #3f51b5;\n  color: white;\n}\n\n.mat-toolbar.mat-accent {\n  background: #ff4081;\n  color: white;\n}\n\n.mat-toolbar.mat-warn {\n  background: #f44336;\n  color: white;\n}\n\n.mat-toolbar .mat-form-field-underline,\n.mat-toolbar .mat-form-field-ripple,\n.mat-toolbar .mat-focused .mat-form-field-ripple {\n  background-color: currentColor;\n}\n\n.mat-toolbar .mat-form-field-label,\n.mat-toolbar .mat-focused .mat-form-field-label,\n.mat-toolbar .mat-select-value,\n.mat-toolbar .mat-select-arrow,\n.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {\n  color: inherit;\n}\n\n.mat-toolbar .mat-input-element {\n  caret-color: currentColor;\n}\n\n.mat-toolbar-multiple-rows {\n  min-height: 64px;\n}\n\n.mat-toolbar-row, .mat-toolbar-single-row {\n  height: 64px;\n}\n\n@media (max-width: 599px) {\n  .mat-toolbar-multiple-rows {\n    min-height: 56px;\n  }\n\n  .mat-toolbar-row, .mat-toolbar-single-row {\n    height: 56px;\n  }\n}\n\n.mat-tooltip {\n  background: rgba(97, 97, 97, 0.9);\n}\n\n.mat-tree {\n  background: white;\n}\n\n.mat-tree-node,\n.mat-nested-tree-node {\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.mat-tree-node {\n  min-height: 48px;\n}\n\n.mat-snack-bar-container {\n  color: rgba(255, 255, 255, 0.7);\n  background: #323232;\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-simple-snackbar-action {\n  color: #ff4081;\n}\n\nbody {\n  margin: 0;\n  font-family: \"Verdana\", \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  margin-top: 60px;\n}\n\n.component-wrapper {\n  padding: 5vh 5vw;\n  color: var(--white);\n  background: var(--background);\n}\n\n@media (max-width: 850px) {\n  .component-wrapper {\n    padding: 5vw;\n  }\n}\n\n.social-icons-wrapper {\n  display: flex;\n  flex-flow: row;\n}\n\n.social-icons-wrapper a {\n  margin: 0 10px;\n}\n\n.menu-icon {\n  background: transparent;\n  color: var(--white);\n  border: none;\n  font-size: 18px;\n  padding-top: 6px;\n}\n\n.menu-icon:focus {\n  outline: none;\n}\n\nmat-icon {\n  font-family: \"Material Icons\";\n}\n\n.mat-tab-group.mat-primary .mat-ink-bar,\n.mat-tab-nav-bar.mat-primary .mat-ink-bar {\n  background-color: var(--primary);\n}\n\na {\n  position: relative;\n  text-decoration: none;\n  display: inline-block;\n  color: var(--primary);\n}\n\na:after {\n  display: block;\n  content: \"\";\n  border-bottom: solid 1px var(--primary);\n  transform: scaleX(0);\n  transition: transform 250ms ease-in-out;\n  transform-origin: 0 100%;\n}\n\na:hover:after {\n  transform: scaleX(1);\n  transform-origin: 0 100%;\n}\n\n.mat-chip.mat-standard-chip::after {\n  background: transparent;\n}\n\n.mat-chip-list .mat-chip {\n  font-size: 0.7rem;\n  border: 1px solid transparent;\n  background: transparent;\n  color: var(--primary);\n  min-height: 20px;\n  border-radius: unset;\n  margin: 5px;\n}\n\n.mat-chip-list .mat-chip:hover {\n  border: 1px solid var(--primary);\n}\n\n.cdk-overlay-pane {\n  left: 0 !important;\n  top: 0 !important;\n}\n\n.mat-menu-panel {\n  background: var(--black);\n  width: 100vw;\n  height: 100vh;\n  max-height: unset !important;\n  min-width: unset !important;\n  max-width: unset !important;\n}\n\n.mat-menu-panel .mat-menu-content:not(:empty) {\n  padding: 10%;\n}\n\n.mat-menu-panel .mat-menu-content {\n  background: transparent;\n  margin-top: 60px;\n  display: flex;\n  flex-flow: column;\n  height: -webkit-fill-available;\n  justify-content: space-around;\n  padding: 10%;\n}\n\n.mat-menu-panel .mat-menu-content .mat-menu-item {\n  color: var(--white);\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n}\n\n.mat-menu-panel .mat-menu-content app-contact {\n  margin: 20px;\n}\n\n.selected-page {\n  color: var(--primary) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsIm5vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9fdGhlbWluZy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNDRjs7QUNvdERBLG1DQUFBOztBQWdKQSx5REFBQTs7QUE2WEEseURBQUE7O0FBaTFEQSwyQ0FBQTs7QUE2Q0EscUJBQUE7O0FBcGpERTtFQUNFLGdCQXZMb0I7RUF3THBCLGVBekxrQjtFQTBMbEIsaURBQUE7QURuaUZKOztBQ3NpRkU7RUFFRSxjQUFBO0FEcGlGSjs7QUN1aUZFO0VBQ0UsZUFBQTtBRHBpRko7O0FDZ3RFRTtFQXZTRSx3REFBQTtFQVlGLHNCQUFBO0VBNlJFLGdCQUFBO0FENXNFSjs7QUMrc0VFO0VBNVNFLHdEQUFBO0VBWUYsc0JBQUE7RUFrU0UsZ0JBQUE7QUQzc0VKOztBQzhzRUU7RUFqVEUsd0RBQUE7RUFZRixzQkFBQTtFQXVTRSxnQkFBQTtBRDFzRUo7O0FDNnNFRTtFQXRURSx3REFBQTtFQVlGLHNCQUFBO0VBNFNFLGdCQUFBO0FEenNFSjs7QUMrc0VFO0VBOVRFLHFFQUFBO0VBdVVBLGdCQUFBO0FEbnRFSjs7QUNzdEVFO0VBMVVFLHFFQUFBO0VBbVZBLGdCQUFBO0FEMXRFSjs7QUM2dEVFO0VBdFZFLHdEQUFBO0VBWUYsc0JBQUE7QUQ5NERGOztBQzR0RUU7RUExVkUsd0RBQUE7RUFZRixzQkFBQTtBRHo0REY7O0FDMHRFSTtFQUNFLGdCQUFBO0FEeHRFTjs7QUM0dEVFO0VBbFdFLHdEQUFBO0VBWUYsc0JBQUE7QURqNERGOztBQzJ0RUU7RUF0V0UsMERBQUE7RUFZRix1QkFBQTtFQTRWRSxnQkFBQTtBRHZ0RUo7O0FDMHRFRTtFQTNXRSx3REFBQTtFQVlGLHVCQUFBO0VBaVdFLGdCQUFBO0FEdHRFSjs7QUN5dEVFO0VBaFhFLHdEQUFBO0VBWUYsd0JBQUE7RUFzV0UsZ0JBQUE7QURydEVKOztBQ3d0RUU7RUFyWEUsd0RBQUE7RUFZRixzQkFBQTtFQTJXRSxnQkFBQTtBRHB0RUo7O0FDcWdGRTtFQXhxQkUsd0RBQUE7RUFZRixzQkFBQTtBRHAyREY7O0FDK3JGRTs7RUFHSSxpREFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRDdyRk47O0FDazRGRTtFQUNFLGlEQUFBO0FELzNGSjs7QUNnOEZFO0VBQ0UsaURBQUE7QUQ3N0ZKOztBQ2c4RkU7RUFFSSxlQUFBO0VBQ0EsZ0JBQUE7QUQ5N0ZOOztBQ2s4RkU7RUFDRSxlQUFBO0FELzdGSjs7QUNrOEZFOztFQUVFLGVBQUE7QUQvN0ZKOztBQzRqR0U7RUFDRSxpREFBQTtBRHpqR0o7O0FDNmpHRTtFQUNFLGlCQUFBO0FEMWpHSjs7QUM4cUdFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FEM3FHSjs7QUM2cUdJOztFQUVFLGVBM0ZzQjtBRGhsRzVCOztBQ294R0U7RUFDRSxpREFBQTtBRGp4R0o7O0FDb3hHRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBRGp4R0o7O0FDb3hHRTtFQUNFLGVBQUE7QURqeEdKOztBQ2krR0U7RUFDRSxpREFBQTtBRDk5R0o7O0FDaStHRTtFQUNFLGVBakwwQjtBRDd5RzlCOztBQ2krR0U7O0VBR0ksZUFBQTtFQUNBLGdCQUFBO0FELzlHTjs7QUNtK0dFO0VBRUksZUE3TGlDO0VBOExqQyxnQkFBQTtBRGorR047O0FDb2pIRTtFQTF5REUsd0RBQUE7RUFZRixzQkFBQTtBRGp4REY7O0FDc3FIRTtFQUVJLGlEQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FEcHFITjs7QUN3cUhFO0VBejZERSx3REFBQTtFQVlGLHNCQUFBO0FEdHdERjs7QUM0ME1FO0VBM2xKRSxrQkFlVTtFQWRWLGdCQWVZO0VBZFosa0JBZVk7RUFkWixpREFlWTtFQUdkLHNCQUFBO0FEOXZERjs7QUN3ME1FO0VBQ0UseUJBUHVCO0FEOXpNM0I7O0FDMjBNSTs7RUFDRSxlQXZCMkI7RUF3QjNCLGtCQXRDVTtBRGp5TWhCOztBQzIwTUk7O0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUR4ME1OOztBQzAwTU07O0VBQ0UsZUFBQTtFQUNBLGtCQWhEUTtBRHZ4TWhCOztBQzQwTUU7RUFDRSxnQkFBQTtFQUVBLHVDQUFBO0FEMTBNSjs7QUM4ME1JOztFQXRFRiw2Q0FBQTtFQUVBLHNCQUFBO0FEcHdNRjs7QUNnMU1JO0VBOUVGLDZDQUFBO0VBRUEsc0JBQUE7QURod01GOztBQ20xTUU7RUFDRSxlQUFBO0VBQ0Esc0JBbkVpQjtBRDd3TXJCOztBQ20xTUU7RUFDRSxjQUFBO0FEaDFNSjs7QUNtMU1FO0VBR0UsaUJBaEV1QjtBRGx4TTNCOztBQ3ExTUU7RUFDRSxjQS9Fb0I7RUFnRnBCLDBCQXpFcUI7RUE2RXJCLGdDQUFBO0FEcjFNSjs7QUNxMExJO0VBQ0Usc0JBSnFCO0FEOXpMM0I7O0FDcTBMSTtFQUNFLG1CQUFBO0FEbjBMTjs7QUN1MExNOztFQTFESixvRkFBQTtFQUlBLGlEQUFBO0VBR0Esc0JBQUE7QUQ5d0xGOztBQ3cwTE07RUFqRUosc0ZBQUE7RUFJQSxpREFBQTtFQUdBLHNCQUFBO0FEendMRjs7QUMyMExNO0VBekVKLHNGQUFBO0VBSUEsaURBQUE7RUFHQSxzQkFBQTtBRHB3TEY7O0FDNjBMSTtFQUNFLGNBQUE7QUQzMExOOztBQzgwTEk7RUFHRSxjQXpDcUI7QURyeUwzQjs7QUNpMUxJO0VBQ0UsMEJBakRtQjtFQXFEbkIsZ0NBQUE7QURsMUxOOztBQ3cxTEU7RUFHTTs7SUF4Rk4sNkNBQUE7RUQ3dkxBO0VDNDFMTTtJQS9GTiw2Q0FBQTtFRDF2TEE7RUNpMkxNO0lBdkdOLDRDQUFBO0VEdnZMQTtBQUNGOztBQ29vTEk7RUFDRSwwQkFBQTtBRGxvTE47O0FDcW9MSTtFQUNFLGNBQUE7RUFDQSxrQkFUMkI7QUQxbkxqQzs7QUN1b0xNOztFQWpDSiw2Q0FBQTtFQUVBLHNCQUFBO0FEbm1MRjs7QUMyb0xNO0VBMUNKLDZDQUFBO0VBRUEsc0JBQUE7QUQvbExGOztBQ3E5TEk7RUFDRSxvQkFBQTtBRGw5TE47O0FDcTlMSTtFQUNFLGNBQUE7RUFDQSxtQkFUOEI7QUQxOExwQzs7QUN1OUxNOztFQXhDSiw2Q0FBQTtFQUVBLHNCQUFBO0FENTZMRjs7QUMyOUxNO0VBakRKLDZDQUFBO0VBRUEsc0JBQUE7QUR4NkxGOztBQzZuSEU7O0VBR0UsZUFBQTtBRDNuSEo7O0FDMGtIRTs7RUFSQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFRRSxjQUFBO0VBQ0Esc0JBQUE7QURya0hKOztBQ3drSEk7O0VBQ0UsZUF5Q3FCO0FEOW1IM0I7O0FDbTBIRTtFQUNFLHFCQUFBO0FEaDBISjs7QUMyL0hFO0VBRUksaURBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUR6L0hOOztBQzZrSUU7O0VBR0ksaURBQUE7RUFDQSxlQUFBO0FEM2tJTjs7QUNpeklFO0VBQ0UsaURBQUE7QUQ5eUlKOztBQzg0SUU7RUFDRSxpREFBQTtBRDM0SUo7O0FDODRJRTtFQUNFLGVBQUE7QUQzNElKOztBQ29sSkU7RUFDRSxpREFBQTtBRGpsSko7O0FDbXhKRTtFQUVJLGlEQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FEanhKTjs7QUMwNUpFO0VBQ0UsaURBQUE7QUR2NUpKOztBQzA1SkU7RUFFSSxlQUFBO0VBQ0EsZ0JBQUE7QUR4NUpOOztBQzQ1SkU7RUFDRSxtQkFBQTtBRHo1Sko7O0FDNDVKRTtFQUNFLGVBQUE7QUR6NUpKOztBQzQ1SkU7RUFFSSxlQUFBO0VBQ0EsZ0JBQUE7QUQxNUpOOztBQzRvS0U7RUFDRSxpREFBQTtBRHpvS0o7O0FDNG9LRTtFQUVJLGlEQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FEMW9LTjs7QUN3d0tFOzs7Ozs7O0VBbHZIRSx3REFBQTtFQVlGLHNCQUFBO0VBOHVIRSxTQUFBO0FEcHdLSjs7QUN3MEtFO0VBQ0UsaURBQUE7RUFDQSxlQXJCb0I7RUFzQnBCLGdCQXJCMkI7RUFzQjNCLG1CQXRCMkI7QUQveUsvQjs7QUN3MEtFO0VBQ0UsZUF2QjRCO0VBd0I1QixnQkF0QkE7RUF1QkEsbUJBdkJBO0FEOXlLSjs7QUMreUhFO0VBQ0UsaURBSFk7QUR6eUhoQjs7QUMreUhFO0VBQ0UsaURBUFk7QURyeUhoQjs7QUNpekhJO0VBQ0UsZUFBQTtBRDl5SE47O0FDbTlHRTtFQVJBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQVFFLGNBQUE7RUFDQSxzQkFBQTtBRC84R0o7O0FDazlHSTtFQUNFLGVBcVZ1QjtBRHJ5SDdCOztBQ3d5SEk7RUFDRSxlQUFBO0FEdHlITjs7QUNzOEdFO0VBUkEsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBUUUsY0FBQTtFQUNBLHNCQUFBO0FEbDhHSjs7QUNxOEdJO0VBQ0UsZUEwVnVCO0FEN3hIN0I7O0FDZ3lISTtFQUNFLGlEQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FEOXhITjs7QUNveUhJO0VBQ0UsZUFBQTtBRGp5SE47O0FDbTdHRTtFQVJBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQVFFLGNBQUE7RUFDQSxzQkFBQTtBRC82R0o7O0FDazdHSTtFQUNFLGVBd1d1QjtBRHh4SDdCOztBQzJ4SEk7RUFDRSxlQUFBO0FEenhITjs7QUNzNkdFO0VBUkEsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBUUUsY0FBQTtFQUNBLHNCQUFBO0FEbDZHSjs7QUNxNkdJO0VBQ0UsZUE2V3VCO0FEaHhIN0I7O0FDbXhISTtFQUNFLGlEQTFDVTtFQTJDVixlQUFBO0VBQ0EsZ0JBQUE7QURqeEhOOztBQ20vQ0U7RUFFSSxpREFBQTtFQUNBLGVBQUE7QURqL0NOOztBQytoREU7RUEvR0Usd0RBQUE7RUFZRixzQkFBQTtBRHY3Q0Y7O0FDd3lLRTtFQUVJLGlEQUFBO0VBQ0EsZUFBQTtBRHR5S047O0FDMHlLRTtFQUNFLGNBQUE7RUFFRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUR4eUtOOztBQ2tvTUU7RUFDRSxpREFBQTtBRC9uTUo7O0FDa29NRTs7RUFFRSxnQkFBQTtFQUNBLGVBQUE7QUQvbk1KOztBQ3lvQ0U7RUFDRSxnQkFBQTtFQUlBLGtCQUFBO0FEem9DSjs7QUNncENJO0VBQ0Usd0JBQUE7QUQ5b0NOOztBQ2twQ0U7RUFDRSxpQkFBQTtBRC9vQ0o7O0FDa3BDRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUVBLDZEQUFBO0VBQ0EsbUJBQUE7QURocENKOztBQ3BaSTtFQXdpREUsYUFBQTtBRGpwQ047O0FDbGJFO0VBQ0UsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFHQSxVQUFBO0VBR0Esd0JBQUE7RUFDQSxxQkFBQTtBRGliSjs7QUMvakJFO0VBRUUsb0JBQUE7RUFHQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FEK2pCSjs7QUMzakJFO0VBQ0UsZUFBQTtFQUNBLGFBM0I0QjtBRHlsQmhDOztBQzVqQkk7RUFHRSxhQUFBO0FENGpCTjs7QUNwakJFO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUExQ2tCO0FEaW1CdEI7O0FDbmpCRTtFQUdFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBcERrQjtFQXdEbEIsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRGlqQko7O0FDOWlCRTtFQUVFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUVBLGFBcEUyQjtFQXFFM0Isb0JBQUE7RUFDQSx3Q0FBQTtFQUNBLDBEQUFBO0VBQ0EsVUFBQTtBRCtpQko7O0FDN2lCSTtFQUNFLFVBQUE7QUQraUJOOztBQ3ppQk07RUFQRjtJQVFJLFlBQUE7RUQ0aUJOO0FBQ0Y7O0FDeGlCRTtFQUNFLCtCQXJGbUM7QURnb0J2Qzs7QUNuaUJJO0VBQ0UsVUFBQTtBRHNpQk47O0FDaGlCRTtFQUNFLGtCQUFBO0VBQ0EsYUExR2tCO0VBK0dsQixhQUFBO0VBSUEsc0JBQUE7RUFHQSxjQUFBO0VBQ0EsZUFBQTtBRDBoQko7O0FDdGhCRTtFQUNFLGVBQUE7RUFLQSxXQUFBO0VBS0Esa0JBQUE7QURpaEJKOztBQ3hiRTtFQUEwQyxJQUFBO0FENGI1Qzs7QUMzYkU7RUFBd0MsSUFBQTtBRDhiMUM7O0FDNWJFO0VBRUUsK0NBQUE7QUQ2Yko7O0FDMWJFO0VBRUUsNkNBQUE7QUQ0Yko7O0FDdmJFO0VBQ0UsWUFBQTtBRDBiSjs7QUNwYkU7RUFxQkEseUJBQUE7RUFDQSxrQ0FBQTtFQXBCRSx1QkFBQTtFQUNBLDJCQUFBO0FEd2JKOztBQy9hRTtFQVNBLHlCQUFBO0VBQ0Esa0NBQUE7RUFSRSxvQkFBQTtBRG1iSjs7QUNpc0NFO0VBQ0Usa0JBQUE7QUQ5ckNKOztBQzhvTUU7RUFDRSxrQkFBQTtBRDNvTUo7O0FDMmhDRTtFQUlJLG9DQUFBO0FEM2hDTjs7QUNpeENFO0VBQ0UsMEJBQUE7QUQ5d0NKOztBQ2d4Q0k7RUFFRSwrQkFBQTtBRC93Q047O0FDbXhDSTtFQUNFLCtCQUFBO0FEanhDTjs7QUNveENJO0VBQ0UsK0JBQUE7RUFDQSwwQkFBQTtBRGx4Q047O0FDcXhDSTtFQUNFLDBCQUFBO0FEbnhDTjs7QUN1eENFO0VBQ0UsY0FBQTtBRHB4Q0o7O0FDdXhDRTtFQUNFLGNBQUE7QURweENKOztBQ3V4Q0U7RUFDRSxjQUFBO0FEcHhDSjs7QUNnMENFO0VBQ0UsMEJBQUE7QUQ3ekNKOztBQ2cwQ0U7RUFDRSwwQkFBQTtBRDd6Q0o7O0FDZzNDRTtFQUNFLDBCQUFBO0FENzJDSjs7QUMrMkNJO0VBQ0UsY0FBQTtBRDcyQ047O0FDaTNDRTtFQUNFLGNBWmU7QURsMkNuQjs7QUNpM0NFOztFQUVFLG1CQUFBO0FEOTJDSjs7QUNzM0NFOzs7O0VBSUUsbUJBQUE7QURuM0NKOztBQ3MzQ0U7O0VBRUUsbUJBQUE7QURuM0NKOztBQ3czQ0k7O0VBQ0UsbUJBeENhO0FENTBDbkI7O0FDMmdNRTtFQUlFLHlCQUFBO0VBQ0EsMEJBQUE7QUQzZ01KOztBQ2toTUk7RUE1eU1GLHdIQUFBO0FEOFJGOztBQzhnTUk7RUE1eU1GLHlIQUFBO0FEa1NGOztBQzBnTUk7RUE1eU1GLHlIQUFBO0FEc1NGOztBQ3NnTUk7RUE1eU1GLHlIQUFBO0FEMFNGOztBQ2tnTUk7RUE1eU1GLDBIQUFBO0FEOFNGOztBQzgvTEk7RUE1eU1GLDBIQUFBO0FEa1RGOztBQzAvTEk7RUE1eU1GLDJIQUFBO0FEc1RGOztBQ3MvTEk7RUE1eU1GLDJIQUFBO0FEMFRGOztBQ2svTEk7RUE1eU1GLDJIQUFBO0FEOFRGOztBQzgrTEk7RUE1eU1GLDJIQUFBO0FEa1VGOztBQzArTEk7RUE1eU1GLDRIQUFBO0FEc1VGOztBQ3MrTEk7RUE1eU1GLDRIQUFBO0FEMFVGOztBQ2srTEk7RUE1eU1GLDRIQUFBO0FEOFVGOztBQzg5TEk7RUE1eU1GLDRIQUFBO0FEa1ZGOztBQzA5TEk7RUE1eU1GLDRIQUFBO0FEc1ZGOztBQ3M5TEk7RUE1eU1GLDRIQUFBO0FEMFZGOztBQ2s5TEk7RUE1eU1GLDZIQUFBO0FEOFZGOztBQzg4TEk7RUE1eU1GLDZIQUFBO0FEa1dGOztBQzA4TEk7RUE1eU1GLDZIQUFBO0FEc1dGOztBQ3M4TEk7RUE1eU1GLDZIQUFBO0FEMFdGOztBQ2s4TEk7RUE1eU1GLDhIQUFBO0FEOFdGOztBQzg3TEk7RUE1eU1GLDhIQUFBO0FEa1hGOztBQzA3TEk7RUE1eU1GLDhIQUFBO0FEc1hGOztBQ3M3TEk7RUE1eU1GLDhIQUFBO0FEMFhGOztBQ2s3TEk7RUE1eU1GLDhIQUFBO0FEOFhGOztBQ3E3TEk7RUFDRSxhQUFBO0FEbDdMTjs7QUMwOENFO0VBRUUsaUJBQUE7RUFDQSwwQkFBQTtBRHg4Q0o7O0FDcFhFO0VBbkJBLDBIQUFBO0FEMFlGOztBQzQ4Q0k7RUFDRSxpQkFBQTtBRDE4Q047O0FDNDhDTTtFQUNFLDBCQUFBO0FEMThDUjs7QUN5a0RFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FEdGtESjs7QUNsdUJJO0VBMnlFRSxrQkFBQTtFQUNBLGdCQUFBO0FEdGtETjs7QUMya0RJO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FEeGtETjs7QUM2a0RJO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FEMWtETjs7QUM4a0RFO0VBQ0Usa0JBQUE7QUQza0RKOztBQytrREk7RUFDRSxhQUFBO0FENWtETjs7QUNpbERJO0VBV0ksbUJBQUE7RUFNRiwwQkFBQTtBRDdsRE47O0FDaW1ERTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUNBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0FEOWxESjs7QUNpbURFOztFQUVFLGdCQUFBO0FEOWxESjs7QUNtbURFO0VBRUUsZUFBQTtBRGptREo7O0FDazhDRTtFQUNFLFdBTm1CO0VBT25CLFlBUG1CO0VBUW5CLGlCQVJtQjtBRHY3Q3ZCOztBQ204Q0k7RUFDRSxTQUFBO0FEajhDTjs7QUNzOENJO0VBQ0UsWUFBQTtBRHA4Q047O0FDeThDSTtFQUNFLFdBQUE7QUR2OENOOztBQzQ4Q0k7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBRDE4Q047O0FDKzhDSTtFQUNFLFlBQUE7QUQ3OENOOztBQ2s5Q0k7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBRGg5Q047O0FDczlDTTtFQUNFLFVBQUE7QURwOUNSOztBQ3k5Q007RUFDRSxVQUFBO0VBQ0EsV0FBQTtBRHY5Q1I7O0FDNDlDTTtFQUNFLFdBQUE7QUQxOUNSOztBQys5Q007RUFDRSxXQUFBO0VBQ0EsVUFBQTtBRDc5Q1I7O0FDMDVDRTtFQUNFLFdBUHFCO0VBUXJCLFlBUnFCO0VBU3JCLGlCQVRxQjtBRDk0Q3pCOztBQzI1Q0k7RUFDRSxVQUFBO0FEejVDTjs7QUM4NUNJO0VBQ0UsYUFBQTtBRDU1Q047O0FDaTZDSTtFQUNFLFdBQUE7QUQvNUNOOztBQ282Q0k7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBRGw2Q047O0FDdTZDSTtFQUNFLFlBQUE7QURyNkNOOztBQzA2Q0k7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBRHg2Q047O0FDODZDTTtFQUNFLFdBQUE7QUQ1NkNSOztBQ2k3Q007RUFDRSxVQUFBO0VBQ0EsWUFBQTtBRC82Q1I7O0FDbzdDTTtFQUNFLFlBQUE7QURsN0NSOztBQ3U3Q007RUFDRSxXQUFBO0VBQ0EsV0FBQTtBRHI3Q1I7O0FDazNDRTtFQUNFLFdBTG1CO0VBTW5CLFlBTm1CO0VBT25CLGlCQVBtQjtBRHgyQ3ZCOztBQ20zQ0k7RUFDRSxVQUFBO0FEajNDTjs7QUNzM0NJO0VBQ0UsYUFBQTtBRHAzQ047O0FDeTNDSTtFQUNFLFdBQUE7QUR2M0NOOztBQzQzQ0k7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBRDEzQ047O0FDKzNDSTtFQUNFLFlBQUE7QUQ3M0NOOztBQ2s0Q0k7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBRGg0Q047O0FDczRDTTtFQUNFLFdBQUE7QURwNENSOztBQ3k0Q007RUFDRSxVQUFBO0VBQ0EsWUFBQTtBRHY0Q1I7O0FDNDRDTTtFQUNFLFlBQUE7QUQxNENSOztBQys0Q007RUFDRSxXQUFBO0VBQ0EsV0FBQTtBRDc0Q1I7O0FDeWlERTtFQXZtRUEsNkhBQUE7RUF5bUVFLGlCQUFBO0VBQ0EsMEJBQUE7QUR0aURKOztBQ29xREU7RUFLRSxjQUFBO0VBQ0EsdUJBQUE7QURycURKOztBQ3FvREU7RUFDRSxjQUFBO0FEbm9ESjs7QUNxb0RFO0VBQ0UsY0FBQTtBRG5vREo7O0FDcW9ERTtFQUNFLGNBQUE7QURub0RKOztBQ3VvREk7RUFFRSwwQkFBQTtBRHRvRE47O0FDbWtERTtFQUNFLHlCQUFBO0FEamtESjs7QUNva0RFO0VBQ0UseUJBQUE7QURsa0RKOztBQ3FrREU7RUFDRSx5QkFBQTtBRG5rREo7O0FDc2tERTtFQUNFLDZCQUFBO0FEcGtESjs7QUNxcERJO0VBQ0UsWUF4R3VCO0VBeUd2Qiw4QkFBQTtBRG5wRE47O0FDdXBERTtFQUNFLGlCQUFBO0FEcHBESjs7QUN5cERFO0VBQ0UsaUNBQUE7QUR0cERKOztBQ3lwREU7RUFFRSwwQkFBQTtFQUNBLHVCQUFBO0FEdnBESjs7QUM0bERFO0VBQ0UsWUFBQTtBRDFsREo7O0FDNGxERTtFQUNFLFlBQUE7QUQxbERKOztBQzRsREU7RUFDRSxZQUFBO0FEMWxESjs7QUM4bERJO0VBRUUsMEJBQUE7QUQ3bEROOztBQ2dsREU7RUFDRSx5QkFBQTtBRDlrREo7O0FDZ2xERTtFQUNFLHlCQUFBO0FEOWtESjs7QUNnbERFO0VBQ0UseUJBQUE7QUQ5a0RKOztBQ2tsREk7RUFFRSxxQ0FBQTtBRGpsRE47O0FDK2lERTtFQVhBLDBDQURtQjtBRGhpRHJCOztBQ2dqREU7RUFmQSwwQ0FEbUI7QUQ3aERyQjs7QUNpakRFO0VBbkJBLDBDQURtQjtBRDFoRHJCOztBQ2hvQkU7RUFuQkEsd0hBQUE7QUR1cEJGOztBQ3BvQkU7RUFuQkEseUhBQUE7QUQycEJGOztBQ3hvQkU7RUFuQkEsMkhBQUE7QUQ4cEJGOztBQzNvQkU7RUFuQkEsd0hBQUE7QURpcUJGOztBQzlvQkU7RUFuQkEsMkhBQUE7QURxcUJGOztBQ2xwQkU7RUFuQkEsNEhBQUE7QUR3cUJGOztBQ3JwQkU7RUFuQkEsd0hBQUE7QUQycUJGOztBQ293REU7O0VBLzZFQSx5SEFBQTtBRGdyQkY7O0FDb3dERTs7RUFFRSxnQkFBQTtBRGp3REo7O0FDb3dERTtFQUNFLDBCQUFBO0FEandESjs7QUNtd0RJO0VBQ0UscUNBQUE7QURqd0ROOztBQ3F3REU7RUFDRSwwQkFBQTtFQUNBLGlCQUFBO0FEbHdESjs7QUNvd0RJO0VBQ0UsdUJBQUE7QURsd0ROOztBQ3N3REU7RUFDRSwwQ0FBQTtBRG53REo7O0FDc3dERTtFQUNFLGlCQUFBO0VBQ0EsMkNBQUE7QURud0RKOztBQ3V3REk7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7QURwd0ROOztBQ3d3REU7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0FEcndESjs7QUN1d0RJO0VBQ0UsMEJBQUE7QURyd0ROOztBQ3l3REU7RUFDRSwwQkFBQTtFQUNBLHlCQUFBO0FEdHdESjs7QUN3d0RJO0VBQ0UsaUJBQUE7QUR0d0ROOztBQ3l3REk7RUFDRSx5QkFBQTtBRHZ3RE47O0FDMndERTs7RUFFRSxxQ0FBQTtBRHh3REo7O0FDeXhESTtFQUNFLGlCQUxjO0FEanhEcEI7O0FDMHpERTtFQUVFLGlCQUFBO0VBQ0EsMEJBQUE7QUR4ekRKOztBQ2p1QkU7RUFuQkEseUhBQUE7QUR1dkJGOztBQ3B1QkU7RUFuQkEsd0hBQUE7QUQwdkJGOztBQzB6REU7RUFDRSwwQkFBQTtBRHZ6REo7O0FDZzRERTtFQUNFLGlDQUFBO0FENzNESjs7QUNnNERFO0VBQ0UsYUFkb0I7QUQvMkR4Qjs7QUNnNERFO0VBR0UsMEJBQUE7QUQvM0RKOztBQ2s0REU7RUFDRSx5QkF4Qm9CO0FEdjJEeEI7O0FDbTRESTtFQUNFLHlCQUFBO0FEaDRETjs7QUNtNERJO0VBQ0UseUJBQUE7QURqNEROOztBQ280REk7RUFDRSx5QkFBQTtBRGw0RE47O0FDeTRETTtFQUNFLHlCQXRDVztBRGgyRG5COztBQzI0RE07RUFDRSxxQkE1Q1c7QUQ3MURuQjs7QUM2NERJO0VBQ0UsMEJBQUE7QUQzNEROOztBQ2k1REU7RUFDRSx1QkFBQTtBRDk0REo7O0FDbTVESTs7RUFDRSxtQkFBQTtBRC80RE47O0FDazVESTs7RUFDRSxtQkFBQTtBRC80RE47O0FDazVESTs7RUFDRSxtQkFBQTtBRC80RE47O0FDeStERTtFQTNDQSx5QkF3Q3dCO0VBdkN4QiwwQkF3Q3dCO0FEbCtEMUI7O0FDNDdERTtFQUNFLDBCQXFDc0I7RUFwQ3RCLFlBQUE7QUQxN0RKOztBQ28rRE07RUFoeUZKLHlIQUFBO0FEK3pCRjs7QUNxK0RNO0VBQ0UsYUFBQTtBRG4rRFI7O0FDdStESTtFQUNFLFlBQUE7QURyK0ROOztBQ3crREk7RUFDRSxpQkFBQTtBRHQrRE47O0FDMitESTtFQWxFRix5QkF3QndFO0VBdkJ4RSxZQXVCaUM7QUQ1N0RuQzs7QUN1NkRFO0VBQ0UsWUFvQitCO0VBbkIvQixZQUFBO0FEcjZESjs7QUMwN0RFO0VBVEEsMENBRG1CO0FENzZEckI7O0FDbStESTtFQXRFRix5QkF3QndFO0VBdkJ4RSxZQXVCaUM7QURqN0RuQzs7QUM0NURFO0VBQ0UsWUFvQitCO0VBbkIvQixZQUFBO0FEMTVESjs7QUMrNkRFO0VBVEEsMENBRG1CO0FEbDZEckI7O0FDNDlESTtFQTFFRix5QkF3QndFO0VBdkJ4RSxZQXVCaUM7QUR0NkRuQzs7QUNpNURFO0VBQ0UsWUFvQitCO0VBbkIvQixZQUFBO0FELzRESjs7QUNvNkRFO0VBVEEsMENBRG1CO0FEdjVEckI7O0FDNmlFRTtFQUNFLGlCQUFBO0FEMWlFSjs7QUM2aUVFOzs7O0VBSUUsbUJBQUE7QUQxaUVKOztBQzZpRUU7O0VBRUUsd0NBQUE7QUQxaUVKOztBQzZpRUU7RUFDRSwwQkFBQTtBRDFpRUo7O0FDNmlFRTtFQUNFLDBCQUFBO0FEMWlFSjs7QUMwb0VFO0VBQ0UscUNBQUE7QUR2b0VKOztBQzRvRUU7OztFQUdFLDBCQUFBO0FEem9FSjs7QUM0b0VFO0VBQ0UsMEJBQUE7QUR6b0VKOztBQzRvRUU7RUFDRSwrQkFBQTtBRHpvRUo7O0FDNG9FRTtFQUNFLDBCQUFBO0FEem9FSjs7QUM0b0VFOztFQUVFLDBCQUFBO0VBQ0EseUJBQUE7QUR6b0VKOztBQ21tRUU7RUEyQ0ksMEJBbENhO0FEeG1FbkI7O0FDOG9FRTtFQUNFLDBCQXZDZTtBRHBtRW5COztBQzJsRUU7OztFQXdETSxxQ0FBQTtBRDdvRVI7O0FDa3BFRTtFQU9JLDBCQUFBO0FEcnBFTjs7QUNpbEVFO0VBK0VJLGlDQUFBO0FENXBFTjs7QUM2a0VFO0VBd0ZNLGlDQUFBO0FEanFFUjs7QUNrdkVFO0VBQ0Usa0NBdE1BO0FEemlFSjs7QUNrdkVFOztFQUVFLGtDQVZpQjtBRHJ1RXJCOztBQ2t2RUU7O0VBRUUsNkZBQUE7QUQvdUVKOztBQ2t2RUU7O0VBRUUsNEZBQUE7QUQvdUVKOztBQ2t2RUU7O0VBRUUsbUJBeEJjO0FEdnRFbEI7O0FDa3ZFRTs7RUFFRSxtQkE1QnVCO0FEbnRFM0I7O0FDa2hFRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBRC9nRUo7O0FDa2hFRTtFQUlJLHdDQUFBO0FEbGhFTjs7QUMyaEVFO0VBQ0UsaUNBQUE7QUR4aEVKOztBQ3FvRUU7RUF2bUdBLDBIQUFBO0VBeW1HRSx1QkFBQTtFQUNBLDBCQUFBO0FEbG9FSjs7QUNrc0VFO0VBQ0UsbUNBdE1BO0FEMS9ESjs7QUNtc0VFOztFQUVFLGtDQVZpQjtBRHZyRXJCOztBQ29zRUU7O0VBRUUsOEZBQUE7QURsc0VKOztBQ3FzRUU7O0VBRUUsNkZBQUE7QURuc0VKOztBQ3NzRUU7O0VBRUUsbUJBeEJjO0FENXFFbEI7O0FDdXNFRTs7RUFFRSxtQkE1QnVCO0FEenFFM0I7O0FDdytERTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBRHQrREo7O0FDeStERTtFQUlJLHlDQUFBO0FEMStETjs7QUNtL0RFO0VBQ0UsaUNBQUE7QURqL0RKOztBQ2lxRUU7RUFDRSxrQ0F0TUE7QUR6OURKOztBQ2txRUU7O0VBRUUsa0NBVmlCO0FEdHBFckI7O0FDbXFFRTs7RUFFRSw2RkFBQTtBRGpxRUo7O0FDb3FFRTs7RUFFRSw0RkFBQTtBRGxxRUo7O0FDcXFFRTs7RUFFRSxtQkF4QmM7QUQzb0VsQjs7QUNzcUVFOztFQUVFLG1CQTVCdUI7QUR4b0UzQjs7QUN1OERFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FEcjhESjs7QUN3OERFO0VBSUksd0NBQUE7QUR6OEROOztBQ2s5REU7RUFDRSxpQ0FBQTtBRGg5REo7O0FDMmtFRTtFQXJuR0Esd0hBQUE7QUQ4aUNGOztBQzJrRUU7RUFDRSxjQUFBO0FEeGtFSjs7QUMwa0VJO0VBQ0UsY0FBQTtBRHhrRU47O0FDMmtFSTtFQUNFLGNBQUE7QUR6a0VOOztBQzZrRUU7RUFDRSwwQkFBQTtBRDFrRUo7O0FDNnFFRTtFQXp1R0EsOEhBQUE7RUEydUdFLGlCQUFBO0VBQ0EsMEJBQUE7QUQxcUVKOztBQzJ5REU7RUFDRSxxQ0FBQTtBRHh5REo7O0FDMnlERTtFQUNFLHVDQUFBO0FEeHlESjs7QUM2dUVFO0VBRUUsaUJBQUE7RUFDQSwwQkFBQTtBRDN1RUo7O0FDNWpDRTtFQW5CQSx5SEFBQTtBRGtsQ0Y7O0FDMnVFRTtFQUNFLHFDQUFBO0FEeHVFSjs7QUMrdUVNO0VBQ0UsK0JBQUE7QUQ1dUVSOztBQ212RUU7RUFDRTtJQUVFLGlCQUFBO0VEanZFSjtBQUNGOztBQ292RUU7RUFDRSwwQkFBQTtBRGx2RUo7O0FDcXZFRTs7RUFFRSwwQkFBQTtBRGx2RUo7O0FDcXZFRTtFQUNFLDBCQUFBO0FEbHZFSjs7QUNvdkVJOztFQUVFLGNBQUE7QURsdkVOOztBQzh3RUk7RUFDRSxZQUxlO0FEdHdFckI7O0FDNndFTTtFQUNFLFlBVlk7QURqd0VwQjs7QUNteUpFO0VBQ0UseUJBWFk7QURyeEpoQjs7QUNteUpFO0VBQ0UseUJBZlk7QURqeEpoQjs7QUNteUpFO0VBQ0UsY0FsQm9CO0FEOXdKeEI7O0FDa3lKSTtFQUNFLGNBaEJxQjtBRGh4SjNCOztBQ215Skk7RUFDRSxjQW5CbUI7QUQ5d0p6Qjs7QUNxeUpFO0VBQ0UsY0E3QnFCO0FEcndKekI7O0FDcXlKRTtFQUNFLHFDQTlCcUI7QURwd0p6Qjs7QUNzeUpJO0VBQ0UseUJBaENzQjtBRG53SjVCOztBQ3F5Sk07RUFDRSx5QkFyQ21CO0FEOXZKM0I7O0FDc3lKTTtFQUNFLHlCQXhDaUI7QUQ1dkp6Qjs7QUMweUpJO0VBQ0UsY0E5Q3NCO0FEenZKNUI7O0FDMHlKSTtFQUNFLGNBcERxQjtBRHB2SjNCOztBQzJ5Skk7RUFDRSxjQXZEbUI7QURsdkp6Qjs7QUNpekpJO0VBQ0UsY0FoRW1CO0FEOXVKekI7O0FDZ3pKTTs7RUFFRSxjQXBFaUI7QUQxdUp6Qjs7QUNrekpJOztFQUVFLHlCQTFFbUI7QUR0dUp6Qjs7QUNvekpFO0VBQ0UsY0EvRXFCO0FEbHVKekI7O0FDNjBJSTtFQUNFLDBCQUxVO0FEcjBJaEI7O0FDNjBJSTtFQUNFLDBCQVRVO0FEbDBJaEI7O0FDODBJSTtFQUNFLHFDQVpjO0FEaDBJcEI7O0FDKzBJSTtFQS85REYsNEdBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0FENzJFRjs7QUMrcEpJO0VBQ0UscUNBSmM7QUR4cEpwQjs7QUMrcEpJO0VBeHpFRiw0R0FBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7QURwMkVGOztBQzBySUk7RUFDRSxxQ0FQYztBRGhySXBCOztBQzBySUk7RUFDRSxxQ0FWdUI7QUQ5cUk3Qjs7QUMycklJO0VBQ0UscUNBYmM7QUQ1cUlwQjs7QUM2cklNO0VBQ0UsMEJBakJpQjtBRDFxSXpCOztBQzhySU07RUFDRSw2QkFBQTtBRDVySVI7O0FDbS9JSTtFQUNFLDBCQVRZO0FEditJbEI7O0FDbS9JSTtFQUNFLDBCQVprQjtBRHIrSXhCOztBQ3EvSU07RUFDRSxjQWhCa0I7QURuK0kxQjs7QUNzL0lNO0VBQ0UsY0FuQmlCO0FEaitJekI7O0FDdS9JTTtFQUNFLGNBdEJlO0FELzlJdkI7O0FDMi9JTTtFQUNFLGNBN0JlO0FENTlJdkI7O0FDOC9JTTtFQUNFLDBCQXhDaUI7QURwOUl6Qjs7QUMrL0lNO0VBQ0UsMEJBdENtQjtBRHY5STNCOztBQzB3RUk7RUFDRSxjQUFBO0FEdndFTjs7QUMwd0VJO0VBQ0UsY0FBQTtBRHh3RU47O0FDMndFSTtFQUNFLGNBQUE7QUR6d0VOOztBQ3MzRUU7RUFDRSwwQkFBQTtBRG4zRUo7O0FDczNFRTs7RUFFRSwwQkFBQTtBRG4zRUo7O0FDczNFRTtFQUNFLG9CQUFBO0FEbjNFSjs7QUMwekVFO0VBNERJLDBCQUFBO0FEbjNFTjs7QUMyekVFO0VBd0RJLDBCQUFBO0FEaDNFTjs7QUM0ekVFO0VBb0RJLDBCQUFBO0FENzJFTjs7QUM2ekVFO0VBZ0RJLDBCQUFBO0FEMTJFTjs7QUM2M0VFO0VBQ0Usb0JBQUE7QUQxM0VKOztBQzYzRUU7O0VBRUUsb0JBQUE7QUQxM0VKOztBQzYzRUU7RUFDRSxjQUFBO0FEMTNFSjs7QUNnN0VJO0VBQ0UsMEJBQUE7QUQ3NkVOOztBQ2c3RUk7RUFDRSwwQkFBQTtBRDk2RU47O0FDaTdFSTtFQUNFLDBCQUFBO0FELzZFTjs7QUNtN0VFO0VBQ0UseUJBQUE7QURoN0VKOztBQ3M3RUk7Ozs7O0VBQ0UsK0JBQUE7QUQvNkVOOztBQ283RUk7RUFDRSwrQkFBQTtBRGo3RU47O0FDMGdGRTtFQUVFLGlCQUFBO0FEeGdGSjs7QUNqekNFO0VBbkJBLDBIQUFBO0FEdTBDRjs7QUN3Z0ZFO0VBQ0UsdUJBQUE7RUFDQSwwQkFBQTtBRHJnRko7O0FDd2dGTTtFQUNFLDBCQUFBO0FEdGdGUjs7QUMyZ0ZFOztFQUVFLDBCQUFBO0FEeGdGSjs7QUMrZ0ZJOzs7O0VBQ0UsK0JBQUE7QUR6Z0ZOOztBQ3drRkU7RUFDRSxpQkFBQTtBRHJrRko7O0FDd2tGRTs7RUFFRSwwQkFBQTtBRHJrRko7O0FDd2tGRTs7RUFFRSx5Q0FBQTtFQUNBLDJDQUFBO0FEcmtGSjs7QUN3a0ZFOztFQUVFLHlDQUFBO0FEcmtGSjs7QUN5a0ZJOzs7O0VBSUUsaUNBQUE7QUR0a0ZOOztBQzJsRkk7RUFDRSxnQkFKSztBRHBsRlg7O0FDMG5GRTtFQUNFLGFBQUE7QUR2bkZKOztBQzBuRkU7RUFDRSx5QkFBQTtBRHZuRko7O0FDMG5GRTtFQUNFLHlCQUFBO0FEdm5GSjs7QUMybkZJO0VBQ0UsYUFBQTtBRHhuRk47O0FDMm5GSTtFQUNFLHlCQUFBO0FEem5GTjs7QUM0bkZJO0VBQ0UseUJBQUE7QUQxbkZOOztBQytuRkk7RUFDRSxhQUFBO0FENW5GTjs7QUMrbkZJO0VBQ0UseUJBQUE7QUQ3bkZOOztBQ2dvRkk7RUFDRSx5QkFBQTtBRDluRk47O0FDc3FGSTtFQUNFLGVBQUE7QURucUZOOztBQ3NxRkk7RUFDRSxlQUFBO0FEcHFGTjs7QUN1cUZJO0VBQ0UsZUFBQTtBRHJxRk47O0FDMnRGRTtFQUNFLGlDQUFBO0FEeHRGSjs7QUNtc0ZFO0VBQ0UscUJBQUE7QURoc0ZKOztBQ21zRkU7O0VBSUUseUJBQUE7QURuc0ZKOztBQzJyRkU7RUFDRSxxQkFBQTtBRHpyRko7O0FDNHJGRTs7RUFJRSx5QkFBQTtBRDVyRko7O0FDb3JGRTtFQUNFLHFCQUFBO0FEbHJGSjs7QUNxckZFOztFQUlFLHlCQUFBO0FEcnJGSjs7QUNzdEZNOztFQUVFLGlDQUFBO0FEcHRGUjs7QUN1dEZNOztFQUVFLHFDQUFBO0FEcnRGUjs7QUN3dEZNO0VBQ0UsMEJBQUE7QUR0dEZSOztBQzR0Rkk7RUFDRSx1QkFBQTtBRDF0Rk47O0FDMndGRTtFQUNFLDBCQUFBO0FEeHdGSjs7QUMyd0ZFO0VBQ0UsMEJBQUE7QUR4d0ZKOztBQzJ3RkU7RUFDRSwwQkFBQTtBRHh3Rko7O0FDMndGRTtFQUNFLDBCQUFBO0FEeHdGSjs7QUMyd0ZFO0VBQ0UsaUJBQUE7QUR4d0ZKOztBQzc4Q0U7RUFuQkEsMEhBQUE7QURtK0NGOztBQ3d3Rkk7RUFDRSwrQkFBQTtBRHR3Rk47O0FDNHdGTTtFQUNFLGNBQUE7QUR6d0ZSOztBQzR3Rk07RUFDRSxjQUFBO0FEMXdGUjs7QUM2d0ZNO0VBQ0UsY0FBQTtBRDN3RlI7O0FDK3dGSTtFQUNFLGNBQUE7QUQ3d0ZOOztBQ2d4Rkk7RUFDRSwwQkFBQTtBRDl3Rk47O0FDdzBGRTtFQUNFLHlCQUxtQztFQU1uQywwQkFBQTtBRHIwRko7O0FDdzBGRTtFQUNFLHVCQVh3QjtFQVl4QiwwQkFBQTtBRHIwRko7O0FDdTBGSTtFQUNFLHVCQWIyQjtBRHh6RmpDOztBQ3cwRkk7RUEzMElGLDZIQUFBO0FEc2dERjs7QUM0MEZFO0VBQ0UsMkNBdkJtQjtBRGx6RnZCOztBQzIwRkk7RUFDRSwwQ0ExQmlCO0VBMkJqQixrQkFBQTtBRHowRk47O0FDNjBGRTtFQUNFLDBDQWhDbUI7RUFpQ25CLGtCQUFBO0FEMTBGSjs7QUM0MEZJO0VBQ0UsaUJBQUE7RUFDQSwyQ0FyQ2lCO0FEcnlGdkI7O0FDODBGRTtFQVFJLG9DQUFBO0FEbDFGTjs7QUM0M0ZJO0VBQ0UseUJBQUE7QUR6M0ZOOztBQzQzRkk7RUFHRSwwQ0FBQTtBRDUzRk47O0FDKzNGSTtFQUdFLHlCQUFBO0FELzNGTjs7QUNrM0ZJO0VBQ0UseUJBQUE7QURoM0ZOOztBQ20zRkk7RUFHRSx5Q0FBQTtBRG4zRk47O0FDczNGSTtFQUdFLHlCQUFBO0FEdDNGTjs7QUN5MkZJO0VBQ0UseUJBQUE7QUR2MkZOOztBQzAyRkk7RUFHRSx5Q0FBQTtBRDEyRk47O0FDNjJGSTtFQUdFLHlCQUFBO0FENzJGTjs7QUNrNUZJO0VBR0UsdUJBaEJxQjtBRGw0RjNCOztBQ3M1RkU7RUFoOUlBLHlIQUFBO0VBazlJRSx5QkFBQTtBRG41Rko7O0FDczVGRTtFQUNFLHFDQTNCb0I7QUR4M0Z4Qjs7QUNrK0ZFO0VBQ0UscUNBVnFCO0FEcjlGekI7O0FDczdGRTs7O0VBR0UseUJBQUE7QURuN0ZKOztBQ3M3RkU7RUFDRSxZQUFBO0FEcDdGSjs7QUN1N0ZFO0VBR0Usd0NBRFE7QUR0N0ZaOztBQzA2RkU7OztFQUdFLHlCQUFBO0FEdjZGSjs7QUMwNkZFO0VBQ0UsWUFBQTtBRHg2Rko7O0FDMjZGRTtFQUdFLHlDQURRO0FEMTZGWjs7QUM4NUZFOzs7RUFHRSx5QkFBQTtBRDM1Rko7O0FDODVGRTtFQUNFLFlBQUE7QUQ1NUZKOztBQys1RkU7RUFHRSx3Q0FEUTtBRDk1Rlo7O0FDNDhGSTs7RUFDRSxxQ0EzQjJCO0FENzZGakM7O0FDNjhGSTs7O0VBR0UscUNBbEN3QjtBRHg2RjlCOztBQzg4Rk07RUFDRSxxQ0F2Q3NCO0FEcjZGOUI7O0FDazlGSTtFQUdFLHFDQURRO0FEaDlGZDs7QUMyOUZNOztFQUVFLHFDQTNEcUM7QUQ5NUY3Qzs7QUM2OUZROztFQUVFLHFDQWhFeUM7QUQzNUZuRDs7QUNpK0ZNO0VBQ0UsaUNBM0VpQjtFQTRFakIsNkJBQUE7QUQvOUZSOztBQ28rRlE7RUFDRSxpQ0FqRnVCO0FEajVGakM7O0FDcStGUTtFQUNFLGlDQXBGb0I7QUQvNEY5Qjs7QUN5K0ZFO0VBQ0UsZ0NBdkZzQjtBRC80RjFCOztBQysrRkU7RUFDRSw2SEFBQTtFQUlBLG1JQUFBO0FELytGSjs7QUN5L0ZFO0VBQ0UsOEhBQUE7QUR0L0ZKOztBQzZrR0k7RUFHRSxxQ0FBQTtBRDVrR047O0FDa2xHSTtFQUNFO0lBQ0UsZ0JBQUE7RURobEdOO0FBQ0Y7O0FDbWxHSTs7RUFJRSwwQkFBQTtBRG5sR047O0FDc2xHSTtFQUdFLHFDQUFBO0VBQ0EsWUFBQTtBRHRsR047O0FDeWxHSTs7O0VBR0UseUJBQUE7RUFDQSxZQUFBO0FEdmxHTjs7QUMwbEdJO0VBQ0UsNkJBQUE7RUFDQSxjQUFBO0FEeGxHTjs7QUMybEdJO0VBQ0UsMEJBQUE7QUR6bEdOOztBQzRsR0k7RUFDRSxjQUFBO0FEMWxHTjs7QUM4bEdFO0VBQ0UsdUJBQUE7QUQzbEdKOztBQzhsR0U7RUFDRSxzQ0FBQTtBRDNsR0o7O0FDOGxHRTs7O0VBR0UscUNBQUE7QUQzbEdKOztBQ2tvR0k7RUFDRSxZQUxLO0FEMW5HWDs7QUNrb0dJOztFQUVFLGtCQUFBO0FEL25HTjs7QUNvb0dJO0VBQ0UsVUFBQTtFQUNBLGFBQUE7QURqb0dOOztBQ3NvR007RUFDRSxTQUFBO0FEbm9HUjs7QUN3b0dJO0VBQ0UsU0FBQTtBRHJvR047O0FDcXFHRTtFQVlJLGNBQUE7QUQ3cUdOOztBQzB0R0U7O0VBRUUsNENBSmM7QURudEdsQjs7QUMydEdJOztFQUVFLHlDQVZZO0VBV1osbUJBQUE7QUR4dEdOOztBQzR0R0U7RUFDRSwwQkFBQTtBRHp0R0o7O0FDMnRHSTtFQUNFLDBCQUFBO0FEenRHTjs7QUM2dEdFO0VBQ0UsaUNBQUE7QUQxdEdKOztBQzZ0R0U7RUFDRSxpQ0FBQTtBRDF0R0o7O0FDOHRHRTs7RUFFRSxtQkFBQTtFQUNBLGdCQUFBO0FEM3RHSjs7QUN1d0dNOzs7OztFQUNFLDBDQUFBO0FEaHdHUjs7QUNxdkdFO0VBQ0UseUJBQUE7QURudkdKOztBQ2t2R0U7RUFDRSx1QkFBQTtBRGh2R0o7O0FDeXZHTTs7Ozs7RUFDRSwwQ0FBQTtBRG52R1I7O0FDd3VHRTtFQUNFLHlCQUFBO0FEdHVHSjs7QUNxdUdFO0VBQ0UsdUJBQUE7QURudUdKOztBQzR1R007Ozs7O0VBQ0UsMENBQUE7QUR0dUdSOztBQzJ0R0U7RUFDRSx5QkFBQTtBRHp0R0o7O0FDd3RHRTtFQUNFLHVCQUFBO0FEdHRHSjs7QUMrdEdNOzs7OztFQUNFLDBDQUFBO0FEenRHUjs7QUNpdUdFO0VBQ0UseUJBQUE7QUQvdEdKOztBQ211R0U7RUFDRSxZQUFBO0FEanVHSjs7QUNtdUdJO0VBQ0UsK0JBQUE7QURqdUdOOztBQ3N1R0U7RUFDRSxtQkFBQTtBRHB1R0o7O0FDdXVHRTtFQUNFLHNDQUFBO0FEcnVHSjs7QUMwdUdFO0VBQ0UsMkNBQUE7QUR4dUdKOztBQ3NzR007Ozs7O0VBQ0UsMENBQUE7QURoc0dSOztBQ3dzR0U7RUFDRSx5QkFBQTtBRHRzR0o7O0FDMHNHRTtFQUNFLFlBQUE7QUR4c0dKOztBQzBzR0k7RUFDRSwrQkFBQTtBRHhzR047O0FDNnNHRTtFQUNFLG1CQUFBO0FEM3NHSjs7QUM4c0dFO0VBQ0Usc0NBQUE7QUQ1c0dKOztBQ2l0R0U7RUFDRSwyQ0FBQTtBRC9zR0o7O0FDNnFHTTs7Ozs7RUFDRSwwQ0FBQTtBRHZxR1I7O0FDK3FHRTtFQUNFLHlCQUFBO0FEN3FHSjs7QUNpckdFO0VBQ0UsWUFBQTtBRC9xR0o7O0FDaXJHSTtFQUNFLCtCQUFBO0FEL3FHTjs7QUNvckdFO0VBQ0UsbUJBQUE7QURsckdKOztBQ3FyR0U7RUFDRSxzQ0FBQTtBRG5yR0o7O0FDd3JHRTtFQUNFLDJDQUFBO0FEdHJHSjs7QUM0eUdFO0VBQ0Usc0JBQUE7RUFDQSwwQkFBQTtBRHp5R0o7O0FDMnlHSTtFQXBDRixtQkFBQTtFQUNBLFlBQUE7QURwd0dGOztBQzJ5R0k7RUF4Q0YsbUJBQUE7RUFDQSxZQUFBO0FEaHdHRjs7QUMyeUdJO0VBNUNGLG1CQUFBO0VBQ0EsWUFBQTtBRDV2R0Y7O0FDZ3dHRTs7O0VBR0UsOEJBQUE7QUQ5dkdKOztBQ2l3R0U7Ozs7O0VBS0UsY0FBQTtBRC92R0o7O0FDa3dHRTtFQUNFLHlCQUFBO0FEaHdHSjs7QUNtdUdFO0VBQ0UsZ0JBNEVlO0FENXlHbkI7O0FDa3VHRTtFQUNFLFlBeUVlO0FEeHlHbkI7O0FDb3pHSTtFQXpGRjtJQUNFLGdCQThFYztFRHJ5R2hCOztFQ3l0R0E7SUFDRSxZQTJFYztFRGp5R2hCO0FBQ0Y7O0FDcTFHRTtFQUNFLGlDQUFBO0FEbjFHSjs7QUNrdklFO0VBQ0UsaUJBQUE7QUQvdUlKOztBQ2t2SUU7O0VBRUUsMEJBQUE7QUQvdUlKOztBQ3F3SUk7RUFDRSxnQkFKSztBRDl2SVg7O0FDMjNHRTtFQUdFLCtCQUFBO0VBQ0EsbUJBQUE7RUF6ektGLDJIQUFBO0FEZzhERjs7QUM4M0dFO0VBQ0UsY0FBQTtBRDMzR0o7O0FBMTVFQTtFQUNFLFNBQUE7RUFDQSxvREFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQTY1RUY7O0FBMTVFQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQTY1RUY7O0FBeDVFQTtFQUNFO0lBQ0UsWUFBQTtFQTI1RUY7QUFDRjs7QUF4NUVBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7QUEwNUVGOztBQXg1RUU7RUFDRSxjQUFBO0FBMDVFSjs7QUF0NUVBO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUF5NUVGOztBQXQ1RUE7RUFDRSxhQUFBO0FBeTVFRjs7QUF0NUVBO0VBQ0UsNkJBQUE7QUF5NUVGOztBQXQ1RUE7O0VBRUUsZ0NBQUE7QUF5NUVGOztBQXQ1RUE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQXk1RUY7O0FBdjVFRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsdUNBQUE7RUFDQSxvQkFBQTtFQUNBLHVDQUFBO0VBQ0Esd0JBQUE7QUF5NUVKOztBQXY1RUU7RUFDRSxvQkFBQTtFQUNBLHdCQUFBO0FBeTVFSjs7QUFyNUVBO0VBQ0UsdUJBQUE7QUF3NUVGOztBQXA1RUU7RUFDRSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FBdTVFSjs7QUFwNUVFO0VBQ0UsZ0NBQUE7QUFzNUVKOztBQWw1RUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FBcTVFRjs7QUFsNUVBO0VBQ0Usd0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtBQXE1RUY7O0FBbjVFRTtFQUNFLFlBQUE7QUFxNUVKOztBQWw1RUU7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7QUFvNUVKOztBQWw1RUk7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQW81RU47O0FBajVFSTtFQUNFLFlBQUE7QUFtNUVOOztBQTk0RUE7RUFDRSxnQ0FBQTtBQWk1RUYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XHJcbiAgLS1ibGFjazogIzE3MDQwNDtcclxuICAtLWRhcmtQcmltYXJ5OiAjNjIxMTExO1xyXG4gIC0tbGlnaHRncmF5OiAjZmNkZWRlO1xyXG4gIC0td2hpdGU6ICNmZmY7XHJcbiAgLS1wcmltYXJ5OiAjZDAyOTI5O1xyXG4gIC0tYmFja2dyb3VuZDogIzFjMDUwNTtcclxufVxyXG4iLCI6cm9vdCB7XG4gIC0tYmxhY2s6ICMxNzA0MDQ7XG4gIC0tZGFya1ByaW1hcnk6ICM2MjExMTE7XG4gIC0tbGlnaHRncmF5OiAjZmNkZWRlO1xuICAtLXdoaXRlOiAjZmZmO1xuICAtLXByaW1hcnk6ICNkMDI5Mjk7XG4gIC0tYmFja2dyb3VuZDogIzFjMDUwNTtcbn1cblxuLyogQ29sb3JzIGZvciB0aGUgcmlwcGxlIGVsZW1lbnRzLiovXG4vKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF0ZXJpYWwvdGhlbWUtbWl4aW4tYXBpICovXG4vKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF0ZXJpYWwvdGhlbWUtbWl4aW4tYXBpICovXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBtYXRlcmlhbC9uby1wcmVmaXhlcyAqL1xuLyogc3R5bGVsaW50LWVuYWJsZSAqL1xuLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5tYXQtYmFkZ2Utc21hbGwgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgZm9udC1zaXplOiA5cHg7XG59XG5cbi5tYXQtYmFkZ2UtbGFyZ2UgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4ubWF0LWgxLCAubWF0LWhlYWRsaW5lLCAubWF0LXR5cG9ncmFwaHkgaDEge1xuICBmb250OiA0MDAgMjRweC8zMnB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBtYXJnaW46IDAgMCAxNnB4O1xufVxuXG4ubWF0LWgyLCAubWF0LXRpdGxlLCAubWF0LXR5cG9ncmFwaHkgaDIge1xuICBmb250OiA1MDAgMjBweC8zMnB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBtYXJnaW46IDAgMCAxNnB4O1xufVxuXG4ubWF0LWgzLCAubWF0LXN1YmhlYWRpbmctMiwgLm1hdC10eXBvZ3JhcGh5IGgzIHtcbiAgZm9udDogNDAwIDE2cHgvMjhweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgbWFyZ2luOiAwIDAgMTZweDtcbn1cblxuLm1hdC1oNCwgLm1hdC1zdWJoZWFkaW5nLTEsIC5tYXQtdHlwb2dyYXBoeSBoNCB7XG4gIGZvbnQ6IDQwMCAxNXB4LzI0cHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIG1hcmdpbjogMCAwIDE2cHg7XG59XG5cbi5tYXQtaDUsIC5tYXQtdHlwb2dyYXBoeSBoNSB7XG4gIGZvbnQ6IDQwMCBjYWxjKDE0cHggKiAwLjgzKS8yMHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDAgMCAxMnB4O1xufVxuXG4ubWF0LWg2LCAubWF0LXR5cG9ncmFwaHkgaDYge1xuICBmb250OiA0MDAgY2FsYygxNHB4ICogMC42NykvMjBweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwIDAgMTJweDtcbn1cblxuLm1hdC1ib2R5LXN0cm9uZywgLm1hdC1ib2R5LTIge1xuICBmb250OiA1MDAgMTRweC8yNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xufVxuXG4ubWF0LWJvZHksIC5tYXQtYm9keS0xLCAubWF0LXR5cG9ncmFwaHkge1xuICBmb250OiA0MDAgMTRweC8yMHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xufVxuLm1hdC1ib2R5IHAsIC5tYXQtYm9keS0xIHAsIC5tYXQtdHlwb2dyYXBoeSBwIHtcbiAgbWFyZ2luOiAwIDAgMTJweDtcbn1cblxuLm1hdC1zbWFsbCwgLm1hdC1jYXB0aW9uIHtcbiAgZm9udDogNDAwIDEycHgvMjBweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbn1cblxuLm1hdC1kaXNwbGF5LTQsIC5tYXQtdHlwb2dyYXBoeSAubWF0LWRpc3BsYXktNCB7XG4gIGZvbnQ6IDMwMCAxMTJweC8xMTJweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjA1ZW07XG4gIG1hcmdpbjogMCAwIDU2cHg7XG59XG5cbi5tYXQtZGlzcGxheS0zLCAubWF0LXR5cG9ncmFwaHkgLm1hdC1kaXNwbGF5LTMge1xuICBmb250OiA0MDAgNTZweC81NnB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbiAgbWFyZ2luOiAwIDAgNjRweDtcbn1cblxuLm1hdC1kaXNwbGF5LTIsIC5tYXQtdHlwb2dyYXBoeSAubWF0LWRpc3BsYXktMiB7XG4gIGZvbnQ6IDQwMCA0NXB4LzQ4cHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMDVlbTtcbiAgbWFyZ2luOiAwIDAgNjRweDtcbn1cblxuLm1hdC1kaXNwbGF5LTEsIC5tYXQtdHlwb2dyYXBoeSAubWF0LWRpc3BsYXktMSB7XG4gIGZvbnQ6IDQwMCAzNHB4LzQwcHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIG1hcmdpbjogMCAwIDY0cHg7XG59XG5cbi5tYXQtYm90dG9tLXNoZWV0LWNvbnRhaW5lciB7XG4gIGZvbnQ6IDQwMCAxNHB4LzIwcHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG59XG5cbi5tYXQtYnV0dG9uLCAubWF0LXJhaXNlZC1idXR0b24sIC5tYXQtaWNvbi1idXR0b24sIC5tYXQtc3Ryb2tlZC1idXR0b24sXG4ubWF0LWZsYXQtYnV0dG9uLCAubWF0LWZhYiwgLm1hdC1taW5pLWZhYiB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubWF0LWJ1dHRvbi10b2dnbGUge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5tYXQtY2FyZCB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLm1hdC1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLm1hdC1jYXJkLXN1YnRpdGxlLFxuLm1hdC1jYXJkLWNvbnRlbnQge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5tYXQtY2hlY2tib3gge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5tYXQtY2hlY2tib3gtbGF5b3V0IC5tYXQtY2hlY2tib3gtbGFiZWwge1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuLm1hdC1jaGlwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLm1hdC1jaGlwIC5tYXQtY2hpcC10cmFpbGluZy1pY29uLm1hdC1pY29uLFxuLm1hdC1jaGlwIC5tYXQtY2hpcC1yZW1vdmUubWF0LWljb24ge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5tYXQtdGFibGUge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5tYXQtaGVhZGVyLWNlbGwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5tYXQtY2VsbCwgLm1hdC1mb290ZXItY2VsbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm1hdC1jYWxlbmRhciB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLm1hdC1jYWxlbmRhci1ib2R5IHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ubWF0LWNhbGVuZGFyLWJvZHktbGFiZWwsXG4ubWF0LWNhbGVuZGFyLXBlcmlvZC1idXR0b24ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVyIHRoIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ubWF0LWRpYWxvZy10aXRsZSB7XG4gIGZvbnQ6IDUwMCAyMHB4LzMycHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1jb250ZW50IHtcbiAgZm9udDogNDAwIDE0cHgvMjBweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS4xMjU7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMS4zNDM3NWVtO1xufVxuXG4ubWF0LWZvcm0tZmllbGQtcHJlZml4IC5tYXQtaWNvbixcbi5tYXQtZm9ybS1maWVsZC1zdWZmaXggLm1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAxNTAlO1xuICBsaW5lLWhlaWdodDogMS4xMjU7XG59XG4ubWF0LWZvcm0tZmllbGQtcHJlZml4IC5tYXQtaWNvbi1idXR0b24sXG4ubWF0LWZvcm0tZmllbGQtc3VmZml4IC5tYXQtaWNvbi1idXR0b24ge1xuICBoZWlnaHQ6IDEuNWVtO1xuICB3aWR0aDogMS41ZW07XG59XG4ubWF0LWZvcm0tZmllbGQtcHJlZml4IC5tYXQtaWNvbi1idXR0b24gLm1hdC1pY29uLFxuLm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCAubWF0LWljb24tYnV0dG9uIC5tYXQtaWNvbiB7XG4gIGhlaWdodDogMS4xMjVlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMTI1O1xufVxuXG4ubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICBwYWRkaW5nOiAwLjVlbSAwO1xuICBib3JkZXItdG9wOiAwLjg0Mzc1ZW0gc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbi5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMzQzNzVlbSkgc2NhbGUoMC43NSk7XG4gIHdpZHRoOiAxMzMuMzMzMzMzMzMzMyU7XG59XG4ubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4zNDM3NGVtKSBzY2FsZSgwLjc1KTtcbiAgd2lkdGg6IDEzMy4zMzMzNDMzMzMzJTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIge1xuICB0b3A6IC0wLjg0Mzc1ZW07XG4gIHBhZGRpbmctdG9wOiAwLjg0Mzc1ZW07XG59XG5cbi5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIHRvcDogMS4zNDM3NWVtO1xufVxuXG4ubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgYm90dG9tOiAxLjM0Mzc1ZW07XG59XG5cbi5tYXQtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlciB7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBtYXJnaW4tdG9wOiAwLjY2NjY2NjY2NjdlbTtcbiAgdG9wOiBjYWxjKDEwMCUgLSAxLjc5MTY2NjY2NjdlbSk7XG59XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gIHBhZGRpbmctYm90dG9tOiAxLjI1ZW07XG59XG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgcGFkZGluZzogMC40Mzc1ZW0gMDtcbn1cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMjgxMjVlbSkgc2NhbGUoMC43NSkgcGVyc3BlY3RpdmUoMTAwcHgpIHRyYW5zbGF0ZVooMC4wMDFweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMjgxMjVlbSkgc2NhbGUoMC43NSk7XG4gIHdpZHRoOiAxMzMuMzMzMzMzMzMzMyU7XG59XG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1hdXRvZmlsbC1jb250cm9sOi13ZWJraXQtYXV0b2ZpbGwgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMjgxMjVlbSkgc2NhbGUoMC43NSkgcGVyc3BlY3RpdmUoMTAwcHgpIHRyYW5zbGF0ZVooMC4wMDEwMXB4KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4yODEyNGVtKSBzY2FsZSgwLjc1KTtcbiAgd2lkdGg6IDEzMy4zMzMzNDMzMzMzJTtcbn1cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjI4MTI1ZW0pIHNjYWxlKDAuNzUpIHBlcnNwZWN0aXZlKDEwMHB4KSB0cmFuc2xhdGVaKDAuMDAxMDJweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMjgxMjNlbSkgc2NhbGUoMC43NSk7XG4gIHdpZHRoOiAxMzMuMzMzMzUzMzMzMyU7XG59XG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgdG9wOiAxLjI4MTI1ZW07XG59XG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gIGJvdHRvbTogMS4yNWVtO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlciB7XG4gIG1hcmdpbi10b3A6IDAuNTQxNjY2NjY2N2VtO1xuICB0b3A6IGNhbGMoMTAwJSAtIDEuNjY2NjY2NjY2N2VtKTtcbn1cblxuQG1lZGlhIHByaW50IHtcbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjI4MTIyZW0pIHNjYWxlKDAuNzUpO1xuICB9XG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWF1dG9maWxsLWNvbnRyb2w6LXdlYmtpdC1hdXRvZmlsbCArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjI4MTIxZW0pIHNjYWxlKDAuNzUpO1xuICB9XG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMjgxMmVtKSBzY2FsZSgwLjc1KTtcbiAgfVxufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICBwYWRkaW5nOiAwLjI1ZW0gMCAwLjc1ZW0gMDtcbn1cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgdG9wOiAxLjA5Mzc1ZW07XG4gIG1hcmdpbi10b3A6IC0wLjVlbTtcbn1cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC41OTM3NWVtKSBzY2FsZSgwLjc1KTtcbiAgd2lkdGg6IDEzMy4zMzMzMzMzMzMzJTtcbn1cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC41OTM3NGVtKSBzY2FsZSgwLjc1KTtcbiAgd2lkdGg6IDEzMy4zMzMzNDMzMzMzJTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICBwYWRkaW5nOiAxZW0gMCAxZW0gMDtcbn1cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgdG9wOiAxLjg0Mzc1ZW07XG4gIG1hcmdpbi10b3A6IC0wLjI1ZW07XG59XG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuNTkzNzVlbSkgc2NhbGUoMC43NSk7XG4gIHdpZHRoOiAxMzMuMzMzMzMzMzMzMyU7XG59XG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuNTkzNzRlbSkgc2NhbGUoMC43NSk7XG4gIHdpZHRoOiAxMzMuMzMzMzQzMzMzMyU7XG59XG5cbi5tYXQtZ3JpZC10aWxlLWhlYWRlcixcbi5tYXQtZ3JpZC10aWxlLWZvb3RlciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5tYXQtZ3JpZC10aWxlLWhlYWRlciAubWF0LWxpbmUsXG4ubWF0LWdyaWQtdGlsZS1mb290ZXIgLm1hdC1saW5lIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLm1hdC1ncmlkLXRpbGUtaGVhZGVyIC5tYXQtbGluZTpudGgtY2hpbGQobisyKSxcbi5tYXQtZ3JpZC10aWxlLWZvb3RlciAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMikge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbmlucHV0Lm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgbWFyZ2luLXRvcDogLTAuMDYyNWVtO1xufVxuXG4ubWF0LW1lbnUtaXRlbSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ubWF0LXBhZ2luYXRvcixcbi5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZSAubWF0LXNlbGVjdC10cmlnZ2VyIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4ubWF0LXNlbGVjdCB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLm1hdC1zZWxlY3QtdHJpZ2dlciB7XG4gIGhlaWdodDogMS4xMjVlbTtcbn1cblxuLm1hdC1zbGlkZS10b2dnbGUtY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubWF0LXN0ZXBwZXItdmVydGljYWwsIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4ubWF0LXN0ZXAtbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5tYXQtc3RlcC1zdWItbGFiZWwtZXJyb3Ige1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4ubWF0LXN0ZXAtbGFiZWwtZXJyb3Ige1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5tYXQtc3RlcC1sYWJlbC1zZWxlY3RlZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLm1hdC10YWItZ3JvdXAge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5tYXQtdGFiLWxhYmVsLCAubWF0LXRhYi1saW5rIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5tYXQtdG9vbGJhcixcbi5tYXQtdG9vbGJhciBoMSxcbi5tYXQtdG9vbGJhciBoMixcbi5tYXQtdG9vbGJhciBoMyxcbi5tYXQtdG9vbGJhciBoNCxcbi5tYXQtdG9vbGJhciBoNSxcbi5tYXQtdG9vbGJhciBoNiB7XG4gIGZvbnQ6IDUwMCAyMHB4LzMycHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIG1hcmdpbjogMDtcbn1cblxuLm1hdC10b29sdGlwIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XG59XG5cbi5tYXQtdG9vbHRpcC1oYW5kc2V0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xufVxuXG4ubWF0LWxpc3QtaXRlbSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLm1hdC1saXN0LW9wdGlvbiB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW0ge1xuICBmb250LXNpemU6IDE2cHg7XG59XG4ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMikge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3Qtb3B0aW9uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LW9wdGlvbiAubWF0LWxpbmUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3Qtb3B0aW9uIC5tYXQtbGluZTpudGgtY2hpbGQobisyKSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5tYXQtbGlzdC1iYXNlIC5tYXQtc3ViaGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LWxpc3QtaXRlbSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4ubWF0LWxpc3QtYmFzZVtkZW5zZV0gLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5lOm50aC1jaGlsZChuKzIpIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtbGlzdC1vcHRpb24ge1xuICBmb250LXNpemU6IDEycHg7XG59XG4ubWF0LWxpc3QtYmFzZVtkZW5zZV0gLm1hdC1saXN0LW9wdGlvbiAubWF0LWxpbmUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4ubWF0LWxpc3QtYmFzZVtkZW5zZV0gLm1hdC1saXN0LW9wdGlvbiAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMikge1xuICBmb250LXNpemU6IDEycHg7XG59XG4ubWF0LWxpc3QtYmFzZVtkZW5zZV0gLm1hdC1zdWJoZWFkZXIge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLm1hdC1vcHRpb24ge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLm1hdC1vcHRncm91cC1sYWJlbCB7XG4gIGZvbnQ6IDUwMCAxNHB4LzI0cHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG59XG5cbi5tYXQtc2ltcGxlLXNuYWNrYmFyIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5tYXQtc2ltcGxlLXNuYWNrYmFyLWFjdGlvbiB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubWF0LXRyZWUge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5tYXQtdHJlZS1ub2RlLFxuLm1hdC1uZXN0ZWQtdHJlZS1ub2RlIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubWF0LXJpcHBsZSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYXQtcmlwcGxlOm5vdCg6ZW1wdHkpIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xufVxuXG4ubWF0LXJpcHBsZS5tYXQtcmlwcGxlLXVuYm91bmRlZCB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4ubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5LCB0cmFuc2Zvcm0gMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xufVxuLmNkay1oaWdoLWNvbnRyYXN0LWFjdGl2ZSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNkay12aXN1YWxseS1oaWRkZW4ge1xuICBib3JkZXI6IDA7XG4gIGNsaXA6IHJlY3QoMCAwIDAgMCk7XG4gIGhlaWdodDogMXB4O1xuICBtYXJnaW46IC0xcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDFweDtcbiAgb3V0bGluZTogMDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi5jZGstb3ZlcmxheS1jb250YWluZXIsIC5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlciB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jZGstb3ZlcmxheS1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMDA7XG59XG4uY2RrLW92ZXJsYXktY29udGFpbmVyOmVtcHR5IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4uY2RrLW92ZXJsYXktcGFuZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cblxuLmNkay1vdmVybGF5LWJhY2tkcm9wIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDQwMG1zIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xuICBvcGFjaXR5OiAwO1xufVxuLmNkay1vdmVybGF5LWJhY2tkcm9wLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmcge1xuICBvcGFjaXR5OiAxO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcbiAgLmNkay1vdmVybGF5LWJhY2tkcm9wLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmcge1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgfVxufVxuXG4uY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zMik7XG59XG5cbi5jZGstb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcCwgLmNkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmcge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY2RrLW92ZXJsYXktY29ubmVjdGVkLXBvc2l0aW9uLWJvdW5kaW5nLWJveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLXdpZHRoOiAxcHg7XG4gIG1pbi1oZWlnaHQ6IDFweDtcbn1cblxuLmNkay1nbG9iYWwtc2Nyb2xsYmxvY2sge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbkBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnQge1xuICAvKiEqL1xufVxuQGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1lbmQge1xuICAvKiEqL1xufVxuLmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDotd2Via2l0LWF1dG9maWxsIHtcbiAgYW5pbWF0aW9uOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydCAwcyAxbXM7XG59XG5cbi5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6bm90KDotd2Via2l0LWF1dG9maWxsKSB7XG4gIGFuaW1hdGlvbjogY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtZW5kIDBzIDFtcztcbn1cblxudGV4dGFyZWEuY2RrLXRleHRhcmVhLWF1dG9zaXplIHtcbiAgcmVzaXplOiBub25lO1xufVxuXG50ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nIHtcbiAgcGFkZGluZzogMnB4IDAgIWltcG9ydGFudDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3ggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cblxudGV4dGFyZWEuY2RrLXRleHRhcmVhLWF1dG9zaXplLW1lYXN1cmluZy1maXJlZm94IHtcbiAgcGFkZGluZzogMnB4IDAgIWltcG9ydGFudDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3ggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtZm9jdXMtaW5kaWNhdG9yIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubWF0LW1kYy1mb2N1cy1pbmRpY2F0b3Ige1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5tYXQtb3B0aW9uIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG4ubWF0LW9wdGlvbjpob3Zlcjpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpLCAubWF0LW9wdGlvbjpmb2N1czpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA0KTtcbn1cbi5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tbXVsdGlwbGUpOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xufVxuLm1hdC1vcHRpb24ubWF0LWFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuLm1hdC1vcHRpb24ubWF0LW9wdGlvbi1kaXNhYmxlZCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xufVxuXG4ubWF0LXByaW1hcnkgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICBjb2xvcjogIzNmNTFiNTtcbn1cblxuLm1hdC1hY2NlbnQgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICBjb2xvcjogI2ZmNDA4MTtcbn1cblxuLm1hdC13YXJuIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgY29sb3I6ICNmNDQzMzY7XG59XG5cbi5tYXQtb3B0Z3JvdXAtbGFiZWwge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cblxuLm1hdC1vcHRncm91cC1kaXNhYmxlZCAubWF0LW9wdGdyb3VwLWxhYmVsIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7XG59XG5cbi5tYXQtcHNldWRvLWNoZWNrYm94IHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG59XG4ubWF0LXBzZXVkby1jaGVja2JveDo6YWZ0ZXIge1xuICBjb2xvcjogI2ZhZmFmYTtcbn1cblxuLm1hdC1wc2V1ZG8tY2hlY2tib3gtZGlzYWJsZWQge1xuICBjb2xvcjogI2IwYjBiMDtcbn1cblxuLm1hdC1wcmltYXJ5IC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4ubWF0LXByaW1hcnkgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSB7XG4gIGJhY2tncm91bmQ6ICMzZjUxYjU7XG59XG5cbi5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4ubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlLFxuLm1hdC1hY2NlbnQgLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCxcbi5tYXQtYWNjZW50IC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUge1xuICBiYWNrZ3JvdW5kOiAjZmY0MDgxO1xufVxuXG4ubWF0LXdhcm4gLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCxcbi5tYXQtd2FybiAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgYmFja2dyb3VuZDogI2Y0NDMzNjtcbn1cblxuLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZC5tYXQtcHNldWRvLWNoZWNrYm94LWRpc2FibGVkLFxuLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS5tYXQtcHNldWRvLWNoZWNrYm94LWRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogI2IwYjBiMDtcbn1cblxuLm1hdC1hcHAtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4ubWF0LWVsZXZhdGlvbi16MCB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1lbGV2YXRpb24tejEge1xuICBib3gtc2hhZG93OiAwcHggMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWVsZXZhdGlvbi16MiB7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZWxldmF0aW9uLXozIHtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAzcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAzcHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1lbGV2YXRpb24tejQge1xuICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDRweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1lbGV2YXRpb24tejUge1xuICBib3gtc2hhZG93OiAwcHggM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDVweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggMTRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1lbGV2YXRpb24tejYge1xuICBib3gtc2hhZG93OiAwcHggM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDZweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDE4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZWxldmF0aW9uLXo3IHtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA1cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCA3cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDJweCAxNnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWVsZXZhdGlvbi16OCB7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1lbGV2YXRpb24tejkge1xuICBib3gtc2hhZG93OiAwcHggNXB4IDZweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDlweCAxMnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggM3B4IDE2cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZWxldmF0aW9uLXoxMCB7XG4gIGJveC1zaGFkb3c6IDBweCA2cHggNnB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTBweCAxNHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNHB4IDE4cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZWxldmF0aW9uLXoxMSB7XG4gIGJveC1zaGFkb3c6IDBweCA2cHggN3B4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTFweCAxNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNHB4IDIwcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZWxldmF0aW9uLXoxMiB7XG4gIGJveC1zaGFkb3c6IDBweCA3cHggOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTJweCAxN3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNXB4IDIycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZWxldmF0aW9uLXoxMyB7XG4gIGJveC1zaGFkb3c6IDBweCA3cHggOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTNweCAxOXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNXB4IDI0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZWxldmF0aW9uLXoxNCB7XG4gIGJveC1zaGFkb3c6IDBweCA3cHggOXB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTRweCAyMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNXB4IDI2cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZWxldmF0aW9uLXoxNSB7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggOXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTVweCAyMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNnB4IDI4cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZWxldmF0aW9uLXoxNiB7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDE2cHggMjRweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDZweCAzMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWVsZXZhdGlvbi16MTcge1xuICBib3gtc2hhZG93OiAwcHggOHB4IDExcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxN3B4IDI2cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA2cHggMzJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1lbGV2YXRpb24tejE4IHtcbiAgYm94LXNoYWRvdzogMHB4IDlweCAxMXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMThweCAyOHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggN3B4IDM0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZWxldmF0aW9uLXoxOSB7XG4gIGJveC1zaGFkb3c6IDBweCA5cHggMTJweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDE5cHggMjlweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDdweCAzNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWVsZXZhdGlvbi16MjAge1xuICBib3gtc2hhZG93OiAwcHggMTBweCAxM3B4IC02cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMjBweCAzMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggOHB4IDM4cHggN3B4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZWxldmF0aW9uLXoyMSB7XG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDEzcHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAyMXB4IDMzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA4cHggNDBweCA3cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1lbGV2YXRpb24tejIyIHtcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMTRweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDIycHggMzVweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDhweCA0MnB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWVsZXZhdGlvbi16MjMge1xuICBib3gtc2hhZG93OiAwcHggMTFweCAxNHB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMjNweCAzNnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggOXB4IDQ0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZWxldmF0aW9uLXoyNCB7XG4gIGJveC1zaGFkb3c6IDBweCAxMXB4IDE1cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAyNHB4IDM4cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA5cHggNDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC10aGVtZS1sb2FkZWQtbWFya2VyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm1hdC1hdXRvY29tcGxldGUtcGFuZWwge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG4ubWF0LWF1dG9jb21wbGV0ZS1wYW5lbDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggNHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLm1hdC1hdXRvY29tcGxldGUtcGFuZWwgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LWFjdGl2ZSk6bm90KDpob3Zlcikge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1hY3RpdmUpOm5vdCg6aG92ZXIpOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjM2Y1MWI1O1xufVxuLmNkay1oaWdoLWNvbnRyYXN0LWFjdGl2ZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBvdXRsaW5lOiBzb2xpZCAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5tYXQtYmFkZ2UtYWNjZW50IC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICNmZjQwODE7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1hdC1iYWRnZS13YXJuIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogI2Y0NDMzNjtcbn1cblxuLm1hdC1iYWRnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm1hdC1iYWRnZS1oaWRkZW4gLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm1hdC1iYWRnZS1kaXNhYmxlZCAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjYjliOWI5O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcbn1cblxuLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC42KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4ubmctYW5pbWF0ZS1kaXNhYmxlZCAubWF0LWJhZGdlLWNvbnRlbnQsXG4ubWF0LWJhZGdlLWNvbnRlbnQuX21hdC1hbmltYXRpb24tbm9vcGFibGUge1xuICB0cmFuc2l0aW9uOiBub25lO1xufVxuXG4ubWF0LWJhZGdlLWNvbnRlbnQubWF0LWJhZGdlLWFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogbm9uZTtcbn1cblxuLm1hdC1iYWRnZS1zbWFsbCAubWF0LWJhZGdlLWNvbnRlbnQge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbn1cbi5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWFib3ZlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHRvcDogLThweDtcbn1cbi5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWJlbG93IC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGJvdHRvbTogLThweDtcbn1cbi5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBsZWZ0OiAtMTZweDtcbn1cbltkaXI9cnRsXSAubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgbGVmdDogYXV0bztcbiAgcmlnaHQ6IC0xNnB4O1xufVxuLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgcmlnaHQ6IC0xNnB4O1xufVxuW2Rpcj1ydGxdIC5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHJpZ2h0OiBhdXRvO1xuICBsZWZ0OiAtMTZweDtcbn1cbi5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBsZWZ0OiAtOHB4O1xufVxuW2Rpcj1ydGxdIC5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBsZWZ0OiBhdXRvO1xuICByaWdodDogLThweDtcbn1cbi5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHJpZ2h0OiAtOHB4O1xufVxuW2Rpcj1ydGxdIC5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHJpZ2h0OiBhdXRvO1xuICBsZWZ0OiAtOHB4O1xufVxuXG4ubWF0LWJhZGdlLW1lZGl1bSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICB3aWR0aDogMjJweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbn1cbi5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1hYm92ZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICB0b3A6IC0xMXB4O1xufVxuLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWJlbG93IC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGJvdHRvbTogLTExcHg7XG59XG4ubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGxlZnQ6IC0yMnB4O1xufVxuW2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgbGVmdDogYXV0bztcbiAgcmlnaHQ6IC0yMnB4O1xufVxuLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHJpZ2h0OiAtMjJweDtcbn1cbltkaXI9cnRsXSAubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgcmlnaHQ6IGF1dG87XG4gIGxlZnQ6IC0yMnB4O1xufVxuLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBsZWZ0OiAtMTFweDtcbn1cbltkaXI9cnRsXSAubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGxlZnQ6IGF1dG87XG4gIHJpZ2h0OiAtMTFweDtcbn1cbi5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnQge1xuICByaWdodDogLTExcHg7XG59XG5bZGlyPXJ0bF0gLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHJpZ2h0OiBhdXRvO1xuICBsZWZ0OiAtMTFweDtcbn1cblxuLm1hdC1iYWRnZS1sYXJnZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbn1cbi5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWFib3ZlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHRvcDogLTE0cHg7XG59XG4ubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1iZWxvdyAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBib3R0b206IC0xNHB4O1xufVxuLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGxlZnQ6IC0yOHB4O1xufVxuW2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBsZWZ0OiBhdXRvO1xuICByaWdodDogLTI4cHg7XG59XG4ubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnQge1xuICByaWdodDogLTI4cHg7XG59XG5bZGlyPXJ0bF0gLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgcmlnaHQ6IGF1dG87XG4gIGxlZnQ6IC0yOHB4O1xufVxuLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGxlZnQ6IC0xNHB4O1xufVxuW2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBsZWZ0OiBhdXRvO1xuICByaWdodDogLTE0cHg7XG59XG4ubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnQge1xuICByaWdodDogLTE0cHg7XG59XG5bZGlyPXJ0bF0gLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgcmlnaHQ6IGF1dG87XG4gIGxlZnQ6IC0xNHB4O1xufVxuXG4ubWF0LWJvdHRvbS1zaGVldC1jb250YWluZXIge1xuICBib3gtc2hhZG93OiAwcHggOHB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxNnB4IDI0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA2cHggMzBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4ubWF0LWJ1dHRvbiwgLm1hdC1pY29uLWJ1dHRvbiwgLm1hdC1zdHJva2VkLWJ1dHRvbiB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5tYXQtYnV0dG9uLm1hdC1wcmltYXJ5LCAubWF0LWljb24tYnV0dG9uLm1hdC1wcmltYXJ5LCAubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1wcmltYXJ5IHtcbiAgY29sb3I6ICMzZjUxYjU7XG59XG4ubWF0LWJ1dHRvbi5tYXQtYWNjZW50LCAubWF0LWljb24tYnV0dG9uLm1hdC1hY2NlbnQsIC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LWFjY2VudCB7XG4gIGNvbG9yOiAjZmY0MDgxO1xufVxuLm1hdC1idXR0b24ubWF0LXdhcm4sIC5tYXQtaWNvbi1idXR0b24ubWF0LXdhcm4sIC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXdhcm4ge1xuICBjb2xvcjogI2Y0NDMzNjtcbn1cbi5tYXQtYnV0dG9uLm1hdC1wcmltYXJ5Lm1hdC1idXR0b24tZGlzYWJsZWQsIC5tYXQtYnV0dG9uLm1hdC1hY2NlbnQubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLm1hdC1idXR0b24ubWF0LXdhcm4ubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLm1hdC1idXR0b24ubWF0LWJ1dHRvbi1kaXNhYmxlZC5tYXQtYnV0dG9uLWRpc2FibGVkLCAubWF0LWljb24tYnV0dG9uLm1hdC1wcmltYXJ5Lm1hdC1idXR0b24tZGlzYWJsZWQsIC5tYXQtaWNvbi1idXR0b24ubWF0LWFjY2VudC5tYXQtYnV0dG9uLWRpc2FibGVkLCAubWF0LWljb24tYnV0dG9uLm1hdC13YXJuLm1hdC1idXR0b24tZGlzYWJsZWQsIC5tYXQtaWNvbi1idXR0b24ubWF0LWJ1dHRvbi1kaXNhYmxlZC5tYXQtYnV0dG9uLWRpc2FibGVkLCAubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1wcmltYXJ5Lm1hdC1idXR0b24tZGlzYWJsZWQsIC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LWFjY2VudC5tYXQtYnV0dG9uLWRpc2FibGVkLCAubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC13YXJuLm1hdC1idXR0b24tZGlzYWJsZWQsIC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LWJ1dHRvbi1kaXNhYmxlZC5tYXQtYnV0dG9uLWRpc2FibGVkIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNik7XG59XG4ubWF0LWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LCAubWF0LWljb24tYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksIC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG59XG4ubWF0LWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksIC5tYXQtaWNvbi1idXR0b24ubWF0LWFjY2VudCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LCAubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjQwODE7XG59XG4ubWF0LWJ1dHRvbi5tYXQtd2FybiAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LCAubWF0LWljb24tYnV0dG9uLm1hdC13YXJuIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksIC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXdhcm4gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG59XG4ubWF0LWJ1dHRvbi5tYXQtYnV0dG9uLWRpc2FibGVkIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksIC5tYXQtaWNvbi1idXR0b24ubWF0LWJ1dHRvbi1kaXNhYmxlZCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LCAubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1idXR0b24tZGlzYWJsZWQgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLm1hdC1idXR0b24gLm1hdC1yaXBwbGUtZWxlbWVudCwgLm1hdC1pY29uLWJ1dHRvbiAubWF0LXJpcHBsZS1lbGVtZW50LCAubWF0LXN0cm9rZWQtYnV0dG9uIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBvcGFjaXR5OiAwLjE7XG4gIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbn1cblxuLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG4ubWF0LXN0cm9rZWQtYnV0dG9uOm5vdCgubWF0LWJ1dHRvbi1kaXNhYmxlZCkge1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZmxhdC1idXR0b24sIC5tYXQtcmFpc2VkLWJ1dHRvbiwgLm1hdC1mYWIsIC5tYXQtbWluaS1mYWIge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4ubWF0LWZsYXQtYnV0dG9uLm1hdC1wcmltYXJ5LCAubWF0LXJhaXNlZC1idXR0b24ubWF0LXByaW1hcnksIC5tYXQtZmFiLm1hdC1wcmltYXJ5LCAubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5IHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1hdC1mbGF0LWJ1dHRvbi5tYXQtYWNjZW50LCAubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudCwgLm1hdC1mYWIubWF0LWFjY2VudCwgLm1hdC1taW5pLWZhYi5tYXQtYWNjZW50IHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybiwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC13YXJuLCAubWF0LWZhYi5tYXQtd2FybiwgLm1hdC1taW5pLWZhYi5tYXQtd2FybiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnkubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLm1hdC1mbGF0LWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1idXR0b24tZGlzYWJsZWQsIC5tYXQtZmxhdC1idXR0b24ubWF0LXdhcm4ubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLm1hdC1mbGF0LWJ1dHRvbi5tYXQtYnV0dG9uLWRpc2FibGVkLm1hdC1idXR0b24tZGlzYWJsZWQsIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeS5tYXQtYnV0dG9uLWRpc2FibGVkLCAubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudC5tYXQtYnV0dG9uLWRpc2FibGVkLCAubWF0LXJhaXNlZC1idXR0b24ubWF0LXdhcm4ubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1idXR0b24tZGlzYWJsZWQubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLm1hdC1mYWIubWF0LXByaW1hcnkubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLm1hdC1mYWIubWF0LWFjY2VudC5tYXQtYnV0dG9uLWRpc2FibGVkLCAubWF0LWZhYi5tYXQtd2Fybi5tYXQtYnV0dG9uLWRpc2FibGVkLCAubWF0LWZhYi5tYXQtYnV0dG9uLWRpc2FibGVkLm1hdC1idXR0b24tZGlzYWJsZWQsIC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnkubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLm1hdC1taW5pLWZhYi5tYXQtYWNjZW50Lm1hdC1idXR0b24tZGlzYWJsZWQsIC5tYXQtbWluaS1mYWIubWF0LXdhcm4ubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLm1hdC1taW5pLWZhYi5tYXQtYnV0dG9uLWRpc2FibGVkLm1hdC1idXR0b24tZGlzYWJsZWQge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI2KTtcbn1cbi5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnksIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSwgLm1hdC1mYWIubWF0LXByaW1hcnksIC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xufVxuLm1hdC1mbGF0LWJ1dHRvbi5tYXQtYWNjZW50LCAubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudCwgLm1hdC1mYWIubWF0LWFjY2VudCwgLm1hdC1taW5pLWZhYi5tYXQtYWNjZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDA4MTtcbn1cbi5tYXQtZmxhdC1idXR0b24ubWF0LXdhcm4sIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtd2FybiwgLm1hdC1mYWIubWF0LXdhcm4sIC5tYXQtbWluaS1mYWIubWF0LXdhcm4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xufVxuLm1hdC1mbGF0LWJ1dHRvbi5tYXQtcHJpbWFyeS5tYXQtYnV0dG9uLWRpc2FibGVkLCAubWF0LWZsYXQtYnV0dG9uLm1hdC1hY2NlbnQubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2Fybi5tYXQtYnV0dG9uLWRpc2FibGVkLCAubWF0LWZsYXQtYnV0dG9uLm1hdC1idXR0b24tZGlzYWJsZWQubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5Lm1hdC1idXR0b24tZGlzYWJsZWQsIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1idXR0b24tZGlzYWJsZWQsIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtd2Fybi5tYXQtYnV0dG9uLWRpc2FibGVkLCAubWF0LXJhaXNlZC1idXR0b24ubWF0LWJ1dHRvbi1kaXNhYmxlZC5tYXQtYnV0dG9uLWRpc2FibGVkLCAubWF0LWZhYi5tYXQtcHJpbWFyeS5tYXQtYnV0dG9uLWRpc2FibGVkLCAubWF0LWZhYi5tYXQtYWNjZW50Lm1hdC1idXR0b24tZGlzYWJsZWQsIC5tYXQtZmFiLm1hdC13YXJuLm1hdC1idXR0b24tZGlzYWJsZWQsIC5tYXQtZmFiLm1hdC1idXR0b24tZGlzYWJsZWQubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLm1hdC1taW5pLWZhYi5tYXQtcHJpbWFyeS5tYXQtYnV0dG9uLWRpc2FibGVkLCAubWF0LW1pbmktZmFiLm1hdC1hY2NlbnQubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLm1hdC1taW5pLWZhYi5tYXQtd2Fybi5tYXQtYnV0dG9uLWRpc2FibGVkLCAubWF0LW1pbmktZmFiLm1hdC1idXR0b24tZGlzYWJsZWQubWF0LWJ1dHRvbi1kaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4ubWF0LWZsYXQtYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQsIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50LCAubWF0LWZhYi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50LCAubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG59XG4ubWF0LWZsYXQtYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCwgLm1hdC1mYWIubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50LCAubWF0LW1pbmktZmFiLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cbi5tYXQtZmxhdC1idXR0b24ubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQsIC5tYXQtZmFiLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQsIC5tYXQtbWluaS1mYWIubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cblxuLm1hdC1zdHJva2VkLWJ1dHRvbjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSwgLm1hdC1mbGF0LWJ1dHRvbjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1yYWlzZWQtYnV0dG9uOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pIHtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5tYXQtcmFpc2VkLWJ1dHRvbjpub3QoLm1hdC1idXR0b24tZGlzYWJsZWQpOmFjdGl2ZTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtYnV0dG9uLWRpc2FibGVkOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWZhYjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSwgLm1hdC1taW5pLWZhYjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggNnB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggMThweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5tYXQtZmFiOm5vdCgubWF0LWJ1dHRvbi1kaXNhYmxlZCk6YWN0aXZlOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pLCAubWF0LW1pbmktZmFiOm5vdCgubWF0LWJ1dHRvbi1kaXNhYmxlZCk6YWN0aXZlOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pIHtcbiAgYm94LXNoYWRvdzogMHB4IDdweCA4cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxMnB4IDE3cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA1cHggMjJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5tYXQtZmFiLm1hdC1idXR0b24tZGlzYWJsZWQ6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSksIC5tYXQtbWluaS1mYWIubWF0LWJ1dHRvbi1kaXNhYmxlZDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUsXG4ubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAge1xuICBib3gtc2hhZG93OiAwcHggM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkLFxuLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4ubWF0LWJ1dHRvbi10b2dnbGUge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcbn1cbi5tYXQtYnV0dG9uLXRvZ2dsZSAubWF0LWJ1dHRvbi10b2dnbGUtZm9jdXMtb3ZlcmxheSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1idXR0b24tdG9nZ2xlLWZvY3VzLW92ZXJsYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1idXR0b24tdG9nZ2xlICsgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG5bZGlyPXJ0bF0gLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1idXR0b24tdG9nZ2xlICsgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkLm1hdC1idXR0b24tdG9nZ2xlLXZlcnRpY2FsIC5tYXQtYnV0dG9uLXRvZ2dsZSArIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xufVxuLm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWQubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4ubWF0LWJ1dHRvbi10b2dnbGUtZGlzYWJsZWQge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI2KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcbn1cbi5tYXQtYnV0dG9uLXRvZ2dsZS1kaXNhYmxlZC5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4ubWF0LWJ1dHRvbi10b2dnbGUtZGlzYWJsZWQubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZGJkYmQ7XG59XG5cbi5tYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFsb25lLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQsXG4ubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZS1sYWJlbC1jb250ZW50IHtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG59XG5cbi5tYXQtY2FyZCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cbi5tYXQtY2FyZDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4ubWF0LWNhcmQubWF0LWNhcmQtZmxhdDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG59XG5cbi5tYXQtY2hlY2tib3gtZnJhbWUge1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG59XG5cbi5tYXQtY2hlY2tib3gtY2hlY2ttYXJrIHtcbiAgZmlsbDogI2ZhZmFmYTtcbn1cblxuLm1hdC1jaGVja2JveC1jaGVja21hcmstcGF0aCB7XG4gIHN0cm9rZTogI2ZhZmFmYSAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWNoZWNrYm94LW1peGVkbWFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG59XG5cbi5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS5tYXQtcHJpbWFyeSAubWF0LWNoZWNrYm94LWJhY2tncm91bmQsIC5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtcHJpbWFyeSAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xufVxuLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kLCAubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0MDgxO1xufVxuLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC13YXJuIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCwgLm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC13YXJuIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG59XG5cbi5tYXQtY2hlY2tib3gtZGlzYWJsZWQubWF0LWNoZWNrYm94LWNoZWNrZWQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kLCAubWF0LWNoZWNrYm94LWRpc2FibGVkLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiMGIwYjA7XG59XG4ubWF0LWNoZWNrYm94LWRpc2FibGVkOm5vdCgubWF0LWNoZWNrYm94LWNoZWNrZWQpIC5tYXQtY2hlY2tib3gtZnJhbWUge1xuICBib3JkZXItY29sb3I6ICNiMGIwYjA7XG59XG4ubWF0LWNoZWNrYm94LWRpc2FibGVkIC5tYXQtY2hlY2tib3gtbGFiZWwge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cblxuLm1hdC1jaGVja2JveCAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi5tYXQtY2hlY2tib3gtY2hlY2tlZDpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCxcbi5tYXQtY2hlY2tib3g6YWN0aXZlOm5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKS5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgYmFja2dyb3VuZDogIzNmNTFiNTtcbn1cbi5tYXQtY2hlY2tib3gtY2hlY2tlZDpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50LFxuLm1hdC1jaGVja2JveDphY3RpdmU6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQ6ICNmZjQwODE7XG59XG4ubWF0LWNoZWNrYm94LWNoZWNrZWQ6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQsXG4ubWF0LWNoZWNrYm94OmFjdGl2ZTpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQ6ICNmNDQzMzY7XG59XG5cbi5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwIC5tYXQtY2hpcC1yZW1vdmUge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgb3BhY2l0eTogMC40O1xufVxuLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwOm5vdCgubWF0LWNoaXAtZGlzYWJsZWQpOmFjdGl2ZSB7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggM3B4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggM3B4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXA6bm90KC5tYXQtY2hpcC1kaXNhYmxlZCkgLm1hdC1jaGlwLXJlbW92ZTpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNTQ7XG59XG4ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjQ7XG59XG4ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXA6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbi5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtcHJpbWFyeSAubWF0LWNoaXAtcmVtb3ZlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBvcGFjaXR5OiAwLjQ7XG59XG4ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cbi5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtd2FybiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtd2FybiAubWF0LWNoaXAtcmVtb3ZlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBvcGFjaXR5OiAwLjQ7XG59XG4ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cbi5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtYWNjZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDA4MTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC1hY2NlbnQgLm1hdC1jaGlwLXJlbW92ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogMC40O1xufVxuLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cblxuLm1hdC10YWJsZSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4ubWF0LXRhYmxlIHRoZWFkLCAubWF0LXRhYmxlIHRib2R5LCAubWF0LXRhYmxlIHRmb290LFxubWF0LWhlYWRlci1yb3csIG1hdC1yb3csIG1hdC1mb290ZXItcm93LFxuW21hdC1oZWFkZXItcm93XSwgW21hdC1yb3ddLCBbbWF0LWZvb3Rlci1yb3ddLFxuLm1hdC10YWJsZS1zdGlja3kge1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xufVxuXG5tYXQtcm93LCBtYXQtaGVhZGVyLXJvdywgbWF0LWZvb3Rlci1yb3csXG50aC5tYXQtaGVhZGVyLWNlbGwsIHRkLm1hdC1jZWxsLCB0ZC5tYXQtZm9vdGVyLWNlbGwge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWhlYWRlci1jZWxsIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG59XG5cbi5tYXQtY2VsbCwgLm1hdC1mb290ZXItY2VsbCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4ubWF0LWNhbGVuZGFyLWFycm93IHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cblxuLm1hdC1kYXRlcGlja2VyLXRvZ2dsZSxcbi5tYXQtZGF0ZXBpY2tlci1jb250ZW50IC5tYXQtY2FsZW5kYXItbmV4dC1idXR0b24sXG4ubWF0LWRhdGVwaWNrZXItY29udGVudCAubWF0LWNhbGVuZGFyLXByZXZpb3VzLWJ1dHRvbiB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xufVxuXG4ubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlciB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xufVxuXG4ubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlci1kaXZpZGVyOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtY2FsZW5kYXItYm9keS1sYWJlbCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xufVxuXG4ubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50LFxuLm1hdC1kYXRlLXJhbmdlLWlucHV0LXNlcGFyYXRvciB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQgPiAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwpIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7XG59XG5cbi5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWRhdGUtcmFuZ2UtaW5wdXQtc2VwYXJhdG9yIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7XG59XG5cbi5tYXQtY2FsZW5kYXItYm9keS1jZWxsOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQpOmhvdmVyID4gLm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24taWRlbnRpY2FsKSxcbi5jZGsta2V5Ym9hcmQtZm9jdXNlZCAubWF0LWNhbGVuZGFyLWJvZHktYWN0aXZlID4gLm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24taWRlbnRpY2FsKSxcbi5jZGstcHJvZ3JhbS1mb2N1c2VkIC5tYXQtY2FsZW5kYXItYm9keS1hY3RpdmUgPiAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA0KTtcbn1cblxuLm1hdC1jYWxlbmRhci1ib2R5LWluLXByZXZpZXcge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI0KTtcbn1cblxuLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwpIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xufVxuXG4ubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQgPiAubWF0LWNhbGVuZGFyLWJvZHktdG9kYXk6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCk6bm90KC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbCkge1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG59XG5cbi5tYXQtY2FsZW5kYXItYm9keS1pbi1yYW5nZTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogcmdiYSg2MywgODEsIDE4MSwgMC4yKTtcbn1cblxuLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24taWRlbnRpY2FsLFxuLm1hdC1jYWxlbmRhci1ib2R5LWluLWNvbXBhcmlzb24tcmFuZ2U6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ5LCAxNzEsIDAsIDAuMik7XG59XG5cbi5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWJyaWRnZS1zdGFydDo6YmVmb3JlLFxuW2Rpcj1ydGxdIC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWJyaWRnZS1lbmQ6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSg2MywgODEsIDE4MSwgMC4yKSA1MCUsIHJnYmEoMjQ5LCAxNzEsIDAsIDAuMikgNTAlKTtcbn1cblxuLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24tYnJpZGdlLWVuZDo6YmVmb3JlLFxuW2Rpcj1ydGxdIC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWJyaWRnZS1zdGFydDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoNjMsIDgxLCAxODEsIDAuMikgNTAlLCByZ2JhKDI0OSwgMTcxLCAwLCAwLjIpIDUwJSk7XG59XG5cbi5tYXQtY2FsZW5kYXItYm9keS1pbi1yYW5nZSA+IC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbCxcbi5tYXQtY2FsZW5kYXItYm9keS1pbi1jb21wYXJpc29uLXJhbmdlLm1hdC1jYWxlbmRhci1ib2R5LWluLXJhbmdlOjphZnRlciB7XG4gIGJhY2tncm91bmQ6ICNhOGRhYjU7XG59XG5cbi5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCxcbi5tYXQtY2FsZW5kYXItYm9keS1pbi1jb21wYXJpc29uLXJhbmdlID4gLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZDogIzQ2YTM1ZTtcbn1cblxuLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQgPiAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYzLCA4MSwgMTgxLCAwLjQpO1xufVxuXG4ubWF0LWNhbGVuZGFyLWJvZHktdG9kYXkubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggd2hpdGU7XG59XG5cbi5tYXQtZGF0ZXBpY2tlci1jb250ZW50IHtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCA0cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cbi5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgLm1hdC1jYWxlbmRhci1ib2R5LWluLXJhbmdlOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgNjQsIDEyOSwgMC4yKTtcbn1cbi5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24taWRlbnRpY2FsLFxuLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktaW4tY29tcGFyaXNvbi1yYW5nZTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDksIDE3MSwgMCwgMC4yKTtcbn1cbi5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24tYnJpZGdlLXN0YXJ0OjpiZWZvcmUsXG4ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IFtkaXI9cnRsXSAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1icmlkZ2UtZW5kOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjU1LCA2NCwgMTI5LCAwLjIpIDUwJSwgcmdiYSgyNDksIDE3MSwgMCwgMC4yKSA1MCUpO1xufVxuLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1icmlkZ2UtZW5kOjpiZWZvcmUsXG4ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IFtkaXI9cnRsXSAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1icmlkZ2Utc3RhcnQ6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2JhKDI1NSwgNjQsIDEyOSwgMC4yKSA1MCUsIHJnYmEoMjQ5LCAxNzEsIDAsIDAuMikgNTAlKTtcbn1cbi5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgLm1hdC1jYWxlbmRhci1ib2R5LWluLXJhbmdlID4gLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24taWRlbnRpY2FsLFxuLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktaW4tY29tcGFyaXNvbi1yYW5nZS5tYXQtY2FsZW5kYXItYm9keS1pbi1yYW5nZTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjYThkYWI1O1xufVxuLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQsXG4ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS1pbi1jb21wYXJpc29uLXJhbmdlID4gLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZDogIzQ2YTM1ZTtcbn1cbi5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDA4MTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQgPiAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgNjQsIDEyOSwgMC40KTtcbn1cbi5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IHdoaXRlO1xufVxuLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LWluLXJhbmdlOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NCwgNjcsIDU0LCAwLjIpO1xufVxuLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24taWRlbnRpY2FsLFxuLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LWluLWNvbXBhcmlzb24tcmFuZ2U6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ5LCAxNzEsIDAsIDAuMik7XG59XG4ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1icmlkZ2Utc3RhcnQ6OmJlZm9yZSxcbi5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIFtkaXI9cnRsXSAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1icmlkZ2UtZW5kOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjQ0LCA2NywgNTQsIDAuMikgNTAlLCByZ2JhKDI0OSwgMTcxLCAwLCAwLjIpIDUwJSk7XG59XG4ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1icmlkZ2UtZW5kOjpiZWZvcmUsXG4ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiBbZGlyPXJ0bF0gLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24tYnJpZGdlLXN0YXJ0OjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiYSgyNDQsIDY3LCA1NCwgMC4yKSA1MCUsIHJnYmEoMjQ5LCAxNzEsIDAsIDAuMikgNTAlKTtcbn1cbi5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5tYXQtY2FsZW5kYXItYm9keS1pbi1yYW5nZSA+IC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbCxcbi5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5tYXQtY2FsZW5kYXItYm9keS1pbi1jb21wYXJpc29uLXJhbmdlLm1hdC1jYWxlbmRhci1ib2R5LWluLXJhbmdlOjphZnRlciB7XG4gIGJhY2tncm91bmQ6ICNhOGRhYjU7XG59XG4ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQsXG4ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiAubWF0LWNhbGVuZGFyLWJvZHktaW4tY29tcGFyaXNvbi1yYW5nZSA+IC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQ6ICM0NmEzNWU7XG59XG4ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQgPiAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NCwgNjcsIDU0LCAwLjQpO1xufVxuLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IHdoaXRlO1xufVxuXG4ubWF0LWRhdGVwaWNrZXItY29udGVudC10b3VjaCB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1kYXRlcGlja2VyLXRvZ2dsZS1hY3RpdmUge1xuICBjb2xvcjogIzNmNTFiNTtcbn1cbi5tYXQtZGF0ZXBpY2tlci10b2dnbGUtYWN0aXZlLm1hdC1hY2NlbnQge1xuICBjb2xvcjogI2ZmNDA4MTtcbn1cbi5tYXQtZGF0ZXBpY2tlci10b2dnbGUtYWN0aXZlLm1hdC13YXJuIHtcbiAgY29sb3I6ICNmNDQzMzY7XG59XG5cbi5tYXQtZGF0ZS1yYW5nZS1pbnB1dC1pbm5lcltkaXNhYmxlZF0ge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcbn1cblxuLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgYm94LXNoYWRvdzogMHB4IDExcHggMTVweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDI0cHggMzhweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDlweCA0NnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi5tYXQtZGl2aWRlciB7XG4gIGJvcmRlci10b3AtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZGl2aWRlci12ZXJ0aWNhbCB7XG4gIGJvcmRlci1yaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG4ubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtYWN0aW9uLXJvdyB7XG4gIGJvcmRlci10b3AtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0pLCAubWF0LWV4cGFuc2lvbi1wYW5lbCAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0pLCAubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoLm1hdC1leHBhbmRlZCkgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyOmhvdmVyOm5vdChbYXJpYS1kaXNhYmxlZD10cnVlXSkge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xufVxuXG5AbWVkaWEgKGhvdmVyOiBub25lKSB7XG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdCgubWF0LWV4cGFuZGVkKTpub3QoW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0pIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gIH1cbn1cbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24sXG4ubWF0LWV4cGFuc2lvbi1pbmRpY2F0b3I6OmFmdGVyIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlclthcmlhLWRpc2FibGVkPXRydWVdIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNik7XG59XG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJbYXJpYS1kaXNhYmxlZD10cnVlXSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUsXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJbYXJpYS1kaXNhYmxlZD10cnVlXSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLm1hdC1leHBhbmRlZCB7XG4gIGhlaWdodDogNjRweDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cblxuLm1hdC1oaW50IHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGNvbG9yOiAjM2Y1MWI1O1xufVxuLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbC5tYXQtYWNjZW50IHtcbiAgY29sb3I6ICNmZjQwODE7XG59XG4ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLm1hdC13YXJuIHtcbiAgY29sb3I6ICNmNDQzMzY7XG59XG5cbi5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmVxdWlyZWQtbWFya2VyIHtcbiAgY29sb3I6ICNmZjQwODE7XG59XG5cbi5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG59XG4ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZS5tYXQtYWNjZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDA4MTtcbn1cbi5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlLm1hdC13YXJuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvY3VzZWQ6bm90KC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkKSAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgY29sb3I6ICMzZjUxYjU7XG59XG4ubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9jdXNlZDpub3QoLm1hdC1mb3JtLWZpZWxkLWludmFsaWQpLm1hdC1hY2NlbnQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gIGNvbG9yOiAjZmY0MDgxO1xufVxuLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvY3VzZWQ6bm90KC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkKS5tYXQtd2FybiAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgY29sb3I6ICNmNDQzMzY7XG59XG5cbi5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGNvbG9yOiAjZjQ0MzM2O1xufVxuLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLm1hdC1hY2NlbnQsXG4ubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtbGFiZWwgLm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlciB7XG4gIGNvbG9yOiAjZjQ0MzM2O1xufVxuLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSxcbi5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUubWF0LWFjY2VudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG59XG5cbi5tYXQtZXJyb3Ige1xuICBjb2xvcjogI2Y0NDMzNjtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtaGludCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDIpO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwgMCwgMCwgMC40MikgMCUsIHJnYmEoMCwgMCwgMCwgMC40MikgMzMlLCB0cmFuc3BhcmVudCAwJSk7XG4gIGJhY2tncm91bmQtc2l6ZTogNHB4IDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40Mik7XG59XG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1zdGFuZGFyZC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDAuNDIpIDAlLCByZ2JhKDAsIDAsIDAsIDAuNDIpIDMzJSwgdHJhbnNwYXJlbnQgMCUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDRweCAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG59XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wMik7XG59XG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmU6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40Mik7XG59XG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gIGNvbG9yOiAjM2Y1MWI1O1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZC5tYXQtYWNjZW50IC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgY29sb3I6ICNmZjQwODE7XG59XG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkLm1hdC13YXJuIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgY29sb3I6ICNmNDQzMzY7XG59XG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWludmFsaWQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gIGNvbG9yOiAjZjQ0MzM2O1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcbn1cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA2KTtcbn1cblxuLm1hdC1pY29uLm1hdC1wcmltYXJ5IHtcbiAgY29sb3I6ICMzZjUxYjU7XG59XG4ubWF0LWljb24ubWF0LWFjY2VudCB7XG4gIGNvbG9yOiAjZmY0MDgxO1xufVxuLm1hdC1pY29uLm1hdC13YXJuIHtcbiAgY29sb3I6ICNmNDQzMzY7XG59XG5cbi5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0IC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cblxuLm1hdC1pbnB1dC1lbGVtZW50OmRpc2FibGVkLFxuLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xufVxuXG4ubWF0LWlucHV0LWVsZW1lbnQge1xuICBjYXJldC1jb2xvcjogIzNmNTFiNTtcbn1cbi5tYXQtaW5wdXQtZWxlbWVudDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQyKTtcbn1cbi5tYXQtaW5wdXQtZWxlbWVudDo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDIpO1xufVxuLm1hdC1pbnB1dC1lbGVtZW50Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40Mik7XG59XG4ubWF0LWlucHV0LWVsZW1lbnQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40Mik7XG59XG5cbi5tYXQtZm9ybS1maWVsZC5tYXQtYWNjZW50IC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gIGNhcmV0LWNvbG9yOiAjZmY0MDgxO1xufVxuXG4ubWF0LWZvcm0tZmllbGQubWF0LXdhcm4gLm1hdC1pbnB1dC1lbGVtZW50LFxuLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgY2FyZXQtY29sb3I6ICNmNDQzMzY7XG59XG5cbi5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gIGNvbG9yOiAjZjQ0MzM2O1xufVxuXG4ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LW9wdGlvbiB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuLm1hdC1saXN0LWJhc2UgLm1hdC1zdWJoZWFkZXIge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cblxuLm1hdC1saXN0LWl0ZW0tZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xufVxuXG4ubWF0LWxpc3Qtb3B0aW9uOmhvdmVyLCAubWF0LWxpc3Qtb3B0aW9uOmZvY3VzLFxuLm1hdC1uYXYtbGlzdCAubWF0LWxpc3QtaXRlbTpob3Zlcixcbi5tYXQtbmF2LWxpc3QgLm1hdC1saXN0LWl0ZW06Zm9jdXMsXG4ubWF0LWFjdGlvbi1saXN0IC5tYXQtbGlzdC1pdGVtOmhvdmVyLFxuLm1hdC1hY3Rpb24tbGlzdCAubWF0LWxpc3QtaXRlbTpmb2N1cyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG59XG5cbi5tYXQtbGlzdC1zaW5nbGUtc2VsZWN0ZWQtb3B0aW9uLCAubWF0LWxpc3Qtc2luZ2xlLXNlbGVjdGVkLW9wdGlvbjpob3ZlciwgLm1hdC1saXN0LXNpbmdsZS1zZWxlY3RlZC1vcHRpb246Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LW1lbnUtcGFuZWwge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5tYXQtbWVudS1wYW5lbDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggNHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LW1lbnUtaXRlbSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cbi5tYXQtbWVudS1pdGVtW2Rpc2FibGVkXSwgLm1hdC1tZW51LWl0ZW1bZGlzYWJsZWRdOjphZnRlciB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xufVxuXG4ubWF0LW1lbnUtaXRlbSAubWF0LWljb24tbm8tY29sb3IsXG4ubWF0LW1lbnUtaXRlbS1zdWJtZW51LXRyaWdnZXI6OmFmdGVyIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG59XG5cbi5tYXQtbWVudS1pdGVtOmhvdmVyOm5vdChbZGlzYWJsZWRdKSxcbi5tYXQtbWVudS1pdGVtLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KFtkaXNhYmxlZF0pLFxuLm1hdC1tZW51LWl0ZW0uY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KFtkaXNhYmxlZF0pLFxuLm1hdC1tZW51LWl0ZW0taGlnaGxpZ2h0ZWQ6bm90KFtkaXNhYmxlZF0pIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA0KTtcbn1cblxuLm1hdC1wYWdpbmF0b3Ige1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLm1hdC1wYWdpbmF0b3IsXG4ubWF0LXBhZ2luYXRvci1wYWdlLXNpemUgLm1hdC1zZWxlY3QtdHJpZ2dlciB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xufVxuXG4ubWF0LXBhZ2luYXRvci1kZWNyZW1lbnQsXG4ubWF0LXBhZ2luYXRvci1pbmNyZW1lbnQge1xuICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cblxuLm1hdC1wYWdpbmF0b3ItZmlyc3QsXG4ubWF0LXBhZ2luYXRvci1sYXN0IHtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41NCk7XG59XG5cbi5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIC5tYXQtcGFnaW5hdG9yLWRlY3JlbWVudCxcbi5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIC5tYXQtcGFnaW5hdG9yLWluY3JlbWVudCxcbi5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIC5tYXQtcGFnaW5hdG9yLWZpcnN0LFxuLm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1wYWdpbmF0b3ItbGFzdCB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcbn1cblxuLm1hdC1wYWdpbmF0b3ItY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogNTZweDtcbn1cblxuLm1hdC1wcm9ncmVzcy1iYXItYmFja2dyb3VuZCB7XG4gIGZpbGw6ICNjNWNhZTk7XG59XG5cbi5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjNWNhZTk7XG59XG5cbi5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbn1cblxuLm1hdC1wcm9ncmVzcy1iYXIubWF0LWFjY2VudCAubWF0LXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kIHtcbiAgZmlsbDogI2ZmODBhYjtcbn1cbi5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC1hY2NlbnQgLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmODBhYjtcbn1cbi5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC1hY2NlbnQgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0MDgxO1xufVxuXG4ubWF0LXByb2dyZXNzLWJhci5tYXQtd2FybiAubWF0LXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kIHtcbiAgZmlsbDogI2ZmY2RkMjtcbn1cbi5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC13YXJuIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmNkZDI7XG59XG4ubWF0LXByb2dyZXNzLWJhci5tYXQtd2FybiAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG59XG5cbi5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lciBjaXJjbGUsIC5tYXQtc3Bpbm5lciBjaXJjbGUge1xuICBzdHJva2U6ICMzZjUxYjU7XG59XG4ubWF0LXByb2dyZXNzLXNwaW5uZXIubWF0LWFjY2VudCBjaXJjbGUsIC5tYXQtc3Bpbm5lci5tYXQtYWNjZW50IGNpcmNsZSB7XG4gIHN0cm9rZTogI2ZmNDA4MTtcbn1cbi5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lci5tYXQtd2FybiBjaXJjbGUsIC5tYXQtc3Bpbm5lci5tYXQtd2FybiBjaXJjbGUge1xuICBzdHJva2U6ICNmNDQzMzY7XG59XG5cbi5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xufVxuXG4ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcHJpbWFyeS5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gIGJvcmRlci1jb2xvcjogIzNmNTFiNTtcbn1cbi5tYXQtcmFkaW8tYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtcmFkaW8taW5uZXItY2lyY2xlLFxuLm1hdC1yYWRpby1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudDpub3QoLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSksIC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1wcmltYXJ5Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUsIC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1wcmltYXJ5OmFjdGl2ZSAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbn1cbi5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICBib3JkZXItY29sb3I6ICNmZjQwODE7XG59XG4ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmFkaW8taW5uZXItY2lyY2xlLFxuLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudCAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50Om5vdCgubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlKSwgLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudC5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlLCAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50OmFjdGl2ZSAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDA4MTtcbn1cbi5tYXQtcmFkaW8tYnV0dG9uLm1hdC13YXJuLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgYm9yZGVyLWNvbG9yOiAjZjQ0MzM2O1xufVxuLm1hdC1yYWRpby1idXR0b24ubWF0LXdhcm4gLm1hdC1yYWRpby1pbm5lci1jaXJjbGUsXG4ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtd2FybiAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50Om5vdCgubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlKSwgLm1hdC1yYWRpby1idXR0b24ubWF0LXdhcm4ubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSwgLm1hdC1yYWRpby1idXR0b24ubWF0LXdhcm46YWN0aXZlIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xufVxuLm1hdC1yYWRpby1idXR0b24ubWF0LXJhZGlvLWRpc2FibGVkLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlLFxuLm1hdC1yYWRpby1idXR0b24ubWF0LXJhZGlvLWRpc2FibGVkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xufVxuLm1hdC1yYWRpby1idXR0b24ubWF0LXJhZGlvLWRpc2FibGVkIC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQsXG4ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcmFkaW8tZGlzYWJsZWQgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xufVxuLm1hdC1yYWRpby1idXR0b24ubWF0LXJhZGlvLWRpc2FibGVkIC5tYXQtcmFkaW8tbGFiZWwtY29udGVudCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xufVxuLm1hdC1yYWRpby1idXR0b24gLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4ubWF0LXNlbGVjdC12YWx1ZSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4ubWF0LXNlbGVjdC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDIpO1xufVxuXG4ubWF0LXNlbGVjdC1kaXNhYmxlZCAubWF0LXNlbGVjdC12YWx1ZSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xufVxuXG4ubWF0LXNlbGVjdC1hcnJvdyB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xufVxuXG4ubWF0LXNlbGVjdC1wYW5lbCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLm1hdC1zZWxlY3QtcGFuZWw6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSkge1xuICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDRweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5tYXQtc2VsZWN0LXBhbmVsIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tbXVsdGlwbGUpIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkLm1hdC1wcmltYXJ5IC5tYXQtc2VsZWN0LWFycm93IHtcbiAgY29sb3I6ICMzZjUxYjU7XG59XG4ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQubWF0LWFjY2VudCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gIGNvbG9yOiAjZmY0MDgxO1xufVxuLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkLm1hdC13YXJuIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgY29sb3I6ICNmNDQzMzY7XG59XG4ubWF0LWZvcm0tZmllbGQgLm1hdC1zZWxlY3QubWF0LXNlbGVjdC1pbnZhbGlkIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgY29sb3I6ICNmNDQzMzY7XG59XG4ubWF0LWZvcm0tZmllbGQgLm1hdC1zZWxlY3QubWF0LXNlbGVjdC1kaXNhYmxlZCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xufVxuXG4ubWF0LWRyYXdlci1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLm1hdC1kcmF3ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG4ubWF0LWRyYXdlci5tYXQtZHJhd2VyLXB1c2gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5tYXQtZHJhd2VyOm5vdCgubWF0LWRyYXdlci1zaWRlKSB7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDE2cHggMjRweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDZweCAzMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWRyYXdlci1zaWRlIHtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5tYXQtZHJhd2VyLXNpZGUubWF0LWRyYXdlci1lbmQge1xuICBib3JkZXItbGVmdDogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cblxuW2Rpcj1ydGxdIC5tYXQtZHJhd2VyLXNpZGUge1xuICBib3JkZXItbGVmdDogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cbltkaXI9cnRsXSAubWF0LWRyYXdlci1zaWRlLm1hdC1kcmF3ZXItZW5kIHtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZHJhd2VyLWJhY2tkcm9wLm1hdC1kcmF3ZXItc2hvd24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG5cbi5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDA4MTtcbn1cbi5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCA2NCwgMTI5LCAwLjU0KTtcbn1cbi5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0MDgxO1xufVxuLm1hdC1zbGlkZS10b2dnbGUubWF0LXByaW1hcnkubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xufVxuLm1hdC1zbGlkZS10b2dnbGUubWF0LXByaW1hcnkubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2MywgODEsIDE4MSwgMC41NCk7XG59XG4ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtcHJpbWFyeS5tYXQtY2hlY2tlZCAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbn1cbi5tYXQtc2xpZGUtdG9nZ2xlLm1hdC13YXJuLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbn1cbi5tYXQtc2xpZGUtdG9nZ2xlLm1hdC13YXJuLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ0LCA2NywgNTQsIDAuNTQpO1xufVxuLm1hdC1zbGlkZS10b2dnbGUubWF0LXdhcm4ubWF0LWNoZWNrZWQgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG59XG4ubWF0LXNsaWRlLXRvZ2dsZTpub3QoLm1hdC1jaGVja2VkKSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbn1cblxuLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcbn1cblxuLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNik7XG59XG5cbi5tYXQtcHJpbWFyeSAubWF0LXNsaWRlci10cmFjay1maWxsLFxuLm1hdC1wcmltYXJ5IC5tYXQtc2xpZGVyLXRodW1iLFxuLm1hdC1wcmltYXJ5IC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbn1cbi5tYXQtcHJpbWFyeSAubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1hdC1wcmltYXJ5IC5tYXQtc2xpZGVyLWZvY3VzLXJpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYzLCA4MSwgMTgxLCAwLjIpO1xufVxuXG4ubWF0LWFjY2VudCAubWF0LXNsaWRlci10cmFjay1maWxsLFxuLm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItdGh1bWIsXG4ubWF0LWFjY2VudCAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjQwODE7XG59XG4ubWF0LWFjY2VudCAubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItZm9jdXMtcmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCA2NCwgMTI5LCAwLjIpO1xufVxuXG4ubWF0LXdhcm4gLm1hdC1zbGlkZXItdHJhY2stZmlsbCxcbi5tYXQtd2FybiAubWF0LXNsaWRlci10aHVtYixcbi5tYXQtd2FybiAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG59XG4ubWF0LXdhcm4gLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tYXQtd2FybiAubWF0LXNsaWRlci1mb2N1cy1yaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDQsIDY3LCA1NCwgMC4yKTtcbn1cblxuLm1hdC1zbGlkZXI6aG92ZXIgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCxcbi5jZGstZm9jdXNlZCAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcbn1cblxuLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCxcbi5tYXQtc2xpZGVyLWRpc2FibGVkIC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwsXG4ubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNik7XG59XG4ubWF0LXNsaWRlci1kaXNhYmxlZDpob3ZlciAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI2KTtcbn1cblxuLm1hdC1zbGlkZXItbWluLXZhbHVlIC5tYXQtc2xpZGVyLWZvY3VzLXJpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLm1hdC1zbGlkZXItbWluLXZhbHVlLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZyAubWF0LXNsaWRlci10aHVtYixcbi5tYXQtc2xpZGVyLW1pbi12YWx1ZS5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuLm1hdC1zbGlkZXItbWluLXZhbHVlLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZy5jZGstZm9jdXNlZCAubWF0LXNsaWRlci10aHVtYixcbi5tYXQtc2xpZGVyLW1pbi12YWx1ZS5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcuY2RrLWZvY3VzZWQgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjYpO1xufVxuLm1hdC1zbGlkZXItbWluLXZhbHVlOm5vdCgubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nKSAubWF0LXNsaWRlci10aHVtYiB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI2KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4ubWF0LXNsaWRlci1taW4tdmFsdWU6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpOmhvdmVyIC5tYXQtc2xpZGVyLXRodW1iLCAubWF0LXNsaWRlci1taW4tdmFsdWU6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpLmNkay1mb2N1c2VkIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xufVxuLm1hdC1zbGlkZXItbWluLXZhbHVlOm5vdCgubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nKTpob3Zlci5tYXQtc2xpZGVyLWRpc2FibGVkIC5tYXQtc2xpZGVyLXRodW1iLCAubWF0LXNsaWRlci1taW4tdmFsdWU6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpLmNkay1mb2N1c2VkLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdGh1bWIge1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNik7XG59XG5cbi5tYXQtc2xpZGVyLWhhcy10aWNrcyAubWF0LXNsaWRlci13cmFwcGVyOjphZnRlciB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xufVxuXG4ubWF0LXNsaWRlci1ob3Jpem9udGFsIC5tYXQtc2xpZGVyLXRpY2tzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAwLjcpLCByZ2JhKDAsIDAsIDAsIDAuNykgMnB4LCB0cmFuc3BhcmVudCAwLCB0cmFuc3BhcmVudCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCgwLjAwMDFkZWcsIHJnYmEoMCwgMCwgMCwgMC43KSwgcmdiYSgwLCAwLCAwLCAwLjcpIDJweCwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpO1xufVxuXG4ubWF0LXNsaWRlci12ZXJ0aWNhbCAubWF0LXNsaWRlci10aWNrcyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDAuNyksIHJnYmEoMCwgMCwgMCwgMC43KSAycHgsIHRyYW5zcGFyZW50IDAsIHRyYW5zcGFyZW50KTtcbn1cblxuLm1hdC1zdGVwLWhlYWRlci5jZGsta2V5Ym9hcmQtZm9jdXNlZCwgLm1hdC1zdGVwLWhlYWRlci5jZGstcHJvZ3JhbS1mb2N1c2VkLCAubWF0LXN0ZXAtaGVhZGVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA0KTtcbn1cbkBtZWRpYSAoaG92ZXI6IG5vbmUpIHtcbiAgLm1hdC1zdGVwLWhlYWRlcjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgfVxufVxuLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtbGFiZWwsXG4ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1vcHRpb25hbCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xufVxuLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQsXG4ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXN0YXRlLWRvbmUsXG4ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXN0YXRlLWVkaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXN0YXRlLWVycm9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZjQ0MzM2O1xufVxuLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtbGFiZWwubWF0LXN0ZXAtbGFiZWwtYWN0aXZlIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG4ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1sYWJlbC5tYXQtc3RlcC1sYWJlbC1lcnJvciB7XG4gIGNvbG9yOiAjZjQ0MzM2O1xufVxuXG4ubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCwgLm1hdC1zdGVwcGVyLXZlcnRpY2FsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5tYXQtc3RlcHBlci12ZXJ0aWNhbC1saW5lOjpiZWZvcmUge1xuICBib3JkZXItbGVmdC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyOjpiZWZvcmUsXG4ubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXI6OmFmdGVyLFxuLm1hdC1zdGVwcGVyLWhvcml6b250YWwtbGluZSB7XG4gIGJvcmRlci10b3AtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlciB7XG4gIGhlaWdodDogNzJweDtcbn1cblxuLm1hdC1zdGVwcGVyLWxhYmVsLXBvc2l0aW9uLWJvdHRvbSAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXIsXG4ubWF0LXZlcnRpY2FsLXN0ZXBwZXItaGVhZGVyIHtcbiAgcGFkZGluZzogMjRweCAyNHB4O1xufVxuXG4ubWF0LXN0ZXBwZXItdmVydGljYWwtbGluZTo6YmVmb3JlIHtcbiAgdG9wOiAtMTZweDtcbiAgYm90dG9tOiAtMTZweDtcbn1cblxuLm1hdC1zdGVwcGVyLWxhYmVsLXBvc2l0aW9uLWJvdHRvbSAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXI6OmFmdGVyLCAubWF0LXN0ZXBwZXItbGFiZWwtcG9zaXRpb24tYm90dG9tIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlcjo6YmVmb3JlIHtcbiAgdG9wOiAzNnB4O1xufVxuXG4ubWF0LXN0ZXBwZXItbGFiZWwtcG9zaXRpb24tYm90dG9tIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsLWxpbmUge1xuICB0b3A6IDM2cHg7XG59XG5cbi5tYXQtc29ydC1oZWFkZXItYXJyb3cge1xuICBjb2xvcjogIzc1NzU3NTtcbn1cblxuLm1hdC10YWItbmF2LWJhcixcbi5tYXQtdGFiLWhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LXRhYi1ncm91cC1pbnZlcnRlZC1oZWFkZXIgLm1hdC10YWItbmF2LWJhcixcbi5tYXQtdGFiLWdyb3VwLWludmVydGVkLWhlYWRlciAubWF0LXRhYi1oZWFkZXIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLm1hdC10YWItbGFiZWwsIC5tYXQtdGFiLWxpbmsge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cbi5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsIC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xufVxuXG4ubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4ubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xufVxuXG4ubWF0LXRhYi1ncm91cFtjbGFzcyo9bWF0LWJhY2tncm91bmQtXSAubWF0LXRhYi1oZWFkZXIsXG4ubWF0LXRhYi1uYXYtYmFyW2NsYXNzKj1tYXQtYmFja2dyb3VuZC1dIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbn1cblxuLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5NywgMjAyLCAyMzMsIDAuMyk7XG59XG4ubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LWluay1iYXIsIC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC1pbmstYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbn1cbi5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5Lm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC1pbmstYmFyLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5Lm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC1pbmstYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4ubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItZ3JvdXAubWF0LWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItbmF2LWJhci5tYXQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTI4LCAxNzEsIDAuMyk7XG59XG4ubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50IC5tYXQtaW5rLWJhciwgLm1hdC10YWItbmF2LWJhci5tYXQtYWNjZW50IC5tYXQtaW5rLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjQwODE7XG59XG4ubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50Lm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LWluay1iYXIsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC1pbmstYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4ubWF0LXRhYi1ncm91cC5tYXQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1ncm91cC5tYXQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1ncm91cC5tYXQtd2FybiAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1ncm91cC5tYXQtd2FybiAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItbmF2LWJhci5tYXQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4gLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItbmF2LWJhci5tYXQtd2FybiAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMDUsIDIxMCwgMC4zKTtcbn1cbi5tYXQtdGFiLWdyb3VwLm1hdC13YXJuIC5tYXQtaW5rLWJhciwgLm1hdC10YWItbmF2LWJhci5tYXQtd2FybiAubWF0LWluay1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xufVxuLm1hdC10YWItZ3JvdXAubWF0LXdhcm4ubWF0LWJhY2tncm91bmQtd2FybiAubWF0LWluay1iYXIsIC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4ubWF0LWJhY2tncm91bmQtd2FybiAubWF0LWluay1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk3LCAyMDIsIDIzMywgMC4zKTtcbn1cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLCAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmtzLCAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGlua3MsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG59XG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLCAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmssIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbCwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsge1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVkLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG59XG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbn1cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbn1cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xufVxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxMjgsIDE3MSwgMC4zKTtcbn1cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1oZWFkZXIsIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rcywgLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1oZWFkZXIsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmtzLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjQwODE7XG59XG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwsIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbCwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluayB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLCAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVkLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWQge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xufVxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xufVxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbn1cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50LCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcbn1cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMDUsIDIxMCwgMC4zKTtcbn1cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLCAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmtzLCAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGlua3MsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG59XG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLCAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmssIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbCwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmsge1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVkLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG59XG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbn1cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbn1cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xufVxuXG4ubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6ICMzZjUxYjU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tYXQtdG9vbGJhci5tYXQtYWNjZW50IHtcbiAgYmFja2dyb3VuZDogI2ZmNDA4MTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1hdC10b29sYmFyLm1hdC13YXJuIHtcbiAgYmFja2dyb3VuZDogI2Y0NDMzNjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1hdC10b29sYmFyIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUsXG4ubWF0LXRvb2xiYXIgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSxcbi5tYXQtdG9vbGJhciAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbn1cbi5tYXQtdG9vbGJhciAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4ubWF0LXRvb2xiYXIgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbi5tYXQtdG9vbGJhciAubWF0LXNlbGVjdC12YWx1ZSxcbi5tYXQtdG9vbGJhciAubWF0LXNlbGVjdC1hcnJvdyxcbi5tYXQtdG9vbGJhciAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1zZWxlY3QtYXJyb3cge1xuICBjb2xvcjogaW5oZXJpdDtcbn1cbi5tYXQtdG9vbGJhciAubWF0LWlucHV0LWVsZW1lbnQge1xuICBjYXJldC1jb2xvcjogY3VycmVudENvbG9yO1xufVxuXG4ubWF0LXRvb2xiYXItbXVsdGlwbGUtcm93cyB7XG4gIG1pbi1oZWlnaHQ6IDY0cHg7XG59XG5cbi5tYXQtdG9vbGJhci1yb3csIC5tYXQtdG9vbGJhci1zaW5nbGUtcm93IHtcbiAgaGVpZ2h0OiA2NHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgLm1hdC10b29sYmFyLW11bHRpcGxlLXJvd3Mge1xuICAgIG1pbi1oZWlnaHQ6IDU2cHg7XG4gIH1cblxuICAubWF0LXRvb2xiYXItcm93LCAubWF0LXRvb2xiYXItc2luZ2xlLXJvdyB7XG4gICAgaGVpZ2h0OiA1NnB4O1xuICB9XG59XG4ubWF0LXRvb2x0aXAge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDk3LCA5NywgOTcsIDAuOSk7XG59XG5cbi5tYXQtdHJlZSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4ubWF0LXRyZWUtbm9kZSxcbi5tYXQtbmVzdGVkLXRyZWUtbm9kZSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4ubWF0LXRyZWUtbm9kZSB7XG4gIG1pbi1oZWlnaHQ6IDQ4cHg7XG59XG5cbi5tYXQtc25hY2stYmFyLWNvbnRhaW5lciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gIGJhY2tncm91bmQ6ICMzMjMyMzI7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggNnB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggMThweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1zaW1wbGUtc25hY2tiYXItYWN0aW9uIHtcbiAgY29sb3I6ICNmZjQwODE7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBcIlZlcmRhbmFcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG59XG5cbi5jb21wb25lbnQtd3JhcHBlciB7XG4gIHBhZGRpbmc6IDV2aCA1dnc7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogODUwcHgpIHtcbiAgLmNvbXBvbmVudC13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiA1dnc7XG4gIH1cbn1cbi5zb2NpYWwtaWNvbnMtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93O1xufVxuLnNvY2lhbC1pY29ucy13cmFwcGVyIGEge1xuICBtYXJnaW46IDAgMTBweDtcbn1cblxuLm1lbnUtaWNvbiB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZy10b3A6IDZweDtcbn1cblxuLm1lbnUtaWNvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbm1hdC1pY29uIHtcbiAgZm9udC1mYW1pbHk6IFwiTWF0ZXJpYWwgSWNvbnNcIjtcbn1cblxuLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC1pbmstYmFyLFxuLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LWluay1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cblxuYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cbmE6YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHZhcigtLXByaW1hcnkpO1xuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGVhc2UtaW4tb3V0O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XG59XG5hOmhvdmVyOmFmdGVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcbn1cblxuLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4ubWF0LWNoaXAtbGlzdCAubWF0LWNoaXAge1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIG1pbi1oZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IHVuc2V0O1xuICBtYXJnaW46IDVweDtcbn1cbi5tYXQtY2hpcC1saXN0IC5tYXQtY2hpcDpob3ZlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xufVxuXG4uY2RrLW92ZXJsYXktcGFuZSB7XG4gIGxlZnQ6IDAgIWltcG9ydGFudDtcbiAgdG9wOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtbWVudS1wYW5lbCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJsYWNrKTtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtYXgtaGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogdW5zZXQgIWltcG9ydGFudDtcbn1cbi5tYXQtbWVudS1wYW5lbCAubWF0LW1lbnUtY29udGVudDpub3QoOmVtcHR5KSB7XG4gIHBhZGRpbmc6IDEwJTtcbn1cbi5tYXQtbWVudS1wYW5lbCAubWF0LW1lbnUtY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgcGFkZGluZzogMTAlO1xufVxuLm1hdC1tZW51LXBhbmVsIC5tYXQtbWVudS1jb250ZW50IC5tYXQtbWVudS1pdGVtIHtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5tYXQtbWVudS1wYW5lbCAubWF0LW1lbnUtY29udGVudCBhcHAtY29udGFjdCB7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuLnNlbGVjdGVkLXBhZ2Uge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSkgIWltcG9ydGFudDtcbn0iLCIvLyBGaWxlIGZvciB3aGljaCBhbGwgaW1wb3J0cyBhcmUgcmVzb2x2ZWQgYW5kIGJ1bmRsZWQuIFRoaXMgaXMgdGhlIGVudHJ5LXBvaW50IGZvclxuLy8gdGhlIGBAYW5ndWxhci9tYXRlcmlhbGAgdGhlbWluZyBTYXNzIGJ1bmRsZS4gU2VlIGAvL3NyYy9tYXRlcmlhbDp0aGVtaW5nX2J1bmRsZWAuXG5cbi8vIEltcG9ydCBhbGwgdGhlIHRoZW1pbmcgZnVuY3Rpb25hbGl0eS5cbi8vIFdlIHdhbnQgb3ZlcmxheXMgdG8gYWx3YXlzIGFwcGVhciBvdmVyIHVzZXIgY29udGVudCwgc28gc2V0IGEgYmFzZWxpbmVcbi8vIHZlcnkgaGlnaCB6LWluZGV4IGZvciB0aGUgb3ZlcmxheSBjb250YWluZXIsIHdoaWNoIGlzIHdoZXJlIHdlIGNyZWF0ZSB0aGUgbmV3XG4vLyBzdGFja2luZyBjb250ZXh0IGZvciBhbGwgb3ZlcmxheXMuXG4kY2RrLXotaW5kZXgtb3ZlcmxheS1jb250YWluZXI6IDEwMDAgIWRlZmF1bHQ7XG4kY2RrLXotaW5kZXgtb3ZlcmxheTogMTAwMCAhZGVmYXVsdDtcbiRjZGstei1pbmRleC1vdmVybGF5LWJhY2tkcm9wOiAxMDAwICFkZWZhdWx0O1xuXG4vLyBCYWNrZ3JvdW5kIGNvbG9yIGZvciBhbGwgb2YgdGhlIGJhY2tkcm9wc1xuJGNkay1vdmVybGF5LWRhcmstYmFja2Ryb3AtYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMyKSAhZGVmYXVsdDtcblxuLy8gRGVmYXVsdCBiYWNrZHJvcCBhbmltYXRpb24gaXMgYmFzZWQgb24gdGhlIE1hdGVyaWFsIERlc2lnbiBzd2lmdC1lYXNlLW91dC5cbiRiYWNrZHJvcC1hbmltYXRpb24tZHVyYXRpb246IDQwMG1zICFkZWZhdWx0O1xuJGJhY2tkcm9wLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpICFkZWZhdWx0O1xuXG5cbkBtaXhpbiBjZGstb3ZlcmxheSgpIHtcbiAgLmNkay1vdmVybGF5LWNvbnRhaW5lciwgLmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVyIHtcbiAgICAvLyBEaXNhYmxlIGV2ZW50cyBmcm9tIGJlaW5nIGNhcHR1cmVkIG9uIHRoZSBvdmVybGF5IGNvbnRhaW5lci5cbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAgIC8vIFRoZSBjb250YWluZXIgc2hvdWxkIGJlIHRoZSBzaXplIG9mIHRoZSB2aWV3cG9ydC5cbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAvLyBUaGUgb3ZlcmxheS1jb250YWluZXIgaXMgYW4gaW52aXNpYmxlIGVsZW1lbnQgd2hpY2ggY29udGFpbnMgYWxsIGluZGl2aWR1YWwgb3ZlcmxheXMuXG4gIC5jZGstb3ZlcmxheS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAkY2RrLXotaW5kZXgtb3ZlcmxheS1jb250YWluZXI7XG5cbiAgICAmOmVtcHR5IHtcbiAgICAgIC8vIEhpZGUgdGhlIGVsZW1lbnQgd2hlbiBpdCBkb2Vzbid0IGhhdmUgYW55IGNoaWxkIG5vZGVzLiBUaGlzIGRvZXNuJ3RcbiAgICAgIC8vIGluY2x1ZGUgb3ZlcmxheXMgdGhhdCBoYXZlIGJlZW4gZGV0YWNoZWQsIHJhdGhlciB0aGFuIGRpc3Bvc2VkLlxuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAvLyBXZSB1c2UgYW4gZXh0cmEgd3JhcHBlciBlbGVtZW50IGluIG9yZGVyIHRvIHVzZSBtYWtlIHRoZSBvdmVybGF5IGl0c2VsZiBhIGZsZXggaXRlbS5cbiAgLy8gVGhpcyBtYWtlcyBjZW50ZXJpbmcgdGhlIG92ZXJsYXkgZWFzeSB3aXRob3V0IHJ1bm5pbmcgaW50byB0aGUgc3VicGl4ZWwgcmVuZGVyaW5nXG4gIC8vIHByb2JsZW1zIHRpZWQgdG8gdXNpbmcgYHRyYW5zZm9ybWAgYW5kIHdpdGhvdXQgaW50ZXJmZXJpbmcgd2l0aCB0aGUgb3RoZXIgcG9zaXRpb25cbiAgLy8gc3RyYXRlZ2llcy5cbiAgLmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAkY2RrLXotaW5kZXgtb3ZlcmxheTtcbiAgfVxuXG4gIC8vIEEgc2luZ2xlIG92ZXJsYXkgcGFuZS5cbiAgLmNkay1vdmVybGF5LXBhbmUge1xuICAgIC8vIE5vdGU6IGl0J3MgaW1wb3J0YW50IGZvciB0aGlzIG9uZSB0byBzdGFydCBvZmYgYGFic29sdXRlYCxcbiAgICAvLyBpbiBvcmRlciBmb3IgdXMgdG8gYmUgYWJsZSB0byBtZWFzdXJlIGl0IGNvcnJlY3RseS5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB6LWluZGV4OiAkY2RrLXotaW5kZXgtb3ZlcmxheTtcblxuICAgIC8vIEZvciBjb25uZWN0ZWQtcG9zaXRpb24gb3ZlcmxheXMsIHdlIHNldCBgZGlzcGxheTogZmxleGAgaW5cbiAgICAvLyBvcmRlciB0byBmb3JjZSBgbWF4LXdpZHRoYCBhbmQgYG1heC1oZWlnaHRgIHRvIHRha2UgZWZmZWN0LlxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAuY2RrLW92ZXJsYXktYmFja2Ryb3Age1xuICAgIC8vIFRPRE8oamVsYm91cm4pOiByZXVzZSBzaWRlbmF2IGZ1bGxzY3JlZW4gbWl4aW4uXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcblxuICAgIHotaW5kZXg6ICRjZGstei1pbmRleC1vdmVybGF5LWJhY2tkcm9wO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAkYmFja2Ryb3AtYW5pbWF0aW9uLWR1cmF0aW9uICRiYWNrZHJvcC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uO1xuICAgIG9wYWNpdHk6IDA7XG5cbiAgICAmLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmcge1xuICAgICAgb3BhY2l0eTogMTtcblxuICAgICAgLy8gSW4gaGlnaCBjb250cmFzdCBtb2RlIHRoZSByZ2JhIGJhY2tncm91bmQgd2lsbCBiZWNvbWUgc29saWQgc28gd2UgbmVlZCB0byBmYWxsIGJhY2tcbiAgICAgIC8vIHRvIG1ha2luZyBpdCBvcGFxdWUgdXNpbmcgYG9wYWNpdHlgLiBOb3RlIHRoYXQgd2UgY2FuJ3QgdXNlIHRoZSBgY2RrLWhpZ2gtY29udHJhc3RgXG4gICAgICAvLyBtaXhpbiwgYmVjYXVzZSB3ZSBjYW4ndCBub3JtYWxpemUgdGhlIGltcG9ydCBwYXRoIHRvIHRoZSBfYTExeS5zY3NzIGJvdGggZm9yIHRoZVxuICAgICAgLy8gc291cmNlIGFuZCB3aGVuIHRoaXMgZmlsZSBpcyBkaXN0cmlidXRlZC4gU2VlICMxMDkwOC5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG4gICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcCB7XG4gICAgYmFja2dyb3VuZDogJGNkay1vdmVybGF5LWRhcmstYmFja2Ryb3AtYmFja2dyb3VuZDtcbiAgfVxuXG4gIC5jZGstb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcCB7XG4gICAgLy8gTm90ZTogYXMgb2YgRmlyZWZveCA1NywgaGF2aW5nIHRoZSBiYWNrZHJvcCBiZSBgYmFja2dyb3VuZDogbm9uZWAgd2lsbCBwcmV2ZW50IGl0IGZyb21cbiAgICAvLyBjYXB0dXJpbmcgdGhlIHVzZXIncyBtb3VzZSBzY3JvbGwgZXZlbnRzLiBTaW5jZSB3ZSBhbHNvIGNhbid0IHVzZSBzb21ldGhpbmcgbGlrZVxuICAgIC8vIGByZ2JhKDAsIDAsIDAsIDApYCwgd2Ugd29yayBhcm91bmQgdGhlIGluY29uc2lzdGVuY3kgYnkgbm90IHNldHRpbmcgdGhlIGJhY2tncm91bmQgYXRcbiAgICAvLyBhbGwgYW5kIHVzaW5nIGBvcGFjaXR5YCB0byBtYWtlIHRoZSBlbGVtZW50IHRyYW5zcGFyZW50LlxuICAgICYsICYuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZyB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuXG4gIC8vIE92ZXJsYXkgcGFyZW50IGVsZW1lbnQgdXNlZCB3aXRoIHRoZSBjb25uZWN0ZWQgcG9zaXRpb24gc3RyYXRlZ3kuIFVzZWQgdG8gY29uc3RyYWluIHRoZVxuICAvLyBvdmVybGF5IGVsZW1lbnQncyBzaXplIHRvIGZpdCB3aXRoaW4gdGhlIHZpZXdwb3J0LlxuICAuY2RrLW92ZXJsYXktY29ubmVjdGVkLXBvc2l0aW9uLWJvdW5kaW5nLWJveCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6ICRjZGstei1pbmRleC1vdmVybGF5O1xuXG4gICAgLy8gV2UgdXNlIGBkaXNwbGF5OiBmbGV4YCBvbiB0aGlzIGVsZW1lbnQgZXhjbHVzaXZlbHkgZm9yIGNlbnRlcmluZyBjb25uZWN0ZWQgb3ZlcmxheXMuXG4gICAgLy8gV2hlbiAqbm90KiBjZW50ZXJpbmcsIGEgdG9wL2xlZnQvYm90dG9tL3JpZ2h0IHdpbGwgYmUgc2V0IHdoaWNoIG92ZXJyaWRlcyB0aGUgbm9ybWFsXG4gICAgLy8gZmxleCBsYXlvdXQuXG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIC8vIFdlIHVzZSB0aGUgYGNvbHVtbmAgZGlyZWN0aW9uIGhlcmUgdG8gYXZvaWQgc29tZSBmbGV4Ym94IGlzc3VlcyBpbiBFZGdlXG4gICAgLy8gd2hlbiB1c2luZyB0aGUgXCJncm93IGFmdGVyIG9wZW5cIiBvcHRpb25zLlxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAvLyBBZGQgc29tZSBkaW1lbnNpb25zIHNvIHRoZSBlbGVtZW50IGhhcyBhbiBgaW5uZXJUZXh0YCB3aGljaCBzb21lIHBlb3BsZSBkZXBlbmQgb24gaW4gdGVzdHMuXG4gICAgbWluLXdpZHRoOiAxcHg7XG4gICAgbWluLWhlaWdodDogMXB4O1xuICB9XG5cbiAgLy8gVXNlZCB3aGVuIGRpc2FibGluZyBnbG9iYWwgc2Nyb2xsaW5nLlxuICAuY2RrLWdsb2JhbC1zY3JvbGxibG9jayB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuXG4gICAgLy8gTmVjZXNzYXJ5IGZvciB0aGUgY29udGVudCBub3QgdG8gbG9zZSBpdHMgd2lkdGguIE5vdGUgdGhhdCB3ZSdyZSB1c2luZyAxMDAlLCBpbnN0ZWFkIG9mXG4gICAgLy8gMTAwdncsIGJlY2F1c2UgMTAwdncgaW5jbHVkZXMgdGhlIHdpZHRoIHBsdXMgdGhlIHNjcm9sbGJhciwgd2hlcmVhcyAxMDAlIGlzIHRoZSB3aWR0aFxuICAgIC8vIHRoYXQgdGhlIGVsZW1lbnQgaGFkIGJlZm9yZSB3ZSBtYWRlIGl0IGBmaXhlZGAuXG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAvLyBOb3RlOiB0aGlzIHdpbGwgYWx3YXlzIGFkZCBhIHNjcm9sbGJhciB0byB3aGF0ZXZlciBlbGVtZW50IGl0IGlzIG9uLCB3aGljaCBjYW5cbiAgICAvLyBwb3RlbnRpYWxseSByZXN1bHQgaW4gZG91YmxlIHNjcm9sbGJhcnMuIEl0IHNob3VsZG4ndCBiZSBhbiBpc3N1ZSwgYmVjYXVzZSB3ZSB3b24ndFxuICAgIC8vIGJsb2NrIHNjcm9sbGluZyBvbiBhIHBhZ2UgdGhhdCBkb2Vzbid0IGhhdmUgYSBzY3JvbGxiYXIgaW4gdGhlIGZpcnN0IHBsYWNlLlxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgfVxufVxuXG5AbWl4aW4gY2RrLWExMXkge1xuICAuY2RrLXZpc3VhbGx5LWhpZGRlbiB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGNsaXA6IHJlY3QoMCAwIDAgMCk7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDFweDtcblxuICAgIC8vIEF2b2lkIGJyb3dzZXJzIHJlbmRlcmluZyB0aGUgZm9jdXMgcmluZyBpbiBzb21lIGNhc2VzLlxuICAgIG91dGxpbmU6IDA7XG5cbiAgICAvLyBBdm9pZCBzb21lIGNhc2VzIHdoZXJlIHRoZSBicm93c2VyIHdpbGwgc3RpbGwgcmVuZGVyIHRoZSBuYXRpdmUgY29udHJvbHMgKHNlZSAjOTA0OSkuXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgfVxufVxuXG4vLy8gRW1pdHMgdGhlIG1peGluJ3MgY29udGVudCBuZXN0ZWQgdW5kZXIgYCRzZWxlY3Rvci1jb250ZXh0YCBpZiBgJHNlbGVjdG9yLWNvbnRleHRgXG4vLy8gaXMgbm9uLWVtcHR5LlxuLy8vIEBwYXJhbSBzZWxlY3Rvci1jb250ZXh0IFRoZSBzZWxlY3RvciB1bmRlciB3aGljaCB0byBuZXN0IHRoZSBtaXhpbidzIGNvbnRlbnQuXG5AbWl4aW4gX2Nkay1vcHRpb25hbGx5LW5lc3QtY29udGVudCgkc2VsZWN0b3ItY29udGV4dCkge1xuICBAaWYgKCRzZWxlY3Rvci1jb250ZXh0ID09ICcnKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQGVsc2Uge1xuICAgICN7JHNlbGVjdG9yLWNvbnRleHR9IHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLy8gQXBwbGllcyBzdHlsZXMgZm9yIHVzZXJzIGluIGhpZ2ggY29udHJhc3QgbW9kZS4gTm90ZSB0aGF0IHRoaXMgb25seSBhcHBsaWVzXG4vLy8gdG8gTWljcm9zb2Z0IGJyb3dzZXJzLiBDaHJvbWUgY2FuIGJlIGluY2x1ZGVkIGJ5IGNoZWNraW5nIGZvciB0aGUgYGh0bWxbaGNdYFxuLy8vIGF0dHJpYnV0ZSwgaG93ZXZlciBDaHJvbWUgaGFuZGxlcyBoaWdoIGNvbnRyYXN0IGRpZmZlcmVudGx5LlxuLy8vXG4vLy8gQHBhcmFtIHRhcmdldCBXaGljaCBraW5kIG9mIGhpZ2ggY29udHJhc3Qgc2V0dGluZyB0byB0YXJnZXQuIERlZmF1bHRzIHRvIGBhY3RpdmVgLCBjYW4gYmVcbi8vLyAgICBgd2hpdGUtb24tYmxhY2tgIG9yIGBibGFjay1vbi13aGl0ZWAuXG4vLy8gQHBhcmFtIGVuY2Fwc3VsYXRpb24gV2hldGhlciB0byBlbWl0IHN0eWxlcyBmb3IgdmlldyBlbmNhcHN1bGF0aW9uLiBWYWx1ZXMgYXJlOlxuLy8vICAgICAqIGBvbmAgLSB3b3JrcyBmb3IgYEVtdWxhdGVkYCwgYE5hdGl2ZWAsIGFuZCBgU2hhZG93RG9tYFxuLy8vICAgICAqIGBvZmZgIC0gd29ya3MgZm9yIGBOb25lYFxuLy8vICAgICAqIGBhbnlgIC0gd29ya3MgZm9yIGFsbCBlbmNhcHN1bGF0aW9uIG1vZGVzIGJ5IGVtaXR0aW5nIHRoZSBDU1MgdHdpY2UgKGRlZmF1bHQpLlxuQG1peGluIGNkay1oaWdoLWNvbnRyYXN0KCR0YXJnZXQ6IGFjdGl2ZSwgJGVuY2Fwc3VsYXRpb246ICdhbnknKSB7XG4gIEBpZiAoJHRhcmdldCAhPSAnYWN0aXZlJyBhbmQgJHRhcmdldCAhPSAnYmxhY2stb24td2hpdGUnIGFuZCAkdGFyZ2V0ICE9ICd3aGl0ZS1vbi1ibGFjaycpIHtcbiAgICBAZXJyb3IgJ1Vua25vd24gY2RrLWhpZ2gtY29udHJhc3QgdmFsdWUgXCIjeyR0YXJnZXR9XCIgcHJvdmlkZWQuICcgK1xuICAgICAgICAgICAnQWxsb3dlZCB2YWx1ZXMgYXJlIFwiYWN0aXZlXCIsIFwiYmxhY2stb24td2hpdGVcIiwgYW5kIFwid2hpdGUtb24tYmxhY2tcIic7XG4gIH1cblxuICBAaWYgKCRlbmNhcHN1bGF0aW9uICE9ICdvbicgYW5kICRlbmNhcHN1bGF0aW9uICE9ICdvZmYnIGFuZCAkZW5jYXBzdWxhdGlvbiAhPSAnYW55Jykge1xuICAgIEBlcnJvciAnVW5rbm93biBjZGstaGlnaC1jb250cmFzdCBlbmNhcHN1bGF0aW9uIFwiI3skZW5jYXBzdWxhdGlvbn1cIiBwcm92aWRlZC4gJyArXG4gICAgICAgICAgICdBbGxvd2VkIHZhbHVlcyBhcmUgXCJvblwiLCBcIm9mZlwiLCBhbmQgXCJhbnlcIic7XG4gIH1cblxuICAvLyBJZiB0aGUgc2VsZWN0b3IgY29udGV4dCBoYXMgbXVsdGlwbGUgcGFydHMsIHN1Y2ggYXMgYC5zZWN0aW9uLCAucmVnaW9uYCwganVzdCBkb2luZ1xuICAvLyBgLmNkay1oaWdoLWNvbnRyYXN0LXh4eCAjeyZ9YCB3aWxsIG9ubHkgYXBwbHkgdGhlIHBhcmVudCBzZWxlY3RvciB0byB0aGUgZmlyc3QgcGFydCBvZiB0aGVcbiAgLy8gY29udGV4dC4gV2UgYWRkcmVzcyB0aGlzIGJ5IG5lc3RpbmcgdGhlIHNlbGVjdG9yIGNvbnRleHQgdW5kZXIgLmNkay1oaWdoLWNvbnRyYXN0LlxuICBAYXQtcm9vdCB7XG4gICAgJHNlbGVjdG9yLWNvbnRleHQ6ICN7Jn07XG5cbiAgICBAaWYgKCRlbmNhcHN1bGF0aW9uICE9ICdvbicpIHtcbiAgICAgIC5jZGstaGlnaC1jb250cmFzdC0jeyR0YXJnZXR9IHtcbiAgICAgICAgQGluY2x1ZGUgX2Nkay1vcHRpb25hbGx5LW5lc3QtY29udGVudCgkc2VsZWN0b3ItY29udGV4dCkge1xuICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGlmICgkZW5jYXBzdWxhdGlvbiAhPSAnb2ZmJykge1xuICAgICAgLmNkay1oaWdoLWNvbnRyYXN0LSN7JHRhcmdldH0gOmhvc3Qge1xuICAgICAgICBAaW5jbHVkZSBfY2RrLW9wdGlvbmFsbHktbmVzdC1jb250ZW50KCRzZWxlY3Rvci1jb250ZXh0KSB7XG4gICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gQ29yZSBzdHlsZXMgdGhhdCBlbmFibGUgbW9uaXRvcmluZyBhdXRvZmlsbCBzdGF0ZSBvZiB0ZXh0IGZpZWxkcy5cbkBtaXhpbiBjZGstdGV4dC1maWVsZCB7XG4gIC8vIEtleWZyYW1lcyB0aGF0IGFwcGx5IG5vIHN0eWxlcywgYnV0IGFsbG93IHVzIHRvIG1vbml0b3Igd2hlbiBhbiB0ZXh0IGZpZWxkIGJlY29tZXMgYXV0b2ZpbGxlZFxuICAvLyBieSB3YXRjaGluZyBmb3IgdGhlIGFuaW1hdGlvbiBldmVudHMgdGhhdCBhcmUgZmlyZWQgd2hlbiB0aGV5IHN0YXJ0LiBOb3RlOiB0aGUgLyohKi8gY29tbWVudCBpc1xuICAvLyBuZWVkZWQgdG8gcHJldmVudCBMaWJTYXNzIGZyb20gc3RyaXBwaW5nIHRoZSBrZXlmcmFtZXMgb3V0LlxuICAvLyBCYXNlZCBvbjogaHR0cHM6Ly9tZWRpdW0uY29tL0BicnVubi9kZXRlY3RpbmctYXV0b2ZpbGxlZC1maWVsZHMtaW4tamF2YXNjcmlwdC1hZWQ1OThkMjVkYTdcbiAgQGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydCB7LyohKi99XG4gIEBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtZW5kIHsvKiEqL31cblxuICAuY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOi13ZWJraXQtYXV0b2ZpbGwge1xuICAgIC8vIFNpbmNlIENocm9tZSA4MCB3ZSBuZWVkIGEgMW1zIGRlbGF5LCBvciB0aGUgYW5pbWF0aW9uc3RhcnQgZXZlbnQgd29uJ3QgZmlyZS5cbiAgICBhbmltYXRpb246IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0IDBzIDFtcztcbiAgfVxuXG4gIC5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6bm90KDotd2Via2l0LWF1dG9maWxsKSB7XG4gICAgLy8gU2luY2UgQ2hyb21lIDgwIHdlIG5lZWQgYSAxbXMgZGVsYXksIG9yIHRoZSBhbmltYXRpb25zdGFydCBldmVudCB3b24ndCBmaXJlLlxuICAgIGFuaW1hdGlvbjogY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtZW5kIDBzIDFtcztcbiAgfVxuXG4gIC8vIFJlbW92ZSB0aGUgcmVzaXplIGhhbmRsZSBvbiBhdXRvc2l6aW5nIHRleHRhcmVhcywgYmVjYXVzZSB3aGF0ZXZlciBoZWlnaHRcbiAgLy8gdGhlIHVzZXIgcmVzaXplZCB0byB3aWxsIGJlIG92ZXJ3cml0dGVuIG9uY2UgdGhleSBzdGFydCB0eXBpbmcgYWdhaW4uXG4gIHRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZSB7XG4gICAgcmVzaXplOiBub25lO1xuICB9XG5cbiAgLy8gVGhpcyBjbGFzcyBpcyB0ZW1wb3JhcmlseSBhcHBsaWVkIHRvIHRoZSB0ZXh0YXJlYSB3aGVuIGl0IGlzIGJlaW5nIG1lYXN1cmVkLiBJdCBpcyBpbW1lZGlhdGVseVxuICAvLyByZW1vdmVkIHdoZW4gbWVhc3VyaW5nIGlzIGNvbXBsZXRlLiBXZSB1c2UgYCFpbXBvcnRhbnRgIHJ1bGVzIGhlcmUgdG8gbWFrZSBzdXJlIHVzZXItc3BlY2lmaWVkXG4gIC8vIHJ1bGVzIGRvIG5vdCBpbnRlcmZlcmUgd2l0aCB0aGUgbWVhc3VyZW1lbnQuXG4gIHRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZS1tZWFzdXJpbmcge1xuICAgIEBpbmNsdWRlIF9jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nLWJhc2U7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICB9XG5cbiAgLy8gU2ltaWxhciB0byB0aGUgYGNkay10ZXh0YXJlYS1hdXRvc2l6ZS1tZWFzdXJpbmdgIGNsYXNzLCBidXQgb25seSBhcHBsaWVkIG9uIEZpcmVmb3guIFdlIG5lZWRcbiAgLy8gdG8gdXNlIHRoaXMgY2xhc3MsIGJlY2F1c2UgRmlyZWZveCBoYXMgYSBidWcgd2hlcmUgY2hhbmdpbmcgdGhlIGBvdmVyZmxvd2AgYnJlYWtzIHRoZSB1c2VyJ3NcbiAgLy8gYWJpbGl0eSB0byB1bmRvL3JlZG8gd2hhdCB0aGV5IHdlcmUgdHlwaW5nIChzZWUgIzE2NjI5KS4gVGhpcyBjbGFzcyBpcyBvbmx5IHNjb3BlZCB0byBGaXJlZm94LFxuICAvLyBiZWNhdXNlIHRoZSBtZWFzdXJlbWVudHMgdGhlcmUgZG9uJ3Qgc2VlbSB0byBiZSBhZmZlY3RlZCBieSB0aGUgYGhlaWdodDogMGAsIHdoZXJlYXMgb24gb3RoZXJcbiAgLy8gYnJvd3NlcnMgdGhleSBhcmUsIGUuZy4gQ2hyb21lIGRldGVjdHMgbG9uZ2VyIHRleHQgYW5kIElFIGRvZXMndCByZXNpemUgYmFjayB0byBub3JtYWwuXG4gIC8vIElkZW50aWNhbCBpc3N1ZSByZXBvcnQ6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTQ0ODc4NFxuICB0ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nLWZpcmVmb3gge1xuICAgIEBpbmNsdWRlIF9jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nLWJhc2U7XG4gICAgaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuQG1peGluIF9jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nLWJhc2Uge1xuICAvLyBIYXZpbmcgMnB4IHRvcCBhbmQgYm90dG9tIHBhZGRpbmcgc2VlbXMgdG8gZml4IGEgYnVnIHdoZXJlIENocm9tZSBnZXRzIGFuIGluY29ycmVjdFxuICAvLyBtZWFzdXJlbWVudC4gV2UganVzdCBoYXZlIHRvIGFjY291bnQgZm9yIGl0IGxhdGVyIGFuZCBzdWJ0cmFjdCBpdCBvZmYgdGhlIGZpbmFsIHJlc3VsdC5cbiAgcGFkZGluZzogMnB4IDAgIWltcG9ydGFudDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3ggIWltcG9ydGFudDtcbn1cblxuLy8gVXNlZCB0byBnZW5lcmF0ZSBVSURzIGZvciBrZXlmcmFtZXMgdXNlZCB0byBjaGFuZ2UgdGhlIHRleHQgZmllbGQgYXV0b2ZpbGwgc3R5bGVzLlxuJGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50OiAwO1xuXG4vLyBNaXhpbiB1c2VkIHRvIGFwcGx5IGN1c3RvbSBiYWNrZ3JvdW5kIGFuZCBmb3JlZ3JvdW5kIGNvbG9ycyB0byBhbiBhdXRvZmlsbGVkIHRleHQgZmllbGQuXG4vLyBCYXNlZCBvbjogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjc4MTU0OS9cbi8vIHJlbW92aW5nLWlucHV0LWJhY2tncm91bmQtY29sb3VyLWZvci1jaHJvbWUtYXV0b2NvbXBsZXRlI2Fuc3dlci0zNzQzMjI2MFxuQG1peGluIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yKCRiYWNrZ3JvdW5kLCAkZm9yZWdyb3VuZDonJykge1xuICBAa2V5ZnJhbWVzIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLSN7JGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50fSB7XG4gICAgdG8ge1xuICAgICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQ7XG4gICAgICBAaWYgJGZvcmVncm91bmQgIT0gJycgeyBjb2xvcjogJGZvcmVncm91bmQ7IH1cbiAgICB9XG4gIH1cblxuICAmOi13ZWJraXQtYXV0b2ZpbGwge1xuICAgIGFuaW1hdGlvbjogY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItI3skY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnR9IGJvdGg7XG4gIH1cblxuICAmLmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDotd2Via2l0LWF1dG9maWxsIHtcbiAgICAvLyBTaW5jZSBDaHJvbWUgODAgd2UgbmVlZCBhIDFtcyBkZWxheSBmb3IgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnQsIG9yIHRoZSBhbmltYXRpb25zdGFydFxuICAgIC8vIGV2ZW50IHdvbid0IGZpcmUuXG4gICAgYW5pbWF0aW9uOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydCAwcyAxbXMsXG4gICAgICAgICAgICAgICBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci0jeyRjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudH0gYm90aDtcbiAgfVxuXG4gICRjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudDpcbiAgICAgICRjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudCArIDEgIWdsb2JhbDtcbn1cblxuXG4vLyBDb3JlIHN0eWxlcyB0aGF0IGNhbiBiZSB1c2VkIHRvIGFwcGx5IG1hdGVyaWFsIGRlc2lnbiB0cmVhdG1lbnRzIHRvIGFueSBlbGVtZW50LlxuLy8gTWVkaWEgcXVlcmllc1xuLy8gVE9ETyhqb3NlcGhwZXJyb3R0KTogQ2hhbmdlICRtYXQteHNtYWxsIGFuZCAkbWF0LXNtYWxsIHVzYWdlcyB0byByZWx5IG9uIEJyZWFrcG9pbnRPYnNlcnZlcixcbiRtYXQteHNtYWxsOiAnbWF4LXdpZHRoOiA1OTlweCc7XG4kbWF0LXNtYWxsOiAnbWF4LXdpZHRoOiA5NTlweCc7XG5cbi8vIFRPRE86IFJldmlzaXQgYWxsIHotaW5kaWNlcyBiZWZvcmUgYmV0YVxuLy8gei1pbmRleCBtYXN0ZXIgbGlzdFxuXG4kei1pbmRleC1mYWI6IDIwICFkZWZhdWx0O1xuJHotaW5kZXgtZHJhd2VyOiAxMDAgIWRlZmF1bHQ7XG5cbi8vIEdsb2JhbCBjb25zdGFudHNcbiRwaTogMy4xNDE1OTI2NTtcblxuLy8gUGFkZGluZyBiZXR3ZWVuIGlucHV0IHRvZ2dsZXMgYW5kIHRoZWlyIGxhYmVsc1xuJG1hdC10b2dnbGUtcGFkZGluZzogOHB4ICFkZWZhdWx0O1xuLy8gV2lkdGggYW5kIGhlaWdodCBvZiBpbnB1dCB0b2dnbGVzXG4kbWF0LXRvZ2dsZS1zaXplOiAyMHB4ICFkZWZhdWx0O1xuXG4vLyBFYXNpbmcgQ3VydmVzXG4vLyBUT0RPKGplbGJvdXJuKTogYWxsIG9mIHRoZXNlIG5lZWQgdG8gYmUgcmV2aXNpdGVkXG5cbi8vIFRoZSBkZWZhdWx0IGFuaW1hdGlvbiBjdXJ2ZXMgdXNlZCBieSBtYXRlcmlhbCBkZXNpZ24uXG4kbWF0LWxpbmVhci1vdXQtc2xvdy1pbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAwLCAwLjIsIDAuMSkgIWRlZmF1bHQ7XG4kbWF0LWZhc3Qtb3V0LXNsb3ctaW4tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpICFkZWZhdWx0O1xuJG1hdC1mYXN0LW91dC1saW5lYXItaW4tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAxLCAxKSAhZGVmYXVsdDtcblxuJGVhc2UtaW4tb3V0LWN1cnZlLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4zNSwgMCwgMC4yNSwgMSkgIWRlZmF1bHQ7XG5cbiRzd2lmdC1lYXNlLW91dC1kdXJhdGlvbjogNDAwbXMgIWRlZmF1bHQ7XG4kc3dpZnQtZWFzZS1vdXQtdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKSAhZGVmYXVsdDtcbiRzd2lmdC1lYXNlLW91dDogYWxsICRzd2lmdC1lYXNlLW91dC1kdXJhdGlvbiAkc3dpZnQtZWFzZS1vdXQtdGltaW5nLWZ1bmN0aW9uICFkZWZhdWx0O1xuXG4kc3dpZnQtZWFzZS1pbi1kdXJhdGlvbjogMzAwbXMgIWRlZmF1bHQ7XG4kc3dpZnQtZWFzZS1pbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLCAwLjU1LCAwLjIpICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2UtaW46IGFsbCAkc3dpZnQtZWFzZS1pbi1kdXJhdGlvbiAkc3dpZnQtZWFzZS1pbi10aW1pbmctZnVuY3Rpb24gIWRlZmF1bHQ7XG5cbiRzd2lmdC1lYXNlLWluLW91dC1kdXJhdGlvbjogNTAwbXMgIWRlZmF1bHQ7XG4kc3dpZnQtZWFzZS1pbi1vdXQtdGltaW5nLWZ1bmN0aW9uOiAkZWFzZS1pbi1vdXQtY3VydmUtZnVuY3Rpb24gIWRlZmF1bHQ7XG4kc3dpZnQtZWFzZS1pbi1vdXQ6IGFsbCAkc3dpZnQtZWFzZS1pbi1vdXQtZHVyYXRpb24gJHN3aWZ0LWVhc2UtaW4tb3V0LXRpbWluZy1mdW5jdGlvbiAhZGVmYXVsdDtcblxuJHN3aWZ0LWxpbmVhci1kdXJhdGlvbjogODBtcyAhZGVmYXVsdDtcbiRzd2lmdC1saW5lYXItdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXIgIWRlZmF1bHQ7XG4kc3dpZnQtbGluZWFyOiBhbGwgJHN3aWZ0LWxpbmVhci1kdXJhdGlvbiAkc3dpZnQtbGluZWFyLXRpbWluZy1mdW5jdGlvbiAhZGVmYXVsdDtcblxuXG5cbi8vIEEgY29sbGVjdGlvbiBvZiBtaXhpbnMgYW5kIENTUyBjbGFzc2VzIHRoYXQgY2FuIGJlIHVzZWQgdG8gYXBwbHkgZWxldmF0aW9uIHRvIGEgbWF0ZXJpYWxcbi8vIGVsZW1lbnQuXG4vLyBTZWU6IGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2Vudmlyb25tZW50L2VsZXZhdGlvbi5odG1sXG4vLyBFeGFtcGxlczpcbi8vXG4vL1xuLy8gLm1hdC1mb28ge1xuLy8gICBAaW5jbHVkZSAkbWF0LWVsZXZhdGlvbigyKTtcbi8vXG4vLyAgICY6YWN0aXZlIHtcbi8vICAgICBAaW5jbHVkZSAkbWF0LWVsZXZhdGlvbig4KTtcbi8vICAgfVxuLy8gfVxuLy9cbi8vIDxkaXYgaWQ9XCJleHRlcm5hbC1jYXJkXCIgY2xhc3M9XCJtYXQtZWxldmF0aW9uLXoyXCI+PHA+U29tZSBjb250ZW50PC9wPjwvZGl2PlxuLy9cbi8vIEZvciBhbiBleHBsYW5hdGlvbiBvZiB0aGUgZGVzaWduIGJlaGluZCBob3cgZWxldmF0aW9uIGlzIGltcGxlbWVudGVkLCBzZWUgdGhlIGRlc2lnbiBkb2MgYXRcbi8vIGh0dHBzOi8vZ29vLmdsL0txMGs5Wi5cblxuLy8gQ29sb3JzIGZvciB1bWJyYSwgcGVudW1icmEsIGFuZCBhbWJpZW50IHNoYWRvd3MuIEFzIGRlc2NyaWJlZCBpbiB0aGUgZGVzaWduIGRvYywgZWFjaCBlbGV2YXRpb25cbi8vIGxldmVsIGlzIGNyZWF0ZWQgdXNpbmcgYSBzZXQgb2YgMyBzaGFkb3cgdmFsdWVzLCBvbmUgZm9yIHVtYnJhICh0aGUgc2hhZG93IHJlcHJlc2VudGluZyB0aGVcbi8vIHNwYWNlIGNvbXBsZXRlbHkgb2JzY3VyZWQgYnkgYW4gb2JqZWN0IHJlbGF0aXZlIHRvIGl0cyBsaWdodCBzb3VyY2UpLCBvbmUgZm9yIHBlbnVtYnJhICh0aGVcbi8vIHNwYWNlIHBhcnRpYWxseSBvYnNjdXJlZCBieSBhbiBvYmplY3QpLCBhbmQgb25lIGZvciBhbWJpZW50ICh0aGUgc3BhY2Ugd2hpY2ggY29udGFpbnMgdGhlIG9iamVjdFxuLy8gaXRzZWxmKS4gRm9yIGEgZnVydGhlciBleHBsYW5hdGlvbiBvZiB0aGVzZSB0ZXJtcyBhbmQgdGhlaXIgbWVhbmluZ3MsIHNlZVxuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVW1icmEsX3BlbnVtYnJhX2FuZF9hbnR1bWJyYS5cblxuLy8gTWFwcyBmb3IgdGhlIGRpZmZlcmVudCBzaGFkb3cgc2V0cyBhbmQgdGhlaXIgdmFsdWVzIHdpdGhpbiBlYWNoIHotc3BhY2UuIFRoZXNlIHZhbHVlcyB3ZXJlXG4vLyBjcmVhdGVkIGJ5IHRha2luZyBhIGZldyByZWZlcmVuY2Ugc2hhZG93IHNldHMgY3JlYXRlZCBieSBHb29nbGUncyBEZXNpZ25lcnMgYW5kIGludGVycG9sYXRpbmdcbi8vIGFsbCBvZiB0aGUgdmFsdWVzIGJldHdlZW4gdGhlbS5cblxuQGZ1bmN0aW9uIF9nZXQtdW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpIHtcbiAgJHNoYWRvdy1jb2xvcjogaWYodHlwZS1vZigkY29sb3IpID09IGNvbG9yLCByZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjIpLCAkY29sb3IpO1xuXG4gIEByZXR1cm4gKFxuICAgIDA6ICcwcHggMHB4IDBweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTogJzBweCAycHggMXB4IC0xcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjogJzBweCAzcHggMXB4IC0ycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMzogJzBweCAzcHggM3B4IC0ycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNDogJzBweCAycHggNHB4IC0xcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNTogJzBweCAzcHggNXB4IC0xcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNjogJzBweCAzcHggNXB4IC0xcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNzogJzBweCA0cHggNXB4IC0ycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgODogJzBweCA1cHggNXB4IC0zcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgOTogJzBweCA1cHggNnB4IC0zcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTA6ICcwcHggNnB4IDZweCAtM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDExOiAnMHB4IDZweCA3cHggLTRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMjogJzBweCA3cHggOHB4IC00cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTM6ICcwcHggN3B4IDhweCAtNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE0OiAnMHB4IDdweCA5cHggLTRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNTogJzBweCA4cHggOXB4IC01cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTY6ICcwcHggOHB4IDEwcHggLTVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNzogJzBweCA4cHggMTFweCAtNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE4OiAnMHB4IDlweCAxMXB4IC01cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTk6ICcwcHggOXB4IDEycHggLTZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMDogJzBweCAxMHB4IDEzcHggLTZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMTogJzBweCAxMHB4IDEzcHggLTZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMjogJzBweCAxMHB4IDE0cHggLTZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMzogJzBweCAxMXB4IDE0cHggLTdweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyNDogJzBweCAxMXB4IDE1cHggLTdweCAjeyRzaGFkb3ctY29sb3J9J1xuICApO1xufVxuXG5AZnVuY3Rpb24gX2dldC1wZW51bWJyYS1tYXAoJGNvbG9yLCAkb3BhY2l0eSkge1xuICAkc2hhZG93LWNvbG9yOiBpZih0eXBlLW9mKCRjb2xvcikgPT0gY29sb3IsIHJnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTQpLCAkY29sb3IpO1xuXG4gIEByZXR1cm4gKFxuICAgIDA6ICcwcHggMHB4IDBweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTogJzBweCAxcHggMXB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyOiAnMHB4IDJweCAycHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDM6ICcwcHggM3B4IDRweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNDogJzBweCA0cHggNXB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA1OiAnMHB4IDVweCA4cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDY6ICcwcHggNnB4IDEwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDc6ICcwcHggN3B4IDEwcHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDg6ICcwcHggOHB4IDEwcHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDk6ICcwcHggOXB4IDEycHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEwOiAnMHB4IDEwcHggMTRweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTE6ICcwcHggMTFweCAxNXB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMjogJzBweCAxMnB4IDE3cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEzOiAnMHB4IDEzcHggMTlweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTQ6ICcwcHggMTRweCAyMXB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNTogJzBweCAxNXB4IDIycHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE2OiAnMHB4IDE2cHggMjRweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTc6ICcwcHggMTdweCAyNnB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxODogJzBweCAxOHB4IDI4cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE5OiAnMHB4IDE5cHggMjlweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjA6ICcwcHggMjBweCAzMXB4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMTogJzBweCAyMXB4IDMzcHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIyOiAnMHB4IDIycHggMzVweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjM6ICcwcHggMjNweCAzNnB4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyNDogJzBweCAyNHB4IDM4cHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nXG4gICk7XG59XG5cbkBmdW5jdGlvbiBfZ2V0LWFtYmllbnQtbWFwKCRjb2xvciwgJG9wYWNpdHkpIHtcbiAgJHNoYWRvdy1jb2xvcjogaWYodHlwZS1vZigkY29sb3IpID09IGNvbG9yLCByZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjEyKSwgJGNvbG9yKTtcblxuICBAcmV0dXJuIChcbiAgICAwOiAnMHB4IDBweCAwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE6ICcwcHggMXB4IDNweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjogJzBweCAxcHggNXB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAzOiAnMHB4IDFweCA4cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDQ6ICcwcHggMXB4IDEwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDU6ICcwcHggMXB4IDE0cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDY6ICcwcHggMXB4IDE4cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDc6ICcwcHggMnB4IDE2cHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDg6ICcwcHggM3B4IDE0cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDk6ICcwcHggM3B4IDE2cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEwOiAnMHB4IDRweCAxOHB4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMTogJzBweCA0cHggMjBweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTI6ICcwcHggNXB4IDIycHggNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEzOiAnMHB4IDVweCAyNHB4IDRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNDogJzBweCA1cHggMjZweCA0cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTU6ICcwcHggNnB4IDI4cHggNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE2OiAnMHB4IDZweCAzMHB4IDVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNzogJzBweCA2cHggMzJweCA1cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTg6ICcwcHggN3B4IDM0cHggNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE5OiAnMHB4IDdweCAzNnB4IDZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMDogJzBweCA4cHggMzhweCA3cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjE6ICcwcHggOHB4IDQwcHggN3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIyOiAnMHB4IDhweCA0MnB4IDdweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMzogJzBweCA5cHggNDRweCA4cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjQ6ICcwcHggOXB4IDQ2cHggOHB4ICN7JHNoYWRvdy1jb2xvcn0nXG4gICk7XG59XG5cbi8vIFRoZSBkZWZhdWx0IGR1cmF0aW9uIHZhbHVlIGZvciBlbGV2YXRpb24gdHJhbnNpdGlvbnMuXG4kbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLWR1cmF0aW9uOiAyODBtcyAhZGVmYXVsdDtcblxuLy8gVGhlIGRlZmF1bHQgZWFzaW5nIHZhbHVlIGZvciBlbGV2YXRpb24gdHJhbnNpdGlvbnMuXG4kbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogJG1hdC1mYXN0LW91dC1zbG93LWluLXRpbWluZy1mdW5jdGlvbjtcblxuLy8gVGhlIGRlZmF1bHQgY29sb3IgZm9yIGVsZXZhdGlvbiBzaGFkb3dzLlxuJG1hdC1lbGV2YXRpb24tY29sb3I6IGJsYWNrICFkZWZhdWx0O1xuXG4vLyBUaGUgZGVmYXVsdCBvcGFjaXR5IHNjYWxpbmcgdmFsdWUgZm9yIGVsZXZhdGlvbiBzaGFkb3dzLlxuJG1hdC1lbGV2YXRpb24tb3BhY2l0eTogMSAhZGVmYXVsdDtcblxuLy8gUHJlZml4IGZvciBlbGV2YXRpb24tcmVsYXRlZCBzZWxlY3RvcnMuXG4kX21hdC1lbGV2YXRpb24tcHJlZml4OiAnbWF0LWVsZXZhdGlvbi16JztcblxuLy8gQXBwbGllcyB0aGUgY29ycmVjdCBjc3MgcnVsZXMgdG8gYW4gZWxlbWVudCB0byBnaXZlIGl0IHRoZSBlbGV2YXRpb24gc3BlY2lmaWVkIGJ5ICR6VmFsdWUuXG4vLyBUaGUgJHpWYWx1ZSBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMjQuXG5AbWl4aW4gbWF0LWVsZXZhdGlvbigkelZhbHVlLCAkY29sb3I6ICRtYXQtZWxldmF0aW9uLWNvbG9yLCAkb3BhY2l0eTogJG1hdC1lbGV2YXRpb24tb3BhY2l0eSkge1xuICBAaWYgdHlwZS1vZigkelZhbHVlKSAhPSBudW1iZXIgb3Igbm90IHVuaXRsZXNzKCR6VmFsdWUpIHtcbiAgICBAZXJyb3IgJyR6VmFsdWUgbXVzdCBiZSBhIHVuaXRsZXNzIG51bWJlcic7XG4gIH1cbiAgQGlmICR6VmFsdWUgPCAwIG9yICR6VmFsdWUgPiAyNCB7XG4gICAgQGVycm9yICckelZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAyNCc7XG4gIH1cblxuICBib3gtc2hhZG93OiAje21hcC1nZXQoX2dldC11bWJyYS1tYXAoJGNvbG9yLCAkb3BhY2l0eSksICR6VmFsdWUpfSxcbiAgICAgICAgICAgICAgI3ttYXAtZ2V0KF9nZXQtcGVudW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpLCAkelZhbHVlKX0sXG4gICAgICAgICAgICAgICN7bWFwLWdldChfZ2V0LWFtYmllbnQtbWFwKCRjb2xvciwgJG9wYWNpdHkpLCAkelZhbHVlKX07XG59XG5cbkBtaXhpbiBfbWF0LXRoZW1lLWVsZXZhdGlvbigkelZhbHVlLCAkY29uZmlnLCAkb3BhY2l0eTogJG1hdC1lbGV2YXRpb24tb3BhY2l0eSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcbiAgJGVsZXZhdGlvbi1jb2xvcjogbWFwLWdldCgkZm9yZWdyb3VuZCwgZWxldmF0aW9uKTtcbiAgJGVsZXZhdGlvbi1jb2xvci1vci1kZWZhdWx0OiBpZigkZWxldmF0aW9uLWNvbG9yID09IG51bGwsICRtYXQtZWxldmF0aW9uLWNvbG9yLCAkZWxldmF0aW9uLWNvbG9yKTtcblxuICBAaW5jbHVkZSBtYXQtZWxldmF0aW9uKCR6VmFsdWUsICRlbGV2YXRpb24tY29sb3Itb3ItZGVmYXVsdCwgJG9wYWNpdHkpO1xufVxuXG4vLyBBcHBsaWVzIHRoZSBlbGV2YXRpb24gdG8gYW4gZWxlbWVudCBpbiBhIG1hbm5lciB0aGF0IGFsbG93c1xuLy8gY29uc3VtZXJzIHRvIG92ZXJyaWRlIGl0IHZpYSB0aGUgTWF0ZXJpYWwgZWxldmF0aW9uIGNsYXNzZXMuXG5AbWl4aW4gbWF0LW92ZXJyaWRhYmxlLWVsZXZhdGlvbihcbiAgICAkelZhbHVlLFxuICAgICRjb2xvcjogJG1hdC1lbGV2YXRpb24tY29sb3IsXG4gICAgJG9wYWNpdHk6ICRtYXQtZWxldmF0aW9uLW9wYWNpdHkpIHtcbiAgJjpub3QoW2NsYXNzKj0nI3skX21hdC1lbGV2YXRpb24tcHJlZml4fSddKSB7XG4gICAgQGluY2x1ZGUgbWF0LWVsZXZhdGlvbigkelZhbHVlLCAkY29sb3IsICRvcGFjaXR5KTtcbiAgfVxufVxuXG5AbWl4aW4gX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oJHpWYWx1ZSwgJGNvbmZpZywgJG9wYWNpdHk6ICRtYXQtZWxldmF0aW9uLW9wYWNpdHkpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG4gICRlbGV2YXRpb24tY29sb3I6IG1hcC1nZXQoJGZvcmVncm91bmQsIGVsZXZhdGlvbik7XG4gICRlbGV2YXRpb24tY29sb3Itb3ItZGVmYXVsdDogaWYoJGVsZXZhdGlvbi1jb2xvciA9PSBudWxsLCAkbWF0LWVsZXZhdGlvbi1jb2xvciwgJGVsZXZhdGlvbi1jb2xvcik7XG5cbiAgQGluY2x1ZGUgbWF0LW92ZXJyaWRhYmxlLWVsZXZhdGlvbigkelZhbHVlLCAkZWxldmF0aW9uLWNvbG9yLW9yLWRlZmF1bHQsICRvcGFjaXR5KTtcbn1cblxuLy8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGNhbiBiZSB1c2VkIGFzIHRoZSB2YWx1ZSBmb3IgYSB0cmFuc2l0aW9uIHByb3BlcnR5IGZvciBlbGV2YXRpb24uXG4vLyBDYWxsaW5nIHRoaXMgZnVuY3Rpb24gZGlyZWN0bHkgaXMgdXNlZnVsIGluIHNpdHVhdGlvbnMgd2hlcmUgYSBjb21wb25lbnQgbmVlZHMgdG8gdHJhbnNpdGlvblxuLy8gbW9yZSB0aGFuIG9uZSBwcm9wZXJ0eS5cbi8vXG4vLyAuZm9vIHtcbi8vICAgdHJhbnNpdGlvbjogbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXByb3BlcnR5LXZhbHVlKCksIG9wYWNpdHkgMTAwbXMgZWFzZTtcbi8vIH1cbkBmdW5jdGlvbiBtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tcHJvcGVydHktdmFsdWUoXG4gICAgJGR1cmF0aW9uOiAkbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLWR1cmF0aW9uLFxuICAgICRlYXNpbmc6ICRtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uKSB7XG4gIEByZXR1cm4gYm94LXNoYWRvdyAjeyRkdXJhdGlvbn0gI3skZWFzaW5nfTtcbn1cblxuLy8gQXBwbGllcyB0aGUgY29ycmVjdCBjc3MgcnVsZXMgbmVlZGVkIHRvIGhhdmUgYW4gZWxlbWVudCB0cmFuc2l0aW9uIGJldHdlZW4gZWxldmF0aW9ucy5cbi8vIFRoaXMgbWl4aW4gc2hvdWxkIGJlIGFwcGxpZWQgdG8gZWxlbWVudHMgd2hvc2UgZWxldmF0aW9uIHZhbHVlcyB3aWxsIGNoYW5nZSBkZXBlbmRpbmcgb24gdGhlaXJcbi8vIGNvbnRleHQgKGUuZy4gd2hlbiBhY3RpdmUgb3IgZGlzYWJsZWQpLlxuLy9cbi8vIE5PVEUodHJhdmlza2F1Zm1hbik6IEJvdGggdGhpcyBtaXhpbiBhbmQgdGhlIGFib3ZlIGZ1bmN0aW9uIHVzZSBkZWZhdWx0IHBhcmFtZXRlcnMgc28gdGhleSBjYW5cbi8vIGJlIHVzZWQgaW4gdGhlIHNhbWUgd2F5IGJ5IGNsaWVudHMuXG5AbWl4aW4gbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uKFxuICAgICRkdXJhdGlvbjogJG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1kdXJhdGlvbixcbiAgICAkZWFzaW5nOiAkbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbikge1xuICB0cmFuc2l0aW9uOiBtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tcHJvcGVydHktdmFsdWUoJGR1cmF0aW9uLCAkZWFzaW5nKTtcbn1cblxuLy8gQ29sb3IgcGFsZXR0ZXMgZnJvbSB0aGUgTWF0ZXJpYWwgRGVzaWduIHNwZWMuXG4vLyBTZWUgaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vY29sb3IvXG4vL1xuLy8gQ29udHJhc3QgY29sb3JzIGFyZSBoYXJkLWNvZGVkIGJlY2F1c2UgaXQgaXMgdG9vIGRpZmZpY3VsdCAocHJvYmFibHkgaW1wb3NzaWJsZSkgdG9cbi8vIGNhbGN1bGF0ZSB0aGVtLiBUaGVzZSBjb250cmFzdCBjb2xvcnMgYXJlIHB1bGxlZCBmcm9tIHRoZSBwdWJsaWMgTWF0ZXJpYWwgRGVzaWduIHNwZWMgc3dhdGNoZXMuXG4vLyBXaGlsZSB0aGUgY29udHJhc3QgY29sb3JzIGluIHRoZSBzcGVjIGFyZSBub3QgcHJlc2NyaXB0aXZlLCB3ZSB1c2UgdGhlbSBmb3IgY29udmVuaWVuY2UuXG5cblxuLy8gQGRlcHJlY2F0ZWQgcmVuYW1lZCB0byAkZGFyay1wcmltYXJ5LXRleHQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kYmxhY2stODctb3BhY2l0eTogcmdiYShibGFjaywgMC44Nyk7XG4vLyBAZGVwcmVjYXRlZCByZW5hbWVkIHRvICRsaWdodC1wcmltYXJ5LXRleHQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kd2hpdGUtODctb3BhY2l0eTogcmdiYSh3aGl0ZSwgMC44Nyk7XG4vLyBAZGVwcmVjYXRlZCB1c2UgJGRhcmstW3NlY29uZGFyeS10ZXh0LGRpc2FibGVkLXRleHQsZGl2aWRlcnMsZm9jdXNlZF0gaW5zdGVhZC5cbi8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiRibGFjay0xMi1vcGFjaXR5OiByZ2JhKGJsYWNrLCAwLjEyKTtcbi8vIEBkZXByZWNhdGVkIHVzZSAkbGlnaHQtW3NlY29uZGFyeS10ZXh0LGRpc2FibGVkLXRleHQsZGl2aWRlcnMsZm9jdXNlZF0gaW5zdGVhZC5cbi8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiR3aGl0ZS0xMi1vcGFjaXR5OiByZ2JhKHdoaXRlLCAwLjEyKTtcbi8vIEBkZXByZWNhdGVkIHVzZSAkZGFyay1bc2Vjb25kYXJ5LXRleHQsZGlzYWJsZWQtdGV4dCxkaXZpZGVycyxmb2N1c2VkXSBpbnN0ZWFkLlxuLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuJGJsYWNrLTYtb3BhY2l0eTogcmdiYShibGFjaywgMC4wNik7XG4vLyBAZGVwcmVjYXRlZCB1c2UgJGxpZ2h0LVtzZWNvbmRhcnktdGV4dCxkaXNhYmxlZC10ZXh0LGRpdmlkZXJzLGZvY3VzZWRdIGluc3RlYWQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kd2hpdGUtNi1vcGFjaXR5OiByZ2JhKHdoaXRlLCAwLjA2KTtcblxuJGRhcmstcHJpbWFyeS10ZXh0OiByZ2JhKGJsYWNrLCAwLjg3KTtcbiRkYXJrLXNlY29uZGFyeS10ZXh0OiByZ2JhKGJsYWNrLCAwLjU0KTtcbiRkYXJrLWRpc2FibGVkLXRleHQ6IHJnYmEoYmxhY2ssIDAuMzgpO1xuJGRhcmstZGl2aWRlcnM6IHJnYmEoYmxhY2ssIDAuMTIpO1xuJGRhcmstZm9jdXNlZDogcmdiYShibGFjaywgMC4xMik7XG4kbGlnaHQtcHJpbWFyeS10ZXh0OiB3aGl0ZTtcbiRsaWdodC1zZWNvbmRhcnktdGV4dDogcmdiYSh3aGl0ZSwgMC43KTtcbiRsaWdodC1kaXNhYmxlZC10ZXh0OiByZ2JhKHdoaXRlLCAwLjUpO1xuJGxpZ2h0LWRpdmlkZXJzOiByZ2JhKHdoaXRlLCAwLjEyKTtcbiRsaWdodC1mb2N1c2VkOiByZ2JhKHdoaXRlLCAwLjEyKTtcblxuJG1hdC1yZWQ6IChcbiAgNTA6ICNmZmViZWUsXG4gIDEwMDogI2ZmY2RkMixcbiAgMjAwOiAjZWY5YTlhLFxuICAzMDA6ICNlNTczNzMsXG4gIDQwMDogI2VmNTM1MCxcbiAgNTAwOiAjZjQ0MzM2LFxuICA2MDA6ICNlNTM5MzUsXG4gIDcwMDogI2QzMmYyZixcbiAgODAwOiAjYzYyODI4LFxuICA5MDA6ICNiNzFjMWMsXG4gIEExMDA6ICNmZjhhODAsXG4gIEEyMDA6ICNmZjUyNTIsXG4gIEE0MDA6ICNmZjE3NDQsXG4gIEE3MDA6ICNkNTAwMDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1waW5rOiAoXG4gIDUwOiAjZmNlNGVjLFxuICAxMDA6ICNmOGJiZDAsXG4gIDIwMDogI2Y0OGZiMSxcbiAgMzAwOiAjZjA2MjkyLFxuICA0MDA6ICNlYzQwN2EsXG4gIDUwMDogI2U5MWU2MyxcbiAgNjAwOiAjZDgxYjYwLFxuICA3MDA6ICNjMjE4NWIsXG4gIDgwMDogI2FkMTQ1NyxcbiAgOTAwOiAjODgwZTRmLFxuICBBMTAwOiAjZmY4MGFiLFxuICBBMjAwOiAjZmY0MDgxLFxuICBBNDAwOiAjZjUwMDU3LFxuICBBNzAwOiAjYzUxMTYyLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtcHVycGxlOiAoXG4gIDUwOiAjZjNlNWY1LFxuICAxMDA6ICNlMWJlZTcsXG4gIDIwMDogI2NlOTNkOCxcbiAgMzAwOiAjYmE2OGM4LFxuICA0MDA6ICNhYjQ3YmMsXG4gIDUwMDogIzljMjdiMCxcbiAgNjAwOiAjOGUyNGFhLFxuICA3MDA6ICM3YjFmYTIsXG4gIDgwMDogIzZhMWI5YSxcbiAgOTAwOiAjNGExNDhjLFxuICBBMTAwOiAjZWE4MGZjLFxuICBBMjAwOiAjZTA0MGZiLFxuICBBNDAwOiAjZDUwMGY5LFxuICBBNzAwOiAjYWEwMGZmLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1kZWVwLXB1cnBsZTogKFxuICA1MDogI2VkZTdmNixcbiAgMTAwOiAjZDFjNGU5LFxuICAyMDA6ICNiMzlkZGIsXG4gIDMwMDogIzk1NzVjZCxcbiAgNDAwOiAjN2U1N2MyLFxuICA1MDA6ICM2NzNhYjcsXG4gIDYwMDogIzVlMzViMSxcbiAgNzAwOiAjNTEyZGE4LFxuICA4MDA6ICM0NTI3YTAsXG4gIDkwMDogIzMxMWI5MixcbiAgQTEwMDogI2IzODhmZixcbiAgQTIwMDogIzdjNGRmZixcbiAgQTQwMDogIzY1MWZmZixcbiAgQTcwMDogIzYyMDBlYSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtaW5kaWdvOiAoXG4gIDUwOiAjZThlYWY2LFxuICAxMDA6ICNjNWNhZTksXG4gIDIwMDogIzlmYThkYSxcbiAgMzAwOiAjNzk4NmNiLFxuICA0MDA6ICM1YzZiYzAsXG4gIDUwMDogIzNmNTFiNSxcbiAgNjAwOiAjMzk0OWFiLFxuICA3MDA6ICMzMDNmOWYsXG4gIDgwMDogIzI4MzU5MyxcbiAgOTAwOiAjMWEyMzdlLFxuICBBMTAwOiAjOGM5ZWZmLFxuICBBMjAwOiAjNTM2ZGZlLFxuICBBNDAwOiAjM2Q1YWZlLFxuICBBNzAwOiAjMzA0ZmZlLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1ibHVlOiAoXG4gIDUwOiAjZTNmMmZkLFxuICAxMDA6ICNiYmRlZmIsXG4gIDIwMDogIzkwY2FmOSxcbiAgMzAwOiAjNjRiNWY2LFxuICA0MDA6ICM0MmE1ZjUsXG4gIDUwMDogIzIxOTZmMyxcbiAgNjAwOiAjMWU4OGU1LFxuICA3MDA6ICMxOTc2ZDIsXG4gIDgwMDogIzE1NjVjMCxcbiAgOTAwOiAjMGQ0N2ExLFxuICBBMTAwOiAjODJiMWZmLFxuICBBMjAwOiAjNDQ4YWZmLFxuICBBNDAwOiAjMjk3OWZmLFxuICBBNzAwOiAjMjk2MmZmLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtbGlnaHQtYmx1ZTogKFxuICA1MDogI2UxZjVmZSxcbiAgMTAwOiAjYjNlNWZjLFxuICAyMDA6ICM4MWQ0ZmEsXG4gIDMwMDogIzRmYzNmNyxcbiAgNDAwOiAjMjliNmY2LFxuICA1MDA6ICMwM2E5ZjQsXG4gIDYwMDogIzAzOWJlNSxcbiAgNzAwOiAjMDI4OGQxLFxuICA4MDA6ICMwMjc3YmQsXG4gIDkwMDogIzAxNTc5YixcbiAgQTEwMDogIzgwZDhmZixcbiAgQTIwMDogIzQwYzRmZixcbiAgQTQwMDogIzAwYjBmZixcbiAgQTcwMDogIzAwOTFlYSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1jeWFuOiAoXG4gIDUwOiAjZTBmN2ZhLFxuICAxMDA6ICNiMmViZjIsXG4gIDIwMDogIzgwZGVlYSxcbiAgMzAwOiAjNGRkMGUxLFxuICA0MDA6ICMyNmM2ZGEsXG4gIDUwMDogIzAwYmNkNCxcbiAgNjAwOiAjMDBhY2MxLFxuICA3MDA6ICMwMDk3YTcsXG4gIDgwMDogIzAwODM4ZixcbiAgOTAwOiAjMDA2MDY0LFxuICBBMTAwOiAjODRmZmZmLFxuICBBMjAwOiAjMThmZmZmLFxuICBBNDAwOiAjMDBlNWZmLFxuICBBNzAwOiAjMDBiOGQ0LFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtdGVhbDogKFxuICA1MDogI2UwZjJmMSxcbiAgMTAwOiAjYjJkZmRiLFxuICAyMDA6ICM4MGNiYzQsXG4gIDMwMDogIzRkYjZhYyxcbiAgNDAwOiAjMjZhNjlhLFxuICA1MDA6ICMwMDk2ODgsXG4gIDYwMDogIzAwODk3YixcbiAgNzAwOiAjMDA3OTZiLFxuICA4MDA6ICMwMDY5NWMsXG4gIDkwMDogIzAwNGQ0MCxcbiAgQTEwMDogI2E3ZmZlYixcbiAgQTIwMDogIzY0ZmZkYSxcbiAgQTQwMDogIzFkZTliNixcbiAgQTcwMDogIzAwYmZhNSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWdyZWVuOiAoXG4gIDUwOiAjZThmNWU5LFxuICAxMDA6ICNjOGU2YzksXG4gIDIwMDogI2E1ZDZhNyxcbiAgMzAwOiAjODFjNzg0LFxuICA0MDA6ICM2NmJiNmEsXG4gIDUwMDogIzRjYWY1MCxcbiAgNjAwOiAjNDNhMDQ3LFxuICA3MDA6ICMzODhlM2MsXG4gIDgwMDogIzJlN2QzMixcbiAgOTAwOiAjMWI1ZTIwLFxuICBBMTAwOiAjYjlmNmNhLFxuICBBMjAwOiAjNjlmMGFlLFxuICBBNDAwOiAjMDBlNjc2LFxuICBBNzAwOiAjMDBjODUzLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1saWdodC1ncmVlbjogKFxuICA1MDogI2YxZjhlOSxcbiAgMTAwOiAjZGNlZGM4LFxuICAyMDA6ICNjNWUxYTUsXG4gIDMwMDogI2FlZDU4MSxcbiAgNDAwOiAjOWNjYzY1LFxuICA1MDA6ICM4YmMzNGEsXG4gIDYwMDogIzdjYjM0MixcbiAgNzAwOiAjNjg5ZjM4LFxuICA4MDA6ICM1NThiMmYsXG4gIDkwMDogIzMzNjkxZSxcbiAgQTEwMDogI2NjZmY5MCxcbiAgQTIwMDogI2IyZmY1OSxcbiAgQTQwMDogIzc2ZmYwMyxcbiAgQTcwMDogIzY0ZGQxNyxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1saW1lOiAoXG4gIDUwOiAjZjlmYmU3LFxuICAxMDA6ICNmMGY0YzMsXG4gIDIwMDogI2U2ZWU5YyxcbiAgMzAwOiAjZGNlNzc1LFxuICA0MDA6ICNkNGUxNTcsXG4gIDUwMDogI2NkZGMzOSxcbiAgNjAwOiAjYzBjYTMzLFxuICA3MDA6ICNhZmI0MmIsXG4gIDgwMDogIzllOWQyNCxcbiAgOTAwOiAjODI3NzE3LFxuICBBMTAwOiAjZjRmZjgxLFxuICBBMjAwOiAjZWVmZjQxLFxuICBBNDAwOiAjYzZmZjAwLFxuICBBNzAwOiAjYWVlYTAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC15ZWxsb3c6IChcbiAgNTA6ICNmZmZkZTcsXG4gIDEwMDogI2ZmZjljNCxcbiAgMjAwOiAjZmZmNTlkLFxuICAzMDA6ICNmZmYxNzYsXG4gIDQwMDogI2ZmZWU1OCxcbiAgNTAwOiAjZmZlYjNiLFxuICA2MDA6ICNmZGQ4MzUsXG4gIDcwMDogI2ZiYzAyZCxcbiAgODAwOiAjZjlhODI1LFxuICA5MDA6ICNmNTdmMTcsXG4gIEExMDA6ICNmZmZmOGQsXG4gIEEyMDA6ICNmZmZmMDAsXG4gIEE0MDA6ICNmZmVhMDAsXG4gIEE3MDA6ICNmZmQ2MDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtYW1iZXI6IChcbiAgNTA6ICNmZmY4ZTEsXG4gIDEwMDogI2ZmZWNiMyxcbiAgMjAwOiAjZmZlMDgyLFxuICAzMDA6ICNmZmQ1NGYsXG4gIDQwMDogI2ZmY2EyOCxcbiAgNTAwOiAjZmZjMTA3LFxuICA2MDA6ICNmZmIzMDAsXG4gIDcwMDogI2ZmYTAwMCxcbiAgODAwOiAjZmY4ZjAwLFxuICA5MDA6ICNmZjZmMDAsXG4gIEExMDA6ICNmZmU1N2YsXG4gIEEyMDA6ICNmZmQ3NDAsXG4gIEE0MDA6ICNmZmM0MDAsXG4gIEE3MDA6ICNmZmFiMDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtb3JhbmdlOiAoXG4gIDUwOiAjZmZmM2UwLFxuICAxMDA6ICNmZmUwYjIsXG4gIDIwMDogI2ZmY2M4MCxcbiAgMzAwOiAjZmZiNzRkLFxuICA0MDA6ICNmZmE3MjYsXG4gIDUwMDogI2ZmOTgwMCxcbiAgNjAwOiAjZmI4YzAwLFxuICA3MDA6ICNmNTdjMDAsXG4gIDgwMDogI2VmNmMwMCxcbiAgOTAwOiAjZTY1MTAwLFxuICBBMTAwOiAjZmZkMTgwLFxuICBBMjAwOiAjZmZhYjQwLFxuICBBNDAwOiAjZmY5MTAwLFxuICBBNzAwOiAjZmY2ZDAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiBibGFjayxcbiAgKVxuKTtcblxuJG1hdC1kZWVwLW9yYW5nZTogKFxuICA1MDogI2ZiZTllNyxcbiAgMTAwOiAjZmZjY2JjLFxuICAyMDA6ICNmZmFiOTEsXG4gIDMwMDogI2ZmOGE2NSxcbiAgNDAwOiAjZmY3MDQzLFxuICA1MDA6ICNmZjU3MjIsXG4gIDYwMDogI2Y0NTExZSxcbiAgNzAwOiAjZTY0YTE5LFxuICA4MDA6ICNkODQzMTUsXG4gIDkwMDogI2JmMzYwYyxcbiAgQTEwMDogI2ZmOWU4MCxcbiAgQTIwMDogI2ZmNmU0MCxcbiAgQTQwMDogI2ZmM2QwMCxcbiAgQTcwMDogI2RkMmMwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtYnJvd246IChcbiAgNTA6ICNlZmViZTksXG4gIDEwMDogI2Q3Y2NjOCxcbiAgMjAwOiAjYmNhYWE0LFxuICAzMDA6ICNhMTg4N2YsXG4gIDQwMDogIzhkNmU2MyxcbiAgNTAwOiAjNzk1NTQ4LFxuICA2MDA6ICM2ZDRjNDEsXG4gIDcwMDogIzVkNDAzNyxcbiAgODAwOiAjNGUzNDJlLFxuICA5MDA6ICMzZTI3MjMsXG4gIEExMDA6ICNkN2NjYzgsXG4gIEEyMDA6ICNiY2FhYTQsXG4gIEE0MDA6ICM4ZDZlNjMsXG4gIEE3MDA6ICM1ZDQwMzcsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtZ3JleTogKFxuICA1MDogI2ZhZmFmYSxcbiAgMTAwOiAjZjVmNWY1LFxuICAyMDA6ICNlZWVlZWUsXG4gIDMwMDogI2UwZTBlMCxcbiAgNDAwOiAjYmRiZGJkLFxuICA1MDA6ICM5ZTllOWUsXG4gIDYwMDogIzc1NzU3NSxcbiAgNzAwOiAjNjE2MTYxLFxuICA4MDA6ICM0MjQyNDIsXG4gIDkwMDogIzIxMjEyMSxcbiAgQTEwMDogI2ZmZmZmZixcbiAgQTIwMDogI2VlZWVlZSxcbiAgQTQwMDogI2JkYmRiZCxcbiAgQTcwMDogIzYxNjE2MSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4vLyBBbGlhcyBmb3IgYWx0ZXJuYXRlIHNwZWxsaW5nLlxuJG1hdC1ncmF5OiAkbWF0LWdyZXk7XG5cbiRtYXQtYmx1ZS1ncmV5OiAoXG4gIDUwOiAjZWNlZmYxLFxuICAxMDA6ICNjZmQ4ZGMsXG4gIDIwMDogI2IwYmVjNSxcbiAgMzAwOiAjOTBhNGFlLFxuICA0MDA6ICM3ODkwOWMsXG4gIDUwMDogIzYwN2Q4YixcbiAgNjAwOiAjNTQ2ZTdhLFxuICA3MDA6ICM0NTVhNjQsXG4gIDgwMDogIzM3NDc0ZixcbiAgOTAwOiAjMjYzMjM4LFxuICBBMTAwOiAjY2ZkOGRjLFxuICBBMjAwOiAjYjBiZWM1LFxuICBBNDAwOiAjNzg5MDljLFxuICBBNzAwOiAjNDU1YTY0LFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbi8vIEFsaWFzIGZvciBhbHRlcm5hdGUgc3BlbGxpbmcuXG4kbWF0LWJsdWUtZ3JheTogJG1hdC1ibHVlLWdyZXk7XG5cblxuLy8gQmFja2dyb3VuZCBwYWxldHRlIGZvciBsaWdodCB0aGVtZXMuXG4kbWF0LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQ6IChcbiAgc3RhdHVzLWJhcjogbWFwLWdldCgkbWF0LWdyZXksIDMwMCksXG4gIGFwcC1iYXI6ICAgIG1hcC1nZXQoJG1hdC1ncmV5LCAxMDApLFxuICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRtYXQtZ3JleSwgNTApLFxuICBob3ZlcjogICAgICByZ2JhKGJsYWNrLCAwLjA0KSwgLy8gVE9ETyhrYXJhKTogY2hlY2sgc3R5bGUgd2l0aCBNYXRlcmlhbCBEZXNpZ24gVVhcbiAgY2FyZDogICAgICAgd2hpdGUsXG4gIGRpYWxvZzogICAgIHdoaXRlLFxuICBkaXNhYmxlZC1idXR0b246IHJnYmEoYmxhY2ssIDAuMTIpLFxuICByYWlzZWQtYnV0dG9uOiB3aGl0ZSxcbiAgZm9jdXNlZC1idXR0b246ICRkYXJrLWZvY3VzZWQsXG4gIHNlbGVjdGVkLWJ1dHRvbjogbWFwLWdldCgkbWF0LWdyZXksIDMwMCksXG4gIHNlbGVjdGVkLWRpc2FibGVkLWJ1dHRvbjogbWFwLWdldCgkbWF0LWdyZXksIDQwMCksXG4gIGRpc2FibGVkLWJ1dHRvbi10b2dnbGU6IG1hcC1nZXQoJG1hdC1ncmV5LCAyMDApLFxuICB1bnNlbGVjdGVkLWNoaXA6IG1hcC1nZXQoJG1hdC1ncmV5LCAzMDApLFxuICBkaXNhYmxlZC1saXN0LW9wdGlvbjogbWFwLWdldCgkbWF0LWdyZXksIDIwMCksXG4gIHRvb2x0aXA6IG1hcC1nZXQoJG1hdC1ncmV5LCA3MDApLFxuKTtcblxuLy8gQmFja2dyb3VuZCBwYWxldHRlIGZvciBkYXJrIHRoZW1lcy5cbiRtYXQtZGFyay10aGVtZS1iYWNrZ3JvdW5kOiAoXG4gIHN0YXR1cy1iYXI6IGJsYWNrLFxuICBhcHAtYmFyOiAgICBtYXAtZ2V0KCRtYXQtZ3JleSwgOTAwKSxcbiAgYmFja2dyb3VuZDogIzMwMzAzMCxcbiAgaG92ZXI6ICAgICAgcmdiYSh3aGl0ZSwgMC4wNCksIC8vIFRPRE8oa2FyYSk6IGNoZWNrIHN0eWxlIHdpdGggTWF0ZXJpYWwgRGVzaWduIFVYXG4gIGNhcmQ6ICAgICAgIG1hcC1nZXQoJG1hdC1ncmV5LCA4MDApLFxuICBkaWFsb2c6ICAgICBtYXAtZ2V0KCRtYXQtZ3JleSwgODAwKSxcbiAgZGlzYWJsZWQtYnV0dG9uOiByZ2JhKHdoaXRlLCAwLjEyKSxcbiAgcmFpc2VkLWJ1dHRvbjogbWFwLWdldCgkbWF0LWdyZXksIDgwMCksXG4gIGZvY3VzZWQtYnV0dG9uOiAkbGlnaHQtZm9jdXNlZCxcbiAgc2VsZWN0ZWQtYnV0dG9uOiBtYXAtZ2V0KCRtYXQtZ3JleSwgOTAwKSxcbiAgc2VsZWN0ZWQtZGlzYWJsZWQtYnV0dG9uOiBtYXAtZ2V0KCRtYXQtZ3JleSwgODAwKSxcbiAgZGlzYWJsZWQtYnV0dG9uLXRvZ2dsZTogYmxhY2ssXG4gIHVuc2VsZWN0ZWQtY2hpcDogbWFwLWdldCgkbWF0LWdyZXksIDcwMCksXG4gIGRpc2FibGVkLWxpc3Qtb3B0aW9uOiBibGFjayxcbiAgdG9vbHRpcDogbWFwLWdldCgkbWF0LWdyZXksIDcwMCksXG4pO1xuXG4vLyBGb3JlZ3JvdW5kIHBhbGV0dGUgZm9yIGxpZ2h0IHRoZW1lcy5cbiRtYXQtbGlnaHQtdGhlbWUtZm9yZWdyb3VuZDogKFxuICBiYXNlOiAgICAgICAgICAgICAgYmxhY2ssXG4gIGRpdmlkZXI6ICAgICAgICAgICAkZGFyay1kaXZpZGVycyxcbiAgZGl2aWRlcnM6ICAgICAgICAgICRkYXJrLWRpdmlkZXJzLFxuICBkaXNhYmxlZDogICAgICAgICAgJGRhcmstZGlzYWJsZWQtdGV4dCxcbiAgZGlzYWJsZWQtYnV0dG9uOiAgIHJnYmEoYmxhY2ssIDAuMjYpLFxuICBkaXNhYmxlZC10ZXh0OiAgICAgJGRhcmstZGlzYWJsZWQtdGV4dCxcbiAgZWxldmF0aW9uOiAgICAgICAgIGJsYWNrLFxuICBoaW50LXRleHQ6ICAgICAgICAgJGRhcmstZGlzYWJsZWQtdGV4dCxcbiAgc2Vjb25kYXJ5LXRleHQ6ICAgICRkYXJrLXNlY29uZGFyeS10ZXh0LFxuICBpY29uOiAgICAgICAgICAgICAgcmdiYShibGFjaywgMC41NCksXG4gIGljb25zOiAgICAgICAgICAgICByZ2JhKGJsYWNrLCAwLjU0KSxcbiAgdGV4dDogICAgICAgICAgICAgIHJnYmEoYmxhY2ssIDAuODcpLFxuICBzbGlkZXItbWluOiAgICAgICAgcmdiYShibGFjaywgMC44NyksXG4gIHNsaWRlci1vZmY6ICAgICAgICByZ2JhKGJsYWNrLCAwLjI2KSxcbiAgc2xpZGVyLW9mZi1hY3RpdmU6IHJnYmEoYmxhY2ssIDAuMzgpLFxuKTtcblxuLy8gRm9yZWdyb3VuZCBwYWxldHRlIGZvciBkYXJrIHRoZW1lcy5cbiRtYXQtZGFyay10aGVtZS1mb3JlZ3JvdW5kOiAoXG4gIGJhc2U6ICAgICAgICAgICAgICB3aGl0ZSxcbiAgZGl2aWRlcjogICAgICAgICAgICRsaWdodC1kaXZpZGVycyxcbiAgZGl2aWRlcnM6ICAgICAgICAgICRsaWdodC1kaXZpZGVycyxcbiAgZGlzYWJsZWQ6ICAgICAgICAgICRsaWdodC1kaXNhYmxlZC10ZXh0LFxuICBkaXNhYmxlZC1idXR0b246ICAgcmdiYSh3aGl0ZSwgMC4zKSxcbiAgZGlzYWJsZWQtdGV4dDogICAgICRsaWdodC1kaXNhYmxlZC10ZXh0LFxuICBlbGV2YXRpb246ICAgICAgICAgYmxhY2ssXG4gIGhpbnQtdGV4dDogICAgICAgICAkbGlnaHQtZGlzYWJsZWQtdGV4dCxcbiAgc2Vjb25kYXJ5LXRleHQ6ICAgICRsaWdodC1zZWNvbmRhcnktdGV4dCxcbiAgaWNvbjogICAgICAgICAgICAgIHdoaXRlLFxuICBpY29uczogICAgICAgICAgICAgd2hpdGUsXG4gIHRleHQ6ICAgICAgICAgICAgICB3aGl0ZSxcbiAgc2xpZGVyLW1pbjogICAgICAgIHdoaXRlLFxuICBzbGlkZXItb2ZmOiAgICAgICAgcmdiYSh3aGl0ZSwgMC4zKSxcbiAgc2xpZGVyLW9mZi1hY3RpdmU6IHJnYmEod2hpdGUsIDAuMyksXG4pO1xuXG5cbi8vIFdoZXRoZXIgZGVuc2l0eSBzaG91bGQgYmUgZ2VuZXJhdGVkIGJ5IGRlZmF1bHQuXG4kX21hdC10aGVtZS1nZW5lcmF0ZS1kZWZhdWx0LWRlbnNpdHk6IHRydWUgIWRlZmF1bHQ7XG5cbi8vIEZvciBhIGdpdmVuIGh1ZSBpbiBhIHBhbGV0dGUsIHJldHVybiB0aGUgY29udHJhc3QgY29sb3IgZnJvbSB0aGUgbWFwIG9mIGNvbnRyYXN0IHBhbGV0dGVzLlxuLy8gQHBhcmFtICRjb2xvci1tYXBcbi8vIEBwYXJhbSAkaHVlXG5AZnVuY3Rpb24gbWF0LWNvbnRyYXN0KCRwYWxldHRlLCAkaHVlKSB7XG4gIEByZXR1cm4gbWFwLWdldChtYXAtZ2V0KCRwYWxldHRlLCBjb250cmFzdCksICRodWUpO1xufVxuXG5cbi8vIENyZWF0ZXMgYSBtYXAgb2YgaHVlcyB0byBjb2xvcnMgZm9yIGEgdGhlbWUuIFRoaXMgaXMgdXNlZCB0byBkZWZpbmUgYSB0aGVtZSBwYWxldHRlIGluIHRlcm1zXG4vLyBvZiB0aGUgTWF0ZXJpYWwgRGVzaWduIGh1ZXMuXG4vLyBAcGFyYW0gJGNvbG9yLW1hcFxuLy8gQHBhcmFtICRwcmltYXJ5XG4vLyBAcGFyYW0gJGxpZ2h0ZXJcbkBmdW5jdGlvbiBtYXQtcGFsZXR0ZSgkYmFzZS1wYWxldHRlLCAkZGVmYXVsdDogNTAwLCAkbGlnaHRlcjogMTAwLCAkZGFya2VyOiA3MDAsICR0ZXh0OiAkZGVmYXVsdCkge1xuICAkcmVzdWx0OiBtYXAtbWVyZ2UoJGJhc2UtcGFsZXR0ZSwgKFxuICAgIGRlZmF1bHQ6IG1hcC1nZXQoJGJhc2UtcGFsZXR0ZSwgJGRlZmF1bHQpLFxuICAgIGxpZ2h0ZXI6IG1hcC1nZXQoJGJhc2UtcGFsZXR0ZSwgJGxpZ2h0ZXIpLFxuICAgIGRhcmtlcjogbWFwLWdldCgkYmFzZS1wYWxldHRlLCAkZGFya2VyKSxcbiAgICB0ZXh0OiBtYXAtZ2V0KCRiYXNlLXBhbGV0dGUsICR0ZXh0KSxcblxuICAgIGRlZmF1bHQtY29udHJhc3Q6IG1hdC1jb250cmFzdCgkYmFzZS1wYWxldHRlLCAkZGVmYXVsdCksXG4gICAgbGlnaHRlci1jb250cmFzdDogbWF0LWNvbnRyYXN0KCRiYXNlLXBhbGV0dGUsICRsaWdodGVyKSxcbiAgICBkYXJrZXItY29udHJhc3Q6IG1hdC1jb250cmFzdCgkYmFzZS1wYWxldHRlLCAkZGFya2VyKVxuICApKTtcblxuICAvLyBGb3IgZWFjaCBodWUgaW4gdGhlIHBhbGV0dGUsIGFkZCBhIFwiLWNvbnRyYXN0XCIgY29sb3IgdG8gdGhlIG1hcC5cbiAgQGVhY2ggJGh1ZSwgJGNvbG9yIGluICRiYXNlLXBhbGV0dGUge1xuICAgICRyZXN1bHQ6IG1hcC1tZXJnZSgkcmVzdWx0LCAoXG4gICAgICAnI3skaHVlfS1jb250cmFzdCc6IG1hdC1jb250cmFzdCgkYmFzZS1wYWxldHRlLCAkaHVlKVxuICAgICkpO1xuICB9XG5cbiAgQHJldHVybiAkcmVzdWx0O1xufVxuXG5cbi8vIEdldHMgYSBjb2xvciBmcm9tIGEgdGhlbWUgcGFsZXR0ZSAodGhlIG91dHB1dCBvZiBtYXQtcGFsZXR0ZSkuXG4vLyBUaGUgaHVlIGNhbiBiZSBvbmUgb2YgdGhlIHN0YW5kYXJkIHZhbHVlcyAoNTAwLCBBNDAwLCBldGMuKSwgb25lIG9mIHRoZSB0aHJlZSBwcmVjb25maWd1cmVkXG4vLyBodWVzIChkZWZhdWx0LCBsaWdodGVyLCBkYXJrZXIpLCBvciBhbnkgb2YgdGhlIGFmb3JlbWVudGlvbmVkIHByZWZpeGVkIHdpdGggXCItY29udHJhc3RcIi5cbi8vXG4vLyBAcGFyYW0gJGNvbG9yLW1hcCBUaGUgdGhlbWUgcGFsZXR0ZSAob3V0cHV0IG9mIG1hdC1wYWxldHRlKS5cbi8vIEBwYXJhbSAkaHVlIFRoZSBodWUgZnJvbSB0aGUgcGFsZXR0ZSB0byB1c2UuIElmIHRoaXMgaXMgYSB2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEsIGl0IHdpbGxcbi8vICAgICBiZSB0cmVhdGVkIGFzIG9wYWNpdHkuXG4vLyBAcGFyYW0gJG9wYWNpdHkgVGhlIGFscGhhIGNoYW5uZWwgdmFsdWUgZm9yIHRoZSBjb2xvci5cbkBmdW5jdGlvbiBtYXQtY29sb3IoJHBhbGV0dGUsICRodWU6IGRlZmF1bHQsICRvcGFjaXR5OiBudWxsKSB7XG4gIC8vIElmIGh1ZUtleSBpcyBhIG51bWJlciBiZXR3ZWVuIHplcm8gYW5kIG9uZSwgdGhlbiBpdCBhY3R1YWxseSBjb250YWlucyBhblxuICAvLyBvcGFjaXR5IHZhbHVlLCBzbyByZWNhbGwgdGhpcyBmdW5jdGlvbiB3aXRoIHRoZSBkZWZhdWx0IGh1ZSBhbmQgdGhhdCBnaXZlbiBvcGFjaXR5LlxuICBAaWYgdHlwZS1vZigkaHVlKSA9PSBudW1iZXIgYW5kICRodWUgPj0gMCBhbmQgJGh1ZSA8PSAxIHtcbiAgICBAcmV0dXJuIG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdCwgJGh1ZSk7XG4gIH1cblxuICAkY29sb3I6IG1hcC1nZXQoJHBhbGV0dGUsICRodWUpO1xuXG4gIEBpZiAodHlwZS1vZigkY29sb3IpICE9IGNvbG9yKSB7XG4gICAgLy8gSWYgdGhlICRjb2xvciByZXNvbHZlZCB0byBzb21ldGhpbmcgZGlmZmVyZW50IGZyb20gYSBjb2xvciAoZS5nLiBhIENTUyB2YXJpYWJsZSksXG4gICAgLy8gd2UgY2FuJ3QgYXBwbHkgdGhlIG9wYWNpdHkgYW55d2F5IHNvIHdlIHJldHVybiB0aGUgdmFsdWUgYXMgaXMsIG90aGVyd2lzZSBTYXNzIGNhblxuICAgIC8vIHRocm93IGFuIGVycm9yIG9yIG91dHB1dCBzb21ldGhpbmcgaW52YWxpZC5cbiAgICBAcmV0dXJuICRjb2xvcjtcbiAgfVxuXG4gIEByZXR1cm4gcmdiYSgkY29sb3IsIGlmKCRvcGFjaXR5ID09IG51bGwsIG9wYWNpdHkoJGNvbG9yKSwgJG9wYWNpdHkpKTtcbn1cblxuLy8gVmFsaWRhdGVzIHRoZSBzcGVjaWZpZWQgdGhlbWUgYnkgZW5zdXJpbmcgdGhhdCB0aGUgb3B0aW9uYWwgY29sb3IgY29uZmlnIGRlZmluZXNcbi8vIGEgcHJpbWFyeSwgYWNjZW50IGFuZCB3YXJuIHBhbGV0dGUuIFJldHVybnMgdGhlIHRoZW1lIGlmIG5vIGZhaWx1cmVzIHdlcmUgZm91bmQuXG5AZnVuY3Rpb24gX21hdC12YWxpZGF0ZS10aGVtZSgkdGhlbWUpIHtcbiAgQGlmIG1hcC1nZXQoJHRoZW1lLCBjb2xvcikge1xuICAgICRjb2xvcjogbWFwLWdldCgkdGhlbWUsIGNvbG9yKTtcbiAgICBAaWYgbm90IG1hcC1nZXQoJGNvbG9yLCBwcmltYXJ5KSB7XG4gICAgICBAZXJyb3IgJ1RoZW1lIGRvZXMgbm90IGRlZmluZSBhIHZhbGlkIFwicHJpbWFyeVwiIHBhbGV0dGUuJztcbiAgICB9XG4gICAgQGVsc2UgaWYgbm90IG1hcC1nZXQoJGNvbG9yLCBhY2NlbnQpIHtcbiAgICAgIEBlcnJvciAnVGhlbWUgZG9lcyBub3QgZGVmaW5lIGEgdmFsaWQgXCJhY2NlbnRcIiBwYWxldHRlLic7XG4gICAgfVxuICAgIEBlbHNlIGlmIG5vdCBtYXAtZ2V0KCRjb2xvciwgd2Fybikge1xuICAgICAgQGVycm9yICdUaGVtZSBkb2VzIG5vdCBkZWZpbmUgYSB2YWxpZCBcIndhcm5cIiBwYWxldHRlLic7XG4gICAgfVxuICB9XG4gIEByZXR1cm4gJHRoZW1lO1xufVxuXG4vLyBDcmVhdGVzIGEgYmFja3dhcmRzIGNvbXBhdGlibGUgdGhlbWUuIFByZXZpb3VzbHkgaW4gQW5ndWxhciBNYXRlcmlhbCwgdGhlbWUgb2JqZWN0c1xuLy8gY29udGFpbmVkIHRoZSBjb2xvciBjb25maWd1cmF0aW9uIGRpcmVjdGx5LiBXaXRoIHRoZSByZWNlbnQgcmVmYWN0b3Jpbmcgb2YgdGhlIHRoZW1pbmdcbi8vIHN5c3RlbSB0byBhbGxvdyBmb3IgZGVuc2l0eSBhbmQgdHlwb2dyYXBoeSBjb25maWd1cmF0aW9ucywgdGhpcyBpcyBubyBsb25nZXIgdGhlIGNhc2UuXG4vLyBUbyBlbnN1cmUgdGhhdCBjb25zdHJ1Y3RlZCB0aGVtZXMgd2hpY2ggd2lsbCBiZSBwYXNzZWQgdG8gY3VzdG9tIHRoZW1lIG1peGlucyBkbyBub3QgYnJlYWssXG4vLyB3ZSBjb3B5IHRoZSBjb2xvciBjb25maWd1cmF0aW9uIGFuZCBwdXQgaXRzIHByb3BlcnRpZXMgYXQgdGhlIHRvcC1sZXZlbCBvZiB0aGUgdGhlbWUgb2JqZWN0LlxuLy8gSGVyZSBpcyBhbiBleGFtcGxlIG9mIGEgcGF0dGVybiB0aGF0IHNob3VsZCBzdGlsbCB3b3JrIHVudGlsIGl0J3Mgb2ZmaWNpYWxseSBtYXJrZWQgYXMgYVxuLy8gYnJlYWtpbmcgY2hhbmdlOlxuLy9cbi8vICAgIEBtaXhpbiBteS1jdXN0b20tY29tcG9uZW50LXRoZW1lKCR0aGVtZSkge1xuLy8gICAgICAubXktY29tcCB7XG4vLyAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KSk7XG4vLyAgICAgIH1cbi8vICAgIH1cbi8vXG4vLyBOb3RlIHRoYXQgdGhlIGAkdGhlbWUucHJpbWFyeWAga2V5IGRvZXMgdXN1YWxseSBub3QgZXhpc3Qgc2luY2UgdGhlIGNvbG9yIGNvbmZpZ3VyYXRpb25cbi8vIGlzIHN0b3JlZCBpbiBgJHRoZW1lLmNvbG9yYCB3aGljaCBjb250YWlucyBhIHByb3BlcnR5IGZvciBgcHJpbWFyeWAuIFRoaXMgbWV0aG9kIGNvcGllc1xuLy8gdGhlIG1hcCBmcm9tIGAkdGhlbWUuY29sb3JgIHRvIGAkdGhlbWVgIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbkBmdW5jdGlvbiBfbWF0LWNyZWF0ZS1iYWNrd2FyZHMtY29tcGF0aWJpbGl0eS10aGVtZSgkdGhlbWUpIHtcbiAgQGlmIG5vdCBtYXAtZ2V0KCR0aGVtZSwgY29sb3IpIHtcbiAgICBAcmV0dXJuICR0aGVtZTtcbiAgfVxuICAkY29sb3I6IG1hcC1nZXQoJHRoZW1lLCBjb2xvcik7XG4gIEByZXR1cm4gbWFwLW1lcmdlKCR0aGVtZSwgJGNvbG9yKTtcbn1cblxuLy8gQ3JlYXRlcyBhIGxpZ2h0LXRoZW1lZCBjb2xvciBjb25maWd1cmF0aW9uIGZyb20gdGhlIHNwZWNpZmllZFxuLy8gcHJpbWFyeSwgYWNjZW50IGFuZCB3YXJuIHBhbGV0dGVzLlxuQGZ1bmN0aW9uIF9tYXQtY3JlYXRlLWxpZ2h0LWNvbG9yLWNvbmZpZygkcHJpbWFyeSwgJGFjY2VudCwgJHdhcm46IG51bGwpIHtcbiAgQHJldHVybiAoXG4gICAgcHJpbWFyeTogJHByaW1hcnksXG4gICAgYWNjZW50OiAkYWNjZW50LFxuICAgIHdhcm46IGlmKCR3YXJuICE9IG51bGwsICR3YXJuLCBtYXQtcGFsZXR0ZSgkbWF0LXJlZCkpLFxuICAgIGlzLWRhcms6IGZhbHNlLFxuICAgIGZvcmVncm91bmQ6ICRtYXQtbGlnaHQtdGhlbWUtZm9yZWdyb3VuZCxcbiAgICBiYWNrZ3JvdW5kOiAkbWF0LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQsXG4gICk7XG59XG5cbi8vIENyZWF0ZXMgYSBkYXJrLXRoZW1lZCBjb2xvciBjb25maWd1cmF0aW9uIGZyb20gdGhlIHNwZWNpZmllZFxuLy8gcHJpbWFyeSwgYWNjZW50IGFuZCB3YXJuIHBhbGV0dGVzLlxuQGZ1bmN0aW9uIF9tYXQtY3JlYXRlLWRhcmstY29sb3ItY29uZmlnKCRwcmltYXJ5LCAkYWNjZW50LCAkd2FybjogbnVsbCkge1xuICBAcmV0dXJuIChcbiAgICBwcmltYXJ5OiAkcHJpbWFyeSxcbiAgICBhY2NlbnQ6ICRhY2NlbnQsXG4gICAgd2FybjogaWYoJHdhcm4gIT0gbnVsbCwgJHdhcm4sIG1hdC1wYWxldHRlKCRtYXQtcmVkKSksXG4gICAgaXMtZGFyazogdHJ1ZSxcbiAgICBmb3JlZ3JvdW5kOiAkbWF0LWRhcmstdGhlbWUtZm9yZWdyb3VuZCxcbiAgICBiYWNrZ3JvdW5kOiAkbWF0LWRhcmstdGhlbWUtYmFja2dyb3VuZCxcbiAgKTtcbn1cblxuLy8gQ3JlYXRlcyBhIGNvbnRhaW5lciBvYmplY3QgZm9yIGEgbGlnaHQgdGhlbWUgdG8gYmUgZ2l2ZW4gdG8gaW5kaXZpZHVhbCBjb21wb25lbnQgdGhlbWUgbWl4aW5zLlxuLy8gVE9ETzogUmVtb3ZlIGxlZ2FjeSBBUEkgYW5kIHJlbmFtZSBgJHByaW1hcnlgIHRvIGAkY29uZmlnYC4gQ3VycmVudGx5IGl0IGNhbm5vdCBiZSByZW5hbWVkXG4vLyBhcyBpdCB3b3VsZCBicmVhayBleGlzdGluZyBhcHBzIHRoYXQgc2V0IHRoZSBwYXJhbWV0ZXIgYnkgbmFtZS5cbkBmdW5jdGlvbiBtYXQtbGlnaHQtdGhlbWUoJHByaW1hcnksICRhY2NlbnQ6IG51bGwsICR3YXJuOiBtYXQtcGFsZXR0ZSgkbWF0LXJlZCkpIHtcbiAgLy8gVGhpcyBmdW5jdGlvbiBjcmVhdGVzIGEgY29udGFpbmVyIG9iamVjdCBmb3IgdGhlIGluZGl2aWR1YWwgY29tcG9uZW50IHRoZW1lIG1peGlucy4gQ29uc3VtZXJzXG4gIC8vIGNhbiBjb25zdHJ1Y3Qgc3VjaCBhbiBvYmplY3QgYnkgY2FsbGluZyB0aGlzIGZ1bmN0aW9uLCBvciBieSBidWlsZGluZyB0aGUgb2JqZWN0IG1hbnVhbGx5LlxuICAvLyBUaGVyZSBhcmUgdHdvIHBvc3NpYmxlIHdheXMgdG8gaW52b2tlIHRoaXMgZnVuY3Rpb24gaW4gb3JkZXIgdG8gY3JlYXRlIHN1Y2ggYW4gb2JqZWN0OlxuICAvL1xuICAvLyAgICAoMSkgUGFzc2luZyBpbiBhIG1hcCB0aGF0IGhvbGRzIG9wdGlvbmFsIGNvbmZpZ3VyYXRpb25zIGZvciBpbmRpdmlkdWFsIHBhcnRzIG9mIHRoZVxuICAvLyAgICAgICAgdGhlbWluZyBzeXN0ZW0uIEZvciBgY29sb3JgIGNvbmZpZ3VyYXRpb25zLCB0aGUgZnVuY3Rpb24gb25seSBleHBlY3RzIHRoZSBwYWxldHRlc1xuICAvLyAgICAgICAgZm9yIGBwcmltYXJ5YCBhbmQgYGFjY2VudGAgKGFuZCBvcHRpb25hbGx5IGB3YXJuYCkuIFRoZSBmdW5jdGlvbiB3aWxsIGV4cGFuZCB0aGVcbiAgLy8gICAgICAgIHNob3J0aGFuZCBpbnRvIGFuIGFjdHVhbCBjb25maWd1cmF0aW9uIHRoYXQgY2FuIGJlIGNvbnN1bWVkIGluIGAtY29sb3JgIG1peGlucy5cbiAgLy8gICAgKDIpIExlZ2FjeSBwYXR0ZXJuOiBQYXNzaW5nIGluIHRoZSBwYWxldHRlcyBhcyBwYXJhbWV0ZXJzLiBUaGlzIGlzIG5vdCBhcyBmbGV4aWJsZVxuICAvLyAgICAgICAgYXMgcGFzc2luZyBpbiBhIGNvbmZpZ3VyYXRpb24gbWFwIGJlY2F1c2Ugb25seSB0aGUgYGNvbG9yYCBzeXN0ZW0gY2FuIGJlIGNvbmZpZ3VyZWQuXG4gIC8vXG4gIC8vIElmIHRoZSBsZWdhY3kgcGF0dGVybiBpcyB1c2VkLCB3ZSBnZW5lcmF0ZSBhIGNvbnRhaW5lciBvYmplY3Qgb25seSB3aXRoIGEgbGlnaHQtdGhlbWVkXG4gIC8vIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBgY29sb3JgIHRoZW1pbmcgcGFydC5cbiAgQGlmICRhY2NlbnQgIT0gbnVsbCB7XG4gICAgQHJldHVybiBfbWF0LWNyZWF0ZS1iYWNrd2FyZHMtY29tcGF0aWJpbGl0eS10aGVtZShfbWF0LXZhbGlkYXRlLXRoZW1lKChcbiAgICAgIF9pcy1sZWdhY3ktdGhlbWU6IHRydWUsXG4gICAgICBjb2xvcjogX21hdC1jcmVhdGUtbGlnaHQtY29sb3ItY29uZmlnKCRwcmltYXJ5LCAkYWNjZW50LCAkd2FybiksXG4gICAgKSkpO1xuICB9XG4gIC8vIElmIHRoZSBtYXAgcGF0dGVybiBpcyB1c2VkICgxKSwgd2UganVzdCBwYXNzLXRocm91Z2ggdGhlIGNvbmZpZ3VyYXRpb25zIGZvciBpbmRpdmlkdWFsXG4gIC8vIHBhcnRzIG9mIHRoZSB0aGVtaW5nIHN5c3RlbSwgYnV0IHVwZGF0ZSB0aGUgYGNvbG9yYCBjb25maWd1cmF0aW9uIGlmIHNldC4gQXMgZXhwbGFpbmVkXG4gIC8vIGFib3ZlLCB0aGUgY29sb3Igc2hvcnRoYW5kIHdpbGwgYmUgZXhwYW5kZWQgdG8gYW4gYWN0dWFsIGxpZ2h0LXRoZW1lZCBjb2xvciBjb25maWd1cmF0aW9uLlxuICAkcmVzdWx0OiAkcHJpbWFyeTtcbiAgQGlmIG1hcC1nZXQoJHByaW1hcnksIGNvbG9yKSB7XG4gICAgJGNvbG9yLXNldHRpbmdzOiBtYXAtZ2V0KCRwcmltYXJ5LCBjb2xvcik7XG4gICAgJHByaW1hcnk6IG1hcC1nZXQoJGNvbG9yLXNldHRpbmdzLCBwcmltYXJ5KTtcbiAgICAkYWNjZW50OiBtYXAtZ2V0KCRjb2xvci1zZXR0aW5ncywgYWNjZW50KTtcbiAgICAkd2FybjogbWFwLWdldCgkY29sb3Itc2V0dGluZ3MsIHdhcm4pO1xuICAgICRyZXN1bHQ6IG1hcC1tZXJnZSgkcmVzdWx0LCAoY29sb3I6IF9tYXQtY3JlYXRlLWxpZ2h0LWNvbG9yLWNvbmZpZygkcHJpbWFyeSwgJGFjY2VudCwgJHdhcm4pKSk7XG4gIH1cbiAgQHJldHVybiBfbWF0LWNyZWF0ZS1iYWNrd2FyZHMtY29tcGF0aWJpbGl0eS10aGVtZShfbWF0LXZhbGlkYXRlLXRoZW1lKCRyZXN1bHQpKTtcbn1cblxuLy8gQ3JlYXRlcyBhIGNvbnRhaW5lciBvYmplY3QgZm9yIGEgZGFyayB0aGVtZSB0byBiZSBnaXZlbiB0byBpbmRpdmlkdWFsIGNvbXBvbmVudCB0aGVtZSBtaXhpbnMuXG4vLyBUT0RPOiBSZW1vdmUgbGVnYWN5IEFQSSBhbmQgcmVuYW1lIGAkcHJpbWFyeWAgdG8gYCRjb25maWdgLiBDdXJyZW50bHkgaXQgY2Fubm90IGJlIHJlbmFtZWRcbi8vIGFzIGl0IHdvdWxkIGJyZWFrIGV4aXN0aW5nIGFwcHMgdGhhdCBzZXQgdGhlIHBhcmFtZXRlciBieSBuYW1lLlxuQGZ1bmN0aW9uIG1hdC1kYXJrLXRoZW1lKCRwcmltYXJ5LCAkYWNjZW50OiBudWxsLCAkd2FybjogbWF0LXBhbGV0dGUoJG1hdC1yZWQpKSB7XG4gIC8vIFRoaXMgZnVuY3Rpb24gY3JlYXRlcyBhIGNvbnRhaW5lciBvYmplY3QgZm9yIHRoZSBpbmRpdmlkdWFsIGNvbXBvbmVudCB0aGVtZSBtaXhpbnMuIENvbnN1bWVyc1xuICAvLyBjYW4gY29uc3RydWN0IHN1Y2ggYW4gb2JqZWN0IGJ5IGNhbGxpbmcgdGhpcyBmdW5jdGlvbiwgb3IgYnkgYnVpbGRpbmcgdGhlIG9iamVjdCBtYW51YWxseS5cbiAgLy8gVGhlcmUgYXJlIHR3byBwb3NzaWJsZSB3YXlzIHRvIGludm9rZSB0aGlzIGZ1bmN0aW9uIGluIG9yZGVyIHRvIGNyZWF0ZSBzdWNoIGFuIG9iamVjdDpcbiAgLy9cbiAgLy8gICAgKDEpIFBhc3NpbmcgaW4gYSBtYXAgdGhhdCBob2xkcyBvcHRpb25hbCBjb25maWd1cmF0aW9ucyBmb3IgaW5kaXZpZHVhbCBwYXJ0cyBvZiB0aGVcbiAgLy8gICAgICAgIHRoZW1pbmcgc3lzdGVtLiBGb3IgYGNvbG9yYCBjb25maWd1cmF0aW9ucywgdGhlIGZ1bmN0aW9uIG9ubHkgZXhwZWN0cyB0aGUgcGFsZXR0ZXNcbiAgLy8gICAgICAgIGZvciBgcHJpbWFyeWAgYW5kIGBhY2NlbnRgIChhbmQgb3B0aW9uYWxseSBgd2FybmApLiBUaGUgZnVuY3Rpb24gd2lsbCBleHBhbmQgdGhlXG4gIC8vICAgICAgICBzaG9ydGhhbmQgaW50byBhbiBhY3R1YWwgY29uZmlndXJhdGlvbiB0aGF0IGNhbiBiZSBjb25zdW1lZCBpbiBgLWNvbG9yYCBtaXhpbnMuXG4gIC8vICAgICgyKSBMZWdhY3kgcGF0dGVybjogUGFzc2luZyBpbiB0aGUgcGFsZXR0ZXMgYXMgcGFyYW1ldGVycy4gVGhpcyBpcyBub3QgYXMgZmxleGlibGVcbiAgLy8gICAgICAgIGFzIHBhc3NpbmcgaW4gYSBjb25maWd1cmF0aW9uIG1hcCBiZWNhdXNlIG9ubHkgdGhlIGBjb2xvcmAgc3lzdGVtIGNhbiBiZSBjb25maWd1cmVkLlxuICAvL1xuICAvLyBJZiB0aGUgbGVnYWN5IHBhdHRlcm4gaXMgdXNlZCwgd2UgZ2VuZXJhdGUgYSBjb250YWluZXIgb2JqZWN0IG9ubHkgd2l0aCBhIGRhcmstdGhlbWVkXG4gIC8vIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBgY29sb3JgIHRoZW1pbmcgcGFydC5cbiAgQGlmICRhY2NlbnQgIT0gbnVsbCB7XG4gICAgQHJldHVybiBfbWF0LWNyZWF0ZS1iYWNrd2FyZHMtY29tcGF0aWJpbGl0eS10aGVtZShfbWF0LXZhbGlkYXRlLXRoZW1lKChcbiAgICAgIF9pcy1sZWdhY3ktdGhlbWU6IHRydWUsXG4gICAgICBjb2xvcjogX21hdC1jcmVhdGUtZGFyay1jb2xvci1jb25maWcoJHByaW1hcnksICRhY2NlbnQsICR3YXJuKSxcbiAgICApKSk7XG4gIH1cbiAgLy8gSWYgdGhlIG1hcCBwYXR0ZXJuIGlzIHVzZWQgKDEpLCB3ZSBqdXN0IHBhc3MtdGhyb3VnaCB0aGUgY29uZmlndXJhdGlvbnMgZm9yIGluZGl2aWR1YWxcbiAgLy8gcGFydHMgb2YgdGhlIHRoZW1pbmcgc3lzdGVtLCBidXQgdXBkYXRlIHRoZSBgY29sb3JgIGNvbmZpZ3VyYXRpb24gaWYgc2V0LiBBcyBleHBsYWluZWRcbiAgLy8gYWJvdmUsIHRoZSBjb2xvciBzaG9ydGhhbmQgd2lsbCBiZSBleHBhbmRlZCB0byBhbiBhY3R1YWwgZGFyay10aGVtZWQgY29sb3IgY29uZmlndXJhdGlvbi5cbiAgJHJlc3VsdDogJHByaW1hcnk7XG4gIEBpZiBtYXAtZ2V0KCRwcmltYXJ5LCBjb2xvcikge1xuICAgICRjb2xvci1zZXR0aW5nczogbWFwLWdldCgkcHJpbWFyeSwgY29sb3IpO1xuICAgICRwcmltYXJ5OiBtYXAtZ2V0KCRjb2xvci1zZXR0aW5ncywgcHJpbWFyeSk7XG4gICAgJGFjY2VudDogbWFwLWdldCgkY29sb3Itc2V0dGluZ3MsIGFjY2VudCk7XG4gICAgJHdhcm46IG1hcC1nZXQoJGNvbG9yLXNldHRpbmdzLCB3YXJuKTtcbiAgICAkcmVzdWx0OiBtYXAtbWVyZ2UoJHJlc3VsdCwgKGNvbG9yOiBfbWF0LWNyZWF0ZS1kYXJrLWNvbG9yLWNvbmZpZygkcHJpbWFyeSwgJGFjY2VudCwgJHdhcm4pKSk7XG4gIH1cbiAgQHJldHVybiBfbWF0LWNyZWF0ZS1iYWNrd2FyZHMtY29tcGF0aWJpbGl0eS10aGVtZShfbWF0LXZhbGlkYXRlLXRoZW1lKCRyZXN1bHQpKTtcbn1cblxuLy8vIEdldHMgdGhlIGNvbG9yIGNvbmZpZ3VyYXRpb24gZnJvbSB0aGUgZ2l2ZW4gdGhlbWUgb3IgY29uZmlndXJhdGlvbi5cbkBmdW5jdGlvbiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUsICRkZWZhdWx0OiBudWxsKSB7XG4gIC8vIElmIGEgY29uZmlndXJhdGlvbiBoYXMgYmVlbiBwYXNzZWQsIHJldHVybiB0aGUgY29uZmlnIGRpcmVjdGx5LlxuICBAaWYgbm90IF9tYXQtaXMtdGhlbWUtb2JqZWN0KCR0aGVtZSkge1xuICAgIEByZXR1cm4gJHRoZW1lO1xuICB9XG4gIC8vIElmIHRoZSB0aGVtZSBoYXMgYmVlbiBjb25zdHJ1Y3RlZCB0aHJvdWdoIHRoZSBsZWdhY3kgdGhlbWluZyBBUEksIHdlIHVzZSB0aGUgdGhlbWUgb2JqZWN0XG4gIC8vIGFzIGNvbG9yIGNvbmZpZ3VyYXRpb24gaW5zdGVhZCBvZiB0aGUgZGVkaWNhdGVkIGBjb2xvcmAgcHJvcGVydHkuIFdlIGRvIHRoaXMgYmVjYXVzZSBmb3JcbiAgLy8gYmFja3dhcmRzIGNvbXBhdGliaWxpdHksIHdlIGNvcGllZCB0aGUgY29sb3IgY29uZmlndXJhdGlvbiBmcm9tIGAkdGhlbWUuY29sb3JgIHRvIGAkdGhlbWVgLlxuICAvLyBIZW5jZSBkZXZlbG9wZXJzIGNvdWxkIGN1c3RvbWl6ZSB0aGUgY29sb3JzIGF0IHRvcC1sZXZlbCBhbmQgd2FudCB0byByZXNwZWN0IHRoZXNlIGNoYW5nZXNcbiAgLy8gVE9ETzogUmVtb3ZlIHdoZW4gbGVnYWN5IHRoZW1pbmcgQVBJIGlzIHJlbW92ZWQuXG4gIEBpZiBfbWF0LWlzLWxlZ2FjeS1jb25zdHJ1Y3RlZC10aGVtZSgkdGhlbWUpIHtcbiAgICBAcmV0dXJuICR0aGVtZTtcbiAgfVxuICBAaWYgbWFwLWhhcy1rZXkoJHRoZW1lLCBjb2xvcikge1xuICAgIEByZXR1cm4gbWFwLWdldCgkdGhlbWUsIGNvbG9yKTtcbiAgfVxuICBAcmV0dXJuICRkZWZhdWx0O1xufVxuXG4vLy8gR2V0cyB0aGUgZGVuc2l0eSBjb25maWd1cmF0aW9uIGZyb20gdGhlIGdpdmVuIHRoZW1lIG9yIGNvbmZpZ3VyYXRpb24uXG5AZnVuY3Rpb24gbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUtb3ItY29uZmlnLCAkZGVmYXVsdDogMCkge1xuICAvLyBJZiBhIGNvbmZpZ3VyYXRpb24gaGFzIGJlZW4gcGFzc2VkLCByZXR1cm4gdGhlIGNvbmZpZyBkaXJlY3RseS5cbiAgQGlmIG5vdCBfbWF0LWlzLXRoZW1lLW9iamVjdCgkdGhlbWUtb3ItY29uZmlnKSB7XG4gICAgQHJldHVybiAkdGhlbWUtb3ItY29uZmlnO1xuICB9XG4gIC8vIEluIGNhc2UgYSB0aGVtZSBoYXMgYmVlbiBwYXNzZWQsIGV4dHJhY3QgdGhlIGNvbmZpZ3VyYXRpb24gaWYgcHJlc2VudCxcbiAgLy8gb3IgZmFsbCBiYWNrIHRvIHRoZSBkZWZhdWx0IGRlbnNpdHkgY29uZmlnLlxuICBAaWYgbWFwLWhhcy1rZXkoJHRoZW1lLW9yLWNvbmZpZywgZGVuc2l0eSkge1xuICAgIEByZXR1cm4gbWFwLWdldCgkdGhlbWUtb3ItY29uZmlnLCBkZW5zaXR5KTtcbiAgfVxuICBAcmV0dXJuICRkZWZhdWx0O1xufVxuXG4vLy8gR2V0cyB0aGUgdHlwb2dyYXBoeSBjb25maWd1cmF0aW9uIGZyb20gdGhlIGdpdmVuIHRoZW1lIG9yIGNvbmZpZ3VyYXRpb24uXG4vLy8gRm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LCB0eXBvZ3JhcGh5IGlzIG5vdCBpbmNsdWRlZCBieSBkZWZhdWx0LlxuQGZ1bmN0aW9uIG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lLW9yLWNvbmZpZywgJGRlZmF1bHQ6IG51bGwpIHtcbiAgLy8gSWYgYSBjb25maWd1cmF0aW9uIGhhcyBiZWVuIHBhc3NlZCwgcmV0dXJuIHRoZSBjb25maWcgZGlyZWN0bHkuXG4gIEBpZiBub3QgX21hdC1pcy10aGVtZS1vYmplY3QoJHRoZW1lLW9yLWNvbmZpZykge1xuICAgIEByZXR1cm4gJHRoZW1lLW9yLWNvbmZpZztcbiAgfVxuICAvLyBJbiBjYXNlIGEgdGhlbWUgaGFzIGJlZW4gcGFzc2VkLCBleHRyYWN0IHRoZSBjb25maWd1cmF0aW9uIGlmIHByZXNlbnQsXG4gIC8vIG9yIGZhbGwgYmFjayB0byB0aGUgZGVmYXVsdCB0eXBvZ3JhcGh5IGNvbmZpZy5cbiAgQGlmIChtYXAtaGFzLWtleSgkdGhlbWUtb3ItY29uZmlnLCB0eXBvZ3JhcGh5KSkge1xuICAgIEByZXR1cm4gbWFwLWdldCgkdGhlbWUtb3ItY29uZmlnLCB0eXBvZ3JhcGh5KTtcbiAgfVxuICBAcmV0dXJuICRkZWZhdWx0O1xufVxuXG4vLyBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gdmFsdWUgcmVzb2x2ZXMgdG8gYSB0aGVtZSBvYmplY3QuIFRoZW1lIG9iamVjdHMgYXJlIGFsd2F5c1xuLy8gb2YgdHlwZSBgbWFwYCBhbmQgY2FuIG9wdGlvbmFsbHkgb25seSBzcGVjaWZ5IGBjb2xvcmAsIGBkZW5zaXR5YCBvciBgdHlwb2dyYXBoeWAuXG5AZnVuY3Rpb24gX21hdC1pcy10aGVtZS1vYmplY3QoJHZhbHVlKSB7XG4gIEByZXR1cm4gdHlwZS1vZigkdmFsdWUpID09ICdtYXAnIGFuZCAoXG4gICAgbWFwLWhhcy1rZXkoJHZhbHVlLCBjb2xvcikgb3JcbiAgICBtYXAtaGFzLWtleSgkdmFsdWUsIGRlbnNpdHkpIG9yXG4gICAgbWFwLWhhcy1rZXkoJHZhbHVlLCB0eXBvZ3JhcGh5KSBvclxuICAgIGxlbmd0aCgkdmFsdWUpID09IDBcbiAgKTtcbn1cblxuLy8gQ2hlY2tzIHdoZXRoZXIgYSBnaXZlbiB2YWx1ZSBjb3JyZXNwb25kcyB0byBhIGxlZ2FjeSBjb25zdHJ1Y3RlZCB0aGVtZS5cbkBmdW5jdGlvbiBfbWF0LWlzLWxlZ2FjeS1jb25zdHJ1Y3RlZC10aGVtZSgkdmFsdWUpIHtcbiAgQHJldHVybiB0eXBlLW9mKCR2YWx1ZSkgPT0gJ21hcCcgYW5kIG1hcC1nZXQoJHZhbHVlLCAnX2lzLWxlZ2FjeS10aGVtZScpO1xufVxuXG4vLyBHZXRzIHRoZSB0aGVtZSBmcm9tIHRoZSBnaXZlbiB2YWx1ZSB0aGF0IGlzIGVpdGhlciBhbHJlYWR5IGEgdGhlbWUsIG9yIGEgY29sb3IgY29uZmlndXJhdGlvbi5cbi8vIFRoaXMgaGFuZGxlcyB0aGUgbGVnYWN5IGNhc2Ugd2hlcmUgZGV2ZWxvcGVycyBwYXNzIGEgY29sb3IgY29uZmlndXJhdGlvbiBkaXJlY3RseSB0byB0aGVcbi8vIHRoZW1lIG1peGluLiBCZWZvcmUgd2UgaW50cm9kdWNlZCB0aGUgbmV3IHBhdHRlcm4gZm9yIGNvbnN0cnVjdGluZyBhIHRoZW1lLCBkZXZlbG9wZXJzIHBhc3NlZFxuLy8gdGhlIGNvbG9yIGNvbmZpZ3VyYXRpb24gZGlyZWN0bHkgdG8gdGhlIHRoZW1lIG1peGlucy4gVGhpcyBjYW4gYmUgc3RpbGwgdGhlIGNhc2UgaWYgZGV2ZWxvcGVyc1xuLy8gY29uc3RydWN0IGEgdGhlbWUgbWFudWFsbHkgYW5kIHBhc3MgaXQgdG8gYSB0aGVtZS4gV2Ugc3VwcG9ydCB0aGlzIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbi8vIFRPRE8oZGV2dmVyc2lvbik6IHJlbW92ZSB0aGlzIGluIHRoZSBmdXR1cmUuIENvbnN0cnVjdGluZyB0aGVtZXMgbWFudWFsbHkgaXMgcmFyZSxcbi8vIGFuZCB0aGUgY29kZSBjYW4gYmUgZWFzaWx5IHVwZGF0ZWQgdG8gdGhlIG5ldyBBUEkuXG5AZnVuY3Rpb24gX21hdC1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgQGlmIF9tYXQtaXMtdGhlbWUtb2JqZWN0KCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgICBAcmV0dXJuICR0aGVtZS1vci1jb2xvci1jb25maWc7XG4gIH1cbiAgQHJldHVybiBfbWF0LWNyZWF0ZS1iYWNrd2FyZHMtY29tcGF0aWJpbGl0eS10aGVtZSgoXG4gICAgX2lzLWxlZ2FjeS10aGVtZTogdHJ1ZSxcbiAgICBjb2xvcjogJHRoZW1lLW9yLWNvbG9yLWNvbmZpZ1xuICApKTtcbn1cblxuXG5cbi8vIFdoZXRoZXIgZHVwbGljYXRpb24gd2FybmluZ3Mgc2hvdWxkIGJlIGRpc2FibGVkLiBXYXJuaW5ncyBlbmFibGVkIGJ5IGRlZmF1bHQuXG4kbWF0LXRoZW1lLWlnbm9yZS1kdXBsaWNhdGlvbi13YXJuaW5nczogZmFsc2UgIWRlZmF1bHQ7XG5cbi8vIFdhcm5pbmcgdGhhdCB3aWxsIGJlIHByaW50ZWQgaWYgZHVwbGljYXRlZCBzdHlsZXMgYXJlIGdlbmVyYXRlZCBieSBhIHRoZW1lLlxuJF9tYXQtdGhlbWUtZHVwbGljYXRlLXdhcm5pbmc6ICdSZWFkIG1vcmUgYWJvdXQgaG93IHN0eWxlIGR1cGxpY2F0aW9uIGNhbiBiZSBhdm9pZGVkIGluIGEgJyArXG4gICdkZWRpY2F0ZWQgZ3VpZGUuIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2NvbXBvbmVudHMvYmxvYi9tYXN0ZXIvZ3VpZGVzL2R1cGxpY2F0ZS10aGVtaW5nLXN0eWxlcy5tZCc7XG5cbi8vIFRoZXNlIHZhcmlhYmxlIGFyZSBub3QgaW50ZW5kZWQgdG8gYmUgb3ZlcnJpZGRlbiBleHRlcm5hbGx5LiBUaGV5IHVzZSBgIWRlZmF1bHRgIHRvXG4vLyBhdm9pZCBiZWluZyByZXNldCBldmVyeSB0aW1lIHRoaXMgZmlsZSBpcyBpbXBvcnRlZC5cbiRfbWF0LXRoZW1lLWVtaXR0ZWQtY29sb3I6ICgpICFkZWZhdWx0O1xuJF9tYXQtdGhlbWUtZW1pdHRlZC10eXBvZ3JhcGh5OiAoKSAhZGVmYXVsdDtcbiRfbWF0LXRoZW1lLWVtaXR0ZWQtZGVuc2l0eTogKCkgIWRlZmF1bHQ7XG5cbi8vIENoZWNrcyBpZiBjb25maWd1cmF0aW9ucyB0aGF0IGhhdmUgYmVlbiBkZWNsYXJlZCBpbiB0aGUgZ2l2ZW4gdGhlbWUgaGF2ZSBiZWVuIGdlbmVyYXRlZFxuLy8gYmVmb3JlLiBJZiBzbywgd2FybmluZ3Mgd2lsbCBiZSByZXBvcnRlZC4gVGhpcyBzaG91bGQgbm90aWZ5IGRldmVsb3BlcnMgaW4gY2FzZSBkdXBsaWNhdGVcbi8vIHN0eWxlcyBhcmUgYWNjaWRlbnRhbGx5IGdlbmVyYXRlZCBkdWUgdG8gd3JvbmcgdXNhZ2Ugb2YgdGhlIGFsbC10aGVtZSBtaXhpbnMuXG4vL1xuLy8gQWRkaXRpb25hbGx5LCB0aGlzIG1peGluIGNvbnRyb2xzIHRoZSBkZWZhdWx0IHZhbHVlIGZvciB0aGUgZGVuc2l0eSBjb25maWd1cmF0aW9uLiBCeVxuLy8gZGVmYXVsdCwgZGVuc2l0eSBzdHlsZXMgYXJlIGdlbmVyYXRlZCBhdCBzY2FsZSB6ZXJvLiBJZiB0aGUgc2FtZSBkZW5zaXR5IHN0eWxlcyB3b3VsZCBiZVxuLy8gZ2VuZXJhdGVkIGEgc2Vjb25kIHRpbWUgdGhvdWdoLCB0aGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGNoYW5nZSB0byBhdm9pZCBkdXBsaWNhdGUgc3R5bGVzLlxuLy9cbi8vIFRoZSBtaXhpbiBrZWVwcyB0cmFjayBvZiBhbGwgY29uZmlndXJhdGlvbnMgaW4gYSBsaXN0IHRoYXQgaXMgc2NvcGVkIHRvIHRoZSBzcGVjaWZpZWRcbi8vIGlkLiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIGEgZ2l2ZW4gdGhlbWUgY2FuIGJlIHBhc3NlZCB0byBtdWx0aXBsZSBkaXNqb2ludCB0aGVtZSBtaXhpbnNcbi8vIChlLmcuIGBhbmd1bGFyLW1hdGVyaWFsLXRoZW1lYCBhbmQgYGFuZ3VsYXItbWF0ZXJpYWwtbWRjLXRoZW1lYCkgd2l0aG91dCBjYXVzaW5nIGFueVxuLy8gc3R5bGUgZHVwbGljYXRpb24uXG5AbWl4aW4gX21hdC1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZS1vci1jb2xvci1jb25maWcsICRpZCkge1xuICAkdGhlbWU6IF9tYXQtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgJGNvbG9yLWNvbmZpZzogbWF0LWdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgJGRlbnNpdHktY29uZmlnOiBtYXQtZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICR0eXBvZ3JhcGh5LWNvbmZpZzogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuICAvLyBMaXN0cyBvZiBwcmV2aW91cyBgY29sb3JgLCBgZGVuc2l0eWAgYW5kIGB0eXBvZ3JhcGh5YCBjb25maWd1cmF0aW9ucy5cbiAgJHByZXZpb3VzLWNvbG9yOiBtYXAtZ2V0KCRfbWF0LXRoZW1lLWVtaXR0ZWQtY29sb3IsICRpZCkgb3IgKCk7XG4gICRwcmV2aW91cy10eXBvZ3JhcGh5OiBtYXAtZ2V0KCRfbWF0LXRoZW1lLWVtaXR0ZWQtdHlwb2dyYXBoeSwgJGlkKSBvciAoKTtcbiAgJHByZXZpb3VzLWRlbnNpdHk6IG1hcC1nZXQoJF9tYXQtdGhlbWUtZW1pdHRlZC1kZW5zaXR5LCAkaWQpIG9yICgpO1xuICAvLyBXaGV0aGVyIGR1cGxpY2F0ZSBsZWdhY3kgZGVuc2l0eSBzdHlsZXMgd291bGQgYmUgZ2VuZXJhdGVkLlxuICAkZHVwbGljYXRlLWxlZ2FjeS1kZW5zaXR5OiBmYWxzZTtcblxuICAvLyBDaGVjayBpZiB0aGUgY29sb3IgY29uZmlndXJhdGlvbiBoYXMgYmVlbiBnZW5lcmF0ZWQgYmVmb3JlLlxuICBAaWYgJGNvbG9yLWNvbmZpZyAhPSBudWxsIHtcbiAgICBAaWYgaW5kZXgoJHByZXZpb3VzLWNvbG9yLCAkY29sb3ItY29uZmlnKSAhPSBudWxsIGFuZFxuICAgICAgICBub3QgJG1hdC10aGVtZS1pZ25vcmUtZHVwbGljYXRpb24td2FybmluZ3Mge1xuICAgICAgQHdhcm4gJ1RoZSBzYW1lIGNvbG9yIHN0eWxlcyBhcmUgZ2VuZXJhdGVkIG11bHRpcGxlIHRpbWVzLiAnICtcbiAgICAgICAgICAkX21hdC10aGVtZS1kdXBsaWNhdGUtd2FybmluZztcbiAgICB9XG4gICAgJHByZXZpb3VzLWNvbG9yOiBhcHBlbmQoJHByZXZpb3VzLWNvbG9yLCAkY29sb3ItY29uZmlnKTtcbiAgfVxuXG4gIC8vIENoZWNrIGlmIHRoZSB0eXBvZ3JhcGh5IGNvbmZpZ3VyYXRpb24gaGFzIGJlZW4gZ2VuZXJhdGVkIGJlZm9yZS5cbiAgQGlmICR0eXBvZ3JhcGh5LWNvbmZpZyAhPSBudWxsIHtcbiAgICBAaWYgaW5kZXgoJHByZXZpb3VzLXR5cG9ncmFwaHksICR0eXBvZ3JhcGh5LWNvbmZpZykgIT0gbnVsbCBhbmRcbiAgICAgICAgbm90ICRtYXQtdGhlbWUtaWdub3JlLWR1cGxpY2F0aW9uLXdhcm5pbmdzIHtcbiAgICAgIEB3YXJuICdUaGUgc2FtZSB0eXBvZ3JhcGh5IHN0eWxlcyBhcmUgZ2VuZXJhdGVkIG11bHRpcGxlIHRpbWVzLiAnICtcbiAgICAgICAgICAkX21hdC10aGVtZS1kdXBsaWNhdGUtd2FybmluZztcbiAgICB9XG4gICAgJHByZXZpb3VzLXR5cG9ncmFwaHk6IGFwcGVuZCgkcHJldmlvdXMtdHlwb2dyYXBoeSwgJHR5cG9ncmFwaHktY29uZmlnKTtcbiAgfVxuXG4gIC8vIENoZWNrIGlmIHRoZSBkZW5zaXR5IGNvbmZpZ3VyYXRpb24gaGFzIGJlZW4gZ2VuZXJhdGVkIGJlZm9yZS5cbiAgQGlmICRkZW5zaXR5LWNvbmZpZyAhPSBudWxsIHtcbiAgICBAaWYgaW5kZXgoJHByZXZpb3VzLWRlbnNpdHksICRkZW5zaXR5LWNvbmZpZykgIT0gbnVsbCB7XG4gICAgICAvLyBPbmx5IHJlcG9ydCBhIHdhcm5pbmcgaWYgZGVuc2l0eSBzdHlsZXMgd291bGQgYmUgZHVwbGljYXRlZCBmb3Igbm9uLWxlZ2FjeSB0aGVtZVxuICAgICAgLy8gZGVmaW5pdGlvbnMuIEZvciBsZWdhY3kgdGhlbWVzLCB3ZSBoYXZlIGNvbXBhdGliaWxpdHkgbG9naWMgdGhhdCBhdm9pZHMgZHVwbGljYXRpb25cbiAgICAgIC8vIG9mIGRlZmF1bHQgZGVuc2l0eSBzdHlsZXMuIFdlIGRvbid0IHdhbnQgdG8gcmVwb3J0IGEgd2FybmluZyBpbiB0aG9zZSBjYXNlcy5cbiAgICAgIEBpZiBfbWF0LWlzLWxlZ2FjeS1jb25zdHJ1Y3RlZC10aGVtZSgkdGhlbWUpIHtcbiAgICAgICAgJGR1cGxpY2F0ZS1sZWdhY3ktZGVuc2l0eTogdHJ1ZTtcbiAgICAgIH1cbiAgICAgIEBlbHNlIGlmIG5vdCAkbWF0LXRoZW1lLWlnbm9yZS1kdXBsaWNhdGlvbi13YXJuaW5ncyB7XG4gICAgICAgIEB3YXJuICdUaGUgc2FtZSBkZW5zaXR5IHN0eWxlcyBhcmUgZ2VuZXJhdGVkIG11bHRpcGxlIHRpbWVzLiAnICtcbiAgICAgICAgICAgJF9tYXQtdGhlbWUtZHVwbGljYXRlLXdhcm5pbmc7XG4gICAgICB9XG4gICAgfVxuICAgICRwcmV2aW91cy1kZW5zaXR5OiBhcHBlbmQoJHByZXZpb3VzLWRlbnNpdHksICRkZW5zaXR5LWNvbmZpZyk7XG4gIH1cblxuICAkX21hdC10aGVtZS1lbWl0dGVkLWNvbG9yOiBtYXAtbWVyZ2UoXG4gICAgICAkX21hdC10aGVtZS1lbWl0dGVkLWNvbG9yLCAoJGlkOiAkcHJldmlvdXMtY29sb3IpKSAhZ2xvYmFsO1xuICAkX21hdC10aGVtZS1lbWl0dGVkLWRlbnNpdHk6IG1hcC1tZXJnZShcbiAgICAgICRfbWF0LXRoZW1lLWVtaXR0ZWQtZGVuc2l0eSwgKCRpZDogJHByZXZpb3VzLWRlbnNpdHkpKSAhZ2xvYmFsO1xuICAkX21hdC10aGVtZS1lbWl0dGVkLXR5cG9ncmFwaHk6IG1hcC1tZXJnZShcbiAgICAgICRfbWF0LXRoZW1lLWVtaXR0ZWQtdHlwb2dyYXBoeSwgKCRpZDogJHByZXZpb3VzLXR5cG9ncmFwaHkpKSAhZ2xvYmFsO1xuXG4gIC8vIE9wdGlvbmFsbHksIGNvbnN1bWVycyBvZiB0aGlzIG1peGluIGNhbiB3cmFwIGNvbnRlbnRzIGluc2lkZSBzbyB0aGF0IG5lc3RlZFxuICAvLyBkdXBsaWNhdGUgc3R5bGUgY2hlY2tzIGRvIG5vdCByZXBvcnQgYW5vdGhlciB3YXJuaW5nLiBlLmcuIGlmIGRldmVsb3BlcnMgaW5jbHVkZVxuICAvLyB0aGUgYGFuZ3VsYXItbWF0ZXJpYWwtdGhlbWVgIG1peGluIHR3aWNlLCBvbmx5IHRoZSB0b3AtbGV2ZWwgZHVwbGljYXRlIHN0eWxlcyBjaGVja1xuICAvLyBzaG91bGQgcmVwb3J0IGEgd2FybmluZy4gTm90IGFsbCBpbmRpdmlkdWFsIGNvbXBvbmVudHMgc2hvdWxkIHJlcG9ydCBhIHdhcm5pbmcgdG9vLlxuICAkb3JpZy1tYXQtdGhlbWUtaWdub3JlLWR1cGxpY2F0aW9uLXdhcm5pbmdzOiAkbWF0LXRoZW1lLWlnbm9yZS1kdXBsaWNhdGlvbi13YXJuaW5ncztcbiAgJG1hdC10aGVtZS1pZ25vcmUtZHVwbGljYXRpb24td2FybmluZ3M6IHRydWUgIWdsb2JhbDtcblxuICAvLyBJZiBkdXBsaWNhdGUgZGVmYXVsdCBkZW5zaXR5IHN0eWxlcyB3b3VsZCBiZSBnZW5lcmF0ZWQgZm9yIGEgbGVnYWN5IGNvbnN0cnVjdGVkIHRoZW1lLFxuICAvLyB3ZSBhZGp1c3QgdGhlIGRlbnNpdHkgZ2VuZXJhdGlvbiBzbyB0aGF0IG5vIGRlbnNpdHkgc3R5bGVzIGFyZSBnZW5lcmF0ZWQgYnkgZGVmYXVsdC5cbiAgLy8gSWYgbm8gZGVmYXVsdCBkZW5zaXR5IHN0eWxlcyBoYXZlIGJlZW4gZ2VuZXJhdGVkIHlldCwgd2UgZW5zdXJlIHRoYXQgdGhlIHN0eWxlc1xuICAvLyBhcmUgZ2VuZXJhdGVkIGF0IHJvb3QuIEZvciBsZWdhY3kgdGhlbWVzIG91ciBnb2FsIGlzIHRvIGdlbmVyYXRlIGRlZmF1bHQgZGVuc2l0eVxuICAvLyBzdHlsZXMgKipvbmNlKiogYW5kIGF0IHJvb3QuIFRoaXMgbWF0Y2hlcyB0aGUgb2xkIGJlaGF2aW9yIHdoZXJlIGRlbnNpdHkgc3R5bGVzIHdlcmVcbiAgLy8gcGFydCBvZiB0aGUgYmFzZSBjb21wb25lbnQgc3R5bGVzICh0aGF0IGRpZCBub3QgdXNlIHZpZXcgZW5jYXBzdWxhdGlvbikuXG4gIC8vIFRPRE86IFJlbW92ZSB0aGlzIGNvbXBhdGliaWxpdHkgbG9naWMgd2hlbiB0aGUgbGVnYWN5IHRoZW1pbmcgQVBJIGlzIHJlbW92ZWQuXG4gICRfbWF0LWRlbnNpdHktZ2VuZXJhdGUtYXQtcm9vdDogX21hdC1pcy1sZWdhY3ktY29uc3RydWN0ZWQtdGhlbWUoJHRoZW1lKSAhZ2xvYmFsO1xuICAkX21hdC1kZW5zaXR5LWdlbmVyYXRlLXN0eWxlczogbm90ICRkdXBsaWNhdGUtbGVnYWN5LWRlbnNpdHkgIWdsb2JhbDtcblxuICBAY29udGVudDtcbiAgJG1hdC10aGVtZS1pZ25vcmUtZHVwbGljYXRpb24td2FybmluZ3M6ICRvcmlnLW1hdC10aGVtZS1pZ25vcmUtZHVwbGljYXRpb24td2FybmluZ3MgIWdsb2JhbDtcblxuICAkX21hdC1kZW5zaXR5LWdlbmVyYXRlLWF0LXJvb3Q6IGZhbHNlICFnbG9iYWw7XG4gICRfbWF0LWRlbnNpdHktZ2VuZXJhdGUtc3R5bGVzOiB0cnVlICFnbG9iYWw7XG59XG5cblxuXG4kbWF0LXJpcHBsZS1jb2xvci1vcGFjaXR5OiAwLjE7XG5cbkBtaXhpbiBtYXQtcmlwcGxlKCkge1xuXG4gIC8vIFRoZSBob3N0IGVsZW1lbnQgb2YgYW4gbWF0LXJpcHBsZSBkaXJlY3RpdmUgc2hvdWxkIGFsd2F5cyBoYXZlIGEgcG9zaXRpb24gb2YgXCJhYnNvbHV0ZVwiIG9yXG4gIC8vIFwicmVsYXRpdmVcIiBzbyB0aGF0IHRoZSByaXBwbGVzIGluc2lkZSBhcmUgY29ycmVjdGx5IHBvc2l0aW9uZWQgcmVsYXRpdmVseSB0byB0aGUgY29udGFpbmVyLlxuICAubWF0LXJpcHBsZSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIC8vIEJ5IGRlZmF1bHQsIGV2ZXJ5IHJpcHBsZSBjb250YWluZXIgc2hvdWxkIGhhdmUgcG9zaXRpb246IHJlbGF0aXZlIGluIGZhdm9yIG9mIGNyZWF0aW5nIGFuXG4gICAgLy8gZWFzeSBBUEkgZm9yIGRldmVsb3BlcnMgdXNpbmcgdGhlIE1hdFJpcHBsZSBkaXJlY3RpdmUuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLy8gUHJvbW90ZSBjb250YWluZXJzIHRoYXQgaGF2ZSByaXBwbGVzIHRvIGEgbmV3IGxheWVyLiBXZSB3YW50IHRvIHRhcmdldCBgOm5vdCg6ZW1wdHkpYCxcbiAgICAvLyBiZWNhdXNlIHdlIGRvbid0IHdhbnQgYWxsIHJpcHBsZSBjb250YWluZXJzIHRvIGhhdmUgdGhlaXIgb3duIGxheWVyIHNpbmNlIHRoZXkncmUgdXNlZCBpbiBhXG4gICAgLy8gbG90IG9mIHBsYWNlcyBhbmQgdGhlIGxheWVyIGlzIG9ubHkgcmVsZXZhbnQgd2hpbGUgYW5pbWF0aW5nLiBOb3RlIHRoYXQgaWRlYWxseSB3ZSdkIHVzZVxuICAgIC8vIHRoZSBgY29udGFpbmAgcHJvcGVydHkgaGVyZSAoc2VlICMxMzE3NSksIGJlY2F1c2UgYDplbXB0eWAgY2FuIGJlIGJyb2tlbiBieSBoYXZpbmcgZXh0cmFcbiAgICAvLyB0ZXh0IGluc2lkZSB0aGUgZWxlbWVudCwgYnV0IGl0IGlzbid0IHZlcnkgd2VsbCBzdXBwb3J0ZWQgeWV0LlxuICAgICY6bm90KDplbXB0eSkge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtcmlwcGxlLm1hdC1yaXBwbGUtdW5ib3VuZGVkIHtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgfVxuXG4gIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5LCB0cmFuc2Zvcm0gMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG5cbiAgICAvLyBJbiBoaWdoIGNvbnRyYXN0IG1vZGUgdGhlIHJpcHBsZSBpcyBvcGFxdWUsIGNhdXNpbmcgaXQgdG8gb2JzdHJ1Y3QgdGhlIGNvbnRlbnQuXG4gICAgQGluY2x1ZGUgY2RrLWhpZ2gtY29udHJhc3QoYWN0aXZlLCBvZmYpIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cbi8qIENvbG9ycyBmb3IgdGhlIHJpcHBsZSBlbGVtZW50cy4qL1xuQG1peGluIG1hdC1yaXBwbGUtY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG4gICRmb3JlZ3JvdW5kLWJhc2U6IG1hcC1nZXQoJGZvcmVncm91bmQsIGJhc2UpO1xuXG4gIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIC8vIElmIHRoZSByaXBwbGUgY29sb3IgaXMgcmVzb2x2ZXMgdG8gYSBjb2xvciAqdHlwZSosIHdlIGNhbiB1c2UgaXQgZGlyZWN0bHksIG90aGVyd2lzZVxuICAgIC8vIChlLmcuIGl0IHJlc29sdmVzIHRvIGEgQ1NTIHZhcmlhYmxlKSB3ZSBmYWxsIGJhY2sgdG8gdXNpbmcgdGhlIGNvbG9yIGFuZCBzZXR0aW5nIGFuIG9wYWNpdHkuXG4gICAgQGlmICh0eXBlLW9mKCRmb3JlZ3JvdW5kLWJhc2UpID09IGNvbG9yKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRmb3JlZ3JvdW5kLWJhc2UsICRtYXQtcmlwcGxlLWNvbG9yLW9wYWNpdHkpO1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZm9yZWdyb3VuZC1iYXNlO1xuICAgICAgb3BhY2l0eTogJG1hdC1yaXBwbGUtY29sb3Itb3BhY2l0eTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1yaXBwbGUtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IF9tYXQtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgX21hdC1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1yaXBwbGUnKSB7XG4gICAgJGNvbG9yOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtcmlwcGxlLWNvbG9yKCRjb2xvcik7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBUaGlzIG1peGluIGVuc3VyZXMgYW4gZWxlbWVudCBzcGFucyB0byBmaWxsIHRoZSBuZWFyZXN0IGFuY2VzdG9yIHdpdGggZGVmaW5lZCBwb3NpdGlvbmluZy5cbkBtaXhpbiBtYXQtZmlsbCB7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG5cbi8vLyBNaXhpbiB0aGF0IHR1cm5zIG9uIHN0cm9uZyBmb2N1cyBpbmRpY2F0b3JzLlxuLy8vXG4vLy8gQGV4YW1wbGVcbi8vLyAgIC5teS1hcHAge1xuLy8vICAgICBAaW5jbHVkZSBtYXQtc3Ryb25nLWZvY3VzLWluZGljYXRvcnMoJGNvbmZpZyk7XG4vLy8gICB9XG5AbWl4aW4gbWF0LXN0cm9uZy1mb2N1cy1pbmRpY2F0b3JzKCRjb25maWc6ICgpKSB7XG4gIC8vIERlZmF1bHQgZm9jdXMgaW5kaWNhdG9yIGNvbmZpZy5cbiAgJGRlZmF1bHQtY29uZmlnOiAoXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgICBib3JkZXItd2lkdGg6IDNweCxcbiAgICBib3JkZXItcmFkaXVzOiA0cHgsXG4gICk7XG5cbiAgLy8gTWVyZ2UgZGVmYXVsdCBjb25maWcgd2l0aCB1c2VyIGNvbmZpZy5cbiAgJGNvbmZpZzogbWFwLW1lcmdlKCRkZWZhdWx0LWNvbmZpZywgJGNvbmZpZyk7XG4gICRib3JkZXItc3R5bGU6IG1hcC1nZXQoJGNvbmZpZywgYm9yZGVyLXN0eWxlKTtcbiAgJGJvcmRlci13aWR0aDogbWFwLWdldCgkY29uZmlnLCBib3JkZXItd2lkdGgpO1xuICAkYm9yZGVyLXJhZGl1czogbWFwLWdldCgkY29uZmlnLCBib3JkZXItcmFkaXVzKTtcblxuICAvLyBCYXNlIHN0eWxlcyBmb3IgZm9jdXMgaW5kaWNhdG9ycy5cbiAgLm1hdC1mb2N1cy1pbmRpY2F0b3I6OmJlZm9yZSB7XG4gICAgQGluY2x1ZGUgbWF0LWZpbGwoKTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGJvcmRlcjogJGJvcmRlci13aWR0aCAkYm9yZGVyLXN0eWxlIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuICB9XG5cbiAgLy8gQnkgZGVmYXVsdCwgYWxsIGZvY3VzIGluZGljYXRvcnMgYXJlIGZsdXNoIHdpdGggdGhlIGJvdW5kaW5nIGJveCBvZiB0aGVpclxuICAvLyBob3N0IGVsZW1lbnQuIEZvciBwYXJ0aWN1bGFyIGVsZW1lbnRzIChsaXN0ZWQgYmVsb3cpLCBkZWZhdWx0IGluc2V0L29mZnNldFxuICAvLyB2YWx1ZXMgYXJlIG5lY2Vzc2FyeSB0byBlbnN1cmUgdGhhdCB0aGUgZm9jdXMgaW5kaWNhdG9yIGlzIHN1ZmZpY2llbnRseVxuICAvLyBjb250cmFzdGl2ZSBhbmQgcmVuZGVycyBhcHByb3ByaWF0ZWx5LlxuXG4gIC5tYXQtZm9jdXMtaW5kaWNhdG9yLm1hdC1mbGF0LWJ1dHRvbjo6YmVmb3JlLFxuICAubWF0LWZvY3VzLWluZGljYXRvci5tYXQtcmFpc2VkLWJ1dHRvbjo6YmVmb3JlLFxuICAubWF0LWZvY3VzLWluZGljYXRvci5tYXQtZmFiOjpiZWZvcmUsXG4gIC5tYXQtZm9jdXMtaW5kaWNhdG9yLm1hdC1taW5pLWZhYjo6YmVmb3JlLFxuICAubWF0LWZvY3VzLWluZGljYXRvci5tYXQtY2hpcDo6YmVmb3JlLFxuICAubWF0LWZvY3VzLWluZGljYXRvci5tYXQtc29ydC1oZWFkZXItY29udGFpbmVyOjpiZWZvcmUge1xuICAgIG1hcmdpbjogLSgkYm9yZGVyLXdpZHRoICsgMnB4KTtcbiAgfVxuXG4gIC5tYXQtZm9jdXMtaW5kaWNhdG9yLm1hdC1zdHJva2VkLWJ1dHRvbjo6YmVmb3JlLFxuICAubWF0LWZvY3VzLWluZGljYXRvci5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6OmJlZm9yZSB7XG4gICAgbWFyZ2luOiAtKCRib3JkZXItd2lkdGggKyAzcHgpO1xuICB9XG5cbiAgLm1hdC1mb2N1cy1pbmRpY2F0b3IubWF0LXRhYi1saW5rOjpiZWZvcmUsXG4gIC5tYXQtZm9jdXMtaW5kaWNhdG9yLm1hdC10YWItbGFiZWw6OmJlZm9yZSB7XG4gICAgbWFyZ2luOiA1cHg7XG4gIH1cblxuICAvLyBSZW5kZXIgdGhlIGZvY3VzIGluZGljYXRvciBvbiBmb2N1cy4gRGVmaW5pbmcgYSBwc2V1ZG8gZWxlbWVudCdzXG4gIC8vIGNvbnRlbnQgd2lsbCBjYXVzZSBpdCB0byByZW5kZXIuXG5cbiAgLy8gQ2hlY2tib3hlcywgcmFkaW9zLCBhbmQgc2xpZGUgdG9nZ2xlcyByZW5kZXIgZm9jdXMgaW5kaWNhdG9ycyB3aGVuIHRoZVxuICAvLyBhc3NvY2lhdGVkIHZpc3VhbGx5LWhpZGRlbiBpbnB1dCBpcyBmb2N1c2VkLlxuICAubWF0LWNoZWNrYm94LWlucHV0OmZvY3VzIH4gLm1hdC1mb2N1cy1pbmRpY2F0b3I6OmJlZm9yZSxcbiAgLm1hdC1yYWRpby1pbnB1dDpmb2N1cyB+IC5tYXQtZm9jdXMtaW5kaWNhdG9yOjpiZWZvcmUsXG4gIC5tYXQtc2xpZGUtdG9nZ2xlLWlucHV0OmZvY3VzIH4gLm1hdC1zbGlkZS10b2dnbGUtdGh1bWItY29udGFpbmVyIC5tYXQtZm9jdXMtaW5kaWNhdG9yOjpiZWZvcmUsXG5cbiAgLy8gRm9yIG9wdGlvbnMsIHJlbmRlciB0aGUgZm9jdXMgaW5kaWNhdG9yIHdoZW4gdGhlIGNsYXNzIC5tYXQtYWN0aXZlXG4gIC8vIGlzIHByZXNlbnQuXG4gIC5tYXQtZm9jdXMtaW5kaWNhdG9yLm1hdC1vcHRpb24ubWF0LWFjdGl2ZTo6YmVmb3JlLFxuXG4gIC8vIEZvciBjYWxlbmRhciBjZWxscywgcmVuZGVyIHRoZSBmb2N1cyBpbmRpY2F0b3Igd2hlbiB0aGUgcGFyZW50IGNlbGwgaXNcbiAgLy8gZm9jdXNlZC5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWNlbGw6Zm9jdXMgLm1hdC1mb2N1cy1pbmRpY2F0b3I6OmJlZm9yZSxcblxuICAvLyBGb3IgYWxsIG90aGVyIGNvbXBvbmVudHMsIHJlbmRlciB0aGUgZm9jdXMgaW5kaWNhdG9yIG9uIGZvY3VzLlxuICAubWF0LWZvY3VzLWluZGljYXRvcjpmb2N1czo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgfVxufVxuXG4vLyBNaXhpbiB0aGF0IGFwcGxpZXMgdGhlIGJvcmRlciBjb2xvciBmb3IgdGhlIGZvY3VzIGluZGljYXRvcnMuXG5AbWl4aW4gX21hdC1zdHJvbmctZm9jdXMtaW5kaWNhdG9ycy1ib3JkZXItY29sb3IoJGNvbG9yKSB7XG4gIC5tYXQtZm9jdXMtaW5kaWNhdG9yOjpiZWZvcmUge1xuICAgIGJvcmRlci1jb2xvcjogJGNvbG9yO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtc3Ryb25nLWZvY3VzLWluZGljYXRvcnMtY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgQGluY2x1ZGUgX21hdC1zdHJvbmctZm9jdXMtaW5kaWNhdG9ycy1ib3JkZXItY29sb3IobWF0LWNvbG9yKG1hcC1nZXQoJGNvbmZpZywgcHJpbWFyeSkpKTtcbn1cblxuLy8vIE1peGluIHRoYXQgc2V0cyB0aGUgY29sb3Igb2YgdGhlIGZvY3VzIGluZGljYXRvcnMuXG4vLy9cbi8vLyBAcGFyYW0ge2NvbG9yfG1hcH0gJHRoZW1lLW9yLWNvbG9yXG4vLy8gICBJZiB0aGVtZSwgZm9jdXMgaW5kaWNhdG9ycyBhcmUgc2V0IHRvIHRoZSBwcmltYXJ5IGNvbG9yIG9mIHRoZSB0aGVtZS4gSWZcbi8vLyAgIGNvbG9yLCBmb2N1cyBpbmRpY2F0b3JzIGFyZSBzZXQgdG8gdGhhdCBjb2xvci5cbi8vL1xuLy8vIEBleGFtcGxlXG4vLy8gICAuZGVtby1kYXJrLXRoZW1lIHtcbi8vLyAgICAgQGluY2x1ZGUgbWF0LXN0cm9uZy1mb2N1cy1pbmRpY2F0b3JzLXRoZW1lKCRkYXJrLXRoZW1lLW1hcCk7XG4vLy8gICB9XG4vLy9cbi8vLyBAZXhhbXBsZVxuLy8vICAgLmRlbW8tcmVkLXRoZW1lIHtcbi8vLyAgICAgQGluY2x1ZGUgbWF0LXN0cm9uZy1mb2N1cy1pbmRpY2F0b3JzLXRoZW1lKCNmMDApO1xuLy8vICAgfVxuLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIG1hdGVyaWFsL3RoZW1lLW1peGluLWFwaSAqL1xuQG1peGluIG1hdC1zdHJvbmctZm9jdXMtaW5kaWNhdG9ycy10aGVtZSgkdGhlbWUtb3ItY29sb3IpIHtcbiAgQGlmIHR5cGUtb2YoJHRoZW1lLW9yLWNvbG9yKSAhPSAnbWFwJyB7XG4gICAgQGluY2x1ZGUgX21hdC1zdHJvbmctZm9jdXMtaW5kaWNhdG9ycy1ib3JkZXItY29sb3IoJHRoZW1lLW9yLWNvbG9yKTtcbiAgfVxuICBAZWxzZSB7XG4gICAgJHRoZW1lOiBfbWF0LWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yKTtcbiAgICBAaW5jbHVkZSBfbWF0LWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LXN0cm9uZy1mb2N1cy1pbmRpY2F0b3JzJykge1xuICAgICAgJGNvbG9yOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgICAgQGluY2x1ZGUgbWF0LXN0cm9uZy1mb2N1cy1pbmRpY2F0b3JzLWNvbG9yKCRjb2xvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIE1peGluIHRoYXQgZW5zdXJlcyBmb2N1cyBpbmRpY2F0b3IgaG9zdCBlbGVtZW50cyBhcmUgcG9zaXRpb25lZCBzbyB0aGF0IHRoZSBmb2N1cyBpbmRpY2F0b3Jcbi8vIHBzZXVkbyBlbGVtZW50IHdpdGhpbiBpcyBwb3NpdGlvbmVkIHJlbGF0aXZlIHRvIHRoZSBob3N0LiBQcml2YXRlIG1peGluIGluY2x1ZGVkIHdpdGhpblxuLy8gYG1hdC1jb3JlYC5cbkBtaXhpbiBfbWF0LXN0cm9uZy1mb2N1cy1pbmRpY2F0b3JzLXBvc2l0aW9uaW5nKCkge1xuICAubWF0LWZvY3VzLWluZGljYXRvciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG59XG5cblxuXG5cbi8vIFV0aWxpdHkgZm9yIGZldGNoaW5nIGEgbmVzdGVkIHZhbHVlIGZyb20gYSB0eXBvZ3JhcGh5IGNvbmZpZy5cbkBmdW5jdGlvbiBfbWF0LWdldC10eXBlLXZhbHVlKCRjb25maWcsICRsZXZlbCwgJG5hbWUpIHtcbiAgQHJldHVybiBtYXAtZ2V0KG1hcC1nZXQoJGNvbmZpZywgJGxldmVsKSwgJG5hbWUpO1xufVxuXG4vLyBHZXRzIHRoZSBmb250IHNpemUgZm9yIGEgbGV2ZWwgaW5zaWRlIGEgdHlwb2dyYXBoeSBjb25maWcuXG5AZnVuY3Rpb24gbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCAkbGV2ZWwpIHtcbiAgQHJldHVybiBfbWF0LWdldC10eXBlLXZhbHVlKCRjb25maWcsICRsZXZlbCwgZm9udC1zaXplKTtcbn1cblxuLy8gR2V0cyB0aGUgbGluZSBoZWlnaHQgZm9yIGEgbGV2ZWwgaW5zaWRlIGEgdHlwb2dyYXBoeSBjb25maWcuXG5AZnVuY3Rpb24gbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsICRsZXZlbCkge1xuICBAcmV0dXJuIF9tYXQtZ2V0LXR5cGUtdmFsdWUoJGNvbmZpZywgJGxldmVsLCBsaW5lLWhlaWdodCk7XG59XG5cbi8vIEdldHMgdGhlIGZvbnQgd2VpZ2h0IGZvciBhIGxldmVsIGluc2lkZSBhIHR5cG9ncmFwaHkgY29uZmlnLlxuQGZ1bmN0aW9uIG1hdC1mb250LXdlaWdodCgkY29uZmlnLCAkbGV2ZWwpIHtcbiAgQHJldHVybiBfbWF0LWdldC10eXBlLXZhbHVlKCRjb25maWcsICRsZXZlbCwgZm9udC13ZWlnaHQpO1xufVxuXG4vLyBHZXRzIHRoZSBsZXR0ZXIgc3BhY2luZyBmb3IgYSBsZXZlbCBpbnNpZGUgYSB0eXBvZ3JhcGh5IGNvbmZpZy5cbkBmdW5jdGlvbiBtYXQtbGV0dGVyLXNwYWNpbmcoJGNvbmZpZywgJGxldmVsKSB7XG4gIEByZXR1cm4gX21hdC1nZXQtdHlwZS12YWx1ZSgkY29uZmlnLCAkbGV2ZWwsIGxldHRlci1zcGFjaW5nKTtcbn1cblxuLy8gR2V0cyB0aGUgZm9udC1mYW1pbHkgZnJvbSBhIHR5cG9ncmFwaHkgY29uZmlnIGFuZCByZW1vdmVzIHRoZSBxdW90ZXMgYXJvdW5kIGl0LlxuQGZ1bmN0aW9uIG1hdC1mb250LWZhbWlseSgkY29uZmlnLCAkbGV2ZWw6IG51bGwpIHtcbiAgJGZvbnQtZmFtaWx5OiBtYXAtZ2V0KCRjb25maWcsIGZvbnQtZmFtaWx5KTtcblxuICBAaWYgJGxldmVsICE9IG51bGwge1xuICAgICRmb250LWZhbWlseTogX21hdC1nZXQtdHlwZS12YWx1ZSgkY29uZmlnLCAkbGV2ZWwsIGZvbnQtZmFtaWx5KTtcbiAgfVxuXG4gIC8vIEd1YXJkIGFnYWluc3QgdW5xdW90aW5nIG5vbi1zdHJpbmcgdmFsdWVzLCBiZWNhdXNlIGl0J3MgZGVwcmVjYXRlZC5cbiAgQHJldHVybiBpZih0eXBlLW9mKCRmb250LWZhbWlseSkgPT0gc3RyaW5nLCB1bnF1b3RlKCRmb250LWZhbWlseSksICRmb250LWZhbWlseSk7XG59XG5cbi8vIE91dHB1dHMgdGhlIHNob3J0aGFuZCBgZm9udGAgQ1NTIHByb3BlcnR5LCBiYXNlZCBvbiBhIHNldCBvZiB0eXBvZ3JhcGh5IHZhbHVlcy4gRmFsbHMgYmFjayB0b1xuLy8gdGhlIGluZGl2aWR1YWwgcHJvcGVydGllcyBpZiBhIHZhbHVlIHRoYXQgaXNuJ3QgYWxsb3dlZCBpbiB0aGUgc2hvcnRoYW5kIGlzIHBhc3NlZCBpbi5cbkBtaXhpbiBtYXQtdHlwb2dyYXBoeS1mb250LXNob3J0aGFuZCgkZm9udC1zaXplLCAkZm9udC13ZWlnaHQsICRsaW5lLWhlaWdodCwgJGZvbnQtZmFtaWx5KSB7XG4gIC8vIElmIGFueSBvZiB0aGUgdmFsdWVzIGFyZSBzZXQgdG8gYGluaGVyaXRgLCB3ZSBjYW4ndCB1c2UgdGhlIHNob3J0aGFuZFxuICAvLyBzbyB3ZSBmYWxsIGJhY2sgdG8gcGFzc2luZyBpbiB0aGUgaW5kaXZpZHVhbCBwcm9wZXJ0aWVzLlxuICBAaWYgKCRmb250LXNpemUgPT0gaW5oZXJpdCBvclxuICAgICAgICRmb250LXdlaWdodCA9PSBpbmhlcml0IG9yXG4gICAgICAgJGxpbmUtaGVpZ2h0ID09IGluaGVyaXQgb3JcbiAgICAgICAkZm9udC1mYW1pbHkgPT0gaW5oZXJpdCBvclxuICAgICAgICRmb250LXNpemUgPT0gbnVsbCBvclxuICAgICAgICRmb250LXdlaWdodCA9PSBudWxsIG9yXG4gICAgICAgJGxpbmUtaGVpZ2h0ID09IG51bGwgb3JcbiAgICAgICAkZm9udC1mYW1pbHkgPT0gbnVsbCkge1xuXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG4gICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICB9XG4gIEBlbHNlIHtcbiAgICAvLyBPdGhlcndpc2UgdXNlIHRoZSBzaG9ydGhhbmQgYGZvbnRgLCBiZWNhdXNlIGl0J3MgdGhlIGxlYXN0IGFtb3VudCBvZiBieXRlcy4gTm90ZVxuICAgIC8vIHRoYXQgd2UgbmVlZCB0byB1c2UgaW50ZXJwb2xhdGlvbiBmb3IgYGZvbnQtc2l6ZS9saW5lLWhlaWdodGAgaW4gb3JkZXIgdG8gcHJldmVudFxuICAgIC8vIFNhc3MgZnJvbSBkaXZpZGluZyB0aGUgdHdvIHZhbHVlcy5cbiAgICBmb250OiAkZm9udC13ZWlnaHQgI3skZm9udC1zaXplfS8jeyRsaW5lLWhlaWdodH0gJGZvbnQtZmFtaWx5O1xuICB9XG59XG5cbi8vIENvbnZlcnRzIGEgdHlwb2dyYXBoeSBsZXZlbCBpbnRvIENTUyBzdHlsZXMuXG5AbWl4aW4gbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsICRsZXZlbCkge1xuICAkZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsICRsZXZlbCk7XG4gICRmb250LXdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsICRsZXZlbCk7XG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsICRsZXZlbCk7XG4gICRmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsICRsZXZlbCk7XG5cbiAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktZm9udC1zaG9ydGhhbmQoJGZvbnQtc2l6ZSwgJGZvbnQtd2VpZ2h0LCAkbGluZS1oZWlnaHQsICRmb250LWZhbWlseSk7XG4gIGxldHRlci1zcGFjaW5nOiBtYXQtbGV0dGVyLXNwYWNpbmcoJGNvbmZpZywgJGxldmVsKTtcbn1cblxuXG5AbWl4aW4gbWF0LW9wdGlvbi1jb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCRjb25maWcsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCRjb25maWcsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCRjb25maWcsIHdhcm4pO1xuXG4gIC5tYXQtb3B0aW9uIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgICY6aG92ZXI6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSxcbiAgICAmOmZvY3VzOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3Zlcik7XG4gICAgfVxuXG4gICAgLy8gSW4gbXVsdGlwbGUgbW9kZSB0aGVyZSBpcyBhIGNoZWNrYm94IHRvIHNob3cgdGhhdCB0aGUgb3B0aW9uIGlzIHNlbGVjdGVkLlxuICAgICYubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1tdWx0aXBsZSk6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGhvdmVyKTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3Zlcik7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICB9XG5cbiAgICAmLm1hdC1vcHRpb24tZGlzYWJsZWQge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaGludC10ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LXByaW1hcnkgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIHRleHQpO1xuICB9XG5cbiAgLm1hdC1hY2NlbnQgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCwgdGV4dCk7XG4gIH1cblxuICAubWF0LXdhcm4gLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIHRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtb3B0aW9uLXR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAubWF0LW9wdGlvbiB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIHN1YmhlYWRpbmctMik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBfbWF0LW9wdGlvbi1kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBtYXQtb3B0aW9uLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiBfbWF0LWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIF9tYXQtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtb3B0aW9uJykge1xuICAgICRjb2xvcjogbWF0LWdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LW9wdGlvbi1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LW9wdGlvbi1kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LW9wdGlvbi10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtb3B0Z3JvdXAtY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1vcHRncm91cC1sYWJlbCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1vcHRncm91cC1kaXNhYmxlZCAubWF0LW9wdGdyb3VwLWxhYmVsIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtb3B0Z3JvdXAtdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gIC5tYXQtb3B0Z3JvdXAtbGFiZWwge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBib2R5LTIpO1xuICB9XG59XG5cbkBtaXhpbiBfbWF0LW9wdGdyb3VwLWRlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIG1hdC1vcHRncm91cC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogX21hdC1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSBfbWF0LWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LW9wdGdyb3VwJykge1xuICAgICRjb2xvcjogbWF0LWdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LW9wdGdyb3VwLWNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtb3B0Z3JvdXAtZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1vcHRncm91cC10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuQG1peGluIG1hdC1wc2V1ZG8tY2hlY2tib3gtY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJGNvbmZpZywgaXMtZGFyayk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCRjb25maWcsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCRjb25maWcsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCRjb25maWcsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcblxuICAvLyBOT1RFKHRyYXZpc2thdWZtYW4pOiBXaGlsZSB0aGUgc3BlYyBjYWxscyBmb3IgdHJhbnNsdWNlbnQgYmxhY2tzL3doaXRlcyBmb3IgZGlzYWJsZWQgY29sb3JzLFxuICAvLyB0aGlzIGRvZXMgbm90IHdvcmsgd2VsbCB3aXRoIGVsZW1lbnRzIGxheWVyZWQgb24gdG9wIG9mIG9uZSBhbm90aGVyLiBUbyBnZXQgYXJvdW5kIHRoaXMgd2VcbiAgLy8gYmxlbmQgdGhlIGNvbG9ycyB0b2dldGhlciBiYXNlZCBvbiB0aGUgYmFzZSBjb2xvciBhbmQgdGhlIHRoZW1lIGJhY2tncm91bmQuXG4gICR3aGl0ZS0zMHBjdC1vcGFjaXR5LW9uLWRhcms6ICM2ODY4Njg7XG4gICRibGFjay0yNnBjdC1vcGFjaXR5LW9uLWxpZ2h0OiAjYjBiMGIwO1xuICAkZGlzYWJsZWQtY29sb3I6IGlmKCRpcy1kYXJrLXRoZW1lLCAkd2hpdGUtMzBwY3Qtb3BhY2l0eS1vbi1kYXJrLCAkYmxhY2stMjZwY3Qtb3BhY2l0eS1vbi1saWdodCk7XG4gICRjb2xvcmVkLWJveC1zZWxlY3RvcjogJy5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsIC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUnO1xuXG4gIC5tYXQtcHNldWRvLWNoZWNrYm94IHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKG1hcC1nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCksIHNlY29uZGFyeS10ZXh0KTtcblxuICAgICY6OmFmdGVyIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGJhY2tncm91bmQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtcHNldWRvLWNoZWNrYm94LWRpc2FibGVkIHtcbiAgICBjb2xvcjogJGRpc2FibGVkLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1wcmltYXJ5IC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4gIC5tYXQtcHJpbWFyeSAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IobWFwLWdldCgkY29uZmlnLCBwcmltYXJ5KSk7XG4gIH1cblxuICAvLyBEZWZhdWx0IHRvIHRoZSBhY2NlbnQgY29sb3IuIE5vdGUgdGhhdCB0aGUgcHNldWRvIGNoZWNrYm94ZXMgYXJlIG1lYW50IHRvIGluaGVyaXQgdGhlXG4gIC8vIHRoZW1lIGZyb20gdGhlaXIgcGFyZW50LCByYXRoZXIgdGhhbiBpbXBsZW1lbnRpbmcgdGhlaXIgb3duIHRoZW1pbmcsIHdoaWNoIGlzIHdoeSB3ZVxuICAvLyBkb24ndCBhdHRhY2ggdG8gdGhlIGBtYXQtKmAgY2xhc3Nlcy4gQWxzbyBub3RlIHRoYXQgdGhpcyBuZWVkcyB0byBiZSBiZWxvdyBgLm1hdC1wcmltYXJ5YFxuICAvLyBpbiBvcmRlciB0byBhbGxvdyBmb3IgdGhlIGNvbG9yIHRvIGJlIG92ZXJ3cml0dGVuIGlmIHRoZSBjaGVja2JveCBpcyBpbnNpZGUgYSBwYXJlbnQgdGhhdFxuICAvLyBoYXMgYG1hdC1hY2NlbnRgIGFuZCBpcyBwbGFjZWQgaW5zaWRlIGFub3RoZXIgcGFyZW50IHRoYXQgaGFzIGBtYXQtcHJpbWFyeWAuXG4gIC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4gIC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUsXG4gIC5tYXQtYWNjZW50IC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4gIC5tYXQtYWNjZW50IC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcihtYXAtZ2V0KCRjb25maWcsIGFjY2VudCkpO1xuICB9XG5cbiAgLm1hdC13YXJuIC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4gIC5tYXQtd2FybiAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IobWFwLWdldCgkY29uZmlnLCB3YXJuKSk7XG4gIH1cblxuICAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICAmLm1hdC1wc2V1ZG8tY2hlY2tib3gtZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZDogJGRpc2FibGVkLWNvbG9yO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXBzZXVkby1jaGVja2JveC10eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBfbWF0LXBzZXVkby1jaGVja2JveC1kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBtYXQtcHNldWRvLWNoZWNrYm94LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiBfbWF0LWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIF9tYXQtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtcHNldWRvLWNoZWNrYm94Jykge1xuICAgICRjb2xvcjogbWF0LWdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LXBzZXVkby1jaGVja2JveC1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXBzZXVkby1jaGVja2JveC1kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LXBzZXVkby1jaGVja2JveC10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFJlcHJlc2VudHMgYSB0eXBvZ3JhcGh5IGxldmVsIGZyb20gdGhlIE1hdGVyaWFsIGRlc2lnbiBzcGVjLlxuQGZ1bmN0aW9uIG1hdC10eXBvZ3JhcGh5LWxldmVsKFxuICAkZm9udC1zaXplLFxuICAkbGluZS1oZWlnaHQ6ICRmb250LXNpemUsXG4gICRmb250LXdlaWdodDogNDAwLFxuICAkZm9udC1mYW1pbHk6IG51bGwsXG4gICRsZXR0ZXItc3BhY2luZzogbm9ybWFsKSB7XG5cbiAgQHJldHVybiAoXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLFxuICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQsXG4gICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodCxcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LFxuICAgIGxldHRlci1zcGFjaW5nOiAkbGV0dGVyLXNwYWNpbmdcbiAgKTtcbn1cblxuLy8gUmVwcmVzZW50cyBhIGNvbGxlY3Rpb24gb2YgdHlwb2dyYXBoeSBsZXZlbHMuXG4vLyBEZWZhdWx0cyBjb21lIGZyb20gaHR0cHM6Ly9tYXRlcmlhbC5pby9ndWlkZWxpbmVzL3N0eWxlL3R5cG9ncmFwaHkuaHRtbFxuLy8gTm90ZTogVGhlIHNwZWMgZG9lc24ndCBtZW50aW9uIGxldHRlciBzcGFjaW5nLiBUaGUgdmFsdWVzIGhlcmUgY29tZSBmcm9tXG4vLyBleWViYWxsaW5nIGl0IHVudGlsIGl0IGxvb2tlZCBleGFjdGx5IGxpa2UgdGhlIHNwZWMgZXhhbXBsZXMuXG5AZnVuY3Rpb24gbWF0LXR5cG9ncmFwaHktY29uZmlnKFxuICAkZm9udC1mYW1pbHk6ICAgJ1JvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmJyxcbiAgJGRpc3BsYXktNDogICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDExMnB4LCAxMTJweCwgMzAwLCAkbGV0dGVyLXNwYWNpbmc6IC0wLjA1ZW0pLFxuICAkZGlzcGxheS0zOiAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoNTZweCwgNTZweCwgNDAwLCAkbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW0pLFxuICAkZGlzcGxheS0yOiAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoNDVweCwgNDhweCwgNDAwLCAkbGV0dGVyLXNwYWNpbmc6IC0wLjAwNWVtKSxcbiAgJGRpc3BsYXktMTogICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDM0cHgsIDQwcHgsIDQwMCksXG4gICRoZWFkbGluZTogICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgyNHB4LCAzMnB4LCA0MDApLFxuICAkdGl0bGU6ICAgICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMjBweCwgMzJweCwgNTAwKSxcbiAgJHN1YmhlYWRpbmctMjogIG1hdC10eXBvZ3JhcGh5LWxldmVsKDE2cHgsIDI4cHgsIDQwMCksXG4gICRzdWJoZWFkaW5nLTE6ICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxNXB4LCAyNHB4LCA0MDApLFxuICAkYm9keS0yOiAgICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMTRweCwgMjRweCwgNTAwKSxcbiAgJGJvZHktMTogICAgICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDE0cHgsIDIwcHgsIDQwMCksXG4gICRjYXB0aW9uOiAgICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxMnB4LCAyMHB4LCA0MDApLFxuICAkYnV0dG9uOiAgICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMTRweCwgMTRweCwgNTAwKSxcbiAgLy8gTGluZS1oZWlnaHQgbXVzdCBiZSB1bml0LWxlc3MgZnJhY3Rpb24gb2YgdGhlIGZvbnQtc2l6ZS5cbiAgJGlucHV0OiAgICAgICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKGluaGVyaXQsIDEuMTI1LCA0MDApXG4pIHtcblxuICAvLyBEZWNsYXJlIGFuIGluaXRpYWwgbWFwIHdpdGggYWxsIG9mIHRoZSBsZXZlbHMuXG4gICRjb25maWc6IChcbiAgICBkaXNwbGF5LTQ6ICAgICAgJGRpc3BsYXktNCxcbiAgICBkaXNwbGF5LTM6ICAgICAgJGRpc3BsYXktMyxcbiAgICBkaXNwbGF5LTI6ICAgICAgJGRpc3BsYXktMixcbiAgICBkaXNwbGF5LTE6ICAgICAgJGRpc3BsYXktMSxcbiAgICBoZWFkbGluZTogICAgICAgJGhlYWRsaW5lLFxuICAgIHRpdGxlOiAgICAgICAgICAkdGl0bGUsXG4gICAgc3ViaGVhZGluZy0yOiAgICRzdWJoZWFkaW5nLTIsXG4gICAgc3ViaGVhZGluZy0xOiAgICRzdWJoZWFkaW5nLTEsXG4gICAgYm9keS0yOiAgICAgICAgICRib2R5LTIsXG4gICAgYm9keS0xOiAgICAgICAgICRib2R5LTEsXG4gICAgY2FwdGlvbjogICAgICAgICRjYXB0aW9uLFxuICAgIGJ1dHRvbjogICAgICAgICAkYnV0dG9uLFxuICAgIGlucHV0OiAgICAgICAgICAkaW5wdXQsXG4gICk7XG5cbiAgLy8gTG9vcCB0aHJvdWdoIHRoZSBsZXZlbHMgYW5kIHNldCB0aGUgYGZvbnQtZmFtaWx5YCBvZiB0aGUgb25lcyB0aGF0IGRvbid0IGhhdmUgb25lIHRvIHRoZSBiYXNlLlxuICAvLyBOb3RlIHRoYXQgU2FzcyBjYW4ndCBtb2RpZnkgbWFwcyBpbiBwbGFjZSwgd2hpY2ggbWVhbnMgdGhhdCB3ZSBuZWVkIHRvIG1lcmdlIGFuZCByZS1hc3NpZ24uXG4gIEBlYWNoICRrZXksICRsZXZlbCBpbiAkY29uZmlnIHtcbiAgICBAaWYgbWFwLWdldCgkbGV2ZWwsIGZvbnQtZmFtaWx5KSA9PSBudWxsIHtcbiAgICAgICRuZXctbGV2ZWw6IG1hcC1tZXJnZSgkbGV2ZWwsIChmb250LWZhbWlseTogJGZvbnQtZmFtaWx5KSk7XG4gICAgICAkY29uZmlnOiBtYXAtbWVyZ2UoJGNvbmZpZywgKCRrZXk6ICRuZXctbGV2ZWwpKTtcbiAgICB9XG4gIH1cblxuICAvLyBBZGQgdGhlIGJhc2UgZm9udCBmYW1pbHkgdG8gdGhlIGNvbmZpZy5cbiAgQHJldHVybiBtYXAtbWVyZ2UoJGNvbmZpZywgKGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHkpKTtcbn1cblxuLy8gQWRkcyB0aGUgYmFzZSB0eXBvZ3JhcGh5IHN0eWxlcywgYmFzZWQgb24gYSBjb25maWcuXG4vKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF0ZXJpYWwvdGhlbWUtbWl4aW4tYXBpICovXG5AbWl4aW4gbWF0LWJhc2UtdHlwb2dyYXBoeSgkY29uZmlnLCAkc2VsZWN0b3I6ICcubWF0LXR5cG9ncmFwaHknKSB7XG4gIC5tYXQtaDEsIC5tYXQtaGVhZGxpbmUsICN7JHNlbGVjdG9yfSBoMSB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGhlYWRsaW5lKTtcbiAgICBtYXJnaW46IDAgMCAxNnB4O1xuICB9XG5cbiAgLm1hdC1oMiwgLm1hdC10aXRsZSwgI3skc2VsZWN0b3J9IGgyIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgdGl0bGUpO1xuICAgIG1hcmdpbjogMCAwIDE2cHg7XG4gIH1cblxuICAubWF0LWgzLCAubWF0LXN1YmhlYWRpbmctMiwgI3skc2VsZWN0b3J9IGgzIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgc3ViaGVhZGluZy0yKTtcbiAgICBtYXJnaW46IDAgMCAxNnB4O1xuICB9XG5cbiAgLm1hdC1oNCwgLm1hdC1zdWJoZWFkaW5nLTEsICN7JHNlbGVjdG9yfSBoNCB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIHN1YmhlYWRpbmctMSk7XG4gICAgbWFyZ2luOiAwIDAgMTZweDtcbiAgfVxuXG4gIC8vIE5vdGU6IHRoZSBzcGVjIGRvZXNuJ3QgaGF2ZSBhbnl0aGluZyB0aGF0IHdvdWxkIGNvcnJlc3BvbmQgdG8gaDUgYW5kIGg2LCBidXQgd2UgYWRkIHRoZXNlIGZvclxuICAvLyBjb25zaXN0ZW5jeS4gVGhlIGZvbnQgc2l6ZXMgY29tZSBmcm9tIHRoZSBDaHJvbWUgdXNlciBhZ2VudCBzdHlsZXMgd2hpY2ggaGF2ZSBoNSBhdCAwLjgzZW1cbiAgLy8gYW5kIGg2IGF0IDAuNjdlbS5cbiAgLm1hdC1oNSwgI3skc2VsZWN0b3J9IGg1IHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1mb250LXNob3J0aGFuZChcbiAgICAgICAvLyBjYWxjIGlzIHVzZWQgaGVyZSB0byBzdXBwb3J0IGNzcyB2YXJpYWJsZXNcbiAgICAgIGNhbGMoI3ttYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSl9ICogMC44MyksXG4gICAgICBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKSxcbiAgICAgIG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBib2R5LTEpLFxuICAgICAgbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJvZHktMSlcbiAgICApO1xuXG4gICAgbWFyZ2luOiAwIDAgMTJweDtcbiAgfVxuXG4gIC5tYXQtaDYsICN7JHNlbGVjdG9yfSBoNiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktZm9udC1zaG9ydGhhbmQoXG4gICAgICAgLy8gY2FsYyBpcyB1c2VkIGhlcmUgdG8gc3VwcG9ydCBjc3MgdmFyaWFibGVzXG4gICAgICBjYWxjKCN7bWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpfSAqIDAuNjcpLFxuICAgICAgbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMSksXG4gICAgICBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgYm9keS0xKSxcbiAgICAgIG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBib2R5LTEpXG4gICAgKTtcblxuICAgIG1hcmdpbjogMCAwIDEycHg7XG4gIH1cblxuICAubWF0LWJvZHktc3Ryb25nLCAubWF0LWJvZHktMiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGJvZHktMik7XG4gIH1cblxuICAubWF0LWJvZHksIC5tYXQtYm9keS0xLCAjeyRzZWxlY3Rvcn0ge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBib2R5LTEpO1xuXG4gICAgcCB7XG4gICAgICBtYXJnaW46IDAgMCAxMnB4O1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc21hbGwsIC5tYXQtY2FwdGlvbiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGNhcHRpb24pO1xuICB9XG5cbiAgLm1hdC1kaXNwbGF5LTQsICN7JHNlbGVjdG9yfSAubWF0LWRpc3BsYXktNCB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGRpc3BsYXktNCk7XG4gICAgbWFyZ2luOiAwIDAgNTZweDtcbiAgfVxuXG4gIC5tYXQtZGlzcGxheS0zLCAjeyRzZWxlY3Rvcn0gLm1hdC1kaXNwbGF5LTMge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBkaXNwbGF5LTMpO1xuICAgIG1hcmdpbjogMCAwIDY0cHg7XG4gIH1cblxuICAubWF0LWRpc3BsYXktMiwgI3skc2VsZWN0b3J9IC5tYXQtZGlzcGxheS0yIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgZGlzcGxheS0yKTtcbiAgICBtYXJnaW46IDAgMCA2NHB4O1xuICB9XG5cbiAgLm1hdC1kaXNwbGF5LTEsICN7JHNlbGVjdG9yfSAubWF0LWRpc3BsYXktMSB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGRpc3BsYXktMSk7XG4gICAgbWFyZ2luOiAwIDAgNjRweDtcbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtYXV0b2NvbXBsZXRlLWNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcblxuICAubWF0LWF1dG9jb21wbGV0ZS1wYW5lbCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oNCwgJGNvbmZpZyk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgIC8vIFNlbGVjdGVkIG9wdGlvbnMgaW4gYXV0b2NvbXBsZXRlcyBzaG91bGQgbm90IGJlIGdyYXksIGJ1dCB3ZVxuICAgIC8vIG9ubHkgd2FudCB0byBvdmVycmlkZSB0aGUgYmFja2dyb3VuZCBmb3Igc2VsZWN0ZWQgb3B0aW9ucyBpZlxuICAgIC8vIHRoZXkgYXJlICpub3QqIGluIGhvdmVyIG9yIGZvY3VzIHN0YXRlLiBUaGlzIGNoYW5nZSBoYXMgdG8gYmVcbiAgICAvLyBtYWRlIGhlcmUgYmVjYXVzZSBiYXNlIG9wdGlvbiBzdHlsZXMgYXJlIHNoYXJlZCBiZXR3ZWVuIHRoZVxuICAgIC8vIGF1dG9jb21wbGV0ZSBhbmQgdGhlIHNlbGVjdC5cbiAgICAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtYWN0aXZlKTpub3QoOmhvdmVyKSB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuXG4gICAgICAmOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1hdXRvY29tcGxldGUtdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gX21hdC1hdXRvY29tcGxldGUtZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gbWF0LWF1dG9jb21wbGV0ZS10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogX21hdC1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSBfbWF0LWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LWF1dG9jb21wbGV0ZScpIHtcbiAgICAkY29sb3I6IG1hdC1nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IG1hdC1nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1hdXRvY29tcGxldGUtY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX21hdC1hdXRvY29tcGxldGUtZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1hdXRvY29tcGxldGUtdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG5cbi8vIFRoaXMgY29udGFpbnMgYWxsIG9mIHRoZSBzdHlsZXMgZm9yIHRoZSBiYWRnZVxuLy8gcmF0aGVyIHRoYW4ganVzdCB0aGUgY29sb3IvdGhlbWUgYmVjYXVzZSBvZlxuLy8gbm8gc3R5bGUgc2hlZXQgc3VwcG9ydCBmb3IgZGlyZWN0aXZlcy5cblxuXG5cblxuXG5cbiRtYXQtYmFkZ2UtZm9udC1zaXplOiAxMnB4O1xuJG1hdC1iYWRnZS1mb250LXdlaWdodDogNjAwO1xuJG1hdC1iYWRnZS1kZWZhdWx0LXNpemU6IDIycHggIWRlZmF1bHQ7XG4kbWF0LWJhZGdlLXNtYWxsLXNpemU6ICRtYXQtYmFkZ2UtZGVmYXVsdC1zaXplIC0gNjtcbiRtYXQtYmFkZ2UtbGFyZ2Utc2l6ZTogJG1hdC1iYWRnZS1kZWZhdWx0LXNpemUgKyA2O1xuXG4vLyBNaXhpbiBmb3IgYnVpbGRpbmcgb2Zmc2V0IGdpdmVuIGRpZmZlcmVudCBzaXplc1xuQG1peGluIF9tYXQtYmFkZ2Utc2l6ZSgkc2l6ZSkge1xuICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIHdpZHRoOiAkc2l6ZTtcbiAgICBoZWlnaHQ6ICRzaXplO1xuICAgIGxpbmUtaGVpZ2h0OiAkc2l6ZTtcbiAgfVxuXG4gICYubWF0LWJhZGdlLWFib3ZlIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgdG9wOiAtJHNpemUgLyAyO1xuICAgIH1cbiAgfVxuXG4gICYubWF0LWJhZGdlLWJlbG93IHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgYm90dG9tOiAtJHNpemUgLyAyO1xuICAgIH1cbiAgfVxuXG4gICYubWF0LWJhZGdlLWJlZm9yZSB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGxlZnQ6IC0kc2l6ZTtcbiAgICB9XG4gIH1cblxuICBbZGlyPSdydGwnXSAmLm1hdC1iYWRnZS1iZWZvcmUge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBsZWZ0OiBhdXRvO1xuICAgICAgcmlnaHQ6IC0kc2l6ZTtcbiAgICB9XG4gIH1cblxuICAmLm1hdC1iYWRnZS1hZnRlciB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIHJpZ2h0OiAtJHNpemU7XG4gICAgfVxuICB9XG5cbiAgW2Rpcj0ncnRsJ10gJi5tYXQtYmFkZ2UtYWZ0ZXIge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICByaWdodDogYXV0bztcbiAgICAgIGxlZnQ6IC0kc2l6ZTtcbiAgICB9XG4gIH1cblxuICAmLm1hdC1iYWRnZS1vdmVybGFwIHtcbiAgICAmLm1hdC1iYWRnZS1iZWZvcmUge1xuICAgICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICAgbGVmdDogLSRzaXplIC8gMjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBbZGlyPSdydGwnXSAmLm1hdC1iYWRnZS1iZWZvcmUge1xuICAgICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICAgbGVmdDogYXV0bztcbiAgICAgICAgcmlnaHQ6IC0kc2l6ZSAvIDI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5tYXQtYmFkZ2UtYWZ0ZXIge1xuICAgICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICAgcmlnaHQ6IC0kc2l6ZSAvIDI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgW2Rpcj0ncnRsJ10gJi5tYXQtYmFkZ2UtYWZ0ZXIge1xuICAgICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIGxlZnQ6IC0kc2l6ZSAvIDI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtYmFkZ2UtY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGFjY2VudDogbWFwLWdldCgkY29uZmlnLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkY29uZmlnLCB3YXJuKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJGNvbmZpZywgcHJpbWFyeSk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIGRlZmF1bHQtY29udHJhc3QpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG5cbiAgICBAaW5jbHVkZSBjZGstaGlnaC1jb250cmFzdChhY3RpdmUsIG9mZikge1xuICAgICAgb3V0bGluZTogc29saWQgMXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICB9XG4gIH1cblxuICAubWF0LWJhZGdlLWFjY2VudCB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1iYWRnZS13YXJuIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkd2FybiwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYmFkZ2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5tYXQtYmFkZ2UtaGlkZGVuIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJhZGdlLWRpc2FibGVkIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgJGFwcC1iYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdiYWNrZ3JvdW5kJyk7XG4gICAgICAkYmFkZ2UtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtYnV0dG9uKTtcblxuICAgICAgLy8gVGhlIGRpc2FibGVkIGNvbG9yIHVzdWFsbHkgaGFzIHNvbWUga2luZCBvZiBvcGFjaXR5LCBidXQgYmVjYXVzZSB0aGUgYmFkZ2UgaXMgb3ZlcmxheWVkXG4gICAgICAvLyBvbiB0b3Agb2Ygc29tZXRoaW5nIGVsc2UsIGl0IHdvbid0IGxvb2sgZ29vZCBpZiBpdCdzIG9wYXF1ZS4gSWYgaXQgaXMgYSBjb2xvciAqdHlwZSosXG4gICAgICAvLyB3ZSBjb252ZXJ0IGl0IGludG8gYSBzb2xpZCBjb2xvciBieSB0YWtpbmcgdGhlIG9wYWNpdHkgZnJvbSB0aGUgcmdiYSB2YWx1ZSBhbmQgdXNpbmdcbiAgICAgIC8vIHRoZSB2YWx1ZSB0byBkZXRlcm1pbmUgdGhlIHBlcmNlbnRhZ2Ugb2YgdGhlIGJhY2tncm91bmQgdG8gcHV0IGludG8gZm9yZWdyb3VuZCB3aGVuXG4gICAgICAvLyBtaXhpbmcgdGhlIGNvbG9ycyB0b2dldGhlci5cbiAgICAgIEBpZiAodHlwZS1vZigkYmFkZ2UtY29sb3IpID09IGNvbG9yIGFuZCB0eXBlLW9mKCRhcHAtYmFja2dyb3VuZCkgPT0gY29sb3IpIHtcbiAgICAgICAgJGJhZGdlLW9wYWNpdHk6IG9wYWNpdHkoJGJhZGdlLWNvbG9yKTtcbiAgICAgICAgYmFja2dyb3VuZDogbWl4KCRhcHAtYmFja2dyb3VuZCwgcmdiYSgkYmFkZ2UtY29sb3IsIDEpLCAoMSAtICRiYWRnZS1vcGFjaXR5KSAqIDEwMCUpO1xuICAgICAgfVxuICAgICAgQGVsc2Uge1xuICAgICAgICBiYWNrZ3JvdW5kOiAkYmFkZ2UtY29sb3I7XG4gICAgICB9XG5cbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNik7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbiAgLm5nLWFuaW1hdGUtZGlzYWJsZWQgLm1hdC1iYWRnZS1jb250ZW50LFxuICAubWF0LWJhZGdlLWNvbnRlbnQuX21hdC1hbmltYXRpb24tbm9vcGFibGUge1xuICAgIHRyYW5zaXRpb246IG5vbmU7XG4gIH1cblxuICAvLyBUaGUgYWN0aXZlIGNsYXNzIGlzIGFkZGVkIGFmdGVyIHRoZSBlbGVtZW50IGlzIGFkZGVkXG4gIC8vIHNvIGl0IGNhbiBhbmltYXRlIHNjYWxlIHRvIGRlZmF1bHRcbiAgLm1hdC1iYWRnZS1jb250ZW50Lm1hdC1iYWRnZS1hY3RpdmUge1xuICAgIC8vIFNjYWxlIHRvIGBub25lYCBpbnN0ZWFkIG9mIGAxYCB0byBhdm9pZCBibHVycnkgdGV4dCBpbiBzb21lIGJyb3dzZXJzLlxuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxuXG4gIC5tYXQtYmFkZ2Utc21hbGwge1xuICAgIEBpbmNsdWRlIF9tYXQtYmFkZ2Utc2l6ZSgkbWF0LWJhZGdlLXNtYWxsLXNpemUpO1xuICB9XG4gIC5tYXQtYmFkZ2UtbWVkaXVtIHtcbiAgICBAaW5jbHVkZSBfbWF0LWJhZGdlLXNpemUoJG1hdC1iYWRnZS1kZWZhdWx0LXNpemUpO1xuICB9XG4gIC5tYXQtYmFkZ2UtbGFyZ2Uge1xuICAgIEBpbmNsdWRlIF9tYXQtYmFkZ2Utc2l6ZSgkbWF0LWJhZGdlLWxhcmdlLXNpemUpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtYmFkZ2UtdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgZm9udC13ZWlnaHQ6ICRtYXQtYmFkZ2UtZm9udC13ZWlnaHQ7XG4gICAgZm9udC1zaXplOiAkbWF0LWJhZGdlLWZvbnQtc2l6ZTtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1iYWRnZS1zbWFsbCAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIC8vIFNldCB0aGUgZm9udCBzaXplIHRvIDc1JSBvZiB0aGUgb3JpZ2luYWwuXG4gICAgZm9udC1zaXplOiAkbWF0LWJhZGdlLWZvbnQtc2l6ZSAqIDAuNzU7XG4gIH1cblxuICAubWF0LWJhZGdlLWxhcmdlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgZm9udC1zaXplOiAkbWF0LWJhZGdlLWZvbnQtc2l6ZSAqIDI7XG4gIH1cbn1cblxuQG1peGluIF9tYXQtYmFkZ2UtZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gbWF0LWJhZGdlLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiBfbWF0LWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIF9tYXQtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtYmFkZ2UnKSB7XG4gICAgJGNvbG9yOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiBtYXQtZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtYmFkZ2UtY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX21hdC1iYWRnZS1kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LWJhZGdlLXR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LWJvdHRvbS1zaGVldC1jb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1ib3R0b20tc2hlZXQtY29udGFpbmVyIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigxNiwgJGNvbmZpZyk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBkaWFsb2cpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtYm90dG9tLXNoZWV0LXR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAubWF0LWJvdHRvbS1zaGVldC1jb250YWluZXIge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBib2R5LTEpO1xuICB9XG59XG5cbkBtaXhpbiBfbWF0LWJvdHRvbS1zaGVldC1kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBtYXQtYm90dG9tLXNoZWV0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiBfbWF0LWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIF9tYXQtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtYm90dG9tLXNoZWV0Jykge1xuICAgICRjb2xvcjogbWF0LWdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LWJvdHRvbS1zaGVldC1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWJvdHRvbS1zaGVldC1kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LWJvdHRvbS1zaGVldC10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cbiRfbWF0LWJ1dHRvbi1yaXBwbGUtb3BhY2l0eTogMC4xO1xuXG4vLyBBcHBsaWVzIGEgZm9jdXMgc3R5bGUgdG8gYW4gbWF0LWJ1dHRvbiBlbGVtZW50IGZvciBlYWNoIG9mIHRoZSBzdXBwb3J0ZWQgcGFsZXR0ZXMuXG5AbWl4aW4gX21hdC1idXR0b24tZm9jdXMtb3ZlcmxheS1jb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkcHJpbWFyeTogbWFwLWdldCgkY29uZmlnLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkY29uZmlnLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkY29uZmlnLCB3YXJuKTtcblxuICAmLm1hdC1wcmltYXJ5IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gIH1cblxuICAmLm1hdC1hY2NlbnQgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICB9XG5cbiAgJi5tYXQtd2FybiAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHdhcm4pO1xuICB9XG5cbiAgJi5tYXQtYnV0dG9uLWRpc2FibGVkIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG59XG5cbi8vIEFwcGxpZXMgdGhlIGJhY2tncm91bmQgY29sb3IgZm9yIGEgcmlwcGxlLiBJZiB0aGUgdmFsdWUgcHJvdmlkZWQgaXMgbm90IGEgU2FzcyBjb2xvcixcbi8vIHdlIGFzc3VtZSB0aGF0IHdlJ3ZlIGJlZW4gZ2l2ZW4gYSBDU1MgdmFyaWFibGUuIFNpbmNlIHdlIGNhbid0IHBlcmZvcm0gYWxwaGEtYmxlbmRpbmdcbi8vIG9uIGEgQ1NTIHZhcmlhYmxlLCB3ZSBpbnN0ZWFkIGFkZCB0aGUgb3BhY2l0eSBkaXJlY3RseSB0byB0aGUgcmlwcGxlIGVsZW1lbnQuXG5AbWl4aW4gX21hdC1idXR0b24tcmlwcGxlLWJhY2tncm91bmQoJHBhbGV0dGUsICRodWUsICRvcGFjaXR5KSB7XG4gICRiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsICRodWUsICRvcGFjaXR5KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XG4gIEBpZiAodHlwZS1vZigkYmFja2dyb3VuZC1jb2xvcikgIT0gY29sb3IpIHtcbiAgICBvcGFjaXR5OiAkb3BhY2l0eTtcbiAgfVxufVxuXG5AbWl4aW4gX21hdC1idXR0b24tcmlwcGxlLWNvbG9yKCR0aGVtZSwgJGh1ZSwgJG9wYWNpdHk6ICRfbWF0LWJ1dHRvbi1yaXBwbGUtb3BhY2l0eSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcblxuICAmLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIEBpbmNsdWRlIF9tYXQtYnV0dG9uLXJpcHBsZS1iYWNrZ3JvdW5kKCRwcmltYXJ5LCAkaHVlLCAkb3BhY2l0eSk7XG4gIH1cblxuICAmLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tcmlwcGxlLWJhY2tncm91bmQoJGFjY2VudCwgJGh1ZSwgJG9wYWNpdHkpO1xuICB9XG5cbiAgJi5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBAaW5jbHVkZSBfbWF0LWJ1dHRvbi1yaXBwbGUtYmFja2dyb3VuZCgkd2FybiwgJGh1ZSwgJG9wYWNpdHkpO1xuICB9XG59XG5cbi8vIEFwcGxpZXMgYSBwcm9wZXJ0eSB0byBhbiBtYXQtYnV0dG9uIGVsZW1lbnQgZm9yIGVhY2ggb2YgdGhlIHN1cHBvcnRlZCBwYWxldHRlcy5cbkBtaXhpbiBfbWF0LWJ1dHRvbi10aGVtZS1wcm9wZXJ0eSgkdGhlbWUsICRwcm9wZXJ0eSwgJGh1ZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAmLm1hdC1wcmltYXJ5IHtcbiAgICAjeyRwcm9wZXJ0eX06IG1hdC1jb2xvcigkcHJpbWFyeSwgJGh1ZSk7XG4gIH1cbiAgJi5tYXQtYWNjZW50IHtcbiAgICAjeyRwcm9wZXJ0eX06IG1hdC1jb2xvcigkYWNjZW50LCAkaHVlKTtcbiAgfVxuICAmLm1hdC13YXJuIHtcbiAgICAjeyRwcm9wZXJ0eX06IG1hdC1jb2xvcigkd2FybiwgJGh1ZSk7XG4gIH1cblxuICAmLm1hdC1wcmltYXJ5LCAmLm1hdC1hY2NlbnQsICYubWF0LXdhcm4sICYubWF0LWJ1dHRvbi1kaXNhYmxlZCB7XG4gICAgJi5tYXQtYnV0dG9uLWRpc2FibGVkIHtcbiAgICAgICRwYWxldHRlOiBpZigkcHJvcGVydHkgPT0gJ2NvbG9yJywgJGZvcmVncm91bmQsICRiYWNrZ3JvdW5kKTtcbiAgICAgICN7JHByb3BlcnR5fTogbWF0LWNvbG9yKCRwYWxldHRlLCBkaXNhYmxlZC1idXR0b24pO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWJ1dHRvbi1jb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkcHJpbWFyeTogbWFwLWdldCgkY29uZmlnLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkY29uZmlnLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkY29uZmlnLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtYnV0dG9uLCAubWF0LWljb24tYnV0dG9uLCAubWF0LXN0cm9rZWQtYnV0dG9uIHtcbiAgICAvLyBCdXR0b25zIHdpdGhvdXQgYSBiYWNrZ3JvdW5kIGNvbG9yIHNob3VsZCBpbmhlcml0IHRoZSBmb250IGNvbG9yLiBUaGlzIGlzIG5lY2Vzc2FyeSB0b1xuICAgIC8vIGVuc3VyZSB0aGF0IHRoZSBidXR0b24gaXMgcmVhZGFibGUgb24gY3VzdG9tIGJhY2tncm91bmQgY29sb3JzLiBJdCdzIHdyb25nIHRvIGFsd2F5cyBhc3N1bWVcbiAgICAvLyB0aGF0IHRob3NlIGJ1dHRvbnMgYXJlIGFsd2F5cyBwbGFjZWQgaW5zaWRlIG9mIGNvbnRhaW5lcnMgd2l0aCB0aGUgZGVmYXVsdCBiYWNrZ3JvdW5kXG4gICAgLy8gY29sb3Igb2YgdGhlIHRoZW1lIChlLmcuIHRoZW1lZCB0b29sYmFycykuXG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cbiAgICBAaW5jbHVkZSBfbWF0LWJ1dHRvbi10aGVtZS1wcm9wZXJ0eSgkY29uZmlnLCAnY29sb3InLCB0ZXh0KTtcbiAgICBAaW5jbHVkZSBfbWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LWNvbG9yKCRjb25maWcpO1xuXG4gICAgLy8gU2V0dXAgdGhlIHJpcHBsZSBjb2xvciB0byBiZSBiYXNlZCBvbiB0aGUgdGV4dCBjb2xvci4gVGhpcyBlbnN1cmVzIHRoYXQgdGhlIHJpcHBsZXNcbiAgICAvLyBhcmUgbWF0Y2hpbmcgd2l0aCB0aGUgY3VycmVudCB0aGVtZSBwYWxldHRlIGFuZCBhcmUgaW4gY29udHJhc3QgdG8gdGhlIGJhY2tncm91bmQgY29sb3JcbiAgICAvLyAoZS5nIGluIHRoZW1lZCB0b29sYmFycykuXG4gICAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICBvcGFjaXR5OiAkX21hdC1idXR0b24tcmlwcGxlLW9wYWNpdHk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZDogbWFwLWdldCgkZm9yZWdyb3VuZCwgYmFzZSk7XG4gIH1cblxuICAvLyBOb3RlOiB0aGlzIG5lZWRzIGEgYml0IGV4dHJhIHNwZWNpZmljaXR5LCBiZWNhdXNlIHdlJ3JlIG5vdCBndWFyYW50ZWVkIHRoZSBpbmNsdXNpb25cbiAgLy8gb3JkZXIgb2YgdGhlIHRoZW1lIHN0eWxlcyBhbmQgdGhlIGJ1dHRvbiByZXNldCBtYXkgZW5kIHVwIHJlc2V0dGluZyB0aGlzIGFzIHdlbGwuXG4gIC5tYXQtc3Ryb2tlZC1idXR0b246bm90KC5tYXQtYnV0dG9uLWRpc2FibGVkKSB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG5cbiAgLm1hdC1mbGF0LWJ1dHRvbiwgLm1hdC1yYWlzZWQtYnV0dG9uLCAubWF0LWZhYiwgLm1hdC1taW5pLWZhYiB7XG4gICAgLy8gRGVmYXVsdCBmb250IGFuZCBiYWNrZ3JvdW5kIGNvbG9yIHdoZW4gbm90IHVzaW5nIGFueSBjb2xvciBwYWxldHRlLlxuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgcmFpc2VkLWJ1dHRvbik7XG5cbiAgICBAaW5jbHVkZSBfbWF0LWJ1dHRvbi10aGVtZS1wcm9wZXJ0eSgkY29uZmlnLCAnY29sb3InLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICBAaW5jbHVkZSBfbWF0LWJ1dHRvbi10aGVtZS1wcm9wZXJ0eSgkY29uZmlnLCAnYmFja2dyb3VuZC1jb2xvcicsIGRlZmF1bHQpO1xuICAgIEBpbmNsdWRlIF9tYXQtYnV0dG9uLXJpcHBsZS1jb2xvcigkY29uZmlnLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgfVxuXG4gIC5tYXQtc3Ryb2tlZC1idXR0b24sIC5tYXQtZmxhdC1idXR0b24ge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDAsICRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigyLCAkY29uZmlnKTtcblxuICAgICY6bm90KC5tYXQtYnV0dG9uLWRpc2FibGVkKTphY3RpdmUge1xuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oOCwgJGNvbmZpZyk7XG4gICAgfVxuXG4gICAgJi5tYXQtYnV0dG9uLWRpc2FibGVkIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDAsICRjb25maWcpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZmFiLCAubWF0LW1pbmktZmFiIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbig2LCAkY29uZmlnKTtcblxuICAgICY6bm90KC5tYXQtYnV0dG9uLWRpc2FibGVkKTphY3RpdmUge1xuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMTIsICRjb25maWcpO1xuICAgIH1cblxuICAgICYubWF0LWJ1dHRvbi1kaXNhYmxlZCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigwLCAkY29uZmlnKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1idXR0b24tdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gIC5tYXQtYnV0dG9uLCAubWF0LXJhaXNlZC1idXR0b24sIC5tYXQtaWNvbi1idXR0b24sIC5tYXQtc3Ryb2tlZC1idXR0b24sXG4gIC5tYXQtZmxhdC1idXR0b24sIC5tYXQtZmFiLCAubWF0LW1pbmktZmFiIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBidXR0b24pO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBidXR0b24pO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYnV0dG9uKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIF9tYXQtYnV0dG9uLWRlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIG1hdC1idXR0b24tdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IF9tYXQtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgX21hdC1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1idXR0b24nKSB7XG4gICAgJGNvbG9yOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiBtYXQtZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtYnV0dG9uLWNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtYnV0dG9uLWRlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtYnV0dG9uLXR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG4vLyBUYWtlbiBmcm9tIG1hdC1kZW5zaXR5IHdpdGggc21hbGwgbW9kaWZpY2F0aW9ucyB0byBub3QgcmVseSBvbiB0aGUgbmV3IFNhc3MgbW9kdWxlXG4vLyBzeXN0ZW0sIGFuZCB0byBzdXBwb3J0IGFyYml0cmFyeSBwcm9wZXJ0aWVzIGluIGEgZGVuc2l0eSBjb25maWd1cmF0aW9uLlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL21hdGVyaWFsLWNvbXBvbmVudHMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvYmxvYi9tYXN0ZXIvcGFja2FnZXMvbWRjLWRlbnNpdHlcblxuJF9tYXQtZGVuc2l0eS1pbnRlcnZhbDogNHB4ICFkZWZhdWx0O1xuJF9tYXQtZGVuc2l0eS1taW5pbXVtLXNjYWxlOiBtaW5pbXVtICFkZWZhdWx0O1xuJF9tYXQtZGVuc2l0eS1tYXhpbXVtLXNjYWxlOiBtYXhpbXVtICFkZWZhdWx0O1xuJF9tYXQtZGVuc2l0eS1zdXBwb3J0ZWQtc2NhbGVzOiAoZGVmYXVsdCwgbWluaW11bSwgbWF4aW11bSkgIWRlZmF1bHQ7XG4kX21hdC1kZW5zaXR5LWRlZmF1bHQtc2NhbGU6IDAgIWRlZmF1bHQ7XG5cbi8vIFdoZXRoZXIgZGVuc2l0eSBzaG91bGQgYmUgZ2VuZXJhdGVkIGF0IHJvb3QuIFRoaXMgd2lsbCBiZSB0ZW1wb3JhcmlseSBzZXQgdG8gYHRydWVgXG4vLyB3aGVuZXZlciBkZW5zaXR5IHN0eWxlcyBmb3IgbGVnYWN5IHRoZW1lcyBhcmUgZ2VuZXJhdGVkLlxuJF9tYXQtZGVuc2l0eS1nZW5lcmF0ZS1hdC1yb290OiBmYWxzZTtcbi8vIFdoZXRoZXIgZGVuc2l0eSBzdHlsZXMgc2hvdWxkIGJlIGdlbmVyYXRlZC4gVGhpcyB3aWxsIGJlIHRlbXBvcmFyaWx5IHNldCB0byBgZmFsc2VgIGlmXG4vLyBkdXBsaWNhdGUgZGVuc2l0eSBzdHlsZXMgZm9yIGEgbGVnYWN5IHRoZW1lIHdvdWxkIGJlIGdlbmVyYXRlZC4gRm9yIGxlZ2FjeSB0aGVtZXMsXG4vLyB3ZSBhbHdheXMgZ2VuZXJhdGUgdGhlIGRlZmF1bHQgZGVuc2l0eSAqKm9ubHkgb25jZSoqIGF0IHJvb3QuXG4kX21hdC1kZW5zaXR5LWdlbmVyYXRlLXN0eWxlczogdHJ1ZTtcblxuLy8gTWl4aW4gdGhhdCBjYW4gYmUgdXNlZCB0byB3cmFwIGRlbnNpdHkgc3R5bGVzIG9mIGdpdmVuIGNvbXBvbmVudHMuIFRoZSBtaXhpbiB3aWxsXG4vLyBtb3ZlIHRoZSBkZW5zaXR5IHN0eWxlcyB0byByb290IGlmIHRoZSBgJF9tYXQtZGVuc2l0eS1nZW5lcmF0ZS1hdC1yb290YCBnbG9iYWwgdmFyaWFibGVcbi8vIGlzIHNldC4gSWYgYCRfbWF0LWRlbnNpdHktZ2VuZXJhdGUtc3R5bGVzYCBpcyBzZXQgdG8gYGZhbHNlYCwgZ2VuZXJhdGlvbiBvZiBkZW5zaXR5XG4vLyBzdHlsZXMgd3JhcHBlZCBpbiB0aGlzIG1peGluIGlzIHNraXBwZWQuIFRoaXMgbWl4aW4gZXhpc3RzIHRvIGltcHJvdmUgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbi8vIG9mIHRoZSBuZXcgdGhlbWluZyBBUEkgd2hlcmUgZGVuc2l0eSBzdHlsZXMgYXJlIGluY2x1ZGVkIGFzIHBhcnQgb2YgdGhlbWVzLiBQcmV2aW91c2x5LFxuLy8gZGVuc2l0eSBzdHlsZXMgb2YgY29tcG9uZW50cyB3ZXJlIHBhcnQgb2YgdGhlaXIgYmFzZSBzdHlsZXMuIFdpdGggdGhlIG5ldyBBUEksIHRoZXkgYXJlXG4vLyBwYXJ0IG9mIHRoZSB0aGVtaW5nIHN5c3RlbS4gVGhlIGA8Li4+LXRoZW1lYCBtaXhpbnMgZ2VuZXJhdGUgZGVuc2l0eSBieSBkZWZhdWx0IHVubGVzc1xuLy8gdGhlIGRlbnNpdHkgY29uZmlndXJhdGlvbiBpcyBleHBsaWNpdGx5IHNwZWNpZmllZCBhcyBwZXIgbmV3IEFQSS4gVGhpcyBtZWFucywgdGhhdCBwcm9qZWN0c1xuLy8gdXNpbmcgYDwuLj4tdGhlbWVgIG1peGlucyBmb3Igc2VwYXJhdGUgdGhlbWVzIChsaWtlIGAuZGFyay10aGVtZWApIHdpbGwgY2F1c2UgZHVwbGljYXRlXG4vLyBkZW5zaXR5IHN0eWxlcy4gVGhpcyBpcyBicmVha2luZyBhcyBpdCBpbmNyZWFzZXMgc3BlY2lmaWNpdHkgb2YgZGVuc2l0eSBzdHlsZXMuIFRoaXMgbWl4aW5cbi8vIHByb3ZpZGVzIGFuIEFQSSB0byBjb250cm9sIGdlbmVyYXRpb24gb2YgZGVuc2l0eSBzdHlsZXMgc28gdGhhdCB3ZSBjYW4gZW5zdXJlIHRoZXkgYXJlIG9ubHlcbi8vIGNyZWF0ZWQgKm9uY2UqIGFuZCBhdCByb290LlxuQG1peGluIF9tYXQtZGVuc2l0eS1sZWdhY3ktY29tcGF0aWJpbGl0eSgpIHtcbiAgQGlmICRfbWF0LWRlbnNpdHktZ2VuZXJhdGUtc3R5bGVzIGFuZCAkX21hdC1kZW5zaXR5LWdlbmVyYXRlLWF0LXJvb3Qge1xuICAgIEBhdC1yb290IHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxuICBAZWxzZSBpZiAkX21hdC1kZW5zaXR5LWdlbmVyYXRlLXN0eWxlcyB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQGZ1bmN0aW9uIF9tYXQtZGVuc2l0eS1wcm9wLXZhbHVlKCRkZW5zaXR5LWNvbmZpZywgJGRlbnNpdHktc2NhbGUsICRwcm9wZXJ0eS1uYW1lKSB7XG4gIEBpZiAodHlwZS1vZigkZGVuc2l0eS1zY2FsZSkgPT0gJ3N0cmluZycgYW5kXG4gICAgICBpbmRleCgkbGlzdDogJF9tYXQtZGVuc2l0eS1zdXBwb3J0ZWQtc2NhbGVzLCAkdmFsdWU6ICRkZW5zaXR5LXNjYWxlKSA9PSBudWxsKSB7XG4gICAgQGVycm9yICdtYXQtZGVuc2l0eTogU3VwcG9ydGVkIGRlbnNpdHkgc2NhbGVzICN7JF9tYXQtZGVuc2l0eS1zdXBwb3J0ZWQtc2NhbGVzfSwgJyAgK1xuICAgICAgJ2J1dCByZWNlaXZlZCAjeyRkZW5zaXR5LXNjYWxlfS4nO1xuICB9XG5cbiAgJHZhbHVlOiBudWxsO1xuICAkcHJvcGVydHktc2NhbGUtbWFwOiBtYXAtZ2V0KCRkZW5zaXR5LWNvbmZpZywgJHByb3BlcnR5LW5hbWUpO1xuXG4gIEBpZiBtYXAtaGFzLWtleSgkcHJvcGVydHktc2NhbGUtbWFwLCAkZGVuc2l0eS1zY2FsZSkge1xuICAgICR2YWx1ZTogbWFwLWdldCgkcHJvcGVydHktc2NhbGUtbWFwLCAkZGVuc2l0eS1zY2FsZSk7XG4gIH1cbiAgQGVsc2Uge1xuICAgICR2YWx1ZTogbWFwLWdldCgkcHJvcGVydHktc2NhbGUtbWFwLCBkZWZhdWx0KSArICRkZW5zaXR5LXNjYWxlICogJF9tYXQtZGVuc2l0eS1pbnRlcnZhbDtcbiAgfVxuXG4gICRtaW4tdmFsdWU6IG1hcC1nZXQoJHByb3BlcnR5LXNjYWxlLW1hcCwgJF9tYXQtZGVuc2l0eS1taW5pbXVtLXNjYWxlKTtcbiAgJG1heC12YWx1ZTogbWFwLWdldCgkcHJvcGVydHktc2NhbGUtbWFwLCAkX21hdC1kZW5zaXR5LW1heGltdW0tc2NhbGUpO1xuXG4gIEBpZiAoJHZhbHVlIDwgJG1pbi12YWx1ZSBvciAkdmFsdWUgPiAkbWF4LXZhbHVlKSB7XG4gICAgQGVycm9yICdtYXQtZGVuc2l0eTogI3skcHJvcGVydHktbmFtZX0gbXVzdCBiZSBiZXR3ZWVuICN7JG1pbi12YWx1ZX0gYW5kICcgK1xuICAgICAgJyN7JG1heC12YWx1ZX0gKGluY2x1c2l2ZSksIGJ1dCByZWNlaXZlZCAjeyR2YWx1ZX0uJztcbiAgfVxuXG4gIEByZXR1cm4gJHZhbHVlO1xufVxuXG4kbWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhcmQtaGVpZ2h0OiA0OHB4ICFkZWZhdWx0O1xuLy8gTWluaW11bSBoZWlnaHQgZm9yIGhpZ2hlc3QgZGVuc2l0eSBjYW4gdmFyeSBiYXNlZCBvbiB0aGUgY29udGVudCB0aGF0IGRldmVsb3BlcnNcbi8vIHByb2plY3QgaW50byBidXR0b24tdG9nZ2xlJ3MuIFdlIHVzZSBhIG1pbmltdW0gb2YgYDI0cHhgIHRob3VnaCBiZWNhdXNlIGNvbW1vbmx5XG4vLyBpY29ucyBvciB0ZXh0IGFyZSBkaXNwbGF5ZWQuIEljb25zIGJ5IGRlZmF1bHQgaGF2ZSBhIHNpemUgb2YgYDI0cHhgLlxuJG1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYXJkLW1pbmltdW0taGVpZ2h0OiAyNHB4ICFkZWZhdWx0O1xuJG1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYXJkLW1heGltdW0taGVpZ2h0OiAkbWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhcmQtaGVpZ2h0ICFkZWZhdWx0O1xuXG4kbWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhcmQtZGVuc2l0eS1jb25maWc6IChcbiAgaGVpZ2h0OiAoXG4gICAgZGVmYXVsdDogJG1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYXJkLWhlaWdodCxcbiAgICBtYXhpbXVtOiAkbWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhcmQtbWF4aW11bS1oZWlnaHQsXG4gICAgbWluaW11bTogJG1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYXJkLW1pbmltdW0taGVpZ2h0LFxuICApXG4pICFkZWZhdWx0O1xuXG5cbkBtaXhpbiBtYXQtYnV0dG9uLXRvZ2dsZS1jb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG4gICRkaXZpZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFsb25lLFxuICAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDIsICRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCxcbiAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG5cbiAgICAubWF0LWJ1dHRvbi10b2dnbGUtZm9jdXMtb3ZlcmxheSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGZvY3VzZWQtYnV0dG9uKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcblxuICAgIC5tYXQtYnV0dG9uLXRvZ2dsZS1mb2N1cy1vdmVybGF5IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZm9jdXNlZC1idXR0b24sIDEpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZSArIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCAkZGl2aWRlci1jb2xvcjtcbiAgfVxuXG4gIFtkaXI9J3J0bCddIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZSArIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggJGRpdmlkZXItY29sb3I7XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZC5tYXQtYnV0dG9uLXRvZ2dsZS12ZXJ0aWNhbCB7XG4gICAgLm1hdC1idXR0b24tdG9nZ2xlICsgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgICAgYm9yZGVyLXRvcDogc29saWQgMXB4ICRkaXZpZGVyLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIHNlbGVjdGVkLWJ1dHRvbik7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuXG4gICAgJi5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1kaXNhYmxlZCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtYnV0dG9uKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGRpc2FibGVkLWJ1dHRvbi10b2dnbGUpO1xuXG4gICAgJi5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgfVxuXG4gICAgJi5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgc2VsZWN0ZWQtZGlzYWJsZWQtYnV0dG9uKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkLFxuICAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggJGRpdmlkZXItY29sb3I7XG4gIH1cbn1cblxuQG1peGluIG1hdC1idXR0b24tdG9nZ2xlLXR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cbn1cblxuQG1peGluIF9tYXQtYnV0dG9uLXRvZ2dsZS1kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGRlbnNpdHktc2NhbGU6IG1hdC1nZXQtZGVuc2l0eS1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRzdGFuZGFyZC1oZWlnaHQ6IF9tYXQtZGVuc2l0eS1wcm9wLXZhbHVlKFxuICAgICAgJG1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYXJkLWRlbnNpdHktY29uZmlnLCAkZGVuc2l0eS1zY2FsZSwgaGVpZ2h0KTtcblxuICBAaW5jbHVkZSBfbWF0LWRlbnNpdHktbGVnYWN5LWNvbXBhdGliaWxpdHkoKSB7XG4gICAgLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1idXR0b24tdG9nZ2xlLWxhYmVsLWNvbnRlbnQge1xuICAgICAgbGluZS1oZWlnaHQ6ICRzdGFuZGFyZC1oZWlnaHQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtYnV0dG9uLXRvZ2dsZS10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogX21hdC1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSBfbWF0LWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LWJ1dHRvbi10b2dnbGUnKSB7XG4gICAgJGNvbG9yOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiBtYXQtZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtYnV0dG9uLXRvZ2dsZS1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWJ1dHRvbi10b2dnbGUtZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1idXR0b24tdG9nZ2xlLXR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtY2FyZC1jb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1jYXJkIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigxLCAkY29uZmlnKTtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgLy8gTmVlZHMgZXh0cmEgc3BlY2lmaWNpdHkgdG8gYmUgYWJsZSB0byBvdmVycmlkZSB0aGUgZWxldmF0aW9uIHNlbGVjdG9ycy5cbiAgICAmLm1hdC1jYXJkLWZsYXQge1xuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMCwgJGNvbmZpZyk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1jYXJkLXR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAubWF0LWNhcmQge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LWNhcmQtdGl0bGUge1xuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgaGVhZGxpbmUpO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgdGl0bGUpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgdGl0bGUpO1xuICB9XG5cbiAgLm1hdC1jYXJkLXN1YnRpdGxlLFxuICAubWF0LWNhcmQtY29udGVudCB7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuQG1peGluIF9tYXQtY2FyZC1kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBtYXQtY2FyZC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogX21hdC1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSBfbWF0LWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LWNhcmQnKSB7XG4gICAgJGNvbG9yOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiBtYXQtZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtY2FyZC1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWNhcmQtZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1jYXJkLXR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuQG1peGluIG1hdC1jaGVja2JveC1jb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkY29uZmlnLCBpcy1kYXJrKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJGNvbmZpZywgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJGNvbmZpZywgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJGNvbmZpZywgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcblxuXG4gIC8vIFRoZSBjb2xvciBvZiB0aGUgY2hlY2tib3gncyBjaGVja21hcmsgLyBtaXhlZG1hcmsuXG4gICRjaGVja2JveC1tYXJrLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGJhY2tncm91bmQpO1xuXG4gIC8vIE5PVEUodHJhdmlza2F1Zm1hbik6IFdoaWxlIHRoZSBzcGVjIGNhbGxzIGZvciB0cmFuc2x1Y2VudCBibGFja3Mvd2hpdGVzIGZvciBkaXNhYmxlZCBjb2xvcnMsXG4gIC8vIHRoaXMgZG9lcyBub3Qgd29yayB3ZWxsIHdpdGggZWxlbWVudHMgbGF5ZXJlZCBvbiB0b3Agb2Ygb25lIGFub3RoZXIuIFRvIGdldCBhcm91bmQgdGhpcyB3ZVxuICAvLyBibGVuZCB0aGUgY29sb3JzIHRvZ2V0aGVyIGJhc2VkIG9uIHRoZSBiYXNlIGNvbG9yIGFuZCB0aGUgdGhlbWUgYmFja2dyb3VuZC5cbiAgJHdoaXRlLTMwcGN0LW9wYWNpdHktb24tZGFyazogIzY4Njg2ODtcbiAgJGJsYWNrLTI2cGN0LW9wYWNpdHktb24tbGlnaHQ6ICNiMGIwYjA7XG4gICRkaXNhYmxlZC1jb2xvcjogaWYoJGlzLWRhcmstdGhlbWUsICR3aGl0ZS0zMHBjdC1vcGFjaXR5LW9uLWRhcmssICRibGFjay0yNnBjdC1vcGFjaXR5LW9uLWxpZ2h0KTtcblxuICAubWF0LWNoZWNrYm94LWZyYW1lIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1jaGVja2JveC1jaGVja21hcmsge1xuICAgIGZpbGw6ICRjaGVja2JveC1tYXJrLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1jaGVja2JveC1jaGVja21hcmstcGF0aCB7XG4gICAgLy8gIWltcG9ydGFudCBpcyBuZWVkZWQgaGVyZSBiZWNhdXNlIGEgc3Ryb2tlIG11c3QgYmUgc2V0IGFzIGFuXG4gICAgLy8gYXR0cmlidXRlIG9uIHRoZSBTVkcgaW4gb3JkZXIgZm9yIGxpbmUgYW5pbWF0aW9uIHRvIHdvcmsgcHJvcGVybHkuXG4gICAgc3Ryb2tlOiAkY2hlY2tib3gtbWFyay1jb2xvciAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1hdC1jaGVja2JveC1taXhlZG1hcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjaGVja2JveC1tYXJrLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLCAubWF0LWNoZWNrYm94LWNoZWNrZWQge1xuICAgICYubWF0LXByaW1hcnkgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNoZWNrYm94LWRpc2FibGVkIHtcbiAgICAmLm1hdC1jaGVja2JveC1jaGVja2VkLFxuICAgICYubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUge1xuICAgICAgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRpc2FibGVkLWNvbG9yO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6bm90KC5tYXQtY2hlY2tib3gtY2hlY2tlZCkge1xuICAgICAgLm1hdC1jaGVja2JveC1mcmFtZSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJGRpc2FibGVkLWNvbG9yO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtY2hlY2tib3gtbGFiZWwge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFN3aXRjaCB0aGlzIHRvIGEgc29saWQgY29sb3Igc2luY2Ugd2UncmUgdXNpbmcgYG9wYWNpdHlgXG4gIC8vIHRvIGNvbnRyb2wgaG93IG9wYXF1ZSB0aGUgcmlwcGxlIHNob3VsZCBiZS5cbiAgLm1hdC1jaGVja2JveCAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KG1hcC1nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCksIGJhc2UpO1xuICB9XG5cbiAgLm1hdC1jaGVja2JveC1jaGVja2VkOm5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKSxcbiAgLm1hdC1jaGVja2JveDphY3RpdmU6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpIHtcbiAgICAmLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtY2hlY2tib3gtdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gIC5tYXQtY2hlY2tib3gge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAvLyBUT0RPKGthcmEpOiBSZW1vdmUgdGhpcyBzdHlsZSB3aGVuIGZpeGluZyB2ZXJ0aWNhbCBiYXNlbGluZVxuICAubWF0LWNoZWNrYm94LWxheW91dCAubWF0LWNoZWNrYm94LWxhYmVsIHtcbiAgICBsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGJvZHktMik7XG4gIH1cbn1cblxuQG1peGluIF9tYXQtY2hlY2tib3gtZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gbWF0LWNoZWNrYm94LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiBfbWF0LWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIF9tYXQtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtY2hlY2tib3gnKSB7XG4gICAgJGNvbG9yOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiBtYXQtZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtY2hlY2tib3gtY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX21hdC1jaGVja2JveC1kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LWNoZWNrYm94LXR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG4kbWF0LWNoaXAtcmVtb3ZlLWZvbnQtc2l6ZTogMThweDtcblxuQG1peGluIF9tYXQtY2hpcC1lbGVtZW50LWNvbG9yKCRmb3JlZ3JvdW5kLCAkYmFja2dyb3VuZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZDtcbiAgY29sb3I6ICRmb3JlZ3JvdW5kO1xuXG4gIC5tYXQtY2hpcC1yZW1vdmUge1xuICAgIGNvbG9yOiAkZm9yZWdyb3VuZDtcbiAgICBvcGFjaXR5OiAwLjQ7XG4gIH1cbn1cblxuXG4vLyBBcHBsaWVzIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIGZvciBhIHJpcHBsZSBlbGVtZW50LlxuLy8gSWYgdGhlIGNvbG9yIHZhbHVlIHByb3ZpZGVkIGlzIG5vdCBhIFNhc3MgY29sb3IsXG4vLyB3ZSBhc3N1bWUgdGhhdCB3ZSd2ZSBiZWVuIGdpdmVuIGEgQ1NTIHZhcmlhYmxlLlxuLy8gU2luY2Ugd2UgY2FuJ3QgcGVyZm9ybSBhbHBoYS1ibGVuZGluZyBvbiBhIENTUyB2YXJpYWJsZSxcbi8vIHdlIGluc3RlYWQgYWRkIHRoZSBvcGFjaXR5IGRpcmVjdGx5IHRvIHRoZSByaXBwbGUgZWxlbWVudC5cbkBtaXhpbiBfbWF0LWNoaXBzLXJpcHBsZS1iYWNrZ3JvdW5kKCRwYWxldHRlLCAkZGVmYXVsdC1jb250cmFzdCwgJG9wYWNpdHkpIHtcbiAgJGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSwgJGRlZmF1bHQtY29udHJhc3QsICRvcGFjaXR5KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XG4gIEBpZiAodHlwZS1vZigkYmFja2dyb3VuZC1jb2xvcikgIT0gY29sb3IpIHtcbiAgICBvcGFjaXR5OiAkb3BhY2l0eTtcbiAgfVxufVxuXG5AbWl4aW4gX21hdC1jaGlwLXRoZW1lLWNvbG9yKCRwYWxldHRlKSB7XG4gIEBpbmNsdWRlIF9tYXQtY2hpcC1lbGVtZW50LWNvbG9yKG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCksIG1hdC1jb2xvcigkcGFsZXR0ZSkpO1xuXG4gIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIEBpbmNsdWRlIF9tYXQtY2hpcHMtcmlwcGxlLWJhY2tncm91bmQoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QsIDAuMSk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1jaGlwcy1jb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkY29uZmlnLCBpcy1kYXJrKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJGNvbmZpZywgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJGNvbmZpZywgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJGNvbmZpZywgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcblxuICAkdW5zZWxlY3RlZC1iYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIHVuc2VsZWN0ZWQtY2hpcCk7XG4gICR1bnNlbGVjdGVkLWZvcmVncm91bmQ6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwIHtcbiAgICBAaW5jbHVkZSBfbWF0LWNoaXAtZWxlbWVudC1jb2xvcigkdW5zZWxlY3RlZC1mb3JlZ3JvdW5kLCAkdW5zZWxlY3RlZC1iYWNrZ3JvdW5kKTtcblxuICAgICY6bm90KC5tYXQtY2hpcC1kaXNhYmxlZCkge1xuICAgICAgJjphY3RpdmUge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigzLCAkY29uZmlnKTtcbiAgICAgIH1cblxuICAgICAgLm1hdC1jaGlwLXJlbW92ZTpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNTQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5tYXQtY2hpcC1kaXNhYmxlZCB7XG4gICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgfVxuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZDogbWFwLWdldCgkZm9yZWdyb3VuZCwgYmFzZSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkIHtcbiAgICAmLm1hdC1wcmltYXJ5IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtY2hpcC10aGVtZS1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWNoaXAtdGhlbWUtY29sb3IoJHdhcm4pO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWNoaXAtdGhlbWUtY29sb3IoJGFjY2VudCk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtY2hpcHMtdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gIC5tYXQtY2hpcCB7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMik7XG4gICAgZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuXG4gICAgLm1hdC1jaGlwLXRyYWlsaW5nLWljb24ubWF0LWljb24sXG4gICAgLm1hdC1jaGlwLXJlbW92ZS5tYXQtaWNvbiB7XG4gICAgICBmb250LXNpemU6ICRtYXQtY2hpcC1yZW1vdmUtZm9udC1zaXplO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gX21hdC1jaGlwcy1kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBtYXQtY2hpcHMtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IF9tYXQtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgX21hdC1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1jaGlwcycpIHtcbiAgICAkY29sb3I6IG1hdC1nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IG1hdC1nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1jaGlwcy1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWNoaXBzLWRlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtY2hpcHMtdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtZGl2aWRlci1jb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWRpdmlkZXIge1xuICAgIGJvcmRlci10b3AtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWRpdmlkZXItdmVydGljYWwge1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWRpdmlkZXItdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gX21hdC1kaXZpZGVyLWRlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIG1hdC1kaXZpZGVyLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiBfbWF0LWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIF9tYXQtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtZGl2aWRlcicpIHtcbiAgICAkY29sb3I6IG1hdC1nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IG1hdC1nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1kaXZpZGVyLWNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtZGl2aWRlci1kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LWRpdmlkZXItdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LXRhYmxlLWNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LXRhYmxlIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdjYXJkJyk7XG4gIH1cblxuICAubWF0LXRhYmxlIHRoZWFkLCAubWF0LXRhYmxlIHRib2R5LCAubWF0LXRhYmxlIHRmb290LFxuICBtYXQtaGVhZGVyLXJvdywgbWF0LXJvdywgbWF0LWZvb3Rlci1yb3csXG4gIFttYXQtaGVhZGVyLXJvd10sIFttYXQtcm93XSwgW21hdC1mb290ZXItcm93XSxcbiAgLm1hdC10YWJsZS1zdGlja3kge1xuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIH1cblxuICBtYXQtcm93LCBtYXQtaGVhZGVyLXJvdywgbWF0LWZvb3Rlci1yb3csXG4gIHRoLm1hdC1oZWFkZXItY2VsbCwgdGQubWF0LWNlbGwsIHRkLm1hdC1mb290ZXItY2VsbCB7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtaGVhZGVyLWNlbGwge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtY2VsbCwgLm1hdC1mb290ZXItY2VsbCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC10YWJsZS10eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgLm1hdC10YWJsZSB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtaGVhZGVyLWNlbGwge1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICBmb250LXdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMik7XG4gIH1cblxuICAubWF0LWNlbGwsIC5tYXQtZm9vdGVyLWNlbGwge1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICB9XG59XG5cbkBtaXhpbiBfbWF0LXRhYmxlLWRlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIG1hdC10YWJsZS10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogX21hdC1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSBfbWF0LWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LXRhYmxlJykge1xuICAgICRjb2xvcjogbWF0LWdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LXRhYmxlLWNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGFibGUtZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC10YWJsZS10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuXG4kbWF0LWRhdGVwaWNrZXItc2VsZWN0ZWQtdG9kYXktYm94LXNoYWRvdy13aWR0aDogMXB4O1xuJG1hdC1kYXRlcGlja2VyLXNlbGVjdGVkLWZhZGUtYW1vdW50OiAwLjY7XG4kbWF0LWRhdGVwaWNrZXItcmFuZ2UtZmFkZS1hbW91bnQ6IDAuMjtcbiRtYXQtZGF0ZXBpY2tlci10b2RheS1mYWRlLWFtb3VudDogMC4yO1xuJG1hdC1jYWxlbmRhci1ib2R5LWZvbnQtc2l6ZTogMTNweCAhZGVmYXVsdDtcbiRtYXQtY2FsZW5kYXItd2Vla2RheS10YWJsZS1mb250LXNpemU6IDExcHggIWRlZmF1bHQ7XG5cbkBtaXhpbiBfbWF0LWRhdGVwaWNrZXItY29sb3IoJHBhbGV0dGUpIHtcbiAgQGluY2x1ZGUgbWF0LWRhdGUtcmFuZ2UtY29sb3JzKFxuICAgIG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdCwgJG1hdC1kYXRlcGlja2VyLXJhbmdlLWZhZGUtYW1vdW50KSk7XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkID4gLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgICAkYmFja2dyb3VuZDogbWF0LWNvbG9yKCRwYWxldHRlKTtcblxuICAgIEBpZiAodHlwZS1vZigkYmFja2dyb3VuZCkgPT0gY29sb3IpIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGZhZGUtb3V0KCRiYWNrZ3JvdW5kLCAkbWF0LWRhdGVwaWNrZXItc2VsZWN0ZWQtZmFkZS1hbW91bnQpO1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICAvLyBJZiB3ZSBjb3VsZG4ndCByZXNvbHZlIHRvIGJhY2tncm91bmQgdG8gYSBjb2xvciAoZS5nLiBpdCdzIGEgQ1NTIHZhcmlhYmxlKSxcbiAgICAgIC8vIGZhbGwgYmFjayB0byBmYWRpbmcgdGhlIGNvbnRlbnQgb3V0IHZpYSBgb3BhY2l0eWAuXG4gICAgICBvcGFjaXR5OiAkbWF0LWRhdGVwaWNrZXItdG9kYXktZmFkZS1hbW91bnQ7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAkbWF0LWRhdGVwaWNrZXItc2VsZWN0ZWQtdG9kYXktYm94LXNoYWRvdy13aWR0aFxuICAgICAgICAgICAgICAgIG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCk7XG4gIH1cbn1cblxuLy8gVXRpbGl0eSBtaXhpbiB0byB0YXJnZXQgY2VsbHMgdGhhdCBhcmVuJ3Qgc2VsZWN0ZWQuIFVzZWQgdG8gbWFrZSBzZWxlY3RvciBlYXNpZXIgdG8gZm9sbG93LlxuQG1peGluIF9tYXQtZGF0ZXBpY2tlci11bnNlbGVjdGVkLWNlbGwge1xuICAmOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWRhdGVwaWNrZXItY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkZGlzYWJsZWQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG5cbiAgLm1hdC1jYWxlbmRhci1hcnJvdyB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBpY29uKTtcbiAgfVxuXG4gIC8vIFRoZSBwcmV2L25leHQgYnV0dG9ucyBuZWVkIGEgYml0IG1vcmUgc3BlY2lmaWNpdHkgdG9cbiAgLy8gYXZvaWQgYmVpbmcgb3ZlcndyaXR0ZW4gYnkgdGhlIC5tYXQtaWNvbi1idXR0b24uXG4gIC5tYXQtZGF0ZXBpY2tlci10b2dnbGUsXG4gIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50IC5tYXQtY2FsZW5kYXItbmV4dC1idXR0b24sXG4gIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50IC5tYXQtY2FsZW5kYXItcHJldmlvdXMtYnV0dG9uIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBpY29uKTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXItZGl2aWRlcjo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktbGFiZWwge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQsXG4gIC5tYXQtZGF0ZS1yYW5nZS1pbnB1dC1zZXBhcmF0b3Ige1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQgPiAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50IHtcbiAgICBAaW5jbHVkZSBfbWF0LWRhdGVwaWNrZXItdW5zZWxlY3RlZC1jZWxsIHtcbiAgICAgIGNvbG9yOiAkZGlzYWJsZWQtY29sb3I7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZGF0ZS1yYW5nZS1pbnB1dC1zZXBhcmF0b3Ige1xuICAgIGNvbG9yOiAkZGlzYWJsZWQtY29sb3I7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktY2VsbDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkKTpob3ZlcixcbiAgLmNkay1rZXlib2FyZC1mb2N1c2VkIC5tYXQtY2FsZW5kYXItYm9keS1hY3RpdmUsXG4gIC5jZGstcHJvZ3JhbS1mb2N1c2VkIC5tYXQtY2FsZW5kYXItYm9keS1hY3RpdmUge1xuICAgICYgPiAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtZGF0ZXBpY2tlci11bnNlbGVjdGVkLWNlbGwge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGhvdmVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktaW4tcHJldmlldyB7XG4gICAgJGRpdmlkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG5cbiAgICBAaWYgdHlwZS1vZigkZGl2aWRlci1jb2xvcikgPT0gY29sb3Ige1xuICAgICAgLy8gVGhlIGRpdmlkZXIgY29sb3IgaXMgc2V0IHVuZGVyIHRoZSBhc3N1bXB0aW9uIHRoYXQgaXQnbGwgYmUgdXNlZFxuICAgICAgLy8gZm9yIGEgc29saWQgYm9yZGVyLCBidXQgYmVjYXVzZSB3ZSdyZSB1c2luZyBhIGRhc2hlZCBib3JkZXIgZm9yIHRoZVxuICAgICAgLy8gcHJldmlldyByYW5nZSwgd2UgbmVlZCB0byBidW1wIGl0cyBvcGFjaXR5IHRvIGVuc3VyZSB0aGF0IGl0J3MgdmlzaWJsZS5cbiAgICAgIGNvbG9yOiByZ2JhKCRkaXZpZGVyLWNvbG9yLCBtaW4ob3BhY2l0eSgkZGl2aWRlci1jb2xvcikgKiAyLCAxKSk7XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgIGNvbG9yOiAkZGl2aWRlci1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktdG9kYXkge1xuICAgIEBpbmNsdWRlIF9tYXQtZGF0ZXBpY2tlci11bnNlbGVjdGVkLWNlbGwge1xuICAgICAgLy8gTm90ZTogdGhvdWdoIGl0J3Mgbm90IHRleHQsIHRoZSBib3JkZXIgaXMgYSBoaW50IGFib3V0IHRoZSBmYWN0IHRoYXQgdGhpcyBpcyB0b2RheSdzIGRhdGUsXG4gICAgICAvLyBzbyB3ZSB1c2UgdGhlIGhpbnQgY29sb3IuXG4gICAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaGludC10ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQgPiAubWF0LWNhbGVuZGFyLWJvZHktdG9kYXkge1xuICAgIEBpbmNsdWRlIF9tYXQtZGF0ZXBpY2tlci11bnNlbGVjdGVkLWNlbGwge1xuICAgICAgJGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG5cbiAgICAgIEBpZiAodHlwZS1vZigkY29sb3IpID09IGNvbG9yKSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogZmFkZS1vdXQoJGNvbG9yLCAkbWF0LWRhdGVwaWNrZXItdG9kYXktZmFkZS1hbW91bnQpO1xuICAgICAgfVxuICAgICAgQGVsc2Uge1xuICAgICAgICAvLyBJZiB0aGUgY29sb3IgZGlkbid0IHJlc29sdmUgdG8gYSBjb2xvciB2YWx1ZSwgYnV0IHNvbWV0aGluZyBsaWtlIGEgQ1NTIHZhcmlhYmxlLCB3ZSBjYW4ndFxuICAgICAgICAvLyBmYWRlIGl0IG91dCBzbyB3ZSBmYWxsIGJhY2sgdG8gcmVkdWNpbmcgdGhlIGVsZW1lbnQgb3BhY2l0eS4gTm90ZSB0aGF0IHdlIGRvbid0IHVzZSB0aGVcbiAgICAgICAgLy8gJG1hdC1kYXRlcGlja2VyLXRvZGF5LWZhZGUtYW1vdW50LCBiZWNhdXNlIGhpbnQgdGV4dCB1c3VhbGx5IGhhcyBzb21lIG9wYWNpdHkgYXBwbGllZFxuICAgICAgICAvLyB0byBpdCBhbHJlYWR5IGFuZCB3ZSBkb24ndCB3YW50IHRoZW0gdG8gc3RhY2sgb24gdG9wIG9mIGVhY2ggb3RoZXIuXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBAaW5jbHVkZSBfbWF0LWRhdGVwaWNrZXItY29sb3IobWFwLWdldCgkY29uZmlnLCBwcmltYXJ5KSk7XG5cbiAgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDQsICRjb25maWcpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgQGluY2x1ZGUgX21hdC1kYXRlcGlja2VyLWNvbG9yKG1hcC1nZXQoJGNvbmZpZywgYWNjZW50KSk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWRhdGVwaWNrZXItY29sb3IobWFwLWdldCgkY29uZmlnLCB3YXJuKSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQtdG91Y2gge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDAsICRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1kYXRlcGlja2VyLXRvZ2dsZS1hY3RpdmUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IobWFwLWdldCgkY29uZmlnLCBwcmltYXJ5KSwgdGV4dCk7XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcihtYXAtZ2V0KCRjb25maWcsIGFjY2VudCksIHRleHQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcihtYXAtZ2V0KCRjb25maWcsIHdhcm4pLCB0ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LWRhdGUtcmFuZ2UtaW5wdXQtaW5uZXJbZGlzYWJsZWRdIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWRhdGVwaWNrZXItdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gIC5tYXQtY2FsZW5kYXIge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHkge1xuICAgIGZvbnQtc2l6ZTogJG1hdC1jYWxlbmRhci1ib2R5LWZvbnQtc2l6ZTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1sYWJlbCxcbiAgLm1hdC1jYWxlbmRhci1wZXJpb2QtYnV0dG9uIHtcbiAgICBmb250OiB7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJ1dHRvbik7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBidXR0b24pO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVyIHRoIHtcbiAgICBmb250OiB7XG4gICAgICBzaXplOiAkbWF0LWNhbGVuZGFyLXdlZWtkYXktdGFibGUtZm9udC1zaXplO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1kYXRlLXJhbmdlLWNvbG9ycyhcbiAgJHJhbmdlLWNvbG9yLFxuICAkY29tcGFyaXNvbi1jb2xvcjogcmdiYSgjZjlhYjAwLCAkbWF0LWRhdGVwaWNrZXItcmFuZ2UtZmFkZS1hbW91bnQpLFxuICAkb3ZlcmxhcC1jb2xvcjogI2E4ZGFiNSxcbiAgJG92ZXJsYXAtc2VsZWN0ZWQtY29sb3I6IGRhcmtlbigkb3ZlcmxhcC1jb2xvciwgMzAlKSkge1xuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1pbi1yYW5nZTo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kOiAkcmFuZ2UtY29sb3I7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwsXG4gIC5tYXQtY2FsZW5kYXItYm9keS1pbi1jb21wYXJpc29uLXJhbmdlOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQ6ICRjb21wYXJpc29uLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24tYnJpZGdlLXN0YXJ0OjpiZWZvcmUsXG4gIFtkaXI9J3J0bCddIC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWJyaWRnZS1lbmQ6OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkcmFuZ2UtY29sb3IgNTAlLCAkY29tcGFyaXNvbi1jb2xvciA1MCUpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24tYnJpZGdlLWVuZDo6YmVmb3JlLFxuICBbZGlyPSdydGwnXSAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1icmlkZ2Utc3RhcnQ6OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICRyYW5nZS1jb2xvciA1MCUsICRjb21wYXJpc29uLWNvbG9yIDUwJSk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktaW4tcmFuZ2UgPiAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwsXG4gIC5tYXQtY2FsZW5kYXItYm9keS1pbi1jb21wYXJpc29uLXJhbmdlLm1hdC1jYWxlbmRhci1ib2R5LWluLXJhbmdlOjphZnRlciB7XG4gICAgYmFja2dyb3VuZDogJG92ZXJsYXAtY29sb3I7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQsXG4gIC5tYXQtY2FsZW5kYXItYm9keS1pbi1jb21wYXJpc29uLXJhbmdlID4gLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kOiAkb3ZlcmxhcC1zZWxlY3RlZC1jb2xvcjtcbiAgfVxufVxuXG5AbWl4aW4gX21hdC1kYXRlcGlja2VyLWRlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIG1hdC1kYXRlcGlja2VyLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiBfbWF0LWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIF9tYXQtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtZGF0ZXBpY2tlcicpIHtcbiAgICAkY29sb3I6IG1hdC1nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IG1hdC1nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1kYXRlcGlja2VyLWNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtZGF0ZXBpY2tlci1kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LWRhdGVwaWNrZXItdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1kaWFsb2ctY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMjQsICRjb25maWcpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZGlhbG9nKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWRpYWxvZy10eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgLm1hdC1kaWFsb2ctdGl0bGUge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCB0aXRsZSk7XG4gIH1cbn1cblxuQG1peGluIF9tYXQtZGlhbG9nLWRlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIG1hdC1kaWFsb2ctdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IF9tYXQtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgX21hdC1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1kaWFsb2cnKSB7XG4gICAgJGNvbG9yOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiBtYXQtZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtZGlhbG9nLWNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtZGlhbG9nLWRlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtZGlhbG9nLXR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG4vLyBEZWZhdWx0IG1pbmltdW0gYW5kIG1heGltdW0gaGVpZ2h0IGZvciBjb2xsYXBzZWQgcGFuZWwgaGVhZGVycy5cbiRtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1jb2xsYXBzZWQtaGVpZ2h0OiA0OHB4ICFkZWZhdWx0O1xuJG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWNvbGxhcHNlZC1taW5pbXVtLWhlaWdodDogMzZweCAhZGVmYXVsdDtcbiRtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1jb2xsYXBzZWQtbWF4aW11bS1oZWlnaHQ6XG4gICAgJG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWNvbGxhcHNlZC1oZWlnaHQgIWRlZmF1bHQ7XG5cbi8vIERlZmF1bHQgbWluaW11bSBhbmQgbWF4aW11bSBoZWlnaHQgZm9yIGV4cGFuZGVkIHBhbmVsIGhlYWRlcnMuXG4kbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZXhwYW5kZWQtaGVpZ2h0OiA2NHB4ICFkZWZhdWx0O1xuJG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWV4cGFuZGVkLW1pbmltdW0taGVpZ2h0OiA0OHB4ICFkZWZhdWx0O1xuJG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWV4cGFuZGVkLW1heGltdW0taGVpZ2h0OlxuICAgICRtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1leHBhbmRlZC1oZWlnaHQgIWRlZmF1bHQ7XG5cbi8vIERlbnNpdHkgY29uZmlndXJhdGlvbiBmb3IgdGhlIGV4cGFuc2lvbiBwYW5lbC4gQ2FwdHVyZXMgdGhlXG4vLyBoZWlnaHQgZm9yIGJvdGggZXhwYW5kZWQgYW5kIGNvbGxhcHNlZCBwYW5lbCBoZWFkZXJzLlxuJG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlbnNpdHktY29uZmlnOiAoXG4gIGNvbGxhcHNlZC1oZWlnaHQ6IChcbiAgICBkZWZhdWx0OiAkbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItY29sbGFwc2VkLWhlaWdodCxcbiAgICBtYXhpbXVtOiAkbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItY29sbGFwc2VkLW1heGltdW0taGVpZ2h0LFxuICAgIG1pbmltdW06ICRtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1jb2xsYXBzZWQtbWluaW11bS1oZWlnaHQsXG4gICksXG4gIGV4cGFuZGVkLWhlaWdodDogKFxuICAgIGRlZmF1bHQ6ICRtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1leHBhbmRlZC1oZWlnaHQsXG4gICAgbWF4aW11bTogJG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWV4cGFuZGVkLW1heGltdW0taGVpZ2h0LFxuICAgIG1pbmltdW06ICRtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1leHBhbmRlZC1taW5pbXVtLWhlaWdodCxcbiAgKVxuKSAhZGVmYXVsdDtcblxuLy8gTm90ZTogS2VlcCB0aGlzIGluIHN5bmMgd2l0aCB0aGUgYW5pbWF0aW9uIHRpbWluZyBmb3IgdGhlIHRvZ2dsZSBpbmRpY2F0b3Jcbi8vIGFuZCBib2R5IGV4cGFuc2lvbi4gVGhlc2UgYXJlIGFuaW1hdGVkIHVzaW5nIEFuZ3VsYXIgYW5pbWF0aW9ucy5cbiRtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10cmFuc2l0aW9uOiAyMjVtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuXG5cbkBtaXhpbiBtYXQtZXhwYW5zaW9uLXBhbmVsLWNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMiwgJGNvbmZpZyk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtYWN0aW9uLXJvdyB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgICAmIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5jZGsta2V5Ym9hcmQtZm9jdXNlZCxcbiAgICAmIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5jZGstcHJvZ3JhbS1mb2N1c2VkLFxuICAgICY6bm90KC5tYXQtZXhwYW5kZWQpIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcjpob3ZlciB7XG4gICAgICAmOm5vdChbYXJpYS1kaXNhYmxlZD0ndHJ1ZSddKSB7XG4gICAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIERpc2FibGUgdGhlIGhvdmVyIG9uIHRvdWNoIGRldmljZXMgc2luY2UgaXQgY2FuIGFwcGVhciBsaWtlIGl0IGlzIHN0dWNrLiBXZSBjYW4ndCB1c2VcbiAgLy8gYEBtZWRpYSAoaG92ZXIpYCBhYm92ZSwgYmVjYXVzZSB0aGUgZGVza3RvcCBzdXBwb3J0IGJyb3dzZXIgc3VwcG9ydCBpc24ndCBncmVhdC5cbiAgQG1lZGlhIChob3Zlcjogbm9uZSkge1xuICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdCgubWF0LWV4cGFuZGVkKTpub3QoW2FyaWEtZGlzYWJsZWQ9J3RydWUnXSlcbiAgICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24sXG4gIC5tYXQtZXhwYW5zaW9uLWluZGljYXRvcjo6YWZ0ZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlclthcmlhLWRpc2FibGVkPSd0cnVlJ10ge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLWJ1dHRvbik7XG5cbiAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUsXG4gICAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWV4cGFuc2lvbi1wYW5lbC10eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBzdWJoZWFkaW5nLTEpO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBzdWJoZWFkaW5nLTEpO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgc3ViaGVhZGluZy0xKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1jb250ZW50IHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgYm9keS0xKTtcbiAgfVxufVxuXG5AbWl4aW4gX21hdC1leHBhbnNpb24tcGFuZWwtZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRkZW5zaXR5LXNjYWxlOiBtYXQtZ2V0LWRlbnNpdHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkZXhwYW5kZWQtaGVpZ2h0OiBfbWF0LWRlbnNpdHktcHJvcC12YWx1ZShcbiAgICAgICAgJG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlbnNpdHktY29uZmlnLCAkZGVuc2l0eS1zY2FsZSwgZXhwYW5kZWQtaGVpZ2h0KTtcbiAgJGNvbGxhcHNlZC1oZWlnaHQ6IF9tYXQtZGVuc2l0eS1wcm9wLXZhbHVlKFxuICAgICAgJG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlbnNpdHktY29uZmlnLCAkZGVuc2l0eS1zY2FsZSwgY29sbGFwc2VkLWhlaWdodCk7XG5cbiAgQGluY2x1ZGUgX21hdC1kZW5zaXR5LWxlZ2FjeS1jb21wYXRpYmlsaXR5KCkge1xuICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XG4gICAgICBoZWlnaHQ6ICRjb2xsYXBzZWQtaGVpZ2h0O1xuXG4gICAgICAmLm1hdC1leHBhbmRlZCB7XG4gICAgICAgIGhlaWdodDogJGV4cGFuZGVkLWhlaWdodDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1leHBhbnNpb24tcGFuZWwtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IF9tYXQtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgX21hdC1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1leHBhbnNpb24tcGFuZWwnKSB7XG4gICAgJGNvbG9yOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiBtYXQtZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtZXhwYW5zaW9uLXBhbmVsLWNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtZXhwYW5zaW9uLXBhbmVsLWRlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtZXhwYW5zaW9uLXBhbmVsLXR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cbi8vIFRoaXMgbWl4aW4gd2lsbCBlbnN1cmUgdGhhdCBsaW5lcyB0aGF0IG92ZXJmbG93IHRoZSBjb250YWluZXIgd2lsbCBoaWRlIHRoZSBvdmVyZmxvdyBhbmRcbi8vIHRydW5jYXRlIG5lYXRseSB3aXRoIGFuIGVsbGlwc2lzLlxuQG1peGluIG1hdC10cnVuY2F0ZS1saW5lKCkge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLy8gTWl4aW4gdG8gcHJvdmlkZSBhbGwgbWF0LWxpbmUgc3R5bGVzLCBjaGFuZ2luZyBzZWNvbmRhcnkgZm9udCBzaXplIGJhc2VkIG9uIHdoZXRoZXIgdGhlIGxpc3Rcbi8vIGlzIGluIGRlbnNlIG1vZGUuXG5AbWl4aW4gbWF0LWxpbmUtYmFzZSgkc2Vjb25kYXJ5LWZvbnQtc2l6ZSkge1xuICAubWF0LWxpbmUge1xuICAgIEBpbmNsdWRlIG1hdC10cnVuY2F0ZS1saW5lKCk7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgIC8vIGFsbCBsaW5lcyBidXQgdGhlIHRvcCBsaW5lIHNob3VsZCBoYXZlIHNtYWxsZXIgdGV4dFxuICAgICY6bnRoLWNoaWxkKG4rMikge1xuICAgICAgZm9udC1zaXplOiAkc2Vjb25kYXJ5LWZvbnQtc2l6ZTtcbiAgICB9XG4gIH1cbn1cblxuLy8gVGhpcyBtaXhpbiBub3JtYWxpemVzIGRlZmF1bHQgZWxlbWVudCBzdHlsZXMsIGUuZy4gZm9udCB3ZWlnaHQgZm9yIGhlYWRpbmcgdGV4dC5cbkBtaXhpbiBtYXQtbm9ybWFsaXplLXRleHQoKSB7XG4gICYgPiAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgfVxufVxuXG4vLyBUaGlzIG1peGluIHByb3ZpZGVzIGJhc2Ugc3R5bGVzIGZvciB0aGUgd3JhcHBlciBhcm91bmQgbWF0LWxpbmUgZWxlbWVudHMgaW4gYSBsaXN0LlxuQG1peGluIG1hdC1saW5lLXdyYXBwZXItYmFzZSgpIHtcbiAgQGluY2x1ZGUgbWF0LW5vcm1hbGl6ZS10ZXh0KCk7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleDogYXV0bztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAvLyBNdXN0IHJlbW92ZSB3cmFwcGVyIHdoZW4gbGluZXMgYXJlIGVtcHR5IG9yIGl0IHRha2VzIHVwIGhvcml6b250YWxcbiAgLy8gc3BhY2UgYW5kIHB1c2hlcyBvdGhlciBlbGVtZW50cyB0byB0aGUgcmlnaHQuXG4gICY6ZW1wdHkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuXG5cbi8vIEluY2x1ZGUgdGhpcyBlbXB0eSBtaXhpbiBmb3IgY29uc2lzdGVuY3kgd2l0aCB0aGUgb3RoZXIgY29tcG9uZW50cy5cbkBtaXhpbiBtYXQtZ3JpZC1saXN0LWNvbG9yKCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBtYXQtZ3JpZC1saXN0LXR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAubWF0LWdyaWQtdGlsZS1oZWFkZXIsXG4gIC5tYXQtZ3JpZC10aWxlLWZvb3RlciB7XG4gICAgQGluY2x1ZGUgbWF0LWxpbmUtYmFzZShtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pKTtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgfVxufVxuXG5AbWl4aW4gX21hdC1ncmlkLWxpc3QtZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gbWF0LWdyaWQtbGlzdC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogX21hdC1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSBfbWF0LWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LWdyaWQtbGlzdCcpIHtcbiAgICAkY29sb3I6IG1hdC1nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IG1hdC1nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1ncmlkLWxpc3QtY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX21hdC1ncmlkLWxpc3QtZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1ncmlkLWxpc3QtdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG5cblxuXG5cbkBtaXhpbiBtYXQtaWNvbi1jb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkcHJpbWFyeTogbWFwLWdldCgkY29uZmlnLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkY29uZmlnLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkY29uZmlnLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtaWNvbiB7XG4gICAgJi5tYXQtcHJpbWFyeSB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCB0ZXh0KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkYWNjZW50LCB0ZXh0KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIHRleHQpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWljb24tdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gX21hdC1pY29uLWRlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIG1hdC1pY29uLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiBfbWF0LWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIF9tYXQtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtaWNvbicpIHtcbiAgICAkY29sb3I6IG1hdC1nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IG1hdC1nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1pY29uLWNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtaWNvbi1kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LWljb24tdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cbi8vIFJlbmRlcnMgYSBncmFkaWVudCBmb3Igc2hvd2luZyB0aGUgZGFzaGVkIGxpbmUgd2hlbiB0aGUgaW5wdXQgaXMgZGlzYWJsZWQuXG4vLyBVbmxpa2UgdXNpbmcgYSBib3JkZXIsIGEgZ3JhZGllbnQgYWxsb3dzIHVzIHRvIGFkanVzdCB0aGUgc3BhY2luZyBvZiB0aGUgZG90dGVkIGxpbmVcbi8vIHRvIG1hdGNoIHRoZSBNYXRlcmlhbCBEZXNpZ24gc3BlYy5cbkBtaXhpbiBtYXQtY29udHJvbC1kaXNhYmxlZC11bmRlcmxpbmUoJGNvbG9yKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGNvbG9yIDAlLCAkY29sb3IgMzMlLCB0cmFuc3BhcmVudCAwJSk7XG4gIGJhY2tncm91bmQtc2l6ZTogNHB4IDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbn1cblxuLy8gRmlndXJlcyBvdXQgdGhlIGNvbG9yIG9mIHRoZSBwbGFjZWhvbGRlciBmb3IgYSBmb3JtIGNvbnRyb2wuXG4vLyBVc2VkIHByaW1hcmlseSB0byBwcmV2ZW50IHRoZSB2YXJpb3VzIGZvcm0gY29udHJvbHMgZnJvbVxuLy8gYmVjb21pbmcgb3V0IG9mIHN5bmMgc2luY2UgdGhlc2UgY29sb3JzIGFyZW4ndCBpbiBhIHBhbGV0dGUuXG5AZnVuY3Rpb24gX21hdC1jb250cm9sLXBsYWNlaG9sZGVyLWNvbG9yKCRjb25maWcpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCRjb25maWcsIGlzLWRhcmspO1xuICBAcmV0dXJuIG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjUsIDAuNDIpKTtcbn1cblxuXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBtYXRlcmlhbC9uby1wcmVmaXhlcyAqL1xuQG1peGluIHVzZXItc2VsZWN0KCR2YWx1ZSkge1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiAkdmFsdWU7XG4gIC1tb3otdXNlci1zZWxlY3Q6ICR2YWx1ZTtcbiAgLW1zLXVzZXItc2VsZWN0OiAkdmFsdWU7XG4gIHVzZXItc2VsZWN0OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBpbnB1dC1wbGFjZWhvbGRlciB7XG4gICY6OnBsYWNlaG9sZGVyIHtcbiAgICBAY29udGVudDtcbiAgfVxuXG4gICY6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgIEBjb250ZW50O1xuICB9XG5cbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cblxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGN1cnNvci1ncmFiIHtcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWI7XG4gIGN1cnNvcjogZ3JhYjtcbn1cblxuQG1peGluIGN1cnNvci1ncmFiYmluZyB7XG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiYmluZztcbiAgY3Vyc29yOiBncmFiYmluZztcbn1cblxuQG1peGluIGJhY2tmYWNlLXZpc2liaWxpdHkoJHZhbHVlKSB7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogJHZhbHVlO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBwb3NpdGlvbi1zdGlja3kge1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG59XG4vKiBzdHlsZWxpbnQtZW5hYmxlICovXG5cblxuXG5AbWl4aW4gbWF0LWlucHV0LWNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCRjb25maWcsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCRjb25maWcsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCRjb25maWcsIHdhcm4pO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LWlucHV0LWVsZW1lbnQ6ZGlzYWJsZWQsXG4gIC5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICB9XG5cbiAgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBjYXJldC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCB0ZXh0KTtcblxuICAgIEBpbmNsdWRlIGlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiBfbWF0LWNvbnRyb2wtcGxhY2Vob2xkZXItY29sb3IoJGNvbmZpZyk7XG4gICAgfVxuXG4gICAgLy8gT24gZGFyayB0aGVtZXMgd2Ugc2V0IHRoZSBuYXRpdmUgYHNlbGVjdGAgY29sb3IgdG8gc29tZSBzaGFkZSBvZiB3aGl0ZSxcbiAgICAvLyBob3dldmVyIHRoZSBjb2xvciBwcm9wYWdhdGVzIHRvIGFsbCBvZiB0aGUgYG9wdGlvbmAgZWxlbWVudHMsIHdoaWNoIGFyZVxuICAgIC8vIGFsd2F5cyBvbiBhIHdoaXRlIGJhY2tncm91bmQgaW5zaWRlIHRoZSBkcm9wZG93biwgY2F1c2luZyB0aGVtIHRvIGJsZW5kIGluLlxuICAgIC8vIFNpbmNlIHdlIGNhbid0IGNoYW5nZSBiYWNrZ3JvdW5kIG9mIHRoZSBkcm9wZG93biwgd2UgbmVlZCB0byBleHBsaWNpdGx5XG4gICAgLy8gcmVzZXQgdGhlIGNvbG9yIG9mIHRoZSBvcHRpb25zIHRvIHNvbWV0aGluZyBkYXJrLlxuICAgIEBpZiAobWFwLWdldCgkY29uZmlnLCBpcy1kYXJrKSkge1xuICAgICAgb3B0aW9uIHtcbiAgICAgICAgY29sb3I6ICRkYXJrLXByaW1hcnktdGV4dDtcbiAgICAgIH1cblxuICAgICAgb3B0aW9uOmRpc2FibGVkIHtcbiAgICAgICAgY29sb3I6ICRkYXJrLWRpc2FibGVkLXRleHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLm1hdC1hY2NlbnQgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBjYXJldC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLm1hdC13YXJuIC5tYXQtaW5wdXQtZWxlbWVudCxcbiAgLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBjYXJldC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuLCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkd2FybiwgdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1pbnB1dC10eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuXG4gIC8vIFRoZSBhbW91bnQgb2Ygc3BhY2UgYmV0d2VlbiB0aGUgdG9wIG9mIHRoZSBsaW5lIGFuZCB0aGUgdG9wIG9mIHRoZSBhY3R1YWwgdGV4dFxuICAvLyAoYXMgYSBmcmFjdGlvbiBvZiB0aGUgZm9udC1zaXplKS5cbiAgJGxpbmUtc3BhY2luZzogKCRsaW5lLWhlaWdodCAtIDEpIC8gMjtcblxuICAvLyA8aW5wdXQ+IGVsZW1lbnRzIHNlZW0gdG8gaGF2ZSB0aGVpciBoZWlnaHQgc2V0IHNsaWdodGx5IHRvbyBsYXJnZSBvbiBTYWZhcmkgY2F1c2luZyB0aGUgdGV4dCB0b1xuICAvLyBiZSBtaXNhbGlnbmVkIHcuci50LiB0aGUgcGxhY2Vob2xkZXIuIEFkZGluZyB0aGlzIG1hcmdpbiBjb3JyZWN0cyBpdC5cbiAgaW5wdXQubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIG1hcmdpbi10b3A6IC0kbGluZS1zcGFjaW5nICogMWVtO1xuICB9XG59XG5cbkBtaXhpbiBfbWF0LWlucHV0LWRlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIG1hdC1pbnB1dC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogX21hdC1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSBfbWF0LWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LWlucHV0Jykge1xuICAgICRjb2xvcjogbWF0LWdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LWlucHV0LWNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtaW5wdXQtZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1pbnB1dC10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LWxpc3QtY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtbGlzdC1iYXNlIHtcbiAgICAubWF0LWxpc3QtaXRlbSB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICB9XG5cbiAgICAubWF0LWxpc3Qtb3B0aW9uIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIH1cblxuICAgIC5tYXQtc3ViaGVhZGVyIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LWxpc3QtaXRlbS1kaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBkaXNhYmxlZC1saXN0LW9wdGlvbik7XG4gIH1cblxuICAubWF0LWxpc3Qtb3B0aW9uLFxuICAubWF0LW5hdi1saXN0IC5tYXQtbGlzdC1pdGVtLFxuICAubWF0LWFjdGlvbi1saXN0IC5tYXQtbGlzdC1pdGVtIHtcbiAgICAmOmhvdmVyLCAmOmZvY3VzIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2hvdmVyJyk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1saXN0LXNpbmdsZS1zZWxlY3RlZC1vcHRpb24ge1xuICAgICYsICY6aG92ZXIsICY6Zm9jdXMge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3ZlciwgMC4xMik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtbGlzdC10eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG5cbiAgLm1hdC1saXN0LWl0ZW0ge1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIH1cblxuICAubWF0LWxpc3Qtb3B0aW9uIHtcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICB9XG5cbiAgLy8gRGVmYXVsdCBsaXN0XG4gIC5tYXQtbGlzdC1iYXNlIHtcbiAgICAubWF0LWxpc3QtaXRlbSB7XG4gICAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgc3ViaGVhZGluZy0yKTtcbiAgICAgIEBpbmNsdWRlIG1hdC1saW5lLWJhc2UobWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpKTtcbiAgICB9XG5cbiAgICAubWF0LWxpc3Qtb3B0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBzdWJoZWFkaW5nLTIpO1xuICAgICAgQGluY2x1ZGUgbWF0LWxpbmUtYmFzZShtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSkpO1xuICAgIH1cblxuICAgIC5tYXQtc3ViaGVhZGVyIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYm9keS0yKTtcbiAgICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTIpO1xuICAgICAgZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICAgIH1cbiAgfVxuXG4gIC8vIERlbnNlIGxpc3RcbiAgLm1hdC1saXN0LWJhc2VbZGVuc2VdIHtcbiAgICAubWF0LWxpc3QtaXRlbSB7XG4gICAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgICBAaW5jbHVkZSBtYXQtbGluZS1iYXNlKG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbikpO1xuICAgIH1cblxuICAgIC5tYXQtbGlzdC1vcHRpb24ge1xuICAgICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgICAgQGluY2x1ZGUgbWF0LWxpbmUtYmFzZShtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pKTtcbiAgICB9XG5cbiAgICAubWF0LXN1YmhlYWRlciB7XG4gICAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICAgICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgICAgZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gX21hdC1saXN0LWRlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIG1hdC1saXN0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiBfbWF0LWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIF9tYXQtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtbGlzdCcpIHtcbiAgICAkY29sb3I6IG1hdC1nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IG1hdC1nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1saXN0LWNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtbGlzdC1kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LWxpc3QtdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1tZW51LWNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LW1lbnUtcGFuZWwge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDQsICRjb25maWcpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2NhcmQnKTtcbiAgfVxuXG4gIC5tYXQtbWVudS1pdGVtIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAndGV4dCcpO1xuXG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgJiwgJjo6YWZ0ZXIge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAnZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LW1lbnUtaXRlbSAubWF0LWljb24tbm8tY29sb3IsXG4gIC5tYXQtbWVudS1pdGVtLXN1Ym1lbnUtdHJpZ2dlcjo6YWZ0ZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsICdpY29uJyk7XG4gIH1cblxuICAubWF0LW1lbnUtaXRlbTpob3ZlcixcbiAgLm1hdC1tZW51LWl0ZW0uY2RrLXByb2dyYW0tZm9jdXNlZCxcbiAgLm1hdC1tZW51LWl0ZW0uY2RrLWtleWJvYXJkLWZvY3VzZWQsXG4gIC5tYXQtbWVudS1pdGVtLWhpZ2hsaWdodGVkIHtcbiAgICAmOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdob3ZlcicpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LW1lbnUtdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gIC5tYXQtbWVudS1pdGVtIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBib2R5LTEpO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIF9tYXQtbWVudS1kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBtYXQtbWVudS10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogX21hdC1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSBfbWF0LWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LW1lbnUnKSB7XG4gICAgJGNvbG9yOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiBtYXQtZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtbWVudS1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LW1lbnUtZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1tZW51LXR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG4kbWF0LXBhZ2luYXRvci1oZWlnaHQ6IDU2cHggIWRlZmF1bHQ7XG4vLyBNaW5pbXVtIGhlaWdodCBmb3IgcGFnaW5hdG9yJ3MgaW4gdGhlIGhpZ2hlc3QgZGVuc2l0eSBpcyBkZXRlcm1pbmVkIGJhc2VkIG9uIGhvd1xuLy8gbXVjaCB0aGUgcGFnaW5hdG9yIGNhbiBzaHJpbmsgdW50aWwgdGhlIGNvbnRlbnQgZXhjZWVkcyAoaS5lLiBuYXZpZ2F0aW9uIGJ1dHRvbnMpLlxuJG1hdC1wYWdpbmF0b3ItbWluaW11bS1oZWlnaHQ6IDQwcHggIWRlZmF1bHQ7XG4kbWF0LXBhZ2luYXRvci1tYXhpbXVtLWhlaWdodDogJG1hdC1wYWdpbmF0b3ItaGVpZ2h0ICFkZWZhdWx0O1xuXG4kbWF0LXBhZ2luYXRvci1kZW5zaXR5LWNvbmZpZzogKFxuICBoZWlnaHQ6IChcbiAgICBkZWZhdWx0OiAkbWF0LXBhZ2luYXRvci1oZWlnaHQsXG4gICAgbWF4aW11bTogJG1hdC1wYWdpbmF0b3ItbWF4aW11bS1oZWlnaHQsXG4gICAgbWluaW11bTogJG1hdC1wYWdpbmF0b3ItbWluaW11bS1oZWlnaHQsXG4gIClcbikgIWRlZmF1bHQ7XG5cblxuQG1peGluIG1hdC1wYWdpbmF0b3ItY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuXG4gIC5tYXQtcGFnaW5hdG9yIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdjYXJkJyk7XG4gIH1cblxuICAubWF0LXBhZ2luYXRvcixcbiAgLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIC5tYXQtc2VsZWN0LXRyaWdnZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtcGFnaW5hdG9yLWRlY3JlbWVudCxcbiAgLm1hdC1wYWdpbmF0b3ItaW5jcmVtZW50IHtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAnaWNvbicpO1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ2ljb24nKTtcbiAgfVxuXG4gIC5tYXQtcGFnaW5hdG9yLWZpcnN0LFxuICAubWF0LXBhZ2luYXRvci1sYXN0IHtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAnaWNvbicpO1xuICB9XG5cbiAgLm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF0ge1xuICAgIC5tYXQtcGFnaW5hdG9yLWRlY3JlbWVudCxcbiAgICAubWF0LXBhZ2luYXRvci1pbmNyZW1lbnQsXG4gICAgLm1hdC1wYWdpbmF0b3ItZmlyc3QsXG4gICAgLm1hdC1wYWdpbmF0b3ItbGFzdCB7XG4gICAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ2Rpc2FibGVkJyk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtcGFnaW5hdG9yLXR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAubWF0LXBhZ2luYXRvcixcbiAgLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIC5tYXQtc2VsZWN0LXRyaWdnZXIge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGNhcHRpb24pO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIF9tYXQtcGFnaW5hdG9yLWRlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkZGVuc2l0eS1zY2FsZTogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGhlaWdodDogX21hdC1kZW5zaXR5LXByb3AtdmFsdWUoJG1hdC1wYWdpbmF0b3ItZGVuc2l0eS1jb25maWcsICRkZW5zaXR5LXNjYWxlLCBoZWlnaHQpO1xuXG4gIEBpbmNsdWRlIF9tYXQtZGVuc2l0eS1sZWdhY3ktY29tcGF0aWJpbGl0eSgpIHtcbiAgICAubWF0LXBhZ2luYXRvci1jb250YWluZXIge1xuICAgICAgbWluLWhlaWdodDogJGhlaWdodDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1wYWdpbmF0b3ItdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IF9tYXQtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgX21hdC1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1wYWdpbmF0b3InKSB7XG4gICAgJGNvbG9yOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiBtYXQtZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtcGFnaW5hdG9yLWNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtcGFnaW5hdG9yLWRlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtcGFnaW5hdG9yLXR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtcHJvZ3Jlc3MtYmFyLWNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCRjb25maWcsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCRjb25maWcsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCRjb25maWcsIHdhcm4pO1xuXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQge1xuICAgIGZpbGw6IG1hdC1jb2xvcigkcHJpbWFyeSwgbGlnaHRlcik7XG4gIH1cblxuICAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgbGlnaHRlcik7XG4gIH1cblxuICAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgfVxuXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC1hY2NlbnQge1xuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQge1xuICAgICAgZmlsbDogbWF0LWNvbG9yKCRhY2NlbnQsIGxpZ2h0ZXIpO1xuICAgIH1cblxuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCwgbGlnaHRlcik7XG4gICAgfVxuXG4gICAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC13YXJuIHtcbiAgICAubWF0LXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kIHtcbiAgICAgIGZpbGw6IG1hdC1jb2xvcigkd2FybiwgbGlnaHRlcik7XG4gICAgfVxuXG4gICAgLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkd2FybiwgbGlnaHRlcik7XG4gICAgfVxuXG4gICAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1wcm9ncmVzcy1iYXItdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gX21hdC1wcm9ncmVzcy1iYXItZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gbWF0LXByb2dyZXNzLWJhci10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogX21hdC1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSBfbWF0LWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LXByb2dyZXNzLWJhcicpIHtcbiAgICAkY29sb3I6IG1hdC1nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IG1hdC1nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1wcm9ncmVzcy1iYXItY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX21hdC1wcm9ncmVzcy1iYXItZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1wcm9ncmVzcy1iYXItdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LXByb2dyZXNzLXNwaW5uZXItY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJGNvbmZpZywgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJGNvbmZpZywgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJGNvbmZpZywgd2Fybik7XG5cbiAgLm1hdC1wcm9ncmVzcy1zcGlubmVyLCAubWF0LXNwaW5uZXIge1xuICAgIGNpcmNsZSB7XG4gICAgICBzdHJva2U6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IGNpcmNsZSB7XG4gICAgICBzdHJva2U6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIGNpcmNsZSB7XG4gICAgICBzdHJva2U6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lci10eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBfbWF0LXByb2dyZXNzLXNwaW5uZXItZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gbWF0LXByb2dyZXNzLXNwaW5uZXItdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IF9tYXQtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgX21hdC1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1wcm9ncmVzcy1zcGlubmVyJykge1xuICAgICRjb2xvcjogbWF0LWdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LXByb2dyZXNzLXNwaW5uZXItY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX21hdC1wcm9ncmVzcy1zcGlubmVyLWRlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lci10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cbkBtaXhpbiBfbWF0LXJhZGlvLWNvbG9yKCRwYWxldHRlKSB7XG4gICYubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlKTtcbiAgfVxuXG4gIC5tYXQtcmFkaW8taW5uZXItY2lyY2xlLFxuICAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50Om5vdCgubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlKSxcbiAgJi5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlLFxuICAmOmFjdGl2ZSAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtcmFkaW8tY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJGNvbmZpZywgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJGNvbmZpZywgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJGNvbmZpZywgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgICAmLm1hdC1wcmltYXJ5IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtcmFkaW8tY29sb3IoJHByaW1hcnkpO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXJhZGlvLWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgQGluY2x1ZGUgX21hdC1yYWRpby1jb2xvcigkd2Fybik7XG4gICAgfVxuXG4gICAgLy8gVGhpcyBuZWVkcyBleHRyYSBzcGVjaWZpY2l0eSwgYmVjYXVzZSB0aGUgY2xhc3NlcyBhYm92ZSBhcmUgY29tYmluZWRcbiAgICAvLyAoZS5nLiBgLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudGApIHdoaWNoIGluY3JlYXNlcyB0aGVpciBzcGVjaWZpY2l0eSBhIGxvdC5cbiAgICAvLyBUT0RPOiBjb25zaWRlciBtYWtpbmcgdGhlIHNlbGVjdG9ycyBpbnRvIGRlc2NlbmRhbnRzIChgLm1hdC1wcmltYXJ5IC5tYXQtcmFkaW8tYnV0dG9uYCkuXG4gICAgJi5tYXQtcmFkaW8tZGlzYWJsZWQge1xuICAgICAgJi5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSxcbiAgICAgIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkKTtcbiAgICAgIH1cblxuICAgICAgLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudCxcbiAgICAgIC5tYXQtcmFkaW8taW5uZXItY2lyY2xlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZCk7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtcmFkaW8tbGFiZWwtY29udGVudCB7XG4gICAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTd2l0Y2ggdGhpcyB0byBhIHNvbGlkIGNvbG9yIHNpbmNlIHdlJ3JlIHVzaW5nIGBvcGFjaXR5YFxuICAgIC8vIHRvIGNvbnRyb2wgaG93IG9wYXF1ZSB0aGUgcmlwcGxlIHNob3VsZCBiZS5cbiAgICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJGZvcmVncm91bmQsIGJhc2UpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXJhZGlvLXR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAubWF0LXJhZGlvLWJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxufVxuXG5AbWl4aW4gX21hdC1yYWRpby1kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBtYXQtcmFkaW8tdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IF9tYXQtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgX21hdC1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1yYWRpbycpIHtcbiAgICAkY29sb3I6IG1hdC1nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IG1hdC1nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1yYWRpby1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXJhZGlvLWRlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtcmFkaW8tdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LXNlbGVjdC1jb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCRjb25maWcsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCRjb25maWcsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCRjb25maWcsIHdhcm4pO1xuXG4gIC5tYXQtc2VsZWN0LXZhbHVlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtc2VsZWN0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogX21hdC1jb250cm9sLXBsYWNlaG9sZGVyLWNvbG9yKCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1zZWxlY3QtZGlzYWJsZWQgLm1hdC1zZWxlY3QtdmFsdWUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICB9XG5cbiAgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtc2VsZWN0LXBhbmVsIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDQsICRjb25maWcpO1xuXG4gICAgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1tdWx0aXBsZSkge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3ZlciwgMC4xMik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICAmLm1hdC1mb2N1c2VkIHtcbiAgICAgICYubWF0LXByaW1hcnkgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCB0ZXh0KTtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtYWNjZW50IC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICAgICAgY29sb3I6IG1hdC1jb2xvcigkYWNjZW50LCB0ZXh0KTtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtd2FybiAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIHRleHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtc2VsZWN0Lm1hdC1zZWxlY3QtaW52YWxpZCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuLCB0ZXh0KTtcbiAgICB9XG5cbiAgICAubWF0LXNlbGVjdC5tYXQtc2VsZWN0LWRpc2FibGVkIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNlbGVjdC10eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuXG4gIC5tYXQtc2VsZWN0IHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1zZWxlY3QtdHJpZ2dlciB7XG4gICAgaGVpZ2h0OiAkbGluZS1oZWlnaHQgKiAxZW07XG4gIH1cbn1cblxuQG1peGluIF9tYXQtc2VsZWN0LWRlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIG1hdC1zZWxlY3QtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IF9tYXQtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgX21hdC1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1zZWxlY3QnKSB7XG4gICAgJGNvbG9yOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiBtYXQtZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtc2VsZWN0LWNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtc2VsZWN0LWRlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtc2VsZWN0LXR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuQG1peGluIG1hdC1zaWRlbmF2LWNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCRjb25maWcsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCRjb25maWcsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCRjb25maWcsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG5cbiAgJGRyYXdlci1iYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGRpYWxvZyk7XG4gICRkcmF3ZXItY29udGFpbmVyLWJhY2tncm91bmQtY29sb3I6ICBtYXQtY29sb3IoJGJhY2tncm91bmQsIGJhY2tncm91bmQpO1xuICAkZHJhd2VyLXB1c2gtYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBkaWFsb2cpO1xuICAkZHJhd2VyLXNpZGUtYm9yZGVyOiBzb2xpZCAxcHggbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcblxuICAubWF0LWRyYXdlci1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRkcmF3ZXItY29udGFpbmVyLWJhY2tncm91bmQtY29sb3I7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cblxuICAubWF0LWRyYXdlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRyYXdlci1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgJi5tYXQtZHJhd2VyLXB1c2gge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRyYXdlci1wdXNoLWJhY2tncm91bmQtY29sb3I7XG4gICAgfVxuXG4gICAgJjpub3QoLm1hdC1kcmF3ZXItc2lkZSkge1xuICAgICAgLy8gVGhlIGVsZXZhdGlvbiBvZiB6LTE2IGlzIG5vdGVkIGluIHRoZSBkZXNpZ24gc3BlY2lmaWNhdGlvbnMuXG4gICAgICAvLyBTZWUgaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vY29tcG9uZW50cy9uYXZpZ2F0aW9uLWRyYXdlci5odG1sXG4gICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigxNiwgJGNvbmZpZyk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1kcmF3ZXItc2lkZSB7XG4gICAgYm9yZGVyLXJpZ2h0OiAkZHJhd2VyLXNpZGUtYm9yZGVyO1xuXG4gICAgJi5tYXQtZHJhd2VyLWVuZCB7XG4gICAgICBib3JkZXItbGVmdDogJGRyYXdlci1zaWRlLWJvcmRlcjtcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICB9XG4gIH1cblxuICBbZGlyPSdydGwnXSAubWF0LWRyYXdlci1zaWRlIHtcbiAgICBib3JkZXItbGVmdDogJGRyYXdlci1zaWRlLWJvcmRlcjtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG5cbiAgICAmLm1hdC1kcmF3ZXItZW5kIHtcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgICAgYm9yZGVyLXJpZ2h0OiAkZHJhd2VyLXNpZGUtYm9yZGVyO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZHJhd2VyLWJhY2tkcm9wLm1hdC1kcmF3ZXItc2hvd24ge1xuICAgICRvcGFjaXR5OiAwLjY7XG4gICAgJGJhY2tkcm9wLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQsICRvcGFjaXR5KTtcblxuICAgIEBpZiAodHlwZS1vZigkYmFja2Ryb3AtY29sb3IpID09IGNvbG9yKSB7XG4gICAgICAvLyBXZSB1c2UgaW52ZXJ0KCkgaGVyZSB0byBoYXZlIHRoZSBkYXJrZW4gdGhlIGJhY2tncm91bmQgY29sb3IgZXhwZWN0ZWQgdG8gYmUgdXNlZC4gSWYgdGhlXG4gICAgICAvLyBiYWNrZ3JvdW5kIGlzIGxpZ2h0LCB3ZSB1c2UgYSBkYXJrIGJhY2tkcm9wLiBJZiB0aGUgYmFja2dyb3VuZCBpcyBkYXJrLFxuICAgICAgLy8gd2UgdXNlIGEgbGlnaHQgYmFja2Ryb3AuXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbnZlcnQoJGJhY2tkcm9wLWNvbG9yKTtcbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgLy8gSWYgd2UgY291bGRuJ3QgcmVzb2x2ZSB0aGUgYmFja2Ryb3AgY29sb3IgdG8gYSBjb2xvciB2YWx1ZSwgZmFsbCBiYWNrIHRvIHVzaW5nXG4gICAgICAvLyBgb3BhY2l0eWAgdG8gbWFrZSBpdCBvcGFxdWUgc2luY2UgaXRzIGVuZCB2YWx1ZSBjb3VsZCBiZSBhIHNvbGlkIGNvbG9yLlxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tkcm9wLWNvbG9yO1xuICAgICAgb3BhY2l0eTogJG9wYWNpdHk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtc2lkZW5hdi10eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBfbWF0LXNpZGVuYXYtZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gbWF0LXNpZGVuYXYtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IF9tYXQtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgX21hdC1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1zaWRlbmF2Jykge1xuICAgICRjb2xvcjogbWF0LWdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LXNpZGVuYXYtY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX21hdC1zaWRlbmF2LWRlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtc2lkZW5hdi10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuQG1peGluIF9tYXQtc2xpZGUtdG9nZ2xlLWNoZWNrZWQoJHBhbGV0dGUsICR0aHVtYi1jaGVja2VkLWh1ZSkge1xuICAmLm1hdC1jaGVja2VkIHtcbiAgICAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsICR0aHVtYi1jaGVja2VkLWh1ZSk7XG4gICAgfVxuXG4gICAgLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcbiAgICAgIC8vIE9wYWNpdHkgaXMgZGV0ZXJtaW5lZCBmcm9tIHRoZSBzcGVjcyBmb3IgdGhlIHNlbGVjdGlvbiBjb250cm9scy5cbiAgICAgIC8vIFNlZTogaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vY29tcG9uZW50cy9zZWxlY3Rpb24tY29udHJvbHMuaHRtbCNzcGVjc1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCAkdGh1bWItY2hlY2tlZC1odWUsIDAuNTQpO1xuICAgIH1cblxuICAgIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgLy8gU2V0IG5vIG9wYWNpdHkgZm9yIHRoZSByaXBwbGVzIGJlY2F1c2UgdGhlIHJpcHBsZSBvcGFjaXR5IHdpbGwgYmUgYWRqdXN0ZWQgZHluYW1pY2FsbHlcbiAgICAgIC8vIGJhc2VkIG9uIHRoZSB0eXBlIG9mIGludGVyYWN0aW9uIHdpdGggdGhlIHNsaWRlLXRvZ2dsZSAoZS5nLiBmb3IgaG92ZXIsIGZvY3VzKVxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCAkdGh1bWItY2hlY2tlZC1odWUpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNsaWRlLXRvZ2dsZS1jb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkaXMtZGFyazogbWFwLWdldCgkY29uZmlnLCBpcy1kYXJrKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJGNvbmZpZywgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJGNvbmZpZywgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJGNvbmZpZywgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcblxuICAvLyBDb2xvciBodWVzIGFyZSBiYXNlZCBvbiB0aGUgc3BlY3Mgd2hpY2ggYnJpZWZseSBzaG93IHRoZSBodWVzIHRoYXQgYXJlIGFwcGxpZWQgdG8gYSBzd2l0Y2guXG4gIC8vIFRoZSAyMDE4IHNwZWNzIG5vIGxvbmdlciBkZXNjcmliZSBob3cgZGFyayBzd2l0Y2hlcyBzaG91bGQgbG9vayBsaWtlLiBEdWUgdG8gdGhlIGxhY2sgb2ZcbiAgLy8gaW5mb3JtYXRpb24gZm9yIGRhcmsgdGhlbWVkIHN3aXRjaGVzLCB3ZSBwYXJ0aWFsbHkga2VlcCB0aGUgb2xkIGJlaGF2aW9yIHRoYXQgaXMgYmFzZWQgb25cbiAgLy8gdGhlIHByZXZpb3VzIHNwZWNpZmljYXRpb25zLiBGb3IgdGhlIGNoZWNrZWQgY29sb3Igd2UgYWx3YXlzIHVzZSB0aGUgYGRlZmF1bHRgIGh1ZSBiZWNhdXNlXG4gIC8vIHRoYXQgZm9sbG93cyBNREMgYW5kIGFsc28gbWFrZXMgaXQgZWFzaWVyIGZvciBwZW9wbGUgdG8gY3JlYXRlIGEgY3VzdG9tIHRoZW1lIHdpdGhvdXQgbmVlZGluZ1xuICAvLyB0byBzcGVjaWZ5IGVhY2ggaHVlIGluZGl2aWR1YWxseS5cbiAgJHRodW1iLXVuY2hlY2tlZC1odWU6IGlmKCRpcy1kYXJrLCA0MDAsIDUwKTtcbiAgJHRodW1iLWNoZWNrZWQtaHVlOiBkZWZhdWx0O1xuXG4gICRiYXItdW5jaGVja2VkLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkKTtcbiAgJHJpcHBsZS11bmNoZWNrZWQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgYmFzZSk7XG5cbiAgLm1hdC1zbGlkZS10b2dnbGUge1xuICAgIEBpbmNsdWRlIF9tYXQtc2xpZGUtdG9nZ2xlLWNoZWNrZWQoJGFjY2VudCwgJHRodW1iLWNoZWNrZWQtaHVlKTtcblxuICAgICYubWF0LXByaW1hcnkge1xuICAgICAgQGluY2x1ZGUgX21hdC1zbGlkZS10b2dnbGUtY2hlY2tlZCgkcHJpbWFyeSwgJHRodW1iLWNoZWNrZWQtaHVlKTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtc2xpZGUtdG9nZ2xlLWNoZWNrZWQoJHdhcm4sICR0aHVtYi1jaGVja2VkLWh1ZSk7XG4gICAgfVxuXG4gICAgJjpub3QoLm1hdC1jaGVja2VkKSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIC8vIFNldCBubyBvcGFjaXR5IGZvciB0aGUgcmlwcGxlcyBiZWNhdXNlIHRoZSByaXBwbGUgb3BhY2l0eSB3aWxsIGJlIGFkanVzdGVkIGR5bmFtaWNhbGx5XG4gICAgICAvLyBiYXNlZCBvbiB0aGUgdHlwZSBvZiBpbnRlcmFjdGlvbiB3aXRoIHRoZSBzbGlkZS10b2dnbGUgKGUuZy4gZm9yIGhvdmVyLCBmb2N1cylcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyaXBwbGUtdW5jaGVja2VkLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigxLCAkY29uZmlnKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJG1hdC1ncmV5LCAkdGh1bWItdW5jaGVja2VkLWh1ZSk7XG4gIH1cblxuICAubWF0LXNsaWRlLXRvZ2dsZS1iYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYXItdW5jaGVja2VkLWNvbG9yO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtc2xpZGUtdG9nZ2xlLXR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAubWF0LXNsaWRlLXRvZ2dsZS1jb250ZW50IHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG59XG5cbkBtaXhpbiBfbWF0LXNsaWRlLXRvZ2dsZS1kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBtYXQtc2xpZGUtdG9nZ2xlLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiBfbWF0LWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIF9tYXQtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtc2xpZGUtdG9nZ2xlJykge1xuICAgICRjb2xvcjogbWF0LWdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LXNsaWRlLXRvZ2dsZS1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXNsaWRlLXRvZ2dsZS1kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LXNsaWRlLXRvZ2dsZS10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuQG1peGluIF9tYXQtc2xpZGVyLWlubmVyLWNvbnRlbnQtdGhlbWUoJHBhbGV0dGUpIHtcbiAgLm1hdC1zbGlkZXItdHJhY2stZmlsbCxcbiAgLm1hdC1zbGlkZXItdGh1bWIsXG4gIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUpO1xuICB9XG5cbiAgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCk7XG4gIH1cblxuICAubWF0LXNsaWRlci1mb2N1cy1yaW5nIHtcbiAgICAkb3BhY2l0eTogMC4yO1xuICAgICRjb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LCAkb3BhY2l0eSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xuXG4gICAgLy8gYG1hdC1jb2xvcmAgdXNlcyBgcmdiYWAgZm9yIHRoZSBvcGFjaXR5IHdoaWNoIHdvbid0IHdvcmsgd2l0aFxuICAgIC8vIENTUyB2YXJpYWJsZXMgc28gd2UgbmVlZCB0byB1c2UgYG9wYWNpdHlgIGFzIGEgZmFsbGJhY2suXG4gICAgQGlmICh0eXBlLW9mKCRjb2xvcikgIT0gY29sb3IpIHtcbiAgICAgIG9wYWNpdHk6ICRvcGFjaXR5O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNsaWRlci1jb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkcHJpbWFyeTogbWFwLWdldCgkY29uZmlnLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkY29uZmlnLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkY29uZmlnLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuXG4gICRtYXQtc2xpZGVyLW9mZi1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzbGlkZXItb2ZmKTtcbiAgJG1hdC1zbGlkZXItb2ZmLWZvY3VzZWQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2xpZGVyLW9mZi1hY3RpdmUpO1xuICAkbWF0LXNsaWRlci1kaXNhYmxlZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzbGlkZXItb2ZmKTtcbiAgJG1hdC1zbGlkZXItbGFiZWxlZC1taW4tdmFsdWUtdGh1bWItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2xpZGVyLW1pbik7XG4gICRtYXQtc2xpZGVyLWxhYmVsZWQtbWluLXZhbHVlLXRodW1iLWxhYmVsLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNsaWRlci1vZmYpO1xuICAkbWF0LXNsaWRlci10aWNrLW9wYWNpdHk6IDAuNztcbiAgJG1hdC1zbGlkZXItdGljay1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBiYXNlLCAkbWF0LXNsaWRlci10aWNrLW9wYWNpdHkpO1xuICAkbWF0LXNsaWRlci10aWNrLXNpemU6IDJweDtcblxuICAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1vZmYtY29sb3I7XG4gIH1cblxuICAubWF0LXByaW1hcnkge1xuICAgIEBpbmNsdWRlIF9tYXQtc2xpZGVyLWlubmVyLWNvbnRlbnQtdGhlbWUoJHByaW1hcnkpO1xuICB9XG5cbiAgLm1hdC1hY2NlbnQge1xuICAgIEBpbmNsdWRlIF9tYXQtc2xpZGVyLWlubmVyLWNvbnRlbnQtdGhlbWUoJGFjY2VudCk7XG4gIH1cblxuICAubWF0LXdhcm4ge1xuICAgIEBpbmNsdWRlIF9tYXQtc2xpZGVyLWlubmVyLWNvbnRlbnQtdGhlbWUoJHdhcm4pO1xuICB9XG5cbiAgLm1hdC1zbGlkZXI6aG92ZXIsXG4gIC5jZGstZm9jdXNlZCB7XG4gICAgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1vZmYtZm9jdXNlZC1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAubWF0LXNsaWRlci1kaXNhYmxlZCB7XG4gICAgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCxcbiAgICAubWF0LXNsaWRlci10cmFjay1maWxsLFxuICAgIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLWRpc2FibGVkLWNvbG9yO1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLWRpc2FibGVkLWNvbG9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2xpZGVyLW1pbi12YWx1ZSB7XG4gICAgLm1hdC1zbGlkZXItZm9jdXMtcmluZyB7XG4gICAgICAkb3BhY2l0eTogMC4xMjtcbiAgICAgICRjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBiYXNlLCAkb3BhY2l0eSk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG5cbiAgICAgIC8vIGBtYXQtY29sb3JgIHVzZXMgYHJnYmFgIGZvciB0aGUgb3BhY2l0eSB3aGljaCB3b24ndCB3b3JrIHdpdGhcbiAgICAgIC8vIENTUyB2YXJpYWJsZXMgc28gd2UgbmVlZCB0byB1c2UgYG9wYWNpdHlgIGFzIGEgZmFsbGJhY2suXG4gICAgICBAaWYgKHR5cGUtb2YoJGNvbG9yKSAhPSBjb2xvcikge1xuICAgICAgICBvcGFjaXR5OiAkb3BhY2l0eTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZyB7XG4gICAgICAubWF0LXNsaWRlci10aHVtYixcbiAgICAgIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItbGFiZWxlZC1taW4tdmFsdWUtdGh1bWItY29sb3I7XG4gICAgICB9XG5cbiAgICAgICYuY2RrLWZvY3VzZWQge1xuICAgICAgICAubWF0LXNsaWRlci10aHVtYixcbiAgICAgICAgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLWxhYmVsZWQtbWluLXZhbHVlLXRodW1iLWxhYmVsLWNvbG9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZykge1xuICAgICAgLm1hdC1zbGlkZXItdGh1bWIge1xuICAgICAgICBib3JkZXItY29sb3I6ICRtYXQtc2xpZGVyLW9mZi1jb2xvcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIsXG4gICAgICAmLmNkay1mb2N1c2VkIHtcbiAgICAgICAgLm1hdC1zbGlkZXItdGh1bWIge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJG1hdC1zbGlkZXItb2ZmLWZvY3VzZWQtY29sb3I7XG4gICAgICAgIH1cblxuICAgICAgICAmLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdGh1bWIge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJG1hdC1zbGlkZXItZGlzYWJsZWQtY29sb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LXNsaWRlci1oYXMtdGlja3MgLm1hdC1zbGlkZXItd3JhcHBlcjo6YWZ0ZXIge1xuICAgIGJvcmRlci1jb2xvcjogJG1hdC1zbGlkZXItdGljay1jb2xvcjtcblxuICAgIC8vIGBtYXQtY29sb3JgIHVzZXMgYHJnYmFgIGZvciB0aGUgb3BhY2l0eSB3aGljaCB3b24ndCB3b3JrIHdpdGhcbiAgICAvLyBDU1MgdmFyaWFibGVzIHNvIHdlIG5lZWQgdG8gdXNlIGBvcGFjaXR5YCBhcyBhIGZhbGxiYWNrLlxuICAgIEBpZiAodHlwZS1vZigkbWF0LXNsaWRlci10aWNrLWNvbG9yKSAhPSBjb2xvcikge1xuICAgICAgb3BhY2l0eTogJG1hdC1zbGlkZXItdGljay1vcGFjaXR5O1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2xpZGVyLWhvcml6b250YWwgLm1hdC1zbGlkZXItdGlja3Mge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRtYXQtc2xpZGVyLXRpY2stY29sb3IsXG4gICAgICAgICRtYXQtc2xpZGVyLXRpY2stY29sb3IgJG1hdC1zbGlkZXItdGljay1zaXplLCB0cmFuc3BhcmVudCAwLCB0cmFuc3BhcmVudCk7XG4gICAgLy8gRmlyZWZveCBkb2Vzbid0IGRyYXcgdGhlIGdyYWRpZW50IGNvcnJlY3RseSB3aXRoICd0byByaWdodCdcbiAgICAvLyAoc2VlIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTEzMTQzMTkpLlxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCgwLjAwMDFkZWcsICRtYXQtc2xpZGVyLXRpY2stY29sb3IsXG4gICAgICAgICRtYXQtc2xpZGVyLXRpY2stY29sb3IgJG1hdC1zbGlkZXItdGljay1zaXplLCB0cmFuc3BhcmVudCAwLCB0cmFuc3BhcmVudCk7XG5cbiAgICAvLyBgbWF0LWNvbG9yYCB1c2VzIGByZ2JhYCBmb3IgdGhlIG9wYWNpdHkgd2hpY2ggd29uJ3Qgd29yayB3aXRoXG4gICAgLy8gQ1NTIHZhcmlhYmxlcyBzbyB3ZSBuZWVkIHRvIHVzZSBgb3BhY2l0eWAgYXMgYSBmYWxsYmFjay5cbiAgICBAaWYgKHR5cGUtb2YoJG1hdC1zbGlkZXItdGljay1jb2xvcikgIT0gY29sb3IpIHtcbiAgICAgIG9wYWNpdHk6ICRtYXQtc2xpZGVyLXRpY2stb3BhY2l0eTtcbiAgICB9XG4gIH1cblxuICAubWF0LXNsaWRlci12ZXJ0aWNhbCAubWF0LXNsaWRlci10aWNrcyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICRtYXQtc2xpZGVyLXRpY2stY29sb3IsXG4gICAgICAgICRtYXQtc2xpZGVyLXRpY2stY29sb3IgJG1hdC1zbGlkZXItdGljay1zaXplLCB0cmFuc3BhcmVudCAwLCB0cmFuc3BhcmVudCk7XG5cbiAgICAvLyBgbWF0LWNvbG9yYCB1c2VzIGByZ2JhYCBmb3IgdGhlIG9wYWNpdHkgd2hpY2ggd29uJ3Qgd29yayB3aXRoXG4gICAgLy8gQ1NTIHZhcmlhYmxlcyBzbyB3ZSBuZWVkIHRvIHVzZSBgb3BhY2l0eWAgYXMgYSBmYWxsYmFjay5cbiAgICBAaWYgKHR5cGUtb2YoJG1hdC1zbGlkZXItdGljay1jb2xvcikgIT0gY29sb3IpIHtcbiAgICAgIG9wYWNpdHk6ICRtYXQtc2xpZGVyLXRpY2stb3BhY2l0eTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1zbGlkZXItdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHQge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBfbWF0LXNsaWRlci1kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBtYXQtc2xpZGVyLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiBfbWF0LWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIF9tYXQtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtc2xpZGVyJykge1xuICAgICRjb2xvcjogbWF0LWdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LXNsaWRlci1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXNsaWRlci1kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LXNsaWRlci10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cbiRtYXQtc3RlcHBlci1oZWFkZXItaGVpZ2h0OiA3MnB4ICFkZWZhdWx0O1xuLy8gTWluaW11bSBoZWlnaHQgZm9yIGhpZ2hlc3QgZGVuc2l0eSBzdGVwcGVyJ3MgaXMgZGV0ZXJtaW5lZCBiYXNlZCBvbiBob3cgbXVjaFxuLy8gc3RlcHBlciBoZWFkZXJzIGNhbiBzaHJpbmsgdW50aWwgdGhlIHN0ZXAgaWNvbiBvciBzdGVwIGxhYmVsIGV4Y2VlZC4gV2UgY2FuJ3QgdXNlXG4vLyBhIHZhbHVlIGJlbG93IGA0MnB4YCBiZWNhdXNlIHRoZSBvcHRpb25hbCBsYWJlbCBmb3Igc3RlcHMgd291bGQgb3RoZXJ3aXNlIGV4Y2VlZC5cbiRtYXQtc3RlcHBlci1oZWFkZXItbWluaW11bS1oZWlnaHQ6IDQycHggIWRlZmF1bHQ7XG4kbWF0LXN0ZXBwZXItaGVhZGVyLW1heGltdW0taGVpZ2h0OiAkbWF0LXN0ZXBwZXItaGVhZGVyLWhlaWdodCAhZGVmYXVsdDtcblxuJG1hdC1zdGVwcGVyLWRlbnNpdHktY29uZmlnOiAoXG4gIGhlaWdodDogKFxuICAgIGRlZmF1bHQ6ICRtYXQtc3RlcHBlci1oZWFkZXItaGVpZ2h0LFxuICAgIG1heGltdW06ICRtYXQtc3RlcHBlci1oZWFkZXItbWF4aW11bS1oZWlnaHQsXG4gICAgbWluaW11bTogJG1hdC1zdGVwcGVyLWhlYWRlci1taW5pbXVtLWhlaWdodCxcbiAgKVxuKSAhZGVmYXVsdDtcblxuLy8gTm90ZTogVGhlc2UgdmFyaWFibGVzIGFyZSBub3QgZGVub3RlZCB3aXRoIGAhZGVmYXVsdGAgYmVjYXVzZSB0aGV5IGFyZSB1c2VkIGluIHRoZSBub24tdGhlbWVcbi8vIGNvbXBvbmVudCBzdHlsZXMuIE1vZGlmeWluZyB0aGVzZSB2YXJpYWJsZXMgZG9lcyBub3QgaGF2ZSB0aGUgZGVzaXJlZCBlZmZlY3QgZm9yIGNvbnN1bWVycy5cbiRtYXQtc3RlcHBlci1sYWJlbC1oZWFkZXItaGVpZ2h0OiAyNHB4O1xuJG1hdC1zdGVwcGVyLWxhYmVsLXBvc2l0aW9uLWJvdHRvbS10b3AtZ2FwOiAxNnB4O1xuJG1hdC1zdGVwcGVyLWxhYmVsLW1pbi13aWR0aDogNTBweDtcblxuJG1hdC12ZXJ0aWNhbC1zdGVwcGVyLWNvbnRlbnQtbWFyZ2luOiAzNnB4O1xuXG4kbWF0LXN0ZXBwZXItc2lkZS1nYXA6IDI0cHg7XG4kbWF0LXN0ZXBwZXItbGluZS13aWR0aDogMXB4O1xuJG1hdC1zdGVwcGVyLWxpbmUtZ2FwOiA4cHg7XG5cbiRtYXQtc3RlcC1zdWItbGFiZWwtZm9udC1zaXplOiAxMnB4O1xuJG1hdC1zdGVwLWhlYWRlci1pY29uLXNpemU6IDE2cHg7XG5cblxuQG1peGluIG1hdC1zdGVwcGVyLWNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJGNvbmZpZywgcHJpbWFyeSk7XG4gICR3YXJuOiBtYXAtZ2V0KCRjb25maWcsIHdhcm4pO1xuXG4gIC5tYXQtc3RlcC1oZWFkZXIge1xuICAgICYuY2RrLWtleWJvYXJkLWZvY3VzZWQsXG4gICAgJi5jZGstcHJvZ3JhbS1mb2N1c2VkLFxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3Zlcik7XG4gICAgfVxuXG4gICAgLy8gT24gdG91Y2ggZGV2aWNlcyB0aGUgOmhvdmVyIHN0YXRlIHdpbGwgbGluZ2VyIG9uIHRoZSBlbGVtZW50IGFmdGVyIGEgdGFwLlxuICAgIC8vIFJlc2V0IGl0IHZpYSBgQG1lZGlhYCBhZnRlciB0aGUgZGVjbGFyYXRpb24sIGJlY2F1c2UgdGhlIG1lZGlhIHF1ZXJ5IGlzbid0XG4gICAgLy8gc3VwcG9ydGVkIGJ5IGFsbCBicm93c2VycyB5ZXQuXG4gICAgQG1lZGlhIChob3Zlcjogbm9uZSkge1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWxhYmVsLFxuICAgIC5tYXQtc3RlcC1vcHRpb25hbCB7XG4gICAgICAvLyBUT0RPKGpvc2VwaHBlcnJvdHQpOiBVcGRhdGUgdG8gdXNpbmcgYSBjb3JyZWN0ZWQgZGlzYWJsZWQtdGV4dCBjb250cmFzdFxuICAgICAgLy8gaW5zdGVhZCBvZiBzZWNvbmRhcnktdGV4dC5cbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgICB9XG5cbiAgICAubWF0LXN0ZXAtaWNvbiB7XG4gICAgICAvLyBUT0RPKGpvc2VwaHBlcnJvdHQpOiBVcGRhdGUgdG8gdXNpbmcgYSBjb3JyZWN0ZWQgZGlzYWJsZWQtdGV4dCBjb250cmFzdFxuICAgICAgLy8gaW5zdGVhZCBvZiBzZWNvbmRhcnktdGV4dC5cbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQsXG4gICAgLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSxcbiAgICAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICB9XG5cbiAgICAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lcnJvciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIHRleHQpO1xuICAgIH1cblxuICAgIC5tYXQtc3RlcC1sYWJlbC5tYXQtc3RlcC1sYWJlbC1hY3RpdmUge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWxhYmVsLm1hdC1zdGVwLWxhYmVsLWVycm9yIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIHRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsLCAubWF0LXN0ZXBwZXItdmVydGljYWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gIH1cblxuICAubWF0LXN0ZXBwZXItdmVydGljYWwtbGluZTo6YmVmb3JlIHtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlcjo6YmVmb3JlLFxuICAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXI6OmFmdGVyLFxuICAubWF0LXN0ZXBwZXItaG9yaXpvbnRhbC1saW5lIHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtc3RlcHBlci10eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgLm1hdC1zdGVwcGVyLXZlcnRpY2FsLCAubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtc3RlcC1sYWJlbCB7XG4gICAgZm9udDoge1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKTtcbiAgICB9O1xuICB9XG5cbiAgLm1hdC1zdGVwLXN1Yi1sYWJlbC1lcnJvciB7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgfVxuXG4gIC5tYXQtc3RlcC1sYWJlbC1lcnJvciB7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMik7XG4gIH1cblxuICAubWF0LXN0ZXAtbGFiZWwtc2VsZWN0ZWQge1xuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0yKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMik7XG4gICAgfTtcbiAgfVxufVxuXG5AbWl4aW4gX21hdC1zdGVwcGVyLWRlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkZGVuc2l0eS1zY2FsZTogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGhlaWdodDogX21hdC1kZW5zaXR5LXByb3AtdmFsdWUoJG1hdC1zdGVwcGVyLWRlbnNpdHktY29uZmlnLCAkZGVuc2l0eS1zY2FsZSwgaGVpZ2h0KTtcbiAgJHZlcnRpY2FsLXBhZGRpbmc6ICgkaGVpZ2h0IC0gJG1hdC1zdGVwcGVyLWxhYmVsLWhlYWRlci1oZWlnaHQpIC8gMjtcblxuICBAaW5jbHVkZSBfbWF0LWRlbnNpdHktbGVnYWN5LWNvbXBhdGliaWxpdHkoKSB7XG4gICAgLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyIHtcbiAgICAgIGhlaWdodDogJGhlaWdodDtcbiAgICB9XG5cbiAgICAubWF0LXN0ZXBwZXItbGFiZWwtcG9zaXRpb24tYm90dG9tIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlcixcbiAgICAubWF0LXZlcnRpY2FsLXN0ZXBwZXItaGVhZGVyLCB7XG4gICAgICBwYWRkaW5nOiAkdmVydGljYWwtcGFkZGluZyAkbWF0LXN0ZXBwZXItc2lkZS1nYXA7XG4gICAgfVxuXG4gICAgLy8gRW5zdXJlcyB0aGF0IHRoZSB2ZXJ0aWNhbCBsaW5lcyBmb3IgdGhlIHN0ZXAgY29udGVudCBleGNlZWQgaW50byB0aGUgc3RlcFxuICAgIC8vIGhlYWRlcnMgd2l0aCBhIGdpdmVuIGRpc3RhbmNlIChgJG1hdC1zdGVwcGVyLWxpbmUtZ2FwYCkgdG8gdGhlIHN0ZXAgaWNvbi5cbiAgICAubWF0LXN0ZXBwZXItdmVydGljYWwtbGluZTo6YmVmb3JlIHtcbiAgICAgIHRvcDogJG1hdC1zdGVwcGVyLWxpbmUtZ2FwIC0gJHZlcnRpY2FsLXBhZGRpbmc7XG4gICAgICBib3R0b206ICRtYXQtc3RlcHBlci1saW5lLWdhcCAtICR2ZXJ0aWNhbC1wYWRkaW5nO1xuICAgIH1cblxuICAgIC8vIEVuc3VyZXMgdGhhdCB0aGUgaG9yaXpvbnRhbCBsaW5lcyBmb3IgdGhlIHN0ZXAgaGVhZGVyIGFyZSBjZW50ZXJlZCB2ZXJ0aWNhbGx5LlxuICAgIC5tYXQtc3RlcHBlci1sYWJlbC1wb3NpdGlvbi1ib3R0b20gLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyIHtcbiAgICAgICY6OmFmdGVyLCAmOjpiZWZvcmUge1xuICAgICAgICB0b3A6ICR2ZXJ0aWNhbC1wYWRkaW5nICsgJG1hdC1zdGVwcGVyLWxhYmVsLWhlYWRlci1oZWlnaHQgLyAyO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEVuc3VyZXMgdGhhdCB0aGUgaG9yaXpvbnRhbCBsaW5lIGZvciB0aGUgc3RlcCBjb250ZW50IGlzIGFsaWduZWQgY2VudGVyZWQgdmVydGljYWxseS5cbiAgICAubWF0LXN0ZXBwZXItbGFiZWwtcG9zaXRpb24tYm90dG9tIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsLWxpbmUge1xuICAgICAgdG9wOiAkdmVydGljYWwtcGFkZGluZyArICRtYXQtc3RlcHBlci1sYWJlbC1oZWFkZXItaGVpZ2h0IC8gMjtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1zdGVwcGVyLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiBfbWF0LWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIF9tYXQtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtc3RlcHBlcicpIHtcbiAgICAkY29sb3I6IG1hdC1nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IG1hdC1nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1zdGVwcGVyLWNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtc3RlcHBlci1kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LXN0ZXBwZXItdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG5cblxuXG5cbkBtaXhpbiBtYXQtc29ydC1jb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1zb3J0LWhlYWRlci1hcnJvdyB7XG4gICAgJHRhYmxlLWJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2NhcmQnKTtcbiAgICAkdGV4dC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG5cbiAgICAvLyBCZWNhdXNlIHRoZSBhcnJvdyBpcyBtYWRlIHVwIG9mIG11bHRpcGxlIGVsZW1lbnRzIHRoYXQgYXJlIHN0YWNrZWQgb24gdG9wIG9mIGVhY2ggb3RoZXIsXG4gICAgLy8gd2UgY2FuJ3QgdXNlIHRoZSBzZW1pLXRyYW5zcGFyZW50IGNvbG9yIGZyb20gdGhlIHRoZW1lIGRpcmVjdGx5LiBJZiB0aGUgdmFsdWUgaXMgYSBjb2xvclxuICAgIC8vICp0eXBlKiwgd2UgY29udmVydCBpdCBpbnRvIGEgc29saWQgY29sb3IgYnkgdGFraW5nIHRoZSBvcGFjaXR5IGZyb20gdGhlIHJnYmEgdmFsdWUgYW5kXG4gICAgLy8gdXNpbmcgdGhlIHZhbHVlIHRvIGRldGVybWluZSB0aGUgcGVyY2VudGFnZSBvZiB0aGUgYmFja2dyb3VuZCB0byBwdXQgaW50byBmb3JlZ3JvdW5kXG4gICAgLy8gd2hlbiBtaXhpbmcgdGhlIGNvbG9ycyB0b2dldGhlci4gT3RoZXJ3aXNlLCBpZiBpdCByZXNvbHZlcyB0byBzb21ldGhpbmcgZGlmZmVyZW50XG4gICAgLy8gKGUuZy4gaXQgcmVzb2x2ZXMgdG8gYSBDU1MgdmFyaWFibGUpLCB3ZSB1c2UgdGhlIGNvbG9yIGRpcmVjdGx5LlxuICAgIEBpZiAodHlwZS1vZigkdGFibGUtYmFja2dyb3VuZCkgPT0gY29sb3IgYW5kIHR5cGUtb2YoJHRleHQtY29sb3IpID09IGNvbG9yKSB7XG4gICAgICAkdGV4dC1vcGFjaXR5OiBvcGFjaXR5KCR0ZXh0LWNvbG9yKTtcbiAgICAgIGNvbG9yOiBtaXgoJHRhYmxlLWJhY2tncm91bmQsIHJnYmEoJHRleHQtY29sb3IsIDEpLCAoMSAtICR0ZXh0LW9wYWNpdHkpICogMTAwJSk7XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1zb3J0LXR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIF9tYXQtc29ydC1kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBtYXQtc29ydC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogX21hdC1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSBfbWF0LWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LXNvcnQnKSB7XG4gICAgJGNvbG9yOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiBtYXQtZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtc29ydC1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXNvcnQtZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1zb3J0LXR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuQG1peGluIG1hdC10YWJzLWNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCRjb25maWcsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCRjb25maWcsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCRjb25maWcsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG4gICRoZWFkZXItYm9yZGVyOiAxcHggc29saWQgbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcblxuICAubWF0LXRhYi1uYXYtYmFyLFxuICAubWF0LXRhYi1oZWFkZXIge1xuICAgIGJvcmRlci1ib3R0b206ICRoZWFkZXItYm9yZGVyO1xuICB9XG5cbiAgLm1hdC10YWItZ3JvdXAtaW52ZXJ0ZWQtaGVhZGVyIHtcbiAgICAubWF0LXRhYi1uYXYtYmFyLFxuICAgIC5tYXQtdGFiLWhlYWRlciB7XG4gICAgICBib3JkZXItdG9wOiAkaGVhZGVyLWJvcmRlcjtcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLm1hdC10YWItbGFiZWwsIC5tYXQtdGFiLWxpbmsge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgJi5tYXQtdGFiLWRpc2FibGVkIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgfVxuXG4gIC8vIFJlbW92ZSBoZWFkZXIgYm9yZGVyIHdoZW4gdGhlcmUgaXMgYSBiYWNrZ3JvdW5kIGNvbG9yXG4gIC5tYXQtdGFiLWdyb3VwW2NsYXNzKj0nbWF0LWJhY2tncm91bmQtJ10gLm1hdC10YWItaGVhZGVyLFxuICAubWF0LXRhYi1uYXYtYmFyW2NsYXNzKj0nbWF0LWJhY2tncm91bmQtJ10ge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgfVxuXG4gIC5tYXQtdGFiLWdyb3VwLCAubWF0LXRhYi1uYXYtYmFyIHtcbiAgICAkdGhlbWUtY29sb3JzOiAoXG4gICAgICBwcmltYXJ5OiAkcHJpbWFyeSxcbiAgICAgIGFjY2VudDogJGFjY2VudCxcbiAgICAgIHdhcm46ICR3YXJuXG4gICAgKTtcblxuICAgIEBlYWNoICRuYW1lLCAkY29sb3IgaW4gJHRoZW1lLWNvbG9ycyB7XG4gICAgICAvLyBTZXQgdGhlIGZvcmVncm91bmQgY29sb3Igb2YgdGhlIHRhYnNcbiAgICAgICYubWF0LSN7JG5hbWV9IHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC10YWItbGFiZWwtZm9jdXMoJGNvbG9yKTtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1pbmstYmFyKCRjb2xvcik7XG5cbiAgICAgICAgLy8gT3ZlcnJpZGUgaW5rIGJhciB3aGVuIGJhY2tncm91bmQgY29sb3IgaXMgdGhlIHNhbWVcbiAgICAgICAgJi5tYXQtYmFja2dyb3VuZC0jeyRuYW1lfSB7XG4gICAgICAgICAgQGluY2x1ZGUgX21hdC1pbmstYmFyKCRjb2xvciwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBAZWFjaCAkbmFtZSwgJGNvbG9yIGluICR0aGVtZS1jb2xvcnMge1xuICAgICAgLy8gU2V0IGJhY2tncm91bmQgY29sb3Igb2YgdGhlIHRhYnMgYW5kIG92ZXJyaWRlIGZvY3VzIGNvbG9yXG4gICAgICAmLm1hdC1iYWNrZ3JvdW5kLSN7JG5hbWV9IHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC10YWItbGFiZWwtZm9jdXMoJGNvbG9yKTtcbiAgICAgICAgQGluY2x1ZGUgX21hdC10YWJzLWJhY2tncm91bmQoJGNvbG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1peGluIF9tYXQtaW5rLWJhcigkY29sb3IsICRodWU6IGRlZmF1bHQpIHtcbiAgLm1hdC1pbmstYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGNvbG9yLCAkaHVlKTtcbiAgfVxufVxuXG5AbWl4aW4gX21hdC10YWItbGFiZWwtZm9jdXMoJHRhYi1mb2N1cy1jb2xvcikge1xuICAubWF0LXRhYi1sYWJlbCxcbiAgLm1hdC10YWItbGluayB7XG4gICAgJi5jZGsta2V5Ym9hcmQtZm9jdXNlZCxcbiAgICAmLmNkay1wcm9ncmFtLWZvY3VzZWQge1xuICAgICAgJjpub3QoLm1hdC10YWItZGlzYWJsZWQpIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR0YWItZm9jdXMtY29sb3IsIGxpZ2h0ZXIsIDAuMyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBfbWF0LXRhYnMtYmFja2dyb3VuZCgkYmFja2dyb3VuZC1jb2xvcikge1xuICAvLyBTZXQgYmFja2dyb3VuZCBjb2xvciBmb3IgdGhlIHRhYiBncm91cFxuICAubWF0LXRhYi1oZWFkZXIsIC5tYXQtdGFiLWxpbmtzLCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yKTtcbiAgfVxuXG4gIC8vIFNldCBsYWJlbHMgdG8gY29udHJhc3QgYWdhaW5zdCBiYWNrZ3JvdW5kXG4gIC5tYXQtdGFiLWxhYmVsLCAubWF0LXRhYi1saW5rIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCBkZWZhdWx0LWNvbnRyYXN0KTtcblxuICAgICYubWF0LXRhYi1kaXNhYmxlZCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCBkZWZhdWx0LWNvbnRyYXN0LCAwLjQpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFNldCBwYWdpbmF0aW9uIGNoZXZyb25zIHRvIGNvbnRyYXN0IGJhY2tncm91bmRcbiAgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQtY29sb3IsIGRlZmF1bHQtY29udHJhc3QpO1xuICB9XG5cbiAgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQtY29sb3IsIGRlZmF1bHQtY29udHJhc3QsIDAuNCk7XG4gIH1cblxuICAvLyBTZXQgcmlwcGxlcyBjb2xvciB0byBiZSB0aGUgY29udHJhc3QgY29sb3Igb2YgdGhlIG5ldyBiYWNrZ3JvdW5kLiBPdGhlcndpc2UgdGhlIHJpcHBsZVxuICAvLyBjb2xvciB3aWxsIGJlIGJhc2VkIG9uIHRoZSBhcHAgYmFja2dyb3VuZCBjb2xvci5cbiAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCBkZWZhdWx0LWNvbnRyYXN0LCAwLjEyKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXRhYnMtdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gIC5tYXQtdGFiLWdyb3VwIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC10YWItbGFiZWwsIC5tYXQtdGFiLWxpbmsge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJ1dHRvbik7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJ1dHRvbik7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBidXR0b24pO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gX21hdC10YWJzLWRlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIG1hdC10YWJzLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiBfbWF0LWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIF9tYXQtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtdGFicycpIHtcbiAgICAkY29sb3I6IG1hdC1nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IG1hdC1nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC10YWJzLWNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGFicy1kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LXRhYnMtdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cbi8vIE1pbmltdW0gaGVpZ2h0IGZvciB0b29sYmFyJ3MgaW4gdGhlIGhpZ2hlc3QgZGVuc2l0eSBpcyBkaWZmaWN1bHQgdG8gZGV0ZXJtaW5lIGJlY2F1c2Vcbi8vIGRldmVsb3BlcnMgY2FuIHByb2plY3QgYXJiaXRyYXJ5IGNvbnRlbnQuIFdlIHVzZSBhIG1pbmltdW0gdmFsdWUgdGhhdCBlbnN1cmVzIHRoYXQgbW9zdFxuLy8gY29tbW9uIGNvbnRlbnQgKGUuZy4gaWNvbiBidXR0b25zKSBkb2VzIG5vdCBleGNlZWQgdGhlIHJvdyBib3VuZGFyaWVzIGluIGhpZ2hlc3QgZGVuc2l0eS5cbiRtYXQtdG9vbGJhci1taW5pbXVtLWhlaWdodDogNDRweCAhZGVmYXVsdDtcblxuJG1hdC10b29sYmFyLWhlaWdodC1kZXNrdG9wOiA2NHB4ICFkZWZhdWx0O1xuJG1hdC10b29sYmFyLW1heGltdW0taGVpZ2h0LWRlc2t0b3A6ICRtYXQtdG9vbGJhci1oZWlnaHQtZGVza3RvcCAhZGVmYXVsdDtcbiRtYXQtdG9vbGJhci1taW5pbXVtLWhlaWdodC1kZXNrdG9wOiAkbWF0LXRvb2xiYXItbWluaW11bS1oZWlnaHQgIWRlZmF1bHQ7XG5cbiRtYXQtdG9vbGJhci1oZWlnaHQtbW9iaWxlOiA1NnB4ICFkZWZhdWx0O1xuJG1hdC10b29sYmFyLW1heGltdW0taGVpZ2h0LW1vYmlsZTogJG1hdC10b29sYmFyLWhlaWdodC1tb2JpbGUgIWRlZmF1bHQ7XG4kbWF0LXRvb2xiYXItbWluaW11bS1oZWlnaHQtbW9iaWxlOiAkbWF0LXRvb2xiYXItbWluaW11bS1oZWlnaHQgIWRlZmF1bHQ7XG5cbiRtYXQtdG9vbGJhci1kZXNrdG9wLWRlbnNpdHktY29uZmlnOiAoXG4gIGhlaWdodDogKFxuICAgIGRlZmF1bHQ6ICRtYXQtdG9vbGJhci1oZWlnaHQtZGVza3RvcCxcbiAgICBtYXhpbXVtOiAkbWF0LXRvb2xiYXItbWF4aW11bS1oZWlnaHQtZGVza3RvcCxcbiAgICBtaW5pbXVtOiAkbWF0LXRvb2xiYXItbWluaW11bS1oZWlnaHQtZGVza3RvcCxcbiAgKVxuKSAhZGVmYXVsdDtcblxuJG1hdC10b29sYmFyLW1vYmlsZS1kZW5zaXR5LWNvbmZpZzogKFxuICBoZWlnaHQ6IChcbiAgICBkZWZhdWx0OiAkbWF0LXRvb2xiYXItaGVpZ2h0LW1vYmlsZSxcbiAgICBtYXhpbXVtOiAkbWF0LXRvb2xiYXItbWF4aW11bS1oZWlnaHQtbW9iaWxlLFxuICAgIG1pbmltdW06ICRtYXQtdG9vbGJhci1taW5pbXVtLWhlaWdodC1tb2JpbGUsXG4gIClcbikgIWRlZmF1bHQ7XG5cblxuQG1peGluIF9tYXQtdG9vbGJhci1oZWlnaHQoJGhlaWdodCkge1xuICAubWF0LXRvb2xiYXItbXVsdGlwbGUtcm93cyB7XG4gICAgbWluLWhlaWdodDogJGhlaWdodDtcbiAgfVxuICAubWF0LXRvb2xiYXItcm93LCAubWF0LXRvb2xiYXItc2luZ2xlLXJvdyB7XG4gICAgaGVpZ2h0OiAkaGVpZ2h0O1xuICB9XG59XG5cbkBtaXhpbiBfbWF0LXRvb2xiYXItY29sb3IoJHBhbGV0dGUpIHtcbiAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRwYWxldHRlKTtcbiAgY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCk7XG59XG5cbkBtaXhpbiBfbWF0LXRvb2xiYXItZm9ybS1maWVsZC1vdmVycmlkZXMge1xuICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lLFxuICAubWF0LWZvcm0tZmllbGQtcmlwcGxlLFxuICAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAubWF0LXNlbGVjdC12YWx1ZSxcbiAgLm1hdC1zZWxlY3QtYXJyb3csXG4gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gIH1cblxuICAubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIGNhcmV0LWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gIH1cbn1cblxuQG1peGluIG1hdC10b29sYmFyLWNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCRjb25maWcsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCRjb25maWcsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCRjb25maWcsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC10b29sYmFyIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGFwcC1iYXIpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgJi5tYXQtcHJpbWFyeSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRvb2xiYXItY29sb3IoJHByaW1hcnkpO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRvb2xiYXItY29sb3IoJGFjY2VudCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRvb2xiYXItY29sb3IoJHdhcm4pO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIF9tYXQtdG9vbGJhci1mb3JtLWZpZWxkLW92ZXJyaWRlcztcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXRvb2xiYXItdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gIC5tYXQtdG9vbGJhcixcbiAgLm1hdC10b29sYmFyIGgxLFxuICAubWF0LXRvb2xiYXIgaDIsXG4gIC5tYXQtdG9vbGJhciBoMyxcbiAgLm1hdC10b29sYmFyIGg0LFxuICAubWF0LXRvb2xiYXIgaDUsXG4gIC5tYXQtdG9vbGJhciBoNiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIHRpdGxlKTtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cblxuQG1peGluIF9tYXQtdG9vbGJhci1kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGRlbnNpdHktc2NhbGU6IG1hdC1nZXQtZGVuc2l0eS1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRoZWlnaHQtZGVza3RvcDogX21hdC1kZW5zaXR5LXByb3AtdmFsdWUoXG4gICAgICAkbWF0LXRvb2xiYXItZGVza3RvcC1kZW5zaXR5LWNvbmZpZywgJGRlbnNpdHktc2NhbGUsIGhlaWdodCk7XG4gICRoZWlnaHQtbW9iaWxlOiBfbWF0LWRlbnNpdHktcHJvcC12YWx1ZShcbiAgICAgICRtYXQtdG9vbGJhci1tb2JpbGUtZGVuc2l0eS1jb25maWcsICRkZW5zaXR5LXNjYWxlLCBoZWlnaHQpO1xuXG4gIEBpbmNsdWRlIF9tYXQtZGVuc2l0eS1sZWdhY3ktY29tcGF0aWJpbGl0eSgpIHtcbiAgICAvLyBTZXQgdGhlIGRlZmF1bHQgaGVpZ2h0IGZvciB0aGUgdG9vbGJhci5cbiAgICBAaW5jbHVkZSBfbWF0LXRvb2xiYXItaGVpZ2h0KCRoZWlnaHQtZGVza3RvcCk7XG5cbiAgICAvLyBBcyBwZXIgc3BlY3MsIHRvb2xiYXJzIHNob3VsZCBoYXZlIGEgZGlmZmVyZW50IGhlaWdodCBpbiBtb2JpbGUgZGV2aWNlcy4gVGhpcyBoYXMgYmVlblxuICAgIC8vIHNwZWNpZmllZCBpbiB0aGUgb2xkIGd1aWRlbGluZXMgYW5kIGlzIHN0aWxsIG9ic2VydmFibGUgaW4gdGhlIG5ldyBzcGVjaWZpY2F0aW9ucyBieVxuICAgIC8vIGxvb2tpbmcgYXQgdGhlIHNwZWMgaW1hZ2VzLiBTZWU6IGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2NvbXBvbmVudHMvYXBwLWJhcnMtdG9wLmh0bWwjYW5hdG9teVxuICAgIEBtZWRpYSAoJG1hdC14c21hbGwpIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdG9vbGJhci1oZWlnaHQoJGhlaWdodC1tb2JpbGUpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXRvb2xiYXItdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IF9tYXQtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgX21hdC1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC10b29sYmFyJykge1xuICAgICRjb2xvcjogbWF0LWdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LXRvb2xiYXItY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX21hdC10b29sYmFyLWRlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtdG9vbGJhci10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cbiRtYXQtdG9vbHRpcC10YXJnZXQtaGVpZ2h0OiAyMnB4O1xuJG1hdC10b29sdGlwLWZvbnQtc2l6ZTogMTBweDtcbiRtYXQtdG9vbHRpcC12ZXJ0aWNhbC1wYWRkaW5nOiAoJG1hdC10b29sdGlwLXRhcmdldC1oZWlnaHQgLSAkbWF0LXRvb2x0aXAtZm9udC1zaXplKSAvIDI7XG5cbiRtYXQtdG9vbHRpcC1oYW5kc2V0LXRhcmdldC1oZWlnaHQ6IDMwcHg7XG4kbWF0LXRvb2x0aXAtaGFuZHNldC1mb250LXNpemU6IDE0cHg7XG4kbWF0LXRvb2x0aXAtaGFuZHNldC12ZXJ0aWNhbC1wYWRkaW5nOlxuICAgICgkbWF0LXRvb2x0aXAtaGFuZHNldC10YXJnZXQtaGVpZ2h0IC0gJG1hdC10b29sdGlwLWhhbmRzZXQtZm9udC1zaXplKSAvIDI7XG5cbkBtaXhpbiBtYXQtdG9vbHRpcC1jb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcblxuICAubWF0LXRvb2x0aXAge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgdG9vbHRpcCwgMC45KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXRvb2x0aXAtdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gIC5tYXQtdG9vbHRpcCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgICBmb250LXNpemU6ICRtYXQtdG9vbHRpcC1mb250LXNpemU7XG4gICAgcGFkZGluZy10b3A6ICRtYXQtdG9vbHRpcC12ZXJ0aWNhbC1wYWRkaW5nO1xuICAgIHBhZGRpbmctYm90dG9tOiAkbWF0LXRvb2x0aXAtdmVydGljYWwtcGFkZGluZztcbiAgfVxuXG4gIC5tYXQtdG9vbHRpcC1oYW5kc2V0IHtcbiAgICBmb250LXNpemU6ICRtYXQtdG9vbHRpcC1oYW5kc2V0LWZvbnQtc2l6ZTtcbiAgICBwYWRkaW5nLXRvcDogJG1hdC10b29sdGlwLWhhbmRzZXQtdmVydGljYWwtcGFkZGluZztcbiAgICBwYWRkaW5nLWJvdHRvbTogJG1hdC10b29sdGlwLWhhbmRzZXQtdmVydGljYWwtcGFkZGluZztcbiAgfVxufVxuXG5AbWl4aW4gX21hdC10b29sdGlwLWRlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIG1hdC10b29sdGlwLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiBfbWF0LWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIF9tYXQtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtdG9vbHRpcCcpIHtcbiAgICAkY29sb3I6IG1hdC1nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IG1hdC1nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC10b29sdGlwLWNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdG9vbHRpcC1kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LXRvb2x0aXAtdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1zbmFjay1iYXItY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJGNvbmZpZywgaXMtZGFyayk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJGNvbmZpZywgYWNjZW50KTtcblxuICAubWF0LXNuYWNrLWJhci1jb250YWluZXIge1xuICAgIC8vIFVzZSB0aGUgcHJpbWFyeSB0ZXh0IG9uIHRoZSBkYXJrIHRoZW1lLCBldmVuIHRob3VnaCB0aGUgbGlnaHRlciBvbmUgdXNlc1xuICAgIC8vIGEgc2Vjb25kYXJ5LCBiZWNhdXNlIHRoZSBjb250cmFzdCBvbiB0aGUgbGlnaHQgcHJpbWFyeSB0ZXh0IGlzIHBvb3IuXG4gICAgY29sb3I6IGlmKCRpcy1kYXJrLXRoZW1lLCAkZGFyay1wcmltYXJ5LXRleHQsICRsaWdodC1zZWNvbmRhcnktdGV4dCk7XG4gICAgYmFja2dyb3VuZDogaWYoJGlzLWRhcmstdGhlbWUsIG1hcC1nZXQoJG1hdC1ncmV5LCA1MCksICMzMjMyMzIpO1xuXG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oNiwgJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LXNpbXBsZS1zbmFja2Jhci1hY3Rpb24ge1xuICAgIGNvbG9yOiBpZigkaXMtZGFyay10aGVtZSwgaW5oZXJpdCwgbWF0LWNvbG9yKCRhY2NlbnQsIHRleHQpKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNuYWNrLWJhci10eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgLm1hdC1zaW1wbGUtc25hY2tiYXIge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJvZHktMSk7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zaW1wbGUtc25hY2tiYXItYWN0aW9uIHtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IGluaGVyaXQ7XG4gICAgICBzaXplOiBpbmhlcml0O1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYnV0dG9uKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIF9tYXQtc25hY2stYmFyLWRlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIG1hdC1zbmFjay1iYXItdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IF9tYXQtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgX21hdC1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1zbmFjay1iYXInKSB7XG4gICAgJGNvbG9yOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiBtYXQtZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtc25hY2stYmFyLWNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtc25hY2stYmFyLWRlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtc25hY2stYmFyLXR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBUaGVtZSBzdHlsZXMgdGhhdCBvbmx5IGFwcGx5IHRvIHRoZSBmaWxsIGFwcGVhcmFuY2Ugb2YgdGhlIGZvcm0tZmllbGQuXG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1maWxsLWNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkY29uZmlnLCBpcy1kYXJrKTtcblxuICAkZmlsbC1iYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGJhc2UsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjEsIDAuMDQpKTtcbiAgJGZpbGwtZGlzYWJsZWQtYmFja2dyb3VuZDogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBiYXNlLCBpZigkaXMtZGFyay10aGVtZSwgMC4wNSwgMC4wMikpO1xuICAkdW5kZXJsaW5lLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjUsIDAuNDIpKTtcbiAgJGxhYmVsLWRpc2FibGVkLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwge1xuICAgIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRmaWxsLWJhY2tncm91bmQ7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZmlsbC1kaXNhYmxlZC1iYWNrZ3JvdW5kO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmU6OmJlZm9yZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yO1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQge1xuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgY29sb3I6ICRsYWJlbC1kaXNhYmxlZC1jb2xvcjtcbiAgICAgIH1cblxuICAgICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZTo6YmVmb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFVzZWQgdG8gbWFrZSBpbnN0YW5jZXMgb2YgdGhlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyBtaXhpbiBuZWdsaWdpYmx5IGRpZmZlcmVudCxcbi8vIGFuZCBwcmV2ZW50IEdvb2dsZSdzIENTUyBPcHRpbWl6ZXIgZnJvbSBjb2xsYXBzaW5nIHRoZSBkZWNsYXJhdGlvbnMuIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2Ugc29tZVxuLy8gb2YgdGhlIHNlbGVjdG9ycyBjb250YWluIHBzZXVkby1jbGFzc2VzIG5vdCByZWNvZ25pemVkIGluIGFsbCBicm93c2Vycy4gSWYgYSBicm93c2VyIGVuY291bnRlcnNcbi8vIGFuIHVua25vd24gcHNldWRvLWNsYXNzIGl0IHdpbGwgZGlzY2FyZCB0aGUgZW50aXJlIHJ1bGUgc2V0LlxuJG1hdC1mb3JtLWZpZWxkLWZpbGwtZGVkdXBlOiAwO1xuXG4vLyBBcHBsaWVzIGEgZmxvYXRpbmcgbGFiZWwgYWJvdmUgdGhlIGZvcm0gZmllbGQgY29udHJvbCBpdHNlbGYuXG5AbWl4aW4gX21hdC1mb3JtLWZpZWxkLWZpbGwtbGFiZWwtZmxvYXRpbmcoJGZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcgKyAkbWF0LWZvcm0tZmllbGQtZmlsbC1kZWR1cGUpXG4gICAgICAgICAgICAgc2NhbGUoJGZvbnQtc2NhbGUpO1xuICB3aWR0aDogMTAwJSAvICRmb250LXNjYWxlICsgJG1hdC1mb3JtLWZpZWxkLWZpbGwtZGVkdXBlO1xuXG4gICRtYXQtZm9ybS1maWVsZC1maWxsLWRlZHVwZTogJG1hdC1mb3JtLWZpZWxkLWZpbGwtZGVkdXBlICsgMC4wMDAwMSAhZ2xvYmFsO1xufVxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtZmlsbC10eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuICAvLyBUaGUgYW1vdW50IHRvIHNjYWxlIHRoZSBmb250IGZvciB0aGUgZmxvYXRpbmcgbGFiZWwgYW5kIHN1YnNjcmlwdC5cbiAgJHN1YnNjcmlwdC1mb250LXNjYWxlOiAwLjc1O1xuICAvLyBUaGUgcGFkZGluZyBvbiB0b3Agb2YgdGhlIGluZml4LlxuICAkaW5maXgtcGFkZGluZy10b3A6IDAuMjVlbTtcbiAgLy8gVGhlIHBhZGRpbmcgYmVsb3cgdGhlIGluZml4LlxuICAkaW5maXgtcGFkZGluZy1ib3R0b206IDAuNzVlbTtcbiAgLy8gVGhlIG1hcmdpbiBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLWluZml4IHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBmbG9hdGluZyBsYWJlbC5cbiAgJGluZml4LW1hcmdpbi10b3A6IDFlbSAqICRsaW5lLWhlaWdodCAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gVGhlIGFtb3VudCB3ZSBvZmZzZXQgdGhlIGxhYmVsIGZyb20gdGhlIGlucHV0IHRleHQgaW4gdGhlIGZpbGwgYXBwZWFyYW5jZS5cbiAgJGZpbGwtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQ6IC0wLjVlbTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIHtcbiAgICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgICAgcGFkZGluZzogJGluZml4LXBhZGRpbmctdG9wIDAgJGluZml4LXBhZGRpbmctYm90dG9tIDA7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIHRvcDogJGluZml4LW1hcmdpbi10b3AgKyAkaW5maXgtcGFkZGluZy10b3A7XG4gICAgICBtYXJnaW4tdG9wOiAkZmlsbC1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldDtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCB7XG4gICAgICAmLm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gICAgICAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1maWxsLWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmctdG9wICsgJGZpbGwtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQsXG4gICAgICAgICAgICAgICAgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAgIC8vICh1c2VkIGFzIGEgcHVyZSBDU1Mgc3RhbmQtaW4gZm9yIG1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCkuXG4gICAgICAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWZpbGwtbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZy10b3AgKyAkZmlsbC1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldCxcbiAgICAgICAgICAgICAgICAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBfbWF0LWZvcm0tZmllbGQtZmlsbC1kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1maWxsLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiBfbWF0LWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIF9tYXQtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtZm9ybS1maWVsZC1maWxsJykge1xuICAgICRjb2xvcjogbWF0LWdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtZmlsbC1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtZmlsbC1kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtZmlsbC10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuXG4vLyBUaGVtZSBzdHlsZXMgdGhhdCBvbmx5IGFwcGx5IHRvIHRoZSBsZWdhY3kgYXBwZWFyYW5jZSBvZiB0aGUgZm9ybS1maWVsZC5cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1jb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJGNvbmZpZywgaXMtZGFyayk7XG5cbiAgJGxhYmVsLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgJHVuZGVybGluZS1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMC43LCAwLjQyKSk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IHtcbiAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgY29sb3I6ICRsYWJlbC1jb2xvcjtcbiAgICB9XG5cbiAgICAubWF0LWhpbnQge1xuICAgICAgY29sb3I6ICRsYWJlbC1jb2xvcjtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3I7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1jb250cm9sLWRpc2FibGVkLXVuZGVybGluZSgkdW5kZXJsaW5lLWNvbG9yKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gVXNlZCB0byBtYWtlIGluc3RhbmNlcyBvZiB0aGUgX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nIG1peGluIG5lZ2xpZ2libHkgZGlmZmVyZW50LFxuLy8gYW5kIHByZXZlbnQgR29vZ2xlJ3MgQ1NTIE9wdGltaXplciBmcm9tIGNvbGxhcHNpbmcgdGhlIGRlY2xhcmF0aW9ucy4gVGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBzb21lXG4vLyBvZiB0aGUgc2VsZWN0b3JzIGNvbnRhaW4gcHNldWRvLWNsYXNzZXMgbm90IHJlY29nbml6ZWQgaW4gYWxsIGJyb3dzZXJzLiBJZiBhIGJyb3dzZXIgZW5jb3VudGVyc1xuLy8gYW4gdW5rbm93biBwc2V1ZG8tY2xhc3MgaXQgd2lsbCBkaXNjYXJkIHRoZSBlbnRpcmUgcnVsZSBzZXQuXG4kbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZTogMDtcblxuLy8gQXBwbGllcyBhIGZsb2F0aW5nIGxhYmVsIGFib3ZlIHRoZSBmb3JtIGZpZWxkIGNvbnRyb2wgaXRzZWxmLlxuQG1peGluIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmcoJGZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCkge1xuICAvLyBXZSB1c2UgcGVyc3BlY3RpdmUgdG8gZml4IHRoZSB0ZXh0IGJsdXJyaW5lc3MgYXMgZGVzY3JpYmVkIGhlcmU6XG4gIC8vIGh0dHA6Ly93d3cudXNlcmFnZW50bWFuLmNvbS9ibG9nLzIwMTQvMDUvMDQvZml4aW5nLXR5cG9ncmFwaHktaW5zaWRlLW9mLTItZC1jc3MtdHJhbnNmb3Jtcy9cbiAgLy8gVGhpcyByZXN1bHRzIGluIGEgc21hbGwgaml0dGVyIGFmdGVyIHRoZSBsYWJlbCBmbG9hdHMgb24gRmlyZWZveCwgd2hpY2ggdGhlXG4gIC8vIHRyYW5zbGF0ZVogZml4ZXMuXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJGluZml4LW1hcmdpbi10b3AgLSAkaW5maXgtcGFkZGluZykgc2NhbGUoJGZvbnQtc2NhbGUpIHBlcnNwZWN0aXZlKDEwMHB4KVxuICB0cmFuc2xhdGVaKDAuMDAxcHggKyAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZSk7XG4gIC8vIFRoZSB0cmlja3MgYWJvdmUgdXNlZCB0byBzbW9vdGggb3V0IHRoZSBhbmltYXRpb24gb24gY2hyb21lIGFuZCBmaXJlZm94IGFjdHVhbGx5IG1ha2UgdGhpbmdzXG4gIC8vIHdvcnNlIG9uIElFLCBzbyB3ZSBkb24ndCBpbmNsdWRlIHRoZW0gaW4gdGhlIElFIHZlcnNpb24uXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcgKyAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZSlcbiAgICAgICAgICAgICAgICAgIHNjYWxlKCRmb250LXNjYWxlKTtcblxuICB3aWR0aDogMTAwJSAvICRmb250LXNjYWxlICsgJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGU7XG5cbiAgJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGU6ICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlICsgMC4wMDAwMSAhZ2xvYmFsO1xufVxuXG4vLyBTYW1lIGFzIG1peGluIGFib3ZlLCBidXQgb21pdHMgdGhlIHRyYW5zbGF0ZVogZm9yIHByaW50aW5nIHB1cnBvc2VzLlxuQG1peGluIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmctcHJpbnQoJGZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCkge1xuICAvLyBUaGlzIHJlc3VsdHMgaW4gYSBzbWFsbCBqaXR0ZXIgYWZ0ZXIgdGhlIGxhYmVsIGZsb2F0cyBvbiBGaXJlZm94LCB3aGljaCB0aGVcbiAgLy8gdHJhbnNsYXRlWiBmaXhlcy5cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nICsgJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGUpXG4gICAgICAgICAgICAgICAgICBzY2FsZSgkZm9udC1zY2FsZSk7XG4gIC8vIFRoZSB0cmlja3MgYWJvdmUgdXNlZCB0byBzbW9vdGggb3V0IHRoZSBhbmltYXRpb24gb24gY2hyb21lIGFuZCBmaXJlZm94IGFjdHVhbGx5IG1ha2UgdGhpbmdzXG4gIC8vIHdvcnNlIG9uIElFLCBzbyB3ZSBkb24ndCBpbmNsdWRlIHRoZW0gaW4gdGhlIElFIHZlcnNpb24uXG4gICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlOiAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZSArIDAuMDAwMDEgIWdsb2JhbDtcbn1cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS10eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuICAvLyBUaGUgYW1vdW50IHRvIHNjYWxlIHRoZSBmb250IGZvciB0aGUgZmxvYXRpbmcgbGFiZWwgYW5kIHN1YnNjcmlwdC5cbiAgJHN1YnNjcmlwdC1mb250LXNjYWxlOiAwLjc1O1xuICAvLyBUaGUgYW1vdW50IG9mIHNwYWNlIGJldHdlZW4gdGhlIHRvcCBvZiB0aGUgbGluZSBhbmQgdGhlIHRvcCBvZiB0aGUgYWN0dWFsIHRleHRcbiAgLy8gKGFzIGEgZnJhY3Rpb24gb2YgdGhlIGZvbnQtc2l6ZSkuXG4gICRsaW5lLXNwYWNpbmc6ICgkbGluZS1oZWlnaHQgLSAxKSAvIDI7XG4gIC8vIFRoZSBwYWRkaW5nIG9uIHRoZSBpbmZpeC4gTW9ja3Mgc2hvdyBoYWxmIG9mIHRoZSB0ZXh0IHNpemUsIGJ1dCBzZWVtIHRvIG1lYXN1cmUgZnJvbSB0aGUgZWRnZVxuICAvLyBvZiB0aGUgdGV4dCBpdHNlbGYsIG5vdCB0aGUgZWRnZSBvZiB0aGUgbGluZTsgdGhlcmVmb3JlIHdlIHN1YnRyYWN0IG9mZiB0aGUgbGluZSBzcGFjaW5nLlxuICAkaW5maXgtcGFkZGluZzogMC41ZW0gLSAkbGluZS1zcGFjaW5nO1xuICAvLyBUaGUgbWFyZ2luIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtaW5maXggdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsLlxuICAkaW5maXgtbWFyZ2luLXRvcDogMWVtICogJGxpbmUtaGVpZ2h0ICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBUaGUgc3BhY2UgYmV0d2VlbiB0aGUgYm90dG9tIG9mIHRoZSAubWF0LWZvcm0tZmllbGQtZmxleCBhcmVhIGFuZCB0aGUgc3Vic2NyaXB0IHdyYXBwZXIuXG4gIC8vIE1vY2tzIHNob3cgaGFsZiBvZiB0aGUgdGV4dCBzaXplLCBidXQgdGhpcyBtYXJnaW4gaXMgYXBwbGllZCB0byBhbiBlbGVtZW50IHdpdGggdGhlIHN1YnNjcmlwdFxuICAvLyB0ZXh0IGZvbnQgc2l6ZSwgc28gd2UgbmVlZCB0byBkaXZpZGUgYnkgdGhlIHNjYWxlIGZhY3RvciB0byBtYWtlIGl0IGhhbGYgb2YgdGhlIG9yaWdpbmFsIHRleHRcbiAgLy8gc2l6ZS4gV2UgYWdhaW4gbmVlZCB0byBzdWJ0cmFjdCBvZmYgdGhlIGxpbmUgc3BhY2luZyBzaW5jZSB0aGUgbW9ja3MgbWVhc3VyZSB0byB0aGUgZWRnZSBvZiB0aGVcbiAgLy8gdGV4dCwgbm90IHRoZSAgZWRnZSBvZiB0aGUgbGluZS5cbiAgJHN1YnNjcmlwdC1tYXJnaW4tdG9wOiAwLjVlbSAvICRzdWJzY3JpcHQtZm9udC1zY2FsZSAtICgkbGluZS1zcGFjaW5nICogMik7XG4gIC8vIFRoZSBwYWRkaW5nIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtd3JhcHBlciB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgc3Vic2NyaXB0LCBzaW5jZSBpdCdzXG4gIC8vIGFic29sdXRlbHkgcG9zaXRpb25lZC4gVGhpcyBpcyBhIGNvbWJpbmF0aW9uIG9mIHRoZSBzdWJzY3JpcHQncyBtYXJnaW4gYW5kIGxpbmUtaGVpZ2h0LCBidXQgd2VcbiAgLy8gbmVlZCB0byBtdWx0aXBseSBieSB0aGUgc3Vic2NyaXB0IGZvbnQgc2NhbGUgZmFjdG9yIHNpbmNlIHRoZSB3cmFwcGVyIGhhcyBhIGxhcmdlciBmb250IHNpemUuXG4gICR3cmFwcGVyLXBhZGRpbmctYm90dG9tOiAoJHN1YnNjcmlwdC1tYXJnaW4tdG9wICsgJGxpbmUtaGVpZ2h0KSAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kge1xuICAgIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgICAgcGFkZGluZzogJGluZml4LXBhZGRpbmcgMDtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCB7XG4gICAgICAmLm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gICAgICAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuXG4gICAgICAvLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wIHdpbGwgcmVseSBvbiBBdXRvZmlsbE1vbml0b3IgaW5zdGVhZC5cbiAgICAgIC5tYXQtZm9ybS1maWVsZC1hdXRvZmlsbC1jb250cm9sOi13ZWJraXQtYXV0b2ZpbGwgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNlcnZlci1zaWRlIHJlbmRlcmVkIG1hdElucHV0IHdpdGggYSBsYWJlbCBhdHRyaWJ1dGUgYnV0IGxhYmVsIG5vdCBzaG93blxuICAgICAgLy8gKHVzZWQgYXMgYSBwdXJlIENTUyBzdGFuZC1pbiBmb3IgbWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0KS5cbiAgICAgIC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgdG9wOiAkaW5maXgtbWFyZ2luLXRvcCArICRpbmZpeC1wYWRkaW5nO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgICAgLy8gV2Ugd2FudCB0aGUgdW5kZXJsaW5lIHRvIHN0YXJ0IGF0IHRoZSBlbmQgb2YgdGhlIGNvbnRlbnQgYm94LCBub3QgdGhlIHBhZGRpbmcgYm94LFxuICAgICAgLy8gc28gd2UgbW92ZSBpdCB1cCBieSB0aGUgcGFkZGluZyBhbW91bnQuXG4gICAgICBib3R0b206ICR3cmFwcGVyLXBhZGRpbmctYm90dG9tO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlciB7XG4gICAgICBtYXJnaW4tdG9wOiAkc3Vic2NyaXB0LW1hcmdpbi10b3A7XG5cbiAgICAgIC8vIFdlIHdhbnQgdGhlIHN1YnNjcmlwdCB0byBzdGFydCBhdCB0aGUgZW5kIG9mIHRoZSBjb250ZW50IGJveCwgbm90IHRoZSBwYWRkaW5nIGJveCxcbiAgICAgIC8vIHNvIHdlIG1vdmUgaXQgdXAgYnkgdGhlIHBhZGRpbmcgYW1vdW50IChhZGp1c3RlZCBmb3IgdGhlIHNtYWxsZXIgZm9udCBzaXplKTtcbiAgICAgIHRvcDogY2FsYygxMDAlIC0gI3skd3JhcHBlci1wYWRkaW5nLWJvdHRvbSAvICRzdWJzY3JpcHQtZm9udC1zY2FsZX0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIHRyYW5zbGF0ZVogY2F1c2VzIHRoZSBsYWJlbCB0byBub3QgYXBwZWFyIHdoaWxlIHByaW50aW5nLCBzbyB3ZSBvdmVycmlkZSBpdCB0byBub3RcbiAgLy8gYXBwbHkgdHJhbnNsYXRlWiB3aGlsZSBwcmludGluZ1xuICBAbWVkaWEgcHJpbnQge1xuICAgIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSB7XG4gICAgICAmLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCB7XG4gICAgICAgICYubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmctcHJpbnQoXG4gICAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wIHdpbGwgcmVseSBvbiBBdXRvZmlsbE1vbml0b3IgaW5zdGVhZC5cbiAgICAgICAgLm1hdC1mb3JtLWZpZWxkLWF1dG9maWxsLWNvbnRyb2w6LXdlYmtpdC1hdXRvZmlsbCArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZy1wcmludChcbiAgICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNlcnZlci1zaWRlIHJlbmRlcmVkIG1hdElucHV0IHdpdGggYSBsYWJlbCBhdHRyaWJ1dGUgYnV0IGxhYmVsIG5vdCBzaG93blxuICAgICAgICAvLyAodXNlZCBhcyBhIHB1cmUgQ1NTIHN0YW5kLWluIGZvciBtYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQpLlxuICAgICAgICAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmctcHJpbnQoXG4gICAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1peGluIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtbGVnYWN5LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiBfbWF0LWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIF9tYXQtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtZm9ybS1maWVsZC1sZWdhY3knKSB7XG4gICAgJGNvbG9yOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiBtYXQtZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1sZWdhY3ktY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtbGVnYWN5LXR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG5cbi8vIFRoZW1lIHN0eWxlcyB0aGF0IG9ubHkgYXBwbHkgdG8gdGhlIG91dGxpbmUgYXBwZWFyYW5jZSBvZiB0aGUgZm9ybS1maWVsZC5cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJGNvbmZpZywgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJGNvbmZpZywgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJGNvbmZpZywgd2Fybik7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkY29uZmlnLCBpcy1kYXJrKTtcblxuICAkbGFiZWwtZGlzYWJsZWQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gICRvdXRsaW5lLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjMsIDAuMTIpKTtcbiAgJG91dGxpbmUtY29sb3ItaG92ZXI6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDEsIDAuODcpKTtcbiAgJG91dGxpbmUtY29sb3ItcHJpbWFyeTogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgJG91dGxpbmUtY29sb3ItYWNjZW50OiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICRvdXRsaW5lLWNvbG9yLXdhcm46IG1hdC1jb2xvcigkd2Fybik7XG4gICRvdXRsaW5lLWNvbG9yLWRpc2FibGVkOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjE1LCAwLjA2KSk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci1ob3ZlcjtcbiAgICB9XG5cbiAgICAmLm1hdC1mb2N1c2VkIHtcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLXByaW1hcnk7XG4gICAgICB9XG5cbiAgICAgICYubWF0LWFjY2VudCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gICAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci1hY2NlbnQ7XG4gICAgICB9XG5cbiAgICAgICYubWF0LXdhcm4gLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICAgICAgICBjb2xvcjogJG91dGxpbmUtY29sb3Itd2FybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDbGFzcyByZXBlYXRlZCBzbyB0aGF0IHJ1bGUgaXMgc3BlY2lmaWMgZW5vdWdoIHRvIG92ZXJyaWRlIGZvY3VzZWQgYWNjZW50IGNvbG9yIGNhc2UuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1pbnZhbGlkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQge1xuICAgICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICAgICAgICBjb2xvcjogJG91dGxpbmUtY29sb3Itd2FybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIHtcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIGNvbG9yOiAkbGFiZWwtZGlzYWJsZWQtY29sb3I7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLWRpc2FibGVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBVc2VkIHRvIG1ha2UgaW5zdGFuY2VzIG9mIHRoZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcgbWl4aW4gbmVnbGlnaWJseSBkaWZmZXJlbnQsXG4vLyBhbmQgcHJldmVudCBHb29nbGUncyBDU1MgT3B0aW1pemVyIGZyb20gY29sbGFwc2luZyB0aGUgZGVjbGFyYXRpb25zLiBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIHNvbWVcbi8vIG9mIHRoZSBzZWxlY3RvcnMgY29udGFpbiBwc2V1ZG8tY2xhc3NlcyBub3QgcmVjb2duaXplZCBpbiBhbGwgYnJvd3NlcnMuIElmIGEgYnJvd3NlciBlbmNvdW50ZXJzXG4vLyBhbiB1bmtub3duIHBzZXVkby1jbGFzcyBpdCB3aWxsIGRpc2NhcmQgdGhlIGVudGlyZSBydWxlIHNldC5cbiRtYXQtZm9ybS1maWVsZC1vdXRsaW5lLWRlZHVwZTogMDtcblxuLy8gQXBwbGllcyBhIGZsb2F0aW5nIGxhYmVsIGFib3ZlIHRoZSBmb3JtIGZpZWxkIGNvbnRyb2wgaXRzZWxmLlxuQG1peGluIF9tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWxhYmVsLWZsb2F0aW5nKCRmb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nICsgJG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZGVkdXBlKVxuICBzY2FsZSgkZm9udC1zY2FsZSk7XG4gIHdpZHRoOiAxMDAlIC8gJGZvbnQtc2NhbGUgKyAkbWF0LWZvcm0tZmllbGQtb3V0bGluZS1kZWR1cGU7XG5cbiAgJG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZGVkdXBlOiAkbWF0LWZvcm0tZmllbGQtb3V0bGluZS1kZWR1cGUgKyAwLjAwMDAxICFnbG9iYWw7XG59XG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1vdXRsaW5lLXR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAvLyBUaGUgdW5pdC1sZXNzIGxpbmUtaGVpZ2h0IGZyb20gdGhlIGZvbnQgY29uZmlnLlxuICAkbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBpbnB1dCk7XG4gIC8vIFRoZSBhbW91bnQgdG8gc2NhbGUgdGhlIGZvbnQgZm9yIHRoZSBmbG9hdGluZyBsYWJlbCBhbmQgc3Vic2NyaXB0LlxuICAkc3Vic2NyaXB0LWZvbnQtc2NhbGU6IDAuNzU7XG4gIC8vIFRoZSBwYWRkaW5nIGFib3ZlIGFuZCBiZWxvdyB0aGUgaW5maXguXG4gICRpbmZpeC1wYWRkaW5nOiAxZW07XG4gIC8vIFRoZSBtYXJnaW4gYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC1pbmZpeCB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgZmxvYXRpbmcgbGFiZWwuXG4gICRpbmZpeC1tYXJnaW4tdG9wOiAxZW0gKiAkbGluZS1oZWlnaHQgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIFRoZSBzcGFjZSBiZXR3ZWVuIHRoZSBib3R0b20gb2YgdGhlIC5tYXQtZm9ybS1maWVsZC1mbGV4IGFyZWEgYW5kIHRoZSBzdWJzY3JpcHQgd3JhcHBlci5cbiAgLy8gTW9ja3Mgc2hvdyBoYWxmIG9mIHRoZSB0ZXh0IHNpemUsIGJ1dCB0aGlzIG1hcmdpbiBpcyBhcHBsaWVkIHRvIGFuIGVsZW1lbnQgd2l0aCB0aGUgc3Vic2NyaXB0XG4gIC8vIHRleHQgZm9udCBzaXplLCBzbyB3ZSBuZWVkIHRvIGRpdmlkZSBieSB0aGUgc2NhbGUgZmFjdG9yIHRvIG1ha2UgaXQgaGFsZiBvZiB0aGUgb3JpZ2luYWwgdGV4dFxuICAvLyBzaXplLlxuICAkc3Vic2NyaXB0LW1hcmdpbi10b3A6IDAuNWVtIC8gJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBUaGUgcGFkZGluZyBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLXdyYXBwZXIgdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIHN1YnNjcmlwdCwgc2luY2UgaXQnc1xuICAvLyBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQuIFRoaXMgaXMgYSBjb21iaW5hdGlvbiBvZiB0aGUgc3Vic2NyaXB0J3MgbWFyZ2luIGFuZCBsaW5lLWhlaWdodCwgYnV0IHdlXG4gIC8vIG5lZWQgdG8gbXVsdGlwbHkgYnkgdGhlIHN1YnNjcmlwdCBmb250IHNjYWxlIGZhY3RvciBzaW5jZSB0aGUgd3JhcHBlciBoYXMgYSBsYXJnZXIgZm9udCBzaXplLlxuICAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTogKCRzdWJzY3JpcHQtbWFyZ2luLXRvcCArICRsaW5lLWhlaWdodCkgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIFRoZSBhbW91bnQgd2Ugb2Zmc2V0IHRoZSBsYWJlbCBmcm9tIHRoZSBpbnB1dCB0ZXh0IGluIHRoZSBvdXRsaW5lIGFwcGVhcmFuY2UuXG4gICRvdXRsaW5lLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0OiAtMC4yNWVtO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUge1xuICAgIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgICBwYWRkaW5nOiAkaW5maXgtcGFkZGluZyAwICRpbmZpeC1wYWRkaW5nIDA7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIHRvcDogJGluZml4LW1hcmdpbi10b3AgKyAkaW5maXgtcGFkZGluZztcbiAgICAgIG1hcmdpbi10b3A6ICRvdXRsaW5lLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0O1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IHtcbiAgICAgICYubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgICAgIC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLW91dGxpbmUtbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZyArICRvdXRsaW5lLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0LFxuICAgICAgICAgICAgICAgICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2VydmVyLXNpZGUgcmVuZGVyZWQgbWF0SW5wdXQgd2l0aCBhIGxhYmVsIGF0dHJpYnV0ZSBidXQgbGFiZWwgbm90IHNob3duXG4gICAgICAvLyAodXNlZCBhcyBhIHB1cmUgQ1NTIHN0YW5kLWluIGZvciBtYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQpLlxuICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcgKyAkb3V0bGluZS1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldCxcbiAgICAgICAgICAgICAgICAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBfbWF0LWZvcm0tZmllbGQtb3V0bGluZS1kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiBfbWF0LWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIF9tYXQtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtZm9ybS1maWVsZC1vdXRsaW5lJykge1xuICAgICRjb2xvcjogbWF0LWdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtb3V0bGluZS1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtb3V0bGluZS1kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtb3V0bGluZS10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuXG5cbi8vIFRoZW1lIHN0eWxlcyB0aGF0IG9ubHkgYXBwbHkgdG8gdGhlIHN0YW5kYXJkIGFwcGVhcmFuY2Ugb2YgdGhlIGZvcm0tZmllbGQuXG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1zdGFuZGFyZC1jb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJGNvbmZpZywgaXMtZGFyayk7XG5cbiAgJHVuZGVybGluZS1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMC43LCAwLjQyKSk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvcjtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgICAgQGluY2x1ZGUgbWF0LWNvbnRyb2wtZGlzYWJsZWQtdW5kZXJsaW5lKCR1bmRlcmxpbmUtY29sb3IpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtc3RhbmRhcmQtdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gX21hdC1mb3JtLWZpZWxkLXN0YW5kYXJkLWRlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLXN0YW5kYXJkLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiBfbWF0LWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIF9tYXQtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtZm9ybS1maWVsZC1zdGFuZGFyZCcpIHtcbiAgICAkY29sb3I6IG1hdC1nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IG1hdC1nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLXN0YW5kYXJkLWNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1zdGFuZGFyZC1kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtc3RhbmRhcmQtdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG5cblxuLy8gQ29sb3Igc3R5bGVzIHRoYXQgYXBwbHkgdG8gYWxsIGFwcGVhcmFuY2VzIG9mIHRoZSBmb3JtLWZpZWxkLlxuQG1peGluIG1hdC1mb3JtLWZpZWxkLWNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCRjb25maWcsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCRjb25maWcsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCRjb25maWcsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCRjb25maWcsIGlzLWRhcmspO1xuXG4gIC8vIExhYmVsIGNvbG9ycy4gUmVxdWlyZWQgaXMgdXNlZCBmb3IgdGhlIGAqYCBzdGFyIHNob3duIGluIHRoZSBsYWJlbC5cbiAgJGxhYmVsLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0LCBpZigkaXMtZGFyay10aGVtZSwgMC43LCAwLjYpKTtcbiAgJGZvY3VzZWQtbGFiZWwtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgdGV4dCk7XG4gICRyZXF1aXJlZC1sYWJlbC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQsIHRleHQpO1xuXG4gIC8vIFVuZGVybGluZSBjb2xvcnMuXG4gICR1bmRlcmxpbmUtY29sb3ItYmFzZTogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMSwgMC44NykpO1xuICAkdW5kZXJsaW5lLWNvbG9yLWFjY2VudDogbWF0LWNvbG9yKCRhY2NlbnQsIHRleHQpO1xuICAkdW5kZXJsaW5lLWNvbG9yLXdhcm46IG1hdC1jb2xvcigkd2FybiwgdGV4dCk7XG4gICR1bmRlcmxpbmUtZm9jdXNlZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCB0ZXh0KTtcblxuICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIGNvbG9yOiAkbGFiZWwtY29sb3I7XG4gIH1cblxuICAubWF0LWhpbnQge1xuICAgIGNvbG9yOiAkbGFiZWwtY29sb3I7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICBjb2xvcjogJGZvY3VzZWQtbGFiZWwtY29sb3I7XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3ItYWNjZW50O1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgICB9XG4gIH1cblxuICAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlciB7XG4gICAgY29sb3I6ICRyZXF1aXJlZC1sYWJlbC1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3ItYmFzZTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWZvY3VzZWQtY29sb3I7XG5cbiAgICAgICYubWF0LWFjY2VudCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3ItYWNjZW50O1xuICAgICAgfVxuXG4gICAgICAmLm1hdC13YXJuIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb2N1c2VkOm5vdCgubWF0LWZvcm0tZmllbGQtaW52YWxpZCkge1xuICAgIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICAgICAgY29sb3I6ICR1bmRlcmxpbmUtZm9jdXNlZC1jb2xvcjtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci1hY2NlbnQ7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG4gICAgfVxuICB9XG5cbiAgLy8gU3R5bGluZyBmb3IgdGhlIGVycm9yIHN0YXRlIG9mIHRoZSBmb3JtIGZpZWxkLiBOb3RlIHRoYXQgd2hpbGUgdGhlIHNhbWUgY2FuIGJlXG4gIC8vIGFjaGlldmVkIHdpdGggdGhlIG5nLSogY2xhc3Nlcywgd2UgdXNlIHRoaXMgYXBwcm9hY2ggaW4gb3JkZXIgdG8gZW5zdXJlIHRoYXQgdGhlIHNhbWVcbiAgLy8gbG9naWMgaXMgdXNlZCB0byBzdHlsZSB0aGUgZXJyb3Igc3RhdGUgYW5kIHRvIHNob3cgdGhlIGVycm9yIG1lc3NhZ2VzLlxuICAubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG5cbiAgICAgICYubWF0LWFjY2VudCxcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1yZXF1aXJlZC1tYXJrZXIge1xuICAgICAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUsXG4gICAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZS5tYXQtYWNjZW50IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgICB9XG4gIH1cblxuICAubWF0LWVycm9yIHtcbiAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuICB9XG5cbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtbGVnYWN5LWNvbG9yKCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1zdGFuZGFyZC1jb2xvcigkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtZmlsbC1jb2xvcigkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtb3V0bGluZS1jb2xvcigkY29uZmlnKTtcbn1cblxuLy8gVXNlZCB0byBtYWtlIGluc3RhbmNlcyBvZiB0aGUgX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nIG1peGluIG5lZ2xpZ2libHkgZGlmZmVyZW50LFxuLy8gYW5kIHByZXZlbnQgR29vZ2xlJ3MgQ1NTIE9wdGltaXplciBmcm9tIGNvbGxhcHNpbmcgdGhlIGRlY2xhcmF0aW9ucy4gVGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBzb21lXG4vLyBvZiB0aGUgc2VsZWN0b3JzIGNvbnRhaW4gcHNldWRvLWNsYXNzZXMgbm90IHJlY29nbml6ZWQgaW4gYWxsIGJyb3dzZXJzLiBJZiBhIGJyb3dzZXIgZW5jb3VudGVyc1xuLy8gYW4gdW5rbm93biBwc2V1ZG8tY2xhc3MgaXQgd2lsbCBkaXNjYXJkIHRoZSBlbnRpcmUgcnVsZSBzZXQuXG4kbWF0LWZvcm0tZmllbGQtZGVkdXBlOiAwO1xuXG4vLyBBcHBsaWVzIGEgZmxvYXRpbmcgbGFiZWwgYWJvdmUgdGhlIGZvcm0gZmllbGQgY29udHJvbCBpdHNlbGYuXG5AbWl4aW4gX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nKCRmb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nICsgJG1hdC1mb3JtLWZpZWxkLWRlZHVwZSlcbiAgICAgICAgICAgICBzY2FsZSgkZm9udC1zY2FsZSk7XG4gIHdpZHRoOiAxMDAlIC8gJGZvbnQtc2NhbGUgKyAkbWF0LWZvcm0tZmllbGQtZGVkdXBlO1xuXG4gICRtYXQtZm9ybS1maWVsZC1kZWR1cGU6ICRtYXQtZm9ybS1maWVsZC1kZWR1cGUgKyAwLjAwMDAxICFnbG9iYWw7XG59XG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC10eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuXG4gIC8vIFRoZSBhbW91bnQgdG8gc2NhbGUgdGhlIGZvbnQgZm9yIHRoZSBmbG9hdGluZyBsYWJlbCBhbmQgc3Vic2NyaXB0LlxuICAkc3Vic2NyaXB0LWZvbnQtc2NhbGU6IDAuNzU7XG4gIC8vIFRoZSBhbW91bnQgdG8gc2NhbGUgdGhlIGZvbnQgZm9yIHRoZSBwcmVmaXggYW5kIHN1ZmZpeCBpY29ucy5cbiAgJHByZWZpeC1zdWZmaXgtaWNvbi1mb250LXNjYWxlOiAxLjU7XG5cbiAgLy8gVGhlIHBhZGRpbmcgb24gdGhlIGluZml4LiBNb2NrcyBzaG93IGhhbGYgb2YgdGhlIHRleHQgc2l6ZS5cbiAgJGluZml4LXBhZGRpbmc6IDAuNWVtO1xuICAvLyBUaGUgbWFyZ2luIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtaW5maXggdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsLlxuICAkaW5maXgtbWFyZ2luLXRvcDogMWVtICogJGxpbmUtaGVpZ2h0ICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBGb250IHNpemUgdG8gdXNlIGZvciB0aGUgbGFiZWwgYW5kIHN1YnNjcmlwdCB0ZXh0LlxuICAkc3Vic2NyaXB0LWZvbnQtc2l6ZTogJHN1YnNjcmlwdC1mb250LXNjYWxlICogMTAwJTtcbiAgLy8gRm9udCBzaXplIHRvIHVzZSBmb3IgdGhlIGZvciB0aGUgcHJlZml4IGFuZCBzdWZmaXggaWNvbnMuXG4gICRwcmVmaXgtc3VmZml4LWljb24tZm9udC1zaXplOiAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2NhbGUgKiAxMDAlO1xuICAvLyBUaGUgc3BhY2UgYmV0d2VlbiB0aGUgYm90dG9tIG9mIHRoZSAubWF0LWZvcm0tZmllbGQtZmxleCBhcmVhIGFuZCB0aGUgc3Vic2NyaXB0IHdyYXBwZXIuXG4gIC8vIE1vY2tzIHNob3cgaGFsZiBvZiB0aGUgdGV4dCBzaXplLCBidXQgdGhpcyBtYXJnaW4gaXMgYXBwbGllZCB0byBhbiBlbGVtZW50IHdpdGggdGhlIHN1YnNjcmlwdFxuICAvLyB0ZXh0IGZvbnQgc2l6ZSwgc28gd2UgbmVlZCB0byBkaXZpZGUgYnkgdGhlIHNjYWxlIGZhY3RvciB0byBtYWtlIGl0IGhhbGYgb2YgdGhlIG9yaWdpbmFsIHRleHRcbiAgLy8gc2l6ZS5cbiAgJHN1YnNjcmlwdC1tYXJnaW4tdG9wOiAwLjVlbSAvICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gVGhlIHBhZGRpbmcgYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC13cmFwcGVyIHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBzdWJzY3JpcHQsIHNpbmNlIGl0J3NcbiAgLy8gYWJzb2x1dGVseSBwb3NpdGlvbmVkLiBUaGlzIGlzIGEgY29tYmluYXRpb24gb2YgdGhlIHN1YnNjcmlwdCdzIG1hcmdpbiBhbmQgbGluZS1oZWlnaHQsIGJ1dCB3ZVxuICAvLyBuZWVkIHRvIG11bHRpcGx5IGJ5IHRoZSBzdWJzY3JpcHQgZm9udCBzY2FsZSBmYWN0b3Igc2luY2UgdGhlIHdyYXBwZXIgaGFzIGEgbGFyZ2VyIGZvbnQgc2l6ZS5cbiAgJHdyYXBwZXItcGFkZGluZy1ib3R0b206ICgkc3Vic2NyaXB0LW1hcmdpbi10b3AgKyAkbGluZS1oZWlnaHQpICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGlucHV0KTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogJHdyYXBwZXItcGFkZGluZy1ib3R0b207XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtcHJlZml4LFxuICAubWF0LWZvcm0tZmllbGQtc3VmZml4IHtcbiAgICAvLyBBbGxvdyBpY29ucyBpbiBhIHByZWZpeCBvciBzdWZmaXggdG8gYWRhcHQgdG8gdGhlIGNvcnJlY3Qgc2l6ZS5cbiAgICAubWF0LWljb24ge1xuICAgICAgZm9udC1zaXplOiAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2l6ZTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XG4gICAgfVxuXG4gICAgLy8gQWxsb3cgaWNvbiBidXR0b25zIGluIGEgcHJlZml4IG9yIHN1ZmZpeCB0byBhZGFwdCB0byB0aGUgY29ycmVjdCBzaXplLlxuICAgIC5tYXQtaWNvbi1idXR0b24ge1xuICAgICAgaGVpZ2h0OiAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2NhbGUgKiAxZW07XG4gICAgICB3aWR0aDogJHByZWZpeC1zdWZmaXgtaWNvbi1mb250LXNjYWxlICogMWVtO1xuXG4gICAgICAubWF0LWljb24ge1xuICAgICAgICBoZWlnaHQ6ICRsaW5lLWhlaWdodCAqIDFlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgIHBhZGRpbmc6ICRpbmZpeC1wYWRkaW5nIDA7XG4gICAgLy8gVGhyb3dzIG9mZiB0aGUgYmFzZWxpbmUgaWYgd2UgZG8gaXQgYXMgYSByZWFsIG1hcmdpbiwgc28gd2UgZG8gaXQgYXMgYSBib3JkZXIgaW5zdGVhZC5cbiAgICBib3JkZXItdG9wOiAkaW5maXgtbWFyZ2luLXRvcCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQge1xuICAgICYubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgICAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICB9XG5cbiAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAvLyAodXNlZCBhcyBhIHB1cmUgQ1NTIHN0YW5kLWluIGZvciBtYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQpLlxuICAgIC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciB7XG4gICAgdG9wOiAtJGluZml4LW1hcmdpbi10b3A7XG4gICAgcGFkZGluZy10b3A6ICRpbmZpeC1tYXJnaW4tdG9wO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICB0b3A6ICRpbmZpeC1tYXJnaW4tdG9wICsgJGluZml4LXBhZGRpbmc7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAvLyBXZSB3YW50IHRoZSB1bmRlcmxpbmUgdG8gc3RhcnQgYXQgdGhlIGVuZCBvZiB0aGUgY29udGVudCBib3gsIG5vdCB0aGUgcGFkZGluZyBib3gsXG4gICAgLy8gc28gd2UgbW92ZSBpdCB1cCBieSB0aGUgcGFkZGluZyBhbW91bnQuXG4gICAgYm90dG9tOiAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlciB7XG4gICAgZm9udC1zaXplOiAkc3Vic2NyaXB0LWZvbnQtc2l6ZTtcbiAgICBtYXJnaW4tdG9wOiAkc3Vic2NyaXB0LW1hcmdpbi10b3A7XG5cbiAgICAvLyBXZSB3YW50IHRoZSBzdWJzY3JpcHQgdG8gc3RhcnQgYXQgdGhlIGVuZCBvZiB0aGUgY29udGVudCBib3gsIG5vdCB0aGUgcGFkZGluZyBib3gsXG4gICAgLy8gc28gd2UgbW92ZSBpdCB1cCBieSB0aGUgcGFkZGluZyBhbW91bnQgKGFkanVzdGVkIGZvciB0aGUgc21hbGxlciBmb250IHNpemUpO1xuICAgIHRvcDogY2FsYygxMDAlIC0gI3skd3JhcHBlci1wYWRkaW5nLWJvdHRvbSAvICRzdWJzY3JpcHQtZm9udC1zY2FsZX0pO1xuICB9XG5cbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtbGVnYWN5LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLXN0YW5kYXJkLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLWZpbGwtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtb3V0bGluZS10eXBvZ3JhcGh5KCRjb25maWcpO1xufVxuXG5AbWl4aW4gX21hdC1mb3JtLWZpZWxkLWRlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkZGVuc2l0eS1zY2FsZTogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZW5zaXR5KCRkZW5zaXR5LXNjYWxlKTtcbiAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLXN0YW5kYXJkLWRlbnNpdHkoJGRlbnNpdHktc2NhbGUpO1xuICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtZmlsbC1kZW5zaXR5KCRkZW5zaXR5LXNjYWxlKTtcbiAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLW91dGxpbmUtZGVuc2l0eSgkZGVuc2l0eS1zY2FsZSk7XG59XG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogX21hdC1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSBfbWF0LWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LWZvcm0tZmllbGQnKSB7XG4gICAgJGNvbG9yOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiBtYXQtZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLXR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuJG1hdC10cmVlLW5vZGUtaGVpZ2h0OiA0OHB4ICFkZWZhdWx0O1xuLy8gTWluaW11bSBoZWlnaHQgZm9yIHRyZWUgbm9kZXMgaW4gaGlnaGVzdCBkZW5zaXR5IGlzIGRpZmZpY3VsdCB0byBkZXRlcm1pbmUgYXNcbi8vIGRldmVsb3BlcnMgY2FuIGRpc3BsYXkgYXJiaXRyYXJ5IGNvbnRlbnQuIFdlIHVzZSBhIG1pbmltdW0gaGVpZ2h0IHdoaWNoIGVuc3VyZXNcbi8vIHRoYXQgY29tbW9uIGNvbnRlbnQgcGxhY2VkIGluIHRyZWUgbm9kZXMgZG9lcyBub3QgZXhjZWVkIChlLmcuIGljb25zLCBjaGVja2JveGVzKS5cbiRtYXQtdHJlZS1ub2RlLW1pbmltdW0taGVpZ2h0OiAyNHB4ICFkZWZhdWx0O1xuJG1hdC10cmVlLW5vZGUtbWF4aW11bS1oZWlnaHQ6ICRtYXQtdHJlZS1ub2RlLWhlaWdodCAhZGVmYXVsdDtcblxuJG1hdC10cmVlLWRlbnNpdHktY29uZmlnOiAoXG4gIGhlaWdodDogKFxuICAgIGRlZmF1bHQ6ICRtYXQtdHJlZS1ub2RlLWhlaWdodCxcbiAgICBtYXhpbXVtOiAkbWF0LXRyZWUtbm9kZS1tYXhpbXVtLWhlaWdodCxcbiAgICBtaW5pbXVtOiAkbWF0LXRyZWUtbm9kZS1taW5pbXVtLWhlaWdodCxcbiAgKVxuKSAhZGVmYXVsdDtcblxuXG5AbWl4aW4gbWF0LXRyZWUtY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtdHJlZSB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnY2FyZCcpO1xuICB9XG5cbiAgLm1hdC10cmVlLW5vZGUsXG4gIC5tYXQtbmVzdGVkLXRyZWUtbm9kZSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC10cmVlLXR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAubWF0LXRyZWUge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LXRyZWUtbm9kZSxcbiAgLm1hdC1uZXN0ZWQtdHJlZS1ub2RlIHtcbiAgICBmb250LXdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMSk7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuQG1peGluIF9tYXQtdHJlZS1kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGRlbnNpdHktc2NhbGU6IG1hdC1nZXQtZGVuc2l0eS1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRoZWlnaHQ6IF9tYXQtZGVuc2l0eS1wcm9wLXZhbHVlKCRtYXQtdHJlZS1kZW5zaXR5LWNvbmZpZywgJGRlbnNpdHktc2NhbGUsIGhlaWdodCk7XG5cbiAgQGluY2x1ZGUgX21hdC1kZW5zaXR5LWxlZ2FjeS1jb21wYXRpYmlsaXR5KCkge1xuICAgIC5tYXQtdHJlZS1ub2RlIHtcbiAgICAgIG1pbi1oZWlnaHQ6ICRoZWlnaHQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtdHJlZS10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogX21hdC1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSBfbWF0LWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LXRyZWUnKSB7XG4gICAgJGNvbG9yOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiBtYXQtZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtdHJlZS1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRyZWUtZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC10cmVlLXR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG4vLyBJbmNsdWRlcyBhbGwgb2YgdGhlIHR5cG9ncmFwaGljIHN0eWxlcy5cbkBtaXhpbiBhbmd1bGFyLW1hdGVyaWFsLXR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZTogbnVsbCkge1xuICAkY29uZmlnOiBpZihfbWF0LWlzLXRoZW1lLW9iamVjdCgkY29uZmlnLW9yLXRoZW1lKSxcbiAgICAgIG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSksICRjb25maWctb3ItdGhlbWUpO1xuXG4gIC8vIElmIG5vIGFjdHVhbCBjb2xvciBjb25maWd1cmF0aW9uIGhhcyBiZWVuIHNwZWNpZmllZCwgY3JlYXRlIGEgZGVmYXVsdCBvbmUuXG4gIEBpZiBub3QgJGNvbmZpZyB7XG4gICAgJGNvbmZpZzogbWF0LXR5cG9ncmFwaHktY29uZmlnKCk7XG4gIH1cblxuICAvLyBUT0RPOiBDT01QLTMwOTogRG8gbm90IHVzZSBpbmRpdmlkdWFsIG1peGlucy4gSW5zdGVhZCwgdXNlIHRoZSBhbGwtdGhlbWUgbWl4aW4gYW5kIG9ubHlcbiAgLy8gc3BlY2lmeSBhIGB0eXBvZ3JhcGh5YCBjb25maWcgd2hpbGUgc2V0dGluZyBgY29sb3JgIGFuZCBgZGVuc2l0eWAgdG8gYG51bGxgLiBUaGlzIGlzIGN1cnJlbnRseVxuICAvLyBub3QgcG9zc2libGUgYXMgaXQgd291bGQgaW50cm9kdWNlIGEgY2lyY3VsYXIgZGVwZW5kZW5jeSBmb3IgdHlwb2dyYXBoeSBiZWNhdXNlIHRoZSBgbWF0LWNvcmVgXG4gIC8vIG1peGluIHRoYXQgaXMgdHJhbnNpdGl2ZWx5IGxvYWRlZCBieSB0aGUgYGFsbC10aGVtZWAgZmlsZSwgaW1wb3J0cyBgYWxsLXR5cG9ncmFwaHlgIHdoaWNoXG4gIC8vIHdvdWxkIHRoZW4gbG9hZCBgYWxsLXRoZW1lYCBhZ2Fpbi4gVGhpcyB1bHRpbWF0ZWx5IHJlc3VsdHMgYSBjaXJjdWxhciBkZXBlbmRlbmN5LlxuXG4gIEBpbmNsdWRlIG1hdC1iYWRnZS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtYmFzZS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtYXV0b2NvbXBsZXRlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1ib3R0b20tc2hlZXQtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWJ1dHRvbi10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtYnV0dG9uLXRvZ2dsZS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtY2FyZC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtY2hlY2tib3gtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWNoaXBzLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1kaXZpZGVyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC10YWJsZS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZGF0ZXBpY2tlci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZGlhbG9nLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1leHBhbnNpb24tcGFuZWwtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWdyaWQtbGlzdC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtaWNvbi10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtaW5wdXQtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LW1lbnUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXBhZ2luYXRvci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtcHJvZ3Jlc3MtYmFyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1wcm9ncmVzcy1zcGlubmVyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1yYWRpby10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc2VsZWN0LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zaWRlbmF2LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zbGlkZS10b2dnbGUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXNsaWRlci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc3RlcHBlci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc29ydC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtdGFicy10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtdG9vbGJhci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtdG9vbHRpcC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtbGlzdC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtb3B0aW9uLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1vcHRncm91cC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc25hY2stYmFyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC10cmVlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG59XG5cblxuLy8gTWl4aW4gdGhhdCByZW5kZXJzIGFsbCBvZiB0aGUgY29yZSBzdHlsZXMgdGhhdCBhcmUgbm90IHRoZW1lLWRlcGVuZGVudC5cbkBtaXhpbiBtYXQtY29yZSgkdHlwb2dyYXBoeS1jb25maWc6IG51bGwpIHtcbiAgQGluY2x1ZGUgYW5ndWxhci1tYXRlcmlhbC10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5LWNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1yaXBwbGUoKTtcbiAgQGluY2x1ZGUgY2RrLWExMXkoKTtcbiAgQGluY2x1ZGUgY2RrLW92ZXJsYXkoKTtcbiAgQGluY2x1ZGUgY2RrLXRleHQtZmllbGQoKTtcblxuICBAaW5jbHVkZSBfbWF0LXN0cm9uZy1mb2N1cy1pbmRpY2F0b3JzLXBvc2l0aW9uaW5nKCk7XG4gIEBpbmNsdWRlIF9tYXQtbWRjLWNvcmUoKTtcbn1cblxuQG1peGluIG1hdC1jb3JlLWNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gIC8vIFdyYXBwZXIgZWxlbWVudCB0aGF0IHByb3ZpZGVzIHRoZSB0aGVtZSBiYWNrZ3JvdW5kIHdoZW4gdGhlIHVzZXIncyBjb250ZW50IGlzbid0XG4gIC8vIGluc2lkZSBvZiBhIGBtYXQtc2lkZW5hdi1jb250YWluZXJgLiBOb3RlIHRoYXQgd2UgbmVlZCB0byBleGNsdWRlIHRoZSBhbXBlcnNhbmRcbiAgLy8gc2VsZWN0b3IgaW4gY2FzZSB0aGUgbWl4aW4gaXMgaW5jbHVkZWQgYXQgdGhlIHRvcCBsZXZlbC5cbiAgLm1hdC1hcHAtYmFja2dyb3VuZCN7aWYoJiwgJywgJi5tYXQtYXBwLWJhY2tncm91bmQnLCAnJyl9IHtcbiAgICAkYmFja2dyb3VuZDogbWFwLWdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcbiAgICAkZm9yZWdyb3VuZDogbWFwLWdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgYmFja2dyb3VuZCk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cblxuICAvLyBQcm92aWRlcyBleHRlcm5hbCBDU1MgY2xhc3NlcyBmb3IgZWFjaCBlbGV2YXRpb24gdmFsdWUuIEVhY2ggQ1NTIGNsYXNzIGlzIGZvcm1hdHRlZCBhc1xuICAvLyBgbWF0LWVsZXZhdGlvbi16JHpWYWx1ZWAgd2hlcmUgYCR6VmFsdWVgIGNvcnJlc3BvbmRzIHRvIHRoZSB6LXNwYWNlIHRvIHdoaWNoIHRoZSBlbGVtZW50IGlzXG4gIC8vIGVsZXZhdGVkLlxuICBAZm9yICR6VmFsdWUgZnJvbSAwIHRocm91Z2ggMjQge1xuICAgIC4jeyRfbWF0LWVsZXZhdGlvbi1wcmVmaXh9I3skelZhbHVlfSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigkelZhbHVlLCAkY29uZmlnKTtcbiAgICB9XG4gIH1cblxuICAvLyBNYXJrZXIgdGhhdCBpcyB1c2VkIHRvIGRldGVybWluZSB3aGV0aGVyIHRoZSB1c2VyIGhhcyBhZGRlZCBhIHRoZW1lIHRvIHRoZWlyIHBhZ2UuXG4gIEBhdC1yb290IHtcbiAgICAubWF0LXRoZW1lLWxvYWRlZC1tYXJrZXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWl4aW4gdGhhdCByZW5kZXJzIGFsbCBvZiB0aGUgY29yZSBzdHlsZXMgdGhhdCBkZXBlbmQgb24gdGhlIHRoZW1lLlxuQG1peGluIG1hdC1jb3JlLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiBfbWF0LWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIC8vIFdyYXAgdGhlIHN1Yi10aGVtZSBpbmNsdWRlcyBpbiB0aGUgZHVwbGljYXRlIHRoZW1lIHN0eWxlcyBtaXhpbi4gVGhpcyBlbnN1cmVzIHRoYXRcbiAgLy8gdGhlcmUgd29uJ3QgYmUgbXVsdGlwbGUgd2FybmluZ3MuIGUuZy4gaWYgYG1hdC1jb3JlLXRoZW1lYCByZXBvcnRzIGEgd2FybmluZywgdGhlblxuICAvLyB0aGUgaW1wb3J0ZWQgdGhlbWVzIChzdWNoIGFzIGBtYXQtcmlwcGxlLXRoZW1lYCkgc2hvdWxkIG5vdCByZXBvcnQgYWdhaW4uXG4gIEBpbmNsdWRlIF9tYXQtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtY29yZScpIHtcbiAgICBAaW5jbHVkZSBtYXQtcmlwcGxlLXRoZW1lKCR0aGVtZSk7XG4gICAgQGluY2x1ZGUgbWF0LW9wdGlvbi10aGVtZSgkdGhlbWUpO1xuICAgIEBpbmNsdWRlIG1hdC1vcHRncm91cC10aGVtZSgkdGhlbWUpO1xuICAgIEBpbmNsdWRlIG1hdC1wc2V1ZG8tY2hlY2tib3gtdGhlbWUoJHRoZW1lKTtcblxuICAgICRjb2xvcjogbWF0LWdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LWNvcmUtY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWl4aW4gdGhhdCByZW5kZXJzIGFsbCBvZiB0aGUgY29yZSBNREMgc3R5bGVzLiBQcml2YXRlIG1peGluIGluY2x1ZGVkIHdpdGggYG1hdC1jb3JlYC5cbkBtaXhpbiBfbWF0LW1kYy1jb3JlKCkge1xuICBAaW5jbHVkZSBfbWF0LW1kYy1zdHJvbmctZm9jdXMtaW5kaWNhdG9ycy1wb3NpdGlvbmluZygpO1xufVxuXG4vLyBNaXhpbiB0aGF0IGVuc3VyZXMgZm9jdXMgaW5kaWNhdG9yIGhvc3QgZWxlbWVudHMgYXJlIHBvc2l0aW9uZWQgc28gdGhhdCB0aGUgZm9jdXMgaW5kaWNhdG9yXG4vLyBwc2V1ZG8gZWxlbWVudCB3aXRoaW4gaXMgcG9zaXRpb25lZCByZWxhdGl2ZSB0byB0aGUgaG9zdC4gUHJpdmF0ZSBtaXhpbiBpbmNsdWRlZCB3aXRoaW5cbi8vIGBfbWF0LW1kYy1jb3JlYC5cbkBtaXhpbiBfbWF0LW1kYy1zdHJvbmctZm9jdXMtaW5kaWNhdG9ycy1wb3NpdGlvbmluZygpIHtcbiAgLm1hdC1tZGMtZm9jdXMtaW5kaWNhdG9yIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gQ3JlYXRlIGEgdGhlbWUuXG5AbWl4aW4gYW5ndWxhci1tYXRlcmlhbC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gIEBpbmNsdWRlIF9tYXQtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUtb3ItY29sb3ItY29uZmlnLCAnYW5ndWxhci1tYXRlcmlhbC10aGVtZScpIHtcbiAgICBAaW5jbHVkZSBtYXQtY29yZS10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgICBAaW5jbHVkZSBtYXQtYXV0b2NvbXBsZXRlLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICAgIEBpbmNsdWRlIG1hdC1iYWRnZS10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgICBAaW5jbHVkZSBtYXQtYm90dG9tLXNoZWV0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICAgIEBpbmNsdWRlIG1hdC1idXR0b24tdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gICAgQGluY2x1ZGUgbWF0LWJ1dHRvbi10b2dnbGUtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gICAgQGluY2x1ZGUgbWF0LWNhcmQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gICAgQGluY2x1ZGUgbWF0LWNoZWNrYm94LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICAgIEBpbmNsdWRlIG1hdC1jaGlwcy10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgICBAaW5jbHVkZSBtYXQtdGFibGUtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gICAgQGluY2x1ZGUgbWF0LWRhdGVwaWNrZXItdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gICAgQGluY2x1ZGUgbWF0LWRpYWxvZy10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgICBAaW5jbHVkZSBtYXQtZGl2aWRlci10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgICBAaW5jbHVkZSBtYXQtZXhwYW5zaW9uLXBhbmVsLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICAgIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICAgIEBpbmNsdWRlIG1hdC1ncmlkLWxpc3QtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gICAgQGluY2x1ZGUgbWF0LWljb24tdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gICAgQGluY2x1ZGUgbWF0LWlucHV0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICAgIEBpbmNsdWRlIG1hdC1saXN0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICAgIEBpbmNsdWRlIG1hdC1tZW51LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICAgIEBpbmNsdWRlIG1hdC1wYWdpbmF0b3ItdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gICAgQGluY2x1ZGUgbWF0LXByb2dyZXNzLWJhci10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgICBAaW5jbHVkZSBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lci10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgICBAaW5jbHVkZSBtYXQtcmFkaW8tdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gICAgQGluY2x1ZGUgbWF0LXNlbGVjdC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgICBAaW5jbHVkZSBtYXQtc2lkZW5hdi10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgICBAaW5jbHVkZSBtYXQtc2xpZGUtdG9nZ2xlLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICAgIEBpbmNsdWRlIG1hdC1zbGlkZXItdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gICAgQGluY2x1ZGUgbWF0LXN0ZXBwZXItdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gICAgQGluY2x1ZGUgbWF0LXNvcnQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gICAgQGluY2x1ZGUgbWF0LXRhYnMtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gICAgQGluY2x1ZGUgbWF0LXRvb2xiYXItdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gICAgQGluY2x1ZGUgbWF0LXRvb2x0aXAtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gICAgQGluY2x1ZGUgbWF0LXRyZWUtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gICAgQGluY2x1ZGUgbWF0LXNuYWNrLWJhci10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgfVxufVxuXG5cbi8vIEluY2x1ZGVzIGFsbCBvZiB0aGUgY29sb3Igc3R5bGVzLlxuQG1peGluIGFuZ3VsYXItbWF0ZXJpYWwtY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAvLyBJbiBjYXNlIGEgdGhlbWUgb2JqZWN0IGhhcyBiZWVuIHBhc3NlZCBpbnN0ZWFkIG9mIGEgY29uZmlndXJhdGlvbiBmb3JcbiAgLy8gdGhlIGNvbG9yIHN5c3RlbSwgZXh0cmFjdCB0aGUgY29sb3IgY29uZmlnIGZyb20gdGhlIHRoZW1lIG9iamVjdC5cbiAgJGNvbmZpZzogaWYoX21hdC1pcy10aGVtZS1vYmplY3QoJGNvbmZpZy1vci10aGVtZSksXG4gICAgICBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKSwgJGNvbmZpZy1vci10aGVtZSk7XG5cbiAgQGlmICRjb25maWcgPT0gbnVsbCB7XG4gICAgQGVycm9yICdObyBjb2xvciBjb25maWd1cmF0aW9uIHNwZWNpZmllZC4nO1xuICB9XG5cbiAgQGluY2x1ZGUgYW5ndWxhci1tYXRlcmlhbC10aGVtZSgoXG4gICAgY29sb3I6ICRjb25maWcsXG4gICAgdHlwb2dyYXBoeTogbnVsbCxcbiAgICBkZW5zaXR5OiBudWxsLFxuICApKTtcbn1cblxuXG5cbi8vIEluY2x1ZGVzIGFsbCBvZiB0aGUgZGVuc2l0eSBzdHlsZXMuXG5AbWl4aW4gX2FuZ3VsYXItbWF0ZXJpYWwtZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gIC8vIEluIGNhc2UgYSB0aGVtZSBvYmplY3QgaGFzIGJlZW4gcGFzc2VkIGluc3RlYWQgb2YgYSBjb25maWd1cmF0aW9uIGZvclxuICAvLyB0aGUgZGVuc2l0eSBzeXN0ZW0sIGV4dHJhY3QgdGhlIGRlbnNpdHkgY29uZmlnIGZyb20gdGhlIHRoZW1lIG9iamVjdC5cbiAgJGNvbmZpZzogaWYoX21hdC1pcy10aGVtZS1vYmplY3QoJGNvbmZpZy1vci10aGVtZSksXG4gICAgICBtYXQtZ2V0LWRlbnNpdHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpLCAkY29uZmlnLW9yLXRoZW1lKTtcblxuICBAaWYgJGNvbmZpZyA9PSBudWxsIHtcbiAgICBAZXJyb3IgJ05vIGRlbnNpdHkgY29uZmlndXJhdGlvbiBzcGVjaWZpZWQuJztcbiAgfVxuXG4gIEBpbmNsdWRlIGFuZ3VsYXItbWF0ZXJpYWwtdGhlbWUoKFxuICAgIGNvbG9yOiBudWxsLFxuICAgIHR5cG9ncmFwaHk6IG51bGwsXG4gICAgZGVuc2l0eTogJGNvbmZpZyxcbiAgKSk7XG59XG5cblxuXG4iXX0= */"],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [{
            type: _commons_service__WEBPACK_IMPORTED_MODULE_1__["CommonsService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "X1wX":
    /*!********************************************************************!*\
      !*** ./src/app/pages/project-details/project-details.component.ts ***!
      \********************************************************************/

    /*! exports provided: ProjectDetailsComponent */

    /***/
    function X1wX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectDetailsComponent", function () {
        return ProjectDetailsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_assets_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/assets/data */
      "6Xnp");
      /* harmony import */


      var _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ks89/angular-modal-gallery */
      "rHMi");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var src_app_commons_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commons.service */
      "zZLy");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _components_custom_button_custom_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../components/custom-button/custom-button.component */
      "bGnb");
      /* harmony import */


      var _components_custom_chip_custom_chip_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/custom-chip/custom-chip.component */
      "k2K2");

      function ProjectDetailsComponent_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" - ", ctx_r0.project.endDate, "");
        }
      }

      function ProjectDetailsComponent_app_custom_button_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-custom-button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectDetailsComponent_app_custom_button_8_Template_app_custom_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.openNewTab("live");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isFilledButton", true);
        }
      }

      function ProjectDetailsComponent_app_custom_button_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-custom-button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectDetailsComponent_app_custom_button_9_Template_app_custom_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.openNewTab("code");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isFilledButton", false);
        }
      }

      function ProjectDetailsComponent_div_10_app_custom_chip_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-custom-chip", 14);
        }

        if (rf & 2) {
          var technology_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", technology_r10);
        }
      }

      function ProjectDetailsComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectDetailsComponent_div_10_app_custom_chip_1_Template, 1, 1, "app-custom-chip", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.project.technologies);
        }
      }

      var _c0 = function _c0() {
        return {
          show: false
        };
      };

      var _c1 = function _c1(a1) {
        return {
          infinite: true,
          sidePreviews: a1
        };
      };

      function ProjectDetailsComponent_div_12_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ks-modal-gallery", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var categoryImage_r12 = ctx.$implicit;
          var i_r13 = ctx.index;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](categoryImage_r12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", i_r13)("modalImages", ctx_r11.images[categoryImage_r12])("slideConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0)));
        }
      }

      function ProjectDetailsComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectDetailsComponent_div_12_div_1_Template, 4, 7, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.imagesKeys);
        }
      }

      var _c2 = function _c2(a0) {
        return {
          "background-image": a0
        };
      };

      var ProjectDetailsComponent = /*#__PURE__*/function () {
        function ProjectDetailsComponent(route, commonsService) {
          _classCallCheck(this, ProjectDetailsComponent);

          this.route = route;
          this.commonsService = commonsService;
          this.images = {};
          this.projects = src_assets_data__WEBPACK_IMPORTED_MODULE_1__["DESIGNPROJECTS"];
        }

        _createClass(ProjectDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getProjectByID(+this.route.snapshot.paramMap.get('id'));
          }
        }, {
          key: "getProjectByID",
          value: function getProjectByID(ID) {
            var _this4 = this;

            this.project = this.projects.filter(function (project) {
              return project.id === ID;
            })[0];

            if (this.project.images) {
              this.imagesKeys = Object.keys(this.project.images);
              this.imagesKeys.forEach(function (category) {
                _this4.images[category] = _this4.project.images[category].map(function (imageUrl, index) {
                  return new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["Image"](index, {
                    img: imageUrl
                  });
                });
              });
            } else {
              this.images = [];
            }
          }
        }, {
          key: "openNewTab",
          value: function openNewTab(type) {
            switch (type) {
              case 'live':
                this.commonsService.openNewTab(this.project.live);
                break;

              case 'code':
                this.commonsService.openNewTab(this.project.code);
                break;
            }
          }
        }]);

        return ProjectDetailsComponent;
      }();

      ProjectDetailsComponent.ɵfac = function ProjectDetailsComponent_Factory(t) {
        return new (t || ProjectDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_commons_service__WEBPACK_IMPORTED_MODULE_4__["CommonsService"]));
      };

      ProjectDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProjectDetailsComponent,
        selectors: [["app-project-details"]],
        decls: 13,
        vars: 11,
        consts: [[1, "image", 3, "ngStyle"], [1, "summary"], [1, "name"], [1, "date"], [4, "ngIf"], [1, "actions-buttons"], ["buttonText", "See live", 3, "isFilledButton", "click", 4, "ngIf"], ["buttonText", "</ See code >", 3, "isFilledButton", "click", 4, "ngIf"], ["class", "technologies", 4, "ngIf"], [1, "description", 3, "innerHTML"], ["buttonText", "See live", 3, "isFilledButton", "click"], ["buttonText", "</ See code >", 3, "isFilledButton", "click"], [1, "technologies"], [3, "text", 4, "ngFor", "ngForOf"], [3, "text"], [4, "ngFor", "ngForOf"], [3, "id", "modalImages", "slideConfig"]],
        template: function ProjectDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProjectDetailsComponent_span_6_Template, 2, 1, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProjectDetailsComponent_app_custom_button_8_Template, 1, 1, "app-custom-button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProjectDetailsComponent_app_custom_button_9_Template, 1, 1, "app-custom-button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProjectDetailsComponent_div_10_Template, 2, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProjectDetailsComponent_div_12_Template, 2, 1, "div", 4);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c2, "url(" + ctx.project.logo + ")"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.project.startDate, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.project.endDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.project.live);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.project.code);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.project.technologies.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.project.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imagesKeys.length > 0);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _components_custom_button_custom_button_component__WEBPACK_IMPORTED_MODULE_6__["CustomButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _components_custom_chip_custom_chip_component__WEBPACK_IMPORTED_MODULE_7__["CustomChipComponent"], _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["ɵd"]],
        styles: ["app-project-details {\n  display: flex;\n  flex-flow: column;\n}\napp-project-details .image {\n  height: 50vh;\n  background-size: cover;\n  background-position: center;\n}\napp-project-details .summary {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  margin: 15px 10%;\n}\napp-project-details .summary .name {\n  font-weight: bold;\n  font-size: 2rem;\n  margin: 4px 0;\n}\napp-project-details .summary .date {\n  padding-top: 5px;\n  color: var(--lightgray);\n  font-weight: normal;\n}\napp-project-details .summary .actions-buttons {\n  display: flex;\n  flex-flow: row;\n  width: 50vw;\n  margin: 2vh 0;\n}\napp-project-details .summary .technologies {\n  display: flex;\n  flex-flow: wrap;\n  place-content: center;\n}\napp-project-details .summary .technologies .mat-chip-list-wrapper {\n  justify-content: center;\n}\napp-project-details .description {\n  margin: 10px 40px 30px;\n  padding: 10px;\n  line-height: 1.5rem;\n}\napp-project-details h3 {\n  text-align: center;\n  text-transform: capitalize;\n}\napp-project-details .plain-container {\n  display: flow-root !important;\n  -webkit-column-count: 3;\n  -webkit-column-gap: 5px;\n  -moz-column-count: 3;\n  -moz-column-gap: 5px;\n  column-count: 3;\n  column-gap: 5px;\n  row-gap: 5px;\n}\napp-project-details .plain-container .image {\n  width: 100% !important;\n  height: auto !important;\n  margin: unset !important;\n}\napp-project-details .plain-container .image:hover {\n  filter: brightness(0.5);\n}\napp-project-details #current-image {\n  height: 70vh !important;\n  max-height: unset !important;\n}\n@media (max-width: 800px) {\n  app-project-details .summary {\n    margin: 15px;\n    text-align: center;\n  }\n  app-project-details .summary .technologies {\n    margin: 10px 0;\n    justify-content: center;\n  }\n  app-project-details .description {\n    margin: 10px;\n  }\n  app-project-details #current-image {\n    height: unset !important;\n  }\n}\n@media (max-width: 500px) {\n  app-project-details .plain-container {\n    column-count: 2;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvamVjdC1kZXRhaWxzL3Byb2plY3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQURGO0FBR0U7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQURKO0FBSUU7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBRko7QUFJSTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFGTjtBQUlJO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRk47QUFLSTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFITjtBQU1JO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQUpOO0FBTU07RUFDRSx1QkFBQTtBQUpSO0FBU0U7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQVBKO0FBVUU7RUFDRSxrQkFBQTtFQUNBLDBCQUFBO0FBUko7QUFXRTtFQUNFLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFUSjtBQVdJO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0FBVE47QUFXTTtFQUNFLHVCQUFBO0FBVFI7QUFjRTtFQUNFLHVCQUFBO0VBQ0EsNEJBQUE7QUFaSjtBQWVFO0VBQ0U7SUFDRSxZQUFBO0lBQ0Esa0JBQUE7RUFiSjtFQWVJO0lBQ0UsY0FBQTtJQUNBLHVCQUFBO0VBYk47RUFpQkU7SUFDRSxZQUFBO0VBZko7RUFrQkU7SUFDRSx3QkFBQTtFQWhCSjtBQUNGO0FBbUJFO0VBQ0U7SUFHQSxlQUFBO0VBakJGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9qZWN0LWRldGFpbHMvcHJvamVjdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5hcHAtcHJvamVjdC1kZXRhaWxzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG5cclxuICAuaW1hZ2Uge1xyXG4gICAgaGVpZ2h0OiA1MHZoO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5zdW1tYXJ5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDE1cHggMTAlO1xyXG5cclxuICAgIC5uYW1lIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgbWFyZ2luOiA0cHggMDtcclxuICAgIH1cclxuICAgIC5kYXRlIHtcclxuICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgICAgY29sb3I6IHZhcigtLWxpZ2h0Z3JheSk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICB9XHJcblxyXG4gICAgLmFjdGlvbnMtYnV0dG9ucyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgICB3aWR0aDogNTB2dztcclxuICAgICAgbWFyZ2luOiAydmggMDtcclxuICAgIH1cclxuXHJcbiAgICAudGVjaG5vbG9naWVzIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1mbG93OiB3cmFwO1xyXG4gICAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAubWF0LWNoaXAtbGlzdC13cmFwcGVyIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmRlc2NyaXB0aW9uIHtcclxuICAgIG1hcmdpbjogMTBweCA0MHB4IDMwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcclxuICB9XHJcblxyXG4gIGgzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIH1cclxuXHJcbiAgLnBsYWluLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbG93LXJvb3QgIWltcG9ydGFudDtcclxuICAgIC13ZWJraXQtY29sdW1uLWNvdW50OiAzO1xyXG4gICAgLXdlYmtpdC1jb2x1bW4tZ2FwOiA1cHg7XHJcbiAgICAtbW96LWNvbHVtbi1jb3VudDogMztcclxuICAgIC1tb3otY29sdW1uLWdhcDogNXB4O1xyXG4gICAgY29sdW1uLWNvdW50OiAzO1xyXG4gICAgY29sdW1uLWdhcDogNXB4O1xyXG4gICAgcm93LWdhcDogNXB4O1xyXG5cclxuICAgIC5pbWFnZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW46IHVuc2V0ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC41KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgI2N1cnJlbnQtaW1hZ2Uge1xyXG4gICAgaGVpZ2h0OiA3MHZoICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtaGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAuc3VtbWFyeSB7XHJcbiAgICAgIG1hcmdpbjogMTVweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgLnRlY2hub2xvZ2llcyB7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgI2N1cnJlbnQtaW1hZ2Uge1xyXG4gICAgICBoZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgIC5wbGFpbi1jb250YWluZXIge1xyXG4gICAgLW1vei1jb2x1bW4tY291bnQ6ICAgIDI7XHJcbiAgICAtd2Via2l0LWNvbHVtbi1jb3VudDogMjtcclxuICAgIGNvbHVtbi1jb3VudDogICAgICAgICAyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectDetailsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-project-details',
            templateUrl: './project-details.component.html',
            styleUrls: ['./project-details.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: src_app_commons_service__WEBPACK_IMPORTED_MODULE_4__["CommonsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "BTe0");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/expansion */
      "o4Yh");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/chips */
      "f44v");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/tabs */
      "M9ds");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/table */
      "OaSA");
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! hammerjs */
      "yLV6");
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var mousetrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! mousetrap */
      "imBb");
      /* harmony import */


      var mousetrap__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(mousetrap__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ks89/angular-modal-gallery */
      "rHMi");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "omvX");
      /* harmony import */


      var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./components/contact/contact.component */
      "G2Gn");
      /* harmony import */


      var _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./pages/homepage/homepage.component */
      "ojyh");
      /* harmony import */


      var _components_header_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./components/header/header.component */
      "2MiI");
      /* harmony import */


      var _pages_skills_skills_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./pages/skills/skills.component */
      "2yNh");
      /* harmony import */


      var _directives_progress_bar_colors_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./directives/progress-bar-colors.directive */
      "82IS");
      /* harmony import */


      var _pages_experience_experience_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./pages/experience/experience.component */
      "mKaJ");
      /* harmony import */


      var _components_experience_card_experience_card_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./components/experience-card/experience-card.component */
      "uoxI");
      /* harmony import */


      var _components_education_level_education_level_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./components/education-level/education-level.component */
      "zeqP");
      /* harmony import */


      var _components_awards_awards_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./components/awards/awards.component */
      "QrEi");
      /* harmony import */


      var _components_custom_card_custom_card_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./components/custom-card/custom-card.component */
      "mPdx");
      /* harmony import */


      var _pages_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./pages/project-details/project-details.component */
      "X1wX");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! angular-responsive-carousel */
      "0L5U");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/menu */
      "rJgo");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "jMqV");
      /* harmony import */


      var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./pages/not-found/not-found.component */
      "v2M4");
      /* harmony import */


      var _components_skill_card_skill_card_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./components/skill-card/skill-card.component */
      "fTIr");
      /* harmony import */


      var _components_certification_card_certification_card_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./components/certification-card/certification-card.component */
      "2D9T");
      /* harmony import */


      var _components_custom_button_custom_button_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./components/custom-button/custom-button.component */
      "bGnb");
      /* harmony import */


      var _components_custom_svg_custom_svg_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./components/custom-svg/custom-svg.component */
      "HoFA");
      /* harmony import */


      var _components_custom_category_button_custom_category_button_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./components/custom-category-button/custom-category-button.component */
      "fPRL");
      /* harmony import */


      var _components_custom_chip_custom_chip_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./components/custom-chip/custom-chip.component */
      "k2K2");
      /* harmony import */


      var _components_custom_social_card_custom_social_card_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./components/custom-social-card/custom-social-card.component */
      "uMBx"); // Material imports
      // Modal gallery imports


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ReactiveFormsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_11__["GalleryModule"].forRoot(), angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_27__["IvyCarouselModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HttpClientModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__["MatMenuModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__["MatSlideToggleModule"]], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__["MatMenuModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"], _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_16__["HomepageComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"], _pages_skills_skills_component__WEBPACK_IMPORTED_MODULE_18__["SkillsComponent"], _directives_progress_bar_colors_directive__WEBPACK_IMPORTED_MODULE_19__["ProgressBarColorsDirective"], _pages_experience_experience_component__WEBPACK_IMPORTED_MODULE_20__["ExperienceComponent"], _components_experience_card_experience_card_component__WEBPACK_IMPORTED_MODULE_21__["ExperienceCardComponent"], _components_education_level_education_level_component__WEBPACK_IMPORTED_MODULE_22__["EducationLevelComponent"], _components_awards_awards_component__WEBPACK_IMPORTED_MODULE_23__["AwardsComponent"], _components_custom_card_custom_card_component__WEBPACK_IMPORTED_MODULE_24__["CustomCardComponent"], _pages_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_25__["ProjectDetailsComponent"], _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_31__["NotFoundComponent"], _components_skill_card_skill_card_component__WEBPACK_IMPORTED_MODULE_32__["SkillCardComponent"], _components_certification_card_certification_card_component__WEBPACK_IMPORTED_MODULE_33__["CertificationCardComponent"], _components_custom_button_custom_button_component__WEBPACK_IMPORTED_MODULE_34__["CustomButtonComponent"], _components_custom_svg_custom_svg_component__WEBPACK_IMPORTED_MODULE_35__["CustomSvgComponent"], _components_custom_category_button_custom_category_button_component__WEBPACK_IMPORTED_MODULE_36__["CustomCategoryButtonComponent"], _components_custom_chip_custom_chip_component__WEBPACK_IMPORTED_MODULE_37__["CustomChipComponent"], _components_custom_social_card_custom_social_card_component__WEBPACK_IMPORTED_MODULE_38__["CustomSocialCardComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ReactiveFormsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_11__["GalleryModule"], angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_27__["IvyCarouselModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HttpClientModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__["MatMenuModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__["MatSlideToggleModule"]],
          exports: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__["MatMenuModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"], _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_16__["HomepageComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"], _pages_skills_skills_component__WEBPACK_IMPORTED_MODULE_18__["SkillsComponent"], _directives_progress_bar_colors_directive__WEBPACK_IMPORTED_MODULE_19__["ProgressBarColorsDirective"], _pages_experience_experience_component__WEBPACK_IMPORTED_MODULE_20__["ExperienceComponent"], _components_experience_card_experience_card_component__WEBPACK_IMPORTED_MODULE_21__["ExperienceCardComponent"], _components_education_level_education_level_component__WEBPACK_IMPORTED_MODULE_22__["EducationLevelComponent"], _components_awards_awards_component__WEBPACK_IMPORTED_MODULE_23__["AwardsComponent"], _components_custom_card_custom_card_component__WEBPACK_IMPORTED_MODULE_24__["CustomCardComponent"], _pages_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_25__["ProjectDetailsComponent"], _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_31__["NotFoundComponent"], _components_skill_card_skill_card_component__WEBPACK_IMPORTED_MODULE_32__["SkillCardComponent"], _components_certification_card_certification_card_component__WEBPACK_IMPORTED_MODULE_33__["CertificationCardComponent"], _components_custom_button_custom_button_component__WEBPACK_IMPORTED_MODULE_34__["CustomButtonComponent"], _components_custom_svg_custom_svg_component__WEBPACK_IMPORTED_MODULE_35__["CustomSvgComponent"], _components_custom_category_button_custom_category_button_component__WEBPACK_IMPORTED_MODULE_36__["CustomCategoryButtonComponent"], _components_custom_chip_custom_chip_component__WEBPACK_IMPORTED_MODULE_37__["CustomChipComponent"], _components_custom_social_card_custom_social_card_component__WEBPACK_IMPORTED_MODULE_38__["CustomSocialCardComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ReactiveFormsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_11__["GalleryModule"].forRoot(), angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_27__["IvyCarouselModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HttpClientModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__["MatMenuModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__["MatSlideToggleModule"]],
            exports: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__["MatMenuModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "bGnb":
    /*!*********************************************************************!*\
      !*** ./src/app/components/custom-button/custom-button.component.ts ***!
      \*********************************************************************/

    /*! exports provided: CustomButtonComponent */

    /***/
    function bGnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomButtonComponent", function () {
        return CustomButtonComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      var _c0 = function _c0(a0) {
        return {
          "border-btn-background": a0
        };
      };

      var CustomButtonComponent = /*#__PURE__*/function () {
        function CustomButtonComponent() {
          _classCallCheck(this, CustomButtonComponent);
        }

        _createClass(CustomButtonComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CustomButtonComponent;
      }();

      CustomButtonComponent.ɵfac = function CustomButtonComponent_Factory(t) {
        return new (t || CustomButtonComponent)();
      };

      CustomButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CustomButtonComponent,
        selectors: [["app-custom-button"]],
        inputs: {
          buttonText: "buttonText",
          isFilledButton: "isFilledButton"
        },
        decls: 5,
        vars: 4,
        consts: [[1, "border-btn", 3, "ngClass"], [1, "border-btn__inner"], [1, "border-btn__lines-1"], [1, "border-btn__lines-2"]],
        template: function CustomButtonComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.isFilledButton));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.buttonText);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
        styles: ["app-custom-button {\n  width: 100%;\n}\napp-custom-button div {\n  border: none;\n  color: inherit;\n  text-decoration: none;\n  cursor: pointer;\n}\napp-custom-button div:hover {\n  text-decoration: none;\n}\napp-custom-button div:focus {\n  outline: none;\n}\napp-custom-button .border-btn {\n  display: inline-block;\n  position: relative;\n  width: -webkit-fill-available;\n  text-align: center;\n  height: 45px;\n}\napp-custom-button .border-btn-background {\n  background-color: var(--primary) opacity;\n}\napp-custom-button .border-btn__inner {\n  display: inline-block;\n  padding: 10px 15px 10px 15px;\n  font-size: 10px;\n  font-weight: 400;\n  letter-spacing: 2px;\n  line-height: 1.2;\n  text-transform: uppercase;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: -webkit-fill-available;\n  color: var(--primary);\n  transition: 0.5s cubic-bezier(0.17, 0.85, 0.438, 0.99);\n}\napp-custom-button .border-btn:before,\napp-custom-button .border-btn:after,\napp-custom-button .border-btn__inner:before,\napp-custom-button .border-btn__inner:after {\n  content: \"\";\n  position: absolute;\n  background-color: var(--primary);\n  opacity: 0.2;\n  transition: 0.5s cubic-bezier(0.17, 0.85, 0.438, 0.99);\n}\napp-custom-button .border-btn:before {\n  width: 100%;\n  height: 1px;\n  left: 0;\n  top: 0;\n  transform: scaleX(1);\n  transform-origin: right;\n}\napp-custom-button .border-btn:after {\n  width: 1px;\n  height: 100%;\n  top: 0;\n  right: 0;\n  transform: scaleY(1);\n  transform-origin: bottom;\n}\napp-custom-button .border-btn__inner:before {\n  width: 100%;\n  height: 1px;\n  left: 0;\n  bottom: 0;\n  transform: scaleX(1);\n  transform-origin: left;\n}\napp-custom-button .border-btn__inner:after {\n  width: 1px;\n  height: 100%;\n  left: 0;\n  top: 0;\n  transform: scaleY(1);\n  transform-origin: top;\n}\napp-custom-button .border-btn:hover:before,\napp-custom-button .border-btn:hover .border-btn__inner:before {\n  transform: scaleX(0);\n}\napp-custom-button .border-btn:hover:after,\napp-custom-button .border-btn:hover .border-btn__inner:after {\n  transform: scaleY(0);\n}\napp-custom-button .border-btn__lines-1:before,\napp-custom-button .border-btn__lines-1:after,\napp-custom-button .border-btn__lines-2:before,\napp-custom-button .border-btn__lines-2:after {\n  content: \"\";\n  position: absolute;\n  background-color: var(--primary);\n  transition: 0.5s cubic-bezier(0.17, 0.85, 0.438, 0.99);\n}\napp-custom-button .border-btn__lines-1:before {\n  width: 100%;\n  height: 1px;\n  left: 0;\n  top: 0;\n  transform: scaleX(0);\n  transform-origin: left;\n}\napp-custom-button .border-btn__lines-1:after {\n  width: 1px;\n  height: 100%;\n  top: 0;\n  right: 0;\n  transform: scaleY(0);\n  transform-origin: top;\n}\napp-custom-button .border-btn__lines-2:before {\n  width: 100%;\n  height: 1px;\n  left: 0;\n  bottom: 0;\n  transform: scaleX(0);\n  transform-origin: right;\n}\napp-custom-button .border-btn__lines-2:after {\n  width: 1px;\n  height: 100%;\n  left: 0;\n  top: 0;\n  transform: scaleY(0);\n  transform-origin: bottom;\n}\napp-custom-button .border-btn:hover .border-btn__lines-1:before,\napp-custom-button .border-btn:hover .border-btn__lines-2:before {\n  transform: scaleX(1);\n}\napp-custom-button .border-btn:hover .border-btn__lines-1:after,\napp-custom-button .border-btn:hover .border-btn__lines-2:after {\n  transform: scaleY(1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdXN0b20tYnV0dG9uL2N1c3RvbS1idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxXQUFBO0FBREY7QUFFRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBQUo7QUFFRTtFQUNFLHFCQUFBO0FBQUo7QUFFRTtFQUNFLGFBQUE7QUFBSjtBQUVFO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQUo7QUFFRTtFQUNFLHdDQUFBO0FBQUo7QUFFRTtFQUNFLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxzREFBQTtBQUFKO0FBRUU7Ozs7RUFJRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxzREFBQTtBQUFKO0FBRUU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBRUEsb0JBQUE7RUFFQSx1QkFBQTtBQUFKO0FBRUU7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBRUEsb0JBQUE7RUFFQSx3QkFBQTtBQUFKO0FBRUU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBRUEsb0JBQUE7RUFFQSxzQkFBQTtBQUFKO0FBRUU7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBRUEsb0JBQUE7RUFFQSxxQkFBQTtBQUFKO0FBRUU7O0VBR0Usb0JBQUE7QUFBSjtBQUVFOztFQUdFLG9CQUFBO0FBQUo7QUFFRTs7OztFQUlFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0Esc0RBQUE7QUFBSjtBQUVFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUVBLG9CQUFBO0VBRUEsc0JBQUE7QUFBSjtBQUVFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUVBLG9CQUFBO0VBRUEscUJBQUE7QUFBSjtBQUVFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUVBLG9CQUFBO0VBRUEsdUJBQUE7QUFBSjtBQUVFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUVBLG9CQUFBO0VBRUEsd0JBQUE7QUFBSjtBQUVFOztFQUdFLG9CQUFBO0FBQUo7QUFFRTs7RUFHRSxvQkFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jdXN0b20tYnV0dG9uL2N1c3RvbS1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmFwcC1jdXN0b20tYnV0dG9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXYge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIGRpdjpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIGRpdjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICAuYm9yZGVyLWJ0biB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogNDVweDtcclxuICB9XHJcbiAgLmJvcmRlci1idG4tYmFja2dyb3VuZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KW9wYWNpdHk7XHJcbiAgfVxyXG4gIC5ib3JkZXItYnRuX19pbm5lciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweCAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGN1YmljLWJlemllcigwLjE3LCAwLjg1LCAwLjQzOCwgMC45OSk7XHJcbiAgfVxyXG4gIC5ib3JkZXItYnRuOmJlZm9yZSxcclxuICAuYm9yZGVyLWJ0bjphZnRlcixcclxuICAuYm9yZGVyLWJ0bl9faW5uZXI6YmVmb3JlLFxyXG4gIC5ib3JkZXItYnRuX19pbm5lcjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICBvcGFjaXR5OiAwLjI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGN1YmljLWJlemllcigwLjE3LCAwLjg1LCAwLjQzOCwgMC45OSk7XHJcbiAgfVxyXG4gIC5ib3JkZXItYnRuOmJlZm9yZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcclxuICB9XHJcbiAgLmJvcmRlci1idG46YWZ0ZXIge1xyXG4gICAgd2lkdGg6IDFweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgxKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XHJcbiAgfVxyXG4gIC5ib3JkZXItYnRuX19pbm5lcjpiZWZvcmUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xyXG4gIH1cclxuICAuYm9yZGVyLWJ0bl9faW5uZXI6YWZ0ZXIge1xyXG4gICAgd2lkdGg6IDFweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcDtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcclxuICB9XHJcbiAgLmJvcmRlci1idG46aG92ZXI6YmVmb3JlLFxyXG4gIC5ib3JkZXItYnRuOmhvdmVyIC5ib3JkZXItYnRuX19pbm5lcjpiZWZvcmUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gIH1cclxuICAuYm9yZGVyLWJ0bjpob3ZlcjphZnRlcixcclxuICAuYm9yZGVyLWJ0bjpob3ZlciAuYm9yZGVyLWJ0bl9faW5uZXI6YWZ0ZXIge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgwKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xyXG4gIH1cclxuICAuYm9yZGVyLWJ0bl9fbGluZXMtMTpiZWZvcmUsXHJcbiAgLmJvcmRlci1idG5fX2xpbmVzLTE6YWZ0ZXIsXHJcbiAgLmJvcmRlci1idG5fX2xpbmVzLTI6YmVmb3JlLFxyXG4gIC5ib3JkZXItYnRuX19saW5lcy0yOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgIHRyYW5zaXRpb246IDAuNXMgY3ViaWMtYmV6aWVyKDAuMTcsIDAuODUsIDAuNDM4LCAwLjk5KTtcclxuICB9XHJcbiAgLmJvcmRlci1idG5fX2xpbmVzLTE6YmVmb3JlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcclxuICB9XHJcbiAgLmJvcmRlci1idG5fX2xpbmVzLTE6YWZ0ZXIge1xyXG4gICAgd2lkdGg6IDFweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgwKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XHJcbiAgfVxyXG4gIC5ib3JkZXItYnRuX19saW5lcy0yOmJlZm9yZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcclxuICB9XHJcbiAgLmJvcmRlci1idG5fX2xpbmVzLTI6YWZ0ZXIge1xyXG4gICAgd2lkdGg6IDFweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDApO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcclxuICB9XHJcbiAgLmJvcmRlci1idG46aG92ZXIgLmJvcmRlci1idG5fX2xpbmVzLTE6YmVmb3JlLFxyXG4gIC5ib3JkZXItYnRuOmhvdmVyIC5ib3JkZXItYnRuX19saW5lcy0yOmJlZm9yZSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgfVxyXG4gIC5ib3JkZXItYnRuOmhvdmVyIC5ib3JkZXItYnRuX19saW5lcy0xOmFmdGVyLFxyXG4gIC5ib3JkZXItYnRuOmhvdmVyIC5ib3JkZXItYnRuX19saW5lcy0yOmFmdGVyIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcclxuICB9XHJcbn1cclxuIl19 */"],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomButtonComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-custom-button',
            templateUrl: './custom-button.component.html',
            styleUrls: ['./custom-button.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [];
        }, {
          buttonText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          isFilledButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "fPRL":
    /*!***************************************************************************************!*\
      !*** ./src/app/components/custom-category-button/custom-category-button.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: CustomCategoryButtonComponent */

    /***/
    function fPRL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomCategoryButtonComponent", function () {
        return CustomCategoryButtonComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      var _c0 = function _c0(a0) {
        return {
          "button-selected": a0
        };
      };

      var CustomCategoryButtonComponent = /*#__PURE__*/function () {
        function CustomCategoryButtonComponent() {
          _classCallCheck(this, CustomCategoryButtonComponent);
        }

        _createClass(CustomCategoryButtonComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CustomCategoryButtonComponent;
      }();

      CustomCategoryButtonComponent.ɵfac = function CustomCategoryButtonComponent_Factory(t) {
        return new (t || CustomCategoryButtonComponent)();
      };

      CustomCategoryButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CustomCategoryButtonComponent,
        selectors: [["app-custom-category-button"]],
        inputs: {
          text: "text",
          isSelected: "isSelected"
        },
        decls: 5,
        vars: 4,
        consts: [[1, "button", 3, "ngClass"], [1, "button__inner"], [1, "button__lines-1"], [1, "button__lines-2"]],
        template: function CustomCategoryButtonComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.isSelected));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
        styles: ["app-custom-category-button div {\n  border: none;\n  color: inherit;\n  text-decoration: none;\n  cursor: pointer;\n}\napp-custom-category-button div:hover {\n  text-decoration: none;\n}\napp-custom-category-button div:focus {\n  outline: none;\n}\napp-custom-category-button .button {\n  display: inline-block;\n  position: relative;\n  text-align: center;\n  height: 45px;\n}\napp-custom-category-button .button-selected {\n  background-color: var(--primary) opacity;\n}\napp-custom-category-button .button__inner {\n  display: inline-block;\n  padding: 10px 15px 10px 15px;\n  font-size: 10px;\n  font-weight: 400;\n  letter-spacing: 2px;\n  line-height: 1.2;\n  text-transform: uppercase;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: -webkit-fill-available;\n  color: var(--primary);\n  transition: 0.5s cubic-bezier(0.17, 0.85, 0.438, 0.99);\n}\napp-custom-category-button .button:before,\napp-custom-category-button .button:after,\napp-custom-category-button .button__inner:before,\napp-custom-category-button .button__inner:after {\n  content: \"\";\n  position: absolute;\n  background-color: var(--primary);\n  opacity: 0.2;\n  transition: 0.5s cubic-bezier(0.17, 0.85, 0.438, 0.99);\n}\napp-custom-category-button .button:before {\n  width: 100%;\n  height: 1px;\n  left: 0;\n  top: 0;\n  transform: scaleX(1);\n  transform-origin: right;\n}\napp-custom-category-button .button:after {\n  width: 1px;\n  height: 100%;\n  top: 0;\n  right: 0;\n  transform: scaleY(1);\n  transform-origin: bottom;\n}\napp-custom-category-button .button__inner:before {\n  width: 100%;\n  height: 1px;\n  left: 0;\n  bottom: 0;\n  transform: scaleX(1);\n  transform-origin: left;\n}\napp-custom-category-button .button__inner:after {\n  width: 1px;\n  height: 100%;\n  left: 0;\n  top: 0;\n  transform: scaleY(1);\n  transform-origin: top;\n}\napp-custom-category-button .button:hover:before,\napp-custom-category-button .button:hover .button__inner:before {\n  transform: scaleX(0);\n}\napp-custom-category-button .button:hover:after,\napp-custom-category-button .button:hover .button__inner:after {\n  transform: scaleY(0);\n}\napp-custom-category-button .button__lines-1:before,\napp-custom-category-button .button__lines-1:after,\napp-custom-category-button .button__lines-2:before,\napp-custom-category-button .button__lines-2:after {\n  content: \"\";\n  position: absolute;\n  background-color: var(--primary);\n  transition: 0.5s cubic-bezier(0.17, 0.85, 0.438, 0.99);\n}\napp-custom-category-button .button__lines-1:before {\n  width: 100%;\n  height: 1px;\n  left: 0;\n  top: 0;\n  transform: scaleX(0);\n  transform-origin: left;\n}\napp-custom-category-button .button__lines-1:after {\n  width: 1px;\n  height: 100%;\n  top: 0;\n  right: 0;\n  transform: scaleY(0);\n  transform-origin: top;\n}\napp-custom-category-button .button__lines-2:before {\n  width: 100%;\n  height: 1px;\n  left: 0;\n  bottom: 0;\n  transform: scaleX(0);\n  transform-origin: right;\n}\napp-custom-category-button .button__lines-2:after {\n  width: 1px;\n  height: 100%;\n  left: 0;\n  top: 0;\n  transform: scaleY(0);\n  transform-origin: bottom;\n}\napp-custom-category-button .button:hover .button__lines-1:before,\napp-custom-category-button .button:hover .button__lines-2:before {\n  transform: scaleX(1);\n}\napp-custom-category-button .button:hover .button__lines-1:after,\napp-custom-category-button .button:hover .button__lines-2:after {\n  transform: scaleY(1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdXN0b20tY2F0ZWdvcnktYnV0dG9uL2N1c3RvbS1jYXRlZ29yeS1idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0k7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQUZOO0FBSUk7RUFDRSxxQkFBQTtBQUZOO0FBSUk7RUFDRSxhQUFBO0FBRk47QUFJSTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFGTjtBQUlJO0VBQ0Usd0NBQUE7QUFGTjtBQUlJO0VBQ0UscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLHNEQUFBO0FBRk47QUFJSTs7OztFQUlFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLHNEQUFBO0FBRk47QUFJSTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFFQSxvQkFBQTtFQUVBLHVCQUFBO0FBRk47QUFJSTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFFQSxvQkFBQTtFQUVBLHdCQUFBO0FBRk47QUFJSTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFFQSxvQkFBQTtFQUVBLHNCQUFBO0FBRk47QUFJSTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFFQSxvQkFBQTtFQUVBLHFCQUFBO0FBRk47QUFJSTs7RUFHRSxvQkFBQTtBQUZOO0FBSUk7O0VBR0Usb0JBQUE7QUFGTjtBQUlJOzs7O0VBSUUsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzREFBQTtBQUZOO0FBSUk7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBRUEsb0JBQUE7RUFFQSxzQkFBQTtBQUZOO0FBSUk7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBRUEsb0JBQUE7RUFFQSxxQkFBQTtBQUZOO0FBSUk7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBRUEsb0JBQUE7RUFFQSx1QkFBQTtBQUZOO0FBSUk7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBRUEsb0JBQUE7RUFFQSx3QkFBQTtBQUZOO0FBSUk7O0VBR0Usb0JBQUE7QUFGTjtBQUlJOztFQUdFLG9CQUFBO0FBRk4iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2N1c3RvbS1jYXRlZ29yeS1idXR0b24vY3VzdG9tLWNhdGVnb3J5LWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuYXBwLWN1c3RvbS1jYXRlZ29yeS1idXR0b24ge1xyXG4gICAgZGl2IHtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICBkaXY6aG92ZXIge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgICBkaXY6Zm9jdXMge1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG4gICAgLmJ1dHRvbiB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGhlaWdodDogNDVweDtcclxuICAgIH1cclxuICAgIC5idXR0b24tc2VsZWN0ZWQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KW9wYWNpdHk7XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uX19pbm5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgcGFkZGluZzogMTBweCAxNXB4IDEwcHggMTVweDtcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuNXMgY3ViaWMtYmV6aWVyKDAuMTcsIDAuODUsIDAuNDM4LCAwLjk5KTtcclxuICAgIH1cclxuICAgIC5idXR0b246YmVmb3JlLFxyXG4gICAgLmJ1dHRvbjphZnRlcixcclxuICAgIC5idXR0b25fX2lubmVyOmJlZm9yZSxcclxuICAgIC5idXR0b25fX2lubmVyOmFmdGVyIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgICAgb3BhY2l0eTogMC4yO1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjVzIGN1YmljLWJlemllcigwLjE3LCAwLjg1LCAwLjQzOCwgMC45OSk7XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uOmJlZm9yZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uOmFmdGVyIHtcclxuICAgICAgd2lkdGg6IDFweDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDEpO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcclxuICAgIH1cclxuICAgIC5idXR0b25fX2lubmVyOmJlZm9yZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgLmJ1dHRvbl9faW5uZXI6YWZ0ZXIge1xyXG4gICAgICB3aWR0aDogMXB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgxKTtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uOmhvdmVyOmJlZm9yZSxcclxuICAgIC5idXR0b246aG92ZXIgLmJ1dHRvbl9faW5uZXI6YmVmb3JlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uOmhvdmVyOmFmdGVyLFxyXG4gICAgLmJ1dHRvbjpob3ZlciAuYnV0dG9uX19pbm5lcjphZnRlciB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xyXG4gICAgfVxyXG4gICAgLmJ1dHRvbl9fbGluZXMtMTpiZWZvcmUsXHJcbiAgICAuYnV0dG9uX19saW5lcy0xOmFmdGVyLFxyXG4gICAgLmJ1dHRvbl9fbGluZXMtMjpiZWZvcmUsXHJcbiAgICAuYnV0dG9uX19saW5lcy0yOmFmdGVyIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgICAgdHJhbnNpdGlvbjogMC41cyBjdWJpYy1iZXppZXIoMC4xNywgMC44NSwgMC40MzgsIDAuOTkpO1xyXG4gICAgfVxyXG4gICAgLmJ1dHRvbl9fbGluZXMtMTpiZWZvcmUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcclxuICAgIH1cclxuICAgIC5idXR0b25fX2xpbmVzLTE6YWZ0ZXIge1xyXG4gICAgICB3aWR0aDogMXB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcDtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xyXG4gICAgfVxyXG4gICAgLmJ1dHRvbl9fbGluZXMtMjpiZWZvcmUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLmJ1dHRvbl9fbGluZXMtMjphZnRlciB7XHJcbiAgICAgIHdpZHRoOiAxcHg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDApO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcclxuICAgIH1cclxuICAgIC5idXR0b246aG92ZXIgLmJ1dHRvbl9fbGluZXMtMTpiZWZvcmUsXHJcbiAgICAuYnV0dG9uOmhvdmVyIC5idXR0b25fX2xpbmVzLTI6YmVmb3JlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uOmhvdmVyIC5idXR0b25fX2xpbmVzLTE6YWZ0ZXIsXHJcbiAgICAuYnV0dG9uOmhvdmVyIC5idXR0b25fX2xpbmVzLTI6YWZ0ZXIge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDEpO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcclxuICAgIH1cclxufSJdfQ== */"],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomCategoryButtonComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-custom-category-button',
            templateUrl: './custom-category-button.component.html',
            styleUrls: ['./custom-category-button.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [];
        }, {
          text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          isSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "fTIr":
    /*!***************************************************************!*\
      !*** ./src/app/components/skill-card/skill-card.component.ts ***!
      \***************************************************************/

    /*! exports provided: SkillCardComponent */

    /***/
    function fTIr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SkillCardComponent", function () {
        return SkillCardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "BTe0");
      /* harmony import */


      var _directives_progress_bar_colors_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../directives/progress-bar-colors.directive */
      "82IS");

      var SkillCardComponent = /*#__PURE__*/function () {
        function SkillCardComponent() {
          _classCallCheck(this, SkillCardComponent);

          // 'Beginner' = 0, 'Medium' = 1, 'Intermediate' = 2, 'Advanced'= 3
          this.SKILL_LEVELS = [{
            name: 'Beginner',
            value: 20
          }, {
            name: 'Medium',
            value: 50
          }, {
            name: 'Intermediate',
            value: 80
          }, {
            name: 'Advanced',
            value: 100
          }];
        }

        _createClass(SkillCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SkillCardComponent;
      }();

      SkillCardComponent.ɵfac = function SkillCardComponent_Factory(t) {
        return new (t || SkillCardComponent)();
      };

      SkillCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SkillCardComponent,
        selectors: [["app-skill-card"]],
        inputs: {
          item: "item"
        },
        decls: 8,
        vars: 5,
        consts: [[1, "logo"], ["alt", "", 3, "src"], [1, "name"], [1, "progress"], ["mode", "determinate", 3, "value", "appProgressBarColors"], [1, "level-legend"]],
        template: function SkillCardComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", "../../../assets/skills/" + ctx.item.logo + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.item.name, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.SKILL_LEVELS[ctx.item.level].value)("appProgressBarColors", ctx.item.color);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.SKILL_LEVELS[ctx.item.level].name, " ");
          }
        },
        directives: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_1__["MatProgressBar"], _directives_progress_bar_colors_directive__WEBPACK_IMPORTED_MODULE_2__["ProgressBarColorsDirective"]],
        styles: ["app-skill-card {\n  display: flex;\n  flex-flow: column;\n  text-align: center;\n  margin: 10px;\n  padding: 15px;\n  width: 110px;\n}\napp-skill-card .logo img {\n  height: 50px;\n  width: auto;\n}\napp-skill-card .name {\n  padding: 5px;\n  color: var(--black);\n}\napp-skill-card .progress {\n  width: 100%;\n  display: flex;\n  flex-flow: column;\n}\napp-skill-card .progress .level-legend {\n  filter: brightness(2);\n  font-size: small;\n  padding: 5px;\n}\napp-skill-card .mat-progress-bar {\n  height: 6px;\n}\napp-skill-card .mat-progress-bar .mat-progress-bar-fill::after {\n  animation: load 3s normal forwards;\n}\n@media (max-width: 800px) {\n  app-skill-card {\n    margin: 5px;\n    padding: 8px;\n    width: 80px;\n  }\n  app-skill-card .logo img {\n    height: 40px;\n  }\n  app-skill-card .name {\n    padding: 5px 0;\n  }\n  app-skill-card .progress .level-legend {\n    font-size: x-small;\n    padding: 3px;\n  }\n}\n@keyframes load {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9za2lsbC1jYXJkL3NraWxsLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQURGO0FBSUk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUZOO0FBTUU7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFKSjtBQU9FO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUxKO0FBT0k7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUxOO0FBU0U7RUFDRSxXQUFBO0FBUEo7QUFRSTtFQUNFLGtDQUFBO0FBTk47QUFXQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0VBUkY7RUFXSTtJQUNFLFlBQUE7RUFUTjtFQWFFO0lBQ0UsY0FBQTtFQVhKO0VBZUk7SUFDRSxrQkFBQTtJQUNBLFlBQUE7RUFiTjtBQUNGO0FBa0JBO0VBQ0U7SUFDRSxRQUFBO0VBaEJGO0VBa0JBO0lBQ0UsV0FBQTtFQWhCRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9za2lsbC1jYXJkL3NraWxsLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmFwcC1za2lsbC1jYXJkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICB3aWR0aDogMTEwcHg7XHJcblxyXG4gIC5sb2dvIHtcclxuICAgIGltZyB7XHJcbiAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubmFtZSB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG4gIH1cclxuXHJcbiAgLnByb2dyZXNzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG5cclxuICAgIC5sZXZlbC1sZWdlbmQge1xyXG4gICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMik7XHJcbiAgICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyIHtcclxuICAgIGhlaWdodDogNnB4O1xyXG4gICAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xyXG4gICAgICBhbmltYXRpb246IGxvYWQgM3Mgbm9ybWFsIGZvcndhcmRzO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgYXBwLXNraWxsLWNhcmQge1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICB3aWR0aDogODBweDtcclxuXHJcbiAgICAubG9nbyB7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm5hbWUge1xyXG4gICAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZ3Jlc3Mge1xyXG4gICAgICAubGV2ZWwtbGVnZW5kIHtcclxuICAgICAgICBmb250LXNpemU6IHgtc21hbGw7XHJcbiAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGxvYWQge1xyXG4gIDAlIHtcclxuICAgIHdpZHRoOiAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4iXX0= */"],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillCardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-skill-card',
            templateUrl: './skill-card.component.html',
            styleUrls: ['./skill-card.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [];
        }, {
          item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "k2K2":
    /*!*****************************************************************!*\
      !*** ./src/app/components/custom-chip/custom-chip.component.ts ***!
      \*****************************************************************/

    /*! exports provided: CustomChipComponent */

    /***/
    function k2K2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomChipComponent", function () {
        return CustomChipComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var CustomChipComponent = /*#__PURE__*/function () {
        function CustomChipComponent() {
          _classCallCheck(this, CustomChipComponent);
        }

        _createClass(CustomChipComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CustomChipComponent;
      }();

      CustomChipComponent.ɵfac = function CustomChipComponent_Factory(t) {
        return new (t || CustomChipComponent)();
      };

      CustomChipComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CustomChipComponent,
        selectors: [["app-custom-chip"]],
        inputs: {
          text: "text"
        },
        decls: 2,
        vars: 1,
        consts: [[1, "chip__inner"]],
        template: function CustomChipComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
          }
        },
        styles: ["app-custom-chip {\n  display: inline-block;\n  position: relative;\n  text-align: center;\n  color: var(--primary);\n  margin: 2px;\n}\napp-custom-chip .chip__inner {\n  border: 1px solid transparent;\n  padding: 5px;\n  font-size: 10px;\n  font-weight: 400;\n  letter-spacing: 2px;\n  line-height: 1.2;\n  text-transform: uppercase;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: -webkit-fill-available;\n}\napp-custom-chip .chip__inner:hover {\n  border: 1px solid var(--primary) opacity;\n  cursor: default;\n}\n@media (max-width: 850px) {\n  app-custom-chip .chip__inner {\n    padding: 4px;\n    font-size: 8px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdXN0b20tY2hpcC9jdXN0b20tY2hpcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQURGO0FBR0U7RUFDRSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0FBREo7QUFJRTtFQUNFLHdDQUFBO0VBQ0EsZUFBQTtBQUZKO0FBS0U7RUFDRTtJQUNFLFlBQUE7SUFDQSxjQUFBO0VBSEo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VzdG9tLWNoaXAvY3VzdG9tLWNoaXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmFwcC1jdXN0b20tY2hpcCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gIG1hcmdpbjogMnB4O1xyXG5cclxuICAuY2hpcF9faW5uZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICB9XHJcblxyXG4gIC5jaGlwX19pbm5lcjpob3ZlciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5KW9wYWNpdHk7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogODUwcHgpIHtcclxuICAgIC5jaGlwX19pbm5lciB7XHJcbiAgICAgIHBhZGRpbmc6IDRweDtcclxuICAgICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomChipComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-custom-chip',
            templateUrl: './custom-chip.component.html',
            styleUrls: ['./custom-chip.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [];
        }, {
          text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "mKaJ":
    /*!**********************************************************!*\
      !*** ./src/app/pages/experience/experience.component.ts ***!
      \**********************************************************/

    /*! exports provided: ExperienceComponent */

    /***/
    function mKaJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function () {
        return ExperienceComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_assets_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/assets/data */
      "6Xnp");
      /* harmony import */


      var _components_experience_card_experience_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../components/experience-card/experience-card.component */
      "uoxI");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _components_awards_awards_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../components/awards/awards.component */
      "QrEi");
      /* harmony import */


      var _components_education_level_education_level_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../components/education-level/education-level.component */
      "zeqP");

      function ExperienceComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-awards", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("award", item_r3);
        }
      }

      function ExperienceComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-education-level", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("education", item_r4);
        }
      }

      function ExperienceComponent_app_experience_card_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-experience-card", 0);
        }

        if (rf & 2) {
          var item_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("experience", item_r5);
        }
      }

      var ExperienceComponent = /*#__PURE__*/function () {
        function ExperienceComponent() {
          _classCallCheck(this, ExperienceComponent);

          this.experience = [];
          this.education = [];
          this.awards = [];
          this.otherExperiences = [];
          this.experience = src_assets_data__WEBPACK_IMPORTED_MODULE_1__["EXPERIENCE"];
          this.education = src_assets_data__WEBPACK_IMPORTED_MODULE_1__["EDUCATION"];
          this.awards = src_assets_data__WEBPACK_IMPORTED_MODULE_1__["AWARDS"];
          this.otherExperiences = this.experience.slice(1, this.experience.length);
        }

        _createClass(ExperienceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ExperienceComponent;
      }();

      ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) {
        return new (t || ExperienceComponent)();
      };

      ExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ExperienceComponent,
        selectors: [["app-experience"]],
        decls: 11,
        vars: 4,
        consts: [[3, "experience"], [1, "title-category"], [4, "ngFor", "ngForOf"], [1, "other-work-experiences"], [3, "experience", 4, "ngFor", "ngForOf"], [3, "award"], [3, "education"]],
        template: function ExperienceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-experience-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Awards \uD83C\uDFC6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExperienceComponent_div_3_Template, 2, 1, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Education \uD83D\uDCDA");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExperienceComponent_div_6_Template, 2, 1, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Other work experiences \uD83D\uDCC1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExperienceComponent_app_experience_card_10_Template, 1, 1, "app-experience-card", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("experience", ctx.experience[0]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.awards);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.education);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.otherExperiences);
          }
        },
        directives: [_components_experience_card_experience_card_component__WEBPACK_IMPORTED_MODULE_2__["ExperienceCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _components_awards_awards_component__WEBPACK_IMPORTED_MODULE_4__["AwardsComponent"], _components_education_level_education_level_component__WEBPACK_IMPORTED_MODULE_5__["EducationLevelComponent"]],
        styles: ["app-experience .title-category {\n  margin: 5vh;\n  text-align-last: center;\n  font-size: 1.5rem;\n  color: var(--white);\n}\napp-experience .other-work-experiences {\n  display: flex;\n  flex-flow: column;\n}\napp-experience .other-work-experiences app-experience-card {\n  padding: 1vh 0;\n}\n@media (max-width: 800px) {\n  app-experience .title-category {\n    font-size: 1.2rem;\n    margin: 3vh;\n  }\n  app-experience .other-work-experiences app-experience-card {\n    flex: 0 0 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlFO0VBQ0UsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUhKO0FBTUU7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUFKSjtBQU1JO0VBQ0UsY0FBQTtBQUpOO0FBU0E7RUFFSTtJQUNFLGlCQUFBO0lBQ0EsV0FBQTtFQVBKO0VBVUk7SUFDRSxjQUFBO0VBUk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuYXBwLWV4cGVyaWVuY2Uge1xyXG5cclxuICAudGl0bGUtY2F0ZWdvcnkge1xyXG4gICAgbWFyZ2luOiA1dmg7XHJcbiAgICB0ZXh0LWFsaWduLWxhc3Q6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICB9XHJcblxyXG4gIC5vdGhlci13b3JrLWV4cGVyaWVuY2VzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuXHJcbiAgICBhcHAtZXhwZXJpZW5jZS1jYXJkIHtcclxuICAgICAgcGFkZGluZzogMXZoIDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICBhcHAtZXhwZXJpZW5jZSB7XHJcbiAgICAudGl0bGUtY2F0ZWdvcnkge1xyXG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgbWFyZ2luOiAzdmg7XHJcbiAgICB9XHJcbiAgICAub3RoZXItd29yay1leHBlcmllbmNlcyB7XHJcbiAgICAgIGFwcC1leHBlcmllbmNlLWNhcmQge1xyXG4gICAgICAgIGZsZXg6IDAgMCAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-experience',
            templateUrl: './experience.component.html',
            styleUrls: ['./experience.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "mPdx":
    /*!*****************************************************************!*\
      !*** ./src/app/components/custom-card/custom-card.component.ts ***!
      \*****************************************************************/

    /*! exports provided: CustomCardComponent */

    /***/
    function mPdx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomCardComponent", function () {
        return CustomCardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_app_commons_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/commons.service */
      "zZLy");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _custom_chip_custom_chip_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../custom-chip/custom-chip.component */
      "k2K2");
      /* harmony import */


      var _custom_button_custom_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../custom-button/custom-button.component */
      "bGnb");

      var _c0 = function _c0(a0) {
        return {
          "background-image": a0
        };
      };

      function CustomCardComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 8);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, "url(" + ctx_r0.data.image + ")"));
        }
      }

      function CustomCardComponent_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" - ", ctx_r1.data.endDate, "");
        }
      }

      function CustomCardComponent_div_8_app_custom_chip_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-custom-chip", 11);
        }

        if (rf & 2) {
          var technology_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", technology_r8);
        }
      }

      function CustomCardComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomCardComponent_div_8_app_custom_chip_1_Template, 1, 1, "app-custom-chip", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.data.technologies);
        }
      }

      function CustomCardComponent_app_custom_button_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-custom-button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomCardComponent_app_custom_button_10_Template_app_custom_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.openNewTab("code");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isFilledButton", false);
        }
      }

      function CustomCardComponent_app_custom_button_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-custom-button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomCardComponent_app_custom_button_11_Template_app_custom_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.openNewTab("live");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isFilledButton", true);
        }
      }

      function CustomCardComponent_app_custom_button_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-custom-button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomCardComponent_app_custom_button_12_Template_app_custom_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.seeDetailsProject();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isFilledButton", true);
        }
      }

      function CustomCardComponent_app_custom_button_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-custom-button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomCardComponent_app_custom_button_13_Template_app_custom_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r15.openNewTab("publication");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isFilledButton", true);
        }
      }

      var CustomCardComponent = /*#__PURE__*/function () {
        function CustomCardComponent(commonsService) {
          _classCallCheck(this, CustomCardComponent);

          this.commonsService = commonsService;
          this.data = {};
        }

        _createClass(CustomCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            switch (this.type) {
              case 'project':
                this.data.image = this.data.logo;
                this.data.title = this.data.name;
                break;

              case 'publication':
                this.data.image = this.data.thumbnail;
                this.data.technologies = this.data.categories;
                this.data.startDate = this.getDate(this.data.pubDate);
                break;
            }
          }
        }, {
          key: "seeDetailsProject",
          value: function seeDetailsProject() {
            this.commonsService.navigateToURL("/project/".concat(this.data.id));
          }
        }, {
          key: "openNewTab",
          value: function openNewTab(type) {
            switch (type) {
              case 'live':
                this.commonsService.openNewTab(this.data.live);
                break;

              case 'code':
                this.commonsService.openNewTab(this.data.code);
                break;

              case 'publication':
                this.commonsService.openNewTab(this.data.link);
                break;
            }
          }
        }, {
          key: "getDate",
          value: function getDate(date) {
            return new Date(date).toLocaleString('default', {
              month: 'long'
            }).substr(0, 3) + ' ' + new Date(date).getFullYear();
          }
        }]);

        return CustomCardComponent;
      }();

      CustomCardComponent.ɵfac = function CustomCardComponent_Factory(t) {
        return new (t || CustomCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_commons_service__WEBPACK_IMPORTED_MODULE_1__["CommonsService"]));
      };

      CustomCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CustomCardComponent,
        selectors: [["app-custom-card"]],
        inputs: {
          data: "data",
          type: "type"
        },
        decls: 14,
        vars: 9,
        consts: [["class", "image", 3, "ngStyle", 4, "ngIf"], [3, "innerHTML"], [4, "ngIf"], ["class", "technologies", 4, "ngIf"], ["buttonText", "</Code>", 3, "isFilledButton", "click", 4, "ngIf"], ["buttonText", "See live", 3, "isFilledButton", "click", 4, "ngIf"], ["buttonText", "See details", 3, "isFilledButton", "click", 4, "ngIf"], ["buttonText", "Read article", 3, "isFilledButton", "click", 4, "ngIf"], [1, "image", 3, "ngStyle"], [1, "technologies"], [3, "text", 4, "ngFor", "ngForOf"], [3, "text"], ["buttonText", "</Code>", 3, "isFilledButton", "click"], ["buttonText", "See live", 3, "isFilledButton", "click"], ["buttonText", "See details", 3, "isFilledButton", "click"], ["buttonText", "Read article", 3, "isFilledButton", "click"]],
        template: function CustomCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomCardComponent_div_1_Template, 1, 3, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-card-title", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CustomCardComponent_span_6_Template, 2, 1, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CustomCardComponent_div_8_Template, 2, 1, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CustomCardComponent_app_custom_button_10_Template, 1, 1, "app-custom-button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CustomCardComponent_app_custom_button_11_Template, 1, 1, "app-custom-button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CustomCardComponent_app_custom_button_12_Template, 1, 1, "app-custom-button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CustomCardComponent_app_custom_button_13_Template, 1, 1, "app-custom-button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.image);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.data.title, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.startDate, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.endDate && ctx.data.startDate != ctx.data.endDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.technologies && ctx.data.technologies.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.code && ctx.type === "project");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.live && ctx.type === "project");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "project" && !ctx.data.noDetails);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "publication");
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardActions"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _custom_chip_custom_chip_component__WEBPACK_IMPORTED_MODULE_4__["CustomChipComponent"], _custom_button_custom_button_component__WEBPACK_IMPORTED_MODULE_5__["CustomButtonComponent"]],
        styles: ["app-custom-card {\n  flex: 1 0 30%;\n  margin: 15px;\n  display: flex;\n  box-shadow: 0px 0px 9px -6px var(--primary);\n}\napp-custom-card .mat-card {\n  box-shadow: 0px 0px 3px -1px var(--lightgray) !important;\n  display: flex;\n  flex-direction: column;\n  height: -webkit-fill-available;\n  width: 100%;\n  border-radius: unset;\n  padding: unset;\n}\napp-custom-card .mat-card-actions {\n  margin: 0 !important;\n}\napp-custom-card .image {\n  height: 25vh;\n  background-size: cover;\n  background-position: center;\n}\napp-custom-card .technologies {\n  display: flex;\n  flex-flow: wrap;\n  justify-content: center;\n}\napp-custom-card .mat-card:hover .technologies span {\n  color: var(--primary);\n}\napp-custom-card .mat-card-content {\n  margin-top: auto;\n}\napp-custom-card .mat-card-actions {\n  display: flex;\n  justify-content: space-between;\n}\napp-custom-card .mat-card-header-text {\n  text-align: -webkit-center;\n}\napp-custom-card .mat-card-header {\n  place-content: center;\n}\napp-custom-card .mat-card-header .mat-card-title {\n  padding: 12px 0;\n  margin: 0;\n}\n@media (max-width: 850px) {\n  app-custom-card {\n    flex: unset;\n    width: -webkit-fill-available;\n  }\n  app-custom-card .mat-card-subtitle {\n    display: none;\n  }\n  app-custom-card .mat-card-content {\n    margin-bottom: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdXN0b20tY2FyZC9jdXN0b20tY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJDQUFBO0FBREY7QUFHRTtFQUNFLHdEQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FBREo7QUFJRTtFQUNFLG9CQUFBO0FBRko7QUFLRTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FBSEo7QUFNRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFKSjtBQVNNO0VBQ0UscUJBQUE7QUFQUjtBQVlFO0VBQ0UsZ0JBQUE7QUFWSjtBQWFFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBWEo7QUFjRTtFQUNFLDBCQUFBO0FBWko7QUFlRTtFQUNFLHFCQUFBO0FBYko7QUFnQkU7RUFDRSxlQUFBO0VBQ0EsU0FBQTtBQWRKO0FBa0JBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsNkJBQUE7RUFmRjtFQWlCRTtJQUNFLGFBQUE7RUFmSjtFQWtCRTtJQUNFLG1CQUFBO0VBaEJKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2N1c3RvbS1jYXJkL2N1c3RvbS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5hcHAtY3VzdG9tLWNhcmQge1xyXG4gIGZsZXg6IDEgMCAzMCU7XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA5cHggLTZweCB2YXIoLS1wcmltYXJ5KTtcclxuXHJcbiAgLm1hdC1jYXJkIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IC0xcHggdmFyKC0tbGlnaHRncmF5KSAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IHVuc2V0O1xyXG4gICAgcGFkZGluZzogdW5zZXQ7XHJcbiAgfVxyXG5cclxuICAubWF0LWNhcmQtYWN0aW9ucyB7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pbWFnZSB7XHJcbiAgICBoZWlnaHQ6IDI1dmg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnRlY2hub2xvZ2llcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAubWF0LWNhcmQ6aG92ZXIge1xyXG4gICAgLnRlY2hub2xvZ2llcyB7XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1hdC1jYXJkLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICB9XHJcblxyXG4gIC5tYXQtY2FyZC1hY3Rpb25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG5cclxuICAubWF0LWNhcmQtaGVhZGVyLXRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XHJcbiAgfVxyXG5cclxuICAubWF0LWNhcmQtaGVhZGVyIHtcclxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXRpdGxlIHtcclxuICAgIHBhZGRpbmc6IDEycHggMDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4NTBweCkge1xyXG4gIGFwcC1jdXN0b20tY2FyZCB7XHJcbiAgICBmbGV4OiB1bnNldDtcclxuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG5cclxuICAgIC5tYXQtY2FyZC1zdWJ0aXRsZSB7XHJcbiAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAubWF0LWNhcmQtY29udGVudCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomCardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-custom-card',
            templateUrl: './custom-card.component.html',
            styleUrls: ['./custom-card.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [{
            type: src_app_commons_service__WEBPACK_IMPORTED_MODULE_1__["CommonsService"]
          }];
        }, {
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "ojyh":
    /*!******************************************************!*\
      !*** ./src/app/pages/homepage/homepage.component.ts ***!
      \******************************************************/

    /*! exports provided: HomepageComponent */

    /***/
    function ojyh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomepageComponent", function () {
        return HomepageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_assets_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/assets/data */
      "6Xnp");
      /* harmony import */


      var src_app_commons_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/commons.service */
      "zZLy");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _components_custom_button_custom_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../components/custom-button/custom-button.component */
      "bGnb");
      /* harmony import */


      var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../components/contact/contact.component */
      "G2Gn");
      /* harmony import */


      var _components_custom_card_custom_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../components/custom-card/custom-card.component */
      "mPdx");

      function HomepageComponent_app_custom_card_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-custom-card", 17);
        }

        if (rf & 2) {
          var project_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", project_r5);
        }
      }

      function HomepageComponent_app_custom_card_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-custom-card", 17);
        }

        if (rf & 2) {
          var project_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", project_r6);
        }
      }

      function HomepageComponent_div_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " I like to write, sometimes \u270F\uFE0F ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HomepageComponent_div_33_app_custom_card_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-custom-card", 20);
        }

        if (rf & 2) {
          var publication_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", publication_r8);
        }
      }

      function HomepageComponent_div_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomepageComponent_div_33_app_custom_card_1_Template, 1, 1, "app-custom-card", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.publications);
        }
      }

      function HomepageComponent_div_34_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-custom-button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_div_34_Template_app_custom_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.openMedium();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isFilledButton", true);
        }
      }

      var HomepageComponent = /*#__PURE__*/function () {
        function HomepageComponent(commonsService) {
          _classCallCheck(this, HomepageComponent);

          this.commonsService = commonsService;
          this.publications = [];
          this.projectsTechnology = [];
          this.projectsDesign = [];
        }

        _createClass(HomepageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.isMobileView = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent);
            this.experience = src_assets_data__WEBPACK_IMPORTED_MODULE_1__["EXPERIENCE"][0];
            this.projectsDesign = src_assets_data__WEBPACK_IMPORTED_MODULE_1__["DESIGNPROJECTS"];
            this.commonsService.publications$.subscribe(function (publications) {
              _this5.publications = publications;
            });
            this.commonsService.repositories$.subscribe(function (repositories) {
              _this5.projectsTechnology = repositories;
            });
          }
        }, {
          key: "openGitHub",
          value: function openGitHub() {
            this.commonsService.openNewTab('https://github.com/madalinaeleonorag');
          }
        }, {
          key: "openMedium",
          value: function openMedium() {
            this.commonsService.openNewTab('https://madalinaeleonorag.medium.com/');
          }
        }]);

        return HomepageComponent;
      }();

      HomepageComponent.ɵfac = function HomepageComponent_Factory(t) {
        return new (t || HomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_commons_service__WEBPACK_IMPORTED_MODULE_2__["CommonsService"]));
      };

      HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomepageComponent,
        selectors: [["app-homepage"]],
        decls: 36,
        vars: 6,
        consts: [["id", "particles-js"], [1, "homepage-title"], [1, "welcome-name"], [1, "name"], [1, "welcome-subtitle"], [1, "description"], ["href", "https://ro.deloittedigital.com/"], ["href", "https://www.ibm.com/services/ibmix"], ["href", "https://www.renaultgroup.com/en/"], [1, "title"], [1, "projects"], ["type", "project", 3, "data", 4, "ngFor", "ngForOf"], [1, "see-more"], ["buttonText", "</See more projects on GitHub>", 3, "isFilledButton", "click"], ["class", "title", 4, "ngIf"], ["class", "publications", 4, "ngIf"], ["class", "see-more", 4, "ngIf"], ["type", "project", 3, "data"], [1, "publications"], ["type", "publication", 3, "data", 4, "ngFor", "ngForOf"], ["type", "publication", 3, "data"], ["buttonText", "See more articles on Medium", 3, "isFilledButton", "click"]],
        template: function HomepageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Hi, my name is");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Madalina-Eleonora");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " and I gathered my passions in Web Development ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " I'm a Bucharest-based software engineer specialised in building (and occasionally designing) digital experiences. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Currently I'm a Frontend Application Developer at ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Deloitte Digital");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, ", former Frontend Application Developer at ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "IBM iX");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " and Database Administrator at ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Groupe Renault");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, ", focused on increasing both technical and soft skills, working with people around the globe and learning how to deliver their expectations. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Latest programming projects \uD83D\uDCBB");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, HomepageComponent_app_custom_card_25_Template, 1, 1, "app-custom-card", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "app-custom-button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_Template_app_custom_button_click_27_listener() {
              return ctx.openGitHub();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Latest design projects \uD83C\uDFA8");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, HomepageComponent_app_custom_card_31_Template, 1, 1, "app-custom-card", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, HomepageComponent_div_32_Template, 2, 0, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, HomepageComponent_div_33_Template, 2, 1, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, HomepageComponent_div_34_Template, 2, 1, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "app-contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projectsTechnology);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isFilledButton", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projectsDesign);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.publications.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.publications.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.publications.length > 0);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _components_custom_button_custom_button_component__WEBPACK_IMPORTED_MODULE_4__["CustomButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"], _components_custom_card_custom_card_component__WEBPACK_IMPORTED_MODULE_6__["CustomCardComponent"]],
        styles: ["app-homepage {\n  font-size: 1rem;\n}\napp-homepage .logo {\n  text-align-last: center;\n  padding: 20px;\n}\napp-homepage .logo img {\n  width: auto;\n  height: 25vh;\n}\napp-homepage .homepage-title {\n  line-height: 1.7rem;\n  margin: 2vh 5vw 8vh 5vw;\n  padding: 1vh 0 2vh 3vw;\n  border-left: 1px solid var(--primary);\n}\napp-homepage .homepage-title .welcome-name {\n  color: var(--primary);\n  font-weight: 400;\n  font-family: monospace;\n}\napp-homepage .homepage-title .name {\n  height: auto;\n  color: var(--white);\n  padding: 10px 0;\n  font-size: 3rem;\n}\napp-homepage .homepage-title .welcome-subtitle {\n  color: var(--primary);\n  margin-top: 0;\n  font-family: monospace;\n}\napp-homepage .homepage-title .description {\n  font-family: monospace;\n  line-height: normal;\n  font-size: unset;\n}\napp-homepage .see-more {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: auto;\n  margin: 2vh auto;\n}\napp-homepage .projects {\n  display: flex;\n  margin: 10px;\n  overflow: auto;\n  flex-flow: wrap;\n  justify-content: center;\n}\napp-homepage .mat-tab-header {\n  border-bottom: none;\n}\napp-homepage .mat-tab-labels {\n  justify-content: center;\n}\napp-homepage .mat-tab-label {\n  opacity: 1;\n  color: var(--white);\n}\napp-homepage .publications {\n  display: flex;\n  justify-content: center;\n  flex-flow: wrap;\n}\napp-homepage .publications app-publications {\n  flex: 1 0 30%;\n}\napp-homepage .title {\n  margin: 2vh 5vh;\n  text-align-last: center;\n  font-size: 1.5rem;\n  color: var(--white);\n}\n@media (max-width: 850px) {\n  app-homepage .description-homepage {\n    margin: 3vh 5vw;\n  }\n  app-homepage .description-homepage .name {\n    font-size: x-large;\n  }\n  app-homepage .title {\n    font-size: 1rem;\n  }\n  app-homepage .publications app-publications {\n    flex: 0 0 50%;\n  }\n  app-homepage .publications app-publications .publication-wrapper {\n    padding: 10px;\n  }\n  app-homepage .publications app-publications .publication-wrapper .image {\n    height: 125px;\n    width: 125px;\n  }\n  app-homepage .publications app-publications .publication-wrapper .summary .name {\n    font-size: 0.9rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFRSxlQUFBO0FBRkY7QUFJRTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtBQUZKO0FBSUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUZOO0FBTUU7RUFDRSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQ0FBQTtBQUpKO0FBTUk7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFKTjtBQU9JO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFMTjtBQVFJO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFOTjtBQVNJO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBUE47QUFXRTtFQUNFLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQVRKO0FBWUU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFWSjtBQWFFO0VBQ0UsbUJBQUE7QUFYSjtBQWNFO0VBQ0UsdUJBQUE7QUFaSjtBQWVFO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0FBYko7QUFnQkU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBZEo7QUFnQkk7RUFDRSxhQUFBO0FBZE47QUFrQkU7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBaEJKO0FBbUJFO0VBQ0U7SUFDRSxlQUFBO0VBakJKO0VBbUJJO0lBQ0Usa0JBQUE7RUFqQk47RUFxQkU7SUFDRSxlQUFBO0VBbkJKO0VBdUJJO0lBQ0UsYUFBQTtFQXJCTjtFQXVCTTtJQUNFLGFBQUE7RUFyQlI7RUF1QlE7SUFDRSxhQUFBO0lBQ0EsWUFBQTtFQXJCVjtFQXlCVTtJQUNFLGlCQUFBO0VBdkJaO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuYXBwLWhvbWVwYWdlIHtcclxuXHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG5cclxuICAubG9nbyB7XHJcbiAgICB0ZXh0LWFsaWduLWxhc3Q6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgIGhlaWdodDogMjV2aDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5ob21lcGFnZS10aXRsZSB7XHJcbiAgICBsaW5lLWhlaWdodDogMS43cmVtO1xyXG4gICAgbWFyZ2luOiAydmggNXZ3IDh2aCA1dnc7XHJcbiAgICBwYWRkaW5nOiAxdmggMCAydmggM3Z3O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcclxuXHJcbiAgICAud2VsY29tZS1uYW1lIHtcclxuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgfVxyXG5cclxuICAgIC5uYW1lIHtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIH1cclxuXHJcbiAgICAud2VsY29tZS1zdWJ0aXRsZSB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgIH1cclxuXHJcbiAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgICBmb250LXNpemU6IHVuc2V0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNlZS1tb3JlIHtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbjogMnZoIGF1dG87XHJcbiAgfVxyXG5cclxuICAucHJvamVjdHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgZmxleC1mbG93OiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAubWF0LXRhYi1oZWFkZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5tYXQtdGFiLWxhYmVscyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5tYXQtdGFiLWxhYmVsIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gIH1cclxuXHJcbiAgLnB1YmxpY2F0aW9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWZsb3c6IHdyYXA7XHJcblxyXG4gICAgYXBwLXB1YmxpY2F0aW9ucyB7XHJcbiAgICAgIGZsZXg6IDEgMCAzMCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudGl0bGUge1xyXG4gICAgbWFyZ2luOiAydmggNXZoO1xyXG4gICAgdGV4dC1hbGlnbi1sYXN0OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogODUwcHgpIHtcclxuICAgIC5kZXNjcmlwdGlvbi1ob21lcGFnZSB7XHJcbiAgICAgIG1hcmdpbjogM3ZoIDV2dztcclxuXHJcbiAgICAgIC5uYW1lIHtcclxuICAgICAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnB1YmxpY2F0aW9ucyB7XHJcbiAgICAgIGFwcC1wdWJsaWNhdGlvbnMge1xyXG4gICAgICAgIGZsZXg6IDAgMCA1MCU7XHJcblxyXG4gICAgICAgIC5wdWJsaWNhdGlvbi13cmFwcGVyIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gICAgICAgICAgLmltYWdlIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMjVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEyNXB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zdW1tYXJ5IHtcclxuICAgICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-homepage',
            templateUrl: './homepage.component.html',
            styleUrls: ['./homepage.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [{
            type: src_app_commons_service__WEBPACK_IMPORTED_MODULE_2__["CommonsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "uMBx":
    /*!*******************************************************************************!*\
      !*** ./src/app/components/custom-social-card/custom-social-card.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: CustomSocialCardComponent */

    /***/
    function uMBx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomSocialCardComponent", function () {
        return CustomSocialCardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _custom_svg_custom_svg_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../custom-svg/custom-svg.component */
      "HoFA");

      function CustomSocialCardComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-custom-svg", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.text);
        }
      }

      function CustomSocialCardComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-custom-svg", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r1.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.text, " ");
        }
      }

      var CustomSocialCardComponent = /*#__PURE__*/function () {
        function CustomSocialCardComponent() {
          _classCallCheck(this, CustomSocialCardComponent);
        }

        _createClass(CustomSocialCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CustomSocialCardComponent;
      }();

      CustomSocialCardComponent.ɵfac = function CustomSocialCardComponent_Factory(t) {
        return new (t || CustomSocialCardComponent)();
      };

      CustomSocialCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CustomSocialCardComponent,
        selectors: [["app-custom-social-card"]],
        inputs: {
          text: "text",
          type: "type",
          link: "link"
        },
        decls: 6,
        vars: 2,
        consts: [[1, "border-btn"], [1, "border-btn__inner"], [4, "ngIf"], [1, "border-btn__lines-1"], [1, "border-btn__lines-2"], ["target", "_blank", "href", "mailto:madalinaeleonora.gheorghe@gmail.com"], ["type", "email"], ["target", "_blank", 3, "href"], [3, "type"]],
        template: function CustomSocialCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomSocialCardComponent_div_2_Template, 5, 1, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CustomSocialCardComponent_div_3_Template, 5, 3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type !== "email");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _custom_svg_custom_svg_component__WEBPACK_IMPORTED_MODULE_2__["CustomSvgComponent"]],
        styles: ["app-custom-social-card div {\n  border: none;\n  color: inherit;\n  text-decoration: none;\n  cursor: pointer;\n}\napp-custom-social-card div:hover {\n  text-decoration: none;\n}\napp-custom-social-card div:hover .icon {\n  fill: var(--primary);\n}\napp-custom-social-card div:focus {\n  outline: none;\n}\napp-custom-social-card .border-btn {\n  display: inline-block;\n  position: relative;\n  margin: 0.3rem;\n  text-align: end;\n  padding: 0.5rem;\n}\napp-custom-social-card .border-btn__inner {\n  font-size: 10px;\n  font-weight: 400;\n  letter-spacing: 2px;\n  line-height: 1.2;\n  text-transform: uppercase;\n  display: inline-block;\n  height: -webkit-fill-available;\n  color: var(--primary);\n  transition: 0.5s cubic-bezier(0.17, 0.85, 0.438, 0.99);\n}\napp-custom-social-card .border-btn__inner a {\n  display: flex;\n  flex-flow: column;\n  align-items: flex-end;\n}\napp-custom-social-card .border-btn__inner a span {\n  color: var(--lightgray);\n  padding-top: 0.2vh;\n}\napp-custom-social-card .border-btn:before,\napp-custom-social-card .border-btn:after,\napp-custom-social-card .border-btn__inner:before,\napp-custom-social-card .border-btn__inner:after {\n  content: \"\";\n  position: absolute;\n  background-color: var(--primary);\n  opacity: 0.2;\n  transition: 0.5s cubic-bezier(0.17, 0.85, 0.438, 0.99);\n}\napp-custom-social-card .border-btn:before {\n  width: 100%;\n  height: 1px;\n  left: 0;\n  top: 0;\n  transform: scaleX(1);\n  transform-origin: right;\n}\napp-custom-social-card .border-btn:after {\n  width: 1px;\n  height: 100%;\n  top: 0;\n  right: 0;\n  transform: scaleY(1);\n  transform-origin: bottom;\n}\napp-custom-social-card .border-btn__inner:before {\n  width: 100%;\n  height: 1px;\n  left: 0;\n  bottom: 0;\n  transform: scaleX(1);\n  transform-origin: left;\n}\napp-custom-social-card .border-btn__inner:after {\n  width: 1px;\n  height: 100%;\n  left: 0;\n  top: 0;\n  transform: scaleY(1);\n  transform-origin: top;\n}\napp-custom-social-card .border-btn:hover:before,\napp-custom-social-card .border-btn:hover .border-btn__inner:before {\n  transform: scaleX(0);\n}\napp-custom-social-card .border-btn:hover:after,\napp-custom-social-card .border-btn:hover .border-btn__inner:after {\n  transform: scaleY(0);\n}\napp-custom-social-card .border-btn__lines-1:before,\napp-custom-social-card .border-btn__lines-1:after,\napp-custom-social-card .border-btn__lines-2:before,\napp-custom-social-card .border-btn__lines-2:after {\n  content: \"\";\n  position: absolute;\n  background-color: var(--primary);\n  transition: 0.5s cubic-bezier(0.17, 0.85, 0.438, 0.99);\n}\napp-custom-social-card .border-btn__lines-1:before {\n  width: 100%;\n  height: 1px;\n  left: 0;\n  top: 0;\n  transform: scaleX(0);\n  transform-origin: left;\n}\napp-custom-social-card .border-btn__lines-1:after {\n  width: 1px;\n  height: 100%;\n  top: 0;\n  right: 0;\n  transform: scaleY(0);\n  transform-origin: top;\n}\napp-custom-social-card .border-btn__lines-2:before {\n  width: 100%;\n  height: 1px;\n  left: 0;\n  bottom: 0;\n  transform: scaleX(0);\n  transform-origin: right;\n}\napp-custom-social-card .border-btn__lines-2:after {\n  width: 1px;\n  height: 100%;\n  left: 0;\n  top: 0;\n  transform: scaleY(0);\n  transform-origin: bottom;\n}\napp-custom-social-card .border-btn:hover .border-btn__lines-1:before,\napp-custom-social-card .border-btn:hover .border-btn__lines-2:before {\n  transform: scaleX(1);\n}\napp-custom-social-card .border-btn:hover .border-btn__lines-1:after,\napp-custom-social-card .border-btn:hover .border-btn__lines-2:after {\n  transform: scaleY(1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdXN0b20tc29jaWFsLWNhcmQvY3VzdG9tLXNvY2lhbC1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFGSjtBQUlFO0VBQ0UscUJBQUE7QUFGSjtBQUdJO0VBQ0Usb0JBQUE7QUFETjtBQUlFO0VBQ0UsYUFBQTtBQUZKO0FBSUU7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBRko7QUFJRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLHNEQUFBO0FBRko7QUFJSTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBRk47QUFJTTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7QUFGUjtBQU1FOzs7O0VBSUUsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0Esc0RBQUE7QUFKSjtBQU1FO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUVBLG9CQUFBO0VBRUEsdUJBQUE7QUFKSjtBQU1FO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUVBLG9CQUFBO0VBRUEsd0JBQUE7QUFKSjtBQU1FO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUVBLG9CQUFBO0VBRUEsc0JBQUE7QUFKSjtBQU1FO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUVBLG9CQUFBO0VBRUEscUJBQUE7QUFKSjtBQU1FOztFQUdFLG9CQUFBO0FBSko7QUFNRTs7RUFHRSxvQkFBQTtBQUpKO0FBTUU7Ozs7RUFJRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHNEQUFBO0FBSko7QUFNRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFFQSxvQkFBQTtFQUVBLHNCQUFBO0FBSko7QUFNRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFFQSxvQkFBQTtFQUVBLHFCQUFBO0FBSko7QUFNRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFFQSxvQkFBQTtFQUVBLHVCQUFBO0FBSko7QUFNRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFFQSxvQkFBQTtFQUVBLHdCQUFBO0FBSko7QUFNRTs7RUFHRSxvQkFBQTtBQUpKO0FBTUU7O0VBR0Usb0JBQUE7QUFKSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VzdG9tLXNvY2lhbC1jYXJkL2N1c3RvbS1zb2NpYWwtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuYXBwLWN1c3RvbS1zb2NpYWwtY2FyZCB7XHJcbiAgZGl2IHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBkaXY6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgLmljb24ge1xyXG4gICAgICBmaWxsOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgIH1cclxuICB9XHJcbiAgZGl2OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gIC5ib3JkZXItYnRuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMC4zcmVtO1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gIH1cclxuICAuYm9yZGVyLWJ0bl9faW5uZXIge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgIHRyYW5zaXRpb246IDAuNXMgY3ViaWMtYmV6aWVyKDAuMTcsIDAuODUsIDAuNDM4LCAwLjk5KTtcclxuXHJcbiAgICBhIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuXHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1saWdodGdyYXkpO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwLjJ2aDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuYm9yZGVyLWJ0bjpiZWZvcmUsXHJcbiAgLmJvcmRlci1idG46YWZ0ZXIsXHJcbiAgLmJvcmRlci1idG5fX2lubmVyOmJlZm9yZSxcclxuICAuYm9yZGVyLWJ0bl9faW5uZXI6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgb3BhY2l0eTogMC4yO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyBjdWJpYy1iZXppZXIoMC4xNywgMC44NSwgMC40MzgsIDAuOTkpO1xyXG4gIH1cclxuICAuYm9yZGVyLWJ0bjpiZWZvcmUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XHJcbiAgfVxyXG4gIC5ib3JkZXItYnRuOmFmdGVyIHtcclxuICAgIHdpZHRoOiAxcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xyXG4gIH1cclxuICAuYm9yZGVyLWJ0bl9faW5uZXI6YmVmb3JlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcclxuICB9XHJcbiAgLmJvcmRlci1idG5fX2lubmVyOmFmdGVyIHtcclxuICAgIHdpZHRoOiAxcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgxKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XHJcbiAgfVxyXG4gIC5ib3JkZXItYnRuOmhvdmVyOmJlZm9yZSxcclxuICAuYm9yZGVyLWJ0bjpob3ZlciAuYm9yZGVyLWJ0bl9faW5uZXI6YmVmb3JlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICB9XHJcbiAgLmJvcmRlci1idG46aG92ZXI6YWZ0ZXIsXHJcbiAgLmJvcmRlci1idG46aG92ZXIgLmJvcmRlci1idG5fX2lubmVyOmFmdGVyIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcclxuICB9XHJcbiAgLmJvcmRlci1idG5fX2xpbmVzLTE6YmVmb3JlLFxyXG4gIC5ib3JkZXItYnRuX19saW5lcy0xOmFmdGVyLFxyXG4gIC5ib3JkZXItYnRuX19saW5lcy0yOmJlZm9yZSxcclxuICAuYm9yZGVyLWJ0bl9fbGluZXMtMjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGN1YmljLWJlemllcigwLjE3LCAwLjg1LCAwLjQzOCwgMC45OSk7XHJcbiAgfVxyXG4gIC5ib3JkZXItYnRuX19saW5lcy0xOmJlZm9yZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XHJcbiAgfVxyXG4gIC5ib3JkZXItYnRuX19saW5lcy0xOmFmdGVyIHtcclxuICAgIHdpZHRoOiAxcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xyXG4gIH1cclxuICAuYm9yZGVyLWJ0bl9fbGluZXMtMjpiZWZvcmUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XHJcbiAgfVxyXG4gIC5ib3JkZXItYnRuX19saW5lcy0yOmFmdGVyIHtcclxuICAgIHdpZHRoOiAxcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgwKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XHJcbiAgfVxyXG4gIC5ib3JkZXItYnRuOmhvdmVyIC5ib3JkZXItYnRuX19saW5lcy0xOmJlZm9yZSxcclxuICAuYm9yZGVyLWJ0bjpob3ZlciAuYm9yZGVyLWJ0bl9fbGluZXMtMjpiZWZvcmUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG4gIH1cclxuICAuYm9yZGVyLWJ0bjpob3ZlciAuYm9yZGVyLWJ0bl9fbGluZXMtMTphZnRlcixcclxuICAuYm9yZGVyLWJ0bjpob3ZlciAuYm9yZGVyLWJ0bl9fbGluZXMtMjphZnRlciB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomSocialCardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-custom-social-card',
            templateUrl: './custom-social-card.component.html',
            styleUrls: ['./custom-social-card.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [];
        }, {
          text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          link: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "uoxI":
    /*!*************************************************************************!*\
      !*** ./src/app/components/experience-card/experience-card.component.ts ***!
      \*************************************************************************/

    /*! exports provided: ExperienceCardComponent */

    /***/
    function uoxI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExperienceCardComponent", function () {
        return ExperienceCardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _custom_chip_custom_chip_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../custom-chip/custom-chip.component */
      "k2K2");

      function ExperienceCardComponent_img_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.experience.companyLogo ? ctx_r0.experience.companyLogo : ctx_r0.experience.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function ExperienceCardComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.experience.location, " ");
        }
      }

      function ExperienceCardComponent_div_11_app_custom_chip_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-custom-chip", 14);
        }

        if (rf & 2) {
          var skill_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", skill_r5);
        }
      }

      function ExperienceCardComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExperienceCardComponent_div_11_app_custom_chip_1_Template, 1, 1, "app-custom-chip", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.experience.skill);
        }
      }

      function ExperienceCardComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 15);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r3.experience.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      var ExperienceCardComponent = /*#__PURE__*/function () {
        function ExperienceCardComponent() {
          _classCallCheck(this, ExperienceCardComponent);
        }

        _createClass(ExperienceCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ExperienceCardComponent;
      }();

      ExperienceCardComponent.ɵfac = function ExperienceCardComponent_Factory(t) {
        return new (t || ExperienceCardComponent)();
      };

      ExperienceCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ExperienceCardComponent,
        selectors: [["app-experience-card"]],
        inputs: {
          experience: "experience",
          parentPage: "parentPage"
        },
        decls: 13,
        vars: 8,
        consts: [[1, "header"], [1, "image"], [3, "src", 4, "ngIf"], [1, "summary"], [1, "name"], [1, "role"], [1, "date"], ["class", "location", 4, "ngIf"], ["class", "skills", 4, "ngIf"], ["class", "description", 3, "innerHTML", 4, "ngIf"], [3, "src"], [1, "location"], [1, "skills"], [3, "text", 4, "ngFor", "ngForOf"], [3, "text"], [1, "description", 3, "innerHTML"]],
        template: function ExperienceCardComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }

          if (rf & 2) {
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
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _custom_chip_custom_chip_component__WEBPACK_IMPORTED_MODULE_2__["CustomChipComponent"]],
        styles: ["app-experience-card .header {\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n}\napp-experience-card .header .image img {\n  max-width: 150px;\n  height: auto;\n}\napp-experience-card .header .summary {\n  display: flex;\n  flex-flow: column;\n  padding: 20px;\n}\napp-experience-card .header .summary .name {\n  font-weight: bold;\n  color: var(--darkPrimary);\n}\napp-experience-card .header .summary .role {\n  font-weight: bold;\n  font-size: 1.2rem;\n  color: var(--primary);\n  margin: 4px 0;\n}\napp-experience-card .header .summary .date {\n  font-weight: normal;\n}\napp-experience-card .header .summary .location {\n  color: var(--lightgray);\n}\napp-experience-card .skills {\n  display: flex;\n  flex-flow: wrap;\n  margin: 10px 0;\n}\napp-experience-card .description {\n  line-height: 1.5rem;\n}\n@media (max-width: 800px) {\n  app-experience-card .header {\n    flex-flow: wrap;\n    margin: 10px 0;\n  }\n  app-experience-card .header .image img {\n    max-width: 80px;\n  }\n  app-experience-card .header .summary {\n    padding: 0 10px;\n  }\n  app-experience-card .header .summary .role {\n    font-size: small;\n  }\n  app-experience-card .header .location {\n    display: none;\n  }\n  app-experience-card .description {\n    font-size: smaller;\n  }\n  app-experience-card .description h3, app-experience-card .description h4 {\n    margin: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9leHBlcmllbmNlLWNhcmQvZXhwZXJpZW5jZS1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUZKO0FBS007RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUFIUjtBQU1JO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQUpOO0FBTU07RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0FBSlI7QUFNTTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7QUFKUjtBQU1NO0VBQ0UsbUJBQUE7QUFKUjtBQU1NO0VBQ0UsdUJBQUE7QUFKUjtBQVNFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBUEo7QUFVRTtFQUNFLG1CQUFBO0FBUko7QUFXRTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGNBQUE7RUFUSjtFQVdJO0lBQ0UsZUFBQTtFQVROO0VBWUk7SUFDRSxlQUFBO0VBVk47RUFZTTtJQUNFLGdCQUFBO0VBVlI7RUFjSTtJQUNFLGFBQUE7RUFaTjtFQWVFO0lBQ0Usa0JBQUE7RUFiSjtFQWVJO0lBQ0UsU0FBQTtFQWJOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2V4cGVyaWVuY2UtY2FyZC9leHBlcmllbmNlLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmFwcC1leHBlcmllbmNlLWNhcmQge1xyXG4gIC5oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAuaW1hZ2Uge1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIG1heC13aWR0aDogMTUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuc3VtbWFyeSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgICBwYWRkaW5nOiAyMHB4O1xyXG5cclxuICAgICAgLm5hbWUge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrUHJpbWFyeSk7XHJcbiAgICAgIH1cclxuICAgICAgLnJvbGUge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgICAgICBtYXJnaW46IDRweCAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5kYXRlIHtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICB9XHJcbiAgICAgIC5sb2NhdGlvbiB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWxpZ2h0Z3JheSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5za2lsbHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogd3JhcDtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gIH1cclxuXHJcbiAgLmRlc2NyaXB0aW9uIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIC5oZWFkZXIge1xyXG4gICAgICBmbGV4LWZsb3c6IHdyYXA7XHJcbiAgICAgIG1hcmdpbjogMTBweCAwO1xyXG5cclxuICAgICAgLmltYWdlIGltZyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA4MHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3VtbWFyeSB7XHJcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG5cclxuICAgICAgICAucm9sZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmxvY2F0aW9uIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcblxyXG4gICAgICBoMywgaDQge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgfSBcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceCardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-experience-card',
            templateUrl: './experience-card.component.html',
            styleUrls: ['./experience-card.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [];
        }, {
          experience: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          parentPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "v2M4":
    /*!********************************************************!*\
      !*** ./src/app/pages/not-found/not-found.component.ts ***!
      \********************************************************/

    /*! exports provided: NotFoundComponent */

    /***/
    function v2M4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
        return NotFoundComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_app_commons_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/commons.service */
      "zZLy");

      var NotFoundComponent = /*#__PURE__*/function () {
        function NotFoundComponent(commonsService) {
          _classCallCheck(this, NotFoundComponent);

          this.commonsService = commonsService;
        }

        _createClass(NotFoundComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToHomepage",
          value: function goToHomepage() {
            this.commonsService.navigateToURL('/');
          }
        }]);

        return NotFoundComponent;
      }();

      NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
        return new (t || NotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_commons_service__WEBPACK_IMPORTED_MODULE_1__["CommonsService"]));
      };

      NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NotFoundComponent,
        selectors: [["app-not-found"]],
        decls: 8,
        vars: 0,
        consts: [[1, "wrapper"], [3, "click"]],
        template: function NotFoundComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "404 - Page not found");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " You might want to go to the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotFoundComponent_Template_a_click_5_listener() {
              return ctx.goToHomepage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Homepage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " and try again. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["app-not-found .wrapper {\n  margin: 20px;\n}\napp-not-found .wrapper a {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLFlBQUE7QUFGSjtBQUlJO0VBQ0UsZUFBQTtBQUZOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuYXBwLW5vdC1mb3VuZCB7XHJcbiAgLndyYXBwZXIge1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG5cclxuICAgIGEge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-not-found',
            templateUrl: './not-found.component.html',
            styleUrls: ['./not-found.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [{
            type: src_app_commons_service__WEBPACK_IMPORTED_MODULE_1__["CommonsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _pages_experience_experience_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pages/experience/experience.component */
      "mKaJ");
      /* harmony import */


      var _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pages/homepage/homepage.component */
      "ojyh");
      /* harmony import */


      var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pages/not-found/not-found.component */
      "v2M4");
      /* harmony import */


      var _pages_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pages/project-details/project-details.component */
      "X1wX");
      /* harmony import */


      var _pages_skills_skills_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pages/skills/skills.component */
      "2yNh");

      var routes = [{
        path: '',
        component: _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"]
      }, {
        path: 'skills',
        component: _pages_skills_skills_component__WEBPACK_IMPORTED_MODULE_6__["SkillsComponent"]
      }, {
        path: 'experience',
        component: _pages_experience_experience_component__WEBPACK_IMPORTED_MODULE_2__["ExperienceComponent"]
      }, {
        path: 'project/:id',
        component: _pages_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_5__["ProjectDetailsComponent"]
      }, {
        path: '404',
        component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"]
      }, {
        path: '**',
        redirectTo: '/404'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
          useHash: true
        })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
              useHash: true
            })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zZLy":
    /*!************************************!*\
      !*** ./src/app/commons.service.ts ***!
      \************************************/

    /*! exports provided: CommonsService */

    /***/
    function zZLy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommonsService", function () {
        return CommonsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _data_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./data.model */
      "PUJg");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var CommonsService = /*#__PURE__*/function () {
        function CommonsService(http, router) {
          _classCallCheck(this, CommonsService);

          this.http = http;
          this.router = router;
          this.isDarkThemeDefault = localStorage.getItem('theme') ? localStorage.getItem('theme') && localStorage.getItem('theme') === 'dark' ? true : false : true;
          this.publications = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.publications$ = this.publications.asObservable();
          this.repositories = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
          this.repositories$ = this.repositories.asObservable();
          this.changeTheme = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.isDarkThemeDefault);
          this.changeTheme$ = this.changeTheme.asObservable();
        }

        _createClass(CommonsService, [{
          key: "getDataFromAPIs",
          value: function getDataFromAPIs() {
            this.getPublications();
            this.getRepositories();
          }
        }, {
          key: "getPublications",
          value: function getPublications() {
            var _this6 = this;

            var articlesToShow = [];
            this.http.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@madalinaeleonorag').subscribe(function (data) {
              switch (true) {
                case data.items.length > 7:
                  articlesToShow = _toConsumableArray(data.items.slice(0, 6));
                  break;

                default:
                  articlesToShow = _toConsumableArray(data.items);
                  break;
              }

              _this6.publications.next(articlesToShow);
            });
          }
        }, {
          key: "openNewTab",
          value: function openNewTab(link) {
            window.open(link);
          }
        }, {
          key: "navigateToURL",
          value: function navigateToURL(url) {
            this.router.navigateByUrl(url);
            this.goToTop();
          }
        }, {
          key: "goToTop",
          value: function goToTop() {
            document.body.scrollTop = 0; // For Safari

            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
          }
        }, {
          key: "getRepositories",
          value: function getRepositories() {
            var _this7 = this;

            var dataMapped = [];
            this.http.get('https://api.github.com/users/madalinaeleonorag/repos?type=public&sort=pushed&per_page=9').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
              dataMapped = [];
              data.forEach(function (element) {
                var newProject = new _data_model__WEBPACK_IMPORTED_MODULE_2__["ProjectModel"]();
                newProject.name = element.name;
                newProject.code = element.html_url;
                newProject.live = element.homepage;
                newProject.technologies = [element.languages_url];
                newProject.noDetails = true;
                newProject.logo = "./../assets/projects/github/".concat(element.name, ".png");
                dataMapped.push(newProject);
              });
              return dataMapped;
            })).subscribe(function (data) {
              data.forEach(function (element) {
                _this7.http.get(element.technologies[0]).subscribe(function (response) {
                  element.technologies = response ? Object.keys(response) : [];
                });
              });

              _this7.repositories.next(dataMapped);
            });
          }
        }, {
          key: "cookieConsoleMessage",
          value: function cookieConsoleMessage() {
            var consoleSignatureStyle = 'font-size: 12px;' + 'background: #a50c0c;' + 'color: white;' + 'text-align: center;' + 'padding: 5px 10px;' + 'margin: 5px 0;' + 'width: 100%;' + 'border-radius: 20px;';
            var consoleSignatureText = '%cDon\'t steal my cookies! 🍪';
            console.log(consoleSignatureText, consoleSignatureStyle);
          }
        }]);

        return CommonsService;
      }();

      CommonsService.ɵfac = function CommonsService_Factory(t) {
        return new (t || CommonsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      CommonsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CommonsService,
        factory: CommonsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zeqP":
    /*!*************************************************************************!*\
      !*** ./src/app/components/education-level/education-level.component.ts ***!
      \*************************************************************************/

    /*! exports provided: EducationLevelComponent */

    /***/
    function zeqP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EducationLevelComponent", function () {
        return EducationLevelComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      function EducationLevelComponent_img_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.education.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function EducationLevelComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Grade: ", ctx_r1.education.grade, "");
        }
      }

      var EducationLevelComponent = /*#__PURE__*/function () {
        function EducationLevelComponent() {
          _classCallCheck(this, EducationLevelComponent);
        }

        _createClass(EducationLevelComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return EducationLevelComponent;
      }();

      EducationLevelComponent.ɵfac = function EducationLevelComponent_Factory(t) {
        return new (t || EducationLevelComponent)();
      };

      EducationLevelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EducationLevelComponent,
        selectors: [["app-education-level"]],
        inputs: {
          education: "education"
        },
        decls: 14,
        vars: 8,
        consts: [[1, "header"], [1, "image"], ["alt", "", 3, "src", 4, "ngIf"], [1, "summary"], [1, "name"], [1, "degree"], [1, "fieldOfStudy"], [1, "date"], ["class", "grade", 4, "ngIf"], [1, "description", 3, "innerHTML"], ["alt", "", 3, "src"], [1, "grade"]],
        template: function EducationLevelComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }

          if (rf & 2) {
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
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: ["app-education-level .header {\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  padding: 20px 0;\n}\napp-education-level .header .image {\n  padding-right: 20px;\n}\napp-education-level .header .image img {\n  max-width: 150px;\n  height: auto;\n}\napp-education-level .header .summary {\n  display: flex;\n  flex-flow: column;\n}\napp-education-level .header .summary .name {\n  font-weight: bold;\n  color: var(--darkPrimary);\n}\napp-education-level .header .summary .degree {\n  font-weight: bold;\n  font-size: 1.2rem;\n  color: var(--primary);\n  margin: 4px 0;\n}\napp-education-level .header .summary .date {\n  font-weight: normal;\n}\napp-education-level .header .summary .fieldOfStudy {\n  font-weight: normal;\n  color: var(--lightgray);\n}\napp-education-level .header .summary .grade {\n  color: var(--lightgray);\n}\napp-education-level .description {\n  line-height: 1.5rem;\n}\n@media (max-width: 800px) {\n  app-education-level .header {\n    padding: 10px 0;\n  }\n  app-education-level .header .image {\n    display: none;\n  }\n  app-education-level .header .summary {\n    text-align: -webkit-center;\n  }\n  app-education-level .header .summary .name {\n    display: none;\n  }\n  app-education-level .description {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZHVjYXRpb24tbGV2ZWwvZWR1Y2F0aW9uLWxldmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFGSjtBQUlJO0VBQ0UsbUJBQUE7QUFGTjtBQUlNO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBRlI7QUFLSTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQUhOO0FBS007RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0FBSFI7QUFLTTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7QUFIUjtBQUtNO0VBQ0UsbUJBQUE7QUFIUjtBQUtNO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtBQUhSO0FBS007RUFDRSx1QkFBQTtBQUhSO0FBUUU7RUFDRSxtQkFBQTtBQU5KO0FBU0U7RUFDRTtJQUNFLGVBQUE7RUFQSjtFQVNJO0lBQ0UsYUFBQTtFQVBOO0VBVUk7SUFDRSwwQkFBQTtFQVJOO0VBVU07SUFDRSxhQUFBO0VBUlI7RUFZRTtJQUNFLGFBQUE7RUFWSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lZHVjYXRpb24tbGV2ZWwvZWR1Y2F0aW9uLWxldmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5hcHAtZWR1Y2F0aW9uLWxldmVsIHtcclxuICAuaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDA7XHJcblxyXG4gICAgLmltYWdlIHtcclxuICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxNTBweDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5zdW1tYXJ5IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcblxyXG4gICAgICAubmFtZSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWRhcmtQcmltYXJ5KTtcclxuICAgICAgfVxyXG4gICAgICAuZGVncmVlIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICAgICAgbWFyZ2luOiA0cHggMDtcclxuICAgICAgfVxyXG4gICAgICAuZGF0ZSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgfVxyXG4gICAgICAuZmllbGRPZlN0dWR5IHtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1saWdodGdyYXkpO1xyXG4gICAgICB9XHJcbiAgICAgIC5ncmFkZSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWxpZ2h0Z3JheSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5kZXNjcmlwdGlvbiB7XHJcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICBcclxuICAgICAgLmltYWdlIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3VtbWFyeSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EducationLevelComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-education-level',
            templateUrl: './education-level.component.html',
            styleUrls: ['./education-level.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [];
        }, {
          education: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map