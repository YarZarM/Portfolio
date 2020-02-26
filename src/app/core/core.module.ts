import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
  LoadingSpinnerComponent],
  exports: [
  ]
})
export class CoreModule { }
