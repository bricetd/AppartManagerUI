import { Component, ViewChild, Injector } from '@angular/core';
import { Document } from './document.model';
import {DocumentService} from './document.services'
import {DocumentForm} from './document_form.component'

@Component({
  templateUrl: "app/models/Document/create.component.html",
  styleUrls: ["app/models/Document/document.component.css"],
})

export class CreateComponent{

  @ViewChild(DocumentForm) _documentForm:DocumentForm;
  private _docService:DocumentService;
  private _creationError:string = "";
  private _maxDocs:number = 3;

  constructor(docService:DocumentService){
    this._docService = docService;
  }


    private createDocument(newDoc:Document){
      this._docService.createDocument(newDoc).then(document => {
        console.log(document)
        this._creationError=""
        this._documentForm.resetCreateForm()
      })
      .catch(error => {
        this._creationError = error
      })
    }

}
