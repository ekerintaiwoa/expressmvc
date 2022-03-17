
const path = require("path");
const UserModel = require("../model/user") ;
const repo = require("../repositories/user") ;

exports.getRegisterView = (req,res)=>{

  
    //res.send("this is register view") ;
    res.sendFile(path.join(__dirname,"../views/registeration.html")) ;

    // res.sendFile("C:/Users/taiwo/Documents/expressmvc/src/user/views/registeration.html")

}  



exports.register = (req,res) =>{

    const newUser  = new UserModel(req.body.name,req.body.email,req.body.password,req.body.gender);
   
      repo.add(newUser,()=>{
   
        res.sendFile(path.join(__dirname,"../../shared/views/home.html")) ;
   
      })
   
   
   }  ;
   