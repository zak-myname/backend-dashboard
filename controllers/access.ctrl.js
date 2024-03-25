const mongoose = require("mongoose");
const Access = require("../model/access.model");
const controller = {};


controller.addTypeAccess = async (req, res) => {
    /*
    try {
        u = req.body; // name of new type
        access = getAccess;// with id 65c1fa4a832f59c9f0f6d7f8
        access.access.push(
            {
                label: u,
                c: false,
                r: false,
                u: false,
                d: false
            }
        )
        ru = await putAccess; // object is access with id 65c1fa4a832f59c9f0f6d7f8
        res.send(ru)
    } catch {
        (err) => {
            res.json({
                reponse: false
            })
        }
    }
*/
};



controller.addAccess = async (req, res) => {
    try {
        u = req.body;
        nu = new Access(u);
        ru = await nu.save();
        res.send(ru)
    } catch {
        (err) => {
            res.json({
                reponse: false
            })
        }
    }

};

controller.getAccess = async (req, res) => {
    try {
        id = req.params.id;
        result = await Access.findOne({ idUser: id });
        if (result == null) {
            result = await Access.findOne({ idUser: "65c1fa4a832f59c9f0f6d7f8" });
        }
        res.send(result)
    } catch {
        (err) => {
            res.json({
                reponse: false,
                message: err
            })
        }
    }
};

controller.putAccess = async (req, res) => {
    try {
        id = req.params.id;
        puser = req.body;
        const result = await Access.findOneAndUpdate({ idUser: id }, puser);
        res.send(result)
    } catch {
        (err) => {
            res.json({
                reponse: false,
                message: err
            })
        }
    }
};

controller.delAccessId = async (req, res) => {
    try {
        id = req.params.id;
        result = await Access.findByIdAndDelete({ idUser: id })
        res.json(result)
    } catch {
        (err) => {
            res.json({
                reponse: false,
                message: err
            })
        }
    };
};




module.exports = controller;