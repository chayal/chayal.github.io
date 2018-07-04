(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Modals/Modal/modal-basic.css":
/*!**********************************************!*\
  !*** ./src/app/Modals/Modal/modal-basic.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  font: normal normal normal 20px/1.4em helveticaneuew01-45ligh,sans-serif;\r\n  color: rgba(32,48,60,1);\r\n  font-family: Calibri;\r\n}\r\n\r\n.btn_main {\r\n  background-color: #0d5da7; /* Green #0d5da7*/\r\n  border: none;\r\n  color: white;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 4px 2px;\r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n  width: 100%;\r\n  border-style: none;\r\n}\r\n\r\n#hours {\r\n  font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\r\n\r\n#hours td, #hours th {\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n  }\r\n\r\n#hours tr:nth-child(even) {\r\n    background-color: #f2f2f2;\r\n  }\r\n\r\n#hours tr:hover {\r\n    background-color: #ddd;\r\n  }\r\n\r\n#hours th {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: left;\r\n    background-color: darkgray;/*#4CAF50*/\r\n    color: white;\r\n  }\r\n\r\n.btn:hover {\r\n  background-color: #ddd;\r\n}\r\n\r\n.btn {\r\n  border-color: darkgray;\r\n  color: darkgray;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/Modals/Modal/modal-basic.html":
/*!***********************************************!*\
  !*** ./src/app/Modals/Modal/modal-basic.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Hour Counter</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form>\r\n      <div class=\"form-group\">\r\n        <table style=\"width:100%\" id=\"hours\">\r\n          <tr>\r\n            <th>Component</th>\r\n            <th>Hour Counter</th>\r\n\r\n          </tr>\r\n          <tr>\r\n            <td>Electronics Cards</td>\r\n            <td>150:20:30</td>\r\n\r\n          </tr>\r\n          <tr>\r\n            <td>VIS Camera</td>\r\n            <td>270:53:52</td>\r\n\r\n          </tr>\r\n          <tr>\r\n            <td>SWIR Camera</td>\r\n            <td>89:10:20</td>\r\n\r\n          </tr>\r\n        </table>\r\n\r\n        <!--<label for=\"dateOfBirth\">Hour Counter</label>\r\n  <div class=\"input-group\">\r\n    <input id=\"dateOfBirth\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" ngbDatepicker #dp=\"ngbDatepicker\">\r\n    <div class=\"input-group-append\">\r\n      <button class=\"btn btn-outline-secondary\" (click)=\"dp.toggle()\" type=\"button\">\r\n        <img src=\"img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n      </button>\r\n    </div>\r\n  </div>-->\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Close</button>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n\r\n<div>\r\n  \r\n  <input type=\"button\" class=\"btn_main\" (click)=\"open(content)\" value=\"Hour Counter\" />\r\n</div>\r\n\r\n\r\n<!--<hr>-->\r\n<!--<pre>{{closeResult}}</pre>-->\r\n"

/***/ }),

/***/ "./src/app/Modals/Modal/modal-basic.ts":
/*!*********************************************!*\
  !*** ./src/app/Modals/Modal/modal-basic.ts ***!
  \*********************************************/
/*! exports provided: NgbdModalBasic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalBasic", function() { return NgbdModalBasic; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdModalBasic = /** @class */ (function () {
    function NgbdModalBasic(modalService) {
        this.modalService = modalService;
    }
    NgbdModalBasic.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    NgbdModalBasic.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    NgbdModalBasic = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-modal-basic',
            template: __webpack_require__(/*! ./modal-basic.html */ "./src/app/Modals/Modal/modal-basic.html"),
            styles: [__webpack_require__(/*! ./modal-basic.css */ "./src/app/Modals/Modal/modal-basic.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], NgbdModalBasic);
    return NgbdModalBasic;
}());



/***/ }),

/***/ "./src/app/Modals/ModalBIT/modal-bit.css":
/*!***********************************************!*\
  !*** ./src/app/Modals/ModalBIT/modal-bit.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  font: normal normal normal 20px/1.4em helveticaneuew01-45ligh,sans-serif;\r\n  color: rgba(32,48,60,1);\r\n  font-family: Calibri;\r\n}\r\n\r\n.btn_main {\r\n  background-color: #0d5da7; /* Green #0d5da7*/\r\n  border: none;\r\n  color: white;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 4px 2px;\r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n  width: 100%;\r\n  border-style: none;\r\n}\r\n\r\n#hours {\r\n  font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\r\n\r\n#hours td, #hours th {\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n  }\r\n\r\n#hours tr:nth-child(even) {\r\n    background-color: #f2f2f2;\r\n  }\r\n\r\n#hours tr:hover {\r\n    background-color: #ddd;\r\n  }\r\n\r\n#hours th {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: left;\r\n    background-color: darkgray;/*#4CAF50*/\r\n    color: white;\r\n  }\r\n\r\n.btn:hover {\r\n  background-color: #ddd;\r\n}\r\n\r\n.btn {\r\n  border-color: darkgray;\r\n  color: darkgray;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/Modals/ModalBIT/modal-bit.html":
/*!************************************************!*\
  !*** ./src/app/Modals/ModalBIT/modal-bit.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">BIT</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form>\r\n      <div class=\"form-group\">\r\n\r\n\r\n        <!--<label for=\"dateOfBirth\">BIT Completed successfully!</label>-->\r\n        <label for=\"dateOfBirth\">BIT Completed with errors: </label>\r\n        <label for=\"dateOfBirth\">GENERIC ERROR</label>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Close</button>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n\r\n<div>\r\n  \r\n  <input type=\"button\" class=\"btn_main\" (click)=\"open(content)\" value=\"BIT\" />\r\n</div>\r\n\r\n\r\n<!--<hr>-->\r\n<!--<pre>{{closeResult}}</pre>-->\r\n"

/***/ }),

/***/ "./src/app/Modals/ModalBIT/modal-bit.ts":
/*!**********************************************!*\
  !*** ./src/app/Modals/ModalBIT/modal-bit.ts ***!
  \**********************************************/
/*! exports provided: NgbdModalBit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalBit", function() { return NgbdModalBit; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdModalBit = /** @class */ (function () {
    function NgbdModalBit(modalService) {
        this.modalService = modalService;
    }
    NgbdModalBit.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    NgbdModalBit.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    NgbdModalBit = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-modal-bit',
            template: __webpack_require__(/*! ./modal-bit.html */ "./src/app/Modals/ModalBIT/modal-bit.html"),
            styles: [__webpack_require__(/*! ./modal-bit.css */ "./src/app/Modals/ModalBIT/modal-bit.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], NgbdModalBit);
    return NgbdModalBit;
}());



/***/ }),

/***/ "./src/app/Modals/ModalCentralization/modal-centralization.css":
/*!*********************************************************************!*\
  !*** ./src/app/Modals/ModalCentralization/modal-centralization.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  font: normal normal normal 20px/1.4em helveticaneuew01-45ligh,sans-serif;\r\n  color: rgba(32,48,60,1);\r\n  font-family: Calibri;\r\n}\r\n\r\n.btn_main {\r\n  background-color: #0d5da7; /* Green #0d5da7*/\r\n  border: none;\r\n  color: white;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 4px 2px;\r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n  width: 100%;\r\n  border-style: none;\r\n}\r\n\r\n#hours {\r\n  font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\r\n\r\n#hours td, #hours th {\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n  }\r\n\r\n#hours tr:nth-child(even) {\r\n    background-color: #f2f2f2;\r\n  }\r\n\r\n#hours tr:hover {\r\n    background-color: #ddd;\r\n  }\r\n\r\n#hours th {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: left;\r\n    background-color: darkgray;/*#4CAF50*/\r\n    color: white;\r\n  }\r\n\r\n.btn:hover {\r\n  background-color: #ddd;\r\n}\r\n\r\n.btn {\r\n  border-color: darkgray;\r\n  color: darkgray;\r\n}\r\n\r\n.img {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  padding: 1%;\r\n  margin: 2%;\r\n  width: 100%;\r\n  height: auto;\r\n }\r\n\r\n"

