import { Component } from '@angular/core';
import { GameModule } from './game/game.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'desafio-fpf';

  constructor() {
    new GameModule().startGame();
  }
}
