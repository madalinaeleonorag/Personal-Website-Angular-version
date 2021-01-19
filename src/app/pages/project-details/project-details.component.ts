import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PROJECTS } from 'src/assets/data';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectDetailsComponent implements OnInit {

  paramSubscription: Subscription;
  projects: any;
  project: any;

  constructor(private route: ActivatedRoute) {
    this.projects = PROJECTS;
  }

  ngOnInit() {
    this.getProjectByID(this.route.snapshot.paramMap.get('id'));
  }

  getProjectByID(ID) {
    this.project = this.projects.filter(project => project.id == ID)[0];
    console.log('this.project', this.project)
  }

}
