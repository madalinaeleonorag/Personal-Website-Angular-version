export class ProjectModel {
    public id: number;
    public featured?: boolean;
    public name: string;
    public startDate: string;
    public endDate?: string;
    public type: string;
    public technologies: string[];
    public live?: string;
    public code?: string;
    public description?: string;
    public images?: {};
    public noDetails?: boolean;
    public logo: string;

    constructor(data?: any) {
        Object.assign(this, data);
    }
}

export class SkillModel {
    public name: string;
    public level: number;
    public color: string;
    public logo: string;
}

export class CertificationModel {
    public logo: string;
    public name: string;
    public organization: string;
    public issueDate: string;
    public url: string;
}

export class EducationModel {
    public school: string;
    public degree: string;
    public fieldOfStudy: string;
    public startYear: string;
    public endYear: string;
    public grade: string;
    public logo: string;
    public description: string;
}

export class AwardModel {
    public name: string;
    public place: number;
    public date: string;
    public description: string;
}

export class PublicationModel {
    public title: string;
    public link: string;
    public thumbnail: string;
}

export class ExperienceModel {
    public companyName: string;
    public role: string;
    public dateStart: string;
    public dateEnd: string;
    public location: string;
    public description?: string;
    public companyLogo: string;
    public skill: string[];
    public organization?: string;
    public logo?: string;
    public startYear?: string;
    public endYear?: string;
}