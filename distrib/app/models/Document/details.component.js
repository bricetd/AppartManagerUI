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
var DetailsComponent = (function () {
    function DetailsComponent(_route, _docService) {
        this._route = _route;
        this._docService = _docService;
        this._error = "";
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._paramSub = this._route.params.subscribe(function (params) {
            var id = +params['id'];
            _this._document = null;
            _this._error = "";
            _this._docService.getById(id)
                .then(function (document) { return _this._document = document; })
                .catch(function (error) { return _this._error = error; });
        });
    };
    DetailsComponent.prototype.ngOnDestroy = function () {
        this._paramSub.unsubscribe();
    };
    return DetailsComponent;
}());
DetailsComponent = __decorate([
    core_1.Component({
        templateUrl: "app/models/Document/details.component.html",
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, typeof (_a = typeof document_services_1.DocumentService !== "undefined" && document_services_1.DocumentService) === "function" && _a || Object])
], DetailsComponent);
exports.DetailsComponent = DetailsComponent;
var _a;
//# sourceMappingURL=details.component.js.map