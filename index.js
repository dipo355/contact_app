const express = require("express")
const app = express()
app.use(express.urlencoded({extended:true}))
const mongoose = require("mongoose")
app.set("view engine" , "ejs")
const router = require("./routes/user.router.js")

//setting up the port
app.listen(PORT , (err) => {
    if(err){console.log("server has failed"), err}
    else{console.log("server has started")}
})


// connecting to mongodb
mongoose.connect(URI)
.then( () => {
  console.log("mongodb has started")
})
.catch ((err) => {
  console.log("mongodb has failed" , err)
})

app.use("/user" , router)



