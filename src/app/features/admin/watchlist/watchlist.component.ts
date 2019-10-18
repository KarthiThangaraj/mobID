import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { CircleProgressOptions } from 'ng-circle-progress';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss'],
  providers: [CircleProgressOptions]
})
export class WatchlistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var ctx = document.getElementById('lineChart');
    var lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        datasets: [{
          
          data: [0, 0, 0, 0, 0, 0, 0, 0, 2, 4],
          borderColor: '#8AE9ED',
          borderWidth: 1,
          pointRadius: 2,
          fill: false,
          backgroundColor: "#8AE9ED"
        }],
        showLines: true
      },
      options: {
        responsive: true,
        legend: {
          display: false
          // position: 'bottom',
          // labels: {
          //   fontSize: 10
          // }          
        },
        // elements: {
        //   line: {
        //     tension: 0,
        //     fill: false
        //   }
        // },
        scales: {
          xAxes: [{
            gridLines: {
              // display: false,
              drawTicks: false,
              color: "rgba(255,255,255,0.8)"
            },
            ticks: {
              padding: 5,
              beginAtZero: true,
            }
          }],
          yAxes: [{
            display: false,
            ticks: {
              // stepSize: 100,
              beginAtZero: true,
              maxTicksLimit: 10,
              padding: 5
            },
            gridLines: {
              display: false,
              drawBorder: false,
              color: "rgba(255,255,255,0.8)"
            }
          }]
        }
      }
    });
  }

}
