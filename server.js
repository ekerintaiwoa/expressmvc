
const express = require("express") ;
const userRoutes = require("./src/user/routes/user") ;
const path = require("path") ;

const bodyParser = require("body-parser") ;

const mongodb = require("./config/mongodb");


const server = express() ;
mongodb.connect() ;


server .use(bodyParser.urlencoded({extended:false})) ;


server.use("/user/",userRoutes) ;



server.listen(3200) ;


// for every request that starts with /user 


server.get("/" ,(req,res)=>{

   // res.sendFile("./src/shared/views/home.html")
   res.sendFile(path.join(__dirname,"./src/shared/views/home.html")) ;

}) ;

console.log("server is listening") ;
