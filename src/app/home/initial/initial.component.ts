import { Component, OnInit } from '@angular/core';
import { Card } from '../../model/card';
import { InicialService } from './initial.service';

@Component({
  templateUrl: './initial.component.html'
})
export class InitialComponent implements OnInit {

  roomCards: Card[] = [];
  card: Card;
  texto: string;

  constructor(private inicialService: InicialService) {
    this.inicialService.getRooms().subscribe(response => {
      this.roomCards = response.data.map(item => new Card(item.name, item.description));
    });
  }

  ngOnInit() {
    this.texto = "Mensagem top";
    // this.inicialService.getRooms().subscribe(response => {
    //   this.roomCards = response.data.map(item => new Card(item.name, item.description));
    // });
  }
}
