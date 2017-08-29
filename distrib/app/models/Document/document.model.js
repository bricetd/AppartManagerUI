"use strict";
var Document = (function () {
    function Document(id, nom, fichier, date_ajout, date_modification) {
        this.id = id;
        this.date_ajout = date_ajout;
        this.nom = nom;
        this.fichier = fichier;
        this.date_modification = date_modification;
    }
    Document.prototype.getNom = function () {
        return this.nom;
    };
    Document.prototype.getId = function () {
        return this.id;
    };
    return Document;
}());
exports.Document = Document;
//# sourceMappingURL=document.model.js.map