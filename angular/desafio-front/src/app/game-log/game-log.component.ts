import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'game-log',
  templateUrl: './game-log.component.html',
  styleUrls: ['./game-log.component.css'],
})
export class GameLogComponent implements OnInit {
  static getMessages() {
    return AppComponent.messages;
  }

  messages: any = GameLogComponent.getMessages();

  constructor() {
    this.messages = GameLogComponent.getMessages();
  }

  ngOnInit(): void {}
}
