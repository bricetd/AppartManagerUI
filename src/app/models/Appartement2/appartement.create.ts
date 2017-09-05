import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

import {Appartement} from './appartement.model'

import {ModalWindows} from '../../utils/modalwindows/modalwindows.component'

@Component({
  selector: "appartement-form",
  templateUrl: "app/models/Appartement2/appartement.create.html",
  styleUrls: ["app/models/Appartement2/appartement.create.css"]
})

export class AppartementCreateForm{

  @Input('creationError') creationError:string;

  @ViewChild('form') createForm:ElementRef;

  @Output() created = new EventEmitter<Appartement>();

  @ViewChild(ModalWindows) modalwindows:ModalWindows;

  private createAppartement(nomEl:any, surfaceEl:any, etageEl:any,
                            hasParkingEl:any, hasCaveEl:any){
    var newAppartement:Appartement = new Appartement(1, nomEl.value, +surfaceEl.value, +etageEl.value, hasParkingEl.checked, hasCaveEl.checked)
    this.created.emit(newAppartement);
  }

  public resetCreateForm(){
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
