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
var document_services_1 = require("./document.services");
var document_form_component_1 = require("./document_form.component");
var CreateComponent = (function () {
    function CreateComponent(docService) {
        this._creationError = "";
        this._maxDocs = 3;
        this._docService = docService;
    }
    CreateComponent.prototype.createDocument = function (newDoc) {
        var _this = this;
        this._docService.createDocument(newDoc).then(function (document) {
            console.log(document);
            _this._creationError = "";
            _this._documentForm.resetCreateForm();
        })
            .catch(function (error) {
            _this._creationError = error;
        });
    };
    return CreateComponent;
}());
__decorate([
    core_1.ViewChild(document_form_component_1.DocumentForm),
    __metadata("design:type", document_form_component_1.DocumentForm)
], CreateComponent.prototype, "_documentForm", void 0);
CreateComponent = __decorate([
    core_1.Component({
        templateUrl: "app/models/Document/create.component.html",
        styleUrls: ["app/models/Document/document.component.css"],
    }),
    __metadata("design:paramtypes", [document_services_1.DocumentService])
], CreateComponent);
exports.CreateComponent = CreateComponent;
//# sourceMappingURL=create.component.js.map