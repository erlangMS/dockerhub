webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./clientes/clientes.module": [
		"./src/app/clientes/clientes.module.ts"
	],
	"./home/home.module": [
		"./src/app/home/home.module.ts"
	],
	"./servico/servico.module": [
		"./src/app/servico/servico.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/_file/file.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ems_oauth2_client__ = __webpack_require__("./node_modules/ems-oauth2-client/esm5/ems-oauth2-client.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_unb_menu_dinamico__ = __webpack_require__("./node_modules/unb-menu-dinamico/esm5/unb-menu-dinamico.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FileService = /** @class */ (function () {
    function FileService(http, redirectService, navBarComponent) {
        this.http = http;
        this.redirectService = redirectService;
        this.navBarComponent = navBarComponent;
    }
    FileService.prototype.startRedirect = function () {
        var _this = this;
        return this.http.get('/portal/barramento')
            .map(function (resultado) {
            var dados = resultado.json();
            _this.redirectService.startRedirectFromBarramento(dados.base_url)
                .subscribe(function (resultado) {
                _this.navBarComponent.carregarMenuDinamico(function (menu) {
                    return true;
                });
            });
            return true;
        });
    };
    FileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ems_oauth2_client__["i" /* RedirectService */], __WEBPACK_IMPORTED_MODULE_4_unb_menu_dinamico__["a" /* NavbarComponent */]])
    ], FileService);
    return FileService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");

var routes = [
    {
        "path": "home",
        "loadChildren": "./home/home.module#HomeModule"
    },
    {
        "path": "clientes",
        "loadChildren": "./clientes/clientes.module#ClientesModule",
    },
    {
        "path": "servicos",
        "loadChildren": "./servico/servico.module#ServicoModule",
    },
    {
        "path": "",
        "redirectTo": "home",
        "pathMatch": "full"
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(routes);


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "/* AppComponent's private CSS styles */\n@media (max-width: 768px) {\n  section.content {\n    margin-left: 1px !important;\n  }\n  section.content {\n    margin-right: 1px !important;\n  }\n  .row > .col-12, .row > .col-md-12, .row > .col-sm-12 {\n    padding-right: 1px !important;\n    padding-left: 1px !important;\n  }\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Overlay For Sidebars -->\n<div class=\"overlay\"></div>\n<!-- #END# Overlay For Sidebars -->\n\n<!-- Search Bar -->\n<!-- <search-bar></search-bar> -->\n<!-- #END# Search Bar -->\n\n<!-- Topbar -->\n<topbar></topbar>\n<!-- #END# Topbar -->\n\n<section>\n  <!-- Left Sidebar -->\n  <unb-navbar></unb-navbar>\n  <!-- #END# Left Sidebar -->\n\n  <!-- Right Sidebar -->\n  <right-sidebar></right-sidebar>\n  <!-- #END# Right Sidebar -->\n</section>\n\n<section class=\"content\">\n\t<div class=\"container-fluid\">\n    <router-outlet></router-outlet>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__file_file_service__ = __webpack_require__("./src/app/_file/file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_unb_menu_dinamico__ = __webpack_require__("./node_modules/unb-menu-dinamico/esm5/unb-menu-dinamico.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ems_oauth2_client__ = __webpack_require__("./node_modules/ems-oauth2-client/esm5/ems-oauth2-client.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__servico_servico_lista_component__ = __webpack_require__("./src/app/servico/servico-lista.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = /** @class */ (function () {
    function AppComponent(fileService, navBarComponent, router) {
        this.fileService = fileService;
        this.navBarComponent = navBarComponent;
        this.router = router;
        this.intervalId = null;
        AppComponent_1.route = this.router;
    }
    AppComponent_1 = AppComponent;
    AppComponent.getInstanceRouter = function () {
        return AppComponent_1.route;
    };
    AppComponent.prototype.ngOnInit = function () {
        this.fileService.startRedirect()
            .subscribe(function (result) {
        }, function (error) {
            console.log(error);
        });
        if (localStorage.getItem('portal')) {
            var json = JSON.parse(localStorage.getItem('portal'));
            var recurso = json.resource_owner;
            var listaPermissao = recurso.lista_permission;
            for (var i = 0; i < listaPermissao.length; i++) {
                var url = listaPermissao[i].url.split('/');
                if (url.length == 3) {
                    AppComponent_1.getInstanceRouter().config.push({
                        path: url[1] + '/' + url[2], component: __WEBPACK_IMPORTED_MODULE_4__servico_servico_lista_component__["a" /* ServicoListaComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3_ems_oauth2_client__["a" /* AuthGuard */]],
                        data: { nome: listaPermissao[i].url }
                    });
                }
                else {
                    AppComponent_1.getInstanceRouter().config.push({
                        path: url[1], component: __WEBPACK_IMPORTED_MODULE_4__servico_servico_lista_component__["a" /* ServicoListaComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3_ems_oauth2_client__["a" /* AuthGuard */]],
                        data: { nome: listaPermissao[i].url }
                    });
                }
            }
        }
    };
    AppComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_3_ems_oauth2_client__["e" /* EventEmitterService */].contains('tokenPreenchido')) {
            this.navBarComponent.carregarMenuDinamico(function (menu) {
                return true;
            });
        }
        __WEBPACK_IMPORTED_MODULE_3_ems_oauth2_client__["e" /* EventEmitterService */].get('tokenPreenchido').subscribe(function (preechido) {
            _this.navBarComponent.carregarMenuDinamico(function (menu) {
                var json = JSON.parse(localStorage.getItem('portal'));
                var recurso = json.resource_owner;
                var listaPermissao = recurso.lista_permission;
                for (var i = 0; i < listaPermissao.length; i++) {
                    var url = listaPermissao[i].url.split('/');
                    AppComponent_1.getInstanceRouter().config.push({
                        path: url[1], component: __WEBPACK_IMPORTED_MODULE_4__servico_servico_lista_component__["a" /* ServicoListaComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3_ems_oauth2_client__["a" /* AuthGuard */]],
                        data: { nome: listaPermissao[i].url }
                    });
                }
                return true;
            });
        });
    };
    AppComponent = AppComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__file_file_service__["a" /* FileService */], __WEBPACK_IMPORTED_MODULE_2_unb_menu_dinamico__["a" /* NavbarComponent */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]])
    ], AppComponent);
    return AppComponent;
    var AppComponent_1;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__file_file_service__ = __webpack_require__("./src/app/_file/file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_module__ = __webpack_require__("./src/app/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__template_left_sidebar_left_sidebar_component__ = __webpack_require__("./src/app/template/left-sidebar/left-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__template_right_sidebar_right_sidebar_component__ = __webpack_require__("./src/app/template/right-sidebar/right-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__template_topbar_topbar_component__ = __webpack_require__("./src/app/template/topbar/topbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ems_oauth2_client__ = __webpack_require__("./node_modules/ems-oauth2-client/esm5/ems-oauth2-client.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_unb_menu_dinamico__ = __webpack_require__("./node_modules/unb-menu-dinamico/esm5/unb-menu-dinamico.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__paginator_pager_module__ = __webpack_require__("./src/app/paginator/pager.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__servico_servico_module__ = __webpack_require__("./src/app/servico/servico.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__clientes_clientes_module__ = __webpack_require__("./src/app/clientes/clientes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__template_left_sidebar_left_sidebar_component__["a" /* LeftSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__template_right_sidebar_right_sidebar_component__["a" /* RightSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__template_topbar_topbar_component__["a" /* TopbarComponent */],
                __WEBPACK_IMPORTED_MODULE_13_unb_menu_dinamico__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_12_ems_oauth2_client__["h" /* NavigationComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_module__["HomeModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_14__paginator_pager_module__["a" /* PagerModule */],
                __WEBPACK_IMPORTED_MODULE_15__servico_servico_module__["ServicoModule"],
                __WEBPACK_IMPORTED_MODULE_16__clientes_clientes_module__["ClientesModule"],
                __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["c" /* HttpClientModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__file_file_service__["a" /* FileService */],
                __WEBPACK_IMPORTED_MODULE_12_ems_oauth2_client__["c" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_12_ems_oauth2_client__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_12_ems_oauth2_client__["i" /* RedirectService */],
                __WEBPACK_IMPORTED_MODULE_13_unb_menu_dinamico__["b" /* NavbarService */],
                __WEBPACK_IMPORTED_MODULE_13_unb_menu_dinamico__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_12_ems_oauth2_client__["g" /* LoggerService */],
                __WEBPACK_IMPORTED_MODULE_12_ems_oauth2_client__["d" /* CookieService */],
                __WEBPACK_IMPORTED_MODULE_12_ems_oauth2_client__["f" /* HttpService */],
                __WEBPACK_IMPORTED_MODULE_12_ems_oauth2_client__["k" /* ResourceOwner */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_2__angular_http__["f" /* XSRFStrategy */],
                    useValue: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* CookieXSRFStrategy */]('csrftoken', 'X-CSRF-Token')
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_12_ems_oauth2_client__["b" /* AuthInterceptor */],
                    multi: true
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_12_ems_oauth2_client__["j" /* ReponseInterceptor */],
                    multi: true
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_0__angular_common__["h" /* LocationStrategy */],
                    useClass: __WEBPACK_IMPORTED_MODULE_0__angular_common__["e" /* HashLocationStrategy */]
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/clientes/clientes-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clientes_component__ = __webpack_require__("./src/app/clientes/clientes.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'clientes', component: __WEBPACK_IMPORTED_MODULE_2__clientes_component__["a" /* ClientesComponent */] }
];
var ClientesRoutingModule = /** @class */ (function () {
    function ClientesRoutingModule() {
    }
    ClientesRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], ClientesRoutingModule);
    return ClientesRoutingModule;
}());



/***/ }),

/***/ "./src/app/clientes/clientes.component.css":
/***/ (function(module, exports) {

module.exports = ".example-headers-align .mat-expansion-panel-header-title, \n.example-headers-align .mat-expansion-panel-header-description {\n  -ms-flex-preferred-size: 0;\n      flex-basis: 0;\n}\n\n.example-headers-align .mat-expansion-panel-header-description {\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n"

/***/ }),

/***/ "./src/app/clientes/clientes.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center;\">\n  <h1>Clientes</h1>\n  <h4>CPD-UnB</h4>\n</div>\n\n<mat-card>\n  <mat-card-content>\n    <mat-form-field class=\"full-width\">\n      <input matInput [formControl]=\"buscaCtrl\" type=\"text\" placeholder=\"Buscar\">\n      <mat-icon matSuffix>\n        <i matSuffix class=\"material-icons\">search</i>\n      </mat-icon>\n    </mat-form-field>\n  </mat-card-content>\n</mat-card>\n\n<br/>\n<mat-accordion class=\"example-headers-align\">\n  <mat-expansion-panel *ngFor=\"let sistema of sistemasFiltrados\" hideToggle=\"false\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        <b>{{sistema.sigla}}</b>\n      </mat-panel-title>\n      <mat-panel-description style=\"text-align: right;\">\n        {{sistema.nome}}\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    {{sistema.descricao}}\n    <mat-action-row>\n      <button mat-button (click)=\"redirecionar(sistema)\">\n        <i class=\"material-icons\">send</i>\n        Acessar\n      </button>\n    </mat-action-row>\n\n  </mat-expansion-panel>\n</mat-accordion>"

/***/ }),

