import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule} from './app.routing'
import {HomeComponent} from './home/home.component'
//import {DocumentComponent} from './models/Document/document.component'


import { AppComponent }  from './app.component';
//import {DocumentModule} from './models/Document/document.module'
import {AppartementModule} from './models/Appartement/appartement.module'
//import { Document } from './models/Document/document.model';
//import {DocumentsList} from './models/Document/documents_list.component';
//import {DocumentForm} from './models/Document/document_form.component'
//import {DOCUMENT_SERVICES_PROVIDERS} from './models/Document/document.services'


@NgModule({
  imports:      [ BrowserModule,
  //                DocumentModule,
                    AppartementModule,
                  AppRoutingModule
                ],
  declarations: [
                  AppComponent,
                  HomeComponent,
    //              DocumentComponent,
            //      DocumentsList,
            //      DocumentForm
                ],
  //providers: [DocumentService],
  //providers: [
  //                DOCUMENT_SERVICES_PROVIDERS // DOCUMENT_SERVICES_PROVIDERS is defined in document.services.ts
  //            ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
