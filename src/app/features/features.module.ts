import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './dahsboard/dashboard.module';
import { OverViewModule } from './overview/overview.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardModule,
    OverViewModule
  ],
  declarations: [
  ]
})
export class FeaturesModule {
}
