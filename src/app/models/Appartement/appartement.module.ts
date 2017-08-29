import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';


import {AppartementComponent} from './appartement.component'
import {AppartementListBack} from './appartement.list-back'
import {AppartementListFront} from './appartement.list-front'
import {AppartementCreateBack} from './appartement.create-back'
import {AppartementCreateFront} from './appartement.create-front'
import {AppartementDetails} from './appartement.details'

import {ModalWindows} from '../../utils/modalWindows'

import { AppartementRoutingModule } from './appartement.routing';

import {APPARTMENT_SERVICES_PROVIDERS} from './appartement.service'
import {DOCUMENT_SERVICES_PROVIDERS} from '../Document2/document.service'

@NgModule({
  imports:      [
            AppartementRoutingModule,
            CommonModule,
            HttpModule,
            BrowserModule
  ],
  declarations: [
          AppartementComponent,
          AppartementListBack,
          AppartementListFront,
          AppartementCreateBack,
          AppartementCreateFront,
          AppartementDetails,
          ModalWindows
  ],
  providers: [
            APPARTMENT_SERVICES_PROVIDERS, // APPARTMENT_SERVICES_PROVIDERS is defined in appartement.services.ts
            DOCUMENT_SERVICES_PROVIDERS
  ],
})
export class AppartementModule { }
