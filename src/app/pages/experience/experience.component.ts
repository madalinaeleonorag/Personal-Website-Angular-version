import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExperienceComponent implements OnInit {

  EXPERIENCE = [
    {
      companyName: 'IBM iX',
      role: 'Front End Developer',
      dateStart: 'Dec 2018',
      dateEnd: 'Present',
      location: 'Bucharest, Romania',
      description: `
      <b>Client 1</b><br>
      <i>03/2019 - 03/2020</i><br>
      Industry: Insurance<br>
      Assignment description:<br>
      - Develop Web based applications including UX design, application building and supporting solutions;<br>
      - Collaborate with back-end developers and web designers to improve usability;<br>
      - Get feedback from, and build solutions for, users and customers;<br>
      - Create quality mockups and prototypes;<br>
      - Stay up-to-date on emerging technologies;<br>
      - Participate in shadowing sessions with Senior Front End Developers in solving different problems;<br>
      - Attended relevant courses for the knowledge used in my field;<br>
      - Investigate and fixed vulnerabilities in packages.<br>
      Contribution:<br>
      - I delivered a good quality presentation website for our client in order to present our projects to their customers, in a small amount of time so the client was able to see the results and to use it;<br>
      - I investigated and solved some vulnerabilities from the applications;<br>
      - I contributed actively on a project from march and until the end of November, by helping other colleagues with code review and implementing reusable components. I also helped taking decisions in business rules and in development process;<br>
      - I participated in every meeting and decision in a proactive way in order to deliver a quality and clean code which meets the client requirements. I also suggested various changes to the design that was taken into account.<br>
      <b>Technologies:</b> Angular, Ionic, Sass, TypeScript, REST, Capacitor, RxJs<br><br>
      <b>Client 2</b><br>
      <i>03/2020 - 03/2020</i><br>
      Industry: Retail<br>
      Assignment description:<br>
      - Redesigning the on-boarding process for non plastic material and packaging suppliers onto the materials library and reimagining the presentation and navigation of the library in parallel.<br>
      Contribution:<br>
      - I participated in discussions with the design and front-end team in order to clarify and suggest edits so the user can have a better experience using the website;<br>
      - I created reusable pages using React.js which corresponds to the design;<br>
      - I created dynamic forms using Formik framework for the registration of new plastic free materials.<br>
      <b>Technologies:</b> React.js<br><br>
      <b>Client 3</b><br>
      <i>04/2020 - to date</i><br>
      Industry: Retail<br>
      Assignment description:<br>
      - Being a member of the a subdivision from the team and delivering features and quality code.<br>
      Contribution:<br>
      - I created new components and features for the application in a way that we can reuse them when it's need;<br>
      - I helped both design and development departments to take decisions in order to deliver the best features;<br>
      - I learned better ways to solve the problems that appears during the development;<br>
      - Delivered WYSIWYG (What You See Is What You Get), a feature that wants to improve the customer experience regarding the promotional codes.The first phase included changing the design of both coupons and product promotions, including more descriptive text and a user-friendly design, changes made throughout the application, on all banners. In the same phase was included the creation of the right drawer, which replaces the pop-up with the description of the promotion or the description page for it, being available by clicking on the link with the coupon / promotion details. If there are multiple promotions for a single product, they are displayed as a total, and will be described accordingly in the right drawer. The second phase includes the implementation of the new API response, which includes a new possibility to process the offers, displaying the requirement quantity, following that on the stores where the feature is activated, to display and if the offer has been completed and benefit from it. The new treatment system is visible both in the coupon design, in the mini-cart or in the top menu, in the right drawer and in the product page.<br>
      <b>Technologies:</b> Angular, Sass, TypeScript, REST, RxJs, Adobe Experience Manager, VirtualBox<br>`,
      companyLogo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQEEhxqhOHJVUA/company-logo_200_200/0/1525123751467?e=1618444800&v=beta&t=tAnznEreYDswd0JJE-g8HdvJrCVhwAN_WvxGdBxS1aQ',
      skill: ['Angular', 'Ionic', 'Sass', 'TypeScript', 'REST', 'Capacitor', 'RxJs', 'React.js', 'Adobe Experience Manager', 'VirtualBox', 'Jira'],
    },
    {
      companyName: 'OTP Bank',
      role: 'Project - Referent',
      dateStart: 'Nov 2017',
      dateEnd: 'Dec 2017',
      location: 'Bucharest, Romania',
      description: 'The main responsibility was the selection of the clients that were in line with the requirements for digitization of bank transfers, within the project Digital Ambassador',
      companyLogo: 'https://media-exp1.licdn.com/dms/image/C4E0BAQHp7dhOc8uDUQ/company-logo_200_200/0/1600108531146?e=1618444800&v=beta&t=ICwjhVXsA3S4IQ6u-U-jBYkjPDzTjcipb8bxqPC_F7s',
      skill: []
    },
    {
      companyName: 'Groupe Renault',
      role: 'Practicant - Drive your future',
      dateStart: 'Jun 2017',
      dateEnd: 'Sept 2017',
      location: 'Bucharest, Romania',
      description: 'Database maintenance using my own Matlab scripts',
      companyLogo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQEuvhNwiJCyZw/company-logo_200_200/0/1610449180280?e=1618444800&v=beta&t=UVG0Xg3Ie6rz4MW6Pm6J3Ta5btoCsTrZk50YTHJZhkU',
      skill: ['Matlab']
    },
    {
      companyName: 'DB Schenker',
      role: 'Practitioner - Financial accountant',
      dateStart: 'May 2017',
      dateEnd: 'Jun 2017',
      location: 'Bucharest, Romania',
      description: 'Specialized practice in financial accounting',
      companyLogo: 'https://media-exp1.licdn.com/dms/image/C560BAQE2argdPgynxQ/company-logo_200_200/0/1603714685129?e=1618444800&v=beta&t=fT9L8bRpvfbTyfjCOEMd3LfuvVC5cETSRX7gK53SBIA',
      skill: ['SAP', 'Basic accountancy ']
    },
    {
      companyName: 'Telekom Romania',
      role: 'Inbound Agent',
      dateStart: 'Feb 2016',
      dateEnd: 'Jun 2017',
      location: 'Bucharest, Romania',
      description: 'Taking calls and solving the situations encountered by clients, making recordings and offering them.',
      companyLogo: 'https://media-exp1.licdn.com/dms/image/C4E0BAQHhi7yDzxguBQ/company-logo_200_200/0/1591696739930?e=1618444800&v=beta&t=6JQBq6aZFNdS8-GIPsmGPpE21aNsss4ycZuNFQk--4M',
      skill: ['Work under pressure', 'Adaptability', 'Multitasking']
    },
    {
      companyName: 'Springtime',
      role: 'Cashier and Comercial Worker',
      dateStart: 'Aug 2015',
      dateEnd: 'Dec 2015',
      location: 'Bucharest, Romania',
      description: 'Making orders as quickly and accurately, respecting customer requirements',
      companyLogo: 'https://www.springtime.ro/workspace/img/Logo-Site.png',
      skill: ['Meeting customer expectations', 'Multitasking', 'Work under pressure']
    },
    {
      companyName: 'Kantar Millward Brown Romania',
      role: 'Survey Operator',
      dateStart: 'May 2015',
      dateEnd: 'Aug 2015',
      location: 'Bucharest, Romania',
      description: 'Recruitment of people meeting the criteria communicated',
      companyLogo: 'https://media-exp1.licdn.com/dms/image/C560BAQETvYin9MN05w/company-logo_200_200/0/1579084333483?e=1618444800&v=beta&t=L_ANBm4wO7v6WoW5D3vNvoDP_jm-7Za0bWdgcbr2q18',
      skill: ['Persuasivity']
    }
  ]
  otherExperiences = [];
  EDUCATION = [
    {
      school: 'Universitatea Româno-Americană din București',
      degree: 'Master\'s degree',
      fieldOfStudy: 'Computer/Information Technology Administration and Management',
      startYear: '2018',
      endYear: '2020',
      grade: '9.66',
      logo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQHjuCqBJaQ94w/company-logo_200_200/0/1519912629039?e=1618444800&v=beta&t=0AXa7bstZ1nG0hQ5M4GW4L473FOdVXwejrE79X9XZBE',
      activities: 'Participation in scientific communication session with transportation optimisation in pl/sql and an article regarding security for client-server applications',
      description: 'I\'ve assimilated informations about IOT, mobile applications development, web technologies, AI, GDPR, PL/SQL, BigData, project management, WordPress, security of computer networks and E-Commerce. Those knowledges are proved by the projects worked for the graduation of the course.'
    },
    {
      school: 'Universitatea Româno-Americană din București',
      fieldOfStudy: 'Computer/Information Technology Administration and Management',
      degree: 'Licentiate degree',
      startYear: '2015',
      endYear: '2018',
      grade: '9.50',
      logo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQHjuCqBJaQ94w/company-logo_200_200/0/1519912629039?e=1618444800&v=beta&t=0AXa7bstZ1nG0hQ5M4GW4L473FOdVXwejrE79X9XZBE',
      activities: 'Participation in scientific communication session with micro and macro economy, management and digital marketing',
      description: 'The knowledge is supported by practical projects to prove a good assimilation of basic information. These are both economics, such as management, economics, statistics, accounting, office, marketing, econometrics and programming in various languages such as C ++, C # (Console and Windows Forms), Access databases, SQL, HTML, PHP.'
    },
    {
      school: 'Theoretical High School Nichita Stanescu',
      degree: 'High school',
      fieldOfStudy: 'Mathematical Informatics',
      startYear: '2011',
      endYear: '2015',
      grade: '',
      logo: 'https://www.admitereliceu.ro/uploads/school/9/6/32/300x200/0_53_sigla.jpg',
      activities: '',
      description: 'Acquiring logical and organizational thinking.'
    }
  ]
  VOLUNTEER = [
    {
      startYear: 'Aug 2014',
      endYear: 'Nov 2014',
      description: 'Theater project with the stage of frequent social situations for finding solutions',
      role: 'Role Player',
      organization: 'ArtFusion',
      logo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQE0R_odMk40zQ/company-logo_200_200/0/1583400910416?e=1619049600&v=beta&t=FrnDEuYXI-gv_NLAZr7e2xMe2vrazFjnUsY0HhPQu2Y'
    }
  ];
  AWARDS = [
    {
      name: '2nd place at Rau-DevHack Hackathon',
      date: 'Apr 2019',
      description: 'Creating an application to help users choose the most recommended photographer for their event, according to their visual preferences, budget and period, giving photographers easier management on the event calendar and applications.'
    },
    {
      name: '1st place for Web&Mobile Challenge at DevHacks',
      date: 'Nov 2018',
      description: `
      Our result should allows candidates from Romania the possibility to offer reviews/ratings to companies about key areas such as:<br>
        - recruitment process;<br>
        - work environment (team, schedule, etc);<br>
        - trainings, learning and development opportunities;<br>
        - salary & benefits;<br>
        - work-life balance;<br>
        - management;<br>
        - internal systems (procedures, values, way of working);<br>
        - other relevant areas;<br>
        The aim of this product is to help candidates find the employer that best suits their needs and personality, something different.<br>
        The target audience of the product will be made up students and young professionals.
      `
    },
    {
      name: 'Note - IE Robot Contest',
      date: 'May 2014',
      description: 'Edition V-organized in Electrical Engineering Days 2014 in Politehnica University.'
    }
  ];
  PUBLICATIONS = [
    {
      name: 'How I personalized my GitHub Overview',
      date: 'Jan 2021',
      description: '',
      url: 'https://madalinaeleonorag.medium.com/how-i-personalized-my-github-overview-7144fd15d1e1',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Medium_logo_Monogram.svg/1200px-Medium_logo_Monogram.svg.png',
      organization: 'Medium'
    },
    {
      name: 'My JavaScriptmas Journey 🎄',
      date: 'Dec 2020',
      description: '',
      url: 'https://madalinaeleonorag.medium.com/my-javascriptmas-journey-69a29ea5845a',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Medium_logo_Monogram.svg/1200px-Medium_logo_Monogram.svg.png',
      organization: 'Medium'
    },
    {
      name: 'Providing Security for Client-Server Applications',
      date: '2019',
      description: '',
      url: 'https://df38f438-aa8a-4f56-925f-3f56c5f61c2a.filesusr.com/ugd/b8ce10_e3835a03a0664499927aafdd75540127.pdf',
      logo: 'https://image.isu.pub/170105105000-13074954e5ffd8949525023c1f6c49c3/jpg/page_1.jpg',
      organization: 'Research Focus'
    },
    {
      name: 'Dreptul la timp',
      date: 'Jan 11, 2013',
      description: 'Publishing poems in high school magazine',
      url: '',
      logo: 'https://www.admitereliceu.ro/uploads/school/9/6/32/300x200/0_53_sigla.jpg',
      organization: 'Liceul Teoretic Nichita Stanescu'
    }
  ]

  constructor() {
    this.otherExperiences = this.EXPERIENCE.slice(1, this.EXPERIENCE.length);
  }

  ngOnInit(): void {
  }

}
