import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-multi-bar-column',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './multi-bar-column.component.html',
  styleUrls: ['./multi-bar-column.component.css']
})
export class MultiBarColumnComponent implements OnInit {

  ctx: any;
  config: any;
  chartDatalabels: any[] = [];
  lolData: any[] = [];
  dota2Data: any[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getData('League of Legends');
    this.getData('Dota 2');
  }

  createChart(): void {
    this.ctx = document.getElementById('myChart1');
    this.config = {
      type: 'bar',
  data: {
    labels: this.chartDatalabels,
    datasets: [
      {
        label: 'League of Legends',
        data: this.lolData,
        backgroundColor: ['rgb(135,201,28)'],
      },
      {
        label: 'Dota 2',
        data: this.dota2Data,
        backgroundColor: ['rgb(22,158,64)'],
      },
    ],
  },
  options: {
    indexAxis: 'x',
    scales: {
      x: {
        title: {
          color: '#e0e0e0',
        },
        ticks: {
          color: '#e0e0e0',
        },
      },
      y: {
        title: {
          color: '#e0e0e0',
        },
        ticks: {
          color: '#e0e0e0',
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: '#e0e0e0',
        },
      },
    },
  },
};
    const myChart1 = new Chart(this.ctx, this.config);
  }

  getData(game: string): void {
    this.httpClient.get<any>(`http://127.0.0.1:5000/get_viewercount_per_language_by_game/${encodeURIComponent(game)}`).subscribe(
      (response: { viewercount: number; l: string; }[]) => {
        console.log(response);
        if (game == 'League of Legends') {
          this.lolData = [];
          this.chartDatalabels = [];
          response.forEach((entry: { viewercount: number; l: string; }) => {
            this.lolData.push(entry.viewercount);
            this.chartDatalabels.push(entry.l);
          });
        } else if (game == 'Dota 2') {
          response.forEach((entry: { viewercount: number; l: string; }) => {
            this.dota2Data.push(entry.viewercount);
          });
          this.createChart();
        }
      }
    );
  }

}