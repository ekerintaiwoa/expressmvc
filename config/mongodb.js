// import mongodb 

const mongoDbClient = require("mongodb").MongoClient ;



// connect to the mongodb string 
const url = "mongodb+srv://emmanuel:01052022@cluster0.0j3fa.mongodb.net/TwitterApp1?retryWrites=true&w=majority"



// connect to the mongodb databases
 
var dbClient ;

exports.connect = ()=>{

   mongoDbClient.connect(url)

   .then((client)=>{

        dbClient = client ;
       console.log("mongobd is connected")

   },(err)=>{

    console.log(err)
   })

}



exports.getCollection = (name)=>{

    return  dbClient.db("TwitterApp1").collection(name) ;


}