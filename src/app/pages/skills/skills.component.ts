import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CERTIFICATIONS, COURSES, SKILLS } from 'src/assets/data';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SkillsComponent implements OnInit {

  skills: any;
  certifications: any;
  courses: any;
  keysSkills: string[];


  constructor() {
    this.skills = SKILLS;
    this.certifications = CERTIFICATIONS;
    this.courses = COURSES;
    this.keysSkills = Object.keys(this.skills);
  }

  ngOnInit(): void {
  }

}