/***/ }),

/***/ "./src/app/Modals/ModalCentralization/modal-centralization.html":
/*!**********************************************************************!*\
  !*** ./src/app/Modals/ModalCentralization/modal-centralization.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Centralization</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form>\r\n      <div class=\"form-group\">\r\n        <img src=\"/assets/images/center.png\" class=\"img\" />\r\n        <!--<table style=\"width:100%\" id=\"hours\">\r\n    <tr>\r\n      <th>Component</th>\r\n      <th>Hour Counter</th>\r\n      <th>Reset</th>\r\n    </tr>\r\n    <tr>\r\n      <td>Electronics Cards</td>\r\n      <td>150:20:30</td>\r\n      <td ><input type=\"button\" value=\"X\"/></td>\r\n    </tr>\r\n    <tr>\r\n      <td>VIS Camera</td>\r\n      <td>270:53:52</td>\r\n      <td><input type=\"button\" value=\"X\" /></td>\r\n    </tr>\r\n    <tr>\r\n      <td>SWIR Camera</td>\r\n      <td>89:10:20</td>\r\n      <td><input type=\"button\" value=\"X\" /></td>\r\n    </tr>\r\n  </table>-->\r\n\r\n\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Close</button>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n\r\n<div>\r\n  \r\n  <input type=\"button\" class=\"btn_main\" (click)=\"open(content)\" value=\"Centralization\" />\r\n</div>\r\n\r\n\r\n<!--<hr>-->\r\n<!--<pre>{{closeResult}}</pre>-->\r\n"

/***/ }),

/***/ "./src/app/Modals/ModalCentralization/modal-centralization.ts":
/*!********************************************************************!*\
  !*** ./src/app/Modals/ModalCentralization/modal-centralization.ts ***!
  \********************************************************************/
/*! exports provided: NgbdModalCentralization */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalCentralization", function() { return NgbdModalCentralization; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdModalCentralization = /** @class */ (function () {
    function NgbdModalCentralization(modalService) {
        this.modalService = modalService;
    }
    NgbdModalCentralization.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    NgbdModalCentralization.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    NgbdModalCentralization = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-modal-centralization',
            template: __webpack_require__(/*! ./modal-centralization.html */ "./src/app/Modals/ModalCentralization/modal-centralization.html"),
            styles: [__webpack_require__(/*! ./modal-centralization.css */ "./src/app/Modals/ModalCentralization/modal-centralization.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], NgbdModalCentralization);
    return NgbdModalCentralization;
}());



/***/ }),

/***/ "./src/app/Modals/ModalFlashSoftware/modal-flash-software.css":
/*!********************************************************************!*\
  !*** ./src/app/Modals/ModalFlashSoftware/modal-flash-software.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  font: normal normal normal 20px/1.4em helveticaneuew01-45ligh,sans-serif;\r\n  color: rgba(32,48,60,1);\r\n  font-family: Calibri;\r\n}\r\n\r\n.btn_main {\r\n  background-color: #0d5da7; /* Green #0d5da7*/\r\n  border: none;\r\n  color: white;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 4px 2px;\r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n  width: 100%;\r\n  border-style: none;\r\n}\r\n\r\n#hours {\r\n  font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\r\n\r\n#hours td, #hours th {\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n  }\r\n\r\n#hours tr:nth-child(even) {\r\n    background-color: #f2f2f2;\r\n  }\r\n\r\n#hours tr:hover {\r\n    background-color: #ddd;\r\n  }\r\n\r\n#hours th {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: left;\r\n    background-color: darkgray;/*#4CAF50*/\r\n    color: white;\r\n  }\r\n\r\n.btn:hover {\r\n  background-color: #ddd;\r\n}\r\n\r\n.btn {\r\n  border-color: darkgray;\r\n  color: darkgray;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/Modals/ModalFlashSoftware/modal-flash-software.html":
/*!*********************************************************************!*\
  !*** ./src/app/Modals/ModalFlashSoftware/modal-flash-software.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Flash\\Update Software</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form>\r\n      <div class=\"form-group\">\r\n     <label>Software updated to version: 100.3 into Vilon system</label>\r\n\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Close</button>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n\r\n<div>\r\n  \r\n  <input type=\"button\" class=\"btn_main\" (click)=\"open(content)\" value=\"Flash\\Update Software\" />\r\n</div>\r\n\r\n\r\n<!--<hr>-->\r\n<!--<pre>{{closeResult}}</pre>-->\r\n"

/***/ }),

/***/ "./src/app/Modals/ModalFlashSoftware/modal-flash-software.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Modals/ModalFlashSoftware/modal-flash-software.ts ***!
  \*******************************************************************/
/*! exports provided: NgbdModalFlashSoftware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalFlashSoftware", function() { return NgbdModalFlashSoftware; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdModalFlashSoftware = /** @class */ (function () {
    function NgbdModalFlashSoftware(modalService) {
        this.modalService = modalService;
    }
    NgbdModalFlashSoftware.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    NgbdModalFlashSoftware.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    NgbdModalFlashSoftware = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-modal-flash-software',
            template: __webpack_require__(/*! ./modal-flash-software.html */ "./src/app/Modals/ModalFlashSoftware/modal-flash-software.html"),
            styles: [__webpack_require__(/*! ./modal-flash-software.css */ "./src/app/Modals/ModalFlashSoftware/modal-flash-software.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], NgbdModalFlashSoftware);
    return NgbdModalFlashSoftware;
}());



/***/ }),

/***/ "./src/app/Modals/ModalFlip/modal-flip.css":
/*!*************************************************!*\
  !*** ./src/app/Modals/ModalFlip/modal-flip.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  font: normal normal normal 20px/1.4em helveticaneuew01-45ligh,sans-serif;\r\n  color: rgba(32,48,60,1);\r\n  font-family: Calibri;\r\n}\r\n\r\n.btn_main {\r\n  background-color: #0d5da7; /* Green #0d5da7*/\r\n  border: none;\r\n  color: white;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 4px 2px;\r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n  width: 100%;\r\n  border-style: none;\r\n}\r\n\r\n#hours {\r\n  font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\r\n\r\n#hours td, #hours th {\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n  }\r\n\r\n#hours tr:nth-child(even) {\r\n    background-color: #f2f2f2;\r\n  }\r\n\r\n#hours tr:hover {\r\n    background-color: #ddd;\r\n  }\r\n\r\n#hours th {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: left;\r\n    background-color: darkgray;/*#4CAF50*/\r\n    color: white;\r\n  }\r\n\r\n.btn:hover {\r\n  background-color: #ddd;\r\n}\r\n\r\n.btn {\r\n  border-color: darkgray;\r\n  color: darkgray;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/Modals/ModalFlip/modal-flip.html":
/*!**************************************************!*\
  !*** ./src/app/Modals/ModalFlip/modal-flip.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Hour Counter</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form>\r\n      <div class=\"form-group\">\r\n\r\n\r\n        <label>{{this.alert}}</label>\r\n        <!--<div class=\"input-group\">\r\n    <input id=\"dateOfBirth\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" ngbDatepicker #dp=\"ngbDatepicker\">\r\n    <div class=\"input-group-append\">\r\n      <button class=\"btn btn-outline-secondary\" (click)=\"dp.toggle()\" type=\"button\">\r\n        <img src=\"img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n      </button>\r\n    </div>\r\n  </div>-->\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Close</button>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n\r\n<div>\r\n\r\n  <!--<input type=\"button\" (click)=\"addRemoveSimbols()\" [(ngModel)]=\"addRemoveSymbol\"  class=\"input1 btn_main\" />-->\r\n  <div>\r\n    <input type=\"button\" (click)=\"openFlip(content)\" [(ngModel)]=\"flipValue\" class=\"input1 btn_main\" />\r\n    <!--<input type=\"button\" class=\"btn_main\" (click)=\"open(content)\" [(ngModel)]=\"addRemoveSymbol\" />-->\r\n  </div>\r\n</div>\r\n\r\n\r\n<!--<hr>-->\r\n<!--<pre>{{closeResult}}</pre>-->\r\n"

/***/ }),

