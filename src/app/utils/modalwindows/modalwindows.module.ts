import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ModalWindows } from './modalwindows.component';

@NgModule({
  imports:      [
            CommonModule,
            BrowserModule,

  ],
  declarations: [
    ModalWindows
  ],
  exports: [
    ModalWindows,
  ],
})
export class ModalWindowsModule { }
