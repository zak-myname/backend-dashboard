const mongoose = require("mongoose");
const User = require("../model/user.model");
const controller = {};

controller.addUser = async (req,res) =>{
    try{
        u = req.body;
        nu = new User(u);
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

controller.getUsers = async (req,res) =>{
    try{
        const result = await User.find();
        res.send(result)
    }catch{
        (err)=>{
            res.json({
                reponse : false ,
                message : err
            })
        }
    }
};

controller.getUserId = async (req,res) =>{
    try{
        id = req.params.id;
        const result = await User.findById({_id:id});
        res.send(result)
    }catch{
        (err)=>{
            res.json({
                reponse : false ,
                message : err
            })
        }
    }
};

controller.putUserId = async (req,res) =>{
    try{
        id = req.params.id;
        puser = req.body;
        const result = await User.findByIdAndUpdate({_id:id},puser);
        res.send(result)
    }catch{
        (err)=>{
            res.json({
                reponse : false ,
                message : err
            })
        }
    }
};

controller.delUserId = async (req,res) =>{
    try{
        id = req.params.id;
        result = await User.findByIdAndDelete({_id:id})
        res.json(result)
    }catch{(err) => {
        res.json({
            reponse : false,
            message : err
        })
    }};
};

module.exports = controller ;