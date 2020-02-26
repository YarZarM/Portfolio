import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SkillsComponent } from './skills.component';
import { SkillRoutingModule } from './skills-routing.module';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';


@NgModule({
  imports: [
    CommonModule,
    SkillRoutingModule,
    FormsModule,
    RouterModule,
    ModalModule.forRoot(),
    ProgressbarModule.forRoot()
  ],
  declarations: [
    SkillsComponent
  ]
})
export class SkillModule { }