/***/ "./src/app/clientes/clientes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__clients_service__ = __webpack_require__("./src/app/clientes/clients.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sistemas_sistemas_service__ = __webpack_require__("./src/app/sistemas/sistemas.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClientesComponent = /** @class */ (function () {
    // construtor
    function ClientesComponent(router, clientService, sistemasService) {
        this.router = router;
        this.clientService = clientService;
        this.sistemasService = sistemasService;
        this.buscaCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]();
        this.buscaCtrl.setValue('');
    }
    ClientesComponent.prototype.ngOnInit = function () {
        this.loadClients();
        this.filtrarListaSistemas();
    };
    ClientesComponent.prototype.filtrarListaSistemas = function () {
        var _this = this;
        this.buscaCtrl.valueChanges.subscribe(function (value) {
            if (value && !value.Empty) {
                _this.sistemasFiltrados = _this.sistemas.filter(function (entry) {
                    return entry.sigla.startsWith(value);
                });
            }
            else {
                _this.sistemasFiltrados = _this.sistemas;
            }
        });
    };
    ClientesComponent.prototype.loadClients = function () {
        var _this = this;
        this.clientService.findAllActive().subscribe(function (res) {
            _this.clients = res.filter(function (entry) {
                return (entry.active == true);
            });
        }, function (err) { }, function () {
            var idClients = _this.clients.map(function (res) { return res.id; });
            if (idClients) {
                _this.sistemasService.findByIdList(idClients).subscribe(function (res) {
                    _this.sistemas = res.filter(function (sistema) {
                        return (sistema.url && sistema.url.indexOf("index.html") > -1);
                    });
                    _this.sistemasFiltrados = _this.sistemas;
                });
            }
        });
    };
    ClientesComponent.prototype.redirecionar = function (sistema) {
        console.log(sistema);
        if (sistema.url) {
            window.open(sistema.url);
        }
    };
    ClientesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-clientes',
            template: __webpack_require__("./src/app/clientes/clientes.component.html"),
            styles: [__webpack_require__("./src/app/clientes/clientes.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__clients_service__["a" /* ClientsService */], __WEBPACK_IMPORTED_MODULE_4__sistemas_sistemas_service__["a" /* SistemasService */]])
    ], ClientesComponent);
    return ClientesComponent;
}());



/***/ }),

