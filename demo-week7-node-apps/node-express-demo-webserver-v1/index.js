const express = require("express")
const app = express();

//-- routes -- 
//-- GET requesst -- 
app.get("/",(req, res) =>{
    //response 
    const _msg = "Node/Express webserver v1.0.1";
    console.log(_msg)
    res.send(_msg);
});

app.get("/test1",(req, res) =>{
    res.send("Node/Express test1 router");
});

app.get("/login",(req, res) =>{
    res.send("Node/Express login router");
});

//available localhost ports rang 3000 - 9000
const _PORT = 8080;

const _msg = `Node/express webserver 1.0.0 ...running on port: ${_PORT}`;

//-- continiously run server listeing at port 8080
app.listen(_PORT, ()=>{
    console.log(_msg);
});


