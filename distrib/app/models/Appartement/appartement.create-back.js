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
var appartement_create_front_1 = require("./appartement.create-front");
var AppartementCreateBack = (function () {
    function AppartementCreateBack(_appartementService, _router, _route) {
        this._appartementService = _appartementService;
        this._router = _router;
        this._route = _route;
        this._creationError = "";
        this._maxDocs = 3;
    }
    AppartementCreateBack.prototype._createAppartement = function (newAppartement) {
        var _this = this;
        this._appartementService.createAppartement(newAppartement).then(function (appartement) {
            console.log(appartement);
            _this._creationError = "";
            _this._appartCreateFront.closeCreateForm();
            _this._router.navigate(['../list'], { relativeTo: _this._route });
        })
            .catch(function (error) {
            _this._creationError = error;
        });
    };
    return AppartementCreateBack;
}());
__decorate([
    core_1.ViewChild(appartement_create_front_1.AppartementCreateFront),
    __metadata("design:type", appartement_create_front_1.AppartementCreateFront)
], AppartementCreateBack.prototype, "_appartCreateFront", void 0);
AppartementCreateBack = __decorate([
    core_1.Component({
        templateUrl: "app/models/Appartement/appartement.create-back.html",
    }),
    __metadata("design:paramtypes", [appartement_service_1.AppartementService,
        router_1.Router,
        router_1.ActivatedRoute])
], AppartementCreateBack);
exports.AppartementCreateBack = AppartementCreateBack;
//# sourceMappingURL=appartement.create-back.js.map