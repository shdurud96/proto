webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionSheetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActionSheetPage = (function () {
    function ActionSheetPage(actionSheetCtrl) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.name = "";
    }
    ActionSheetPage.prototype.presentActionSheet = function () {
        var actionSheet = this.actionSheetCtrl.create({
            title: 'My first ActionSheet',
            buttons: [
                {
                    text: 'delete',
                    role: 'destructive',
                    handler: function () {
                        console.log('Delete clicked!');
                    },
                },
                {
                    text: 'button',
                    handler: function () {
                        console.log('button clicked!');
                    }
                },
                {
                    text: 'cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked!');
                    }
                }
            ]
        });
        actionSheet.present(); //presentActionSheet함수가 실행될 때마다 ActionSheet이 등장하게 됨.
    };
    ActionSheetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Junyong\Bash\Inflearn_Ionic\src\pages\action-sheet\action-sheet.html"*/'<ion-header>\n\n    <ion-navbar>   <!-- navigation이 가능한 header bar라는 것. -->\n\n      <button ion-button menuToggle>  <!--이 버튼을 눌렀을 때 sidemenu를 띄울 수 있게 됨. 여기서 \'menuToggle\'이 없으면 menu가 한 번만 가능함..sidemenu를 계속 사용하려면 menuToggle 써주어야 한다. -->\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>ActionSheetPage</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n  <ion-content padding>\n\n    <input [(ngModel)]="name" />\n\n    <p>Hello, {{name}}</p>\n\n    <p *ngIf="name != \' \'">Welcome!</p>\n\n      <button ion-button block (click)="presentActionSheet()">  <!-- \'block\'은 좌우로 화면 꽉차게 버튼이 보여지게 하는 걸 의미. 그런데 이렇게만 하면 좌우로 너무 꽉차기 때문에 ion-content에 \'padding\'을 해주면 된다. -->\n\n          Show Action Sheet\n\n      </button>   \n\n  </ion-content>'/*ion-inline-end:"C:\Users\Junyong\Bash\Inflearn_Ionic\src\pages\action-sheet\action-sheet.html"*/ //"action-sheet page가 이 html파일을 쓰겠다"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], ActionSheetPage);
    return ActionSheetPage;
}());

//# sourceMappingURL=action-sheet.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertPage = (function () {
    function AlertPage(alertCtrl) {
        this.alertCtrl = alertCtrl;
    }
    AlertPage.prototype.showBasicAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Basic Alert!',
            subTitle: 'This is an ui component called a basic alert',
            buttons: ['OK'],
        });
        alert.present();
    };
    AlertPage.prototype.showPromptAlert = function () {
        var prompt = this.alertCtrl.create({
            title: 'Login',
            message: 'Enter your password',
            /* inputs: [
                 {
                     name:'title',
                     placeholder: 'Title'
                 },
             ],*/
            buttons: [
                {
                    text: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Next',
                    handler: function (data) {
                        console.log(data['password']); //console에 입력받은 password를 띄워줌.
                    }
                }
            ]
        });
        prompt.present();
    };
    AlertPage.prototype.showConfirmationAlert = function () {
    };
    AlertPage.prototype.showRadioAlert = function () {
        var alert = this.alertCtrl.create();
        alert.setTitle('Choose your location');
        alert.addInput({
            type: 'radio',
            label: 'Seoul',
            value: 'seoul',
            checked: true,
        });
        alert.addInput({
            type: 'radio',
            label: 'Daejeon',
            value: 'daejeon',
        });
        alert.addInput({
            type: 'radio',
            label: 'Busan',
            value: 'busan'
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'OK',
            handler: function (data) {
                console.log(data); //여기서 응용하여 if(data == 'seoul') .... else if(data == 'busan')... 이런식으로 다음 동작을 설정할 수 있다.
            }
        });
        alert.present();
    };
    AlertPage.prototype.showCheckboxAlert = function () {
    };
    AlertPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Junyong\Bash\Inflearn_Ionic\src\pages\alert\alert.html"*/'<ion-header>\n\n        <ion-navbar>\n\n          <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n          <ion-title>Alert Page</ion-title>\n\n        </ion-navbar>\n\n      </ion-header>\n\n\n\n    <ion-content padding>\n\n        <button ion-button block (click)="showBasicAlert()">Show Basic Alert</button>\n\n        <button ion-button block (click)="showPromptAlert()">Show Prompt Alert</button>\n\n        <button ion-button block (click)="showConfirmationAlert()">Show Confirmation Alert</button>\n\n        <button ion-button block (click)="showRadioAlert()">Show Radio Alert</button>\n\n        <button ion-button block (click)="showCheckboxAlert()">Show Checkbox Alert</button>\n\n    </ion-content>'/*ion-inline-end:"C:\Users\Junyong\Bash\Inflearn_Ionic\src\pages\alert\alert.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], AlertPage);
    return AlertPage;
}());

