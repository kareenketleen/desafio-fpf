//Primeiro turno é sempre do Jogado 1
var turns = 1;
var cpuTurns = 0;
var player1 = null;
var player2 = null;

//Starting point (main)
function startGame() {
  console.log("The game is starting...");

  player1 = newPlayer("Player", true);
  player2 = newPlayer("CPU", false);

  console.log(player1);
  console.log(player2);

  turns = 1;
  cpuTurns = 0;

  console.log("The game has started!");
  play();
}

function play() {
  if (turns % 2 !== 0) {
    jogarHumano();
  } else {
    jogarCpu();
  }

  checkFinishGame();
}

function checkFinishGame() {
  if (isPlayerDead(player1)) {
    resultGame(player2);
  } else if (isPlayerDead(player2)) {
    resultGame(player1);
  } else {
    turns = turns + 1;
    play();
  }
}

function jogarHumano() {}

function jogarCpu() {
  cpuTurns = cpuTurns + 1;
  aiCPU(player2, player1, cpuTurns);
}

function heal(player) {
  if (!canPlay(player)) {
    return;
  }

  player.life += getRandom(5, 15);
}

function canPlay(player) {
  checkSpecialAttack(player);

  if (player.isDizzy) {
    player.isDizzy = false;
    return false;
  }

  return true;
}

function aiCPU(_cpu, _player, _cpuTurns) {
  if (_cpu.isHuman) {
    console.log("Humans do not have AI");
    return;
  }

  if (_cpuTurns % 3 == 0) {
    _cpu.specialAttack(_cpu, _player);
  } else {
    _cpu.basicAttack(_cpu, _player);
  }
}

function checkSpecialAttack(player) {
  if (player.specialAttackDisabledTurns > 0) {
    player.specialAttackDisabledTurns--;
  }
}

function basicAttack(attacker, opponent) {
  if (!canPlay(attacker)) {
    return;
  }

  opponent.life -= getRandom(5, 10);
}

function specialAttack(attacker, opponent) {
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

function isPlayerDead(_player) {
  return _player.life <= 0 ? true : false;
}

function giveUp(_player, _cpu) {
  turns = 1;
  cpuTurns = 0;
  _player = null;
  _cpu = null;
  console.log("O jogador desistiu!");
}

function getScore(life, turns) {
  return (life * 1000) / turns;
  //TODO - Call webservice (REST)
}

function resultGame(_winner) {
  console.log("The player " + _winner.name + " won!");
  console.log(_winner.name + ": " + getScore(_winner) + " points");
  apiCall(getScore(_winner));
}

function apiCall(_pointsPlayer) {}
