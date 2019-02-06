import { Component, OnInit } from '@angular/core';
// Import FusionCharts library
import * as FusionCharts from 'fusioncharts';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  dataSource: Object;
  chartConfig: Object;
  
  constructor() {
    this.chartConfig = {
       dataFormat: 'json',
   };

   this.dataSource = {
       "chart": {
         "caption": "Countries With Most All Reports [2017-18]",
        //  "subCaption": "In MMbbl = One Million barrels",
         "xAxisName": "Time",
         "yAxisName": "Date",
         "numberSuffix": "K",
         "theme": "fusion",
       },
       "data": [{
         "label": "All",
         "value": "290"
       }, {
         "label": "Saudi",
         "value": "260"
       }, {
         "label": "Canada",
         "value": "180"
       }, {
         "label": "Iran",
         "value": "140"
       },  {
         "label": "China",
         "value": "30"
       }]
     };
     FusionCharts.ready(function() {
      var revenueChart = new FusionCharts({
        type: 'pie2d',
        renderAt: 'chart-container',
        width: '550',
        height: '350',
        dataFormat: 'json',
        dataSource: {
          "chart": {
            "caption": "All Reports",
            "subCaption": "Country",
            "numberSuffix": "%",
            "showPercentInTooltip": "0",
            "decimals": "1",
            //Theme
            "theme": "fusion"
          },
          "data": [{
              "label": "Signel Reports",
              "value": "40"
            },
          
            {
              "label": "Multiple Reports",
              "value": "60"
            }
          ]
        }
      }).render()
    })// Import pie chart
}

  ngOnInit() {
  }

}
