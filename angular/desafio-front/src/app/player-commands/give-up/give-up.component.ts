import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { GameModule } from 'src/app/game/game.module';

@Component({
  selector: 'give-up',
  templateUrl: './give-up.component.html',
  styleUrls: ['./give-up.component.css'],
})
export class GiveUpComponent implements OnInit {
  constructor() {}

  actionGiveUp() {
    AppComponent.giveUp(AppComponent.getPlayer1(), AppComponent.getPlayer2());
    console.clear();
  }
  ngOnInit(): void {}
}
