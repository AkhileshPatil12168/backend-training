const orderModel = require('../models/orderModel')
const userModel = require('../models/userModel')
const productModel = require('../models/productModel')
const mongoose = require('mongoose')


const createOrder = async (req, res) => {
    let data = req.body
    const isFree = req.headers//["isfreeappuser"]

    if (isFree.isfreeappuser === 'true') data.isFreeAppUser = true
    else data.isFreeAppUser = false
    //to convert the string value "true" into boolean
    let type = typeof (isFree.isfreeappuser)

    let checkUserId = mongoose.Types.ObjectId.isValid(data.userId)//retrun ture or false
    let checkProductId = mongoose.Types.ObjectId.isValid(data.productId)
    //to validate the ObjectId is valide type.

    if (!data.userId) return res.send("userId  is not writen")
    else if (checkUserId == false) return res.send("userId  is incorrect")

    if (!data.productId) return res.send("productId OR is not writen")
    else if (checkProductId == false) return res.send("productId OR is incorrect")


    let user = await userModel.findById(data.userId)
    if (user == null) return res.send("user not found")

    if (user.isFreeAppUser != data.isFreeAppUser) return res.send("isFreeAppUser value is different")
    //to check the users isFreeAppUser and header isFreeAppUser value are same

    let product = await productModel.findById(data.productId)
    if (product == null) return res.send("product not found")

    const productPrize = product.price

    if (user.isFreeAppUser == false) {
        if (user.balance >= productPrize) {
            await userModel.findByIdAndUpdate(data.userId, { $inc: { balance: -productPrize } })
            data.amount = productPrize
            const orderDetails = await orderModel.create(data)
            res.send(orderDetails)
        }
        else return res.send("you don't have money.")
    } else {
        data.amount = 0
        const orderDetails = await orderModel.create(data)
        res.send(orderDetails)
    }

}

module.exports.createOrder = createOrder