/***/ "./src/app/clientes/clientes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesModule", function() { return ClientesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__materialComponents_materialComponents_module__ = __webpack_require__("./src/app/materialComponents/materialComponents.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__clientes_component__ = __webpack_require__("./src/app/clientes/clientes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__clientes_routing_module__ = __webpack_require__("./src/app/clientes/clientes-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__clients_service__ = __webpack_require__("./src/app/clientes/clients.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sistemas_sistemas_service__ = __webpack_require__("./src/app/sistemas/sistemas.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ClientesModule = /** @class */ (function () {
    function ClientesModule() {
    }
    ClientesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__clientes_component__["a" /* ClientesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__materialComponents_materialComponents_module__["a" /* MaterialComponents */],
                __WEBPACK_IMPORTED_MODULE_4__clientes_routing_module__["a" /* ClientesRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["i" /* ReactiveFormsModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__clients_service__["a" /* ClientsService */], __WEBPACK_IMPORTED_MODULE_7__sistemas_sistemas_service__["a" /* SistemasService */]
            ],
        })
    ], ClientesModule);
    return ClientesModule;
}());



/***/ }),

/***/ "./src/app/clientes/clients.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ems_oauth2_client__ = __webpack_require__("./node_modules/ems-oauth2-client/esm5/ems-oauth2-client.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paginator_pager_component__ = __webpack_require__("./src/app/paginator/pager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_service_util__ = __webpack_require__("./src/app/util/service.util.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClientsService = /** @class */ (function (_super) {
    __extends(ClientsService, _super);
    function ClientsService(http, pagerComponent) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.pagerComponent = pagerComponent;
        _this.url = '/auth/client';
        return _this;
    }
    ClientsService.prototype.findAllActive = function () {
        return this.http.get(this.url).map(function (res) {
            return res;
        }).publishReplay(1)
            .refCount();
    };
    ClientsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ems_oauth2_client__["f" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2__paginator_pager_component__["a" /* PagerComponent */]])
    ], ClientsService);
    return ClientsService;
}(__WEBPACK_IMPORTED_MODULE_3__util_service_util__["a" /* ServiceUtil */]));



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "/* Homes's private CSS styles */\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"block-header\">\n    <ol class=\"breadcrumb\">\n      <li class=\"active\">\n        <a href=\"#/home\">\n          <i class=\"material-icons\">home</i> Home\n        </a>\n      </li>\n    </ol>\n</div>\n\n<div class=\"row clearfix\">\n    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n        <div class=\"card\">\n            <div class=\"body align-center\">\n                <h1>{{ title | uppercase }}</h1>\n                <p class=\"m-b-30\">SSI | CPD | UnB</p>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    // construtor
    function HomeComponent(router) {
        this.router = router;
        this.title = "ems-bus service manager";
    }
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'unb-projeto-inicial-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_routes__ = __webpack_require__("./src/app/home/home.routes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__home_routes__["a" /* HomeRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/home/home.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("./src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */] }
                ])
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/materialComponents/materialComponents.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialComponents = /** @class */ (function () {
    function MaterialComponents() {
    }
    MaterialComponents = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatSliderModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatSlideToggleModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDividerModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatGridListModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatTableModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatPaginatorModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatSnackBarModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatProgressSpinnerModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatExpansionModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatSliderModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatSlideToggleModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDividerModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatGridListModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatTableModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatPaginatorModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatSnackBarModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatProgressSpinnerModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatExpansionModule */]
            ],
            declarations: [],
            providers: [],
        })
    ], MaterialComponents);
    return MaterialComponents;
}());



/***/ }),

/***/ "./src/app/paginator/pager.component.html":
/***/ (function(module, exports) {

module.exports = "\n<ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\n    <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n        <a (click)=\"setPage(pager.currentPage - 1)\">Anterior</a>\n    </li>\n    <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\n        <a (click)=\"setPage(page)\">{{page}}</a>\n    </li>\n    <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n        <a (click)=\"setPage(pager.currentPage + 1)\">Próxima</a>\n    </li>\n</ul>\n\n"

/***/ }),

/***/ "./src/app/paginator/pager.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pager_service__ = __webpack_require__("./src/app/paginator/pager.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PagerComponent = /** @class */ (function () {
    function PagerComponent(http, pagerService) {
        this.http = http;
        this.pagerService = pagerService;
        this.pager = {};
        this.length = 10;
        this.updatePaginator = true;
    }
    PagerComponent.prototype.ngOnInit = function () {
    };
    PagerComponent.prototype.formatarUrl = function (catalogoUrl, filter, limit, offset) {
        this.url = catalogoUrl + "?filter=\"" + filter + "\"&limit=" + limit + "&offset=" + offset;
        this.catalogoUrl = catalogoUrl;
        this.limit = limit;
        this.offset = offset;
        this.filter = filter;
        return this.url;
    };
    PagerComponent.prototype.setPage = function (page, pageSize) {
        var _this = this;
        if (pageSize === void 0) { pageSize = 10; }
        if (this.pager.totalPages != 0) {
            if (page < 1 || page > this.pager.totalPages) {
                return;
            }
        }
        if (this.pager.currentPage === this.pager.totalPages - 1 && this.pager.currentPage !== undefined) {
            this.offset = this.limit + 1;
            this.limit = this.limit + this.limit;
            this.url = this.catalogoUrl + "?filter=\"" + this.filter + "\"&limit=" + this.limit + "&offset=" + this.offset;
            if (this.updatePaginator) {
                this.pagerService.getUrl(this.url)
                    .subscribe(function (response) {
                    _this.pager = _this.pagerService.getPager(_this.allItems.length, page, pageSize);
                    _this.pagedItems = _this.allItems.slice(_this.pager.startIndex, _this.pager.endIndex + 1);
                    _this.updatePaginator = response;
                });
            }
            else {
                this.pager = this.pagerService.getPager(this.allItems.length, page, pageSize);
                this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
            }
        }
        else {
            this.pager = this.pagerService.getPager(this.allItems.length, page, pageSize);
            this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
        }
    };
    PagerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'pager',
            template: __webpack_require__("./src/app/paginator/pager.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__pager_service__["a" /* PagerService */]])
    ], PagerComponent);
    return PagerComponent;
}());



/***/ }),

/***/ "./src/app/paginator/pager.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pager_component__ = __webpack_require__("./src/app/paginator/pager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pager_service__ = __webpack_require__("./src/app/paginator/pager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pager_routes__ = __webpack_require__("./src/app/paginator/pager.routes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PagerModule = /** @class */ (function () {
    function PagerModule() {
    }
    PagerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pager_component__["a" /* PagerComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__pager_component__["a" /* PagerComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_5__pager_routes__["a" /* PagerRoutingModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__pager_service__["a" /* PagerService */],
                __WEBPACK_IMPORTED_MODULE_2__pager_component__["a" /* PagerComponent */]
            ]
        })
    ], PagerModule);
    return PagerModule;
}());



/***/ }),

/***/ "./src/app/paginator/pager.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagerRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pager_component__ = __webpack_require__("./src/app/paginator/pager.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PagerRoutingModule = /** @class */ (function () {
    function PagerRoutingModule() {
    }
    PagerRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    { path: 'paginator', component: __WEBPACK_IMPORTED_MODULE_2__pager_component__["a" /* PagerComponent */] }
                ])
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], PagerRoutingModule);
    return PagerRoutingModule;
}());



/***/ }),

