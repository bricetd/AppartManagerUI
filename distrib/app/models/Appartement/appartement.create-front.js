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
var modalWindows_1 = require("../../utils/modalWindows");
var AppartementCreateFront = (function () {
    function AppartementCreateFront() {
        this.created = new core_1.EventEmitter();
    }
    AppartementCreateFront.prototype.createAppartement = function (nomEl, surfaceEl, etageEl, hasParkingEl, hasCaveEl) {
        var newAppartement = new appartement_model_1.Appartement(1, nomEl.value, +surfaceEl.value, +etageEl.value, hasParkingEl.value, hasCaveEl.value);
        this.created.emit(newAppartement);
    };
    AppartementCreateFront.prototype.resetCreateForm = function () {
        this.createForm.nativeElement.reset();
    };
    AppartementCreateFront.prototype.ngAfterViewInit = function () {
        this.modalwindows.show();
    };
    return AppartementCreateFront;
}());
__decorate([
    core_1.Input('creationError'),
    __metadata("design:type", String)
], AppartementCreateFront.prototype, "creationError", void 0);
__decorate([
    core_1.ViewChild('form'),
    __metadata("design:type", core_1.ElementRef)
], AppartementCreateFront.prototype, "createForm", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AppartementCreateFront.prototype, "created", void 0);
__decorate([
    core_1.ViewChild(modalWindows_1.ModalWindows),
    __metadata("design:type", modalWindows_1.ModalWindows)
], AppartementCreateFront.prototype, "modalwindows", void 0);
AppartementCreateFront = __decorate([
    core_1.Component({
        selector: "appartement-form",
        templateUrl: "app/models/Appartement/appartement.create-front.html",
        styleUrls: ["app/models/Appartement/appartement.create-front.css"]
    })
], AppartementCreateFront);
exports.AppartementCreateFront = AppartementCreateFront;
//# sourceMappingURL=appartement.create-front.js.map