import { Component, OnInit } from '@angular/core';
import { GameModule } from 'src/app/game/game.module';

@Component({
  selector: 'special-attack',
  templateUrl: './special-attack.component.html',
  styleUrls: ['./special-attack.component.css'],
})
export class SpecialAttackComponent implements OnInit {
  constructor() {}
  actionSpecialAttack() {}

  ngOnInit(): void {}
}
