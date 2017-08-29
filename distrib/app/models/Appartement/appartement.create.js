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
var appartement_service_1 = require("./appartement.service");
//import {DocumentForm} from './document_form.component'
var CreateComponent = (function () {
    function CreateComponent(_appartementService) {
        this._appartementService = _appartementService;
        //@ViewChild(DocumentForm) _documentForm:DocumentForm;
        this._creationError = "";
        this._maxDocs = 3;
    }
    CreateComponent.prototype.createDocument = function (newAppartement) {
        var _this = this;
        this._appartementService.createAppartement(newAppartement).then(function (appartement) {
            console.log(appartement);
            _this._creationError = "";
            //this._documentForm.resetCreateForm()
        })
            .catch(function (error) {
            _this._creationError = error;
        });
    };
    return CreateComponent;
}());
CreateComponent = __decorate([
    core_1.Component({
        templateUrl: "app/models/Document/create.component.html",
        styleUrls: ["app/models/Document/document.component.css"],
    }),
    __metadata("design:paramtypes", [appartement_service_1.AppartementService])
], CreateComponent);
exports.CreateComponent = CreateComponent;
//# sourceMappingURL=appartement.create.js.map