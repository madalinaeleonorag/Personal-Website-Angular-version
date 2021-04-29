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

// Modal gallery imports
import 'hammerjs';
import 'mousetrap';
import { GalleryModule } from '@ks89/angular-modal-gallery';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './components/contact/contact.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProgressBarColorsDirective } from './directives/progress-bar-colors.directive';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ExperienceCardComponent } from './components/experience-card/experience-card.component';
import { EducationLevelComponent } from './components/education-level/education-level.component';
import { AwardsComponent } from './components/awards/awards.component';
import { CustomCardComponent } from './components/custom-card/custom-card.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SkillCardComponent } from './components/skill-card/skill-card.component';
import { CertificationCardComponent } from './components/certification-card/certification-card.component';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { CustomSvgComponent } from './components/custom-svg/custom-svg.component';
import { CustomCategoryButtonComponent } from './components/custom-category-button/custom-category-button.component';
import { CustomChipComponent } from './components/custom-chip/custom-chip.component';
import { CustomSocialCardComponent } from './components/custom-social-card/custom-social-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomepageComponent,
    HeaderComponent,
    SkillsComponent,
    ProgressBarColorsDirective,
    ExperienceComponent,
    ExperienceCardComponent,
    EducationLevelComponent,
    AwardsComponent,
    CustomCardComponent,
    ProjectDetailsComponent,
    NotFoundComponent,
    SkillCardComponent,
    CertificationCardComponent,
    CustomButtonComponent,
    CustomSvgComponent,
    CustomCategoryButtonComponent,
    CustomChipComponent,
    CustomSocialCardComponent,
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
