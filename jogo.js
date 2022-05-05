var turns = 1;

function startGame() {
  let player1 = newPlayer("Bob", true);
  let player2 = newPlayer("CPU", false);

  turns = 1;
}

function play() {}

function giveUp(_player, _cpu) {
  turns = 1;
  _player = null;
  _cpu = null;
  console.log("O jogador desistiu!");
}

function isPlayerDead(_player) {
  return _player.life <= 0 ? true : false;
}

function aiCPU(_cpu, _player, _turns) {
  if (_cpu.isHuman) {
    console.log("Humans do not have AI");
    return;
  }

  if (_turns % 3 == 0) {
    _cpu.specialAttack(_cpu, _player);
  } else {
    _cpu.basicAttack(_cpu, _player);
  }
}

function getScore(life, turns) {
  return (life * 1000) / turns;
}

function canPlay(player) {
  checkSpecialAttack(player);

  if (player.isDizzy) {
    player.isDizzy = false;
    return false;
  }

  return true;
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

function heal(player) {
  if (!canPlay(player)) {
    return;
  }

  player.life += getRandom(5, 15);
}
