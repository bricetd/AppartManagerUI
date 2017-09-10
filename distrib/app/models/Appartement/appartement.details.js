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
//import {Document} from '../Document2/document.model'
//import {DocumentService} from '../Document2/document.service'
var AppartementDetails = (function () {
    function AppartementDetails(_route, _appartementService) {
        this._route = _route;
        this._appartementService = _appartementService;
        this._error = "";
        this._documentActionCode = '0';
        //  private _documentService:DocumentService){
    }
    AppartementDetails.prototype.ngOnInit = function () {
        var _this = this;
        this._paramSub = this._route.params.subscribe(function (params) {
            var id = +params['id'];
            _this._appartement = null;
            _this._error = "";
            _this._appartementService.getById(id)
                .subscribe(function (appartement) { return _this._appartement = appartement; }, function (error) { return _this._error = error; });
            //        this._documentService.getByAppartementId(id)
            //          .subscribe(documents =>  this._documents = documents,
            //            error => this._error = error)
        });
    };
    AppartementDetails.prototype.ngOnDestroy = function () {
        this._paramSub.unsubscribe();
    };
    return AppartementDetails;
}());
AppartementDetails = __decorate([
    core_1.Component({
        templateUrl: "app/models/Appartement/appartement.details.html",
        styleUrls: ["app/models/Appartement/appartement.details.css"],
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        appartement_service_1.AppartementService])
], AppartementDetails);
exports.AppartementDetails = AppartementDetails;
//# sourceMappingURL=appartement.details.js.map