const express = require("express");
const controller = require("../controllers/admins.ctrl");
const admins = express.Router();
const multer = require("multer");
const bcrypt = require("bcrypt");
const User = require("../model/Admin.model");
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

admins.post("/add-admin",loadimg.any('image'),async (req,res) => {
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


admins.post("/add-admin",controller.addAdmin);
admins.get("/get-admins",controller.getAdmins);
admins.get("/get-admin/:id",controller.getAdmin);
admins.put("/put-admin/:id",controller.putAdmin);
admins.delete("/del-admin/:id",controller.delAdmin);

module.exports = admins ;