/***/ "./src/app/paginator/pager.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PagerService = /** @class */ (function () {
    function PagerService(http) {
        this.http = http;
    }
    PagerService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        var totalPages = Math.ceil(totalItems / pageSize);
        var startPage, endPage;
        if (totalPages <= 10) {
            startPage = 1;
            endPage = totalPages;
        }
        else {
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        var pages = this.range(startPage, endPage + 1, 1);
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    PagerService.prototype.range = function (start, stop, step) {
        if (stop == null) {
            stop = start || 0;
            start = 0;
        }
        step = step || 1;
        var length = Math.max(Math.ceil((stop - start) / step), 0);
        var range = Array(length);
        for (var idx = 0; idx < length; idx++, start += step) {
            range[idx] = start;
        }
        return range;
    };
    ;
    PagerService.prototype.getUrl = function (url) {
        return this.http.get(url)
            .map(function (response) {
            if (response.json().length != 0) {
                return true;
            }
            else {
                return false;
            }
        });
    };
    PagerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], PagerService);
    return PagerService;
}());



/***/ }),

/***/ "./src/app/servico/servico-detalhe.component.css":
/***/ (function(module, exports) {

module.exports = "label {\n  display: inline-block;\n  width: 7em;\n  margin: .3em 0;\n  color: #607D8B;\n  font-weight: bold;\n}\ninput {\n  height: 2em;\n  font-size: 1em;\n  padding-left: .4em;\n}"

/***/ }),

/***/ "./src/app/servico/servico-detalhe.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card *ngIf=\"servico\">\n  <mat-card-title>\n    <h1>{{servico.owner}}</h1>\n  </mat-card-title>\n  <mat-card-subtitle>\n    Executar Serviço\n  </mat-card-subtitle>\n  <mat-card-content>\n    <table class=\"table table-hover dashboard-task-infos\">\n      <thead>\n        <tr>\n          <th>#</th>\n          <th>NOME</th>\n          <th>URL</th>\n          <th>EXECUTAR</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>{{servico.rowid}}</td>\n          <td>\n            <mat-chip-list>\n              <mat-chip color=\"primary\" selected=\"true\">{{servico.name | uppercase}}</mat-chip>\n            </mat-chip-list>\n          </td>\n          <td>{{servico.url}}</td>\n          <td>\n            <button mat-fab color=\"primary\" (click)=executar(servico.url,servico) accesskey=\"b\">\n              <i class=\"material-icons\">play_arrow</i>\n            </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n\n    <h2>Descrição do Serviço</h2>\n    <p>{{servico.comment}}</p>\n\n    <!-- Caso o serviço seja parametrizável-->\n    <div *ngIf=\"parametrosServico.length > 0\">\n      <h2>Parâmetros</h2>\n      <mat-list>\n        <mat-list-item *ngFor=\"let parametro of parametrosServico ; let i=index\">\n          <b mat-Line>{{parametro.nome}} = </b>\n          <mat-form-field>\n            <input matInput placeholder=\"\" [(ngModel)]=\"parametro.valor\">\n          </mat-form-field>\n        </mat-list-item>\n      </mat-list>\n    </div>\n\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-raised-button (click)=\"voltar()\">\n      <i class=\"material-icons\">keyboard_backspace</i>\n      Voltar\n    </button>\n  </mat-card-actions>\n</mat-card>\n\n<br/>\n<div *ngIf=\"(isLoading | async)\">\n  <br/>\n  <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n</div>\n\n<mat-card>\n  <mat-card-title>\n     <h2>Resultado</h2> \n     <mat-chip-list>\n        <mat-chip selected=\"true\" [color]=\"primary\">{{respostaStatus}}</mat-chip>\n        <mat-chip selected=\"true\" [color]=\"none\">{{tamanhoRequisicao}}</mat-chip>\n     </mat-chip-list>\n  </mat-card-title>\n  <mat-card-content>\n    <pre *ngIf=\"!erro && servicoService.isJson && !isPdf\">{{ response | json }}</pre>\n    <pre *ngIf=\"!erro && !servicoService.isJson && !isPdf\" [innerHTML]=\"response | safe_html\"></pre>\n    <div *ngIf=\"!erro && isPdf\" class='btn-warn' [innerHTML]=\"innerHtml() | safe_html\"></div>\n    <!-- reutiliza a classe btn-danger do bootstrap para avisar erros-->\n    <pre *ngIf=\"erro\" class='btn-danger'>{{ response | json }} </pre>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/servico/servico-detalhe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicoDetalheComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__servico__ = __webpack_require__("./src/app/servico/servico.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__servico_service__ = __webpack_require__("./src/app/servico/servico.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ems_oauth2_client__ = __webpack_require__("./node_modules/ems-oauth2-client/esm5/ems-oauth2-client.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ServicoDetalheComponent = /** @class */ (function () {
    function ServicoDetalheComponent(servicoService, route, location, mensagem) {
        this.servicoService = servicoService;
        this.route = route;
        this.location = location;
        this.mensagem = mensagem;
        this.isLoading = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
        this.servico = new __WEBPACK_IMPORTED_MODULE_5__servico__["a" /* Servico */]();
        this.parametrosServico = [];
        this.urlExecutada = '<html><head></head><body></body></html>';
        this.response = '';
        this.status = '';
        this.respostaStatus = '';
        this.tamanhoRequisicao = '';
        this.erro = false;
        this.urlPath = '';
        this.mimeType = '';
        this.isPdf = false;
    }
    ;
    ServicoDetalheComponent.prototype.ngOnInit = function () {
        this.carregarServico();
    };
    ServicoDetalheComponent.prototype.carregarServico = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.servicoService.getServico(+params.get('id')); })
            .subscribe(function (servico) {
            _this.servico = servico;
            var regex = /:\w*/gm;
            var parametrosRegex = regex.exec(servico.url);
            if (parametrosRegex) {
                parametrosRegex.forEach(function (parametro) {
                    _this.parametrosServico.push({ 'nome': parametro, 'valor': '' });
                });
            }
        });
    };
    ServicoDetalheComponent.prototype.voltar = function () {
        this.location.back();
    };
    ServicoDetalheComponent.prototype.executar = function (url, service) {
        var _this = this;
        this.erro = false;
        this.status = '';
        if (this.parametrosServico && this.parametrosServico.length > 0) {
            this.parametrosServico.reverse;
            this.parametrosServico.forEach(function (param) {
                if (param.valor != '') {
                    url = url.replace(param.nome, param.valor);
                }
            });
        }
        this.response = new Response();
        this.isLoading.next(true);
        this.servicoService.executar(url, service).subscribe(function (response) {
            _this.response = response.body;
            _this.status = 'Codigo: ' + response.status + ' ' + response.statusText +
                ' Tamanho da Requisição: ' + response.headers.get('content-length');
            _this.respostaStatus = 'Codigo: ' + response.status + ' ' + response.statusText;
            _this.tamanhoRequisicao = 'Tamanho da Requisição: ' + response.headers.get('content-length');
            if (__WEBPACK_IMPORTED_MODULE_8_ems_oauth2_client__["b" /* AuthInterceptor */].valueHeader == 'application/pdf') {
                _this.urlPath = _this.downloadArquivoAnexo(response);
                _this.mimeType = __WEBPACK_IMPORTED_MODULE_8_ems_oauth2_client__["b" /* AuthInterceptor */].valueHeader;
                __WEBPACK_IMPORTED_MODULE_8_ems_oauth2_client__["b" /* AuthInterceptor */].keyHeader = '';
                __WEBPACK_IMPORTED_MODULE_8_ems_oauth2_client__["b" /* AuthInterceptor */].valueHeader = '';
            }
            _this.isLoading.next(false);
        }, function (err) {
            _this.status = 'Codigo: ' + err.status + ' ' + err.statusText;
            _this.erro = true;
            _this.response = err;
            _this.isLoading.next(false);
        }, function () {
            _this.isLoading.next(false);
        });
    };
    ServicoDetalheComponent.prototype.downloadArquivoAnexo = function (documento) {
        if (!documento) {
            this.mensagem.open("Nenhum arquivo encontrado.", 'X', { duration: 5000 });
        }
        else {
            var byteCharacters = atob(documento);
            var byteNumbers = new Array(byteCharacters.length);
            for (var i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            var byteArray = new Uint8Array(byteNumbers);
            var blob = new Blob([byteArray], { type: __WEBPACK_IMPORTED_MODULE_8_ems_oauth2_client__["b" /* AuthInterceptor */].valueHeader });
            var url = window.URL.createObjectURL(blob);
            this.isPdf = true;
            return url;
        }
    };
    ServicoDetalheComponent.prototype.innerHtml = function () {
        console.log('innerHTML');
        return "<object data='" + this.urlPath + "' type='" + this.mimeType + "' class='embed-responsive-item' width='100%' height='600px'>" +
            "<embed src='" + this.urlPath + "' type='" + this.mimeType + "' />" +
            "</object>";
    };
    ServicoDetalheComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'servico-detalhe',
            template: __webpack_require__("./src/app/servico/servico-detalhe.component.html"),
            styles: [__webpack_require__("./src/app/servico/servico-detalhe.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__servico_service__["a" /* ServicoService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["g" /* Location */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["r" /* MatSnackBar */]])
    ], ServicoDetalheComponent);
    return ServicoDetalheComponent;
}());



