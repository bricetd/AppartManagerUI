import { Component} from '@angular/core';
import { Appartement } from './appartement.model';
import {ActivatedRoute, Router} from '@angular/router'
import {AppartementService} from './appartement.service'

@Component({
  templateUrl: "app/models/Appartement/appartement.list-back.html",
})

export class AppartementListBack{
  private _appartements:Array<Appartement> = [];

  constructor(private _appartementService:AppartementService,
              private _router:Router,
              private _route:ActivatedRoute){
   this._appartementService.getAll()
   .subscribe(appartements => this._appartements = appartements)
  }

      private _removeAppartement(index:number){
        this._appartementService.removeAppartement(index).then(appartement => console.log(appartement))
        this._appartementService.getAll()
        .subscribe(appartements => this._appartements = appartements)
      //  this._router.navigate(['../list'],{relativeTo:this._route})
      }

      private _showAppartementDetails(appartement:Appartement){
        this._router.navigate(['../'+appartement.id],{relativeTo:this._route})
      }
}
