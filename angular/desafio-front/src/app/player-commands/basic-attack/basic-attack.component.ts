import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'basic-attack',
  templateUrl: './basic-attack.component.html',
  styleUrls: ['./basic-attack.component.css'],
})
export class BasicAttackComponent implements OnInit {
  constructor() {}

  actionBasicAttack() {
    AppComponent.basicAttack(
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
