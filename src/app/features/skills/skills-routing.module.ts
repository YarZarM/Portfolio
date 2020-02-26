import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillsComponent } from './skills.component';

export const skillRoutes: Routes = [
  {
    path: 'skills',
    component: SkillsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(skillRoutes)],
  exports: [RouterModule]
})
export class SkillRoutingModule { }