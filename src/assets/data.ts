export const DESIGNPROJECTS = [
    {
        id: 1,
        featured: true,
        name: 'Photography',
        startDate: 'Jun 2018',
        endDate: 'Present',
        type: 'Personal project',
        noDetails: true,
        technologies: ['Photoshop', 'Lightroom', 'Photography'],
        live: 'https://500px.com/p/madalinaeleonorag?view=galleries&',
        logo: 'https://drscdn.500px.org/photo/274673693/q%3D80_m%3D2000/v2?sig=8ca6a504a9b659352523386d6b165d110ff3fc53618fd56f7dc6b136683c7e1d'
    },
    {
        id: 2,
        name: 'Furniture Design',
        startDate: 'Dec 2018',
        featured: true,
        endDate: 'Present',
        technologies: ['Photoshop'],
        type: 'Personal project',
        description: `
            Long time ago I started drawing furniture design for my own place or for others, discovering that I have a passion for it.
        `,
        images: {
            screenshots: [
                '../assets/projects/2/1.png',
                '../assets/projects/2/2.png',
                '../assets/projects/2/3.png',
                '../assets/projects/2/4.png',
                '../assets/projects/2/5.png',
                '../assets/projects/2/6.png',
                '../assets/projects/2/7.png',
                '../assets/projects/2/8.png',
                '../assets/projects/2/9.png'
            ]
        },
        logo: '../assets/projects/2/1.png'
    },
    {
        id: 3,
        name: 'Graphic Design',
        startDate: 'Jun 2015',
        endDate: 'Present',
        featured: true,
        technologies: ['Photoshop'],
        type: 'Personal project',
        description: `
            Providing logos for different clients and pro bono`,
        images: {
            screenshots: [
                'assets/projects/3/1.png',
                'assets/projects/3/2.png',
                'assets/projects/3/3.png',
                'assets/projects/3/4.png',
                'assets/projects/3/5.png',
                'assets/projects/3/6.png'
            ]
        },
        logo: 'assets/projects/3/1.png'
    }
];

export const SKILLS = [
    { name: 'HTML5', level: 3, color: '#E85D25', logo: 'HTML5' },
    { name: 'CSS3', level: 2, color: '#249CDA', logo: 'CSS3' },
    { name: 'Sass', level: 2, color: '#C96195', logo: 'Sass' },
    { name: 'Bootstrap', level: 2, color: '#533B78', logo: 'Bootstrap' },
    { name: 'Javascript', level: 3, color: '#EFD81D', logo: 'Javascript' },
    { name: 'Vue.js', level: 3, color: '#3FB27F', logo: 'Vuejs' },
    { name: 'Vuex', level: 3, color: '#33475B', logo: 'Vuex' },
    { name: 'Angular', level: 3, color: '#BD002E', logo: 'Angular' },
    { name: 'Node.js', level: 0, color: '#539e43', logo: 'nodejs' },
    { name: 'JQuery', level: 1, color: '#0864A7', logo: 'JQuery' },
    { name: 'Postman', level: 2, color: '#ff6c37', logo: 'Postman' },
    { name: 'Ionic', level: 2, color: '#367CF7', logo: 'Ionic' },
    { name: 'React.js', level: 0, color: '#50BBD7', logo: 'Reactjs' },
    { name: 'Wordpress', level: 1, color: '#207196', logo: 'Wordpress' },
    { name: 'Git', level: 3, color: '#E84E31', logo: 'Git' },
    { name: 'NoSQL', level: 2, color: '#F7C52B', logo: 'NoSQL' },
    { name: 'Photoshop', level: 2, color: '#001D34', logo: 'Photoshop' }
];

