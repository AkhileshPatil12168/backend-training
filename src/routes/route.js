const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')
const userController = require('../controllers/newUserController')
const orderController = require('../controllers/orderController')
const middleware= require('../middlewares/commonMiddlewares')


router.get("/test", function (req, res) {
    // res.send("My first ever api!")
    const obj = {
        name: "akhilesh",
        city: "kolhapur",
        pinCode: 00001
    }

    obj.phNo = 9075
    obj["phNo"] = 8856

    console.log(obj.name)
    console.log(obj["name", "city"])

    console.log(obj.phNo)
    console.log(obj["phNo"])
    res.send("hello")

})

router.post('/createProduct', productController.createProduct)
router.post('/createUser',middleware.mid1, userController.createUser)
router.post('/createOrder', middleware.mid1, orderController.createOrder)


module.exports = router;