const mongoose = require("mongoose");
const Com = mongoose.model("comonde",{
    vender_id : {
        type : String
    },
    n : {
        type : Number
    },
    article_id : [{type : String}]
    ,
    prix : {
        type : Number
    },
});
module.exports = Com ;