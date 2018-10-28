import { Component } from '@angular/core';
import { routerTransition } from './animations/router-transition';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routerTransition]
})
export class AppComponent {
  getState(outlet) {
    console.log('stat')
    return outlet.activatedRouteData.state;
  }
}
