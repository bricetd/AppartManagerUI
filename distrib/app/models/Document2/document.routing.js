"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
//import {AppartementComponent} from './appartement.component'
//import {AppartementDetails} from './appartement.details'
exports.routes = [];
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
//# sourceMappingURL=document.routing.js.map