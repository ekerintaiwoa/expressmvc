
const userModel = require("../models/user")
const db = require("../../config/mongodb");
const { ObjectId } = require("mongodb");


exports.getUserCollection = ()=>{

   return db.getCollection("user")

}






exports.add = ( model ,cb)=>{

// access collection

//const collection = db.getCollection("user") ;
this.getUserCollection().insertOne({

name: model.name ,
password: model.password ,
email : model.email ,
gender : model.gender


}).then(()=>{

  cb() 
},(err)=>{

   throw new Error(err)

})



}


exports.update  = (model, cb)=>{
// get collection
//const collection = db.getCollection("user") ;
// define how to find the document
const filter = { _id: ObjectId ( model._id)  } ;

  console.log(model._id) ;
  console.log(model.password) ;




  // define what 
const update = {$set:

   { 
       name : model.name,
       password : model.password ,
       gender : model.gender

}


} 

this.getUserCollection().findOneAndUpdate(filter,update)
.then(()=>{

    cb()

},err=>{
    console.log(err)
} )



}



exports.getByID  = (id,cb)=>{

   // step 1 get collection

 //  const collection = db.getCollection("user") ;

   // find data

 this.getUserCollection().findOne({_id:ObjectId(id)})

   .then((user)=>{
       cb(user)
   },err=>{
       
       console.log(err)

   })



}

 ;






 
exports.delete = (id,cb)=>{

   // step 1 get collection

 //  const collection = db.getCollection("user") ;

   // find data

 this.getUserCollection().deleteOne({_id:ObjectId(id)})

   .then(()=>{
       cb()
   },err=>{
       
       console.log(err)

   })



}

 

exports.getByEmail =(email,cb)=>{


this.getUserCollection().findOne({email:email})
.then((record)=>{
   cb(record)
},err=>console.log(err)
)

}
