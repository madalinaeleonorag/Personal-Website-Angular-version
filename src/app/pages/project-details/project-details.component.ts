import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DESIGNPROJECTS } from 'src/assets/data';
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
  public images: {} = {};
  public imagesKeys: string[];

  constructor(private route: ActivatedRoute, private commonsService: CommonsService) {
    this.projects = DESIGNPROJECTS;
  }

  ngOnInit(): void {
    this.getProjectByID(+this.route.snapshot.paramMap.get('id'));
  }

  private getProjectByID(ID: number): void {
    this.project = this.projects.filter(project => project.id === ID)[0];
    if (this.project.images) {
      this.imagesKeys = Object.keys(this.project.images);
      this.imagesKeys.forEach(category => {
        this.images[category] = this.project.images[category].map((imageUrl, index) => new Image(index, {
          img: imageUrl
        })
        );
      });
    } else {
      this.images = [];
    }
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
