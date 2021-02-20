import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExperienceCardComponent implements OnInit {

  @Input() experience;
  @Input() parentPage: string;

  constructor() { }

  ngOnInit(): void {
  }

}
