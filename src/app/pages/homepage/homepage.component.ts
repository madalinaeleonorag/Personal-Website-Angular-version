import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { EXPERIENCE, DESIGNPROJECTS, CERTIFICATIONS, SKILLS, AWARDS, EDUCATION } from 'src/assets/data';
import { CommonsService } from 'src/app/commons.service';
import { AwardModel, CertificationModel, EducationModel, ExperienceModel, ProjectModel, PublicationModel, SkillModel } from 'src/app/data.model';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { CustomDialogComponent } from 'src/app/components/custom-dialog/custom-dialog.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomepageComponent implements OnInit {

  public publications: PublicationModel[] = [];
  public isMobileView: boolean;
  public projectsTechnology: ProjectModel[] = [];
  public projectsDesign: ProjectModel[] = [];
  public experience: ExperienceModel[] = [];
  public education: EducationModel[] = [];
  public awards: AwardModel[] = [];
  public otherExperiences: ExperienceModel[] = [];
  public skills: SkillModel[];
  public certifications: CertificationModel[];

  columns: string[] = ['logo', 'name', 'organization'];

  constructor(private commonsService: CommonsService, public dialog: MatDialog) {
    this.skills = SKILLS;
    this.certifications = CERTIFICATIONS;

    this.experience = EXPERIENCE;
    this.education = EDUCATION;
    this.awards = AWARDS;
    this.otherExperiences = this.experience.slice(1, this.experience.length);
  }

  public openDialog(type: string, data: any): void {
    this.dialog.open(CustomDialogComponent, {
      data: {type, data}
    });
  }

  ngOnInit(): void {
    this.isMobileView = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent);
    this.projectsDesign = DESIGNPROJECTS;

    this.commonsService.publications$.subscribe(publications => {
      this.publications = publications;
    });

    this.commonsService.repositories$.subscribe(repositories => {
      this.projectsTechnology = repositories;
    });
  }

  public openGitHub(): void {
    this.commonsService.openNewTab('https://github.com/madalinaeleonorag');
  }

  public openMedium(): void {
    this.commonsService.openNewTab('https://madalinaeleonorag.medium.com/');
  }
}