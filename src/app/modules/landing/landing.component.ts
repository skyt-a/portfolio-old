import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  animations: [
    trigger('panelOpenTrigger', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition('* <=> *', animate('0.8s ease-in-out'))
    ])
  ]
})
export class LandingComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit() {
  }
}
