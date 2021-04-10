import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-custom-category-chip',
  templateUrl: './custom-category-chip.component.html',
  styleUrls: ['./custom-category-chip.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomCategoryChipComponent implements OnInit {

  @Input() text: string;
  @Input() isSelected: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
