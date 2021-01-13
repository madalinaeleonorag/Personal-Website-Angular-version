import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-skill-progress-bar',
  templateUrl: './skill-progress-bar.component.html',
  styleUrls: ['./skill-progress-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SkillProgressBarComponent implements OnInit {

  @Input() skill;

  // 'Begginer' = 0, 'Medium' = 1, 'Intermediate' = 2, 'Advanced'= 3 
  LEVELS = [{
    name: 'Begginer', value: 20
  }, {
    name: 'Medium', value: 50
  }, {
    name: 'Intermediate', value: 80
  }, {
    name: 'Advanced', value: 100
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
