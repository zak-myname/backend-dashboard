const mongoose = require("mongoose");

const userAdmin = mongoose.model('admin',{
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

module.exports = userAdmin;