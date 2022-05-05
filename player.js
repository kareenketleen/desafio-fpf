function newPlayer(_name = "player", _isHuman = true) {
  let player = {
    name: _name,
    isHuman: _isHuman,
    life: 100,
    specialAttackDisabledTurns: 0,
    isDizzy: false,
    basicAttack: function (attacker, opponent) {
      if (!canPlay(attacker)) {
        return;
      }

      if (attacker.isHuman) {
        opponent.life -= getRandom(5, 10);
      } else {
        opponent.life -= getRandom(6, 12);
      }
    },
    specialAttack: function (attacker, opponent) {
      if (!canPlay(attacker)) {
        return;
      }

      if (attacker.specialAttackDisabledTurns == 0) {
        if (attacker.isHuman) {
          opponent.life -= getRandom(10, 20);
        } else {
          opponent.life -= getRandom(8, 16);
        }
        opponent.isDizzy = getRandom(0, 100) >= 50 ? true : false;
        attacker.specialAttackDisabledTurns = 2;
      } else {
        attacker.specialAttackDisabledTurns--;
      }
    },
    heal: function (player) {
      if (!canPlay(player)) {
        return;
      }

      player.life += getRandom(5, 15);
    },
  };
  return player;
}
