const express = require("express")
const router = express.Router()
const { signup, registerUser, displayDashboard, deletinguser, editinguser, displayMore } = require("../controller/user.controller.js")

router.get('/' , signup)

router.post("/register",  registerUser)

router.get("/dashboard" , displayDashboard)

router.get("/info" , signup)

router.post("/more" , displayMore )

router.post("/edit" , editinguser )

router.post("/delete" , deletinguser )

module.exports = router