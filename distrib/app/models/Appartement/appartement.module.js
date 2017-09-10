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
var appartement_component_1 = require("./appartement.component");
var appartement_list_1 = require("./appartement.list");
var appartement_create_1 = require("./appartement.create");
var appartement_details_1 = require("./appartement.details");
var modalwindows_module_1 = require("../../utils/modalwindows/modalwindows.module");
var appartement_routing_1 = require("./appartement.routing");
var appartement_service_1 = require("./appartement.service");
var document_module_1 = require("../Document/document.module");
var AppartementModule = (function () {
    function AppartementModule() {
    }
    return AppartementModule;
}());
AppartementModule = __decorate([
    core_1.NgModule({
        imports: [
            appartement_routing_1.AppartementRoutingModule,
            common_1.CommonModule,
            http_1.HttpModule,
            document_module_1.DocumentModule,
            modalwindows_module_1.ModalWindowsModule,
            platform_browser_1.BrowserModule
        ],
        declarations: [
            appartement_component_1.AppartementComponent,
            appartement_list_1.AppartementList,
            appartement_create_1.AppartementCreateForm,
            appartement_details_1.AppartementDetails,
        ],
        providers: [
            appartement_service_1.APPARTMENT_SERVICES_PROVIDERS,
        ],
    })
], AppartementModule);
exports.AppartementModule = AppartementModule;
//# sourceMappingURL=appartement.module.js.map