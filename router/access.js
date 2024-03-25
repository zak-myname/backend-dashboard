const express = require("express");
const controller = require("../controllers/access.ctrl");
const access = express.Router();

access.post("/add-type-access",controller.addTypeAccess);
access.post("/add-access",controller.addAccess);
access.get("/get-access-id/:id",controller.getAccess);
access.put("/put-access-id/:id",controller.putAccess);
access.delete("/del-access-id/:id",controller.delAccessId);

module.exports = access ;