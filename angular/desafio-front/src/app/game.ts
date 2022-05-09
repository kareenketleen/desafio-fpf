//Primeiro turno é sempre do Jogado 1
var turns = 1;
var cpuTurns = 0;
var player1: any = null;
var player2: any = null;

//eventos
// var btnBasicAttack = document.getElementById('btn-basic-attack');
// var btnSpecialAttack = document.getElementById('btn-special-attack');
// var btnHeal = document.getElementById('btn-heal');
// var btnGiveUp = document.getElementById('btn-give-up');

function actionBasicAttack() {
  basicAttack(player1, player2);

  if (!continuePlaying()) {
    return;
  }

  console.log(player1);
  console.log(player2);
}

function actionSpecialAttack() {
  specialAttack(player1, player2);

  if (!continuePlaying()) {
    return;
  }

  console.log(player1);
  console.log(player2);
}
function actionHeal() {
  heal(player1);

  if (!continuePlaying()) {
    return;
  }

  console.log(player1);
  console.log(player2);
}
function actionGiveUp() {
  giveUp(player1, player2);
  console.clear();
}

// btnBasicAttack.onclick = actionBasicAttack;
// btnSpecialAttack.onclick = actionSpecialAttack;
// btnHeal.onclick = actionHeal;
// btnGiveUp.onclick = actionGiveUp;

function continuePlaying() {
  if (isPlayerDead(player2)) {
    winner(player1);
    return false;
  }

  turns = turns + 1;
  jogarCpu();

  if (isPlayerDead(player1)) {
    winner(player2);
    return false;
  }

  turns = turns + 1;
  return true;
}

//Starting point (main)
function startGame() {
  console.log('The game is starting...');

  player1 = newPlayer('Player', true);
  player2 = newPlayer('CPU', false);

  console.log(player1);
  console.log(player2);

  turns = 1;
  cpuTurns = 0;

  console.log('The game has started!');
}

function play() {
  if (turns % 2 !== 0) {
    jogarHumano();
  } else {
    jogarCpu();
  }

  checkFinishGame();
}

function checkFinishGame() {}

function jogarHumano() {}

function jogarCpu() {
  console.log('CPU Joga');
  cpuTurns = cpuTurns + 1;
  aiCPU(player2, player1, cpuTurns);
}

function heal(player: any) {
  if (!canPlay(player)) {
    return;
  }
  if (player.life < 100) {
    player.life += getRandom(5, 15);
  }
}

function canPlay(player: any) {
  checkSpecialAttack(player);

  if (player.isDizzy) {
    player.isDizzy = false;
    return false;
  }

  return true;
}

function aiCPU(_cpu: any, _player: any, _cpuTurns: any) {
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

function checkSpecialAttack(player: any) {
  if (player.specialAttackDisabledTurns > 0) {
    player.specialAttackDisabledTurns--;
  }
}

function basicAttack(attacker: any, opponent: any) {
  if (!canPlay(attacker)) {
    return;
  }

  opponent.life -= getRandom(5, 10);
}

function specialAttack(attacker: any, opponent: any) {
  if (!canPlay(attacker)) {
    return;
  }

  if (attacker.specialAttackDisabledTurns == 0) {
    opponent.life -= getRandom(10, 20);
    opponent.isDizzy = getRandom(0, 100) >= 50 ? true : false;
    attacker.specialAttackDisabledTurns = 2;
  } else {
    attacker.specialAttackDisabledTurns--;
  }
}

function isPlayerDead(_player: any) {
  return _player.life <= 0 ? true : false;
}

function giveUp(_player: any, _cpu: any) {
  turns = 1;
  cpuTurns = 0;
  _player = null;
  _cpu = null;
  console.log('O jogador desistiu!');
}

function getScore(life: number, turns: number) {
  return Math.floor((life * 1000) / turns);
  //TODO - Call webservice (REST)
}

function winner(_winner: any) {
  console.log('The player ' + _winner.name + ' won!');
  console.log(_winner.name + ': ' + getScore(_winner.life, turns) + ' points');
  apiCall(getScore(_winner.life, turns));
}

function apiCall(_pointsPlayer: number) {}