export const CERTIFICATIONS = [
    {
        logo: '../assets/certifications/Think-like-a-hacker.png',
        name: 'Think like a hacker',
        organization: 'IBM',
        issueDate: 'Sep 2021',
        url: 'https://www.credly.com/badges/2b0b25bd-328e-45c3-8248-85e09c380ef2'
    },
    {
        logo: '../assets/certifications/IBM_Cloud_Essentials.png',
        name: 'IBM Cloud Essentials',
        organization: 'IBM',
        issueDate: 'Jan 2021',
        url: 'https://www.youracclaim.com/badges/26b0884f-9c3a-42f1-be74-6b23c4f6a743'
    },
    {
        logo: '../assets/certifications/Security-_-Privacy-by-Design-Foundational.png',
        name: 'Security and Privacy by Design Foundations',
        organization: 'IBM',
        issueDate: 'Jan 2021',
        url: 'https://www.youracclaim.com/badges/84998ca5-487f-4c61-b1e5-298ec991bb20'
    },
    {
        logo: '../assets/certifications/Watson_and_Cloud_Foundations.png',
        name: 'Watson and Cloud Foundations',
        organization: 'IBM',
        issueDate: 'Jan 2021',
        url: 'https://www.youracclaim.com/badges/11c2db76-b461-4bf9-8a12-9a42663d404f'
    },
    {
        logo: '../assets/certifications/IBM-Mentor.png',
        name: 'IBM Mentor',
        organization: 'IBM',
        issueDate: 'Dec 2020',
        url: 'https://www.youracclaim.com/badges/841adfea-65df-4a8e-bbe1-267d70cb6a21'
    },
    {
        logo: '../assets/certifications/JavaScript-Front-End-Development.png',
        name: 'JavaScript Frontend Development',
        organization: 'IBM',
        issueDate: 'Dec 2020',
        url: 'https://www.youracclaim.com/badges/b6792b26-e919-4de1-bc24-d4192439aa50'
    },
    {
        logo: '../assets/certifications/EF-Standard.png',
        name: 'ES SET English Certificate',
        organization: 'EF Standard English Test (EF SET)',
        issueDate: 'Jul 2020',
        url: 'https://www.efset.org/cert/V3b9C2'
    },
    {
        logo: '../assets/certifications/Badges_v8-07_Practitioner.png',
        name: 'Enterprise Design Thinking Practitioner',
        organization: 'IBM',
        issueDate: 'Mar 2020',
        url: 'https://www.youracclaim.com/badges/f28084ab-7407-4d30-8f84-e612adc40402'
    },
    {
        logo: '../assets/certifications/IBM-Agile-Explorer.png',
        name: 'IBM Agile Explorer',
        organization: 'IBM',
        issueDate: 'Mar 2020',
        url: 'https://www.youracclaim.com/badges/8ed472e8-38c5-42c0-aee7-c1993e9f737f'
    }
];

export const EDUCATION = [
    {
        school: 'Universitatea Româno-Americană din București',
        degree: 'Master\'s degree',
        fieldOfStudy: 'Computer/Information Technology Administration and Management',
        startYear: '2018',
        endYear: '2020',
        grade: '9.66',
        logo: '../assets/logos/romanian-american university.png',
        description: 'I\'ve assimilated informations about IOT, mobile applications development, web technologies, AI, GDPR, PL/SQL, BigData, project management, WordPress, security of computer networks and E-Commerce. Those knowledges are proved by the projects worked for the graduation of the course. Participation in scientific communication session with transportation optimisation in pl/sql and an article regarding security for client-server applications'
    },
    {
        school: 'Universitatea Româno-Americană din București',
        fieldOfStudy: 'Computer/Information Technology Administration and Management',
        degree: 'Licentiate degree',
        startYear: '2015',
        endYear: '2018',
        grade: '9.50',
        logo: '../assets/logos/romanian-american university.png',
        description: 'The knowledge is supported by practical projects to prove a good assimilation of basic information. These are both economics, such as management, economics, statistics, accounting, office, marketing, econometrics and programming in various languages such as C ++, C # (Console and Windows Forms), Access databases, SQL, HTML, PHP. Participation in scientific communication session with micro and macro economy, management and digital marketing'
    }
];

export const AWARDS = [
    {
        name: 'Rau-DevHack Hackathon',
        place: 2,
        date: 'Apr 2019'
    },
    {
        name: 'Web&Mobile Challenge at DevHacks',
        date: 'Nov 2018',
        place: 1
    }
];

