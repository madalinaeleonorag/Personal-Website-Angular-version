import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CERTIFICATIONS, SKILLS } from 'src/assets/data';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SkillsComponent implements OnInit {

  skills: any;
  certifications: any;
  keysSkills: string[];

  columns: string[] = ['logo', 'name', 'organization'];

  constructor() {
    this.skills = SKILLS;
    this.certifications = CERTIFICATIONS;
    this.keysSkills = Object.keys(this.skills);
  }

  ngOnInit(): void {
  }

}
