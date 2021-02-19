import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PROJECTS } from 'src/assets/data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent implements OnInit {

  data;
  FILTERS = ['ALL', 'Design', 'Programming'];

  constructor() {
    this.data = PROJECTS;
  }

  ngOnInit(): void {
  }

  getD  
}
