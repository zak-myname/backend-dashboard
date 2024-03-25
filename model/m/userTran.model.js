const mongoose = require("mongoose");
const User = require("../user.model")
const userTrans = User.discriminator('userTrans',
    new mongoose.Schema(
        {

        }
    )
);

module.exports = mongoose.model("userTrans")