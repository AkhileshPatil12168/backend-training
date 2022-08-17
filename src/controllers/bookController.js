const bookModel=require('../models/bookModel')

const createBook=async (req, res) =>{
    let data=req.body
    let bookData= await bookModel.create(data)
    res.send(bookData)
}


const bookList=async (req, res) =>{
    let allbooks=await bookModel.find().select({bookName :1, authourName :1, _id:0})
    res.send(allbooks)
}

const BooksByYear=async (req, res) =>{
    let bookYear=req.body
    let bookData=await bookModel.find(bookYear); 
    res.send({bookData})
}

const particularBooks=async (req, res) =>{
    let anyBook=req.body
    let bookData=await bookModel.find(anyBook); 
    res.send({bookData})
}

const bookINR=async (req, res) =>{
    let allbooks=await bookModel.find({"price.indianPrize":{$in:["100INR","200INR","500INR"]}})
    res.send(allbooks)
}

const RandomBooks =async (req, res) =>{
    let allbooks=await bookModel.find({$or :[{stockAvailable:true}, {totalPages:{$gt:500}}]})
    res.send(allbooks)
}


module.exports.createBook=createBook;
module.exports.bookList=bookList;
module.exports.BooksByYear=BooksByYear;
module.exports.particularBooks=particularBooks;
module.exports.bookINR=bookINR;
module.exports.RandomBooks=RandomBooks;