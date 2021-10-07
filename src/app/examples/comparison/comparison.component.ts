import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min';

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.css']
})
export class ComparisonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let accuracychart = new CanvasJS.Chart("accuracy", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Accuracy Comparison Graph"
      },
      data: [{
        type: "column",
        dataPoints: [
          { y: 76.9, label: "SSD" },
          { y: 73.2, label: "Faster R-CNN" },
          { y: 63.4, label: "YOLO" }
        ]
      }]
    });
    let speedchart = new CanvasJS.Chart("speed", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Speed Comparison Graph"
      },
      data: [{
        type: "column",
        dataPoints: [
          { y: 59, label: "SSD" },
          { y: 7, label: "Faster R-CNN" },
          { y: 45, label: "YOLO" }
        ]
      }]
    });
    speedchart.render();
    accuracychart.render();
  }
 
}
