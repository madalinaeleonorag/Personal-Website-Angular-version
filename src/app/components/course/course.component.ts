import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CourseComponent implements OnInit {

  @Input() course;

  constructor() { }

  ngOnInit(): void {
  }

}
