import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { Appartement } from './appartement.model';
import {AppartementService} from './appartement.service'
//import {Document} from '../Document2/document.model'
//import {DocumentService} from '../Document2/document.service'

@Component({
  templateUrl: "app/models/Appartement2/appartement.details.html",
  styleUrls: ["app/models/Appartement2/appartement.details.css"],
})

export class AppartementDetails implements OnInit, OnDestroy{

  private _appartement:Appartement;
  private _error:string = "";
  private _paramSub:any;
  private _documentActionCode='0';

  constructor(private _route:ActivatedRoute,
              private _appartementService:AppartementService){
            //  private _documentService:DocumentService){
  }

  public ngOnInit(){
    this._paramSub = this._route.params.subscribe(params =>{
      var id:number = +params['id'];
      this._appartement = null;
      this._error = "";
      this._appartementService.getById(id)
        .subscribe(appartement=> this._appartement = appartement,
            error => this._error = error);

//        this._documentService.getByAppartementId(id)
//          .subscribe(documents =>  this._documents = documents,
//            error => this._error = error)
    });
  }

  public ngOnDestroy(){
    this._paramSub.unsubscribe();
  }
}
