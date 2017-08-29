"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var document_component_1 = require("./document.component");
var list_component_1 = require("./list.component");
var create_component_1 = require("./create.component");
var details_component_1 = require("./details.component");
exports.routes = [
    { path: 'documents', component: document_component_1.DocumentComponent,
        children: [
            //    { path: '', redirectTo: 'list', pathMatch:'full' },
            { path: 'list', component: list_component_1.ListComponent },
            { path: 'create', component: create_component_1.CreateComponent }
        ]
    },
    { path: 'documents/:id', component: details_component_1.DetailsComponent }
];
var DocumentRoutingModule = (function () {
    function DocumentRoutingModule() {
    }
    return DocumentRoutingModule;
}());
DocumentRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(exports.routes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], DocumentRoutingModule);
exports.DocumentRoutingModule = DocumentRoutingModule;
//# sourceMappingURL=document.routes.js.map