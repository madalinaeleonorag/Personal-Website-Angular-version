import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PROJECTS } from 'src/assets/data';
import { Image } from '@ks89/angular-modal-gallery';
import { ProjectModel } from 'src/app/data.model';
import { CommonsService } from 'src/app/commons.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectDetailsComponent implements OnInit {

  private projects: ProjectModel[];
  public paramSubscription: Subscription;
  public project: ProjectModel;
  public images: Image[];

  constructor(private route: ActivatedRoute, private commonsService: CommonsService) {
    this.projects = PROJECTS;
  }

  ngOnInit(): void {
    this.getProjectByID(+this.route.snapshot.paramMap.get('id'));
  }

  private getProjectByID(ID: number): void {
    this.project = this.projects.filter(project => project.id === ID)[0];
    this.images = this.project.images ? this.project.images.map((imageUrl, index) => new Image(index, {
      img: imageUrl
    })) : [];
  }

  public openNewTab(): void {
    this.commonsService.openNewTab(this.project.live);
  }

}
