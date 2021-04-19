import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { EducationModel } from 'src/app/data.model';

@Component({
  selector: 'app-education-level',
  templateUrl: './education-level.component.html',
  styleUrls: ['./education-level.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EducationLevelComponent implements OnInit {

  @Input() education: EducationModel;

  constructor() { }

  ngOnInit(): void {
  }

}
