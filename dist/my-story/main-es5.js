function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/add-story/add-story.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-story/add-story.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddStoryAddStoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class = \"container\">\n<h3>Add Story</h3>\n<form [formGroup] = \"createStoryForm\" (ngSubmit) = \"createStoryForm.valid && createStory()\" class=\"border border-light p-5\">\n   \n    <div class = form-group>\n        <label for = \"title\">Title</label>\n        <input type = \"text\" class = \"form-control\" #title  formControlName = \"title\" placeholder=\"Title\">\n        <div *ngIf=\"createStoryForm.controls['title'].invalid && \n        (createStoryForm.controls['title'].dirty || \n        createStoryForm.controls['title'].touched)\" class=\"alert alert-danger\">\n            <div *ngIf=\"createStoryForm.controls['title'].errors.required\">\n                Title is required!\n            </div>\n        </div>\n</div>\n\n<div class = form-group>\n        <label for = \"body\">Body</label>\n        <h3>Tell Us Your Story</h3>\n        <textarea type = \"textarea\" rows=\"10\" cols=\"50\" class = \"form-control\" id = \"body\" name = \"body\" #body  formControlName = \"body\" placeholder=\"Body\"></textarea>\n        <div *ngIf=\"createStoryForm.controls['body'].invalid && \n        (createStoryForm.controls['body'].dirty || \n        createStoryForm.controls['body'].touched)\" class=\"alert alert-danger\">\n    <div *ngIf=\"createStoryForm.controls['body'].errors.required\">\n        Body is required!\n    </div>\n    </div>\n</div>\n<input type = \"submit\"  class=\"btn btn-cyan\" [disabled]=\"disabledSubmitButton\" mdbBtn color = \"btn btn-primary\" color=\"info\" value = \"Save\">\n<a [routerLink] = \"['/profile']\"><button type=\"button\" class=\"btn btn-amber\">Cancel</button></a>\n\n\n\n</form>\n    \n\n\n\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar></app-navbar>\n\n\n\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>dashboard works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-story/edit-story.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-story/edit-story.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditStoryEditStoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class = \"container\">\n    <h3>Edit Story</h3>\n    <form [formGroup] = \"editStoryForm\" (ngSubmit) = \"editStoryForm.valid && onSubmit()\" class=\"border border-light p-5\">\n       \n        <div class = form-group>\n            <label for = \"title\">Title</label>\n            <input type = \"text\" class = \"form-control\" #title  formControlName = \"title\" placeholder=\"Title\">\n            <div *ngIf=\"editStoryForm.controls['title'].invalid && \n            (editStoryForm.controls['title'].dirty || \n            editStoryForm.controls['title'].touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"editStoryForm.controls['title'].errors.required\">\n                    Title is required!\n                </div>\n            </div>\n    </div>\n    \n    <div class = form-group>\n            <label for = \"body\">Body</label>\n            <h3>Tell Us Your Story</h3>\n            <textarea type = \"textarea\" rows=\"10\" cols=\"50\" class = \"form-control\" id = \"body\" name = \"body\" #body  formControlName = \"body\" placeholder=\"Body\"></textarea>\n            <div *ngIf=\"editStoryForm.controls['body'].invalid && \n            (editStoryForm.controls['body'].dirty || \n            editStoryForm.controls['body'].touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"editStoryForm.controls['body'].errors.required\">\n            Body is required!\n        </div>\n        </div>\n    </div>\n    <input type = \"submit\"  class=\"btn btn-cyan\" mdbBtn color = \"btn btn-primary\" color=\"info\" value = \"Update\">\n    <a [routerLink] = \"['/profile']\"><button type=\"button\" class=\"btn btn-amber\">Cancel</button></a>\n    \n    \n    \n    </form>\n        \n    \n    \n    \n    \n    </div>\n    ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<!-- Default form login -->\n<div class = \"container\">\n        \n\n<form [formGroup] = \"loginForm\" class=\"text-center border border-light p-5\"   (ngSubmit) = \"loginForm.valid && login()\">\n    <div class = \"row justify-content-center align-items-center\">\n    <div class = \"col-md-6\">\n        <h5 class=\"card-header info-color white-text text-center py-4\">\n            <strong>Sign in</strong>\n          </h5>\n  \n\n    <!-- Email -->\n    <div class = \"form-group\">\n        <label>Email</label>    \n    <input type = \"text\" class = \"form-control\" #email formControlName = \"email\" placeholder=\"Enter your email...\"\n    required [pattern] = \"emailRegex\">\n            <div *ngIf=\"loginForm.controls['email'].invalid && \n    (loginForm.controls['email'].dirty || \n    loginForm.controls['email'].touched)\" class=\"alert alert-danger\">\n<div *ngIf=\"loginForm.controls['email'].errors.required\">\n    Email is required!\n</div>\n<div *ngIf=\"loginForm.controls['email'].errors.pattern\">\n    Invalid email!\n</div>\n</div>\n    </div>\n\n\n    <!-- Password -->\n   \n    <div class = \"form-group\">\n        <label>Password</label>\n        <input type = \"password\" class = \"form-control\" #password  formControlName = \"password\"  minlength=\"4\" placeholder=\"Enter your password...\"\n       required>\n        <div *ngIf=\"loginForm.controls['password'].invalid && \n        (loginForm.controls['password'].dirty || \n        loginForm.controls['password'].touched)\" class=\"alert alert-danger\">\n    <div *ngIf=\"loginForm.controls['password'].errors.required\">\n        Password is required!\n    </div>\n    <div *ngIf = \"loginForm.controls['password'].errors.minlength\" class = \"alert alert-danger\">\n        Enter atleast 4 characters.</div>\n      </div>\n        \n    </div>\n\n    <div class=\"d-flex justify-content-around\">\n        <div>\n            <!-- Remember me -->\n            <div class=\"custom-control custom-checkbox\">\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"defaultLoginFormRemember\">\n                <label class=\"custom-control-label\" for=\"defaultLoginFormRemember\">Remember me</label>\n            </div>\n        </div>\n        <div>\n            <!-- Forgot password -->\n            <a href=\"\">Forgot password?</a>\n        </div>\n    </div>\n\n    <!-- Sign in button -->\n    <input type = \"submit\"  class=\"btn btn-info btn-block btn-rounded my-4\" [disabled]=\"disabledSubmitButton\" mdbBtn color = \"btn btn-primary\" color=\"info\" value = \"Login\">\n    <div class = \"validation-message\" *ngIf = \"loginFailed\">Login failed!</div>\n    <!-- <button class=\"btn btn-info btn-block btn-rounded my-4\" type=\"submit\">Sign in</button> -->\n\n    <!-- Register -->\n    <p>Not a member?\n        <a routerLink =\"/register\" >Register</a>\n    </p>\n\n    <!-- Social login -->\n    <p>or sign in with:</p>\n\n    <a href=\"#\" class=\"mx-2\" role=\"button\"><i class=\"fab fa-facebook-f light-blue-text\"></i></a>\n    <a href=\"#\" class=\"mx-2\" role=\"button\"><i class=\"fab fa-twitter light-blue-text\"></i></a>\n    <a href=\"#\" class=\"mx-2\" role=\"button\"><i class=\"fab fa-linkedin-in light-blue-text\"></i></a>\n    <a href=\"#\" class=\"mx-2\" role=\"button\"><i class=\"fab fa-github light-blue-text\"></i></a>\n</div>\n</div>\n</form>\n<!-- Default form login -->\n</div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <nav class=\"grey darken-3\">\n    <div class=\"nav-wrapper container\">\n\n        <a href=\"#!\" class=\"brand-logo center\">StoryBooks</a>\n        <a href=\"#\" data-target=\"mobile-demo\" class=\"sidenav-trigger show-on-large\"><i class=\"fas fa-bars\"></i></a>\n        <ul class=\"sidenav\" id=\"mobile-demo\">\n            <li><a routerLink=\"/stories\">Public Stories</a></li>\n            <li><a routerLink=\"profile\">Profile</a></li>\n            <li><a href=\"/auth/logout\">Logout</a></li>\n        </ul>\n    </div>\n</nav> -->\n\n\n<nav class=\"grey darken-3\">\n    <div class=\"nav-wrapper container\">\n\n        <a routerLink=\"stories\" class=\"brand-logo center\">StoryBooks</a>\n        <div *ngIf = \"loggedIn()\">\n        <a data-target=\"mobile-demo\" class=\"sidenav-trigger show-on-large\"><i class=\"fas fa-bars\"></i></a>\n       \n        <ul class=\"sidenav\" id=\"mobile-demo\">\n            \n            <li class = \"nav-item\"><a class = \"nav-link\" routerLink=\"profile\"> <span class=\"fas fa-user\"></span> Hi {{this.firstName}}</a></li>\n            <li class=\"nav-item\"><a class = \"nav-link\" routerLink=\"stories\">Public Stories</a></li>\n            <li class=\"nav-item\"><a class = \"nav-link\" routerLink=\"profile\">Profile</a></li>\n            <li class=\"nav-item\"><a class = \"nav-link\" (click) = \"onLogoutClick()\">Logout</a></li>\n            \n        </ul>\n    </div>\n    </div>\n</nav>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile-stories/profile-stories.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile-stories/profile-stories.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileProfileStoriesProfileStoriesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " \n <div class = \"container\">\n\n <!-- User Stories -->\n        <h5>Here are your stories:</h5>\n        <div *ngIf = \"myStories && myStories.length > 0\">\n            \n                <div class = \"col-md-7\">\n            <div class=\"table-responsive\">\n                <table class=\"table table-striped\">\n                  <thead class=\"table-success\">\n                      <tr>\n                          <th scope=\"col\">Title</th>\n                          <th scope=\"col\">Date</th>\n                          <th scope=\"col\">Update</th>\n                      </tr>\n                  </thead>\n                  \n                  <tbody>\n                    \n                    <tr *ngFor = \"let myStory of myStories; let i = index\" >\n                    <td><a [routerLink] = \"['/stories/story', myStory._id]\">{{myStory.title}}</a></td> \n                    <td>{{myStory.createdAt}}</td>   \n\n                    \n                    <td>\n                      \n                      <span class = \"btn blue\" [routerLink] = \"['/stories/edit', myStory._id]\" style = 'color: white'><i class = \"fas fa-edit\"></i></span>\n                      <span class = \"btn red\" (click) = \"deleteStory(myStory, i)\" > <i class=\"fas fa-trash\" style = \"color: white \"></i></span>\n                    </td>\n                \n                    </tr>\n                    \n                  </tbody>\n                 \n                </table>\n              </div>\n            </div>\n    </div>\n</div>\n\n\n        <div class = \"container\"  *ngIf=\"!myStories || myStories.length === 0\">\n            <h2>You have no stories!</h2>\n        </div>    ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"user\">\n    <div class = \"container\">\n        <h3 class = \"page-header\">Welcome {{user.firstName}} {{user.lastName}}</h3>\n       \n        <ul class = \"list-group\">\n            <li class = \"list-group-item\">Name: {{user.firstName}} {{user.lastName}}</li>\n            <li class = \"list-group-item\">Email: {{user.email}}</li>\n            <li class = \"list-group-item nav nav-pills nav-justified\">\n                <a routerLink=\"/profile/mystories\"><span class=\"fas fa-book-open\"></span>  My Stories</a>\n            </li>\n            <li class = \"list-group-item nav nav-pills nav-justified\">\n                <a routerLink = \"/stories/add\"><span class=\"btn-floating btn-small waves-effect waves-light red\"><i class=\"material-icons\">+</i></span></a>\n            </li>\n           \n\n\n        </ul>\n\n       \n    </div>\n</div>\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<!-- Default form login -->\n<div class = \"container\">\n    <form [formGroup] = \"signUpForm\" (ngSubmit) = \"signUpForm.valid && signUp()\" class=\"text-center border border-light p-5\">\n            <div class = \"row justify-content-center align-items-center\">\n                <div class = \"col-md-6\">\n                    <h5 class=\"card-header info-color white-text text-center py-4\">\n                        <strong>Sign up</strong>\n                    </h5>\n                    \n                    <div class = form-group>\n                        <label for = \"firstName\">First Name</label>\n                        <input type = \"text\" class = \"form-control\" #firstName  formControlName = \"firstName\" placeholder=\"First name\"\n                          [pattern] = \"nameRegex\">\n                        <div *ngIf=\"signUpForm.controls['firstName'].invalid && \n                        (signUpForm.controls['firstName'].dirty || \n                        signUpForm.controls['firstName'].touched)\" class=\"alert alert-danger\">\n                    <div *ngIf=\"signUpForm.controls['firstName'].errors.required\">\n                        First name is required!\n                    </div>\n                    <div *ngIf=\"signUpForm.controls['firstName'].errors.pattern\">\n                        Alphabetic characters only!\n                    </div>\n                    </div>\n                </div>\n\n                <div class = form-group>\n                    <label for = \"lastName\">Last Name</label>\n                    <input type = \"text\" class = \"form-control\" #lastName  formControlName = \"lastName\" placeholder=\"Last name\"\n                      [pattern] = \"nameRegex\">\n                    <div *ngIf=\"signUpForm.controls['lastName'].invalid && \n                    (signUpForm.controls['lastName'].dirty || \n                    signUpForm.controls['lastName'].touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"signUpForm.controls['lastName'].errors.required\">\n                    Last name is required!\n                </div>\n                <div *ngIf=\"signUpForm.controls['lastName'].errors.pattern\">\n                    Alphabetic characters only!\n                </div>\n                </div>\n            </div>\n\n                <!-- Email -->\n                <div class = \"form-group\">\n                    <label>Email</label>    \n                <input type = \"text\" class = \"form-control\" #email formControlName = \"email\" placeholder=\"Email\"\n                required [pattern] = \"emailRegex\">\n                        <div *ngIf=\"signUpForm.controls['email'].invalid && \n                (signUpForm.controls['email'].dirty || \n                signUpForm.controls['email'].touched)\" class=\"alert alert-danger\">\n            <div *ngIf=\"signUpForm.controls['email'].errors.required\">\n                Email is required!\n            </div>\n            <div *ngIf=\"signUpForm.controls['email'].errors.pattern\">\n                Invalid email!\n            </div>\n            </div>\n                </div>\n            \n                <!-- Password -->\n                <div class = \"form-group\">\n                    <label>Password</label>\n                    <input type = \"password\" class = \"form-control\" #password  formControlName = \"password\"  minlength=\"4\" placeholder=\"Password\"\n                   required>\n                    <div *ngIf=\"signUpForm.controls['password'].invalid && \n                    (signUpForm.controls['password'].dirty || \n                    signUpForm.controls['password'].touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"signUpForm.controls['password'].errors.required\">\n                    Password is required!\n                </div>\n                  <div *ngIf = \"signUpForm.controls['password'].errors.minlength\" class = \"alert alert-danger\">\n                      Enter atleast 4 characters.</div>\n                    </div>\n                </div>\n            \n\n                <!-- Sign in button -->\n                <div class = \"text-center\">\n                <input type = \"submit\"  class=\"btn btn-info btn-block btn-rounded my-4 \" [disabled]=\"disabledSubmitButton\" mdbBtn color = \"btn btn-primary\" color=\"info\" value = \"Sign Up\">\n            </div>\n                <div class = \"success\" *ngIf = \"showSuccessMessage\">\n                    Saved successfully\n                </div>\n                \n                <div  class=\"alert alert-danger\" *ngIf = \"serverErrorMessages\">\n                    Email already Exists!\n                </div>\n                <p>Already a member?\n                    <a routerLink =\"/\">Login</a>\n                </p>\n\n                <!-- Social login -->\n                <p>or sign up with:</p>\n            \n                <a href=\"#\" class=\"mx-2\" role=\"button\"><i class=\"fab fa-facebook-f light-blue-text\"></i></a>\n                <a href=\"#\" class=\"mx-2\" role=\"button\"><i class=\"fab fa-twitter light-blue-text\"></i></a>\n                <a href=\"#\" class=\"mx-2\" role=\"button\"><i class=\"fab fa-linkedin-in light-blue-text\"></i></a>\n                <a href=\"#\" class=\"mx-2\" role=\"button\"><i class=\"fab fa-github light-blue-text\"></i></a>\n            </div>\n        </div>\n    </form>\n<!-- Default form login -->\n\n</div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/stories/stories.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stories/stories.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStoriesStoriesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class = \"container\">\n    <h1>Stories</h1>\n<!-- <div class=\"row row-cols-md-3\"> -->\n\n            \n    <!-- Grid column -->\n    <!-- <div class=\"col-lg-4 col-md-12 col-mb-4\"> -->\n        <div class=\"row row-cols-1 row-cols-md-3\">\n        <!--Card-->\n        <div *ngFor = \"let story of stories\">\n          \n            <div class=\"text-center\">\n        <mdb-card class = \"h-100\">\n\n    \n            <!--Card content-->\n            <mdb-card-body>\n                <!--Title-->\n                <mdb-card-title><h2>{{story.title}}</h2></mdb-card-title>\n                <mdb-card-text><strong><p class=\"text-dark\">{{story.createdAt}}</p></strong></mdb-card-text>\n                <!-- <mdb-card-text><p class=\"text-dark\">{{story.createdAt}}</p></mdb-card-text> -->\n                <hr>\n                <!--Text-->\n                <mdb-card-text><p class=\"text-dark\">{{story.body | words: 30}}</p></mdb-card-text>\n                \n                <br>\n                <mdb-card-text><a [routerLink] =\"['/stories/user', story.UserId]\" class = \"mybutton\"> <strong>{{story.userName}}</strong></a></mdb-card-text>\n                <br>\n\n                <a [routerLink] = \"['/stories/story', story._id]\" class=\"btn grey\">Read More</a>\n                \n        </mdb-card-body>\n        </mdb-card>\n    </div>\n        </div>\n    </div>\n<!-- </div> -->\n    \n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/story-page/story-page.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/story-page/story-page.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStoryPageStoryPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class = \"container\">\n\n    <div class = \"row\">\n        <div class=\"col-md-8\">\n            <h3>{{storyData?.title}}</h3>\n            <br>\n                <div class=\"card story\">\n                    <div class=\"card-content\">\n                        <span class=\"card-title\">{{storyData?.createdAt}}</span>\n                        {{storyData?.body}}\n                    </div>\n                </div>\n    </div>  \n    <div class=\"col-md-4\">\n        <div class=\"card center-align\">\n            <div class=\"card-content\">\n                <span class=\"card-title\">{{storyData?.userName}}</span>\n            \n            </div>\n            <div class=\"card-action\">\n                <a [routerLink]=\"['/stories/user/',storyData?.UserId]\">More From {{storyData?.userName}}</a>\n            </div>\n        </div>\n    </div>\n</div>\n</div>\n\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user-stories/user-stories.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-stories/user-stories.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserStoriesUserStoriesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class = \"container\">\n    <h1>More stories by {{this.userName}}</h1>\n        <div class=\"row row-cols-1 row-cols-md-3\">\n        <!--Card-->\n        <div *ngFor = \"let story of storiesByUserId\">\n            \n            <br>\n          \n            <div class=\"text-center\">\n        <mdb-card class = \"h-100\">\n\n    \n            <!--Card content-->\n            <mdb-card-body>\n                <!--Title-->\n                <mdb-card-title><h2>{{story.title}}</h2></mdb-card-title>\n                <hr>\n                <!--Text-->\n                <mdb-card-text><p class=\"text-dark\">{{story.body | words: 30}}</p></mdb-card-text>\n                <br>\n                <!-- <mdb-card-text><a [routerLink] =\"['/stories/user', story.UserId]\" class = \"mybutton\"> <strong>{{story.userName}}</strong></a></mdb-card-text> -->\n                <br>\n\n                <a [routerLink] = \"['/stories/story', story._id]\" class=\"btn grey\">Read More</a>\n                \n        </mdb-card-body>\n        </mdb-card>\n    </div>\n        </div>\n    </div>\n<!-- </div> -->\n    \n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/add-story/add-story.component.css":
  /*!***************************************************!*\
    !*** ./src/app/add-story/add-story.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddStoryAddStoryComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container{\r\n    padding-top:50px\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXN0b3J5L2FkZC1zdG9yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2FkZC1zdG9yeS9hZGQtc3RvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nLXRvcDo1MHB4XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/add-story/add-story.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/add-story/add-story.component.ts ***!
    \**************************************************/

  /*! exports provided: AddStoryComponent */

  /***/
  function srcAppAddStoryAddStoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddStoryComponent", function () {
      return AddStoryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_story_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/story.service */
    "./src/app/services/story.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AddStoryComponent = /*#__PURE__*/function () {
      function AddStoryComponent(storyService, fb, router) {
        _classCallCheck(this, AddStoryComponent);

        this.storyService = storyService;
        this.fb = fb;
        this.router = router;
        this.disabledSubmitButton = true;
      }

      _createClass(AddStoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createStoryForm = this.fb.group({
            title: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            body: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "oninput",
        value: function oninput() {
          if (this.createStoryForm.valid) {
            this.disabledSubmitButton = false;
          }
        }
      }, {
        key: "createStory",
        value: function createStory() {
          var _this = this;

          this.storyService.createStory(this.createStoryForm.value).subscribe(function (res) {
            // this.showSuccessMessage = true;
            // setTimeout(()=> this.showSuccessMessage = false,4000);
            console.log("Story was saved!", _this.createStoryForm.value);

            _this.createStoryForm.reset();

            _this.createStoryForm.setValue({
              title: '',
              body: ''
            });

            _this.router.navigate(["/profile"]);
          } // err =>{
          //     this.serverErrorMessages = true;
          //     setTimeout(()=> this.serverErrorMessages = false,4000);
          // });
          );
        }
      }]);

      return AddStoryComponent;
    }();

    AddStoryComponent.ctorParameters = function () {
      return [{
        type: _services_story_service__WEBPACK_IMPORTED_MODULE_3__["StoryService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input')], AddStoryComponent.prototype, "oninput", null);
    AddStoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-story',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-story.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/add-story/add-story.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-story.component.css */
      "./src/app/add-story/add-story.component.css"))["default"]]
    })], AddStoryComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _services_loginauth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/loginauth.service */
    "./src/app/services/loginauth.service.ts");
    /* harmony import */


    var _stories_stories_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./stories/stories.component */
    "./src/app/stories/stories.component.ts");
    /* harmony import */


    var _story_page_story_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./story-page/story-page.component */
    "./src/app/story-page/story-page.component.ts");
    /* harmony import */


    var _user_stories_user_stories_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./user-stories/user-stories.component */
    "./src/app/user-stories/user-stories.component.ts");
    /* harmony import */


    var _profile_profile_stories_profile_stories_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./profile/profile-stories/profile-stories.component */
    "./src/app/profile/profile-stories/profile-stories.component.ts");
    /* harmony import */


    var _add_story_add_story_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./add-story/add-story.component */
    "./src/app/add-story/add-story.component.ts");
    /* harmony import */


    var _edit_story_edit_story_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./edit-story/edit-story.component */
    "./src/app/edit-story/edit-story.component.ts");

    var routes = [{
      path: '',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'stories',
      component: _stories_stories_component__WEBPACK_IMPORTED_MODULE_8__["StoriesComponent"],
      canActivate: [_services_loginauth_service__WEBPACK_IMPORTED_MODULE_7__["LoginauthService"]]
    }, {
      path: 'stories/story/:id',
      component: _story_page_story_page_component__WEBPACK_IMPORTED_MODULE_9__["StoryPageComponent"]
    }, {
      path: 'stories/user/:id',
      component: _user_stories_user_stories_component__WEBPACK_IMPORTED_MODULE_10__["UserStoriesComponent"]
    }, {
      path: 'register',
      component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]
    }, {
      path: 'profile',
      component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
      canActivate: [_services_loginauth_service__WEBPACK_IMPORTED_MODULE_7__["LoginauthService"]]
    }, {
      path: 'profile/mystories',
      component: _profile_profile_stories_profile_stories_component__WEBPACK_IMPORTED_MODULE_11__["ProfileStoriesComponent"],
      canActivate: [_services_loginauth_service__WEBPACK_IMPORTED_MODULE_7__["LoginauthService"]]
    }, {
      path: 'stories/add',
      component: _add_story_add_story_component__WEBPACK_IMPORTED_MODULE_12__["AddStoryComponent"],
      canActivate: [_services_loginauth_service__WEBPACK_IMPORTED_MODULE_7__["LoginauthService"]]
    }, {
      path: 'stories/edit/:id',
      component: _edit_story_edit_story_component__WEBPACK_IMPORTED_MODULE_13__["EditStoryComponent"],
      canActivate: [_services_loginauth_service__WEBPACK_IMPORTED_MODULE_7__["LoginauthService"]]
    }, {
      path: 'dashboard',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'my-story';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _services_loginauth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./services/loginauth.service */
    "./src/app/services/loginauth.service.ts");
    /* harmony import */


    var _services_homepageauth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./services/homepageauth.service */
    "./src/app/services/homepageauth.service.ts");
    /* harmony import */


    var _stories_stories_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./stories/stories.component */
    "./src/app/stories/stories.component.ts");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _story_page_story_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./story-page/story-page.component */
    "./src/app/story-page/story-page.component.ts");
    /* harmony import */


    var _user_stories_user_stories_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./user-stories/user-stories.component */
    "./src/app/user-stories/user-stories.component.ts");
    /* harmony import */


    var _profile_profile_stories_profile_stories_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./profile/profile-stories/profile-stories.component */
    "./src/app/profile/profile-stories/profile-stories.component.ts");
    /* harmony import */


    var _add_story_add_story_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./add-story/add-story.component */
    "./src/app/add-story/add-story.component.ts");
    /* harmony import */


    var _edit_story_edit_story_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./edit-story/edit-story.component */
    "./src/app/edit-story/edit-story.component.ts");
    /* harmony import */


    var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ng2-ckeditor */
    "./node_modules/ng2-ckeditor/fesm2015/ng2-ckeditor.js");
    /* harmony import */


    var ng2_truncate__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ng2-truncate */
    "./node_modules/ng2-truncate/dist/index.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"], _stories_stories_component__WEBPACK_IMPORTED_MODULE_15__["StoriesComponent"], _story_page_story_page_component__WEBPACK_IMPORTED_MODULE_17__["StoryPageComponent"], _user_stories_user_stories_component__WEBPACK_IMPORTED_MODULE_18__["UserStoriesComponent"], _profile_profile_stories_profile_stories_component__WEBPACK_IMPORTED_MODULE_19__["ProfileStoriesComponent"], _add_story_add_story_component__WEBPACK_IMPORTED_MODULE_20__["AddStoryComponent"], _edit_story_edit_story_component__WEBPACK_IMPORTED_MODULE_21__["EditStoryComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_16__["MDBBootstrapModule"].forRoot(), angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_16__["CarouselModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_16__["WavesModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_16__["InputsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_16__["IconsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_16__["ButtonsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_16__["CardsModule"], ng2_ckeditor__WEBPACK_IMPORTED_MODULE_22__["CKEditorModule"], ng2_truncate__WEBPACK_IMPORTED_MODULE_23__["TruncateModule"]],
      providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"], _services_loginauth_service__WEBPACK_IMPORTED_MODULE_13__["LoginauthService"], _services_homepageauth_service__WEBPACK_IMPORTED_MODULE_14__["HomepageauthService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.css":
  /*!***************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent() {
        _classCallCheck(this, DashboardComponent);
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardComponent;
    }();

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.css */
      "./src/app/dashboard/dashboard.component.css"))["default"]]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/edit-story/edit-story.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/edit-story/edit-story.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEditStoryEditStoryComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container{\r\n    padding-top:50px\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1zdG9yeS9lZGl0LXN0b3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvZWRpdC1zdG9yeS9lZGl0LXN0b3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgcGFkZGluZy10b3A6NTBweFxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/edit-story/edit-story.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/edit-story/edit-story.component.ts ***!
    \****************************************************/

  /*! exports provided: EditStoryComponent */

  /***/
  function srcAppEditStoryEditStoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditStoryComponent", function () {
      return EditStoryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_story_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/story.service */
    "./src/app/services/story.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var EditStoryComponent = /*#__PURE__*/function () {
      function EditStoryComponent(storyService, fb, router, actRoute) {
        _classCallCheck(this, EditStoryComponent);

        this.storyService = storyService;
        this.fb = fb;
        this.router = router;
        this.actRoute = actRoute;
        this.disabledSubmitButton = true;
      }

      _createClass(EditStoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.updateStory();
          var id = this.actRoute.snapshot.paramMap.get('id');
          this.getStory(id);
          this.editStoryForm = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            body: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "getStory",
        value: function getStory(id) {
          var _this2 = this;

          this.storyService.getStoryById(id).subscribe(function (data) {
            _this2.editStoryForm.setValue({
              title: data['title'],
              body: data['body']
            });
          });
        }
      }, {
        key: "updateStory",
        value: function updateStory() {
          this.editStoryForm = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            body: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this3 = this;

          var id = this.actRoute.snapshot.paramMap.get('id');
          this.storyService.updateStory(id, this.editStoryForm.value).subscribe(function (res) {
            _this3.router.navigate(['/profile/mystories']);

            console.log('Content updated successfully!');
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return EditStoryComponent;
    }();

    EditStoryComponent.ctorParameters = function () {
      return [{
        type: _services_story_service__WEBPACK_IMPORTED_MODULE_3__["StoryService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    EditStoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-story',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-story.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-story/edit-story.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-story.component.css */
      "./src/app/edit-story/edit-story.component.css"))["default"]]
    })], EditStoryComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-header {\r\n    background-color: #33b5e5 !important;\r\n}\r\n\r\n.btn-rounded {\r\n    border-radius: 10em;\r\n}\r\n\r\n.btn-info {\r\n    color: #33b5e5 !important;\r\n    background-color: transparent !important;\r\n    border: 2px solid #33b5e5 !important;\r\n}\r\n\r\n.validation-message{\r\n    color: red;\r\n}\r\n\r\n.alert {\r\n    background-color: transparent;\r\n    border: 0;\r\n    color: red;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix3Q0FBd0M7SUFDeEMsb0NBQW9DO0FBQ3hDOztBQUdBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFNBQVM7SUFDVCxVQUFVO0VBQ1oiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzM2I1ZTUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1yb3VuZGVkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwZW07XHJcbn1cclxuXHJcbi5idG4taW5mbyB7XHJcbiAgICBjb2xvcjogIzMzYjVlNSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzM2I1ZTUgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi52YWxpZGF0aW9uLW1lc3NhZ2V7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uYWxlcnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(userService, router, fb) {
        _classCallCheck(this, LoginComponent);

        this.userService = userService;
        this.router = router;
        this.fb = fb;
        this.disabledSubmitButton = true;
        this.emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
      }

      _createClass(LoginComponent, [{
        key: "oninput",
        value: function oninput() {
          if (this.loginForm.valid) {
            this.disabledSubmitButton = false;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!localStorage.getItem('id_token')) {
            this.loginForm = this.fb.group({
              email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            });
          } else {
            this.router.navigate(["/stories"]);
          }
        }
      }, {
        key: "isValid",
        value: function isValid(controlName) {
          return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched;
        }
      }, {
        key: "login",
        value: function login() {
          var _this4 = this;

          console.log("Login form:", this.loginForm.value);

          if (this.loginForm.valid) {
            this.userService.Login(this.loginForm.value).subscribe(function (data) {
              console.log("data is:", data);

              _this4.userService.storeUserData(data['token'], data['user']);

              console.log("data.token is:", data['token'], "data.user is:", data['user']);

              _this4.router.navigate(['/profile']);
            }, function (err) {
              console.log(err, "Login failed!");
              _this4.loginFailed = true;
              setTimeout(function () {
                return _this4.loginFailed = false;
              }, 4000);
            });
          }
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input')], LoginComponent.prototype, "oninput", null);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/navbar/navbar.component.css":
  /*!*********************************************!*\
    !*** ./src/app/navbar/navbar.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavbarNavbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".nav-item:hover .nav-link{\r\n    color: black;\r\n}\r\n\r\n.brand-logo:hover{\r\n    color: white;\r\n    text-decoration: none;\r\n}\r\n\r\n.sidenav-trigger{\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1pdGVtOmhvdmVyIC5uYXYtbGlua3tcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmJyYW5kLWxvZ286aG92ZXJ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5zaWRlbmF2LXRyaWdnZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent(userService, router) {
        _classCallCheck(this, NavbarComponent);

        this.userService = userService;
        this.router = router;
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.userService.getProfile().subscribe(function (data) {
            _this5.user = data['user'], _this5.firstName = _this5.user.firstName;
            console.log("this user name:", _this5.user.firstName); // error => this.user = 'Profile'
          });
        }
      }, {
        key: "onLogoutClick",
        value: function onLogoutClick() {
          this.userService.logout();
          console.log("You are logged out");
          this.router.navigate(['/']);
          return false;
        }
      }, {
        key: "loggedIn",
        value: function loggedIn() {
          return localStorage.getItem('id_token');
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ctorParameters = function () {
      return [{
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.css */
      "./src/app/navbar/navbar.component.css"))["default"]]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/profile/profile-stories/profile-stories.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/profile/profile-stories/profile-stories.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileProfileStoriesProfileStoriesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container{\r\n    padding-top: 50px\r\n}\r\n.btn{\r\n    float: left;\r\n    margin-right:10px;\r\n    \r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLXN0b3JpZXMvcHJvZmlsZS1zdG9yaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCOztBQUVyQiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS1zdG9yaWVzL3Byb2ZpbGUtc3Rvcmllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4XHJcbn1cclxuLmJ0bntcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OjEwcHg7XHJcbiAgICBcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/profile/profile-stories/profile-stories.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/profile/profile-stories/profile-stories.component.ts ***!
    \**********************************************************************/

  /*! exports provided: ProfileStoriesComponent */

  /***/
  function srcAppProfileProfileStoriesProfileStoriesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileStoriesComponent", function () {
      return ProfileStoriesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var src_app_services_story_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/story.service */
    "./src/app/services/story.service.ts");

    var ProfileStoriesComponent = /*#__PURE__*/function () {
      function ProfileStoriesComponent(userService, storyService) {
        _classCallCheck(this, ProfileStoriesComponent);

        this.userService = userService;
        this.storyService = storyService;
      }

      _createClass(ProfileStoriesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.userService.getProfileStories().subscribe(function (story) {
            _this6.myStories = story;
            console.log("My Stories:", _this6.myStories);
          });
        }
      }, {
        key: "deleteStory",
        value: function deleteStory(story, index) {
          var _this7 = this;

          this.storyService.deleteStory(story._id).subscribe(function (data) {
            _this7.myStories.splice(index, 1);
          });
        }
      }]);

      return ProfileStoriesComponent;
    }();

    ProfileStoriesComponent.ctorParameters = function () {
      return [{
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: src_app_services_story_service__WEBPACK_IMPORTED_MODULE_3__["StoryService"]
      }];
    };

    ProfileStoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile-stories',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile-stories.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile-stories/profile-stories.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile-stories.component.css */
      "./src/app/profile/profile-stories/profile-stories.component.css"))["default"]]
    })], ProfileStoriesComponent);
    /***/
  },

  /***/
  "./src/app/profile/profile.component.css":
  /*!***********************************************!*\
    !*** ./src/app/profile/profile.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container{\r\n    padding-top: 60px;\r\n}\r\n\r\na{\r\n    text-decoration: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcclxufVxyXG5cclxuYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/profile/profile.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/profile/profile.component.ts ***!
    \**********************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent(userService, router) {
        _classCallCheck(this, ProfileComponent);

        this.userService = userService;
        this.router = router;
        this.username = '';
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.userService.getProfile().subscribe(function (data) {
            console.log("profile data is:", data);
            _this8.user = data['user'];

            (function (error) {
              return _this8.router.navigate(['/']);
            });
          });
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ctorParameters = function () {
      return [{
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.component.css */
      "./src/app/profile/profile.component.css"))["default"]]
    })], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/register/register.component.css":
  /*!*************************************************!*\
    !*** ./src/app/register/register.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegisterRegisterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-header {\r\n    background-color: #33b5e5 !important;\r\n}\r\n\r\n.btn-rounded {\r\n    border-radius: 10em;\r\n}\r\n\r\n.btn-info {\r\n    color: #33b5e5 !important;\r\n    background-color: transparent !important;\r\n    border: 2px solid #33b5e5 !important;\r\n}\r\n\r\n.validation-message{\r\n    color: red;\r\n  }\r\n\r\n.alert {\r\n    background-color: transparent;\r\n    border: 0;\r\n    color: red;\r\n  }\r\n\r\n.success{\r\n    padding: 20px;\r\n    /* background-color:#249424;  */\r\n    background-color: transparent;\r\n    border: 0;\r\n    color: green;\r\n    margin-bottom: 15px;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix3Q0FBd0M7SUFDeEMsb0NBQW9DO0FBQ3hDOztBQUtFO0lBQ0UsVUFBVTtFQUNaOztBQUNBO0lBQ0UsNkJBQTZCO0lBQzdCLFNBQVM7SUFDVCxVQUFVO0VBQ1o7O0FBRUU7SUFDQSxhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLDZCQUE2QjtJQUM3QixTQUFTO0lBQ1QsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzYjVlNSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLXJvdW5kZWQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBlbTtcclxufVxyXG5cclxuLmJ0bi1pbmZvIHtcclxuICAgIGNvbG9yOiAjMzNiNWU1ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzMzYjVlNSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4gIC52YWxpZGF0aW9uLW1lc3NhZ2V7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH1cclxuICAuYWxlcnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH1cclxuICAgIFxyXG4gICAgLnN1Y2Nlc3N7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjojMjQ5NDI0OyAgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/register/register.component.ts":
  /*!************************************************!*\
    !*** ./src/app/register/register.component.ts ***!
    \************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(userService, fb) {
        _classCallCheck(this, RegisterComponent);

        this.userService = userService;
        this.fb = fb;
        this.emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        this.nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        this.disabledSubmitButton = true;
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.signUpForm = this.fb.group({
            firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4)]]
          });
        }
      }, {
        key: "oninput",
        value: function oninput() {
          if (this.signUpForm.valid) {
            this.disabledSubmitButton = false;
          }
        }
      }, {
        key: "signUp",
        value: function signUp() {
          var _this9 = this;

          // let userDetails: any = {}
          // userDetails.firstName = this.signUpForm.controls['firstName'].value;
          // userDetails.lastName = this.signUpForm.controls['lastName'].value;
          // userDetails.email = this.signUpForm.controls['email'].value;
          // userDetails.password = this.signUpForm.controls['password'].value;
          this.userService.Signup(this.signUpForm.value).subscribe(function (res) {
            _this9.showSuccessMessage = true;
            setTimeout(function () {
              return _this9.showSuccessMessage = false;
            }, 4000);

            _this9.signUpForm.reset();

            _this9.signUpForm.setValue({
              firstName: '',
              lastName: '',
              email: '',
              password: ''
            });
          }, function (err) {
            _this9.serverErrorMessages = true;
            setTimeout(function () {
              return _this9.serverErrorMessages = false;
            }, 4000);
          });
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input')], RegisterComponent.prototype, "oninput", null);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.component.css */
      "./src/app/register/register.component.css"))["default"]]
    })], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/services/homepageauth.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/homepageauth.service.ts ***!
    \**************************************************/

  /*! exports provided: HomepageauthService */

  /***/
  function srcAppServicesHomepageauthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomepageauthService", function () {
      return HomepageauthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HomepageauthService = /*#__PURE__*/function () {
      function HomepageauthService(router) {
        _classCallCheck(this, HomepageauthService);

        this.router = router;
      }

      _createClass(HomepageauthService, [{
        key: "canActivate",
        value: function canActivate() {
          var loggedIn = localStorage.getItem('id_token');

          if (loggedIn) {
            this.router.navigate(["/stories"]);
            return true;
          } else {
            this.router.navigate(["/"]);
            return false;
          }
        }
      }]);

      return HomepageauthService;
    }();

    HomepageauthService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    HomepageauthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], HomepageauthService);
    /***/
  },

  /***/
  "./src/app/services/loginauth.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/loginauth.service.ts ***!
    \***********************************************/

  /*! exports provided: LoginauthService */

  /***/
  function srcAppServicesLoginauthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginauthService", function () {
      return LoginauthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LoginauthService = /*#__PURE__*/function () {
      function LoginauthService(router) {
        _classCallCheck(this, LoginauthService);

        this.router = router;
      }

      _createClass(LoginauthService, [{
        key: "canActivate",
        value: function canActivate() {
          var loggedIn = localStorage.getItem('id_token');

          if (loggedIn) {
            return true;
          } else {
            this.router.navigate(["/"]);
            return false;
          }
        }
      }]);

      return LoginauthService;
    }();

    LoginauthService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    LoginauthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LoginauthService);
    /***/
  },

  /***/
  "./src/app/services/story.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/story.service.ts ***!
    \*******************************************/

  /*! exports provided: StoryService */

  /***/
  function srcAppServicesStoryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoryService", function () {
      return StoryService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js"); // import Story from '../interfaces/Story';


    var StoryService = /*#__PURE__*/function () {
      function StoryService(http) {
        _classCallCheck(this, StoryService);

        this.http = http; // uri = 'http://localhost:5000';
        //  uri = 'https://cors-anywhere.herokuapp.com/https://mystoryheroku.herokuapp.com'

        this.uri = 'https://mystoryheroku.herokuapp.com/api';
      }

      _createClass(StoryService, [{
        key: "getAllStories",
        value: function getAllStories() {
          var token = localStorage.getItem('id_token');
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'auth-token': token
          });
          var httpOptions = {
            headers: headers
          };
          return this.http.get("".concat(this.uri, "/stories"), httpOptions);
        }
      }, {
        key: "getStoryById",
        value: function getStoryById(id) {
          var token = localStorage.getItem('id_token');
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'auth-token': token
          });
          var httpOptions = {
            headers: headers
          };
          return this.http.get("".concat(this.uri, "/stories/story/").concat(id), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res['story'];
          }));
        }
      }, {
        key: "deleteStory",
        value: function deleteStory(id) {
          var token = localStorage.getItem('id_token');
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'auth-token': token
          });
          var httpOptions = {
            headers: headers
          };
          return this.http["delete"]("".concat(this.uri, "/stories/story/").concat(id), httpOptions);
        }
      }, {
        key: "createStory",
        value: function createStory(body) {
          var token = localStorage.getItem('id_token');
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'auth-token': token
          });
          var httpOptions = {
            headers: headers
          };
          return this.http.post("".concat(this.uri, "/stories/add"), body, httpOptions);
        }
      }, {
        key: "updateStory",
        value: function updateStory(id, data) {
          var token = localStorage.getItem('id_token');
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'auth-token': token
          });
          var httpOptions = {
            headers: headers
          };
          return this.http.put("".concat(this.uri, "/stories/edit/").concat(id), data, httpOptions);
        }
      }]);

      return StoryService;
    }();

    StoryService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    StoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], StoryService);
    /***/
  },

  /***/
  "./src/app/services/user.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var UserService = /*#__PURE__*/function () {
      function UserService(http, router) {
        _classCallCheck(this, UserService);

        this.http = http;
        this.router = router; // uri = 'http://localhost:5000';
        //  uri = 'https://cors-anywhere.herokuapp.com/https://mystoryheroku.herokuapp.com'

        this.uri = 'https://mystoryheroku.herokuapp.com/api';
      }

      _createClass(UserService, [{
        key: "googleLogin",
        value: function googleLogin() {
          return this.http.get("".concat(this.uri, "/auth/google")); // this.router.navigate([`${this.uri}/auth/google`])
        }
      }, {
        key: "Signup",
        value: function Signup(body) {
          return this.http.post("".concat(this.uri, "/register"), body, {
            observe: 'body'
          });
        }
      }, {
        key: "Login",
        value: function Login(user) {
          return this.http.post("".concat(this.uri), user);
        }
      }, {
        key: "storeUserData",
        value: function storeUserData(token, user) {
          localStorage.setItem('id_token', token);
          localStorage.setItem('user', JSON.stringify(user));
          this.authToken = token;
          this.user = user;
        }
      }, {
        key: "getProfile",
        value: function getProfile() {
          var token = localStorage.getItem('id_token');
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'auth-token': token
          });
          var httpOptions = {
            headers: headers
          };
          return this.http.get("".concat(this.uri, "/profile"), httpOptions);
        }
      }, {
        key: "getUserById",
        value: function getUserById(id) {
          var token = localStorage.getItem('id_token');
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'auth-token': token
          });
          var httpOptions = {
            headers: headers
          };
          return this.http.get("".concat(this.uri, "/user/").concat(id), httpOptions); // .pipe(map(res => res['user']))
        }
      }, {
        key: "getProfileStories",
        value: function getProfileStories() {
          var token = localStorage.getItem('id_token');
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'auth-token': token
          });
          var httpOptions = {
            headers: headers
          };
          return this.http.get("".concat(this.uri, "/profile/mystories"), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res['Stories'];
          }));
        }
      }, {
        key: "loggedIn",
        value: function loggedIn() {
          return localStorage.getItem('id_token');
        }
      }, {
        key: "loggedOut",
        value: function loggedOut() {
          return localStorage.getItem('id_token') == null;
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authToken = null;
          this.user = null;
          localStorage.removeItem('id_token');
          localStorage.removeItem('user');
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserService);
    /***/
  },

  /***/
  "./src/app/stories/stories.component.css":
  /*!***********************************************!*\
    !*** ./src/app/stories/stories.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppStoriesStoriesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btn-rounded {\r\n    border-radius: 10em;\r\n}\r\n.btn-info {\r\n    color: #33b5e5 !important;\r\n    background-color: lightgray !important;\r\n    /* border: 2px solid #33b5e5 !important; */\r\n}\r\n.mybutton {\r\n    color: #1a73e8;\r\n    /* pointer-events: none;\r\n    cursor: default; */\r\n    text-decoration: none;\r\n    border-radius:28px;\r\n    /* border:1px solid #18ab29; */\r\n    background-color:lightgray;\r\n    padding:8px 16px;\r\n  }\r\n.btn{\r\n      color: white\r\n  }\r\n\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Rvcmllcy9zdG9yaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixzQ0FBc0M7SUFDdEMsMENBQTBDO0FBQzlDO0FBRUE7SUFDSSxjQUFjO0lBQ2Q7c0JBQ2tCO0lBQ2xCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLDBCQUEwQjtJQUMxQixnQkFBZ0I7RUFDbEI7QUFFQTtNQUNJO0VBQ0oiLCJmaWxlIjoic3JjL2FwcC9zdG9yaWVzL3N0b3JpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tcm91bmRlZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMGVtO1xyXG59XHJcbi5idG4taW5mbyB7XHJcbiAgICBjb2xvcjogIzMzYjVlNSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5ICFpbXBvcnRhbnQ7XHJcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCAjMzNiNWU1ICFpbXBvcnRhbnQ7ICovXHJcbn1cclxuXHJcbi5teWJ1dHRvbiB7XHJcbiAgICBjb2xvcjogIzFhNzNlODtcclxuICAgIC8qIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0OyAqL1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czoyOHB4O1xyXG4gICAgLyogYm9yZGVyOjFweCBzb2xpZCAjMThhYjI5OyAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyYXk7XHJcbiAgICBwYWRkaW5nOjhweCAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLmJ0bntcclxuICAgICAgY29sb3I6IHdoaXRlXHJcbiAgfVxyXG5cclxuICAiXX0= */";
    /***/
  },

  /***/
  "./src/app/stories/stories.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/stories/stories.component.ts ***!
    \**********************************************/

  /*! exports provided: StoriesComponent */

  /***/
  function srcAppStoriesStoriesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoriesComponent", function () {
      return StoriesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_story_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/story.service */
    "./src/app/services/story.service.ts");

    var StoriesComponent = /*#__PURE__*/function () {
      function StoriesComponent(StoryService) {
        _classCallCheck(this, StoriesComponent);

        this.StoryService = StoryService;
        this.stories = [];
      }

      _createClass(StoriesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.StoryService.getAllStories().subscribe(function (data) {
            _this10.stories = data;
            console.log(_this10.stories);
          });
        }
      }]);

      return StoriesComponent;
    }();

    StoriesComponent.ctorParameters = function () {
      return [{
        type: _services_story_service__WEBPACK_IMPORTED_MODULE_2__["StoryService"]
      }];
    };

    StoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-stories',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./stories.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/stories/stories.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./stories.component.css */
      "./src/app/stories/stories.component.css"))["default"]]
    })], StoriesComponent);
    /***/
  },

  /***/
  "./src/app/story-page/story-page.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/story-page/story-page.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStoryPageStoryPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container{\r\n    padding-top: 50px;  \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvcnktcGFnZS9zdG9yeS1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9zdG9yeS1wYWdlL3N0b3J5LXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDsgIFxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/story-page/story-page.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/story-page/story-page.component.ts ***!
    \****************************************************/

  /*! exports provided: StoryPageComponent */

  /***/
  function srcAppStoryPageStoryPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoryPageComponent", function () {
      return StoryPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_story_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/story.service */
    "./src/app/services/story.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var StoryPageComponent = /*#__PURE__*/function () {
      function StoryPageComponent(storyService, actRoute) {
        _classCallCheck(this, StoryPageComponent);

        this.storyService = storyService;
        this.actRoute = actRoute;
      }

      _createClass(StoryPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.storyId = this.actRoute.snapshot.params['id'];
          console.log("Story ID is:", this.storyId);
          this.loadStoryDetails(this.storyId);
        }
      }, {
        key: "loadStoryDetails",
        value: function loadStoryDetails(storyId) {
          var _this11 = this;

          this.storyService.getStoryById(storyId).subscribe(function (data) {
            _this11.storyData = data;
            console.log("Story data is:", _this11.storyData);
            return _this11.storyData;
          });
        }
      }]);

      return StoryPageComponent;
    }();

    StoryPageComponent.ctorParameters = function () {
      return [{
        type: _services_story_service__WEBPACK_IMPORTED_MODULE_2__["StoryService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    StoryPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-story-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./story-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/story-page/story-page.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./story-page.component.css */
      "./src/app/story-page/story-page.component.css"))["default"]]
    })], StoryPageComponent);
    /***/
  },

  /***/
  "./src/app/user-stories/user-stories.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/user-stories/user-stories.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserStoriesUserStoriesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container{\r\n    padding-top: 50px\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1zdG9yaWVzL3VzZXItc3Rvcmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3VzZXItc3Rvcmllcy91c2VyLXN0b3JpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweFxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/user-stories/user-stories.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/user-stories/user-stories.component.ts ***!
    \********************************************************/

  /*! exports provided: UserStoriesComponent */

  /***/
  function srcAppUserStoriesUserStoriesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserStoriesComponent", function () {
      return UserStoriesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_story_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/story.service */
    "./src/app/services/story.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");

    var UserStoriesComponent = /*#__PURE__*/function () {
      function UserStoriesComponent(storyService, actRoute, userService) {
        _classCallCheck(this, UserStoriesComponent);

        this.storyService = storyService;
        this.actRoute = actRoute;
        this.userService = userService;
      }

      _createClass(UserStoriesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          var id = this.actRoute.snapshot.paramMap.get('id');
          this.getUserById(id);
          this.storyService.getAllStories().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (stories) {
            return stories.filter(function (story) {
              return story.UserId == _this12.actRoute.snapshot.paramMap.get('id');
            });
          })).subscribe(function (data) {
            console.log("This user's stories are:", data); // this.story = data['story']

            _this12.storiesByUserId = data; // this.userName = this.story.userName
            // console.log("this user name:",this.userName);
          });
        }
      }, {
        key: "getUserById",
        value: function getUserById(id) {
          var _this13 = this;

          this.userService.getUserById(id).subscribe(function (data) {
            _this13.user = data['user'];
            _this13.userName = _this13.user.firstName + '' + _this13.user.lastName;
            console.log('Stories by:', _this13.userName);
          });
        }
      }]);

      return UserStoriesComponent;
    }();

    UserStoriesComponent.ctorParameters = function () {
      return [{
        type: _services_story_service__WEBPACK_IMPORTED_MODULE_3__["StoryService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }];
    };

    UserStoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-stories',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-stories.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user-stories/user-stories.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-stories.component.css */
      "./src/app/user-stories/user-stories.component.css"))["default"]]
    })], UserStoriesComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Lenovo\Desktop\MyStoryHeroku\my-story\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map