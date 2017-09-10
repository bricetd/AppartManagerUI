"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_1 = require("./app.routing");
var home_component_1 = require("./home/home.component");
//import {ModalWindows} from './utils/modalWindows'
//import {DocumentComponent} from './models/Document/document.component'
var app_component_1 = require("./app.component");
var document_module_1 = require("./models/Document/document.module");
var appartement_module_1 = require("./models/Appartement/appartement.module");
var modalwindows_module_1 = require("./utils/modalwindows/modalwindows.module");
//import { Document } from './models/Document/document.model';
//import {DocumentsList} from './models/Document/documents_list.component';
//import {DocumentForm} from './models/Document/document_form.component'
//import {DOCUMENT_SERVICES_PROVIDERS} from './models/Document/document.services'
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            document_module_1.DocumentModule,
            appartement_module_1.AppartementModule,
            modalwindows_module_1.ModalWindowsModule,
            app_routing_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
        ],
        exports: [],
        //providers: [DocumentService],
        //providers: [
        //                DOCUMENT_SERVICES_PROVIDERS // DOCUMENT_SERVICES_PROVIDERS is defined in document.services.ts
        //            ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map