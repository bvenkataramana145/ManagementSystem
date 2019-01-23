import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SingleorderComponent } from './singleorder/singleorder.component';
import { MultipleorderComponent } from './multipleorder/multipleorder.component';
import { ReportsComponent } from './reports/reports.component';



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
    DataTablesModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
