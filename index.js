const express = require('express');
const app = express();
var path = require('path');
const port = 5000;

const languages = require('./public/js/languages.json'); 

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.use("/public", express.static(path.join(__dirname, "public")));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))

app.set("/views", path.join(__dirname), "/views");

app.get('/', (request, response)=>{
    response.render("index", {languages})
})

app.listen(port,()=>{
    console.log('rodando na porta 5000')
})