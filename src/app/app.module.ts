import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartDemoComponent } from './chart-demo/chart-demo.component';
import {Chart} from 'chart.js';
import { registerables } from 'chart.js';
import { MultiBarColumnComponent } from './multi-bar-column/multi-bar-column.component';
import { StreamsDataComponent } from './streams-data/streams-data.component';
import { HttpClientModule } from '@angular/common/http';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MobaCompareComponent } from './moba-compare/moba-compare.component';
import { BrCompareComponent } from './br-compare/br-compare.component';
import { ShooterCompareComponent } from './shooter-compare/shooter-compare.component';
import { MobaFeedDataComponent } from './moba-feed-data/moba-feed-data.component';
import { BrFeedDataComponent } from './br-feed-data/br-feed-data.component';
import { ShooterFeedDataComponent } from './shooter-feed-data/shooter-feed-data.component';


Chart.register(...registerables);

@NgModule({
  declarations: [
    AppComponent,
    MultiBarColumnComponent,
    HomeComponent,
    MobaCompareComponent,
    BrCompareComponent,
    ShooterCompareComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MobaFeedDataComponent,
    HttpClientModule,
    ChartDemoComponent,
    PieChartComponent,
    BrFeedDataComponent,
    ShooterFeedDataComponent,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
