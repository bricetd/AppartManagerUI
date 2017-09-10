import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';


import {AppartementComponent} from './appartement.component'
import {AppartementList} from './appartement.list'
import {AppartementCreateForm} from './appartement.create'
import {AppartementDetails} from './appartement.details'

import {ModalWindowsModule} from '../../utils/modalwindows/modalwindows.module'

import { AppartementRoutingModule } from './appartement.routing';

import {APPARTMENT_SERVICES_PROVIDERS} from './appartement.service'
import {DocumentModule} from '../Document/document.module'

@NgModule({
  imports:      [
            AppartementRoutingModule,
            CommonModule,
            HttpModule,
            DocumentModule,
            ModalWindowsModule,
            BrowserModule
  ],
  declarations: [
          AppartementComponent,
          AppartementList,
          AppartementCreateForm,
          AppartementDetails,
        //  ModalWindows
  ],
  providers: [
            APPARTMENT_SERVICES_PROVIDERS, // APPARTMENT_SERVICES_PROVIDERS is defined in appartement.services.ts
        //    DOCUMENT_SERVICES_PROVIDERS
  ],
})
export class AppartementModule { }
