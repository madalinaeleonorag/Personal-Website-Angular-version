import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Material imports
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './components/contact/contact.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProgressBarColorsDirective } from './directives/progress-bar-colors.directive';
import { SkillProgressBarComponent } from './components/skill-progress-bar/skill-progress-bar.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ExperienceJobComponent } from './components/experience-job/experience-job.component';
import { EducationLevelComponent } from './components/education-level/education-level.component';
import { CertificationComponent } from './components/certification/certification.component';
import { VolunteerComponent } from './components/volunteer/volunteer.component';
import { CourseComponent } from './components/course/course.component';
import { AwardsComponent } from './components/awards/awards.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    SkillsComponent,
    ProgressBarColorsDirective,
    SkillProgressBarComponent,
    ExperienceComponent,
    ExperienceJobComponent,
    EducationLevelComponent,
    CertificationComponent,
    VolunteerComponent,
    CourseComponent,
    AwardsComponent,
    PublicationsComponent,
    ProjectsComponent,
    ProjectCardComponent,
    ProjectDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatChipsModule,
    MatTabsModule,
    MatCardModule
  ],
  exports: [
    MatProgressBarModule,
    MatExpansionModule,
    MatChipsModule,
    MatCardModule,
    MatTabsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
