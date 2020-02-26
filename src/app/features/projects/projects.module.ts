import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ProjectsComponent } from './projects.component';
import { ProjectRoutingModule } from './projects-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule,
    FormsModule,
    RouterModule,
    ModalModule.forRoot()
  ],
  declarations: [
    ProjectsComponent
  ]
})
export class ProjectModule { }
