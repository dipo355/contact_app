const contactModel = require("../models/user.model.js")
let allusers = []

const signup = (req, res) => {
    res.render("signup")
}

const registerUser = (req,res) => {
    let form = new contactModel(req.body)
    form.save()
    .then(()=>{
      console.log("form is succesfully saved")
      allusers.push(req.body)
      res.redirect("dashboard")
    })
    .catch((err)=>{
        console.log("form is not saved",err);
    })
}

const displayDashboard = (req,res) => {
    contactModel.find()
    .then((user)=>{
        res.render("dashboard" , {allusers:user})
    })
}

const displayMore = (req,res) => {
   let id = req.body.id;
   contactModel.findById(id)
   .then((user) => {
       res.render("more" , {user:user})
})
}



const deletinguser = (req,res) => {
    contactModel.findByIdAndDelete(req.body.id)
    .then(() =>{
      console.log("succesfully deleted");
      console.log(req.body.id);
      res.redirect("/user/dashboard")
    })
    .catch((err) =>{
      console.log("info not deleted" , err);
    } )
}

const editinguser = (req,res) => {
    let {firstname, lastname, phonenumber, email, description, address} = req.body
    contactModel.findByIdAndUpdate(req.body.id,{firstname, lastname, phonenumber, email, description, address})
    .then(() => {
      console.log("successfully edited")
      res.redirect("dashboard")
    })
    .catch((err) => {
      console.log('new details not saved' , err);
    })
}

module.exports = {signup,registerUser,displayDashboard,displayMore,deletinguser, editinguser}