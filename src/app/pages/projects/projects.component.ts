import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PROJECTS } from 'src/assets/data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent implements OnInit {

  data;
  selectedTechnologies: string[] = [];
  uniqueTechnologies: string[] = [];

  constructor() {
    this.data = PROJECTS;
  }

  ngOnInit(): void {
    let allTechnologies = [];
    this.data.forEach(project => {
      allTechnologies.push(...project.technologies);
    });
    this.uniqueTechnologies = [...new Set(allTechnologies)].sort();
  }

  isSelected(name?: string): boolean {
    return this.selectedTechnologies.includes(name) || this.selectedTechnologies.length === 0;
  }

  selectTechnology(name: string) {
    if (name === 'all') {
      this.selectedTechnologies = [];
    } else {
      if (this.selectedTechnologies.includes(name)) {
        const index = this.selectedTechnologies.indexOf(name);
        this.selectedTechnologies.splice(index, 1);
      } else {
        this.selectedTechnologies.push(name);
      }
    }
  }

  filteredData(): void {
    return this.selectedTechnologies.length > 0
      ? this.data.filter((project: any) => project.technologies.some((technology: string) => this.selectedTechnologies.indexOf(technology) >= 0))
      : this.data;
  }
}