//# sourceMappingURL=alert.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ButtonPage = (function () {
    function ButtonPage() {
    }
    ButtonPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Junyong\Bash\Inflearn_Ionic\src\pages\button\button.html"*/'<ion-header>\n\n    <ion-navbar>   <!-- navigation이 가능한 header bar라는 것. -->\n\n      <button ion-button menuToggle>  <!--이 버튼을 눌렀을 때 sidemenu를 띄울 수 있게 됨. 여기서 \'menuToggle\'이 없으면 menu가 한 번만 가능함..sidemenu를 계속 사용하려면 menuToggle 써주어야 한다. -->\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>Button Page</ion-title>\n\n      <ion-buttons end>    \n\n        <button ion-button icon-only>\n\n          <ion-icon name=\'search\'></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n  <ion-content padding>\n\n    <ion-card>\n\n      <ion-card-content> \n\n        <!--여기에 img를 추가할 수 있다 -->\n\n      </ion-card-content> \n\n      <ion-item>\n\n        <button ion-button clear item-left>Like</button>    <!--글자만 있는 버튼이기에 \'clear\'를 적어준다 alignment도 해줌. -->\n\n      </ion-item>\n\n      <ion-item>\n\n        <button ion-button clear item-right>Comment</button>\n\n      </ion-item>\n\n    </ion-card>\n\n    <ion-list>\n\n      <ion-item>\n\n        Inner Button\n\n        <button ion-button outline item-right>OutLine</button>\n\n      </ion-item>\n\n      <ion-item>\n\n        Left Icon Button\n\n        <button ion-button outline item-right icon-left>\n\n          Left Icon\n\n          <ion-icon name=\'star\'></ion-icon>\n\n        </button>\n\n      </ion-item>\n\n      <ion-item>\n\n        Right Icon Button\n\n        <button ion-button outline item-right icon-right>\n\n          Right Icon\n\n          <ion-icon name=\'star\'></ion-icon>\n\n        </button>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n  </ion-content>'/*ion-inline-end:"C:\Users\Junyong\Bash\Inflearn_Ionic\src\pages\button\button.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ButtonPage);
    return ButtonPage;
}());

//# sourceMappingURL=button.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Junyong\Bash\Inflearn_Ionic\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h3>Welcome! Home Page</h3>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Junyong\Bash\Inflearn_Ionic\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bg_cards_bg_cards__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__social_cards_social_cards__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CardPage = (function () {
    function CardPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CardPage.prototype.openBackgroundImageCardPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__bg_cards_bg_cards__["a" /* BackgroundImageCardsPage */]);
    };
    CardPage.prototype.openSocialCardPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__social_cards_social_cards__["a" /* SocialCardsPage */]);
    };
    CardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Junyong\Bash\Inflearn_Ionic\src\pages\card\card.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>Card</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content padding>\n\n    <button ion-button block (click)="openBackgroundImageCardPage()"> \n\n      Background Image Cards\n\n    </button>\n\n    <button ion-button block (click)="openSocialCardPage()">\n\n      Social Cards \n\n    </button>\n\n  </ion-content>\n\n  '/*ion-inline-end:"C:\Users\Junyong\Bash\Inflearn_Ionic\src\pages\card\card.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], CardPage);
    return CardPage;
}());

//# sourceMappingURL=card.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackgroundImageCardsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BackgroundImageCardsPage = (function () {
    function BackgroundImageCardsPage() {
    }
    BackgroundImageCardsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Junyong\Bash\Inflearn_Ionic\src\pages\card\bg-cards\bg-cards.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>Background Card</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content class="card-background-page">\n\n    <ion-card>\n\n      <img src="assets/imgs/card-saopaolo.png" />\n\n      <div class="card-title">Sao Paulo</div>\n\n      <div class="card-subtitle">41 Listings</div>\n\n\n\n    </ion-card>\n\n  </ion-content>'/*ion-inline-end:"C:\Users\Junyong\Bash\Inflearn_Ionic\src\pages\card\bg-cards\bg-cards.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], BackgroundImageCardsPage);
    return BackgroundImageCardsPage;
}());

