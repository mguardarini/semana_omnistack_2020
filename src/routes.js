const { Router } = require("express");
const axios = require("axios");
const Dev = require("./models/Dev.js")
const routes = Router();
const DevController = require("./controllers/DevController.js");

routes.post("/devs", DevController.store);

routes.get("/devs",DevController.index);

module.exports = routes;
