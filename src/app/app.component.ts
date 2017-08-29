import {Component} from '@angular/core'

@Component({
  selector: 'my-app',
  template: `
      <div class="container">
        <h1>Gestionnaire d'appartement</h1>
        <router-outlet></router-outlet>
      </div>
      `,
})
export class AppComponent {

}
