import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    myBirthDay = {
      year: 1993,
      month: 1,
      date: 8
    };
  constructor() { }

  ngOnInit() {
  }

  goToGithubPage(): void {
    window.location.href = 'https://github.com/RinGoku?tab=repositories';
  }

  calcTodayAge(): number {
    const birthDate = new Date(this.myBirthDay.year, this.myBirthDay.month - 1, this.myBirthDay.date);

    const birthY = birthDate.getFullYear().toString().padStart(4, '0');
    const birthM = (birthDate.getMonth() + 1).toString().padStart(2, '0');
    const birthD = birthDate.getDate().toString().padStart(2, '0');

    const today = new Date();
    const todayY = today.getFullYear().toString().padStart(4, '0');
    const todayM = (today.getMonth() + 1).toString().padStart(2, '0');
    const todayD = today.getDate().toString().padStart(2, '0');

    const age = Math.floor((Number(todayY + todayM + todayD) - Number(birthY + birthM + birthD)) / 10000);
    return age;
  }

}
