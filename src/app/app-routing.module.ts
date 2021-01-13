import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExperienceComponent } from './pages/experience/experience.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SkillsComponent } from './pages/skills/skills.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'experience', component: ExperienceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
