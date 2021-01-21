import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PROJECTS } from 'src/assets/data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent implements OnInit {

  data;
  technologies: any[] = [];
  types: any[] = [];
  keywordsSearch = new FormControl();
  typesSearch = new FormControl();
  technologySearch = new FormControl();

  constructor() {
    this.data = PROJECTS;
  } 
  
  ngOnInit(): void {
    this.data.forEach(element => {
      this.technologies.push(element.technologies);
      this.types.push(element.type);
    });
  }

  public getFilteredData() {
    this.technologies = [...new Set(this.technologies)];
    this.types = [...new Set(this.types)];
    return this.data.filter((project) => {
      return (
        this.matchingTitle(project.name) &&
        this.matchingDescription(project.description)
      );
    });
  }

  private matchingTitle(name: string) {
    return this.keywordsSearch.value
      ? name.toLowerCase().includes(this.keywordsSearch.value.toLowerCase())
      : true;
  }

  private matchingDescription(name: string) {
    return this.keywordsSearch.value
      ? name.toLowerCase().includes(this.keywordsSearch.value.toLowerCase())
      : true;
  }

  // private matchingType(type: string) {
  //   if (
  //     this.institutionTypeSelection.length > 0 &&
  //     this.institutionTypeSelection.includes(type.toLowerCase())
  //   ) {
  //     return true;
  //   } else if (this.institutionTypeSelection.length === 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

}
