import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { dashboardRoutes } from '../features/dahsboard/dashboard-routing.module';
import { overviewRoutes } from '../features/overview/overview-routing.module';
import { projectRoutes } from '../features/projects/projects-routing.module';
import { skillRoutes } from '../features/skills/skills-routing.module';
import { contactRoutes } from '../features/contact/contact-routing.module';

export const mainRoutes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {
    path: '',
    component: MainComponent,
    children: [
      ...dashboardRoutes,
      ...overviewRoutes,
      ...projectRoutes,
      ...skillRoutes,
      ...contactRoutes
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(mainRoutes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}