import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillSectionComponent } from './modules/skill-section/skill-section.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { LandingComponent } from './modules/landing/landing.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'skills', component: SkillSectionComponent },
  { path: 'top', component: LandingComponent},
  { path: '**', component: LandingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
