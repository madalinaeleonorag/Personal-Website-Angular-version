import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CertificationModel, SkillModel } from 'src/app/data.model';
import { CERTIFICATIONS, SKILLS } from 'src/assets/data';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SkillsComponent implements OnInit {

  public skills: SkillModel[];
  public certifications: CertificationModel[];

  columns: string[] = ['logo', 'name', 'organization'];

  constructor() {
    this.skills = SKILLS;
    this.certifications = CERTIFICATIONS;
  }

  ngOnInit(): void {
  }
}
