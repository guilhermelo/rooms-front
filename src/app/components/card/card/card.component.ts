import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Card } from '../../../model/card';

@Component({
  selector: 'card',
  templateUrl: './card.component.html'
})
export class CardComponent {

  @Input()
  card: Card = new Card();
}
