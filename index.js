const connection = require("./model");
const express = require("express");
const path = require("path");
const expresshandlebar = require("express-handlebars");
const bodyparser = require("body-parser");



const application = express();

application.use(bodyparser.urlencoded({
    extended : true
}))

application.get("/",(req,res) => {

    res.send('<h1>Hello World..!</h1>');

});

application.listen("3000",() =>{
    console.log("Server started");
})