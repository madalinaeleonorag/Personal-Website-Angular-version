import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { EXPERIENCE, PROJECTS, PUBLICATIONS } from 'src/assets/data';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomepageComponent implements OnInit {

  images = [
    { path: 'assets/selfies/1.jpg' },
    { path: 'assets/selfies/2.jpg' },
    { path: 'assets/selfies/3.jpg' },
    { path: 'assets/selfies/4.jpg' }
  ];
  experience: any;
  publications: any;
  projects: any;
  isMobileView: boolean;

  constructor(private router: Router) {
  }
  
  ngOnInit(): void {
    this.isMobileView = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent);
    this.experience = EXPERIENCE[0];
    this.publications = PUBLICATIONS;
    this.projects = PROJECTS.slice(0, 4);
  }

  goToPage(page: string) {
    this.router.navigateByUrl(`${page}`);
  }
}
