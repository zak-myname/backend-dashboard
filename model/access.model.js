const mongoose = require("mongoose");
const Access = mongoose.model("access", {
    idUser: String,
    access : [
        {
            label: String,
            c: Boolean,
            r: Boolean,
            u: Boolean,
            d: Boolean
        }
    ]
});
module.exports = Access;