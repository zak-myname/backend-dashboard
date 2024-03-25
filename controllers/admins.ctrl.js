const userAdmin = require("../model/Admin.model");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")

controller = {};


controller.addAdmin = async (req,res) => {
    try{
        u = req.body;
        nu = new userAdmin(u);
        ru = await nu.save();
        res.send(ru)
    }catch{
        (err)=>{
            res.json({
                reponse : false
            })
        }
    }
};


controller.getAdmins = async (req,res) => {
    try{
        const result = await userAdmin.find();
        res.send(result);
    }catch{
        (err) => {
            res.json({
                reponse : false ,
                message : err
            })
        }
    }

};

controller.getAdmin = async (req,res) => {
    try{
        const id = req.params.id;
        const result = await userAdmin.findById({_id:id});
        res.send(result);
    }catch{
        (err) => {
            res.json({
                reponse : false ,
                message : err
            })
        }
    }
};


controller.putAdmin = async (req,res) => {
    try{
        const id = req.params.id;
        const puser = req.body;
        const result = await userAdmin.findByIdAndUpdate({_id:id},puser);
        res.send(result);
    }catch{
        (err) => {
            res.json({
                reponse : false ,
                message : err
            })
        }
    } 
};

controller.delAdmin = async (req,res) => {
    try{
        const id = req.params.id;
        const result = await userAdmin.findByIdAndDelete({_id:id});
        res.send(result);
    }catch{
        (err) => {
            res.json({
                reponse : false ,
                message : err
            })
        }
    } 
};

module.exports = controller ;