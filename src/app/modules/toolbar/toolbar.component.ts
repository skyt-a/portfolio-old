import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  navigateTop(): void {
    this.router.navigate(['/top']);
  }

  navigateSkills(): void {
    this.router.navigate(['/skills']);
  }

  navigateProfile(): void {
    this.router.navigate(['/profile']);
  }

}
