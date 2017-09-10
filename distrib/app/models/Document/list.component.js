"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var document_services_1 = require("./document.services");
var ListComponent = (function () {
    function ListComponent(docService, _router, _route) {
        var _this = this;
        this._router = _router;
        this._route = _route;
        this._docs = [];
        this._docService = docService;
        var promise = this._docService.getAll();
        promise.then(function (documents) { return _this._docs = documents; });
    }
    ListComponent.prototype._removeDocument = function (index) {
        this._docService.removeDocument(index).then(function (document) { return console.log(document); });
    };
    ListComponent.prototype._showDocumentDetails = function (document) {
        this._router.navigate(['../' + document.getId()], { relativeTo: this._route });
    };
    return ListComponent;
}());
ListComponent = __decorate([
    core_1.Component({
        templateUrl: "app/models/Document/list.component.html",
        styleUrls: ["app/models/Document/document.component.css"],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof document_services_1.DocumentService !== "undefined" && document_services_1.DocumentService) === "function" && _a || Object, router_1.Router,
        router_1.ActivatedRoute])
], ListComponent);
exports.ListComponent = ListComponent;
var _a;
//# sourceMappingURL=list.component.js.map