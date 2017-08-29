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
var DocumentForm = (function () {
    function DocumentForm() {
        this.created = new core_1.EventEmitter();
    }
    DocumentForm.prototype.createDocument = function (nomEl, fichierEl) {
        var newDocument = new document_model_1.Document(-1, nomEl.value, fichierEl.value, "", "");
        this.created.emit(newDocument);
    };
    DocumentForm.prototype.resetCreateForm = function () {
        this.createForm.nativeElement.reset();
    };
    return DocumentForm;
}());
__decorate([
    core_1.Input('creationError'),
    __metadata("design:type", String)
], DocumentForm.prototype, "creationError", void 0);
__decorate([
    core_1.ViewChild('form'),
    __metadata("design:type", core_1.ElementRef)
], DocumentForm.prototype, "createForm", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DocumentForm.prototype, "created", void 0);
DocumentForm = __decorate([
    core_1.Component({
        selector: "document-form",
        templateUrl: "app/models/Document/document_form.component.html",
        styleUrls: ["app/models/Document/document_form.component.css"]
    })
], DocumentForm);
exports.DocumentForm = DocumentForm;
//# sourceMappingURL=document_form.component.js.map