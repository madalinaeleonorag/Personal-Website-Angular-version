import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ExperienceModel } from 'src/app/data.model';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExperienceCardComponent implements OnInit {

  @Input() experience: ExperienceModel;
  @Input() parentPage: string;

  constructor() { }

  ngOnInit(): void {
  }

}
