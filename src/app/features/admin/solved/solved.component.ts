import { Component, OnInit } from '@angular/core';
import { CircleProgressOptions } from 'ng-circle-progress';
import Chart from 'chart.js';

@Component({
  selector: 'app-solved',
  templateUrl: './solved.component.html',
  styleUrls: ['./solved.component.scss'],
  providers: [CircleProgressOptions]
})
export class SolvedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var ctx = document.getElementById('barChart');
    var barChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
          label:'data',
          data: [0,0, 0, 0, 4, 2],
          backgroundColor: ['rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ]
        }],
      },
      options: {
        responsive: true,
        legend: {
          position: 'bottom',
          labels: {
            fontSize: 10
          }  
        },
        elements: {
          line: {
            tension: 0,
            fill: false
          }
        },
        scales: {
          xAxes: [{
            gridLines: {
              display: false,
              drawTicks: true,             
              color: "rgba(255,255,255,0.8)"
            },
            ticks: {
              padding: 5,
              beginAtZero: true,
            }
          }],
          yAxes: [{
            
            ticks: {
              stepSize: 2,
              beginAtZero: true,
              maxTicksLimit: 10,
              padding: 5
            },
            gridLines: {
              drawBorder: false,
              color: "rgba(255,255,255,0.8)"
            }
          }]
        }
      }
    });

    var ctx = document.getElementById('lineChart');
    var lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['1', '2', '3', '4', '5'],
        datasets: [{
          label: 'Terrorist',
          data: [50, 70, 155, 58, 200],
          borderColor: '#B65358',
          borderWidth: 1,
          fill: true,
          pointRadius: 5,
          backgroundColor: "#B65358"
        },
        {
          label: 'Criminal',
          data: [60, 90, 150, 200, 120],
          borderColor: '#D29E16',
          borderWidth: 1,
          fill: true,
          pointRadius: 5,
          backgroundColor: "#D29E16"
        },
        {
          label: 'Missing Person',
          data: [20, 40, 60, 100, 250],
          borderColor: '#78CBC3',
          borderWidth: 1,
          fill: true,
          pointRadius: 5,
          backgroundColor: "#78CBC3"
        }],
        showLines: true
      },
      options: {
        responsive: true,
        legend: {
          position: 'bottom',
          labels: {
            fontSize: 10
          }          
        },
        elements: {
          line: {
            tension: 0,
            fill: false
          }
        },
        scales: {
          xAxes: [{
            gridLines: {
              display: false,
              drawTicks: true
            },
            ticks: {
              padding: 5,
              beginAtZero: true,
            }
          }],
          yAxes: [{
            ticks: {
              stepSize: 100,
              beginAtZero: true,
              maxTicksLimit: 10,
              padding: 5
            },
            gridLines: {
              drawBorder: false,
              color: "rgba(255,255,255,0.8)"
            }
          }]
        }
      }
    });
  }

}
