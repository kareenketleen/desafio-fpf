function newPlayer(name = "player", isHuman = true) {
  let player = {
    name: name,
    human: isHuman,
    life: 100,
    specialAttackDisabledTurns: 0,
    isDizzy: false,
  };
  return player;
}
