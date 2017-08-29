"use strict";
var Document = (function () {
    function Document(id, nom, fichier, date_ajout, date_modification, tags) {
        this.id = id;
        this.nom = nom;
        this.fichier = fichier;
        this.date_ajout = date_ajout;
        this.date_modification = date_modification;
        this.tags = tags;
        if (!tags) {
            tags = ["Contrat", "Collocation"];
        }
    }
    return Document;
}());
exports.Document = Document;
//# sourceMappingURL=document.model.js.map