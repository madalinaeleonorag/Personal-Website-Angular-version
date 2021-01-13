import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-experience-job',
  templateUrl: './experience-job.component.html',
  styleUrls: ['./experience-job.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExperienceJobComponent implements OnInit {

  @Input() job;

  constructor() { }

  ngOnInit(): void {
  }

}
