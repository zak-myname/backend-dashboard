const express = require("express");
const cros = require("cors");

require("./config/connect");
const app = express();
app.use(express.json());
app.use(cros({origin:'http://localhost:4200'}))


const users = require("./router/users");
app.use("/user",users);



const sign = require("./router/sign");
app.use("/sign",sign);

const login = require("./router/login");
app.use("/login",login);

const access = require("./router/access");
app.use("/access",access);


app.listen(3000,()=>{
    console.log("server work !");
})
