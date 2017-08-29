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
var incident_model_1 = require("./incident.model");
var logger_service_1 = require("../../utils/logger.service");
var document_model_1 = require("../Document/document.model");
var IncidentService = (function () {
    function IncidentService(_logger) {
        this._logger = _logger;
        this._incidents = [
            new incident_model_1.Incident(1, "mon libelle", "ma description", "ma justification", new Date(), new Date(), [new document_model_1.Document(1, "Contrat1", "/home/local/contrat1.incident", "", "")]),
            new incident_model_1.Incident(2, "mon libelle2", "ma description2", "ma justification2", new Date(), new Date(), [new document_model_1.Document(2, "Contrat2", "/home/local/contrat2.incident", "", "")]),
            new incident_model_1.Incident(3, "mon libelle3", "ma description3", "ma justification3", new Date(), new Date(), [new document_model_1.Document(3, "Contrat3", "/home/local/contrat3.incident", "", "")])
        ];
        this._nextID = 0;
        this._maxIncidents = 3;
    }
    IncidentService.prototype.getAll = function () {
        return Promise.resolve(this._incidents);
    };
    IncidentService.prototype.getById = function (incidentId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var foundIncident = _this._incidents.find(function (incident) { return incident.getId() == incidentId; });
            if (!foundIncident) {
                reject("No incident found with this ID.");
            }
            else {
                resolve(foundIncident);
            }
        });
    };
    IncidentService.prototype.createIncident = function (newIncident) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this._incidents.length >= _this._maxIncidents) {
                reject("Maximum number of incidents reached");
                return;
            }
            if (_this._logger) {
                _this._logger.log("Incident create: " + newIncident.getLibelle());
            }
            _this._incidents.push(newIncident);
            resolve(newIncident);
        });
    };
    IncidentService.prototype.removeIncident = function (index) {
        var incident = this._incidents[index];
        if (this._logger) {
            this._logger.log("Incident remove id: " + index);
        }
        this._incidents.splice(index, 1);
        return Promise.resolve(incident);
    };
    return IncidentService;
}());
IncidentService = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Optional()),
    __metadata("design:paramtypes", [logger_service_1.LoggerService])
], IncidentService);
exports.IncidentService = IncidentService;
exports.INCIDENT_SERVICES_PROVIDERS = [IncidentService, logger_service_1.LoggerService];
//# sourceMappingURL=incident.service.js.map