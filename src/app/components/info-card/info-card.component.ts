import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InfoCardComponent implements OnInit {

  @Input() item;

  constructor() { }

  ngOnInit(): void {
  }

  openNewTab() {
    window.open(this.item.url);
}

}
