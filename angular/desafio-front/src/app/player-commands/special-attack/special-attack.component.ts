import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { GameModule } from 'src/app/game/game.module';

@Component({
  selector: 'special-attack',
  templateUrl: './special-attack.component.html',
  styleUrls: ['./special-attack.component.css'],
})
export class SpecialAttackComponent implements OnInit {
  constructor() {}
  actionSpecialAttack() {
    AppComponent.specialAttack(
      AppComponent.getPlayer1(),
      AppComponent.getPlayer2()
    );

    if (!AppComponent.continuePlaying()) {
      return;
    }

    console.log(AppComponent.getPlayer1());
    console.log(AppComponent.getPlayer2());
  }

  ngOnInit(): void {}
}
