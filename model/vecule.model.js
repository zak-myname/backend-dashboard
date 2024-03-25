const mongoose = require("mongoose");
const Vecule = mongoose.model("vecule",{
    vecule_id : {
        type : String
    },
    name : {
        type : String
    },
    stock : {
        type : Number
    },
    color : {
        type : String
    },
    prix : {
        type : Number
    },
    pa : {
        type : String
    }
});
module.exports = Vecule ;