/***/ "./src/app/Modals/ModalFlip/modal-flip.ts":
/*!************************************************!*\
  !*** ./src/app/Modals/ModalFlip/modal-flip.ts ***!
  \************************************************/
/*! exports provided: NgbdModalFlip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalFlip", function() { return NgbdModalFlip; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdModalFlip = /** @class */ (function () {
    function NgbdModalFlip(modalService) {
        this.modalService = modalService;
        this.flipValue = 'Flip Horizontal';
        this.alert = 'Flip Horizontal is ON';
    }
    NgbdModalFlip.prototype.openFlip = function (content) {
        var _this = this;
        this.flip();
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    NgbdModalFlip.prototype.flip = function () {
        if (this.flipValue === 'Flip Horizontal') {
            this.flipValue = 'Flip Vertical';
            this.alert = 'Flip Vertical is ON';
        }
        else if (this.flipValue === 'Flip Vertical') {
            this.flipValue = 'Flip Horizontal';
            this.alert = 'Flip Horizontal is ON';
        }
    };
    NgbdModalFlip.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    NgbdModalFlip = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-modal-flip',
            template: __webpack_require__(/*! ./modal-flip.html */ "./src/app/Modals/ModalFlip/modal-flip.html"),
            styles: [__webpack_require__(/*! ./modal-flip.css */ "./src/app/Modals/ModalFlip/modal-flip.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], NgbdModalFlip);
    return NgbdModalFlip;
}());



/***/ }),

/***/ "./src/app/Modals/ModalRemoveSymbolic/modal-symbolic.css":
/*!***************************************************************!*\
  !*** ./src/app/Modals/ModalRemoveSymbolic/modal-symbolic.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  font: normal normal normal 20px/1.4em helveticaneuew01-45ligh,sans-serif;\r\n  color: rgba(32,48,60,1);\r\n  font-family: Calibri;\r\n}\r\n\r\n.btn_main {\r\n  background-color: #0d5da7; /* Green #0d5da7*/\r\n  border: none;\r\n  color: white;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 4px 2px;\r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n  width: 100%;\r\n  border-style: none;\r\n}\r\n\r\n#hours {\r\n  font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\r\n\r\n#hours td, #hours th {\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n  }\r\n\r\n#hours tr:nth-child(even) {\r\n    background-color: #f2f2f2;\r\n  }\r\n\r\n#hours tr:hover {\r\n    background-color: #ddd;\r\n  }\r\n\r\n#hours th {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: left;\r\n    background-color: darkgray;/*#4CAF50*/\r\n    color: white;\r\n  }\r\n\r\n.btn:hover {\r\n  background-color: #ddd;\r\n}\r\n\r\n.btn {\r\n  border-color: darkgray;\r\n  color: darkgray;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/Modals/ModalRemoveSymbolic/modal-symbolic.html":
/*!****************************************************************!*\
  !*** ./src/app/Modals/ModalRemoveSymbolic/modal-symbolic.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Hour Counter</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form>\r\n      <div class=\"form-group\">\r\n\r\n\r\n        <label>{{this.alert}}</label>\r\n        <!--<div class=\"input-group\">\r\n    <input id=\"dateOfBirth\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" ngbDatepicker #dp=\"ngbDatepicker\">\r\n    <div class=\"input-group-append\">\r\n      <button class=\"btn btn-outline-secondary\" (click)=\"dp.toggle()\" type=\"button\">\r\n        <img src=\"img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n      </button>\r\n    </div>\r\n  </div>-->\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Close</button>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n\r\n<div>\r\n\r\n  <!--<input type=\"button\" (click)=\"addRemoveSimbols()\" [(ngModel)]=\"addRemoveSymbol\"  class=\"input1 btn_main\" />-->\r\n  <div>\r\n\r\n    <input type=\"button\" class=\"btn_main\" (click)=\"open(content)\" [(ngModel)]=\"addRemoveSymbol\" />\r\n  </div>\r\n</div>\r\n\r\n\r\n<!--<hr>-->\r\n<!--<pre>{{closeResult}}</pre>-->\r\n"

/***/ }),

/***/ "./src/app/Modals/ModalRemoveSymbolic/modal-symbolic.ts":
/*!**************************************************************!*\
  !*** ./src/app/Modals/ModalRemoveSymbolic/modal-symbolic.ts ***!
  \**************************************************************/
/*! exports provided: NgbdModalSymbolic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalSymbolic", function() { return NgbdModalSymbolic; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdModalSymbolic = /** @class */ (function () {
    function NgbdModalSymbolic(modalService) {
        this.modalService = modalService;
        this.addRemoveSymbol = 'Remove Symbolic';
        this.alert = 'Symbolic added to PAL Channel';
    }
    NgbdModalSymbolic.prototype.open = function (content) {
        var _this = this;
        this.addRemoveSimbols();
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    NgbdModalSymbolic.prototype.addRemoveSimbols = function () {
        //open(content);
        if (this.addRemoveSymbol === 'Remove Symbolic') {
            this.addRemoveSymbol = 'Add Symbolic';
            this.alert = 'Symbolic Removed from PAL Channel';
        }
        else if (this.addRemoveSymbol === 'Add Symbolic') {
            this.addRemoveSymbol = 'Remove Symbolic';
            this.alert = 'Symbolic added to PAL Channel';
        }
    };
    NgbdModalSymbolic.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    NgbdModalSymbolic = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-modal-Symbolic',
            template: __webpack_require__(/*! ./modal-symbolic.html */ "./src/app/Modals/ModalRemoveSymbolic/modal-symbolic.html"),
            styles: [__webpack_require__(/*! ./modal-symbolic.css */ "./src/app/Modals/ModalRemoveSymbolic/modal-symbolic.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], NgbdModalSymbolic);
    return NgbdModalSymbolic;
}());



/***/ }),

/***/ "./src/app/Modals/ModalResetHourCounter/modal-reset-hc.css":
/*!*****************************************************************!*\
  !*** ./src/app/Modals/ModalResetHourCounter/modal-reset-hc.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  font: normal normal normal 20px/1.4em helveticaneuew01-45ligh,sans-serif;\r\n  color: rgba(32,48,60,1);\r\n  font-family: Calibri;\r\n}\r\n\r\n.btn_main {\r\n  background-color: #0d5da7; /* Green #0d5da7*/\r\n  border: none;\r\n  color: white;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 4px 2px;\r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n  width: 100%;\r\n  border-style: none;\r\n}\r\n\r\n#hours {\r\n  font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\r\n\r\n#hours td, #hours th {\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n  }\r\n\r\n#hours tr:nth-child(even) {\r\n    background-color: #f2f2f2;\r\n  }\r\n\r\n#hours tr:hover {\r\n    background-color: #ddd;\r\n  }\r\n\r\n#hours th {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: left;\r\n    background-color: darkgray;/*#4CAF50*/\r\n    color: white;\r\n  }\r\n\r\n.btn:hover {\r\n  background-color: #ddd;\r\n}\r\n\r\n.btn {\r\n  border-color: darkgray;\r\n  color: darkgray;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/Modals/ModalResetHourCounter/modal-reset-hc.html":
