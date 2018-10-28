import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
declare var require: any;
require('highcharts/highcharts-more')(Highcharts);

@Component({
  selector: 'app-skill-section',
  templateUrl: './skill-section.component.html',
  styleUrls: ['./skill-section.component.css']
})
export class SkillSectionComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    Highcharts.chart('container', {
      chart: {
        polar: true,
        type: 'area',
        margin: 0,
        width: 800
      },
      tooltip: {
        enabled: false
      },
      title: {
        text: undefined
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      xAxis: {
        categories: ['サーバーサイド', 'フロントエンド', 'インフラ', 'マネジメント', '好奇心', 'コミュニケーション'],
        lineWidth: 0
      }, 
      yAxis: {
        max: 5,
        tickInterval: 1,
        maxPadding: 0
      },
      series: [{
        name: undefined,
        data: [4, 5, 3, 2, 5, 3],
        pointPlacement: 'on'
      }]
    });
  }

}
