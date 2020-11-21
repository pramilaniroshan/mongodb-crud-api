const mongoose = require("mongoose");

var blogSchema = new mongoose.Schema({

    blogname : {
        type : String,
        required :"Required"
    },
    blogId : {
        type : String
    },
    author : {
        type : String
    }

});

mongoose.model("blog",blogSchema);