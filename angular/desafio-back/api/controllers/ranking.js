module.exports = () => {
  const rankingDB = require("../data/ranking.json");
  const controller = {};

  function GetSortOrder(prop) {
    return function (a, b) {
      if (a[prop] < b[prop]) {
        return 1;
      } else if (a[prop] > b[prop]) {
        return -1;
      }
      return 0;
    };
  }

  rankingDB.sort(GetSortOrder("score"));

  controller.showRanking = (req, res) => res.status(200).json(rankingDB);
  controller.postRanking = (req, res) => {
    let updatePlayer = false;
    for (let i = 0; i < rankingDB.length; i++) {
      if (rankingDB[i].playerName === req.body.playerName) {
        updatePlayer = true;

        if (rankingDB[i].score < req.body.score) {
          rankingDB[i].score = req.body.score;
        }
      }
    }

    if (!updatePlayer) {
      rankingDB.unshift(req.body);
    }

    rankingDB.sort(GetSortOrder("score"));
    res.status(200).json(rankingDB);
  };

  return controller;
};
