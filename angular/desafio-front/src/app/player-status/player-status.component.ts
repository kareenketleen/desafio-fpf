import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'player-status',
  templateUrl: './player-status.component.html',
  styleUrls: ['./player-status.component.css'],
})
export class PlayerStatusComponent implements OnInit {
  player1: any = AppComponent.getPlayer1();
  player2: any = AppComponent.getPlayer2();

  highPlayer1: boolean = AppComponent.getPlayer1().life >= 50 ? true : false;
  mediumPlayer1: boolean =
    AppComponent.getPlayer1().life < 50 && AppComponent.getPlayer1().life >= 20
      ? true
      : false;
  lowPlayer1: boolean = AppComponent.getPlayer1().life < 20 ? true : false;

  highPlayer2: boolean = false;
  mediumPlayer2: boolean = false;
  lowPlayer2: boolean = false;

  constructor() {
    this.player1 = AppComponent.getPlayer1();
    this.player2 = AppComponent.getPlayer2();

    this.highPlayer1 = AppComponent.getPlayer1().life >= 50 ? true : false;
    this.mediumPlayer1 =
      AppComponent.getPlayer1().life < 50 &&
      AppComponent.getPlayer1().life >= 20
        ? true
        : false;
    this.lowPlayer1 = AppComponent.getPlayer1().life < 20 ? true : false;
  }

  ngOnInit(): void {}
}
