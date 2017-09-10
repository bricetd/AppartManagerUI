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
var appartement_create_1 = require("./appartement.create");
var AppartementComponent = (function () {
    function AppartementComponent(_appartementService, _router, _route) {
        this._appartementService = _appartementService;
        this._router = _router;
        this._route = _route;
        //Listing
        this._appartements = [];
        this._creationError = "";
        this._doRefresh();
    }
    AppartementComponent.prototype._createAppartement = function (newAppartement) {
        var _this = this;
        this._appartementService.createAppartement(newAppartement).then(function (appartement) {
            console.log(appartement);
            _this._creationError = "";
            _this._appartCreateForm.closeCreateForm();
            _this._doRefresh();
        })
            .catch(function (error) {
            _this._creationError = error;
        });
    };
    AppartementComponent.prototype._removeAppartement = function (index) {
        var _this = this;
        this._appartementService.removeAppartement(index).then(function (appartement) {
            console.log(appartement);
            _this._doRefresh();
        });
    };
    AppartementComponent.prototype._showAppartementDetails = function (appartement) {
        this._router.navigate(['./' + appartement.id], { relativeTo: this._route });
    };
    AppartementComponent.prototype._doRefresh = function () {
        var _this = this;
        this._appartementService.getAll()
            .subscribe(function (appartements) { return _this._appartements = appartements; });
    };
    AppartementComponent.prototype._showCreateForm = function () {
        this._appartCreateForm.showCreateForm();
    };
    return AppartementComponent;
}());
__decorate([
    core_1.ViewChild(appartement_create_1.AppartementCreateForm),
    __metadata("design:type", appartement_create_1.AppartementCreateForm)
], AppartementComponent.prototype, "_appartCreateForm", void 0);
AppartementComponent = __decorate([
    core_1.Component({
        templateUrl: "app/models/Appartement/appartement.component.html",
        styleUrls: ["app/models/Appartement/appartement.component.css"]
    }),
    __metadata("design:paramtypes", [appartement_service_1.AppartementService,
        router_1.Router,
        router_1.ActivatedRoute])
], AppartementComponent);
exports.AppartementComponent = AppartementComponent;
//# sourceMappingURL=appartement.component.js.map