/***/ }),

/***/ "./src/app/servico/servico-lista.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- \n<mat-card>\n    <mat-card-title>\n        <h2>Buscar Serviços</h2>\n    </mat-card-title>\n    <mat-card-content>\n\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n                <mat-form-field class=\"full-width\">\n                    <input matInput placeholder=\"Url\" name=\"Url\" [(ngModel)]=\"filtro.url\">\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-3\">\n                <mat-form-field class=\"full-width\">\n                    <mat-select [(ngModel)]=\"filtro.type\" placeholder=\"Tipo\">\n                        <mat-option [value]=null></mat-option>\n                        <mat-option *ngFor=\"let tipo of tipos\" [value]=tipo>{{tipo}}</mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </div>\n        </div>\n\n        <button mat-raised-button color=\"primary\" (click)=\"buscarServicos()\">\n            <i class=\"material-icons\">search</i> Buscar\n        </button>\n    </mat-card-content>\n</mat-card> \n-->\n\n<br/>\n<mat-card>\n    <mat-card-title>\n        <h1>{{servidor}}</h1>\n    </mat-card-title>\n    <mat-card-subtitle>\n        Lista de Serviços\n    </mat-card-subtitle>\n    <mat-card-content>\n        <mat-form-field class=\"full-width\">\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtro\">\n        </mat-form-field>\n\n        <mat-table #table [dataSource]=\"datasourceServicos\">\n            <ng-container matColumnDef=\"Imagem\">\n                <mat-header-cell *matHeaderCellDef>\n                    <b>Imagem</b>\n                </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\">\n                    <i class=\"material-icons\">{{row.glyphicon}}</i>\n                </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"Url\">\n                <mat-header-cell *matHeaderCellDef>\n                    <b>Url</b>\n                </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\"> {{row.url}} </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"Tipo\">\n                <mat-header-cell *matHeaderCellDef>\n                    <b>Tipo</b>\n                </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\"> {{row.type}} </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"Visualizar\">\n                <mat-header-cell *matHeaderCellDef>\n                    <b>Detalhar</b>\n                </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\">\n                    <button mat-icon-button color=\"primary\" (click)=preVisualizarServico(row)>\n                        <i class=\"material-icons\">launch</i>\n                    </button>\n                </mat-cell>\n            </ng-container>\n\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        </mat-table>\n\n        <!--\n        <mat-paginator [length]=\"servicoService.pagerComponent.length\" pageSize=\"10\" [pageSizeOptions]=\"pageSizeOptions\" (page)=\"paginar($event)\">\n        </mat-paginator>\n        -->\n    </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/servico/servico-lista.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicoListaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__servico_service__ = __webpack_require__("./src/app/servico/servico.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__servico__ = __webpack_require__("./src/app/servico/servico.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ServicoListaComponent = /** @class */ (function () {
    function ServicoListaComponent(router, servicoService, snackBar) {
        this.router = router;
        this.servicoService = servicoService;
        this.snackBar = snackBar;
        this.isLoading = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
        this.filtro = new __WEBPACK_IMPORTED_MODULE_5__servico__["a" /* Servico */]();
        this.servidor = '';
        this.datasourceServicos = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["t" /* MatTableDataSource */]();
        this.displayedColumns = ['Imagem', 'Url', 'Tipo', 'Visualizar'];
        this.pageSizeOptions = [5, 10, 25, 100];
        this.startsWithHifen = /^-.*/gm;
    }
    ServicoListaComponent.prototype.ngOnInit = function () {
        var url = window.location.href;
        var arrayUrl = url.split('/');
        this.servidor = arrayUrl[arrayUrl.length - 1];
        this.carregarServicosServidor(this.servidor);
    };
    ServicoListaComponent.prototype.carregarServicosServidor = function (servidor) {
        var _this = this;
        if (this.startsWithHifen.test(servidor)) {
            servidor = servidor.replace('-', '');
        }
        this.filtro.owner = servidor;
        this.lista = this.servicoService.paginar(this.filtro);
        this.isLoading.next(true);
        this.lista.subscribe(function (resposta) {
            _this.servicoArray = resposta;
            _this.datasourceServicos = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["t" /* MatTableDataSource */](resposta);
            _this.servicoService.pagerComponent.setPage(1);
            _this.servicoService.pagerComponent.length = resposta.length;
        }, function () {
            _this.isLoading.next(false);
        });
    };
    ServicoListaComponent.prototype.carregarServicos = function () {
        var _this = this;
        this.lista = this.servicoService.paginar(this.filtro);
        this.isLoading.next(true);
        this.lista.subscribe(function (res) {
            _this.servicoArray = res;
            _this.datasourceServicos = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["t" /* MatTableDataSource */](res);
            _this.servicoService.pagerComponent.setPage(1);
            _this.servicoService.pagerComponent.length = res.length;
            if (!_this.tipos) {
                _this.tipos = _this.montarListaStringsUnicas(_this.servicoArray.map(function (servico) { return servico.type; }));
            }
            if (!_this.linguagens) {
                _this.linguagens = _this.montarListaStringsUnicas(_this.servicoArray.map(function (servico) { return servico.lang; }));
            }
            if (!_this.donos) {
                _this.donos = _this.montarListaStringsUnicas(_this.servicoArray.map(function (servico) { return servico.owner; }));
            }
        }, function (error) { return _this.erro(error); }, function () {
            _this.isLoading.next(false);
        });
    };
    ServicoListaComponent.prototype.montarListaStringsUnicas = function (listaAlvo) {
        return listaAlvo.filter(function (tipo, i, array) {
            return array.indexOf(tipo) === i;
        });
    };
    ServicoListaComponent.prototype.buscarServicos = function () {
        this.carregarServicos();
    };
    ServicoListaComponent.prototype.paginar = function (pageEvent) {
        this.servicoService.pagerComponent.setPage(pageEvent.pageIndex + 1, pageEvent.pageSize);
    };
    ServicoListaComponent.prototype.preVisualizarServico = function (servico) {
        var id = servico.rowid;
        this.router.navigate(['/servico', id]);
    };
    ServicoListaComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.datasourceServicos.filter = filterValue;
    };
    ServicoListaComponent.prototype.erro = function (erro) {
        this.snackBar.open(erro, 'Ok', { duration: 5000 });
        this.isLoading.next(false);
    };
    ServicoListaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'servico-lista',
            template: __webpack_require__("./src/app/servico/servico-lista.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__servico_service__["a" /* ServicoService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["r" /* MatSnackBar */]])
    ], ServicoListaComponent);
    return ServicoListaComponent;
}());



