import { NgModule }      from '@angular/core';
import {Routes, RouterModule} from '@angular/router'

import {HomeComponent} from './home/home.component'

const routes: Routes = [
  {path: '', component: HomeComponent}, //Home url of the site
  //{path: 'documents',
    //loadChildren:'app/models/Document/document.module#DocumentModule'}, //Home url of the site
];

@NgModule({
  imports:      [
                RouterModule.forRoot(
                  routes,
                  {enableTracing: true}
                )
  ],
  exports:      [
            RouterModule
  ]
})
export class AppRoutingModule { }
