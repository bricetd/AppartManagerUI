"use strict";
var Incident = (function () {
    function Incident(id, libelle, description, justification, date, date_fin, documents) {
        this.date = date;
        this.date_fin = date_fin;
        this.description = description;
        this.id = id;
        this.libelle = libelle;
        this.justification = justification;
        this.documents = documents;
    }
    Incident.prototype.getId = function () {
        return this.id;
    };
    Incident.prototype.getDescription = function () {
        return this.description;
    };
    Incident.prototype.getLibelle = function () {
        return this.libelle;
    };
    return Incident;
}());
exports.Incident = Incident;
//# sourceMappingURL=incident.model.js.map