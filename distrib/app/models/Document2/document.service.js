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
var document_model_1 = require("./document.model");
var logger_service_1 = require("../../utils/logger.service");
var DocumentService = (function () {
    function DocumentService(http, _logger) {
        this.http = http;
        this._logger = _logger;
        this.baseUrl = "http://localhost:8082/appartmanager/appartement";
        this._docs = [
            new document_model_1.Document(1, "Contrat", "/home/local/contrat.doc", new Date(), new Date(), ["contrat", "salarie"]),
            new document_model_1.Document(2, "Contrat2", "/home/local/contrat2.doc", new Date(), new Date(), ["contrat", "etudiant"]),
            new document_model_1.Document(3, "Contrat3", "/home/local/contrat3.doc", new Date(), new Date(), ["contrat", "collocation"])
        ];
        this._nextID = 0;
        this._maxDocs = 10;
    }
    DocumentService.prototype.getAll = function () {
        return Promise.resolve(this._docs);
    };
    DocumentService.prototype.getById = function (docId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var foundDoc = _this._docs.find(function (doc) { return doc.id == docId; });
            if (!foundDoc) {
                reject("No document found with this ID.");
            }
            else {
                resolve(foundDoc);
            }
        });
    };
    DocumentService.prototype.createDocument = function (newDoc) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this._docs.length >= _this._maxDocs) {
                reject("Maximum number of documents reached");
                return;
            }
            if (_this._logger) {
                _this._logger.log("Document create: " + newDoc.nom);
            }
            _this._docs.push(newDoc);
            resolve(newDoc);
        });
    };
    DocumentService.prototype.removeDocument = function (index) {
        var document = this._docs[index];
        if (this._logger) {
            this._logger.log("Document remove id: " + index);
        }
        this._docs.splice(index, 1);
        return Promise.resolve(document);
    };
    DocumentService.prototype.getByAppartementId = function (appartementId) {
        var _documents = this.http
            .get(this.baseUrl + "/" + appartementId + "/documents", { headers: this._getHeaders() })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            console.log(error);
            return Observable_1.Observable.throw(error);
        });
        //.map(this.mapAppartements);
        return _documents;
    };
    DocumentService.prototype._getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        return headers;
    };
    return DocumentService;
}());
DocumentService = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Optional()),
    __metadata("design:paramtypes", [http_1.Http,
        logger_service_1.LoggerService])
], DocumentService);
exports.DocumentService = DocumentService;
exports.DOCUMENT_SERVICES_PROVIDERS = [DocumentService, logger_service_1.LoggerService];
//# sourceMappingURL=document.service.js.map