
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    CommonModule,
    OverviewRoutingModule,
    FormsModule,
    RouterModule,
    ModalModule.forRoot()
  ],
  declarations: [
    OverviewComponent
  ]
})
export class OverViewModule { }
