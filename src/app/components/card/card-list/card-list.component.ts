import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Card } from '../../../model/card';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'card-list',
  templateUrl: './card-list.component.html'
})
export class CardListComponent implements OnChanges {

  @Input()
  cards: Card[] = [];

  @Input()
  message: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.cards) {
      // this.cards = changes.cards;
    }
  }

}
