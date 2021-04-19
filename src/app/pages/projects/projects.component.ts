import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProjectModel } from 'src/app/data.model';
import { PROJECTS } from 'src/assets/data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent implements OnInit {

  private data: ProjectModel[];
  private selectedTechnologies: string[] = [];
  public uniqueTechnologies: string[] = [];

  constructor() {
    this.data = PROJECTS;
  }

  ngOnInit(): void {
    const allTechnologies: string[] = [];
    this.data.forEach((project: ProjectModel) => {
      allTechnologies.push(...project.technologies);
    });
    this.uniqueTechnologies = [...new Set(allTechnologies)].sort();
  }

  public isSelected(name?: string): boolean {
    return this.selectedTechnologies.includes(name) || this.selectedTechnologies.length === 0;
  }

  public selectTechnology(name: string): void {
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

  public filteredData(): ProjectModel[] {
    return this.selectedTechnologies.length > 0
      ? this.data.filter((project: ProjectModel) => {
          return project.technologies.some((technology: string) => this.selectedTechnologies.indexOf(technology) >= 0);
        })
      : this.data;
  }
}
