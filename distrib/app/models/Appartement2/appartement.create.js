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
var appartement_model_1 = require("./appartement.model");
var modalwindows_component_1 = require("../../utils/modalwindows/modalwindows.component");
var AppartementCreateForm = (function () {
    function AppartementCreateForm() {
        this.created = new core_1.EventEmitter();
    }
    AppartementCreateForm.prototype.createAppartement = function (nomEl, surfaceEl, etageEl, hasParkingEl, hasCaveEl) {
        var newAppartement = new appartement_model_1.Appartement(null, nomEl.value, +surfaceEl.value, +etageEl.value, hasParkingEl.checked, hasCaveEl.checked);
        this.created.emit(newAppartement);
    };
    AppartementCreateForm.prototype.resetCreateForm = function () {
        this.createForm.nativeElement.reset();
    };
    AppartementCreateForm.prototype.closeCreateForm = function () {
        this.resetCreateForm();
        this.modalwindows.hide();
    };
    AppartementCreateForm.prototype.showCreateForm = function () {
        this.modalwindows.show();
    };
    return AppartementCreateForm;
}());
__decorate([
    core_1.Input('creationError'),
    __metadata("design:type", String)
], AppartementCreateForm.prototype, "creationError", void 0);
__decorate([
    core_1.ViewChild('form'),
    __metadata("design:type", core_1.ElementRef)
], AppartementCreateForm.prototype, "createForm", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AppartementCreateForm.prototype, "created", void 0);
__decorate([
    core_1.ViewChild(modalwindows_component_1.ModalWindows),
    __metadata("design:type", modalwindows_component_1.ModalWindows)
], AppartementCreateForm.prototype, "modalwindows", void 0);
AppartementCreateForm = __decorate([
    core_1.Component({
        selector: "appartement-form",
        templateUrl: "app/models/Appartement2/appartement.create.html",
        styleUrls: ["app/models/Appartement2/appartement.create.css"]
    })
], AppartementCreateForm);
exports.AppartementCreateForm = AppartementCreateForm;
//# sourceMappingURL=appartement.create.js.map