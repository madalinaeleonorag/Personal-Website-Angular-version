import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { EXPERIENCE, PROJECTS } from 'src/assets/data';
import { CommonsService } from 'src/app/commons.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomepageComponent implements OnInit {

  experience: any;
  publications: any[] = [];
  projects: any;
  isMobileView: boolean;

  constructor(private router: Router, private _commonsService: CommonsService) {
  }

  ngOnInit(): void {
    this.isMobileView = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent);
    this.experience = EXPERIENCE[0];
    this.projects = PROJECTS.slice(0, 3);

    this._commonsService.publications$.subscribe(publications => {
      this.publications = publications;
    });
  }

  public goToPage(page: string): void {
    this.router.navigateByUrl(`${page}`);
  }
}
