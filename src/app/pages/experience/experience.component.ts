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
      description: `Assignment history<br><br>
      <b>Team 1</b><br>
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
      <b>Team 2</b><br>
      <i>03/2020 - 03/2020</i><br>
      Industry: Retail<br>
      Assignment description:<br>
      - Redesigning the on-boarding process for non plastic material and packaging suppliers onto the materials library and reimagining the presentation and navigation of the library in parallel.<br>
      Contribution:<br>
      - I participated in discussions with the design and front-end team in order to clarify and suggest edits so the user can have a better experience using the website;<br>
      - I created reusable pages using React.js which corresponds to the design;<br>
      - I created dynamic forms using Formik framework for the registration of new plastic free materials.<br>
      <b>Technologies:</b> React.js<br><br>
      <b>Team 3</b><br>
      <i>04/2020 - to date</i><br>
      Industry: Retail<br>
      Assignment description:<br>
      - Being a member of the a subdivision from the team and delivering features and quality code.<br>
      Contribution:<br>
      - I created new components and features for the application in a way that we can reuse them when it's need;<br>
      - I helped both design and development departments to take decisions in order to deliver the best features;<br>
      - I learned better ways to solve the problems that appears during the development;<br>
      - Delivered WYSIWYG (What You See Is What You Get), a feature that wants to improve the customer experience regarding the promotional codes.The first phase included changing the design of both coupons and product promotions, including more descriptive text and a user-friendly design, changes made throughout the application, on all banners. In the same phase was included the creation of the right drawer, which replaces the pop-up with the description of the promotion or the description page for it, being available by clicking on the link with the coupon / promotion details. If there are multiple promotions for a single product, they are displayed as a total, and will be described accordingly in the right drawer. The second phase includes the implementation of the new API response, which includes a new possibility to process the offers, displaying the requirement quantity, following that on the stores where the feature is activated, to display and if the offer has been completed and benefit from it. The new treatment system is visible both in the coupon design, in the mini-cart or in the top menu, in the right drawer and in the product page.<br>
      <b>Technologies:</b> Angular, Sass, TypeScript, REST, RxJs<br>`,
      companyLogo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQEEhxqhOHJVUA/company-logo_200_200/0/1525123751467?e=1618444800&v=beta&t=tAnznEreYDswd0JJE-g8HdvJrCVhwAN_WvxGdBxS1aQ',
      skill: [],
      accomplishments: []
    },
    {
      companyName: '',
      role: '',
      dateStart: '',
      dateEnd: '',
      location: 'Bucharest, Romania',
      description: '',
      companyLogo: '',
      skill: [],
      accomplishments: []
    }
  ]
  otherExperiences = [];

  constructor() {
    this.otherExperiences = this.EXPERIENCE.slice(1, this.EXPERIENCE.length);
  }

  ngOnInit(): void {
  }

}
