import { NgModule }      from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import {AppartementComponent} from './appartement.component'

import {AppartementDetails} from './appartement.details'

export const routes: Routes = [

  {path: 'appartement', component: AppartementComponent,
    //children: [
        //  { path: '', redirectTo: 'list', pathMatch:'full' },
      //    { path: 'list', component: AppartementListBack },
      //    { path: 'create', component: AppartementCreateBack }
    //]
  },
  { path: 'appartement/:id', component: AppartementDetails }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppartementRoutingModule { }
