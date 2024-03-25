const mongoose = require("mongoose");


mongoose.connect("mongodb://0.0.0.0/vendu")
    .then(()=>{
        console.log("connected");
    })
    .catch((err)=>{
        console.log(err);
    });

module.exports = mongoose;
    