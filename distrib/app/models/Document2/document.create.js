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
var document_model_1 = require("./document.model");
var modalwindows_component_1 = require("../../utils/modalwindows/modalwindows.component");
var DocumentCreateForm = (function () {
    function DocumentCreateForm() {
        this.created = new core_1.EventEmitter();
    }
    DocumentCreateForm.prototype.createDocument = function (nomDocumentEl, fichierDocumentEl) {
        var newDocument = new document_model_1.Document(null, nomDocumentEl.value, fichierDocumentEl.value, null, null);
        this.created.emit(newDocument);
    };
    DocumentCreateForm.prototype.resetCreateForm = function () {
        this.creationError = "";
        this.createForm.nativeElement.reset();
    };
    DocumentCreateForm.prototype.closeCreateForm = function () {
        this.resetCreateForm();
        this.modalwindows.hide();
    };
    DocumentCreateForm.prototype.showCreateForm = function () {
        this.modalwindows.show();
    };
    return DocumentCreateForm;
}());
__decorate([
    core_1.Input('creationError'),
    __metadata("design:type", String)
], DocumentCreateForm.prototype, "creationError", void 0);
__decorate([
    core_1.ViewChild('form'),
    __metadata("design:type", core_1.ElementRef)
], DocumentCreateForm.prototype, "createForm", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DocumentCreateForm.prototype, "created", void 0);
__decorate([
    core_1.ViewChild(modalwindows_component_1.ModalWindows),
    __metadata("design:type", modalwindows_component_1.ModalWindows)
], DocumentCreateForm.prototype, "modalwindows", void 0);
DocumentCreateForm = __decorate([
    core_1.Component({
        selector: "document-form",
        templateUrl: "app/models/Document2/document.create.html",
    })
], DocumentCreateForm);
exports.DocumentCreateForm = DocumentCreateForm;
//# sourceMappingURL=document.create.js.map