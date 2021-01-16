import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VolunteerComponent implements OnInit {

  @Input() volunteer;

  constructor() { }

  ngOnInit(): void {
  }

}
