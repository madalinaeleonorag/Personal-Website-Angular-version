import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EXPERIENCE, DESIGNPROJECTS } from 'src/assets/data';
import { CommonsService } from 'src/app/commons.service';
import { ExperienceModel, ProjectModel, PublicationModel } from 'src/app/data.model';
declare var particlesJS: any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomepageComponent implements OnInit {

  public experience: ExperienceModel;
  public publications: PublicationModel[] = [];
  public isMobileView: boolean;
  public projectsTechnology: ProjectModel[] = [];
  public projectsDesign: ProjectModel[] = [];

  constructor(private commonsService: CommonsService) {
  }

  ngOnInit(): void {
    this.isMobileView = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent);
    this.experience = EXPERIENCE[0];
    this.projectsDesign = DESIGNPROJECTS;

    this.commonsService.publications$.subscribe(publications => {
      this.publications = publications;
    });

    this.commonsService.repositories$.subscribe(repositories => {
      this.projectsTechnology = repositories;
    });

    particlesJS.load('particles-js', '../assets/particles.json', null);
  }

  public openGitHub(): void {
    this.commonsService.openNewTab('https://github.com/madalinaeleonorag');
  }

  public openMedium(): void {
    this.commonsService.openNewTab('https://madalinaeleonorag.medium.com/');
  }
}