/*!******************************************************************!*\
  !*** ./src/app/Modals/ModalResetHourCounter/modal-reset-hc.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Hour Counter</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form>\r\n      <div class=\"form-group\">\r\n        <table style=\"width:100%\" id=\"hours\">\r\n          <tr>\r\n            <th>Component</th>\r\n            <th>Hour Counter</th>\r\n            <th>Reset</th>\r\n          </tr>\r\n          <tr>\r\n            <td>Electronics Cards</td>\r\n            <td>150:20:30</td>\r\n            <td ><input type=\"button\" value=\"X\"/></td>\r\n          </tr>\r\n          <tr>\r\n            <td>VIS Camera</td>\r\n            <td>270:53:52</td>\r\n            <td><input type=\"button\" value=\"X\" /></td>\r\n          </tr>\r\n          <tr>\r\n            <td>SWIR Camera</td>\r\n            <td>89:10:20</td>\r\n            <td><input type=\"button\" value=\"X\" /></td>\r\n          </tr>\r\n        </table>\r\n\r\n        <!--<label for=\"dateOfBirth\">Hour Counter</label>\r\n  <div class=\"input-group\">\r\n    <input id=\"dateOfBirth\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" ngbDatepicker #dp=\"ngbDatepicker\">\r\n    <div class=\"input-group-append\">\r\n      <button class=\"btn btn-outline-secondary\" (click)=\"dp.toggle()\" type=\"button\">\r\n        <img src=\"img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n      </button>\r\n    </div>\r\n  </div>-->\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Close</button>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n\r\n<div>\r\n  \r\n  <input type=\"button\" class=\"btn_main\" (click)=\"open(content)\" value=\"Hour Counter\" />\r\n</div>\r\n\r\n\r\n<!--<hr>-->\r\n<!--<pre>{{closeResult}}</pre>-->\r\n"

/***/ }),

/***/ "./src/app/Modals/ModalResetHourCounter/modal-reset-hc.ts":
/*!****************************************************************!*\
  !*** ./src/app/Modals/ModalResetHourCounter/modal-reset-hc.ts ***!
  \****************************************************************/
