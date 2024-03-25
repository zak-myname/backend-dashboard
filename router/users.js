const express = require("express");
const controller = require("../controllers/users.ctrl");
const user = express.Router();
const multer = require("multer");
const bcrypt = require("bcrypt");
const User = require("../model/user.model");
const { isValidToken ,isAutorized} = require("../middlewares/middlewares");
filename = "";

const mystorege = multer.diskStorage({
    destination : "./img/FP",
    filename : (req , file , redirect)=>{
        d = Date.now();
        fl = d + "." + file.mimetype.split("/")[1];
        redirect(null , fl);
        filename = fl;
    }
});

const loadimg = multer({storage : mystorege});

user.post("/add-user",loadimg.any('image'),async (req,res) => {
    const user = req.body;
    const verif = await User.find({cin:user.cin});
    if(verif.length==0){
        u = req.body;
        u.pf = filename;
        const salt = bcrypt.genSaltSync(10);
        const pass = bcrypt.hashSync(u.pass,salt);
        u.pass = pass ;
        const nu = new User(u);
        const result = await nu.save();
        filename = "";

        res.send(nu);
    }else{
        res.json({
            reponse : false,
            message : "deja cin existe"
        })
    }
});



user.post("/get-users",[isValidToken,isAutorized],controller.getUsers);
user.get("/get-user-id/:id",controller.getUserId);
user.put("/put-user-id/:id",controller.putUserId);
user.delete("/del-user-id/:id",controller.delUserId);

module.exports = user ;