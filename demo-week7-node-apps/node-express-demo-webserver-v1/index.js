const express = require("express")
const app = express();

const _PORT =8080;

const _msg = `Node/express webserver 1.0.0 ...running on port ${_PORT}`;

app.get("/",(req,res)=>{
    res.send("Node/Express webserver v1.0.0");
});


app.get("/test1",(req,res)=>{
    res.send("Node/Express test1 router");
});


app.get("/login",(req,res)=>{
    res.send("Node/Express login router");
});

app.listen(_PORT, ()=>{
    console.log(_msg)
});