export const RECOMMENDATIONS = [
    {
        text: 'I worked with Madalina on the same project for over a year. Even though she started as a Junior Developer, she quickly managed to learn and acquire quite an extensive set of skills.Her determination to never give up and always learn and improve, is what sets her apart from many other developers out there.It\'s been a pleasure working with her. She is currently riding the proverbial wave and I am sure she will achieve great things in the future.I highly recommend her to anyone looking to expand their team(s).',
        author: 'Theodor Palamaru',
        role: 'Front-End Developer',
        place: 'LinkedIn',
        from: 'IBM'
    },
    {
        text: 'For the past years I had the opportunity to work along Madalina on multiple personal & comercial projects. She was able to develop features in an extremely elegant and creative way all the time. Her ability to develop high quality products while being under extreme pressure is something that I look up to, not only that she’s able to stay calm and professional in difficult situations. She’s also able to make everyone in the team feel that they are also capable of doing more than they expect from themselves.',
        author: 'Emanuel Cepoi',
        role: 'Full-Stack Developer',
        place: 'LinkedIn'
    },
    {
        text: 'Madalina is always reliable and helping her team members, able to understand the requirements and come up with a solution. It was a joy and always had confidence while working with her. I am strongly recommend her in any new opportunity and challenge.',
        author: 'Raluca Rusu',
        role: 'Project Manager',
        place: 'LinkedIn',
        from: 'IBM'
    }
];

