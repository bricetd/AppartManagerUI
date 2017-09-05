import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';


import {DocumentComponent} from './document.component'
import {DocumentList} from './document.list'
import {DocumentCreateForm} from './document.create'
import {ModalWindowsModule} from '../../utils/modalwindows/modalwindows.module'
//import {DocumentDetails} from './document.details'

import { DocumentRoutingModule } from './document.routing';

import {DOCUMENT_SERVICES_PROVIDERS} from './document.service'

@NgModule({
  imports:      [
            DocumentRoutingModule,
            CommonModule,
            HttpModule,
            ModalWindowsModule,
            BrowserModule,

  ],
  declarations: [
          DocumentComponent,
          DocumentList,
          DocumentCreateForm,

//          DocumentDetails,

  ],
  exports: [
    DocumentComponent,
  ],
  providers: [
            DOCUMENT_SERVICES_PROVIDERS
  ],
})
export class DocumentModule { }
