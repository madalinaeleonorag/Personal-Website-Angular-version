import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PROJECTS } from 'src/assets/data';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  paramSubscription: Subscription;
  details: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getDetailsByIndex(this.route.snapshot.paramMap.get('index'));
  }

  getDetailsByIndex(index) {
    this.details = PROJECTS[index];
  }

}