export const EXPERIENCE = [
    {
        companyName: 'Deloitte Digital',
        role: 'Frontend Developer / Consultant',
        dateStart: 'Oct 2021',
        dateEnd: 'Present',
        location: 'Bucharest, Romania',
        description: `
            <h4>Assignment description:</h4>
            <ul>
            <li>I analyze and study the aspects of the program, decide the objectives to be achieved;</li>
            <li>I design and implement quality applications, using technologies specific to each project, being up to date with news in the field;</li>
            <li>I test the made product and I make the adequate documentation;</li>
            <li>I perform maintenance for existing projects;</li>
            <li>I make objective proposals for development and design;</li>
            <li>I communicate with clients and their representatives, I identify clients' needs and propose optimal solutions to them, participating in all meetings;</li>
            <li>I constantly participate in professional training courses and provide mentoring for other colleagues.</li>
            </ul>
        `,
        companyLogo: '../assets/logos/deloitte.jpg',
        skill: ['Angular', 'Sass', 'TypeScript', 'REST', 'Jira']
    },
    {
        companyName: 'IBM iX',
        role: 'Frontend Developer',
        dateStart: 'Dec 2018',
        dateEnd: 'Oct 2021',
        location: 'Bucharest, Romania',
        description: `
            💼 Internship<br>
            🗓️ 12/2018 - 02/2019<br>
            💻 Technologies: HTML, CSS, JavaScript, Angular, RxJs, Vue.js, Vuex, Firebase, Ionic<br><br>
            <h4>Assignment description:</h4>
            <ul>
            <li>I learned the basics of Ionic and Angular;</li>
            <li>Applied the knowledge in a project delivered to the client;</li>
            <li>Designing mobile-based features, working in an agile team.</li>
            </ul><br>
            💼 Client 1 - Germany<br>
            🗓️ 03/2019 - 03/2020<br>
            🏦 Industry: Insurance<br>
            💻 Technologies: Angular, Ionic, Sass, TypeScript, REST, Capacitor, RxJs<br><br>
            <h4>Assignment description:</h4>
            <ul>
            <li>Develop Web based applications including UX design, application building and supporting solutions;</li>
            <li>Collaborate with back-end developers and web designers to improve usability;</li>
            <li>Get feedback from, and build solutions for, users and customers;</li>
            <li>Create quality mockups and prototypes;</li>
            <li>Stay up-to-date on emerging technologies;</li>
            <li>Participate in shadowing sessions with Senior Frontend Developers in solving different problems;</li>
            <li>Attended relevant courses for the knowledge used in my field;</li>
            <li>Investigate and fixed vulnerabilities in packages.</li>
            </ul>
            <h4>Contribution:</h4>
            <ul>
            <li>Delivered a good quality presentation website for our client in order to present our projects to their customers, in a small amount of time so the client was able to see the results and to use it;</li>
            <li>Investigated and solved some vulnerabilities from the applications;</li>
            <li>Contributed actively on a project from March and until the end of November, by helping other colleagues with code review and implementing reusable components. I also helped taking decisions in business rules and in development process;</li>
            <li>Participated in every meeting and decision in a proactive way in order to deliver a quality and clean code which meets the client requirements. I also suggested various changes to the design that was taken into account.</li>
            </ul><br>
            💼 Client 2 - United Kingdom<br>
            🗓️ 03/2020 - 03/2020<br>
            🏬 Industry: Retail<br>
            💻 Technologies: React.js<br><br>
            <h4>Assignment description:</h4>
            <ul>
            <li>Redesigning the on-boarding process for non plastic material and packaging suppliers onto the materials library and reimagining the presentation and navigation of the library in parallel.</li>
            </ul>
            <h4>Contribution:</h4>
            <ul>
            <li>Participated in discussions with the design and front-end team in order to clarify and suggest edits so the user can have a better experience using the website;</li>
            <li>Created reusable pages using React.js which corresponds to the design;</li>
            <li>Created dynamic forms using Formik framework for the registration of new plastic free materials.</li>
            </ul><br>
            💼 Client 3 - United States<br>
            🗓️ 04/2020 - 10/2021<br>
            🛒 Industry: E-Commerce<br>
            💻 Technologies: Angular, Sass, TypeScript, REST, RxJs, Adobe Experience Manager, VirtualBox, JQuery, Unit Testing<br><br>
            <h4>Assignment description:</h4>
            <ul>
            <li>Being a member of the a subdivision from the team and delivering features and quality code.</li>
            </ul>
            <h4>Contribution:</h4>
            <ul>
            <li>Created new components and features for the application in a way that we can reuse them when it's need;</li>
            <li>Helped both design and development departments to take decisions in order to deliver the best features;</li>
            <li>Learned better ways to solve the problems that appears during the development;</li>
            <li>Delivered WYSIWYG (What You See Is What You Get), a feature that wants to improve the customer experience regarding the promotional codes.The first phase included changing the design of both coupons and product promotions, including more descriptive text and a user-friendly design, changes made throughout the application, on all banners. In the same phase was included the creation of the right drawer, which replaces the pop-up with the description of the promotion or the description page for it, being available by clicking on the link with the coupon / promotion details. If there are multiple promotions for a single product, they are displayed as a total, and will be described accordingly in the right drawer. The second phase includes the implementation of the new API response, which includes a new possibility to process the offers, displaying the requirement quantity, following that on the stores where the feature is activated, to display and if the offer has been completed and benefit from it. The new treatment system is visible both in the coupon design, in the mini-cart or in the top menu, in the right drawer and in the product page.</li>
            </ul>
        `,
        companyLogo: '../assets/logos/ibm.jpg',
        skill: ['Angular', 'Vagrant', 'Ionic', 'Sass', 'TypeScript', 'REST', 'Capacitor', 'RxJs', 'React.js', 'Adobe Experience Manager', 'Jira', 'Unit Testing'],
    },
    {
        companyName: 'Groupe Renault',
        role: 'Practicant - Drive your future',
        dateStart: 'Jun 2017',
        dateEnd: 'Sept 2017',
        description: `
        <h4>Assignment description:</h4>
        <ul>
        <li>Database maintenance using my own Matlab scripts.</li>
        </ul>
        `,
        location: 'Bucharest, Romania',
        companyLogo: '../assets/logos/renault.png',
        skill: ['Matlab']
    },
    {
        companyName: 'Telekom Romania',
        role: 'Inbound Agent',
        dateStart: 'Feb 2016',
        dateEnd: 'Jun 2017',
        location: 'Bucharest, Romania',
        description: `
        <h4>Assignment description:</h4>
        <ul>
        <li>Taking calls and solving the situations encountered by clients, making recordings and offering them.</li>
        </ul>
        `,
        companyLogo: '../assets/logos/telekom.png',
        skill: ['Work under pressure', 'Adaptability', 'Multitasking']
    }
];
