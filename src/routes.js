const { Router } = require("express");
const axios = require("axios");
const Dev = require("./models/Dev.js")
const routes = Router();
const DevController = require("./controllers/DevController.js");
const SearchController = require("./controllers/SearchController.js");

routes.post("/devs", DevController.store);

routes.get("/devs",DevController.index);

routes.get("/search",SearchController.index);

module.exports = routes;