/*! exports provided: NgbdModalResetHC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalResetHC", function() { return NgbdModalResetHC; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdModalResetHC = /** @class */ (function () {
    function NgbdModalResetHC(modalService) {
        this.modalService = modalService;
    }
    NgbdModalResetHC.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    NgbdModalResetHC.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    NgbdModalResetHC = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-modal-reset-hc',
            template: __webpack_require__(/*! ./modal-reset-hc.html */ "./src/app/Modals/ModalResetHourCounter/modal-reset-hc.html"),
            styles: [__webpack_require__(/*! ./modal-reset-hc.css */ "./src/app/Modals/ModalResetHourCounter/modal-reset-hc.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], NgbdModalResetHC);
    return NgbdModalResetHC;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n/* Tooltip container */\r\n.tooltip {\r\n  position: relative;\r\n  display: inline-block;\r\n  border-bottom: 1px dotted black; /* If you want dots under the hoverable text */\r\n}\r\n/* Tooltip text */\r\n.tooltip .tooltiptext {\r\n    visibility: hidden;\r\n    width: 120px;\r\n    background-color: black;\r\n    color: #fff;\r\n    text-align: center;\r\n    padding: 5px 0;\r\n    border-radius: 6px;\r\n    /* Position the tooltip text - see examples below! */\r\n    position: absolute;\r\n    z-index: 1;\r\n  }\r\n/* Show the tooltip text when you mouse over the tooltip container */\r\n.tooltip:hover .tooltiptext {\r\n    visibility: visible;\r\n  }\r\n/*#################################*/\r\n/* You can add global styles to this file, and also import other style files */\r\nbody {\r\n  background-color: #C6D9F1;\r\n}\r\np {\r\n  font-family: Lato;\r\n}\r\nbody {\r\n  margin: 0;\r\n}\r\n/* Style the header */\r\n.header {\r\n  background-color: white;\r\n  padding: 5.5%;\r\n  \r\n  /*border-bottom-style: solid;*/\r\n}\r\n/* Create three unequal columns that floats next to each other */\r\n.column {\r\n  float: left;\r\n  padding: 10px;\r\n}\r\n/* Left and right column */\r\n.column.side {\r\n    width: 25%;\r\n  }\r\n/* Middle column */\r\n.column.middle {\r\n    width: 50%;\r\n  }\r\n/* Clear floats after the columns */\r\n.row:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */\r\n@media screen and (max-width: 600px) {\r\n  .column.side, .column.middle {\r\n    width: 100%;\r\n  }\r\n}\r\n/* Style the footer */\r\n.footer {\r\n  background-color: #f1f1f1;\r\n  padding: 10px;\r\n  text-align: center;\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  padding: 1rem;\r\n}\r\n.img {\r\n  float: right;\r\n  margin: -6%;\r\n  width: 12%;\r\n  padding: 0.5rem;\r\n}\r\n.operator{\r\n  text-align:left;\r\n  margin:2%\r\n}\r\n/* The navbar container */\r\n.topnav {\r\n  height: 56px;\r\n  overflow: hidden;\r\n  background-color: #0d5da7;\r\n}\r\n/* Navbar links */\r\n.topnav a {\r\n    float: left;\r\n    display: block;\r\n    color: #f2f2f2;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n  }\r\n/* Links - change color on hover */\r\n.topnav a:hover {\r\n      background-color: #ddd;\r\n      color: black;\r\n    }\r\n/* Links - change color on active */\r\n.active-link {\r\n  background-color: #ddd;\r\n  color: black !important;\r\n}\r\n/* Create three equal columns that floats next to each other */\r\n.column {\r\n  float: left;\r\n  width: 33.33%;\r\n  padding: 15px;\r\n}\r\n/* Clear floats after the columns */\r\n.row:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */\r\n@media screen and (max-width:600px) {\r\n  .column {\r\n    width: 100%;\r\n  }\r\n}\r\n* {\r\n  font: normal normal normal 20px/1.4em helveticaneuew01-45ligh,sans-serif;\r\n  color: rgba(32,48,60,1);\r\n  font-family: Calibri;\r\n}\r\nlabel {\r\n  font-weight: bold;\r\n  font-family: Calibri;\r\n  color: #0d5da7;\r\n  padding: 8px;\r\n}\r\ninput {\r\n  background-color: #0d5da7; /* Green #0d5da7*/\r\n  border: none;\r\n  color: white;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 4px 2px;\r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n  width: 100%\r\n}\r\n.command {\r\n  background-color: #f2f2f2;\r\n  width: 482px;\r\n  min-height: 70%;\r\n  height: 360px;\r\n  content: \"\";\r\n  background-repeat: repeat-y;\r\n\r\n}\r\n.pp {\r\n  text-align: center;\r\n  /*border: 4px dotted blue;*/\r\n  border-style: solid;\r\n  display: block;\r\n  padding: 1.5%;\r\n  color: #f2f2f2;\r\n\r\n}\r\n.dd {\r\n  text-align: left;\r\n}\r\n.checked {\r\n  color: #f2f2f2 !important;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\r\n\r\n  <img src=\"/assets/images/logo.jpg\" class=\"img\" />\r\n</header>\r\n<!--<app-login></app-login>\r\n<div class=\"topnav\">\r\n  <a *ngIf=\"loginService.showOperator()\" routerLink=\"/operator\" routerLinkActive=\"active-link\">Operator</a>\r\n  <a *ngIf=\"loginService.showMaintenance()\" routerLink=\"/maintenance\" routerLinkActive=\"active-link\">Maintenance</a>\r\n  <a *ngIf=\"loginService.showDevloper()\" routerLink=\"/development\" routerLinkActive=\"active-link\">Development</a>\r\n</div>-->\r\n\r\n<div class=\"topnav\">\r\n  <a  routerLink=\"/operator\" routerLinkActive=\"active-link\">Operator</a>\r\n  <a  routerLink=\"/maintenance\" routerLinkActive=\"active-link\">Maintenance</a>\r\n  <a  routerLink=\"/development\" routerLinkActive=\"active-link\">Development</a>\r\n</div>\r\n<router-outlet class=\"routerlink\"></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.someRange = [10];
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toggle-switch */ "./node_modules/ngx-toggle-switch/ui-switch.es5.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/src/ng2-nouislider.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _Modals_Modal_modal_basic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Modals/Modal/modal-basic */ "./src/app/Modals/Modal/modal-basic.ts");
/* harmony import */ var _Modals_ModalBIT_modal_bit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Modals/ModalBIT/modal-bit */ "./src/app/Modals/ModalBIT/modal-bit.ts");
/* harmony import */ var _Modals_ModalRemoveSymbolic_modal_symbolic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Modals/ModalRemoveSymbolic/modal-symbolic */ "./src/app/Modals/ModalRemoveSymbolic/modal-symbolic.ts");
/* harmony import */ var _Modals_ModalFlip_modal_flip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Modals/ModalFlip/modal-flip */ "./src/app/Modals/ModalFlip/modal-flip.ts");
/* harmony import */ var _Modals_ModalResetHourCounter_modal_reset_hc__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Modals/ModalResetHourCounter/modal-reset-hc */ "./src/app/Modals/ModalResetHourCounter/modal-reset-hc.ts");
/* harmony import */ var _Modals_ModalCentralization_modal_centralization__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Modals/ModalCentralization/modal-centralization */ "./src/app/Modals/ModalCentralization/modal-centralization.ts");
/* harmony import */ var _Modals_ModalFlashSoftware_modal_flash_software__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Modals/ModalFlashSoftware/modal-flash-software */ "./src/app/Modals/ModalFlashSoftware/modal-flash-software.ts");
/* harmony import */ var _operator_operator_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./operator/operator.component */ "./src/app/operator/operator.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _log_log_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./log/log.component */ "./src/app/log/log.component.ts");
/* harmony import */ var _operator_operator_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./operator/operator.service */ "./src/app/operator/operator.service.ts");
/* harmony import */ var _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./maintenance/maintenance.component */ "./src/app/maintenance/maintenance.component.ts");
/* harmony import */ var _development_development_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./development/development.component */ "./src/app/development/development.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"], _operator_operator_component__WEBPACK_IMPORTED_MODULE_15__["OperatorComponent"], _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_19__["MaintenanceComponent"], _development_development_component__WEBPACK_IMPORTED_MODULE_20__["DevelopmentComponent"], _Modals_ModalFlashSoftware_modal_flash_software__WEBPACK_IMPORTED_MODULE_14__["NgbdModalFlashSoftware"], _Modals_ModalCentralization_modal_centralization__WEBPACK_IMPORTED_MODULE_13__["NgbdModalCentralization"], _Modals_ModalResetHourCounter_modal_reset_hc__WEBPACK_IMPORTED_MODULE_12__["NgbdModalResetHC"], _Modals_ModalFlip_modal_flip__WEBPACK_IMPORTED_MODULE_11__["NgbdModalFlip"], _Modals_ModalRemoveSymbolic_modal_symbolic__WEBPACK_IMPORTED_MODULE_10__["NgbdModalSymbolic"], _Modals_Modal_modal_basic__WEBPACK_IMPORTED_MODULE_8__["NgbdModalBasic"], _Modals_ModalBIT_modal_bit__WEBPACK_IMPORTED_MODULE_9__["NgbdModalBit"], _log_log_component__WEBPACK_IMPORTED_MODULE_17__["LogComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"], ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_5__["UiSwitchModule"], ng2_nouislider__WEBPACK_IMPORTED_MODULE_6__["NouisliderModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    {
                        path: 'operator',
                        component: _operator_operator_component__WEBPACK_IMPORTED_MODULE_15__["OperatorComponent"]
                    },
                    {
                        path: 'maintenance',
                        component: _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_19__["MaintenanceComponent"]
                    },
                    {
                        path: 'development',
                        component: _development_development_component__WEBPACK_IMPORTED_MODULE_20__["DevelopmentComponent"]
                    },
                    {
                        path: 'logs',
                        component: _log_log_component__WEBPACK_IMPORTED_MODULE_17__["LogComponent"]
                    },
                ])
            ],
            providers: [_operator_operator_service__WEBPACK_IMPORTED_MODULE_18__["OperatorService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/development/development.component.css":
/*!*******************************************************!*\
  !*** ./src/app/development/development.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n/* Tooltip container */\r\n.tooltip {\r\n  position: relative;\r\n  /*display: inline-block;*/\r\n  display: contents;\r\n  border-bottom: 1px dotted black; /* If you want dots under the hoverable text */\r\n}\r\n/* Tooltip text */\r\n.tooltip .tooltiptext {\r\n    visibility: hidden;\r\n    width: 120px;\r\n    background-color: black;\r\n    color: #fff;\r\n    text-align: center;\r\n    padding: 5px 0;\r\n    border-radius: 6px;\r\n    /* Position the tooltip text - see examples below! */\r\n    position: absolute;\r\n    z-index: 1;\r\n  }\r\n/* Show the tooltip text when you mouse over the tooltip container */\r\n.tooltip:hover .tooltiptext {\r\n    visibility: visible;\r\n  }\r\n/*#################################*/\r\n/* You can add global styles to this file, and also import other style files */\r\nbody {\r\n  background-color: #C6D9F1;\r\n}\r\np {\r\n  font-family: Lato;\r\n}\r\nbody {\r\n  margin: 0;\r\n}\r\n/*Style the header\r\n.header {\r\n  background-color: white;\r\n  padding: 5.5%;\r\n  /*border-bottom-style: solid;\r\n}*/\r\n/* Create three unequal columns that floats next to each other */\r\n.column {\r\n  float: left;\r\n  padding: 10px;\r\n}\r\n/* Clear floats after the columns */\r\n.row:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */\r\n@media screen and (max-width: 600px) {\r\n  .column.side, .column.middle {\r\n    width: 100%;\r\n  }\r\n}\r\n/* Style the footer */\r\n/*.footer {\r\n  background-color: #f1f1f1;\r\n  padding: 10px;\r\n  text-align: center;\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  padding: 1rem;\r\n}*/\r\n.img {\r\n  float: right;\r\n  margin: -6%;\r\n  width: 12%;\r\n  padding: 0.5rem;\r\n}\r\n.operator {\r\n  text-align: left;\r\n  margin: 2%\r\n}\r\n/* The navbar container */\r\n.topnav {\r\n  overflow: hidden;\r\n  background-color: #0d5da7;\r\n}\r\n/* Navbar links */\r\n.topnav a {\r\n    float: left;\r\n    display: block;\r\n    color: #f2f2f2;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n  }\r\n/* Links - change color on hover */\r\n.topnav a:hover {\r\n      background-color: #ddd;\r\n      color: black;\r\n    }\r\n/* Create three equal columns that floats next to each other */\r\n.column {\r\n  float: left;\r\n  width: 33.33%;\r\n  /*padding: 15px;*/\r\n  height: 100%;\r\n}\r\n/* Clear floats after the columns */\r\n.row:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */\r\n@media screen and (max-width:600px) {\r\n  .column {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n}\r\n* {\r\n  font: normal normal normal 20px/1.4em helveticaneuew01-45ligh,sans-serif;\r\n  color: rgba(32,48,60,1);\r\n  font-family: Calibri;\r\n}\r\nlabel {\r\n  font-weight: bold;\r\n  font-family: Calibri;\r\n  color: #0d5da7;\r\n  padding: 8px;\r\n}\r\n.input1 {\r\n  background-color: #0d5da7; /* Green #0d5da7*/\r\n  border: none;\r\n  color: white;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 4px 2px;\r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n  width: 100%\r\n}\r\n.command {\r\n  background-color: #f2f2f2;\r\n  width: 100%;\r\n  min-height: 100%;\r\n  height: 100%;\r\n  content: \"\";\r\n  background-repeat: repeat-y;\r\n}\r\n.pp {\r\n  text-align: center;\r\n  /*border: 4px dotted blue;*/\r\n  border-style: solid;\r\n  display: block;\r\n  padding: 1.5%;\r\n  color: #f2f2f2;\r\n}\r\n.dd {\r\n  text-align: left;\r\n}\r\n.checked {\r\n  color: #f2f2f2 !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/development/development.component.html":
/*!********************************************************!*\
  !*** ./src/app/development/development.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"column\">\r\n  <div class=\"pp\">\r\n    <div>\r\n      <label>LCD Refresh:</label>\r\n    </div>\r\n    <span>\r\n      <label>LCD Refresh frequency</label>\r\n      <input />\r\n      <!--<input type=\"button\" value=\"Save\" />-->\r\n    </span>\r\n    <span>\r\n      <label>LCD Refresh duration</label>\r\n      <input />\r\n      <!--<input type=\"button\" value=\"Save\" />-->\r\n    </span>\r\n  </div>\r\n</div>\r\n<div class=\"column\">\r\n  <div class=\"pp\">\r\n    <div>\r\n      <span>\r\n        <label>Auto record OFF:</label>\r\n        <input type=\"checkbox\" checked=\"checked\">\r\n      </span>\r\n    </div>\r\n    <div>\r\n      <span>\r\n        <label>Start record ON:</label>\r\n        <input type=\"checkbox\" checked=\"checked\">\r\n      </span>\r\n    </div>\r\n  </div>\r\n  </div>\r\n  <div class=\"column\">\r\n    <div>\r\n      <span>\r\n        <label>Free commands:</label>\r\n        <input />\r\n        <input type=\"button\" value=\"SEND\" />\r\n      </span>\r\n      <div>\r\n        <label class=\"tooltip\">\r\n          commands:\r\n          <span class=\"tooltiptext\">commands sent to server</span>\r\n        </label>\r\n        <div class=\"command\">\r\n          # run full bit <br />\r\n\r\n          # set camera swir<br />\r\n          # set brightness 5<br />\r\n          # fetch software version<br />\r\n          # fetch sn<br />\r\n          # save log in path: \"c:\\users\\user_name\\documents\"<br />\r\n          #\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/development/development.component.ts":
/*!******************************************************!*\
  !*** ./src/app/development/development.component.ts ***!
  \******************************************************/
/*! exports provided: DevelopmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevelopmentComponent", function() { return DevelopmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DevelopmentComponent = /** @class */ (function () {
    function DevelopmentComponent() {
    }
    DevelopmentComponent.prototype.ngOnInit = function () {
    };
    DevelopmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-development',
            template: __webpack_require__(/*! ./development.component.html */ "./src/app/development/development.component.html"),
            styles: [__webpack_require__(/*! ./development.component.css */ "./src/app/development/development.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DevelopmentComponent);
    return DevelopmentComponent;
}());



/***/ }),

/***/ "./src/app/log/log.component.css":
/*!***************************************!*\
  !*** ./src/app/log/log.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".topnav {\r\n   display: none !important; \r\n   visibility: hidden;\r\n}\r\n"

/***/ }),

/***/ "./src/app/log/log.component.html":
/*!****************************************!*\
  !*** ./src/app/log/log.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  log works!\n</p>\n"

/***/ }),

