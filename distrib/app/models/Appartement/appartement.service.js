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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var logger_service_1 = require("../../utils/logger.service");
var AppartementService = (function () {
    function AppartementService(http, _logger) {
        this.http = http;
        this._logger = _logger;
        this.baseUrl = "http://localhost:8082/appartmanager/appartement";
        //private _appartements:Array<Appartement> = [
        //  new Appartement(1, "Cergy", 10, 1, true, false),
        //  new Appartement(2, "Grigny", 120, 1, false, false),
        //  new Appartement(3, "Montigny", 100, 0, true, true),
        //]
        this._nextID = 0;
        this._maxAppartements = 10;
    }
    AppartementService.prototype.getAll = function () {
        var _appartements = this.http
            .get("" + this.baseUrl, { headers: this._getHeaders() })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            console.log(error);
            return Observable_1.Observable.throw(error);
        });
        //.map(this.mapAppartements);
        return _appartements;
    };
    AppartementService.prototype._getHeaders = function () {
        var headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    };
    AppartementService.prototype.getById = function (appartementId) {
        var _appartements = this.http
            .get(this.baseUrl + "/" + appartementId, { headers: this._getHeaders() })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            console.log(error);
            return Observable_1.Observable.throw(error);
        });
        //.map(this.mapAppartements);
        return _appartements;
    };
    AppartementService.prototype.createAppartement = function (newAppartement) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this._appartements.length >= _this._maxAppartements) {
                reject("Maximum number of appartements reached");
                return;
            }
            if (_this._logger) {
                _this._logger.log("Appartement create: " + newAppartement.getNom());
            }
            _this._appartements.push(newAppartement);
            resolve(newAppartement);
        });
    };
    AppartementService.prototype.removeAppartement = function (index) {
        var appartement = this._appartements[index];
        if (this._logger) {
            this._logger.log("Appartement remove id: " + index);
        }
        this._appartements.splice(index, 1);
        return Promise.resolve(appartement);
    };
    return AppartementService;
}());
AppartementService = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Optional()),
    __metadata("design:paramtypes", [http_1.Http,
        logger_service_1.LoggerService])
], AppartementService);
exports.AppartementService = AppartementService;
exports.APPARTMENT_SERVICES_PROVIDERS = [AppartementService, logger_service_1.LoggerService];
//# sourceMappingURL=appartement.service.js.map