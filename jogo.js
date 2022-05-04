function startGame() {
  let player1 = newPlayer("Bob", true);
  let player2 = newPlayer("CPU", false);
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
