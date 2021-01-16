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
      { name: 'HTML5', level: 3, color: '#E85D25', logo: 'HTML5' }
    ],
    CSS: [
      { name: 'CSS3', level: 2, color: '#249CDA', logo: 'CSS3' },
      { name: 'SCSS', level: 2, color: '#C96195', logo: 'SCSS' },
      { name: 'Bootstrap', level: 2, color: '#533B78', logo: 'Bootstrap' }
    ],
    Javascript: [
      { name: 'Javascript', level: 3, color: '#EFD81D', logo: 'Javascript' },
      { name: 'Vue.js', level: 3, color: '#3FB27F', logo: 'Vuejs' },
      { name: 'Vuex', level: 3, color: '#33475B', logo: 'Vuex' },
      { name: 'Angular', level: 3, color: '#BD002E', logo: 'Angular' },
      { name: 'JQuery', level: 1, color: '#0864A7', logo: 'JQuery' },
      { name: 'Ionic', level: 2, color: '#367CF7', logo: 'Ionic' },
      { name: 'React.js', level: 0, color: '#50BBD7', logo: 'Reactjs' }
    ],
    CMS: [
      { name: 'Wordpress', level: 1, color: '#207196', logo: 'Wordpress' }
    ],
    Other: [
      { name: 'Github', level: 3, color: '#302F2F', logo: 'Github' },
      { name: 'Git', level: 3, color: '#E84E31', logo: 'Git' },
      { name: 'NoSQL', level: 2, color: '#F7C52B', logo: 'NoSQL' },
      { name: 'Photoshop', level: 2, color: '#001D34', logo: 'Photoshop' },
      { name: 'Lightroom', level: 1, color: '#0A232F', logo: 'Lightroom' }
    ]
  };
  CERTIFICATIONS = [
    {
      logo: 'https://media-exp1.licdn.com/dms/image/C4E0BAQGfKOtAsJ7gOQ/company-logo_200_200/0/1591028793640?e=1619049600&v=beta&t=Ai-TmZlun2w7Ti6I-MztBaw97qRqfUV4Di-_Y6m2qq8',
      name: 'IBM Mentor',
      organization: 'IBM',
      issueDate: 'Dec 2020',
      url: 'https://www.youracclaim.com/badges/841adfea-65df-4a8e-bbe1-267d70cb6a21'
    },
    {
      logo: 'https://media-exp1.licdn.com/dms/image/C4E0BAQGfKOtAsJ7gOQ/company-logo_200_200/0/1591028793640?e=1619049600&v=beta&t=Ai-TmZlun2w7Ti6I-MztBaw97qRqfUV4Di-_Y6m2qq8',
      name: 'JavaScript Front End Development',
      organization: 'IBM',
      issueDate: 'Dec 2020',
      url: 'https://www.youracclaim.com/badges/b6792b26-e919-4de1-bc24-d4192439aa50'
    },
    {
      logo: 'https://media-exp1.licdn.com/dms/image/C560BAQH0VNXBrdkklA/company-logo_200_200/0/1593711193383?e=1619049600&v=beta&t=lrBAcOWGtkwOM3MtvBw55FRiEHzMyNwaaeJycjzvC7k',
      name: 'Web Design for Web Developers: Build Beautiful Websites!',
      organization: 'Udemy',
      issueDate: 'Sep 2020',
      url: 'https://udemy-certificate.s3.amazonaws.com/image/UC-4b147be3-753e-47b3-bd44-df452ffc3018.jpg?v=1601294558000'
    },
    {
      logo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQE0iRUqSJueUw/company-logo_200_200/0/1519902704390?e=1619049600&v=beta&t=AmcNPqTADleh6FV8bDZ1yJhJb7QcwaEoZha72rhz4TY',
      name: 'ES SET English Certificate',
      organization: 'EF Standard English Test (EF SET)',
      issueDate: 'Jul 2020',
      url: 'https://www.efset.org/cert/V3b9C2'
    },
    {
      logo: 'https://media-exp1.licdn.com/dms/image/C4E0BAQGfKOtAsJ7gOQ/company-logo_200_200/0/1591028793640?e=1619049600&v=beta&t=Ai-TmZlun2w7Ti6I-MztBaw97qRqfUV4Di-_Y6m2qq8',
      name: 'Enterprise Design Thinking Practitioner',
      organization: 'IBM',
      issueDate: 'Mar 2020',
      url: 'https://www.youracclaim.com/badges/f28084ab-7407-4d30-8f84-e612adc40402'
    },
    {
      logo: 'https://media-exp1.licdn.com/dms/image/C4E0BAQGfKOtAsJ7gOQ/company-logo_200_200/0/1591028793640?e=1619049600&v=beta&t=Ai-TmZlun2w7Ti6I-MztBaw97qRqfUV4Di-_Y6m2qq8',
      name: 'IBM Agile Explorer',
      organization: 'IBM',
      issueDate: 'Mar 2020',
      url: 'https://www.youracclaim.com/badges/8ed472e8-38c5-42c0-aee7-c1993e9f737f'
    },
    {
      logo: 'https://media-exp1.licdn.com/dms/image/C4E0BAQGfKOtAsJ7gOQ/company-logo_200_200/0/1591028793640?e=1619049600&v=beta&t=Ai-TmZlun2w7Ti6I-MztBaw97qRqfUV4Di-_Y6m2qq8',
      name: 'Insurance Industry Foundations',
      organization: 'IBM',
      issueDate: 'Oct 2019',
      url: 'https://www.youracclaim.com/badges/073a4a5e-b2f0-4165-8684-c6a427a005b3'
    },
    {
      logo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQGxoHjf6gCmyQ/company-logo_200_200/0/1601991684673?e=1619049600&v=beta&t=ZDc7BD5euDuuUZaJHgPgoZxpUvn_Sh49rmRau3-pGbw',
      name: '"Live for the story" Canon Summer school',
      organization: 'Canon',
      issueDate: 'Jul 2018'
    },
    {
      logo: 'https://ecdl.ro/uploads/files/ECDL_SHORT_LOGO_WITH_REGISTRATION_RGB.jpg',
      name: 'ECDL Complete',
      organization: 'ECDL Romania',
      issueDate: 'May 2015'
    },
    {
      logo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQHiNSL4Or29cg/company-logo_200_200/0/1519856215226?e=1619049600&v=beta&t=wqGS0p4XpSRfUOSwlJ1_GDzkLcGNhFrMFdkps_mlOHc',
      name: 'Google Digital Garage',
      organization: 'Google'
    }
  ];
  keysSkills: string[];

  constructor() {
    this.keysSkills = Object.keys(this.SKILLS);
  }

  ngOnInit(): void {
  }

}
