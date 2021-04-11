import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { EXPERIENCE, PROJECTS, PUBLICATIONS } from 'src/assets/data';
import { Image } from '@ks89/angular-modal-gallery';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomepageComponent implements OnInit {

  images: any;
  selfies = [
    'assets/selfies/1.jpg',
    'assets/selfies/2.jpg',
    'assets/selfies/3.jpg'
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
    this.projects = PROJECTS.slice(0, 3);

    this.images = this.selfies ? this.selfies.map((imageUrl, index) => new Image(index, {
      img: imageUrl
    })) : [];

  }

  goToPage(page: string) {
    this.router.navigateByUrl(`${page}`);
  }
}
