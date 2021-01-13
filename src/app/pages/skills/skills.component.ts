import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SkillsComponent implements OnInit {

  SKILLS: {} = {
    HTML: [
      { name: 'HTML5', level: 3, color: '#E85D25', logo: 'HTML5'}
    ],
    CSS: [
      { name: 'CSS3', level: 2, color: '#249CDA', logo: 'CSS3'},
      { name: 'SCSS', level: 2, color: '#C96195', logo: 'SCSS'},
      { name: 'Bootstrap', level: 2, color: '#533B78', logo: 'Bootstrap'}
    ],
    Javascript: [
      { name: 'Javascript', level: 3, color: '#EFD81D', logo: 'Javascript'},
      { name: 'Vue.js', level: 3, color: '#3FB27F', logo: 'Vuejs'},
      { name: 'Vuex', level: 3, color: '#33475B', logo: 'Vuex'},
      { name: 'Angular', level: 3, color: '#BD002E', logo: 'Angular'},
      { name: 'JQuery', level: 1, color: '#0864A7', logo: 'JQuery'},
      { name: 'Ionic', level: 2, color: '#367CF7', logo: 'Ionic'},
      { name: 'React.js', level: 0, color: '#50BBD7', logo: 'Reactjs'}
    ],
    CMS: [
      { name: 'Wordpress', level: 1, color: '#207196', logo: 'Wordpress'}
    ],
    Other: [
      { name: 'Github', level: 3, color: '#302F2F', logo: 'Github'},
      { name: 'Git', level: 3, color: '#E84E31', logo: 'Git'},
      { name: 'NoSQL', level: 2, color: '#F7C52B', logo: 'NoSQL'},
      { name: 'Photoshop', level: 2, color: '#001D34', logo: 'Photoshop'},
      { name: 'Lightroom', level: 1, color: '#0A232F', logo: 'Lightroom'}
    ]
  };
  keysSkills: string[];

  constructor() {
    this.keysSkills = Object.keys(this.SKILLS);
  }

  ngOnInit(): void {
  }

}