//# sourceMappingURL=bg-cards.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialCardsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SocialCardsPage = (function () {
    function SocialCardsPage() {
    }
    SocialCardsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Junyong\Bash\Inflearn_Ionic\src\pages\card\social-cards\social-cards.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>Social Card</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content padding>\n\n    <ion-card>\n\n      <ion-item>\n\n        <ion-avatar>\n\n          <img src="assets/imgs/Junyong.jpg"/>   <!--post한 사람의 이미지 여기에 추가 -->\n\n        </ion-avatar>\n\n        <h2>Junyong</h2>\n\n        <p>January 3,2018</p>\n\n      </ion-item>\n\n\n\n    <img src="assets/imgs/card-amsterdam.png"/>    <!--카드의 메인 이미지 삽입 -->\n\n    <ion-card-content>\n\n      <p>This is my first card practice!</p>\n\n    </ion-card-content>\n\n\n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button icon-left clear small color="primary">\n\n          <ion-icon name="thumbs-up"></ion-icon>\n\n          <div>n Likes</div>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-button icon-left clear small color="primary">\n\n          <ion-icon name="text"></ion-icon>\n\n          <div>4 comments</div>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col center text-center>\n\n        <ion-note>\n\n          11h ago\n\n        </ion-note>\n\n        </ion-col>\n\n    </ion-row>\n\n    </ion-card>\n\n\n\n  </ion-content>'/*ion-inline-end:"C:\Users\Junyong\Bash\Inflearn_Ionic\src\pages\card\social-cards\social-cards.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SocialCardsPage);
    return SocialCardsPage;
}());

//# sourceMappingURL=social-cards.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatetimePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DatetimePage = (function () {
    function DatetimePage() {
        this.startDate = '1994-02-13';
        this.startTime = '07:43';
    }
    DatetimePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Junyong\Bash\Inflearn_Ionic\src\pages\datetime\datetime.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Datetime Page</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="outer-content">  <!--outer-content는 기본적으로 마련되어 있는 css클래스 -->\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-input placeholder="Title"></ion-input>\n\n        </ion-item>        \n\n        <ion-item>\n\n            <ion-input placeholder="Location"></ion-input>\n\n        </ion-item>\n\n    </ion-list>\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-label>Start Date</ion-label>\n\n            <ion-datetime displayFormat="MMM DD YYYY" pickerFormat="MMM DD YYYY" [(ngModel)]="startDate"></ion-datetime>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label>Start Time</ion-label>\n\n            <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="startTime"></ion-datetime>\n\n        </ion-item>\n\n        <button ion-item>\n\n            <ion-label>Repeat</ion-label>\n\n            <ion-note item-right>Never</ion-note>\n\n        </button>\n\n    </ion-list>\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-label>Alert</ion-label>\n\n            <ion-note item-right>None</ion-note>\n\n        </ion-item>\n\n    </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Junyong\Bash\Inflearn_Ionic\src\pages\datetime\datetime.html"*/,
            selector: 'page-datetime'
        }),
        __metadata("design:paramtypes", [])
    ], DatetimePage);
    return DatetimePage;
}());

