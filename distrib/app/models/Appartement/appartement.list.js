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
var AppartementList = (function () {
    function AppartementList() {
        this.delete = new core_1.EventEmitter();
        this.details = new core_1.EventEmitter();
    }
    Object.defineProperty(AppartementList.prototype, "appartements", {
        get: function () {
            return this._appartements;
        },
        set: function (value) {
            console.log("Setter of appartement array called");
            this._appartements = value;
        },
        enumerable: true,
        configurable: true
    });
    AppartementList.prototype._removeAppartement = function (index) {
        this.delete.emit(index);
    };
    AppartementList.prototype._showDetails = function (appartement) {
        this.details.emit(appartement);
    };
    return AppartementList;
}());
__decorate([
    core_1.Input('appartements'),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], AppartementList.prototype, "appartements", null);
__decorate([
    core_1.Output('delete'),
    __metadata("design:type", Object)
], AppartementList.prototype, "delete", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AppartementList.prototype, "details", void 0);
AppartementList = __decorate([
    core_1.Component({
        selector: "appartements-list",
        templateUrl: "app/models/Appartement/appartement.list.html",
        styleUrls: ["app/models/Appartement/appartement.list.css"]
    })
], AppartementList);
exports.AppartementList = AppartementList;
//# sourceMappingURL=appartement.list.js.map