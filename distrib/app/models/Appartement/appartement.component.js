"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppartementComponent = (function () {
    function AppartementComponent() {
    }
    return AppartementComponent;
}());
AppartementComponent = __decorate([
    core_1.Component({
        //selector: 'appartement',
        //templateUrl: "app/models/Appartement/appartement.component.html",
        //styleUrls: ["app/models/Appartement/appartement.component.css"],
        template: "\n      <h2>Liste de vos appartements</h2>\n      <p>\n        <a routerLink=\"list\">Liste d'appartements</a>\n        <a routerLink=\"create\">Ajouter un appartement</a>\n      </p>\n      <router-outlet></router-outlet>"
    })
], AppartementComponent);
exports.AppartementComponent = AppartementComponent;
//# sourceMappingURL=appartement.component.js.map