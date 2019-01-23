import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SingleorderComponent } from './singleorder/singleorder.component';
import { MultipleorderComponent } from './multipleorder/multipleorder.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'singleOrder', component: SingleorderComponent },
  { path: 'multipleOrder', component: MultipleorderComponent },
  { path: 'reports', component: ReportsComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
