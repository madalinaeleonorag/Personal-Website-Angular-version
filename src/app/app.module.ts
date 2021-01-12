import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './components/contact/contact.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillsComponent } from './pages/skills/skills.component';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ProgressBarColorsDirective } from './directives/progress-bar-colors.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    SkillsComponent,
    ProgressBarColorsDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule
  ],
  exports: [MatProgressBarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
