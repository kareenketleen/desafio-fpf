import { Component, OnInit } from '@angular/core';
import { GameModule } from 'src/app/game/game.module';

@Component({
  selector: 'give-up',
  templateUrl: './give-up.component.html',
  styleUrls: ['./give-up.component.css'],
})
export class GiveUpComponent implements OnInit {
  constructor() {}

  actionGiveUp() {}
  ngOnInit(): void {}
}
