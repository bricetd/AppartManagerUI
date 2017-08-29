import { NgModule }      from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import {DocumentComponent} from './document.component'
import {ListComponent} from './list.component'
import {CreateComponent} from './create.component'
import {DetailsComponent} from './details.component'

export const routes: Routes = [

  {path: 'documents', component: DocumentComponent,
    children: [
      //    { path: '', redirectTo: 'list', pathMatch:'full' },
          { path: 'list', component: ListComponent },
          { path: 'create', component: CreateComponent }
    ]
  },
  { path: 'documents/:id', component: DetailsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DocumentRoutingModule { }