/***/ }),

/***/ "./src/app/servico/servico.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicoModule", function() { return ServicoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__materialComponents_materialComponents_module__ = __webpack_require__("./src/app/materialComponents/materialComponents.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__servico_detalhe_component__ = __webpack_require__("./src/app/servico/servico-detalhe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__servico_lista_component__ = __webpack_require__("./src/app/servico/servico-lista.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__servico_routes__ = __webpack_require__("./src/app/servico/servico.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__servico_service__ = __webpack_require__("./src/app/servico/servico.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__util_safe_html_pipe__ = __webpack_require__("./src/app/util/safe-html.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ServicoModule = /** @class */ (function () {
    function ServicoModule() {
    }
    ServicoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__servico_lista_component__["a" /* ServicoListaComponent */],
                __WEBPACK_IMPORTED_MODULE_4__servico_detalhe_component__["a" /* ServicoDetalheComponent */],
                __WEBPACK_IMPORTED_MODULE_8__util_safe_html_pipe__["a" /* SafeHtmlPipe */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__servico_lista_component__["a" /* ServicoListaComponent */],
                __WEBPACK_IMPORTED_MODULE_4__servico_detalhe_component__["a" /* ServicoDetalheComponent */],
                __WEBPACK_IMPORTED_MODULE_8__util_safe_html_pipe__["a" /* SafeHtmlPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_6__servico_routes__["a" /* ServicoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__materialComponents_materialComponents_module__["a" /* MaterialComponents */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* DatePipe */],
                __WEBPACK_IMPORTED_MODULE_7__servico_service__["a" /* ServicoService */],
                __WEBPACK_IMPORTED_MODULE_8__util_safe_html_pipe__["a" /* SafeHtmlPipe */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__servico_lista_component__["a" /* ServicoListaComponent */]
            ]
        })
    ], ServicoModule);
    return ServicoModule;
}());



/***/ }),

/***/ "./src/app/servico/servico.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ems_oauth2_client__ = __webpack_require__("./node_modules/ems-oauth2-client/esm5/ems-oauth2-client.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servico_lista_component__ = __webpack_require__("./src/app/servico/servico-lista.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__servico_detalhe_component__ = __webpack_require__("./src/app/servico/servico-detalhe.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ServicoRoutingModule = /** @class */ (function () {
    function ServicoRoutingModule() {
    }
    ServicoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: 'servicos',
                        component: __WEBPACK_IMPORTED_MODULE_3__servico_lista_component__["a" /* ServicoListaComponent */],
                        canActivate: [__WEBPACK_IMPORTED_MODULE_2_ems_oauth2_client__["a" /* AuthGuard */]],
                        data: { nome: '/servicos' }
                    },
                    {
                        path: 'servico/:id',
                        component: __WEBPACK_IMPORTED_MODULE_4__servico_detalhe_component__["a" /* ServicoDetalheComponent */]
                    }
                ])
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], ServicoRoutingModule);
    return ServicoRoutingModule;
}());



/***/ }),

/***/ "./src/app/servico/servico.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_service_util__ = __webpack_require__("./src/app/util/service.util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paginator_pager_component__ = __webpack_require__("./src/app/paginator/pager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servico__ = __webpack_require__("./src/app/servico/servico.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ems_oauth2_client__ = __webpack_require__("./node_modules/ems-oauth2-client/esm5/ems-oauth2-client.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ServicoService = /** @class */ (function (_super) {
    __extends(ServicoService, _super);
    function ServicoService(http, pagerComponent) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.pagerComponent = pagerComponent;
        _this.url = '/catalog';
        _this.response_type = ['json', 'text'];
        _this.isJson = false;
        return _this;
    }
    ServicoService.prototype.paginar = function (filter) {
        var _this = this;
        var filterUrl = "{";
        var paginator = false;
        if (filter.name) {
            filterUrl += "\"name\":\"" + filter.name + "\",";
            paginator = true;
        }
        if (filter.owner) {
            filterUrl += "\"owner\":\"" + filter.owner + "\",";
            paginator = true;
        }
        if (filter.url) {
            filterUrl += "\"url\":\"" + filter.url + "\",";
            paginator = true;
        }
        if (filter.type) {
            filterUrl += "\"type\":\"" + filter.type + "\",";
            paginator = true;
        }
        if (filter.service) {
            filterUrl += "\"service\":\"" + filter.service + "\",";
            paginator = true;
        }
        if (filter.lang) {
            filterUrl += "\"lang\":\"" + filter.lang + "\",";
            paginator = true;
        }
        if (filter.rowid) {
            filterUrl += "\"rowid\":" + filter.rowid + ",";
            paginator = true;
        }
        if (paginator) {
            filterUrl = filterUrl.slice(0, -1);
        }
        filterUrl += "}";
        var pageUrl = this.pagerComponent.formatarUrl(this.url, filterUrl, 1000, 1);
        return this.http.get(pageUrl).map(function (response) {
            _this.pagerComponent.allItems = response;
            return response;
        }).catch(this.handleError)
            .publishReplay(1)
            .refCount();
    };
    ServicoService.prototype.getServicosServidor = function (url) {
        var arrayUrl = url.split('/');
        var servidor = arrayUrl[5];
        return this.http.get(url + '?filter=\"{\"owner\":\"' + servidor + '\"}\"')
            .map(function (response) {
            return response;
        }).catch(this.handleError)
            .publishReplay(1)
            .refCount();
    };
    ServicoService.prototype.getServico = function (rowid) {
        var filter;
        filter = new __WEBPACK_IMPORTED_MODULE_3__servico__["a" /* Servico */];
        filter.rowid = rowid;
        return this.paginar(filter).map(function (response) {
            return response[0];
        }).catch(this.handleError);
    };
    ServicoService.prototype.executar = function (url, service) {
        var tipoRetorno = '';
        __WEBPACK_IMPORTED_MODULE_4_ems_oauth2_client__["b" /* AuthInterceptor */].keyHeader = 'content-type';
        __WEBPACK_IMPORTED_MODULE_4_ems_oauth2_client__["b" /* AuthInterceptor */].valueHeader = service.content_type;
        if (service.content_type == 'text/plain') {
            tipoRetorno = 'text';
            this.isJson = false;
        }
        else {
            tipoRetorno = 'json';
            this.isJson = true;
        }
        return this.http.get(url, tipoRetorno, 'response')
            .map(function (response) {
            if (__WEBPACK_IMPORTED_MODULE_4_ems_oauth2_client__["b" /* AuthInterceptor */].valueHeader != 'application/pdf') {
                __WEBPACK_IMPORTED_MODULE_4_ems_oauth2_client__["b" /* AuthInterceptor */].keyHeader = '';
                __WEBPACK_IMPORTED_MODULE_4_ems_oauth2_client__["b" /* AuthInterceptor */].valueHeader = '';
            }
            return response;
        });
    };
    ServicoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ems_oauth2_client__["f" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2__paginator_pager_component__["a" /* PagerComponent */]])
    ], ServicoService);
    return ServicoService;
}(__WEBPACK_IMPORTED_MODULE_1__util_service_util__["a" /* ServiceUtil */]));



