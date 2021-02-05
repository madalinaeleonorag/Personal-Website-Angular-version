import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AWARDS, CERTIFICATIONS, EDUCATION, EXPERIENCE, PROJECTS, PUBLICATIONS } from 'src/assets/data';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomepageComponent implements OnInit {

  images = [
    { path: 'https://scontent.fotp3-1.fna.fbcdn.net/v/t1.0-9/124385651_3069095263305052_6223205536401340435_o.jpg?_nc_cat=111&ccb=2&_nc_sid=174925&_nc_ohc=3fFDXQp6EBIAX-RFghU&_nc_ht=scontent.fotp3-1.fna&oh=77ff43df0fc786ef0633710ebbf2f586&oe=602D16F4' },
    { path: 'https://scontent.fotp3-3.fna.fbcdn.net/v/t1.0-9/122876763_3049612115253367_5958439254972082651_o.jpg?_nc_cat=101&ccb=2&_nc_sid=0debeb&_nc_ohc=dNMPhHYCj2UAX_t3IWm&_nc_ht=scontent.fotp3-3.fna&oh=3d312c1e2d2336c93e54af5f1911879c&oe=603040D8' },
    { path: 'https://scontent.fotp3-3.fna.fbcdn.net/v/t1.0-9/87979236_2796358013912113_7224110459018805248_o.jpg?_nc_cat=102&ccb=2&_nc_sid=cdbe9c&_nc_ohc=SrIZLmNTctIAX8Xg18B&_nc_ht=scontent.fotp3-3.fna&oh=c5c3733a8adbedd63163a20a9dea4a62&oe=602E1510' },
    { path: 'https://scontent.fotp3-3.fna.fbcdn.net/v/t1.0-9/69138846_2610602455821004_5727805971204407296_o.jpg?_nc_cat=108&ccb=2&_nc_sid=0debeb&_nc_ohc=uV9QeJP66MYAX_TQWVt&_nc_ht=scontent.fotp3-3.fna&oh=e2c1f290ccfe738dc8d09e43891e96bb&oe=602E88B6' }
  ];
  experience: any;
  education: any;
  awards: any;
  publication: any;
  projects: any;
  certifications: any;
  isMobileView: boolean;

  constructor(private router: Router) {
  }
  
  ngOnInit(): void {
    this.isMobileView = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent);
    this.experience = EXPERIENCE[0];
    this.education = EDUCATION[0];
    this.awards = AWARDS[0];
    this.publication = PUBLICATIONS[0];
    this.projects = PROJECTS.slice(0, 4);
    this.certifications = CERTIFICATIONS.slice(0,2);
  }

  goToPage(page: string) {
    this.router.navigateByUrl(`${page}`);
  }

}
