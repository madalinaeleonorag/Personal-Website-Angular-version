import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AWARDS, CERTIFICATIONS, EDUCATION, EXPERIENCE, PHOTOS, RECOMMENDATIONS, SKILLS } from 'src/assets/data';
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
  public photos: ProjectModel[] = [];
  public experience: ExperienceModel[] = [];
  public education: EducationModel[] = [];
  public awards: AwardModel[] = [];
  public skills: SkillModel[];
  public certifications: CertificationModel[];
  public recommendations: any[];
  public seeText = 'See more';
  public seeMore: boolean;

  columns: string[] = ['logo', 'name', 'organization'];

  constructor(private commonsService: CommonsService, public dialog: MatDialog) {
    this.skills = SKILLS;
    this.certifications = CERTIFICATIONS;
    this.experience = EXPERIENCE;
    this.education = EDUCATION;
    this.awards = AWARDS;
    this.photos = PHOTOS;
    this.recommendations = RECOMMENDATIONS.slice(0, 3);
    this.seeMore = true;
  }

  ngOnInit(): void {
    this.commonsService.getDataFromAPIs();
    this.commonsService.cookieConsoleMessage();

    this.isMobileView = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent);

    this.commonsService.publications$.subscribe(publications => {
      this.publications = publications;
    });

    this.commonsService.repositories$.subscribe(repositories => {
      this.projectsTechnology = repositories;
    });
    this.decodeText();
  }

  public openDialog(type: string, data: any): void {
    this.dialog.open(CustomDialogComponent, {
      data: { type, data }
    });
  }

  public openGitHub(): void {
    this.commonsService.openNewTab('https://github.com/madalinaeleonorag');
  }

  public open500px(): void {
    this.commonsService.openNewTab('https://500px.com/p/madalinaeleonorag?view=photos');
  }

  public openMedium(): void {
    this.commonsService.openNewTab('https://madalinaeleonorag.medium.com/');
  }

  public loadMoreRecommendations(): void {
    this.seeMore = !this.seeMore;
    this.recommendations = this.seeMore ? RECOMMENDATIONS.slice(0, 3) : RECOMMENDATIONS;
    this.seeText = this.seeMore ? 'See more' : 'See less';
  }

  private decodeText(): void {
    const text = document.getElementsByClassName('decode-text')[0];
    const state = [];
    for (let i = 0, j = text.children.length; i < j; i++) {
      text.children[i].classList.remove('state-1', 'state-2', 'state-3');
      state[i] = i;
    }

    const shuffled = this.shuffle(state);

    for (let i = 0, j = shuffled.length; i < j; i++) {
      const child = text.children[shuffled[i]];
      const classes = child.classList;

      const state1Time = Math.round(Math.random() * (2000 - 300)) + 50;
      if (classes.contains('text-animation')) {
        setTimeout(() => this.firstStages(child), state1Time);
      }
    }
  }

  private firstStages(child: any): void {
    if (child.classList.contains('state-2')) {
      child.classList.add('state-3');
    } else if (child.classList.contains('state-1')) {
      child.classList.add('state-2');
    } else if (!child.classList.contains('state-1')) {
      child.classList.add('state-1');
      setTimeout(() => this.secondStages(child), 100);
    }
  }

  private secondStages(child: any): void {
    if (child.classList.contains('state-1')) {
      child.classList.add('state-2');
      setTimeout(() => this.thirdStages(child), 100);
    }
    else if (!child.classList.contains('state-1')) {
      child.classList.add('state-1');
    }
  }

  private thirdStages(child: any): void {
    if (child.classList.contains('state-2')) {
      child.classList.add('state-3');
    }
  }

  private shuffle(array: any): any {
    let currentIndex = array.length;
    let temporaryValue: any;
    let randomIndex: any;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
}
