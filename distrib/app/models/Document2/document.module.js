"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var document_component_1 = require("./document.component");
var document_list_1 = require("./document.list");
var document_create_1 = require("./document.create");
var modalwindows_module_1 = require("../../utils/modalwindows/modalwindows.module");
//import {DocumentDetails} from './document.details'
var document_routing_1 = require("./document.routing");
var document_service_1 = require("./document.service");
var DocumentModule = (function () {
    function DocumentModule() {
    }
    return DocumentModule;
}());
DocumentModule = __decorate([
    core_1.NgModule({
        imports: [
            document_routing_1.DocumentRoutingModule,
            common_1.CommonModule,
            http_1.HttpModule,
            modalwindows_module_1.ModalWindowsModule,
            platform_browser_1.BrowserModule,
        ],
        declarations: [
            document_component_1.DocumentComponent,
            document_list_1.DocumentList,
            document_create_1.DocumentCreateForm,
        ],
        exports: [
            document_component_1.DocumentComponent,
        ],
        providers: [
            document_service_1.DOCUMENT_SERVICES_PROVIDERS
        ],
    })
], DocumentModule);
exports.DocumentModule = DocumentModule;
//# sourceMappingURL=document.module.js.map