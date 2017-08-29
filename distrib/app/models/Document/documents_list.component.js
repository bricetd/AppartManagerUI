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
var DocumentsList = (function () {
    function DocumentsList() {
        this.delete = new core_1.EventEmitter();
        this.details = new core_1.EventEmitter();
    }
    Object.defineProperty(DocumentsList.prototype, "documents", {
        get: function () {
            return this._documents;
        },
        set: function (value) {
            console.log("Setter of document array called");
            this._documents = value;
        },
        enumerable: true,
        configurable: true
    });
    DocumentsList.prototype._removeDocument = function (index) {
        this.delete.emit(index);
    };
    DocumentsList.prototype._showDetails = function (document) {
        this.details.emit(document);
    };
    return DocumentsList;
}());
__decorate([
    core_1.Input('documents'),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], DocumentsList.prototype, "documents", null);
__decorate([
    core_1.Output('delete'),
    __metadata("design:type", Object)
], DocumentsList.prototype, "delete", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DocumentsList.prototype, "details", void 0);
DocumentsList = __decorate([
    core_1.Component({
        selector: "documents-list",
        templateUrl: "app/models/Document/documents_list.component.html",
        styleUrls: ["app/models/Document/documents_list.component.css"]
    })
], DocumentsList);
exports.DocumentsList = DocumentsList;
//# sourceMappingURL=documents_list.component.js.map