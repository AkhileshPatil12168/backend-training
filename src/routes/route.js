const express = require('express');
const router = express.Router();
//const UserModel= require("../models/userModel.js")
//const UserController= require("../controllers/userController")
const bookController= require('../controllers/bookController')

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createUser", UserController.createUser  )
// router.get("/getUsersData", UserController.getUsersData)


//books info routs
router.post("/creatBookInfo", bookController.creatBookInfo )
router.get("/getBookInfo", bookController.getBookInfo )

module.exports = router;