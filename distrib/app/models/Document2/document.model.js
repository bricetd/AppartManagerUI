"use strict";
var Document = (function () {
    function Document(id, nom, fichier, date_ajout, date_modification) {
        this.id = id;
        this.nom = nom;
        this.fichier = fichier;
        this.date_ajout = date_ajout;
        this.date_modification = date_modification;
        //, public tags:Array<string>){
        //  if(!tags){
        //    tags = ["Contrat", "Collocation"];
        //  }
    }
    return Document;
}());
exports.Document = Document;
//# sourceMappingURL=document.model.js.map