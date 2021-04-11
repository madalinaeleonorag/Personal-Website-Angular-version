import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-custom-category-button',
  templateUrl: './custom-category-button.component.html',
  styleUrls: ['./custom-category-button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomCategoryButtonComponent implements OnInit {

  @Input() text: string;
  @Input() isSelected: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
