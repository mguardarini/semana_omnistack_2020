const { Router } = require("express");
const axios = require("axios");
const Dev = require("./models/Dev.js")
const routes = Router();

routes.post("/devs", async (request,response)=>{

   const { github_username, techs, latitude, longitude } = request.body;

   const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)
   
   const { name, avatar_url, bio } = apiResponse;

   const techsArray = techs.split(',').map(tech=>tech.trim());

   const dev = await Dev.create({
       github_username,
       name,
       avatar_url,
       bio,
       techs: techsArray
   })

   return response.json(dev); 


});

routes.get("/",(request,response)=>{
   return response.json({message:"Hello World"}); 
});

module.exports = routes;
