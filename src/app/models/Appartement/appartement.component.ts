import { Component} from '@angular/core';
import {AppartementService} from './appartement.service';


@Component({
  //selector: 'appartement',
  //templateUrl: "app/models/Appartement/appartement.component.html",
  //styleUrls: ["app/models/Appartement/appartement.component.css"],
  template:`
      <h2>Liste de vos appartements</h2>
      <p>
        <a routerLink="list">Liste d'appartements</a>
        <a routerLink="create">Ajouter un appartement</a>
      </p>
      <router-outlet></router-outlet>`
})

export class AppartementComponent  {
}
