import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: "modalWindows",
  templateUrl: "app/utils/modalWindows.html",
  //styleUrls: ["app/models/Appartement/appartement.list-front.css"]
})

export class ModalWindows{
  public visible = false;
 public visibleAnimate = false;

 public show(): void {
   this.visible = true;
   setTimeout(() => this.visibleAnimate = true, 100);
 }

 public hide(): void {
   this.visibleAnimate = false;
   setTimeout(() => this.visible = false, 300);
 }

 public onContainerClicked(event: MouseEvent): void {
   if ((<HTMLElement>event.target).classList.contains('modal')) {
     this.hide();
   }
 }
}
