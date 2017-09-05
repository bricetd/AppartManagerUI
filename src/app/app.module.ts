import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule} from './app.routing'
import {HomeComponent} from './home/home.component'

//import {ModalWindows} from './utils/modalWindows'
//import {DocumentComponent} from './models/Document/document.component'


import { AppComponent }  from './app.component';
import {DocumentModule} from './models/Document2/document.module'
import {AppartementModule} from './models/Appartement2/appartement.module'
import {ModalWindowsModule} from './utils/modalwindows/modalwindows.module'
//import { Document } from './models/Document/document.model';
//import {DocumentsList} from './models/Document/documents_list.component';
//import {DocumentForm} from './models/Document/document_form.component'
//import {DOCUMENT_SERVICES_PROVIDERS} from './models/Document/document.services'


@NgModule({
  imports:      [ BrowserModule,
                  DocumentModule,
                  AppartementModule,
                  ModalWindowsModule,
                  AppRoutingModule
                ],
  declarations: [
                  AppComponent,
                  HomeComponent,
                  //ModalWindows
    //              DocumentComponent,
            //      DocumentsList,
            //      DocumentForm
                ],
  exports: [
  //  ModalWindows
  ],
  //providers: [DocumentService],
  //providers: [
  //                DOCUMENT_SERVICES_PROVIDERS // DOCUMENT_SERVICES_PROVIDERS is defined in document.services.ts
  //            ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
