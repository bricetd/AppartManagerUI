import { Component, ViewChild } from '@angular/core';
import { Appartement } from './appartement.model';
import {AppartementService} from './appartement.service'
import {AppartementCreateFront} from './appartement.create-front'

@Component({
  templateUrl: "app/models/Appartement/appartement.create-back.html",
})

export class AppartementCreateBack{

  @ViewChild(AppartementCreateFront) _appartCreateFront:AppartementCreateFront;
  private _creationError:string = "";
  private _maxDocs:number = 3;

  constructor(private _appartementService:AppartementService){
  }

    private _createAppartement(newAppartement:Appartement){
      this._appartementService.createAppartement(newAppartement).then(appartement => {
        console.log(appartement)
        this._creationError=""
        this._appartCreateFront.resetCreateForm()
      })
      .catch(error => {
        this._creationError = error
      })
    }
}
