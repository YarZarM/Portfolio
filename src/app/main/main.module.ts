import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { NavbarComponent } from '../core/navbar/navbar.component';
// import { CoreModule } from '../core/core.module';
import { FeaturesModule } from '../features/features.module';

@NgModule({
  imports: [
    CommonModule,
    FeaturesModule,
    MainRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
  ],
  declarations: [
    MainComponent,
    NavbarComponent,
  ],
  providers: [
  ]
})
export class MainModule {
}

