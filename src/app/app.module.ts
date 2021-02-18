import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Material imports
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

// Modal galery imports
import 'hammerjs';
import 'mousetrap';
import { GalleryModule } from '@ks89/angular-modal-gallery';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './pages/contact/contact.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProgressBarColorsDirective } from './directives/progress-bar-colors.directive';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ExperienceJobComponent } from './components/experience-job/experience-job.component';
import { EducationLevelComponent } from './components/education-level/education-level.component';
import { VolunteerComponent } from './components/volunteer/volunteer.component';
import { AwardsComponent } from './components/awards/awards.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SkillCardComponent } from './components/skill-card/skill-card.component';
import { InfoCardComponent } from './components/info-card/info-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomepageComponent,
    HeaderComponent,
    SkillsComponent,
    ProgressBarColorsDirective,
    ExperienceComponent,
    ExperienceJobComponent,
    EducationLevelComponent,
    VolunteerComponent,
    AwardsComponent,
    PublicationsComponent,
    ProjectsComponent,
    ProjectCardComponent,
    ProjectDetailsComponent,
    NotFoundComponent,
    SkillCardComponent,
    InfoCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatChipsModule,
    MatTabsModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSelectModule,
    GalleryModule.forRoot(),
    IvyCarouselModule,
    HttpClientModule,
    MatMenuModule,
    MatTableModule
  ],
  exports: [
    MatProgressBarModule,
    MatExpansionModule,
    MatChipsModule,
    MatCardModule,
    MatSelectModule,
    MatTabsModule,
    MatMenuModule,
    MatTableModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
