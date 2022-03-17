
const express = require("express") ;

const server = express() ;


server.listen(3200) ;


server.get("/" ,(req,res)=>{

    res.send("you are connected to mvc")

}) ;

console.log("server is listening") ;
