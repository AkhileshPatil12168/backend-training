const mongoose = require('mongoose')
const moment = require('moment')
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = mongoose.Schema({

    userId: {
        type: ObjectId,
        ref: 'user'
    },
    productId: {
        type: ObjectId,
        ref: 'product'
    },
    amount: Number,
    isFreeAppUser: Boolean,
    date: {
        type: String,
        default: moment().format('DD/MM/YYYY')
    }
}, { timestamps: true })

module.exports = mongoose.model('order', orderSchema) 