import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DahsboardComponent } from './dahsboard.component';

export const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: DahsboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }