import { Component, ViewChild } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Appartement } from './appartement.model';
import {AppartementService} from './appartement.service'
import {AppartementCreateForm} from './appartement.create'


@Component({
  templateUrl: "app/models/Appartement/appartement.component.html",
  styleUrls: ["app/models/Appartement/appartement.component.css"]
})

export class AppartementComponent  {

 //Listing
 private _appartements:Array<Appartement> = [];

 //Creating
  @ViewChild(AppartementCreateForm) _appartCreateForm:AppartementCreateForm;
  private _creationError:string = "";

  constructor(private _appartementService:AppartementService,
              private _router:Router,
              private _route:ActivatedRoute){
        this._doRefresh()
  }

    private _createAppartement(newAppartement:Appartement){
      this._appartementService.createAppartement(newAppartement).then(appartement => {
        console.log(appartement)
        this._creationError=""
        this._appartCreateForm.closeCreateForm()
        this._doRefresh()
      })
      .catch(error => {
        this._creationError = error
      })
    }

    private _removeAppartement(index:number){
      this._appartementService.removeAppartement(index).then(appartement => {
        console.log(appartement)
        this._doRefresh()
      })

    }

    private _showAppartementDetails(appartement:Appartement){
      this._router.navigate(['./'+appartement.id],{relativeTo:this._route})
    }

    private _doRefresh(){
      this._appartementService.getAll()
      .subscribe(appartements => this._appartements = appartements)
    }

    private _showCreateForm(){
      this._appartCreateForm.showCreateForm()
    }
}
