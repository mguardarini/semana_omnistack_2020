const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes.js");

mongoose.connect("mongodb://mguardarini:mauro1818@ds263638.mlab.com:63638/radardev",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})


const app = express();
app.use(express.json());
app.use(routes);

app.listen(3333,()=>{
    console.log("Servidor executando: http://localhost:3333")
});