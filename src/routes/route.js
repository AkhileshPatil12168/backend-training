const express = require('express');
const router = express.Router();
const userController= require("../controllers/newUserController")
const mid1=require('../middleware/mid1')


router.get("/test-me", mid1.mid1, function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

router.get("/users/:userId", mid1.mid1,  userController.checkToken)

router.put("/users/:userId",mid1.mid1, userController.updatedUser)

router.delete("/deleteUser/:userId", mid1.mid1, userController.deleteUser)


module.exports = router;