const mongoose = require("mongoose");
const User = mongoose.model("user",{
    name : {
        type : String
    },
    email : {
        type : String
    },
    pass : {
        type : String
    },
    cin : {
        type : Number
    },
    tel : {
        type : Number
    },
    pf : {
        type : String
    },
    role : {
        type : String
    },
    access : {
        type : String
    }

});
module.exports = User ;