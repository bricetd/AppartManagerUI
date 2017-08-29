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
var AppartementForm = (function () {
    function AppartementForm() {
        this.created = new core_1.EventEmitter();
    }
    AppartementForm.prototype.createAppartement = function (nomEl, surfaceEl, etageEl, hasParkingEl, hasCaveEl) {
        var newAppartement = new appartement_model_1.Appartement(1, nomEl.value, +surfaceEl.value, +etageEl.value, true, false);
        this.created.emit(newAppartement);
    };
    AppartementForm.prototype.resetCreateForm = function () {
        this.createForm.nativeElement.reset();
    };
    return AppartementForm;
}());
__decorate([
    core_1.Input('creationError'),
    __metadata("design:type", String)
], AppartementForm.prototype, "creationError", void 0);
__decorate([
    core_1.ViewChild('form'),
    __metadata("design:type", core_1.ElementRef)
], AppartementForm.prototype, "createForm", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AppartementForm.prototype, "created", void 0);
AppartementForm = __decorate([
    core_1.Component({
        selector: "appartement-form",
        templateUrl: "app/models/Appartement/appartement.form.html",
        styleUrls: ["app/models/Appartement/appartement.form.css"]
    })
], AppartementForm);
exports.AppartementForm = AppartementForm;
//# sourceMappingURL=appartement.form.js.map