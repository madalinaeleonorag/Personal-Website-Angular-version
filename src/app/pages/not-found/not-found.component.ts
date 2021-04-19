import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { CommonsService } from 'src/app/commons.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NotFoundComponent implements OnInit {

  constructor(private commonsService: CommonsService) { }

  ngOnInit(): void {
  }

  public goToHomepage(): void {
    this.commonsService.navigateToURL('/');
  }

}
