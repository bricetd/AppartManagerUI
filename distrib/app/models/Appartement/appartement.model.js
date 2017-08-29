"use strict";
var Appartement = (function () {
    function Appartement(id, nom, surface, etage, hasParking, hasCave) {
        this.id = id;
        this.nom = nom;
        this.surface = surface;
        this.etage = etage;
        this.hasParking = hasParking;
        this.hasCave = hasCave;
    }
    Appartement.prototype.getId = function () {
        return this.id;
    };
    Appartement.prototype.getNom = function () {
        return this.nom;
    };
    Appartement.prototype.getSurface = function () {
        return this.surface;
    };
    Appartement.prototype.getEtage = function () {
        return this.etage;
    };
    Appartement.prototype.getHasParking = function () {
        return this.hasParking;
    };
    Appartement.prototype.getHasCave = function () {
        return this.hasCave;
    };
    return Appartement;
}());
exports.Appartement = Appartement;
//# sourceMappingURL=appartement.model.js.map