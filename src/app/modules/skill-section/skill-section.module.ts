import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillSectionComponent } from './skill-section.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    HighchartsChartModule
  ],
  declarations: [SkillSectionComponent],
  exports: [
    SkillSectionComponent
  ]
})
export class SkillSectionModule { }
