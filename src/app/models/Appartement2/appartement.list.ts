import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Appartement } from './appartement.model'

@Component({
  selector: "appartements-list",
  templateUrl: "app/models/Appartement2/appartement.list.html",
  styleUrls: ["app/models/Appartement2/appartement.list.css"]
})

export class AppartementList{
  private _appartements:Array<Appartement>
 @Input('appartements')
 get appartements():Array<Appartement>{
   return this._appartements;
 }

 set appartements(value:Array<Appartement>){
   console.log("Setter of appartement array called")
   this._appartements = value
 }


  @Output('delete') delete = new EventEmitter<number>()

  private _removeAppartement(index:number){
  this.delete.emit(index);
  }

  @Output() details = new EventEmitter<Appartement>()
  private _showDetails(appartement:Appartement){
  this.details.emit(appartement);
  }
}
