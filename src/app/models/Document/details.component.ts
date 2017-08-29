import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { Document } from './document.model';
import {DocumentService} from './document.services'

@Component({
  templateUrl: "app/models/Document/details.component.html",
})

export class DetailsComponent implements OnInit, OnDestroy{

  private _document:Document;
  private _error:string = "";
  private _paramSub:any;

  constructor(private _route:ActivatedRoute,
              private _docService:DocumentService){
  }

  public ngOnInit(){
    this._paramSub = this._route.params.subscribe(params =>{
      var id:number = +params['id'];
      this._document = null;
      this._error = "";
      this._docService.getById(id)
        .then(document=> this._document = document)
        .catch(error => this._error = error);
    })
  }

  public ngOnDestroy(){
    this._paramSub.unsubscribe();
  }
}
