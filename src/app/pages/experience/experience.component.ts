import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AwardModel, EducationModel, ExperienceModel } from 'src/app/data.model';
import { EXPERIENCE, EDUCATION, AWARDS } from 'src/assets/data';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExperienceComponent implements OnInit {

  public experience: ExperienceModel[] = [];
  public education: EducationModel[] = [];
  public awards: AwardModel[] = [];
  public otherExperiences: ExperienceModel[] = [];

  constructor() {
    this.experience = EXPERIENCE;
    this.education = EDUCATION;
    this.awards = AWARDS;
    this.otherExperiences = this.experience.slice(1, this.experience.length);
  }

  ngOnInit(): void {
  }

}
