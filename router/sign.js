const express = require("express");
const multer = require("multer");
const sign = express.Router();
const User = require("../model/user.model");
const bcrypt = require("bcrypt");

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

sign.post("" , loadimg.any('image'),async (req,res) => {
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
            res.send(nu._id);
        }else{
            res.json({
                reponse : false,
                message : "deja cin existe"
            })
        }
});

module.exports = sign ;