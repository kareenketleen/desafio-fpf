import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilsModule } from '../utils/utils.module';
import { GameModule } from '../game/game.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class PlayerModule {
  newPlayer(_name = 'player', _isHuman = true) {
    let player = {
      name: _name,
      isHuman: _isHuman,
      life: 100,
      specialAttackDisabledTurns: 0,
      isDizzy: false,
      basicAttack: function (attacker: any, opponent: any) {
        if (!new GameModule().canPlay(attacker)) {
          return;
        }

        if (attacker.isHuman) {
          opponent.life -= new UtilsModule().getRandom(5, 10);
        } else {
          opponent.life -= new UtilsModule().getRandom(6, 12);
        }
      },
      specialAttack: function (attacker: any, opponent: any) {
        if (!new GameModule().canPlay(attacker)) {
          return;
        }

        if (attacker.specialAttackDisabledTurns == 0) {
          if (attacker.isHuman) {
            opponent.life -= new UtilsModule().getRandom(10, 20);
          } else {
            opponent.life -= new UtilsModule().getRandom(8, 16);
          }
          opponent.isDizzy =
            new UtilsModule().getRandom(0, 100) >= 50 ? true : false;
          attacker.specialAttackDisabledTurns = 2;
        } else {
          attacker.specialAttackDisabledTurns--;
        }
      },
      heal: function (player: any) {
        if (!new GameModule().canPlay(player)) {
          return;
        }

        player.life += new UtilsModule().getRandom(5, 15);
      },
    };
    return player;
  }
}
