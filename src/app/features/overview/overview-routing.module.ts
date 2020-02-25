import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview.component';

export const overviewRoutes: Routes = [
  {
    path: 'overview',
    component: OverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(overviewRoutes)],
  exports: [RouterModule]
})
export class OverviewRoutingModule { }