//# sourceMappingURL=datetime.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FabPage = (function () {
    function FabPage() {
    }
    FabPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Junyong\Bash\Inflearn_Ionic\src\pages\fab\fab.html"*/'<ion-header>\n\n        <ion-navbar>\n\n            <button ion-button menuToggle>\n\n                <ion-icon name="menu"></ion-icon>\n\n            </button>\n\n            <ion-title>Fab Page</ion-title>\n\n        </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-fab center middle>\n\n        <button ion-fab color="danger">\n\n            <ion-icon name="md-share"></ion-icon>\n\n        </button>\n\n        <ion-fab-list side="top">\n\n            <button ion-fab color="primary"><ion-icon name="logo-vimeo"></ion-icon></button>\n\n        </ion-fab-list>\n\n        <ion-fab-list side="bottom">\n\n            <button ion-fab color="secondary"><ion-icon name="logo-google"></ion-icon></button>\n\n        </ion-fab-list>\n\n        <ion-fab-list side="left">\n\n            <button ion-fab color="light"><ion-icon name="logo-twitter"></ion-icon></button>\n\n        </ion-fab-list>\n\n        <ion-fab-list side="right">\n\n            <button ion-fab color="dark"><ion-icon name="logo-facebook"></ion-icon></button>\n\n        </ion-fab-list>\n\n    </ion-fab>\n\n\n\n    <ion-fab top right edge>\n\n            <button ion-fab mini><ion-icon name="add"></ion-icon></button>\n\n            <ion-fab-list>\n\n              <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n\n              <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n\n              <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n\n              <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n\n            </ion-fab-list>\n\n          </ion-fab>\n\n        \n\n          <ion-fab right bottom>\n\n            <button ion-fab color="light"><ion-icon name="arrow-dropleft"></ion-icon></button>\n\n            <ion-fab-list side="left">\n\n              <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n\n              <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n\n              <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n\n              <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n\n            </ion-fab-list>\n\n          </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Junyong\Bash\Inflearn_Ionic\src\pages\fab\fab.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], FabPage);
    return FabPage;
}());

//# sourceMappingURL=fab.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__success_success__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InputPage = (function () {
    function InputPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.username = "";
        this.password = "";
        this.labelColor = "primary";
    }
    InputPage.prototype.signIn = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__success_success__["a" /* SuccessPage */], {
            username: this.username,
            password: this.password
        });
    };
    InputPage.prototype.doBlur = function () {
        this.labelColor = "danger";
    };
    InputPage.prototype.doFocus = function () {
        this.labelColor = "secondary";
    };
    InputPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Junyong\Bash\Inflearn_Ionic\src\pages\input\input.html"*/'<ion-header>\n\n    <ion-navbar>   <!-- navigation이 가능한 header bar라는 것. -->\n\n      <button ion-button menuToggle>  <!--이 버튼을 눌렀을 때 sidemenu를 띄울 수 있게 됨. 여기서 \'menuToggle\'이 없으면 menu가 한 번만 가능함..sidemenu를 계속 사용하려면 menuToggle 써주어야 한다. -->\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>Input Page</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n      <ion-list>\n\n          <ion-item>\n\n              <ion-label color="{{labelColor}}" floating>Username</ion-label>\n\n              <ion-input type="text" [(ngModel)]="username" (blur)="doBlur()" (focus)="doFocus()"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n              <ion-label floating>Password</ion-label>\n\n              <ion-input type="password" [(ngModel)]="password"></ion-input>\n\n          </ion-item>\n\n      </ion-list>\n\n      <button ion-button block (click)="signIn()">Sign In</button>\n\n  </ion-content>'/*ion-inline-end:"C:\Users\Junyong\Bash\Inflearn_Ionic\src\pages\input\input.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], InputPage);
    return InputPage;
}());

//# sourceMappingURL=input.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuccessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SuccessPage = (function () {
    function SuccessPage(navParams) {
        this.navParams = navParams;
        this.username = "";
        this.password = "";
        this.username = this.navParams.get("username");
        this.password = this.navParams.get("password");
        console.log(this.username);
        console.log(this.password);
    }
    SuccessPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Junyong\Bash\Inflearn_Ionic\src\pages\input\success\success.html"*/'<ion-header>\n\n        <ion-navbar>\n\n            <button ion-button menuToggle>\n\n                <ion-icon name="menu"></ion-icon>\n\n            </button>\n\n            <ion-title>Success Page {{username}}</ion-title>\n\n        </ion-navbar>\n\n    </ion-header>\n\n\n\n<ion-content>\n\n    {{username}} logged in!\n\n</ion-content>'/*ion-inline-end:"C:\Users\Junyong\Bash\Inflearn_Ionic\src\pages\input\success\success.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SuccessPage);
    return SuccessPage;
}());

