const mongoose =require('mongoose');

const bookSchema= new mongoose.Schema({
    bookName : {
        type:String,
        unique : true,
        requrired : true
    },

    authorName : {
        type:String,
        requrired : true
    },
    
    category : String,
    year : Number

}, {timestamps : true});

module.exports = mongoose.model('Book', bookSchema)