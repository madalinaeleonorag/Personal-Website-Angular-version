import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PROJECTS } from 'src/assets/data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent implements OnInit {

  projects;

  constructor() {
    this.projects = PROJECTS;
  }

  ngOnInit(): void {
  }

}
