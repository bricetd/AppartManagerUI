import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

import {Document} from './document.model'

import {ModalWindows} from '../../utils/modalwindows/modalwindows.component'

@Component({
  selector: "document-form",
  templateUrl: "app/models/Document2/document.create.html",
//  styleUrls: ["app/models/Document2/document.create.css"]
})

export class DocumentCreateForm{

  @Input('creationError') creationError:string;

  @ViewChild('form') createForm:ElementRef;

  @Output() created = new EventEmitter<Document>();

  @ViewChild(ModalWindows) modalwindows:ModalWindows;

  private createDocument(nomDocumentEl:any, fichierDocumentEl:any){
    var newDocument:Document = new Document(null, nomDocumentEl.value, fichierDocumentEl.value,null,null)
    this.created.emit(newDocument);
  }

  public resetCreateForm(){
    this.creationError = "";
    this.createForm.nativeElement.reset();
  }

  public closeCreateForm(){
    this.resetCreateForm();
    this.modalwindows.hide();
  }

  public showCreateForm(){
    this.modalwindows.show()
  }
}
