const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        require: true
    },

    authourName: String,

    price: {
        indianPrize: String,
        europeanPrize: String
    },
    year: {
        type: Number,
        default: 2021
    },

    tags: [String],

    totalPages: Number,

    stockAvailable: Boolean

}, { timestamps: true })

module.exports = mongoose.model('NewBook', bookSchema)