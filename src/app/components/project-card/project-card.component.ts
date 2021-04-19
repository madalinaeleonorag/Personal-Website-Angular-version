import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { CommonsService } from 'src/app/commons.service';
import { ProjectModel } from 'src/app/data.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectCardComponent implements OnInit {

  @Input() project: ProjectModel;

  constructor(private commonsService: CommonsService) { }

  ngOnInit(): void {
  }

  public seeDetails(): void {
    this.commonsService.navigateToURL(`/project/${this.project.id}`);
  }

  public openNewTab(type: string): void {
    switch (type) {
      case 'live': this.commonsService.openNewTab(this.project.live);
                   break;
      case 'code': this.commonsService.openNewTab(this.project.code);
                   break;
    }
  }
}
