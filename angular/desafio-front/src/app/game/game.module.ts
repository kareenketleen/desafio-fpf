import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerModule } from '../player/player.module';
import { UtilsModule } from '../utils/utils.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class GameModule {
  //Primeiro turno é sempre do Jogado 1
  turns: number = 1;
  cpuTurns: number = 0;
  player1: any = null;
  player2: any = null;

  //eventos
  // var btnBasicAttack = document.getElementById('btn-basic-attack');
  // var btnSpecialAttack = document.getElementById('btn-special-attack');
  // var btnHeal = document.getElementById('btn-heal');
  // var btnGiveUp = document.getElementById('btn-give-up');

  actionBasicAttack() {
    this.basicAttack(this.player1, this.player2);

    if (!this.continuePlaying()) {
      return;
    }

    console.log(this.player1);
    console.log(this.player2);
  }

  actionSpecialAttack() {
    this.specialAttack(this.player1, this.player2);

    if (!this.continuePlaying()) {
      return;
    }

    console.log(this.player1);
    console.log(this.player2);
  }
  actionHeal() {
    this.heal(this.player1);

    if (!this.continuePlaying()) {
      return;
    }

    console.log(this.player1);
    console.log(this.player2);
  }
  actionGiveUp() {
    this.giveUp(this.player1, this.player2);
    console.clear();
  }

  // btnBasicAttack.onclick = actionBasicAttack;
  // btnSpecialAttack.onclick = actionSpecialAttack;
  // btnHeal.onclick = actionHeal;
  // btnGiveUp.onclick = actionGiveUp;

  continuePlaying() {
    if (this.isPlayerDead(this.player2)) {
      this.winner(this.player1);
      return false;
    }

    this.turns = this.turns + 1;
    this.jogarCpu();

    if (this.isPlayerDead(this.player1)) {
      this.winner(this.player2);
      return false;
    }

    this.turns = this.turns + 1;
    return true;
  }

  //Starting point (main)
  startGame() {
    console.log('The game is starting...');

    this.player1 = new PlayerModule().newPlayer('Player', true);
    this.player2 = new PlayerModule().newPlayer('CPU', false);

    console.log(this.player1);
    console.log(this.player2);

    this.turns = 1;
    this.cpuTurns = 0;

    console.log('The game has started!');
  }

  jogarCpu() {
    console.log('CPU Joga');
    this.cpuTurns = this.cpuTurns + 1;
    this.aiCPU(this.player2, this.player1, this.cpuTurns);
  }

  heal(player: any) {
    if (!this.canPlay(player)) {
      return;
    }
    if (player.life < 100) {
      player.life += new UtilsModule().getRandom(5, 15);
    }
  }

  canPlay(player: any) {
    this.checkSpecialAttack(player);

    if (player.isDizzy) {
      player.isDizzy = false;
      return false;
    }

    return true;
  }

  aiCPU(_cpu: any, _player: any, _cpuTurns: any) {
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

  checkSpecialAttack(player: any) {
    if (player.specialAttackDisabledTurns > 0) {
      player.specialAttackDisabledTurns--;
    }
  }

  basicAttack(attacker: any, opponent: any) {
    if (!this.canPlay(attacker)) {
      return;
    }

    opponent.life -= new UtilsModule().getRandom(5, 10);
  }

  specialAttack(attacker: any, opponent: any) {
    if (!this.canPlay(attacker)) {
      return;
    }

    if (attacker.specialAttackDisabledTurns == 0) {
      opponent.life -= new UtilsModule().getRandom(10, 20);
      opponent.isDizzy =
        new UtilsModule().getRandom(0, 100) >= 50 ? true : false;
      attacker.specialAttackDisabledTurns = 2;
    } else {
      attacker.specialAttackDisabledTurns--;
    }
  }

  isPlayerDead(_player: any) {
    return _player.life <= 0 ? true : false;
  }

  giveUp(_player: any, _cpu: any) {
    this.turns = 1;
    this.cpuTurns = 0;
    _player = null;
    _cpu = null;
    console.log('O jogador desistiu!');
  }

  getScore(life: number, turns: number) {
    return Math.floor((life * 1000) / turns);
    //TODO - Call webservice (REST)
  }

  winner(_winner: any) {
    console.log('The player ' + _winner.name + ' won!');
    console.log(
      _winner.name + ': ' + this.getScore(_winner.life, this.turns) + ' points'
    );
    this.apiCall(this.getScore(_winner.life, this.turns));
  }

  apiCall(_pointsPlayer: number) {}
}
