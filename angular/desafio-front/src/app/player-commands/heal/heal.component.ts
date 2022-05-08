import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'heal',
  templateUrl: './heal.component.html',
  styleUrls: ['./heal.component.css'],
})
export class HealComponent implements OnInit {
  constructor() {}
  actionHeal() {
    AppComponent.heal(AppComponent.getPlayer1());

    if (!AppComponent.continuePlaying()) {
      return;
    }

    console.log(AppComponent.getPlayer1());
    console.log(AppComponent.getPlayer2());
  }

  ngOnInit(): void {}
}
