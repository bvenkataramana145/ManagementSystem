import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { NgDatepickerModule } from 'ng2-datepicker';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SingleorderComponent } from './singleorder/singleorder.component';
import { MultipleorderComponent } from './multipleorder/multipleorder.component';
import { ReportsComponent } from './reports/reports.component';

// Import angular-fusioncharts
import { FusionChartsModule } from 'angular-fusioncharts';

// Import FusionCharts library
import * as FusionCharts from 'fusioncharts';

// Load FusionCharts Individual Charts
import * as Charts from 'fusioncharts/fusioncharts.charts';
import { SingleodserviceService } from './singleodservice.service';

// Use fcRoot function to inject FusionCharts library, and the modules you want to use
FusionChartsModule.fcRoot(FusionCharts, Charts)

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SingleorderComponent,
    MultipleorderComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DataTablesModule,
    NgDatepickerModule,
    AngularFontAwesomeModule,
    FusionChartsModule ,
    BsDatepickerModule.forRoot(),
    HttpClientModule
  
  ],
  providers: [SingleodserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
