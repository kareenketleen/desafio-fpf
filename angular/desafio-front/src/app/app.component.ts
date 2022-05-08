import { Component } from '@angular/core';
import { GameModule } from './game/game.module';
import { PlayerModule } from './player/player.module';
import { UtilsModule } from './utils/utils.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'desafio-fpf';

  static turns: number = 1;
  static cpuTurns: number = 0;
  static player1: any = null;
  static player2: any = null;

  static utils: UtilsModule;

  static getTurns() {
    return AppComponent.turns;
  }

  static getCpuTurns() {
    return AppComponent.cpuTurns;
  }

  static getPlayer1() {
    return AppComponent.player1;
  }

  static getPlayer2() {
    return AppComponent.player2;
  }

  constructor() {
    console.log('The game is starting...');

    AppComponent.player1 = new PlayerModule().newPlayer('Player', true);
    AppComponent.player2 = new PlayerModule().newPlayer('CPU', false);

    console.log(AppComponent.player1);
    console.log(AppComponent.player2);

    AppComponent.turns = 1;
    AppComponent.cpuTurns = 0;

    AppComponent.utils = new UtilsModule();

    console.log('The game has started!');
  }

  static basicAttack(attacker: any, opponent: any) {
    if (!AppComponent.canPlay(attacker)) {
      return;
    }
    console.log('Humano atacou!');
    var dano: number = AppComponent.utils.getRandom(5, 10);
    opponent.life -= dano;
    console.log('Dano: ' + dano);
    console.log(AppComponent.getPlayer2());
  }

  static canPlay(player: any) {
    AppComponent.checkSpecialAttack(player);

    if (player.isDizzy) {
      player.isDizzy = false;
      return false;
    }

    return true;
  }

  static checkSpecialAttack(player: any) {
    if (player.specialAttackDisabledTurns > 0) {
      player.specialAttackDisabledTurns--;
    }
  }

  static continuePlaying() {
    if (AppComponent.isPlayerDead(AppComponent.player2)) {
      AppComponent.winner(AppComponent.player1);
      return false;
    }

    AppComponent.turns = AppComponent.turns + 1;
    AppComponent.jogarCpu();

    if (AppComponent.isPlayerDead(AppComponent.player1)) {
      AppComponent.winner(AppComponent.player2);
      return false;
    }

    AppComponent.turns = AppComponent.turns + 1;
    return true;
  }

  static heal(player: any) {
    if (!AppComponent.canPlay(player)) {
      return;
    }
    if (player.life < 100) {
      player.life += AppComponent.utils.getRandom(5, 15);
    }
  }

  static jogarCpu() {
    console.log('CPU Joga');
    AppComponent.cpuTurns = AppComponent.cpuTurns + 1;
    AppComponent.aiCPU(
      AppComponent.player2,
      AppComponent.player1,
      AppComponent.cpuTurns
    );
  }

  static aiCPU(_cpu: any, _player: any, _cpuTurns: any) {
    if (_cpu.isHuman) {
      console.log('Humans do not have AI');
      return;
    }

    if (_cpuTurns % 3 == 0) {
      _cpu.specialAttack(_cpu, _player);
    } else {
      _cpu.basicAttack(_cpu, _player);
    }
  }

  static specialAttack(attacker: any, opponent: any) {
    if (!AppComponent.canPlay(attacker)) {
      return;
    }

    if (attacker.specialAttackDisabledTurns == 0) {
      opponent.life -= AppComponent.utils.getRandom(10, 20);
      opponent.isDizzy =
        AppComponent.utils.getRandom(0, 100) >= 50 ? true : false;
      attacker.specialAttackDisabledTurns = 2;
    } else {
      attacker.specialAttackDisabledTurns--;
    }
  }

  static isPlayerDead(_player: any) {
    return _player.life <= 0 ? true : false;
  }

  static winner(_winner: any) {
    console.log('The player ' + _winner.name + ' won!');
    console.log(
      _winner.name +
        ': ' +
        AppComponent.getScore(_winner.life, AppComponent.turns) +
        ' points'
    );
    AppComponent.apiCall(
      AppComponent.getScore(_winner.life, AppComponent.turns)
    );
  }

  static getScore(life: number, turns: number) {
    return Math.floor((life * 1000) / turns);
    //TODO - Call webservice (REST)
  }

  static apiCall(_pointsPlayer: number) {}

  static giveUp(_player: any, _cpu: any) {
    AppComponent.turns = 1;
    AppComponent.cpuTurns = 0;
    _player = null;
    _cpu = null;
    console.log('O jogador desistiu!');
  }
}
