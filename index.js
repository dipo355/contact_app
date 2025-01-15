const express = require("express")
const app = express()
app.use(express.urlencoded({extended:true}))
const mongoose = require("mongoose")
app.set("view engine" , "ejs")
URI = "mongodb+srv://oyedejioladipupo10:Dipsycee2007@cluster1.fzxyx.mongodb.net/jumia1_db?retryWrites=true&w=majority&appName=Cluster1"
require("dotenv").config()
const router = require("./routes/user.router.js")

//setting up the port
app.listen(process.env.PORT , (err) => {
    if(err){console.log("server has failed"), err}
    else{console.log("server has started")
         console.log(process.env.PORT);
    }
})


// connecting to mongodb
mongoose.connect(process.env.URI )
.then( () => {
  console.log("mongodb has started")
  console.log(process.env.URI);
})
.catch ((err) => {
  console.log("mongodb has failed" , err)
})

app.use("/user" , router)



