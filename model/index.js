const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/my-blog", { useNewUrlParser: true } ,(error) => {

        if(!error){
            console.log("Succesfull Connected");
        }
        else{
            console.log("Error Conecting DataBase");
        }

});

var model = require("./blogs.model.js");