//# sourceMappingURL=success.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_person__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_detail__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListPage = (function () {
    function ListPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.persons = [];
        this.persons.push(new __WEBPACK_IMPORTED_MODULE_1__models_person__["a" /* Person */]("assets/imgs/Junyong.jpg", "Junyong", "잘생긴 준용"));
        this.persons.push(new __WEBPACK_IMPORTED_MODULE_1__models_person__["a" /* Person */]("assets/imgs/Seoyoung.jpg", "Seoyoung", "서영인 바보"));
        this.persons.push(new __WEBPACK_IMPORTED_MODULE_1__models_person__["a" /* Person */]("assets/imgs/Yeokyung.png", "Yeokyung", "귀여운 여경"));
    }
    ListPage.prototype.openDetailPage = function (person) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detail_detail__["a" /* DetailPage */], {
            profileImage: person.avatar,
            name: person.name,
            detail: person.detail
        });
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Junyong\Bash\Inflearn_Ionic\src\pages\lists\lists.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>List Page</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n<ion-content class="outer-content">\n\n    <ion-list>\n\n        <ion-list-header>BUSTERS</ion-list-header>\n\n        <ion-item-sliding *ngFor="let person of persons">\n\n            <ion-item>\n\n                <ion-avatar item-left>\n\n                    <img src="{{person.avatar}}"/>\n\n                </ion-avatar>\n\n                <h2>{{person.name}}</h2>\n\n                <p>{{person.detail}}</p>\n\n            </ion-item>\n\n            <ion-item-options>\n\n                <button ion-button color="light" (click)="openDetailPage(person)">\n\n                    <ion-icon name="ios-more"></ion-icon>\n\n                    More\n\n                </button>\n\n                <button ion-button color="primary">\n\n                    <ion-icon name="text"></ion-icon>\n\n                    Text\n\n                </button>\n\n                <button ion-button color="secondary">\n\n                    <ion-icon name="call"></ion-icon>\n\n                    Call\n\n                </button>\n\n            </ion-item-options>\n\n        </ion-item-sliding>\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Junyong\Bash\Inflearn_Ionic\src\pages\lists\lists.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=lists.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetailPage = (function () {
    function DetailPage(navParams) {
        this.navParams = navParams;
        this.profileImage = this.navParams.get("profileImage");
        this.name = this.navParams.get("name");
        this.detail = this.navParams.get("detail");
    }
    DetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Junyong\Bash\Inflearn_Ionic\src\pages\lists\detail\detail.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>Detail Page</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n<ion-content>\n\n  <ion-item no-lines>\n\n    <ion-avatar item-left>\n\n      <img style="width:70px; height:70px;" src="{{profileImage}}" />\n\n    </ion-avatar>\n\n    <h1>{{name}}</h1>\n\n  </ion-item>\n\n  <ion-item no-lines> \n\n    <p>{{detail}}</p>\n\n  </ion-item>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Junyong\Bash\Inflearn_Ionic\src\pages\lists\detail\detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], DetailPage);
    return DetailPage;
}());

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingPage = (function () {
    function LoadingPage(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
    }
    LoadingPage.prototype.getPromise = function () {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve("Success!");
            }, 1000);
        });
    };
    LoadingPage.prototype.presentLoadingCircles = function () {
        var loader = this.loadingCtrl.create({
            spinner: 'circles',
            content: 'Please wait....',
            duration: 3000
        });
        loader.present();
        /*loader.onDidDismiss(()=>{

        });      로딩이 끝났을 때 수행할 동작을 여기에 넣자.*/
        this.getPromise().then(function (data) {
            console.log(data); //getPromise가 성공했을 때 어떤 data가 넘어오는 지를 확인(여기서는 "Succes"가 넘어옴)
            loader.dismiss(); //getPromise가 성공했을 때 loader가 끝남.
        }, //첫 함수는 getPromise가 정상적으로 작동했을 때 수행되는 함수
        function (error) {
        } //두번 째 함수는  getPromise가 정상적으로 동작하지 않을 때 수행되는 함수.
        );
    };
    LoadingPage.prototype.presentLoadingBubbles = function () {
        var loader = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: 'Please wait....',
            duration: 3000
        });
        loader.present();
        /*loader.onDidDismiss(()=>{
 
         });*/
    };
    LoadingPage.prototype.presentLoadingCrescent = function () {
        var loader = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Please wait....',
            duration: 3000
        });
        loader.present();
        /*loader.onDidDismiss(()=>{

        });*/
    };
    LoadingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Junyong\Bash\Inflearn_Ionic\src\pages\loading\loading.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>Loading Page</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n  <ion-content class="outer-content">\n\n      <ion-list>\n\n          <button ion-item (click)="presentLoadingCircles()">\n\n              <ion-spinner item-left name="circles"></ion-spinner>\n\n              Loading Circles\n\n          </button>\n\n          <button ion-item (click)="presentLoadingBubbles()">\n\n                <ion-spinner item-left name="bubbles"></ion-spinner>\n\n                Loading Bubbles\n\n            </button>\n\n            <button ion-item (click)="presentLoadingCrescent()">\n\n                    <ion-spinner item-left name="crescent"></ion-spinner>\n\n                    Loading Cresent\n\n                </button>\n\n      </ion-list>\n\n      \n\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\Junyong\Bash\Inflearn_Ionic\src\pages\loading\loading.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _a || Object])
    ], LoadingPage);
    return LoadingPage;
    var _a;
}());

