import { Component} from '@angular/core';
import {DocumentService} from './document.services';
import {ListComponent} from './list.component';
import {CreateComponent} from './create.component';
import {Routes} from '@angular/router';


@Component({
  selector: 'documents',
  templateUrl: "app/models/Document/document.component.html",
  styleUrls: ["app/models/Document/document.component.css"],
})
export class DocumentComponent  {
}
