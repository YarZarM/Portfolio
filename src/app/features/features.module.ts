import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './dahsboard/dashboard.module';
import { OverViewModule } from './overview/overview.module';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectModule } from './projects/projects.module';
import { SkillsComponent } from './skills/skills.component';
import { SkillModule } from './skills/skills.module';
import { ContactComponent } from './contact/contact.component';
import { ContactModule } from './contact/contact.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardModule,
    OverViewModule,
    ProjectModule,
    SkillModule,
    ContactModule
  ],
  declarations: [
  ]
})
export class FeaturesModule {
}
