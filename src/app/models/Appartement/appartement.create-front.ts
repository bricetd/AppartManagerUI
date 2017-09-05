import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import {Appartement} from './appartement.model'

import {ModalWindows} from '../../utils/modalWindows'

@Component({
  selector: "appartement-form",
  templateUrl: "app/models/Appartement/appartement.create-front.html",
  styleUrls: ["app/models/Appartement/appartement.create-front.css"]
})

export class AppartementCreateFront implements AfterViewInit{

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

  public ngAfterViewInit(){
    this.modalwindows.show()
  }
}
