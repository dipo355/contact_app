const mongoose = require("mongoose")

//setting up the schema
let contactInfo = mongoose.Schema({
    firstname : {type:String , required:true},
    lastname : {type:String , required:false},
    phonenumber: {type:Number , required:true},
    email : {type:String , required:true , unique:[true,"email already exist"]},
    description : {type: String , required:true},
    address : {type: String , required:true},
    resgistrationDate : {type: Date , default: Date.now}
 })
 
 //MODELS
 let contactModel = mongoose.model("contact_collections",contactInfo)

 module.exports = contactModel