/***/ }),

/***/ "./src/app/servico/servico.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Servico; });
var Servico = /** @class */ (function () {
    function Servico() {
    }
    return Servico;
}());



/***/ }),

/***/ "./src/app/sistemas/sistemas.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SistemasService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ems_oauth2_client__ = __webpack_require__("./node_modules/ems-oauth2-client/esm5/ems-oauth2-client.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paginator_pager_component__ = __webpack_require__("./src/app/paginator/pager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_service_util__ = __webpack_require__("./src/app/util/service.util.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SistemasService = /** @class */ (function (_super) {
    __extends(SistemasService, _super);
    function SistemasService(http, pagerComponent) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.pagerComponent = pagerComponent;
        _this.url = '/acesso/sistemas';
        return _this;
    }
    SistemasService.prototype.findByIdList = function (ids) {
        return this.http.get(this.url + '?filter={id__in:' + JSON.stringify(ids) + '}').map(function (res) {
            return res;
        });
    };
    SistemasService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ems_oauth2_client__["f" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2__paginator_pager_component__["a" /* PagerComponent */]])
    ], SistemasService);
    return SistemasService;
}(__WEBPACK_IMPORTED_MODULE_3__util_service_util__["a" /* ServiceUtil */]));



/***/ }),

/***/ "./src/app/template/left-sidebar/left-sidebar.component.css":
/***/ (function(module, exports) {

module.exports = "/* LeftSidebar's private CSS styles */\n.sidebar .user-info {\n  background: #003366 !important;\n  height: 145px !important;\n}\n"

/***/ }),

/***/ "./src/app/template/left-sidebar/left-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Left Sidebar -->\n<aside id=\"leftsidebar\" class=\"sidebar\">\n  <!-- User Info -->\n  <div class=\"user-info\">\n      <div class=\"image\">\n          <img src=\"assets/images/user.png\" width=\"48\" height=\"48\" alt=\"User\" />\n      </div>\n      <div class=\"info-container\">\n          <div class=\"name\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Nome</div>\n          <div class=\"email\">email@unb.br</div>\n          <div class=\"btn-group user-helper-dropdown\">\n              <i class=\"material-icons\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">keyboard_arrow_down</i>\n              <ul class=\"dropdown-menu pull-right\">\n                  <li><a href=\"javascript:void(0);\"><i class=\"material-icons\">person</i>Perfil</a></li>\n                  <li role=\"seperator\" class=\"divider\"></li>\n                  <li><a href=\"javascript:void(0);\"><i class=\"material-icons\">input</i>Sair</a></li>\n              </ul>\n          </div>\n      </div>\n  </div>\n  <!-- #User Info -->\n  <!-- Menu -->\n  <div class=\"menu\">\n      <ul class=\"list\">\n          <li class=\"header\">MENU PRINCIPAL</li>\n          <li class=\"active\">\n              <a href=\"index.html\">\n                  <i class=\"material-icons\">home</i>\n                  <span>Home</span>\n              </a>\n          </li>\n      </ul>\n  </div>\n  <!-- #Menu -->\n  <!-- Footer -->\n  <div class=\"legal\">\n      <div class=\"copyright\">\n          &copy; {{year}} <a href=\"javascript:void(window.open('http://www.cpd.unb.br', '_blank'));\">SSI | CPD | UnB</a>.\n      </div>\n      <div class=\"version\">\n          <b>Version: </b> 1.0.0\n      </div>\n  </div>\n  <!-- #Footer -->\n</aside>\n<!-- #END# Left Sidebar -->\n"

/***/ }),

/***/ "./src/app/template/left-sidebar/left-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeftSidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LeftSidebarComponent = /** @class */ (function () {
    function LeftSidebarComponent() {
    }
    LeftSidebarComponent.prototype.ngOnInit = function () {
        this.year = (new Date()).getFullYear();
    };
    LeftSidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'left-sidebar',
            template: __webpack_require__("./src/app/template/left-sidebar/left-sidebar.component.html"),
            styles: [__webpack_require__("./src/app/template/left-sidebar/left-sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LeftSidebarComponent);
    return LeftSidebarComponent;
}());



/***/ }),

