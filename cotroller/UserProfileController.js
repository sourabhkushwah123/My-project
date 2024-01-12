const routes= require("express").Router();
const jwt = require("jsonwebtoken")

routes.get("/",(req,res)=>{
    let token = req.headers.authorization;
    let obj = jwt.decode(token, "the stepping stone");
    console.log(obj);
    res.send({name : "souravh"});
});

module.exports=routes ;``