//-- index.js -- 

//ie: import 
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

//send data as text/html; application/json, other 
app.get("/test1",(req, res) =>{
    const _msg = "Node/Express test1 route";
    console.log(_msg)
    res.send(_msg);
});

//.../test2/?id=1
app.get("/test2",(req, res) =>{
    
    const _id = req.query.id;

    const _msg = `Node/Express test2 route id = ${_id}`;
    console.log(_msg)

    //send data as text/html; application/json, other 
    res.send(_msg);  //text/html 
});

//.../test3/1
app.get("/test3/:id",(req, res) =>{
    
    //const _id = req.params["id"];
    const _id = req.params.id;
    
    const _msg = `Node/Express test3 route id = ${_id}`;
    console.log(_msg)

    //send data as text/html; application/json, other 
    res.send(_msg);  //text/html 
});

app.get("/login",(req, res) =>{
    res.send("Node/Express login router");
});

//public http port - 80
//available localhost ports rang 3000 - 9000
const _PORT = 8080;

const _msg = `Node/express webserver 1.0.0 ...running on port: ${_PORT}`;

//-- continiously run server listeing at port 8080
app.listen(_PORT, ()=>{
    console.log(_msg);
});


