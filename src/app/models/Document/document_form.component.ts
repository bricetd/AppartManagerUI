import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

import {Document} from './document.model'



@Component({
  selector: "document-form",
  templateUrl: "app/models/Document/document_form.component.html",
  styleUrls: ["app/models/Document/document_form.component.css"]
})

export class DocumentForm{

  @Input('creationError') creationError:string;

  @ViewChild('form') createForm:ElementRef;

  @Output() created = new EventEmitter<Document>();

  private createDocument(nomEl:any, fichierEl:any){
    var newDocument:Document = new Document(-1, nomEl.value, fichierEl.value, "","")
    this.created.emit(newDocument);
  }

  public resetCreateForm(){
    this.createForm.nativeElement.reset();
  }
}
