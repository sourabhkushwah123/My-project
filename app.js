const express = require("express");
const app = express();
const routes= require("./routes/AllRoutes")
const cors= require ("cors");

//live server code
const root = require("path").join(__dirname,"build");
app.use(express.static(__dirname+"/assets"));
app.use(express.static(root));

app.use(express.json());
app.use(express.urlencoded({extended : true})); 
app.use(cors());
app.use(routes);


//for live
app.get("*",(req,res)=>{
    res.sendFile("index.html",{root});
});

const port = process.env.PORT || 8080;
app.listen(port, ()=>{
console.log("sever running WITH port",port)
});