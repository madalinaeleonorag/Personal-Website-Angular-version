import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectCardComponent implements OnInit {

  @Input() project;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  seeDetails() {
    this.router.navigateByUrl(`/project/${this.project.id}`);
  }

  openNewTab(type: string) {
    switch (type) {
      case 'live': window.open(this.project.live);
      case 'code': window.open(this.project.code)
    }
  }
}
