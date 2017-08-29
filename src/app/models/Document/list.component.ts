import { Component} from '@angular/core';
import { Document } from './document.model';
import {ActivatedRoute, Router} from '@angular/router'
import {DocumentService} from './document.services'

@Component({
  templateUrl: "app/models/Document/list.component.html",
  styleUrls: ["app/models/Document/document.component.css"],
})

export class ListComponent{
  private _docs:Array<Document> = [];
  private _docService:DocumentService;

  constructor(docService:DocumentService,
              private _router:Router,
              private _route:ActivatedRoute){
    this._docService = docService;
   var promise = this._docService.getAll();
    promise.then(documents => this._docs = documents)
  }

      private _removeDocument(index:number){
        this._docService.removeDocument(index).then(document => console.log(document))
      }

      private _showDocumentDetails(document:Document){
        this._router.navigate(['../'+document.getId()],{relativeTo:this._route})
      }
}
