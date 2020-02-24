import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { mainRoutes } from './main/main-routing.module';


const routes: Routes = [
  {
    path: '',
    children: [
      ...mainRoutes
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
