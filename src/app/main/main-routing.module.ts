import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { dashboardRoutes } from '../features/dahsboard/dashboard-routing.module';

export const mainRoutes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {
    path: '',
    component: MainComponent,
    children: [
      ...dashboardRoutes
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(mainRoutes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}