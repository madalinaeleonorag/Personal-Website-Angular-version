import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Material imports
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatExpansionModule } from '@angular/material/expansion';

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
    ExperienceJobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatExpansionModule
  ],
  exports: [MatProgressBarModule, MatExpansionModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