/***/ "./src/app/log/log.component.ts":
/*!**************************************!*\
  !*** ./src/app/log/log.component.ts ***!
  \**************************************/
/*! exports provided: LogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogComponent", function() { return LogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogComponent = /** @class */ (function () {
    function LogComponent() {
    }
    LogComponent.prototype.ngOnInit = function () {
    };
    LogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-log',
            template: __webpack_require__(/*! ./log.component.html */ "./src/app/log/log.component.html"),
            styles: [__webpack_require__(/*! ./log.component.css */ "./src/app/log/log.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LogComponent);
    return LogComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div>\r\n    <span>Password:</span>\r\n    <input [(ngModel)]=\"authCode\"/>\r\n  </div>\r\n  <button (click)=\"login()\">login</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.login = function () {
        this.loginService.initialUserCode(this.authCode);
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.loginService.removeUserCode();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/maintenance/maintenance.component.css":
/*!*******************************************************!*\
  !*** ./src/app/maintenance/maintenance.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n/* Tooltip container */\r\n.tooltip {\r\n  position: relative;\r\n  /*display: inline-block;*/\r\n  display: contents;\r\n  border-bottom: 1px dotted black; /* If you want dots under the hoverable text */\r\n}\r\n/* Tooltip text */\r\n.tooltip .tooltiptext {\r\n    visibility: hidden;\r\n    width: 120px;\r\n    background-color: black;\r\n    color: #fff;\r\n    text-align: center;\r\n    padding: 5px 0;\r\n    border-radius: 6px;\r\n    /* Position the tooltip text - see examples below! */\r\n    position: absolute;\r\n    z-index: 1;\r\n  }\r\n/* Show the tooltip text when you mouse over the tooltip container */\r\n.tooltip:hover .tooltiptext {\r\n    visibility: visible;\r\n  }\r\n/*#################################*/\r\n/* You can add global styles to this file, and also import other style files */\r\nbody {\r\n  background-color: #C6D9F1;\r\n}\r\np {\r\n  font-family: Lato;\r\n}\r\nbody {\r\n  margin: 0;\r\n}\r\n/*Style the header\r\n.header {\r\n  background-color: white;\r\n  padding: 5.5%;\r\n  /*border-bottom-style: solid;\r\n}*/\r\n/* Create three unequal columns that floats next to each other */\r\n.column {\r\n  float: left;\r\n  padding: 10px;\r\n\r\n}\r\n/* Clear floats after the columns */\r\n.row:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */\r\n@media screen and (max-width: 600px) {\r\n  .column.side, .column.middle {\r\n    width: 100%;\r\n  }\r\n}\r\n/* Style the footer */\r\n/*.footer {\r\n  background-color: #f1f1f1;\r\n  padding: 10px;\r\n  text-align: center;\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  padding: 1rem;\r\n}*/\r\n.img {\r\n  float: right;\r\n  margin: -6%;\r\n  width: 12%;\r\n  padding: 0.5rem;\r\n}\r\n.operator {\r\n  text-align: left;\r\n  margin: 2%\r\n}\r\n/* The navbar container */\r\n.topnav {\r\n  overflow: hidden;\r\n  background-color: #0d5da7;\r\n}\r\n/* Navbar links */\r\n.topnav a {\r\n    float: left;\r\n    display: block;\r\n    color: #f2f2f2;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n  }\r\n/* Links - change color on hover */\r\n.topnav a:hover {\r\n      background-color: #ddd;\r\n      color: black;\r\n    }\r\n/* Create three equal columns that floats next to each other */\r\n.column {\r\n  float: left;\r\n  width: 33.33%;\r\n  /*padding: 15px;*/\r\n  height:100%;\r\n}\r\n/* Clear floats after the columns */\r\n.row:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */\r\n@media screen and (max-width:600px) {\r\n  .column {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n}\r\n* {\r\n  font: normal normal normal 20px/1.4em helveticaneuew01-45ligh,sans-serif;\r\n  color: rgba(32,48,60,1);\r\n  font-family: Calibri;\r\n}\r\nlabel {\r\n  font-weight: bold;\r\n  font-family: Calibri;\r\n  color: #0d5da7;\r\n  padding: 8px;\r\n}\r\n.input1 {\r\n  background-color: #0d5da7; /* Green #0d5da7*/\r\n  border: none;\r\n  color: white;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 4px 2px;\r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n  width: 100%\r\n}\r\n.command {\r\n  background-color: #f2f2f2;\r\n  width: 100%;\r\n  min-height: 100%;\r\n  height: 100%;\r\n  content: \"\";\r\n  background-repeat: repeat-y;\r\n}\r\n.pp {\r\n  text-align: center;\r\n  /*border: 4px dotted blue;*/\r\n  border-style: solid;\r\n  display: block;\r\n  padding: 1.5%;\r\n  color: #f2f2f2;\r\n}\r\n.dd {\r\n  text-align: left;\r\n}\r\n.checked {\r\n  color: #f2f2f2 !important;\r\n}\r\n.inp {\r\n  float: right;\r\n}\r\n"

/***/ }),

/***/ "./src/app/maintenance/maintenance.component.html":
/*!********************************************************!*\
  !*** ./src/app/maintenance/maintenance.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n  <div class=\"column\">\r\n    <div>\r\n      <!--<input type=\"button\" (click)=\"addRemoveSimbols()\" [(ngModel)]=\"addRemoveSymbol\" class=\"input1\" />-->\r\n\r\n      <ngbd-modal-Symbolic></ngbd-modal-Symbolic>\r\n      <!--<input type=\"button\" value=\"BIT\" />-->\r\n    </div>\r\n\r\n    <div>\r\n      <!--<input type=\"button\" (click)=\"open(content)\" value=\"Centralization\" class=\"input1\" />-->\r\n      <ngbd-modal-centralization></ngbd-modal-centralization>\r\n    </div>\r\n \r\n\r\n    <div>\r\n      <!--<input type=\"button\" (click)=\"open(content)\" value=\"Flip horizontal\" class=\"input1\" />-->\r\n      <ngbd-modal-flip></ngbd-modal-flip>\r\n    </div>\r\n    <div>\r\n      <!--<input type=\"button\" (click)=\"open(content)\" value=\"Reset hours counter\" class=\"input1\" />-->\r\n      <ngbd-modal-reset-hc></ngbd-modal-reset-hc>\r\n    </div>\r\n    <div>\r\n      <!--<input type=\"button\" (click)=\"open(content)\" value=\"Flash\\Update Software\" class=\"input1\" />-->\r\n      <ngbd-modal-flash-software></ngbd-modal-flash-software>\r\n    </div>\r\n    \r\n    <input type=\"button\" (click)=\"open(content)\" value=\"BYPASS to SWIR\" class=\"input1\" />\r\n\r\n  </div>\r\n\r\n  <div class=\"column\">\r\n    <div class=\"pp\">\r\n      <div>\r\n        <span>\r\n          <label>Insert SN:</label>\r\n          <input class=\"inp\" />\r\n          <input type=\"button\" value=\"Save\" />\r\n        </span>\r\n      </div>\r\n      <div>\r\n        <span>\r\n          <label>Insert PN:</label>\r\n          <input class=\"inp\" />\r\n          <input type=\"button\" value=\"save\" />\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <div class=\"pp\">\r\n      <div>\r\n        <span>\r\n          <label>Periodic BIT frequency(sec)</label>\r\n          <input class=\"inp\" />\r\n\r\n        </span>\r\n      </div>\r\n      </div>\r\n      <div class=\"pp\">\r\n        <span>\r\n          <label>Auto shut down after(min) - TANK</label>\r\n          <input class=\"inp\" />\r\n\r\n        </span>\r\n        <div>\r\n          <span>\r\n            <label>Auto shut down after(min) - Battery</label>\r\n            <input class=\"inp\" />\r\n\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"pp\">\r\n        <label>Battery</label>\r\n        <!--<label>Temperature range will disconnect the battery: </label>\r\n      <nouislider [connect]=\"true\" [min]=\"0\" [max]=\"15\"\r\n                  [(ngModel)]=\"someRange\"></nouislider>-->\r\n        <div>\r\n          <span>\r\n            <label>MAX temp for battery charge(C)</label>\r\n            <input class=\"inp\" />\r\n\r\n          </span>\r\n        </div>\r\n        <div>\r\n          <span>\r\n            <label>MIN temp for battery charge(C)</label>\r\n            <input class=\"inp\" />\r\n\r\n          </span>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"column\">\r\n      <label class=\"tooltip\">\r\n        commands:\r\n        <span class=\"tooltiptext\">commands sent to server</span>\r\n      </label>\r\n      <div class=\"command\">\r\n        # run full bit <br />\r\n\r\n        # set camera swir<br />\r\n        # set brightness 5<br />\r\n        # fetch software version<br />\r\n        # fetch sn<br />\r\n        # save log in path: \"c:\\users\\user_name\\documents\"<br />\r\n        #\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/maintenance/maintenance.component.ts":
/*!******************************************************!*\
  !*** ./src/app/maintenance/maintenance.component.ts ***!
  \******************************************************/
/*! exports provided: MaintenanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceComponent", function() { return MaintenanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MaintenanceComponent = /** @class */ (function () {
    function MaintenanceComponent() {
        this.someRange = [5, 10];
    }
    MaintenanceComponent.prototype.ngOnInit = function () {
        this.addRemoveSymbol = 'Remove Symbolic';
        this.alert = 'Symbolic added to PAL Channel';
    };
    MaintenanceComponent.prototype.addRemoveSimbols = function () {
        //open(content);
        if (this.addRemoveSymbol === 'Remove Symbolic') {
            this.addRemoveSymbol = 'Add Symbolic';
            this.alert = 'Symbolic Removed from PAL Channel';
        }
        else if (this.addRemoveSymbol === 'Add Symbolic') {
            this.addRemoveSymbol = 'Remove Symbolic';
            this.alert = 'Symbolic added to PAL Channel';
        }
    };
    MaintenanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-maintenance',
            template: __webpack_require__(/*! ./maintenance.component.html */ "./src/app/maintenance/maintenance.component.html"),
            styles: [__webpack_require__(/*! ./maintenance.component.css */ "./src/app/maintenance/maintenance.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MaintenanceComponent);
    return MaintenanceComponent;
}());



/***/ }),

/***/ "./src/app/operator/operator.component.css":
/*!*************************************************!*\
  !*** ./src/app/operator/operator.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n/* Tooltip container */\r\n.tooltip {\r\n  position: relative;\r\n  /*display: inline-block;*/\r\n  display: contents;\r\n  border-bottom: 1px dotted black; /* If you want dots under the hoverable text */\r\n}\r\n/* Tooltip text */\r\n.tooltip .tooltiptext {\r\n    visibility: hidden;\r\n    width: 120px;\r\n    background-color: black;\r\n    color: #fff;\r\n    text-align: center;\r\n    padding: 5px 0;\r\n    border-radius: 6px;\r\n    /* Position the tooltip text - see examples below! */\r\n    position: absolute;\r\n    z-index: 1;\r\n  }\r\n/* Show the tooltip text when you mouse over the tooltip container */\r\n.tooltip:hover .tooltiptext {\r\n    visibility: visible;\r\n  }\r\n/*#################################*/\r\n/* You can add global styles to this file, and also import other style files */\r\nbody {\r\n  background-color: #C6D9F1;\r\n}\r\np {\r\n  font-family: Lato;\r\n}\r\nbody {\r\n  margin: 0;\r\n}\r\n/*Style the header\r\n.header {\r\n  background-color: white;\r\n  padding: 5.5%;\r\n  /*border-bottom-style: solid;\r\n}*/\r\n/* Create three unequal columns that floats next to each other */\r\n.column {\r\n  float: left;\r\n  padding: 10px;\r\n}\r\n/* Clear floats after the columns */\r\n.row:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */\r\n@media screen and (max-width: 600px) {\r\n  .column.side, .column.middle {\r\n    width: 100%;\r\n  }\r\n}\r\n/* Style the footer */\r\n/*.footer {\r\n  background-color: #f1f1f1;\r\n  padding: 10px;\r\n  text-align: center;\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  padding: 1rem;\r\n}*/\r\n.img {\r\n  float: right;\r\n  margin: -6%;\r\n  width: 12%;\r\n  padding: 0.5rem;\r\n}\r\n.operator {\r\n  text-align: left;\r\n  margin: 2%\r\n}\r\n/* The navbar container */\r\n.topnav {\r\n  overflow: hidden;\r\n  background-color: #0d5da7;\r\n}\r\n/* Navbar links */\r\n.topnav a {\r\n    float: left;\r\n    display: block;\r\n    color: #f2f2f2;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n  }\r\n/* Links - change color on hover */\r\n.topnav a:hover {\r\n      background-color: #ddd;\r\n      color: black;\r\n    }\r\n/* Create three equal columns that floats next to each other */\r\n.column {\r\n  float: left;\r\n  width: 33.33%;\r\n  padding: 15px;\r\n}\r\n/* Clear floats after the columns */\r\n.row:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */\r\n@media screen and (max-width:600px) {\r\n  .column {\r\n    width: 100%;\r\n  }\r\n}\r\n* {\r\n  font: normal normal normal 20px/1.4em helveticaneuew01-45ligh,sans-serif;\r\n  color: rgba(32,48,60,1);\r\n  font-family: Calibri;\r\n}\r\nlabel {\r\n  font-weight: bold;\r\n  font-family: Calibri;\r\n  color: #0d5da7;\r\n  padding: 8px;\r\n}\r\ninput {\r\n  background-color: #0d5da7; /* Green #0d5da7*/\r\n  border: none;\r\n  color: white;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 4px 2px;\r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n  width: 100%\r\n}\r\n.command {\r\n  background-color: #f2f2f2;\r\n  width: 482px;\r\n  min-height: 70%;\r\n  height: 360px;\r\n  content: \"\";\r\n  background-repeat: repeat-y;\r\n}\r\n.pp {\r\n  text-align: center;\r\n  /*border: 4px dotted blue;*/\r\n  border-style: solid;\r\n  display: block;\r\n  padding: 1.5%;\r\n  color: #f2f2f2;\r\n}\r\n.dd {\r\n  text-align: left;\r\n}\r\n.checked {\r\n  color: #f2f2f2 !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/operator/operator.component.html":
/*!**************************************************!*\
  !*** ./src/app/operator/operator.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"column\">\r\n    \r\n\r\n    <div class=\"operator\">\r\n\r\n\r\n      <!--<detailed-item nname=\"bbb\" nvalue=\"333\"></detailed-item>-->\r\n      <div>\r\n        <label>Software version:</label>\r\n        <span>100.22</span>\r\n      </div>\r\n      <div>\r\n        <label>Hardware version:</label>\r\n        <span>100.22</span>\r\n      </div>\r\n      <div>\r\n        <label>SWIR version</label>\r\n        <span>100.22</span>\r\n      </div>\r\n      <div>\r\n        <label>Serial Number</label>\r\n        <span>100.22</span>\r\n      </div>\r\n      <div>\r\n        <label>Product Number</label>\r\n        <span>100.22</span>\r\n      </div>\r\n    </div>\r\n    <span class=\"pp\">\r\n      <label>SWIR </label>\r\n      <ui-switch class=\"toggle\"></ui-switch>\r\n      <label> VIS </label>\r\n    </span>\r\n\r\n\r\n    <div class=\"pp\">\r\n      <label> Brightness: </label>\r\n      <nouislider [connect]=\"true\" [min]=\"0\" [max]=\"15\"\r\n                  [(ngModel)]=\"someRange\"></nouislider>\r\n    </div>\r\n  </div>\r\n  <div class=\"column\">\r\n    <div>\r\n      <ngbd-modal-basic></ngbd-modal-basic>\r\n      \r\n      <!--<input type=\"button\" (click)=\"open(content)\" value=\"Hour Counter\" />-->\r\n    </div>\r\n    <div>\r\n      <ngbd-modal-bit></ngbd-modal-bit>\r\n      <!--<input type=\"button\" value=\"BIT\" />-->\r\n    </div>\r\n    <div>\r\n      <!--<button value=\"LOG\" routerLink=\"/logs\" formtarget=\"_blank\"></button>-->\r\n      \r\n      <a routerLink=\"/logs\" target=\"_blank\"><input type=\"button\" value=\"LOG\"> </a>\r\n\r\n    </div>\r\n    \r\n    <!--<div>\r\n      <a href=\"javascript: w=window.open('http://yoursite.com/LinkToThePDF.pdf');\r\n         w.print(); w.close(); \">​​​​​​​​​​​​​​​​​print pdf</a>\r\n    </div>-->\r\n\r\n  </div>\r\n  <div class=\"column\">\r\n\r\n    <label class=\"tooltip\" >\r\n      commands:\r\n        <span class=\"tooltiptext\">commands sent to server</span>\r\n    </label>\r\n    <div class=\"command\">\r\n      # run full bit <br />\r\n\r\n      # set camera swir<br />\r\n      # set brightness 5<br />\r\n      # fetch software version<br />\r\n      # fetch sn<br />\r\n      # save log in path: \"c:\\users\\user_name\\documents\"<br />\r\n      #\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/operator/operator.component.ts":
/*!************************************************!*\
  !*** ./src/app/operator/operator.component.ts ***!
  \************************************************/
/*! exports provided: OperatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorComponent", function() { return OperatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _operator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./operator.service */ "./src/app/operator/operator.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { NgbdModalBIT } from '../Modals/ModalBIT/modal-bit'

var OperatorComponent = /** @class */ (function () {
    function OperatorComponent(operatorService) {
        this.operatorService = operatorService;
        this.title = 'app';
        this.someRange = [10];
    }
    OperatorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.operatorService.getCommentsObservable().subscribe(function (value) {
            _this.filterList();
        });
    };
    OperatorComponent.prototype.filterList = function () {
        var _this = this;
        if (this.bodyFilter == null || this.bodyFilter == "")
            this.operators = this.operatorService.getComments().slice(0, 10);
        else
            this.operators = this.operatorService.getComments().filter(function (comment) { return comment.body.indexOf(_this.bodyFilter) > -1; });
    };
    OperatorComponent.prototype.openLogs = function () {
        window.open();
    };
    OperatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-operator',
            template: __webpack_require__(/*! ./operator.component.html */ "./src/app/operator/operator.component.html"),
            styles: [__webpack_require__(/*! ./operator.component.css */ "./src/app/operator/operator.component.css")]
        }),
        __metadata("design:paramtypes", [_operator_service__WEBPACK_IMPORTED_MODULE_1__["OperatorService"]])
    ], OperatorComponent);
    return OperatorComponent;
}());



/***/ }),

/***/ "./src/app/operator/operator.service.ts":
/*!**********************************************!*\
  !*** ./src/app/operator/operator.service.ts ***!
  \**********************************************/
/*! exports provided: OperatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorService", function() { return OperatorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OperatorService = /** @class */ (function () {
    function OperatorService(http) {
        this.http = http;
    }
    OperatorService.prototype.getCommentsObservable = function () {
        var _this = this;
        var obs = this.http.get("https://jsonplaceholder.typicode.com/comments");
        obs.subscribe(function (value) { return _this.operators = value.json(); });
        return obs;
    };
    OperatorService.prototype.getComments = function () {
        return this.operators;
    };
    OperatorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], OperatorService);
    return OperatorService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\chayal\Documents\AMMT\cONTROL-PANEL\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map