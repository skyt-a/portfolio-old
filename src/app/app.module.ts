import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LandingModule } from './modules/landing/landing.module';
import { SkillSectionModule } from './modules/skill-section/skill-section.module';
import { ProfileModule } from './modules/profile/profile.module';
import { ToolbarModule } from './modules/toolbar/toolbar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    LandingModule,
    SkillSectionModule,
    ProfileModule,
    ToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
