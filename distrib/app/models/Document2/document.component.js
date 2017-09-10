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
var router_1 = require("@angular/router");
var document_service_1 = require("./document.service");
var document_create_1 = require("./document.create");
var DocumentComponent = (function () {
    function DocumentComponent(_documentService, _router, _route) {
        this._documentService = _documentService;
        this._router = _router;
        this._route = _route;
        //Listing
        this._documents = [];
        this._creationError = "";
    }
    DocumentComponent.prototype.ngOnInit = function () {
        console.log("Action code:" + this._actionCode);
        this._doRefresh();
    };
    DocumentComponent.prototype._createDocument = function (newDocument) {
        var _this = this;
        switch (this._actionCode) {
            case '0': {
                this._documentService.addDocumentByAppartementId(newDocument, this._appartementId)
                    .then(function (document) {
                    console.log(document);
                    _this._creationError = "";
                    _this._appartCreateForm.closeCreateForm();
                    _this._doRefresh();
                })
                    .catch(function (error) {
                    _this._creationError = error;
                });
                break;
            }
            default: {
                console.error("Unknown action");
                break;
            }
        }
    };
    DocumentComponent.prototype._removeDocument = function (index) {
        var _this = this;
        this._documentService.removeDocument(index).then(function (document) {
            console.log(document);
            _this._doRefresh();
        });
    };
    DocumentComponent.prototype._showDocumentDetails = function (document) {
        this._router.navigate(['./' + document.id], { relativeTo: this._route });
    };
    DocumentComponent.prototype._doRefresh = function () {
        var _this = this;
        switch (this._actionCode) {
            case '0': {
                this._documentService.getByAppartementId(this._appartementId)
                    .subscribe(function (documents) { return _this._documents = documents; });
                break;
            }
            default: {
                console.error("Unknown action");
                break;
            }
        }
        //  this._documentService.getAll()
        //  .subscribe(documents => this._documents = documents)
    };
    DocumentComponent.prototype._showCreateForm = function () {
        this._appartCreateForm.showCreateForm();
    };
    return DocumentComponent;
}());
__decorate([
    core_1.Input('appartementId'),
    __metadata("design:type", Number)
], DocumentComponent.prototype, "_appartementId", void 0);
__decorate([
    core_1.Input('actionCode'),
    __metadata("design:type", String)
], DocumentComponent.prototype, "_actionCode", void 0);
__decorate([
    core_1.ViewChild(document_create_1.DocumentCreateForm),
    __metadata("design:type", typeof (_a = typeof document_create_1.DocumentCreateForm !== "undefined" && document_create_1.DocumentCreateForm) === "function" && _a || Object)
], DocumentComponent.prototype, "_appartCreateForm", void 0);
DocumentComponent = __decorate([
    core_1.Component({
        selector: "document-component",
        templateUrl: "app/models/Document2/document.component.html",
        styleUrls: ["app/models/Document2/document.component.css"]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof document_service_1.DocumentService !== "undefined" && document_service_1.DocumentService) === "function" && _b || Object, router_1.Router,
        router_1.ActivatedRoute])
], DocumentComponent);
exports.DocumentComponent = DocumentComponent;
var _a, _b;
//# sourceMappingURL=document.component.js.map