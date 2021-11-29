import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RecommendationComponent implements OnInit {

  @Input() data: any;
  public formattedText: string;

  constructor() { }

  ngOnInit(): void {
    this.formattedText = `${this.data.author}, ${this.data.role}${this.data.from ? ' in ' + this.data.from : ''} (${this.data.date})`;
  }
}
