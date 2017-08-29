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
var appartement_service_1 = require("./appartement.service");
var AppartementListBack = (function () {
    function AppartementListBack(_appartementService, _router, _route) {
        var _this = this;
        this._appartementService = _appartementService;
        this._router = _router;
        this._route = _route;
        this._appartements = [];
        this._appartementService.getAll()
            .subscribe(function (appartements) { return _this._appartements = appartements; });
    }
    AppartementListBack.prototype._removeAppartement = function (index) {
        this._appartementService.removeAppartement(index).then(function (appartement) { return console.log(appartement); });
    };
    AppartementListBack.prototype._showAppartementDetails = function (appartement) {
        this._router.navigate(['../' + appartement.id], { relativeTo: this._route });
    };
    return AppartementListBack;
}());
AppartementListBack = __decorate([
    core_1.Component({
        templateUrl: "app/models/Appartement/appartement.list-back.html",
    }),
    __metadata("design:paramtypes", [appartement_service_1.AppartementService,
        router_1.Router,
        router_1.ActivatedRoute])
], AppartementListBack);
exports.AppartementListBack = AppartementListBack;
//# sourceMappingURL=appartement.list-back.js.map