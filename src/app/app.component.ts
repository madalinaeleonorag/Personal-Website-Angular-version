import { Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AWARDS, CERTIFICATIONS, DESIGNPROJECTS, EDUCATION, EXPERIENCE, RECOMMENDATIONS, SKILLS } from 'src/assets/data';
import { CommonsService } from './commons.service';
import { CustomDialogComponent } from './components/custom-dialog/custom-dialog.component';
import { PublicationModel, ProjectModel, ExperienceModel, EducationModel, AwardModel, SkillModel, CertificationModel } from './data.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  public publications: PublicationModel[] = [];
  public isMobileView: boolean;
  public projectsTechnology: ProjectModel[] = [];
  public projectsDesign: ProjectModel[] = [];
  public experience: ExperienceModel[] = [];
  public education: EducationModel[] = [];
  public awards: AwardModel[] = [];
  public skills: SkillModel[];
  public certifications: CertificationModel[];
  public recommendations: any[];

  columns: string[] = ['logo', 'name', 'organization'];

  constructor(private commonsService: CommonsService, private el: ElementRef, public dialog: MatDialog) {
    this.skills = SKILLS;
    this.certifications = CERTIFICATIONS;

    this.experience = EXPERIENCE;
    this.education = EDUCATION;
    this.awards = AWARDS;
  }

  ngOnInit(): void {
    this.commonsService.getDataFromAPIs();
    this.commonsService.cookieConsoleMessage();

    this.isMobileView = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent);
    this.projectsDesign = DESIGNPROJECTS;
    this.recommendations = RECOMMENDATIONS;

    this.commonsService.publications$.subscribe(publications => {
      this.publications = publications;
    });

    this.commonsService.repositories$.subscribe(repositories => {
      this.projectsTechnology = repositories;
    });
  }

  public openDialog(type: string, data: any): void {
    this.dialog.open(CustomDialogComponent, {
      data: { type, data }
    });
  }

  public openGitHub(): void {
    this.commonsService.openNewTab('https://github.com/madalinaeleonorag');
  }

  public openMedium(): void {
    this.commonsService.openNewTab('https://madalinaeleonorag.medium.com/');
  }
}
