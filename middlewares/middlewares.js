const AdminCtrl = require("../controllers/admins.ctrl");
const middlewares = {};
const jwt = require("jsonwebtoken");
const User = require("../model/user.model");
const { getUserId } = require("../controllers/users.ctrl");


middlewares.isAutorized = async (req, res, next) => {
    try{
        id = req.body.user._id
        const result = await User.findById({_id:id});

        if(result.role!="admin"){
            res.json({
                response: false,
                data: "unauthorized"
            })
        }
        next()
    }catch{
        (err)=>{
            res.json({
                reponse : false ,
                message : err
            })
        }
    }


}


middlewares.isValidToken = (req, res, next) => {
    token = req.body.token
    if (!token || token === "") {
        return res.json({
            response: false,
            data: "invalid token"
        })
    }

    try {
        valid = jwt.verify(token, "secret");
        if (valid) {
            req.body.user = jwt.decode(token,"secret");
            next()
        }
    } catch (err) {
        return res.json({
            response: false,
            data: "Invalid token",
            err:err
        })
    }
}

module.exports = middlewares;