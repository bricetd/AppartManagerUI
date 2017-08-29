import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


import {DocumentComponent} from './document.component'
import {ListComponent} from './list.component'
import {CreateComponent} from './create.component'
import {DetailsComponent} from './details.component'
import { DocumentRoutingModule } from './document.routes';

//import { Document } from './document.model';
import {DocumentsList} from './documents_list.component';
import {DocumentForm} from './document_form.component'
import {DOCUMENT_SERVICES_PROVIDERS} from './document.services'

@NgModule({
  imports:      [
            DocumentRoutingModule,
            CommonModule,
            BrowserModule
  ],
  declarations: [
          ListComponent,
          CreateComponent,
          DocumentComponent,
          DetailsComponent,
          DocumentsList,
          DocumentForm,
  ],
  providers: [
            DOCUMENT_SERVICES_PROVIDERS // DOCUMENT_SERVICES_PROVIDERS is defined in document.services.ts
  ],
})
export class DocumentModule { }
