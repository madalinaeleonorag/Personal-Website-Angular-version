import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SkillCardComponent implements OnInit {

  @Input() item;

  // 'Begginer' = 0, 'Medium' = 1, 'Intermediate' = 2, 'Advanced'= 3 
  SKILL_LEVELS = [{
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
