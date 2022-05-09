module.exports = (app) => {
  const controller = require("../controllers/ranking")();

  app.route("/api/v1/showRanking").get(controller.showRanking);
  app.route("/api/v1/postRanking").post(controller.postRanking);
};