//# sourceMappingURL=loading.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(232);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_action_sheet_action_sheet__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_alert_alert__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_button_button__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_card_bg_cards_bg_cards__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_card_social_cards_social_cards__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_card_card__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_datetime_datetime__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_fab_fab__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_input_input__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_input_success_success__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_lists_lists__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_lists_detail_detail__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_loading_loading__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_action_sheet_action_sheet__["a" /* ActionSheetPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_alert_alert__["a" /* AlertPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_button_button__["a" /* ButtonPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_card_card__["a" /* CardPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_card_bg_cards_bg_cards__["a" /* BackgroundImageCardsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_card_social_cards_social_cards__["a" /* SocialCardsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_datetime_datetime__["a" /* DatetimePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_fab_fab__["a" /* FabPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_input_input__["a" /* InputPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_input_success_success__["a" /* SuccessPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_lists_lists__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_lists_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_loading_loading__["a" /* LoadingPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_action_sheet_action_sheet__["a" /* ActionSheetPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_alert_alert__["a" /* AlertPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_button_button__["a" /* ButtonPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_card_card__["a" /* CardPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_card_bg_cards_bg_cards__["a" /* BackgroundImageCardsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_card_social_cards_social_cards__["a" /* SocialCardsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_datetime_datetime__["a" /* DatetimePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_fab_fab__["a" /* FabPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_input_input__["a" /* InputPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_input_success_success__["a" /* SuccessPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_lists_lists__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_lists_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_loading_loading__["a" /* LoadingPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_action_sheet_action_sheet__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_alert_alert__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_button_button__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_card_card__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_datetime_datetime__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_fab_fab__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_input_input__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_lists_lists__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_loading_loading__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Action Sheet', component: __WEBPACK_IMPORTED_MODULE_4__pages_action_sheet_action_sheet__["a" /* ActionSheetPage */] },
            { title: 'Alert Page', component: __WEBPACK_IMPORTED_MODULE_5__pages_alert_alert__["a" /* AlertPage */] },
            { title: 'Button Page', component: __WEBPACK_IMPORTED_MODULE_6__pages_button_button__["a" /* ButtonPage */] },
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */] },
            { title: 'Card Page', component: __WEBPACK_IMPORTED_MODULE_8__pages_card_card__["a" /* CardPage */] },
            { title: 'Datetime Page', component: __WEBPACK_IMPORTED_MODULE_9__pages_datetime_datetime__["a" /* DatetimePage */] },
            { title: 'Fab page', component: __WEBPACK_IMPORTED_MODULE_10__pages_fab_fab__["a" /* FabPage */] },
            { title: 'Input page', component: __WEBPACK_IMPORTED_MODULE_11__pages_input_input__["a" /* InputPage */] },
            { title: 'List page', component: __WEBPACK_IMPORTED_MODULE_12__pages_lists_lists__["a" /* ListPage */] },
            { title: 'Loading page', component: __WEBPACK_IMPORTED_MODULE_13__pages_loading_loading__["a" /* LoadingPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Junyong\Bash\Inflearn_Ionic\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Junyong\Bash\Inflearn_Ionic\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Person; });
var Person = (function () {
    function Person(avatar, name, detail) {
        this.avatar = "";
        this.name = "";
        this.detail = "";
        this.avatar = avatar;
        this.name = name;
        this.detail = detail;
    }
    return Person;
}());

//# sourceMappingURL=person.js.map

/***/ })

},[208]);
//# sourceMappingURL=main.js.map