/***/ "./src/app/template/right-sidebar/right-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Right Sidebar -->\n<aside id=\"rightsidebar\" class=\"right-sidebar\">\n    <ul class=\"nav nav-tabs tab-nav-right\" role=\"tablist\">\n        <li role=\"presentation\" class=\"active\"><a href=\"#skins\" data-toggle=\"tab\">SKINS</a></li>\n        <li role=\"presentation\"><a href=\"#settings\" data-toggle=\"tab\">SETTINGS</a></li>\n    </ul>\n    <div class=\"tab-content\">\n        <div role=\"tabpanel\" class=\"tab-pane fade in active in active\" id=\"skins\">\n            <ul class=\"demo-choose-skin\">\n                <li data-theme=\"red\" class=\"active\">\n                    <div class=\"red\"></div><span>Red</span></li>\n                <li data-theme=\"pink\">\n                    <div class=\"pink\"></div><span>Pink</span></li>\n                <li data-theme=\"purple\">\n                    <div class=\"purple\"></div><span>Purple</span></li>\n                <li data-theme=\"deep-purple\">\n                    <div class=\"deep-purple\"></div><span>Deep Purple</span></li>\n                <li data-theme=\"indigo\">\n                    <div class=\"indigo\"></div><span>Indigo</span></li>\n                <li data-theme=\"blue\">\n                    <div class=\"blue\"></div><span>Blue</span></li>\n                <li data-theme=\"light-blue\">\n                    <div class=\"light-blue\"></div><span>Light Blue</span></li>\n                <li data-theme=\"cyan\">\n                    <div class=\"cyan\"></div><span>Cyan</span></li>\n                <li data-theme=\"teal\">\n                    <div class=\"teal\"></div><span>Teal</span></li>\n                <li data-theme=\"green\">\n                    <div class=\"green\"></div><span>Green</span></li>\n                <li data-theme=\"light-green\">\n                    <div class=\"light-green\"></div><span>Light Green</span></li>\n                <li data-theme=\"lime\">\n                    <div class=\"lime\"></div><span>Lime</span></li>\n                <li data-theme=\"yellow\">\n                    <div class=\"yellow\"></div><span>Yellow</span></li>\n                <li data-theme=\"amber\">\n                    <div class=\"amber\"></div><span>Amber</span></li>\n                <li data-theme=\"orange\">\n                    <div class=\"orange\"></div><span>Orange</span></li>\n                <li data-theme=\"deep-orange\">\n                    <div class=\"deep-orange\"></div><span>Deep Orange</span></li>\n                <li data-theme=\"brown\">\n                    <div class=\"brown\"></div><span>Brown</span></li>\n                <li data-theme=\"grey\">\n                    <div class=\"grey\"></div><span>Grey</span></li>\n                <li data-theme=\"blue-grey\">\n                    <div class=\"blue-grey\"></div><span>Blue Grey</span></li>\n                <li data-theme=\"black\">\n                    <div class=\"black\"></div><span>Black</span></li>\n            </ul>\n        </div>\n        <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"settings\">\n            <div class=\"demo-settings\">\n                <p>GENERAL SETTINGS</p>\n                <ul class=\"setting-list\">\n                    <li><span>Report Panel Usage</span>\n                        <div class=\"switch\">\n                            <label>\n                                <input type=\"checkbox\" checked=\"checked\"><span class=\"lever\"></span></label>\n                        </div>\n                    </li>\n                    <li><span>Email Redirect</span>\n                        <div class=\"switch\">\n                            <label>\n                                <input type=\"checkbox\"><span class=\"lever\"></span></label>\n                        </div>\n                    </li>\n                </ul>\n                <p>SYSTEM SETTINGS</p>\n                <ul class=\"setting-list\">\n                    <li><span>Notifications</span>\n                        <div class=\"switch\">\n                            <label>\n                                <input type=\"checkbox\" checked=\"checked\"><span class=\"lever\"></span></label>\n                        </div>\n                    </li>\n                    <li><span>Auto Updates</span>\n                        <div class=\"switch\">\n                            <label>\n                                <input type=\"checkbox\" checked=\"checked\"><span class=\"lever\"></span></label>\n                        </div>\n                    </li>\n                </ul>\n                <p>ACCOUNT SETTINGS</p>\n                <ul class=\"setting-list\">\n                    <li><span>Offline</span>\n                        <div class=\"switch\">\n                            <label>\n                                <input type=\"checkbox\"><span class=\"lever\"></span></label>\n                        </div>\n                    </li>\n                    <li><span>Location Permission</span>\n                        <div class=\"switch\">\n                            <label>\n                                <input type=\"checkbox\" checked=\"checked\"><span class=\"lever\"></span></label>\n                        </div>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</aside>\n<!-- #END# Right Sidebar -->  "

/***/ }),

/***/ "./src/app/template/right-sidebar/right-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RightSidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RightSidebarComponent = /** @class */ (function () {
    function RightSidebarComponent() {
    }
    RightSidebarComponent.prototype.ngOnInit = function () {
    };
    RightSidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'right-sidebar',
            template: __webpack_require__("./src/app/template/right-sidebar/right-sidebar.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], RightSidebarComponent);
    return RightSidebarComponent;
}());



/***/ }),

/***/ "./src/app/template/topbar/topbar.component.css":
/***/ (function(module, exports) {

module.exports = "/* TopBar's private CSS styles */\n.navbar-brand > img {\n  float: left;\n  margin: 0 10px 0 0;\n  width: 40px;\n}\n"

/***/ }),

/***/ "./src/app/template/topbar/topbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Top Bar -->\n<nav class=\"navbar\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <a href=\"javascript:void(0);\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar-collapse\" aria-expanded=\"false\"></a>\n            <a href=\"javascript:void(0);\" class=\"bars\"></a>\n            <a class=\"navbar-brand\" href=\"index.html\">\n              <img src=\"assets/images/as_vert_NEG_TRANSP_flag.png\" />\n              {{ title | uppercase }}\n            </a>\n        </div>\n        <div class=\"collapse navbar-collapse\" id=\"navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <!-- Call Search -->\n                <li><a href=\"javascript:void(0);\" class=\"js-search\" data-close=\"true\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Buscar\"><i class=\"material-icons\">search</i></a></li>\n                <!-- #END# Call Search -->\n                <!-- Tasks -->\n                <li class=\"pull-right\"><a href=\"javascript:void(0);\" (click)=\"logout()\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Sair\"><i class=\"material-icons\">exit_to_app</i></a></li>\n            </ul>\n        </div>\n    </div>\n</nav>\n<!-- #Top Bar -->\n"

/***/ }),

/***/ "./src/app/template/topbar/topbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ems_oauth2_client__ = __webpack_require__("./node_modules/ems-oauth2-client/esm5/ems-oauth2-client.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopbarComponent = /** @class */ (function () {
    function TopbarComponent(authenticationService) {
        this.authenticationService = authenticationService;
        this.title = "ems-bus service manager";
    }
    TopbarComponent.prototype.ngOnInit = function () {
    };
    TopbarComponent.prototype.logout = function () {
        this.authenticationService.logout();
    };
    TopbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'topbar',
            template: __webpack_require__("./src/app/template/topbar/topbar.component.html"),
            styles: [__webpack_require__("./src/app/template/topbar/topbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ems_oauth2_client__["c" /* AuthenticationService */]])
    ], TopbarComponent);
    return TopbarComponent;
}());



/***/ }),

/***/ "./src/app/util/safe-html.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeHtmlPipe = /** @class */ (function () {
    function SafeHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeHtmlPipe.prototype.transform = function (content) {
        return this.sanitizer.bypassSecurityTrustHtml(content);
    };
    SafeHtmlPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'safe_html' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());



/***/ }),

/***/ "./src/app/util/service.util.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceUtil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");



var ServiceUtil = /** @class */ (function () {
    function ServiceUtil() {
    }
    // extrai lista da resposta http
    ServiceUtil.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    // manipula erros da resposta http
    ServiceUtil.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* Response */]) {
            var body = error.json() || '';
            var err = body.message || JSON.stringify(body);
            errMsg = err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        if (errMsg == "{\"isTrusted\":true}") {
            errMsg = "ERRO: Servidor de Dados Indisponível.";
        }
        else if (errMsg == "{\"error\":\"eunavailable_service\"}") {
            errMsg = "ERRO: Servidor de Dados Indisponível";
        }
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(errMsg);
    };
    return ServiceUtil;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map