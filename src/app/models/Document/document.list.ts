import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Document } from './document.model'

@Component({
  selector: "document-list",
  templateUrl: "app/models/Document/document.list.html",
//  styleUrls: ["app/models/Document/document.list.css"]
})

export class DocumentList{
  private _documents:Array<Document>
 @Input('documents')
 get documents():Array<Document>{
   return this._documents;
 }

 set documents(value:Array<Document>){
   console.log("Setter of document array called")
   this._documents = value
 }


  @Output('delete') delete = new EventEmitter<number>()

  private _removedocument(index:number){
  this.delete.emit(index);
  }

  @Output() details = new EventEmitter<Document>()
  private _showDetails(document:Document){
  this.details.emit(document);
  }
}
