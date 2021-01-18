import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EXPERIENCE, EDUCATION, VOLUNTEER, AWARDS, PUBLICATIONS } from 'src/assets/data';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExperienceComponent implements OnInit {

  experience = [];
  education = [];
  volunteer = [];
  awards = [];
  publications = [];
  otherExperiences = [];

  constructor() {
    this.experience = EXPERIENCE;
    this.education = EDUCATION;
    this.volunteer = VOLUNTEER;
    this.awards = AWARDS;
    this.publications = PUBLICATIONS;
    this.otherExperiences = this.experience.slice(1, this.experience.length);
  }

  ngOnInit(): void {
  }

}
