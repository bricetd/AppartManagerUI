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
var document_component_1 = require("./document.component");
var list_component_1 = require("./list.component");
var create_component_1 = require("./create.component");
var details_component_1 = require("./details.component");
var document_routes_1 = require("./document.routes");
//import { Document } from './document.model';
var documents_list_component_1 = require("./documents_list.component");
var document_form_component_1 = require("./document_form.component");
var document_services_1 = require("./document.services");
var DocumentModule = (function () {
    function DocumentModule() {
    }
    return DocumentModule;
}());
DocumentModule = __decorate([
    core_1.NgModule({
        imports: [
            document_routes_1.DocumentRoutingModule,
            common_1.CommonModule,
            platform_browser_1.BrowserModule
        ],
        declarations: [
            list_component_1.ListComponent,
            create_component_1.CreateComponent,
            document_component_1.DocumentComponent,
            details_component_1.DetailsComponent,
            documents_list_component_1.DocumentsList,
            document_form_component_1.DocumentForm,
        ],
        providers: [
            document_services_1.DOCUMENT_SERVICES_PROVIDERS // DOCUMENT_SERVICES_PROVIDERS is defined in document.services.ts
        ],
    })
], DocumentModule);
exports.DocumentModule = DocumentModule;
//# sourceMappingURL=document.module.js.map