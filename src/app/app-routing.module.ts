import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {EducationComponent} from "./education/education.component";
import {ProjectExperienceComponent} from "./project-experience/project-experience.component";
import {WorkExperienceComponent} from "./work-experience/work-experience.component";
import {SkillsComponent} from "./skills/skills.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'education',
    component: EducationComponent
  },
  {
    path: 'projects',
    component: ProjectExperienceComponent
  },
  {
    path: 'works',
    component: WorkExperienceComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
